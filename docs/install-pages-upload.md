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

From a terminal with Node.js:

```bash
npx wrangler kv key put --binding KV 'admin_en.html' --path panel/admin_en.html --remote
npx wrangler kv key put --binding KV 'login_en.html'  --path panel/login_en.html  --remote
```

## Step 7 — Access

- Panel: `https://<project>.pages.dev/login`
- Subscription: shown in the panel, or build it yourself — see [after-install.md](after-install.md)

For a custom domain, see [custom-domain.md](custom-domain.md).
