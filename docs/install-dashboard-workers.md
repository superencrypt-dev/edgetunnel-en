# ☁️ Deploy via Cloudflare Dashboard — Workers (Easiest)

No local tools required. Everything happens in the Cloudflare dashboard.

## Prerequisites

- A Cloudflare account (free plan works): https://dash.cloudflare.com/sign-up

## Step 1 — Create the Worker

1. Log in to https://dash.cloudflare.com
2. Go to **Workers & Pages** → **Create** → **Create Worker**
3. Name it (e.g. `my-proxy`) → click **Deploy** (the default hello-world is fine for now)

## Step 2 — Install the code

1. On the worker page click **Edit code**
2. Delete ALL the default code in the editor
3. Open https://raw.githubusercontent.com/superencrypt-dev/edgetunnel-en/main/_worker.js , copy everything, paste it into the editor
4. Click **Deploy** → confirm

## Step 3 — Set your UUID

1. Back on the worker page: **Settings** → **Variables & Secrets**
2. Click **Add** → type **Text**, name it `UUID`
3. Value: any UUIDv4. Generate one:
   - Linux/macOS: `cat /proc/sys/kernel/random/uuid`
   - Windows PowerShell: `[guid]::NewGuid().ToString()`
   - Or any online UUID generator
4. Click **Save**

> ⚠️ The `UUID` is your node identity AND your admin password (unless you set a separate `ADMIN` variable). Keep it secret.

## Step 4 — Bind a KV namespace

1. **Settings** → **Bindings** → **Add binding**
2. Select **KV Namespace** → click **Create new** → give it any name → **Add**
3. **Variable name must be exactly `KV`** → **Save**

> Without KV the worker still proxies, but the admin panel and saved config won't work.

## Step 5 — (Recommended) Install the English admin panel

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

(Skip this if you don't mind the panel being in Chinese — everything else works.)

## Step 6 — Log in to the admin panel

1. Visit `https://my-proxy.<your-subdomain>.workers.dev/login`
2. Password = your `UUID` value (or your `ADMIN` variable if you set one)

## Step 7 — Get your subscription

In the admin panel, open the subscription section and copy the link, which looks like:

```
https://my-proxy.<your-subdomain>.workers.dev/sub?token=***<TOKEN>
```

Now configure your client → see [clients.md](clients.md).

## Step 8 — (Recommended) Add a custom domain

`*.workers.dev` domains are blocked by some ISPs. See [custom-domain.md](custom-domain.md).

---

**Troubleshooting:** after changing variables, wait ~10 seconds and redeploy (or just reload). If the panel won't log in, double-check that you're using the SAME User-Agent you logged in with — the auth cookie is bound to UA.
