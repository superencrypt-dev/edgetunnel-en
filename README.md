# edgetunnel-en

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/superencrypt-dev/edgetunnel-en)

English edition of **edgetunnel**: a VLESS / Trojan / Shadowsocks edge tunnel running on Cloudflare Workers or Pages, with a visual admin panel and automatic subscription generation for popular proxy clients.

> Based on [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) — see [Credits](#-credits) for full attribution.

---

## 📖 What This Is

- **Protocols**: VLESS, Trojan, Shadowsocks over WebSocket / XHTTP / gRPC, with TLS and AEAD support.
- **Admin panel**: browser dashboard to edit node config, view logs, check chained proxies, and query Cloudflare usage.
- **Subscriptions**: auto-generated links for Clash, Sing-box, Surge, v2rayN, Shadowrocket, and more, with optional obfuscation/conversion.
- **Proxy chaining**: per-request switching between direct, custom ProxyIP, SOCKS5 / HTTP / HTTPS / TURN / SSTP upstreams, and Trojan fallback.

---

## ✅ Prerequisites

1. A Cloudflare account (free plan works).
2. One **KV namespace** for logs and runtime data — auto-provisioned by the Deploy button; for CLI/Pages methods bind it manually as variable `KV` after deploy, then redeploy.
3. (Optional) A subdomain on Cloudflare DNS if you want a custom domain instead of `*.workers.dev` / `*.pages.dev`.

---

## 🚀 Deployment (single file — frontend inlined)

[`_worker.js`](./_worker.js) is fully self-contained: the login page, admin panel, `noADMIN`/`noKV` pages, and PATH presets from [`public/`](./public) are inlined into it at build time (see `tools/build-inline.mjs`), so no asset bindings are needed. It runs on Workers, Pages, and dashboard code paste. One deployment carries everything.

### 0. Cloudflare Pages — Upload assets (recommended, no Git/CLI needed)

1. Download this repo as a ZIP (`Code` → `Download ZIP` on GitHub) and extract it.
2. Re-zip **the contents** so `_worker.js` sits at the ZIP root (not inside a subfolder — Pages only executes a root-level `_worker.js`).
3. Pages console → `Upload assets` → name the project (e.g. `edgetunnel`) → upload the ZIP → `Deploy site`.
4. Create the KV namespace (one time per account): `Workers & Pages` → `KV` → `Create a namespace` (e.g. `edt-kv`).
5. Back in the project: `Settings` → `Environment variables` → define for **Production**: `ADMIN` = your admin password → `Save`.
6. `Settings` → `Bindings` → `Add` → `KV namespace`: variable name `KV` → select the namespace → `Save`.
7. `Deployments` → `Create deployment` → re-upload the same ZIP → `Save and deploy` (activates the variable + binding).
8. Open `https://<project>.pages.dev/login` and sign in (custom domain optional via `Custom domains`).
9. Every update = repeat step 7 with a fresh ZIP (env vars and bindings are kept).

> **KV is mandatory** — without the `KV` binding (and no `UUID` set) you get the `noKV` page, config is not saved, logs stay empty, and quick-sub (`/<KEY>`) does not work.

### A. Pages — Connect to Git (auto-deploy on push)

1. Fork this repo.
2. Pages console → `Connect to Git` → select the fork (`Build command` empty is fine — Pages deploys the root `_worker.js` directly).
3. Under `Environment variables (advanced)` add `ADMIN`, bind `KV` (variable name `KV`) as in method 0 steps 4–6 → `Save and Deploy`.
4. Open `https://<project>.pages.dev/login` and sign in. Every push to `main` redeploys automatically.

### B. One-click Deploy to Workers (fastest alternative)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/superencrypt-dev/edgetunnel-en)

Click the button, authorize Cloudflare, and a Worker named `edgetunnel-en` is created from this repo. The setup page lets you customize the resource names, then Cloudflare **auto-provisions a fresh KV namespace** and binds it as `KV` — no manual binding needed. It also prompts for the `ADMIN` secret (declared in [`.dev.vars.example`](./.dev.vars.example), placeholder only — no real password in this repo). After deploy, open `https://<your-worker>.workers.dev/login` and sign in (custom domain optional via `Triggers` → `Add custom domain`).

### C. Wrangler CLI / Workers Builds

```bash
git clone https://github.com/superencrypt-dev/edgetunnel-en.git
cd edgetunnel-en
wrangler login
wrangler deploy
```

`wrangler.toml` has `keep_vars = true`, so dashboard variables survive redeploys. Then set the `ADMIN` variable and the `KV` binding in the dashboard (`Settings` → `Variables` / `Bindings`) and redeploy. For Git-connected Workers Builds, connect the fork instead — builds run `wrangler deploy` automatically on push.

### D. Dashboard code paste (Workers)

Paste [`_worker.js`](./_worker.js) into a Worker's editor and **Deploy** (the file is self-contained since the frontend is inlined). Then add `ADMIN` (`Settings` → `Variables`) and bind `KV` (`Settings` → `Bindings` → `KV namespace`, variable name `KV`), redeploy, and open `/login`.

---

## 🔑 Environment Variables

Only `ADMIN` is required. The rest tune behavior:

| Variable | Required | Example | Description |
| :--- | :---: | :--- | :--- |
| `ADMIN` | ✅ | `change-me-strong-password` | Admin panel login password. Also accepts `PASSWORD`, `password`, `pswd`, `TOKEN`, `KEY`, `UUID` as aliases |
| `KEY` | ❌ | `my-secret-key` | Quick-subscription path key — visiting `/<KEY>` redirects to your subscription link |
| `UUID` | ❌ | `90cd4a77-141a-43c9-991b-08263cfe9c10` | Force a fixed UUID (standard **UUIDv4** only, otherwise nodes break) |
| `HOST` | ❌ | `vless.example.com` | Override the node host list (comma-separated; replaces auto-detected hosts) |
| `PATH` | ❌ | `/mypath` | Override the node path (must start with `/`) |
| `PROXYIP` | ❌ | `proxyip.example.com:443` | Global custom reverse-proxy IP / domain |
| `URL` | ❌ | `https://example.com` | Homepage disguise URL (default: built-in nginx page; `1101` also accepted) |
| `GO2SOCKS5` | ❌ | `blog.example.com,*.example.net,*google.com` | Force-SOCKS5 list, comma-separated (`*` = global). Appended to the built-in list |
| `DEBUG` | ❌ | `1` or `true` | Developer mode: enables console debug logging (off by default) |
| `OFF_LOG` | ❌ | `1` or `true` | Disables KV log recording (logging is on by default) |
| `BEST_SUB` | ❌ | `1` or `true` | Preferred-subscription generator mode (off by default) |
| `PRELOAD_RACE_DIAL` | ❌ | `1` or `true` | Preload race dialing for first-time direct dials (off by default) |
| `TCP_CONCURRENT_DIAL` | ❌ | `2` | Concurrent TCP dials (default `2`; pins the value instead of auto-downgrading) |
| `PROXY_CONCURRENT_DIAL` | ❌ | `1` | Concurrent reverse-proxy dials (default `1`; higher = faster but rotates IPs more) |

Changing `ADMIN` or `KEY` regenerates the subscription TOKEN and node UUID. Setting `UUID` pins both.

---

## 💻 Usage

### 1. Admin panel

- Open `https://<your-domain>/login`, enter the `ADMIN` password → redirected to `/admin`.
- From the panel you can: edit node/subscription config, inspect logs (stored in KV as `log.json`, viewable at `/admin/log.json`), test chained proxies (`/admin/check?socks5=…` / `http` / `https` / `turn` / `sstp`), and query Cloudflare account usage (needs Email + Global API Key or API Token + Account ID).
- The login cookie lasts 24 hours (`auth`, HttpOnly, Secure, SameSite=Lax).

### 2. Subscriptions

- Quick link: `https://<your-domain>/<KEY>` → 302 redirect to `/sub?token=…`.
- Paste the final `/sub?...` URL into your client as a subscription link. The panel shows ready-to-copy links per client format (Clash / Sing-box / Base64 / Surge / …).
- Per-client conversion options (UDP, XUDP, TLS 1.3, node sorting, …) are configured in the panel and passed through to the converter backend.

### 3. Per-request proxy switching via PATH

Append one of these to any node path (works as `/xxx=…` or `/?xxx=…`):

```url
/proxyip=proxyip.example.com
/?proxyip=proxyip.example.com
```

```url
/socks5=user:password@127.0.0.1:1080
/socks://dXNlcjpwYXNzd29yZA==@127.0.0.1:1080   (enables global SOCKS5)
/socks5://user:password@127.0.0.1:1080          (enables global SOCKS5)
```

```url
/http=user:password@127.0.0.1:1080
/http://user:password@127.0.0.1:8080           (enables global SOCKS5)
```

Trojan fallback (self-hosted relay: Trojan inbound only; the fallback must share the password, no WebSocket, no TLS — UDP is passed through to the fallback):

```url
/trojan=1.1.1.1:1234
```

### 4. Homepage disguise

Visitors hitting `/` without a valid path see the disguise page: the `URL` variable target, or the built-in nginx page by default.

---

## 🖥️ Client Compatibility

| Platform | Recommended clients |
| :--- | :--- |
| **Windows** | [v2rayN](https://github.com/2dust/v2rayN/releases), [Hiddify](https://github.com/hiddify/hiddify-app/releases), [FlClash](https://github.com/chen08209/FlClash/releases), [mihomo-party](https://github.com/mihomo-party-org/clash-party/releases), [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases), [Karing](https://github.com/KaringX/karing/releases) |
| **Android** | [v2rayNG](https://github.com/2dust/v2rayNG/releases), [ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases/), [FlClash](https://github.com/chen08209/FlClash/releases), [NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases), [Hiddify](https://github.com/hiddify/hiddify-app/releases), [Karing](https://github.com/KaringX/karing/releases) |
| **iOS** | Surge, Shadowrocket, Stash, [Hiddify](https://github.com/hiddify/hiddify-app/releases), Loon, Egern, Quantumult X |
| **macOS** | [FlClash](https://github.com/chen08209/FlClash/releases), [mihomo-party](https://github.com/mihomo-party-org/clash-party/releases), [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases), Surge |
| **HarmonyOS** | [ClashBox](https://github.com/xiaobaigroup/ClashBox/releases) |

---

## 🛠️ Troubleshooting

| Symptom | Likely cause / fix |
| :--- | :--- |
| **Error 1101** page | Worker threw during render — check `DEBUG=1` logs; usually a bad `URL` disguise value or a broken custom-domain binding |
| `404` with disguise page on every route | `ADMIN` variable is not set — add it and redeploy |
| Admin shows no logs / `/admin/log.json` is `[]` | KV namespace not bound, or `OFF_LOG=1` is set |
| Subscription link returns nothing | Wrong `KEY`/TOKEN, or non-UUIDv4 `UUID`; regenerate via the panel |
| Slow or flaky connections | Raise `TCP_CONCURRENT_DIAL` / `PROXY_CONCURRENT_DIAL`, or pin a `PROXYIP` |

---

## ⚠️ Disclaimer

1. For **educational, research, and personal security-testing** purposes only.
2. You must comply with the laws of your region when deploying and using this code.
3. The maintainers accept no liability for misuse or for any direct or indirect damages.

---

## 🙏 Credits

- Upstream project: [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) (full history, sponsors, and contributor list live there).
- Bundled frontend source mirror: [`superencrypt-dev/edt-pages-en`](https://github.com/superencrypt-dev/edt-pages-en) (synced into [`public/`](./public)).
- Transport/proxy ideas borrowed from: [zizifn/edgetunnel](https://github.com/zizifn/edgetunnel), [6Kmfi6HP/EDtunnel](https://github.com/6Kmfi6HP/EDtunnel), [ToiCF/GrainTCP](https://github.com/ToiCF/GrainTCP), [ToiCF/CF-Workers-HTTPS](https://github.com/ToiCF/CF-Workers-HTTPS), [ToiCF/CF-Workers-TURN](https://github.com/ToiCF/CF-Workers-TURN), [ToiCF/CF-Workers-SoftEther](https://github.com/ToiCF/CF-Workers-SoftEther), [eooce/Cloudflare-proxy](https://github.com/eooce/Cloudflare-proxy).

## 📝 License

GPL-2.0 — see [LICENSE](./LICENSE) (same license as upstream).

## 🛠️ For Contributors

`public/` holds the editable frontend source (mirrored from [`edt-pages-en`](https://github.com/superencrypt-dev/edt-pages-en)). After changing anything in `public/`, regenerate the bundle before committing:

```bash
node tools/build-inline.mjs
node --check _worker.js
```

Commit both `public/` and the rebuilt `_worker.js`.

`public/samples/` holds legacy mock fixtures (old `index.html`, `sub`, `version`, `locations`, sample API payloads) — they are **not** bundled or served; the worker generates those routes live. Only the 5 files read by `tools/build-inline.mjs` ship inside `_worker.js`.
