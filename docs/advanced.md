# 🛠 Advanced Usage

## Switch proxy scheme via PATH

The worker accepts per-request proxy overrides in the URL path or query — no redeploy needed.

### ProxyIP

```url
/proxyip=proxyip.cmliussss.net
/?proxyip=proxyip.cmliussss.net
```

### SOCKS5

```url
/socks5=user:pass@1.2.3.4:1080
/?socks5=user:pass@1.2.3.4:1080
/socks://<base64(user:pass)>@1.2.3.4:1080        # activates global SOCKS5
/socks5://user:pass@1.2.3.4:1080                  # activates global SOCKS5
```

### HTTP

```url
/http=user:pass@1.2.3.4:8080
/http://user:pass@1.2.3.4:8080                    # activates global HTTP
```

### Trojan fallback (self-hosted pairing)

Trojan inbound only; the fallback must use the same password, non-WebSocket, non-TLS. UDP is passed through to the fallback.

```url
/trojan=1.1.1.1:1234
```

## Environment variables

Set in dashboard (Workers → Settings → Variables) or `wrangler.toml` `[vars]`.

| Variable | Required | Example | Description |
|---|---|---|---|
| `ADMIN` | ✅ | `123456` | Admin panel password |
| `UUID` | ❌ | `90cd4a77-…` | Fix the node UUID (UUIDv4 only). Also fixes the sub token |
| `KEY` | ❌ | `anything` | Quick-sub path + part of the token derivation |
| `PROXYIP` | ❌ | `proxyip.example.net:443` | Global default ProxyIP |
| `URL` | ❌ | `https://example.com` or `1101` | Fake-page address for unauthenticated visitors |
| `GO2SOCKS5` | ❌ | `*.example.com` | Domains forced through SOCKS5 (`,`-separated, `*` wildcard) |
| `HOST` | ❌ | `a.com,b.com` | Additional hosts for subscriptions |
| `PATH` | ❌ | `/secret` | Base path requirement for WebSocket connections |
| `DEBUG` | ❌ | `1` | Verbose logging (visible via `wrangler tail`) |
| `OFF_LOG` | ❌ | `1` | Disable KV operation logs |
| `BEST_SUB` | ❌ | `1` | Act as a preferred-IP subscription generator |
| `PRELOAD_RACE_DIAL` | ❌ | `1` | Pre-resolve A/AAAA via DoH and race-dial |
| `TCP_CONCURRENT_DIAL` | ❌ | `2` | Concurrent TCP dials (default 2; auto-drops to 1 on CN Mobile unless set) |
| `PROXY_CONCURRENT_DIAL` | ❌ | `1` | Concurrent proxy dials (default 1) |

## How the subscription token works

```
token = md5( md5hex(host + uuid)[7:27] )
```

- `host` = the host in the URL you access
- Changing `UUID` or `ADMIN` or `KEY` → new token → old subscription links die
- The daily "sub-converter token" is derived from this + day index, used when the upstream converter fetches your sub

## Probing / verification

```bash
# is the worker alive & the UUID correct?
curl "https://<worker>/version?uuid=<uuid>"
# → {"Version":20260904162413}

# subscription
curl "https://<worker>/sub?token=***<TOKEN>&b64=1"

# end-to-end through a node (adjust local port to your client)
curl --proxy socks5://127.0.0.1:10808 https://ifconfig.me
```

## Performance knobs

- `TCP_CONCURRENT_DIAL` / `PROXY_CONCURRENT_DIAL` — higher = faster connect, more IP churn
- `PRELOAD_RACE_DIAL=1` — resolve via DoH first and race A/AAAA candidates (helps flaky DNS regions)
- ProxyIP pool — set several in `PROXYIP` (comma-separated) and the worker rotates them

## Recommended deploy topology

1. Deploy the Worker
2. Bind KV + set `UUID` (+ `ADMIN`)
3. Add a **custom domain** (workers.dev is often blocked)
4. Install the English panel assets
5. Import the subscription into your client
6. Verify via `curl --proxy ... https://ifconfig.me`
