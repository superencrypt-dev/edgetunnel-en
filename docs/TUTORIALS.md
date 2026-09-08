# 📚 Tutorials Index

Pick the deployment method that fits you, then set up your client.

## Deployment

| # | Method | Difficulty | Best for |
|---|---|---|---|
| 1 | [Cloudflare Dashboard — Workers](install-dashboard-workers.md) | ⭐ Easiest | First-timers, no tools needed |
| 2 | [Cloudflare Dashboard — Pages Upload](install-pages-upload.md) | ⭐ Easiest | Dashboard users who prefer Pages |
| 3 | [Cloudflare Pages + GitHub](install-pages-github.md) | ⭐⭐ | Auto-deploy on every push |
| 4 | [Wrangler CLI](install-wrangler-cli.md) | ⭐⭐ | Developers, full local control |

## After deployment

- [Client setup (v2rayN, v2rayNG, Clash, sing-box, Shadowrocket)](clients.md)
- [Custom domain setup](custom-domain.md)
- [Admin panel & post-install configuration](after-install.md)
- [Advanced: PATH-based proxy switching & environment variables](advanced.md)

## Quick reference

- **Admin panel**: `https://<your-worker-domain>/login` — password = your `ADMIN` variable (or `UUID` if unset)
- **Subscription**: `https://<your-worker-domain>/sub?token=***<TOKEN>` — token shown in the admin panel
- **Version check**: `https://<your-worker-domain>/version?uuid=<your-uuid>`

---

## ❓ "I don't want to install Wrangler/Node.js at all"

**You never have to.** The Wrangler CLI is optional in every path above.

What Wrangler is used for elsewhere → the no-CLI alternative:

| Task | CLI way | No-CLI way |
|---|---|---|
| Create the Worker/Pages project | `wrangler deploy` | Dashboard: **Workers & Pages → Create** |
| Upload the worker code | included in deploy | Dashboard code editor: paste `_worker.js` (guide 1) or upload ZIP (guide 2) |
| Set `UUID` / variables | `wrangler.toml` `[vars]` | Dashboard: Settings → Variables & Secrets |
| Create + bind KV | `wrangler kv namespace create` | Dashboard: Settings → Bindings → KV |
| Install English panel files | `wrangler kv key put` (2 commands) | Dashboard KV editor: copy-paste the 2 files (see each guide's panel step) |
| View logs | `wrangler tail` | Dashboard: your Worker → **Logs** → Begin log stream (needs `DEBUG=1`) |
| Redeploy after config change | `wrangler deploy` | Dashboard editor → Deploy, or Pages → Create new deployment |

**The only thing the CLI does faster** is uploading the two English panel files (2 commands vs manual copy-paste). Everything else is fully doable in the browser.
