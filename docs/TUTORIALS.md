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
