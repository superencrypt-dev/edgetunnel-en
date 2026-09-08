# ⌨️ Deploy via Wrangler CLI

Full local control. Best if you already use the terminal.

## Prerequisites

- Node.js 18+ (`node --version`)
- A Cloudflare account

> Prefer zero local tools? Use the [Dashboard Workers guide](install-dashboard-workers.md) instead — it needs only a browser.

## Step 1 — Clone and install

```bash
git clone https://github.com/superencrypt-dev/edgetunnel-en.git
cd edgetunnel-en
```

## Step 2 — Log in to Cloudflare

```bash
npx wrangler login
```

A browser window opens — authorize the CLI.

## Step 3 — Create and bind a KV namespace

```bash
npx wrangler kv namespace create KV
```

Copy the `id` from the output into `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "KV"
id = "<the id you just got>"
```

## Step 4 — Set your UUID

Edit `wrangler.toml`:

```toml
[vars]
UUID = "<your-uuidv4>"
```

Generate one: `cat /proc/sys/kernel/random/uuid` (Linux/macOS) or `[guid]::NewGuid().ToString()` (PowerShell).

Optional — separate admin password:

```toml
[vars]
UUID = "<your-uuidv4>"
ADMIN = "<your-admin-password>"
```

## Step 5 — Deploy

```bash
npx wrangler deploy
```

Output shows your URL: `https://<name>.<subdomain>.workers.dev`

## Step 6 — Install the English admin panel

```bash
npx wrangler kv key put --binding KV 'admin_en.html' --path panel/admin_en.html --remote
npx wrangler kv key put --binding KV 'login_en.html'  --path panel/login_en.html  --remote
```

## Step 7 — Verify

```bash
curl "https://<your-worker>/version?uuid=<your-uuid>"
# → {"Version":...}
```

Panel: `https://<your-worker>/login` — password = `ADMIN` (or `UUID`).
Subscription link is shown in the panel.

## Updating later

```bash
git pull
npx wrangler deploy
npx wrangler kv key put --binding KV 'admin_en.html' --path panel/admin_en.html --remote
npx wrangler kv key put --binding KV 'login_en.html'  --path panel/login_en.html  --remote
```

## Useful commands

```bash
npx wrangler tail                      # live logs (set DEBUG=1 for verbose)
npx wrangler kv key list --binding KV --remote
npx wrangler deployments list
```

For a custom domain, see [custom-domain.md](custom-domain.md).
