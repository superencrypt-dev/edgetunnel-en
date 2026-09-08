# ⚙️ Admin Panel & Post-Install Configuration

## Logging in

1. Visit `https://<your-worker-domain>/login`
2. Password = your `ADMIN` variable, or the `UUID` if `ADMIN` is not set
3. The auth cookie is valid for 24 h and tied to your User-Agent

## First-run config

On the first `/admin` visit the worker writes a default `config.json` into KV.
After that, everything is editable from the panel — no redeploy needed for most settings.

### Important panels

| Panel | What it does |
|---|---|
| **Basic settings** | Node host, UUID, PATH, protocol (VLESS/Trojan/SS), transport (WS/gRPC/XHTTP) |
| **Subscription generation** | Local preferred-IP pool (random count/port) or custom generator URL; subscription name |
| **Sub conversion** | Backend URL, config preset, UDP/XUDP/TLS1.3 flags |
| **Proxy config** | PROXYIP, SOCKS5/HTTP(S)/TURN/SSTP outbound + global mode, path templates |
| **CF usage** | Optional Cloudflare account credentials to display Workers/Pages quota |

### Reset config

`⚠️ Reset Config` button reinitializes everything to defaults (irreversible).

## English panel installation

If the panel appears in Chinese, install the English assets:

```bash
npx wrangler kv key put --binding KV 'admin_en.html' --path panel/admin_en.html --remote
npx wrangler kv key put --binding KV 'login_en.html'  --path panel/login_en.html  --remote
```

## Operation logs

`📋 View operation logs` in the panel shows the last actions (logins, config saves, sub fetches) stored in KV. Logs are capped at ~4 MB — oldest entries are trimmed automatically.

## Subscription behavior

- Token = `md5md5(host + uuid)`; changing `UUID`, `ADMIN`, or `KEY` invalidates old subscription links
- `?b64=1` forces base64 mixed output; Clash/sing-box/surge/loon/quantumult UAs are auto-detected
- Client IP switching: the worker rotates preferred IPs per request

## kv keys reference

| Key | Purpose |
|---|---|
| `config.json` | Main worker config (auto-created, editable via panel) |
| `log.json` | Operation logs |
| `ADD.txt` | Custom preferred-IP list (one `ip:port#remark` per line) |
| `cf.json` | Cloudflare usage API credentials (optional) |
| `tg.json` | Telegram bot notification config (optional) |
| `admin_en.html` / `login_en.html` | English panel pages |

## Telegram notifications (optional)

In the panel: **TG Notifications** → set Bot Token + Chat ID → verify. Requires a bot from @BotFather and a chat with the bot.
