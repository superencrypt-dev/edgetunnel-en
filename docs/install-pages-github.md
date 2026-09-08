# 🔄 Deploy via Cloudflare Pages + GitHub

Fork the repo, connect it to Pages, and every push auto-deploys.

## Step 1 — Fork the repository

1. Log in to GitHub and open https://github.com/superencrypt-dev/edgetunnel-en
2. Click **Fork** → **Create fork**
3. Give the original a ⭐ Star while you're there 🙂

## Step 2 — Connect to Cloudflare Pages

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** tab
2. **Connect to Git** → authorize GitHub → select your forked `edgetunnel-en` repo → **Begin setup**
3. Build settings: leave defaults (no build command needed — the repo root is the deploy output)
4. **Save and deploy**

## Step 3 — Set your UUID

1. **Settings** → **Environment variables (advanced)**
2. Add for **Production** (and Preview if you want): Name `UUID`, Value: your UUIDv4
3. Recommended: also add `ADMIN` with a separate admin password
4. **Save and deploy**

## Step 4 — Bind a KV namespace

1. **Settings** → **Bindings** → **+ Add** → **KV Namespace**
2. Select or create a namespace → **Variable name must be exactly `KV`** → **Save**
3. Redeploy once if prompted

## Step 5 — Install the English admin panel (recommended)

```bash
npx wrangler kv key put --binding KV 'admin_en.html' --path panel/admin_en.html --remote
npx wrangler kv key put --binding KV 'login_en.html'  --path panel/login_en.html  --remote
```

> Replace `--binding KV` with your binding if you named it differently.

## Step 6 — Access

- Panel: `https://<project>.pages.dev/login`
- Subscription link: shown in the panel

## Auto-updates

Whenever you sync your fork with upstream (`Sync fork` button on GitHub), Cloudflare Pages redeploys automatically.

## Custom domain

See [custom-domain.md](custom-domain.md).
