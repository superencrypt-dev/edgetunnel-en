# 📤 Deploy via Cloudflare Pages — Upload

Prefer Pages over Workers? Upload a ZIP directly from the dashboard.

## Step 1 — Download the source

Download the repository as ZIP:

https://github.com/superencrypt-dev/edgetunnel-en/archive/refs/heads/main.zip

## Step 2 — Create the Pages project

1. Log in to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** tab
2. Choose **Upload assets**
3. Name your project (e.g. `my-proxy`) → **Create project**
4. Upload the `main.zip` you downloaded → **Deploy site**

## Step 3 — Set your UUID

1. After deployment click **Continue to project**
2. **Settings** → **Variables and Secrets** → **Add** (choose **Production** environment)
3. Name: `UUID`, Value: your UUIDv4 (see [dashboard-workers guide](install-dashboard-workers.md#step-3--set-your-uuid) for generators)
4. **Save**

> Recommended: also add `ADMIN` with a separate admin password, so your panel password ≠ node UUID.

## Step 4 — Redeploy once

Variables only take effect on a new deployment:

1. Go to the **Deployments** tab
2. Click **Create new deployment** → upload `main.zip` again → **Save and deploy**

## Step 5 — Bind a KV namespace

1. **Settings** → **Bindings** → **+ Add** → **KV Namespace**
2. Select an existing namespace or create a new one
3. **Variable name must be exactly `KV`** → **Save**
4. Retry the deployment (step 4) if prompted

## Step 6 — Install the English admin panel (recommended)

### Via the Cloudflare dashboard (no terminal needed)

1. Open the panel files in your browser and copy their full content:
   - https://raw.githubusercontent.com/superencrypt-dev/edgetunnel-en/main/panel/admin_en.html
   - https://raw.githubusercontent.com/superencrypt-dev/edgetunnel-en/main/panel/login_en.html
2. Dashboard → **Storage & Databases** → **KV** → click the namespace bound as `KV`
3. **Add entry** → key: `admin_en.html`, value: paste the copied content → **Add entry**
4. Repeat with key `login_en.html` and the login content
5. Hard-refresh your `/admin` page (Ctrl+Shift+R)

> The files are large (admin ≈ 860 KB) — if your browser struggles to copy from the raw view,
> use the "Raw" button and Ctrl+A → Ctrl+C, or download and open with a text editor.
> If pasting is impossible for you, the [Wrangler CLI](install-wrangler-cli.md#step-6--install-the-english-admin-panel)
> does the same in 2 commands.

## Step 7 — Access

- Panel: `https://<project>.pages.dev/login`
- Subscription: shown in the panel, or build it yourself — see [after-install.md](after-install.md)

For a custom domain, see [custom-domain.md](custom-domain.md).
