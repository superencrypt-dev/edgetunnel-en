# 📱 Client Setup

After deploying, import the subscription into your client.

## Get the subscription link

Open the admin panel (`/login` → password), copy the subscription link, which looks like:

```
https://<your-worker-domain>/sub?token=***<TOKEN>
```

Or add the `b64` parameter for plain base64 output:

```
https://<your-worker-domain>/sub?token=***<TOKEN>&b64=1
```

## Windows

| Client | Notes |
|---|---|
| [v2rayN](https://github.com/2dust/v2rayN/releases) | Subscriptions → Subscription settings → paste URL → Update |
| [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) | Profiles → New → paste URL |
| [Hiddify](https://github.com/hiddify/hiddify-app/releases) | + New profile → paste URL |
| [Karing](https://github.com/KaringX/karing/releases) | Add subscription → paste URL |

Open the link with the client, or paste the URL into its subscription field. For Clash-family clients use the URL without `b64` — the panel auto-detects Clash UA.

## Android

| Client | Notes |
|---|---|
| [v2rayNG](https://github.com/2dust/v2rayNG/releases) | + → Subscription group → paste URL |
| [ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases) | Profile → New → paste URL |
| [NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases) | Menu → Subscription → paste URL |

## iOS

| Client | Notes |
|---|---|
| Shadowrocket | Home → + → Subscribe → paste URL |
| Surge | Profiles → Download from URL |
| [Hiddify](https://github.com/hiddify/hiddify-app/releases) | + → paste URL |
| Quantumult X | Settings → Subscription → paste URL |

## macOS

Same as Windows clients where available ([Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases), [FlClash](https://github.com/chen08209/FlClash/releases), [Hiddify](https://github.com/hiddify/hiddify-app/releases)), or Surge for macOS.

## Manual node link (single node)

Instead of the subscription you can copy a single node link from the panel and paste it into any client's "add node" dialog. Format:

```
vless://<uuid>@<address>:<port>?security=tls&type=ws&host=<worker-host>&sni=<worker-host>&path=%2F&encryption=none#<remark>
```

## Testing the connection

From any client, connect to a node, then verify:

```bash
curl --proxy socks5://127.0.0.1:10808 https://ifconfig.me
# → an IP from Cloudflare's range (e.g. 104.x / 172.x / 2a09:bac...)
```

Adjust the local port to whatever your client listens on.

## Troubleshooting

- **No nodes in the subscription** — check the token in the URL; a wrong token returns the fake nginx page
- **Connects but no traffic** — workers.dev domain may be blocked by your ISP; add a [custom domain](custom-domain.md)
- **-1 errors / TLS issues in Xray clients** — update the client; recent Xray-core removed insecure TLS options
