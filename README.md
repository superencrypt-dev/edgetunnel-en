# edgetunnel-en

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
2. One **KV namespace** for logs and runtime data (bind it as variable `KV` after deploy).
3. (Optional) A subdomain on Cloudflare DNS if you want a custom domain instead of `*.workers.dev` / `*.pages.dev`.

---

## 🚀 Deployment (pick one — all three recommended)

### A. Cloudflare Workers (dashboard)

1. In the Workers console, create a new Worker and open the editor.
2. Paste the full contents of [`_worker.js`](./_worker.js) into the editor and **Deploy**.
3. Go to `Settings` → `Variables` → `Add variable`: name `ADMIN`, value = your admin password → `Save`.
4. Go to `Bindings` → `Add binding` → `KV namespace`: variable name `KV`, select or create a namespace → `Add binding`.
5. (Optional) `Triggers` → `Add custom domain`, e.g. `vless.example.com`, and wait for the certificate.
6. Open `https://<your-domain>/login` and sign in.

### B. Cloudflare Pages — Upload assets (no Git needed)

1. Download this repo as a ZIP (`Code` → `Download ZIP` on GitHub).
2. In the Pages console choose `Upload assets`, name the project (e.g. `edgetunnel`), upload the ZIP → `Deploy site`.
3. `Settings` → `Environment variables` → define for **Production**: `ADMIN` = your admin password → `Save`.
4. `Deployments` → `Create deployment`, re-upload the same ZIP → `Save and deploy`.
5. `Settings` → `Bindings` → `Add` → `KV namespace`: variable name `KV` → `Save`, then retry the deployment.
6. (Optional) `Custom domains` → `Set up a custom domain` with a subdomain (not your apex domain), add the requested CNAME at your DNS provider → `Activate domain`.
7. Open `https://<your-domain>/login` and sign in.

### C. Cloudflare Pages — Connect to Git

1. Fork this repo to your own GitHub account.
2. In the Pages console choose `Connect to Git`, select the forked repo → `Begin setup`.
3. Under `Environment variables (advanced)` add `ADMIN` = your admin password → `Save and Deploy`.
4. Bind KV (`Settings` → `Bindings` → `KV namespace`, variable name `KV`) and redeploy.
5. (Optional) add a custom domain as in method B, step 6.
6. Open `https://<your-domain>/login` and sign in.

### D. Wrangler CLI (alternative)

This repo ships a [`wrangler.toml`](./wrangler.toml) (`keep_vars = true`, so dashboard variables survive redeploys):

```bash
wrangler login
wrangler deploy
```

Then set the `ADMIN` variable and the `KV` binding in the dashboard (`Settings` → `Variables` / `Bindings`).

---

## 🔑 Environment Variables

Only `ADMIN` is required. The rest tune behavior:

| Variable | Required | Example | Description |
| :--- | :---: | :--- | :--- |
| `ADMIN` | ✅ | `change-me-strong-password` | Admin panel login password. Also accepts `PASSWORD`, `password`, `pswd`, `TOKEN`, `KEY`, `UUID` as aliases |
| `KEY` | ❌ | `my-secret-key` | Quick-subscription path key — visiting `/<KEY>` redirects to your subscription link |
| `UUID` | ❌ | `90cd4a77-141a-43c9-991b-08263cfe9c10` | Force a fixed UUID (standard **UUIDv4** only, otherwise nodes break) |
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
| **Error 1101** page | Worker threw during render — check `DEBUG=1` logs; usually a bad `URL` disguise value or broken custom-domain binding |
| `404` with disguise page on every route | `ADMIN` variable is not set — add it (Production env for Pages) and redeploy |
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
- Transport/proxy ideas borrowed from: [zizifn/edgetunnel](https://github.com/zizifn/edgetunnel), [6Kmfi6HP/EDtunnel](https://github.com/6Kmfi6HP/EDtunnel), [ToiCF/GrainTCP](https://github.com/ToiCF/GrainTCP), [ToiCF/CF-Workers-HTTPS](https://github.com/ToiCF/CF-Workers-HTTPS), [ToiCF/CF-Workers-TURN](https://github.com/ToiCF/CF-Workers-TURN), [ToiCF/CF-Workers-SoftEther](https://github.com/ToiCF/CF-Workers-SoftEther), [eooce/Cloudflare-proxy](https://github.com/eooce/Cloudflare-proxy).

## 📝 License

MIT — see [LICENSE](./LICENSE). History of functional changes lives in [CHANGELOG](./CHANGELOG).
