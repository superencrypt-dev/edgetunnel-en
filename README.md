# 🚀 edgetunnel-en

**English edition of [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel)** — a Cloudflare Workers/Pages edge tunnel supporting VLESS, Trojan, and Shadowsocks, with a fully English admin panel, docs, and runtime output.

[![License](https://img.shields.io/github/license/superencrypt-dev/edgetunnel-en?style=flat-square)](LICENSE)
[![Base project](https://img.shields.io/badge/based%20on-cmliu%2Fedgetunnel-blue?style=flat-square)](https://github.com/cmliu/edgetunnel)

---

## 🚀 One-Click Deploy

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/superencrypt-dev/edgetunnel-en)

**The fastest path — everything (Git repo, UUID, KV) is configured in one form:**

1. Click the button (or **Workers & Pages → Create → Continue with GitHub**)
2. Pick your GitHub account → choose **Clone a public repository via Git URL** → paste:
   `https://github.com/superencrypt-dev/edgetunnel-en`
3. In the **Set up your application** form:
   - **Project name** — becomes `<name>.<subdomain>.workers.dev`
   - **Select KV namespace** — choose **+ Create new** and name it (the `KV` binding is created automatically from wrangler.toml)
   - **UUID** — enter any UUIDv4 (generate: `cat /proc/sys/kernel/random/uuid`)
   - **Build command** — leave empty
   - Optional: check **Create private Git repository** to keep the copy in your GitHub private
4. Click **Deploy** → done

**What the flow creates:**

| Where | What |
|---|---|
| Your GitHub account | A copy of this repo (CI connected — every push to it auto-redeploys) |
| Your Cloudflare account | The Worker, a KV namespace, and the `UUID` variable |

**After deploying:**

- Panel: `https://<project-name>.<subdomain>.workers.dev/login` — password = *** `UUID` you entered
- The **English panel works immediately** — no KV upload needed (the worker fetches the translated panel from this repo automatically)
- Subscription link is shown in the panel → import into your client
- Optional: add an `ADMIN` variable for a separate admin password
- Recommended: bind a **custom domain** (workers.dev is blocked by some ISPs) — Workers → Settings → Domains & Routes → Add Custom Domain → use a **subdomain** (e.g. `proxy.yourdomain.com`, never the root domain)

## ✨ Features

- 🛡️ **Protocols**: VLESS, Trojan, Shadowsocks (AEAD) — over WebSocket, gRPC, and XHTTP transports
- 📊 **English admin panel**: live config editing, operation logs, usage statistics (no Chinese UI)
- 🔄 **Subscription system**: auto-generated nodes, Clash / sing-box / Surge / Loon / Quantumult X auto-detection
- ⚡ **Performance**: ProxyIP rotation, SOCKS5/HTTP(S)/TURN/SSTP chained proxies, preferred-IP APIs, race dialing
- 🌐 **Multi-platform**: works with v2rayN, v2rayNG, Clash-family, Shadowrocket, Hiddify, Karing, and more
- 🧾 **English changelog** included

## 🔑 Environment Variables

| Variable | Required | Example | Purpose |
|---|---|---|---|
| `UUID` | ❌ | `90cd4a77-…` | Fix the node UUID (UUIDv4 only); also the default admin password |
| `ADMIN` | ❌ | `123456` | Separate admin panel password (recommended) |
| `KEY` | ❌ | `anything` | Quick-sub path key; changes the subscription token derivation |
| `PROXYIP` | ❌ | `proxyip.example.net:443` | Global default ProxyIP |
| `URL` | ❌ | `https://example.com` or `1101` | Fake-page address for unauthenticated visitors |
| `GO2SOCKS5` | ❌ | `*.example.com` | Domains forced through SOCKS5 (`,`-separated, `*` wildcard) |
| `HOST` | ❌ | `a.com,b.com` | Additional hosts for subscriptions |
| `PATH` | ❌ | `/secret` | Base path requirement for WebSocket connections |
| `DEBUG` | ❌ | `1` | Verbose logging (CLI `wrangler tail` or dashboard Logs) |
| `OFF_LOG` | ❌ | `1` | Disable KV operation logs |
| `BEST_SUB` | ❌ | `1` | Act as a preferred-IP subscription generator |
| `PRELOAD_RACE_DIAL` | ❌ | `1` | Pre-resolve A/AAAA via DoH and race-dial |
| `TCP_CONCURRENT_DIAL` | ❌ | `2` | Concurrent TCP dials (auto-drops to 1 on CN Mobile unless set) |
| `PROXY_CONCURRENT_DIAL` | ❌ | `1` | Concurrent proxy dials |

## 🖼️ English Admin Panel

The upstream project ships its panel in Chinese. This edition translates it —
the panel files live in [`panel/`](panel/) and are loaded into KV during setup
(two `wrangler kv key put` commands, or paste via the dashboard KV editor —
dashboard → Storage & Databases → KV → your namespace → Add entry (keys `admin_en.html` / `login_en.html`)).
The worker serves them automatically; the panel JS is bridged to the English
config schema by a built-in key adapter, so everything just works.

## 🔧 Advanced

Per-request proxy switching via PATH — no redeploy needed:

```url
/proxyip=proxyip.example.net
/socks5=user:pass@1.2.3.4:1080
/http=user:pass@1.2.3.4:8080
/trojan=1.2.3.4:1234
```

Set per environment variable instead (see the table above) — no redeploy needed.

## 📄 License & Attribution

This project is a translation fork of [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel)
and inherits its [GNU General Public License](LICENSE). All credit for the original
architecture and design goes to **cmliu** and the upstream contributors.

Changes in this edition: full English translation of the worker source, admin panel,
docs, and changelog; a config-key adapter for panel compatibility; bilingual CSV
preferred-IP parsing; and extra deployment documentation.
