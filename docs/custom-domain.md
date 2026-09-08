# 🌐 Custom Domain Setup

`*.workers.dev` / `*.pages.dev` domains are blocked by some ISPs (especially in CN). Binding your own domain fixes this and is the single most impactful post-install step.

## Requirements

- A domain whose DNS is already managed by Cloudflare (Nameservers pointing to CF). Free domains work (e.g. from Cloudns, DuckDNS), paid ones too.

## Workers

1. **Workers & Pages** → your worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain**
2. Enter a **subdomain**, e.g. `proxy.yourdomain.com`
   - ⚠️ Do NOT use the root domain (`yourdomain.com`) — use a subdomain
3. Cloudflare validates and issues the TLS certificate automatically (1–2 minutes)
4. Your worker is now reachable at `https://proxy.yourdomain.com`

> The subscription URL host changes → **the sub token changes too** (it's derived from the host). Re-copy your subscription link after adding a domain.

## Pages

1. **Workers & Pages** → your Pages project → **Custom domains** → **Set up a custom domain**
2. Enter the subdomain, e.g. `lizi.yourdomain.com`
3. Cloudflare auto-adds the CNAME record if the domain is on the same CF account
4. If the domain's DNS is elsewhere: add a `CNAME` record there pointing to `<project>.pages.dev`, then click **Activate**

## Multiple hosts

You can bind several domains — each becomes a valid host for nodes and subscriptions. In the admin panel, `HOSTS` controls which hosts appear in generated subscriptions.
