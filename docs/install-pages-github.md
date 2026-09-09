# 🔄 Deploy via Cloudflare Pages + GitHub

Fork the repo, connect it to Pages, and every push auto-deploys.

## Step 1 — Fork the repository

> 💡 **No fork?** The Create flow also accepts **Clone a public repository via Git URL** —
> paste `https://github.com/superencrypt-dev/edgetunnel-en` instead of forking. This creates
> a repo copy in your GitHub account automatically (same CI benefits).

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

### Via the Cloudflare dashboard (no terminal needed)

1. Open the panel files from your local clone (`panel/admin_en.html` and
   `panel/login_en.html`) in a text editor and copy their full content
   (clone first: `git clone https://github.com/superencrypt-dev/edgetunnel-en.git` — requires
   your GitHub login since the repo is private)
2. Dashboard → **Storage & Databases** → **KV** → click the namespace bound as `KV`
3. **Add entry** → key: `admin_en.html`, value: paste the copied content → **Add entry**
4. Repeat with key `login_en.html` and the login content
5. Hard-refresh your `/admin` page (Ctrl+Shift+R)

> The files are large (admin ≈ 860 KB) — if your browser struggles to copy from the raw view,
> use the "Raw" button and Ctrl+A → Ctrl+C, or download and open with a text editor.
> If pasting is impossible for you, the [Wrangler CLI](install-wrangler-cli.md#step-6--install-the-english-admin-panel)
> does the same in 2 commands.

> The binding must be named `KV` — adjust the keys' location accordingly if you named it differently.

## Step 6 — Access

- Panel: `https://<project>.pages.dev/login`
- Subscription link: shown in the panel

## Auto-updates

Whenever you sync your fork with upstream (`Sync fork` button on GitHub), Cloudflare Pages redeploys automatically.

## Custom domain

See [custom-domain.md](custom-domain.md).
