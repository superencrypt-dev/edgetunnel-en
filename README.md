# 🚀 edgetunnel-en

**English edition of [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel)** — a Cloudflare Workers/Pages edge tunnel supporting VLESS, Trojan, and Shadowsocks, with a fully English admin panel, docs, and runtime output.

[![License](https://img.shields.io/github/license/superencrypt-dev/edgetunnel-en?style=flat-square)](LICENSE)
[![Base project](https://img.shields.io/badge/based%20on-cmliu%2Fedgetunnel-blue?style=flat-square)](https://github.com/cmliu/edgetunnel)

---

## 🚀 One-Click Deploy

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/superencrypt-dev/edgetunnel-en)

Click the button, authorize Cloudflare with your GitHub account, and it will:

1. Clone this repo into your Cloudflare account
2. Create the Worker and the KV namespace automatically
3. Deploy everything

**After the deploy, finish these 3 steps:**

1. **Set your UUID** — Worker → Settings → Variables & Secrets → add `UUID` (any UUIDv4). Without it, clients can't connect.
2. **Install the English panel** (optional) — dashboard KV editor, 2 copy-paste entries — see [panel install](docs/install-dashboard-workers.md#step-5--recommended-install-the-english-admin-panel)
3. **Open** `https://<your-worker>.workers.dev/login` — password = your `UUID`

> If the automated KV provisioning fails, bind a KV namespace named `KV` manually (Settings → Bindings) and redeploy — details in [docs/install-dashboard-workers.md](docs/install-dashboard-workers.md).

## ✨ Features

- 🛡️ **Protocols**: VLESS, Trojan, Shadowsocks (AEAD) — over WebSocket, gRPC, and XHTTP transports
- 📊 **English admin panel**: live config editing, operation logs, usage statistics (no Chinese UI)
- 🔄 **Subscription system**: auto-generated nodes, Clash / sing-box / Surge / Loon / Quantumult X auto-detection
- ⚡ **Performance**: ProxyIP rotation, SOCKS5/HTTP(S)/TURN/SSTP chained proxies, preferred-IP APIs, race dialing
- 🌐 **Multi-platform**: works with v2rayN, v2rayNG, Clash-family, Shadowrocket, Hiddify, Karing, and more
- 🧾 **English changelog** and **Indonesian deployment tutorials** included

## 📚 Manual Deployment Tutorials (Bahasa Indonesia)

Prefer manual control over the one-click deploy? Pick a method — all in [`docs/`](docs/):

| # | Method | Difficulty | Best for |
|---|---|---|---|
| 1 | [Cloudflare Dashboard — Workers](docs/install-dashboard-workers.md) | ⭐ Easiest | First-timers, browser only |
| 2 | [Cloudflare Pages — Upload ZIP](docs/install-pages-upload.md) | ⭐ Easiest | Dashboard users who prefer Pages |
| 3 | [Cloudflare Pages + GitHub](docs/install-pages-github.md) | ⭐⭐ | Auto-deploy on every push |
| 4 | [Wrangler CLI](docs/install-wrangler-cli.md) | ⭐⭐ | Developers, terminal workflow |

> Wrangler is optional — every guide has a no-CLI alternative (see the "I don't want to install Wrangler" table in [docs/TUTORIALS.md](docs/TUTORIALS.md)).

After deployment:

- [Client setup](docs/clients.md) — v2rayN/NG, Clash, sing-box, Shadowrocket, iOS
- [Custom domain](docs/custom-domain.md) — bind your own domain
- [Admin panel & post-install config](docs/after-install.md)
- [Advanced usage](docs/advanced.md) — PATH proxy switching, environment variables, token math

## 🔑 Key Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `UUID` | ❌ | Fixes the node UUID (UUIDv4); also the default admin password |
| `ADMIN` | ❌ | Separate admin panel password (recommended) |
| `PROXYIP` | ❌ | Global default ProxyIP |
| `KEY` | ❌ | Changes the subscription token derivation |
| `DEBUG` | ❌ | `1` = verbose logs via `wrangler tail` / dashboard log stream |

Full list with all 14 variables: [docs/advanced.md](docs/advanced.md)

## 🖼️ English Admin Panel

The upstream project ships its panel in Chinese. This edition translates it —
the panel files live in [`panel/`](panel/) and are loaded into KV during setup
(two `wrangler kv key put` commands, or paste via the dashboard KV editor —
[step-by-step](docs/install-dashboard-workers.md#step-5--recommended-install-the-english-admin-panel)).
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

See [docs/advanced.md](docs/advanced.md) for the full reference.

## 📄 License & Attribution

This project is a translation fork of [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel)
and inherits its [GNU General Public License](LICENSE). All credit for the original
architecture and design goes to **cmliu** and the upstream contributors.

Changes in this edition: full English translation of the worker source, admin panel,
docs, and changelog; a config-key adapter for panel compatibility; bilingual CSV
preferred-IP parsing; and extra deployment documentation.
