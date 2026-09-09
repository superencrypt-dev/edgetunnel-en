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
- Optional: add an `ADMIN` variable for a separate admin password, and a [custom domain](docs/custom-domain.md) (workers.dev is blocked by some ISPs)

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
