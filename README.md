# 🚀 edgetunnel 2.1
![Admin Panel](./img.png)

[![Stars](https://img.shields.io/github/stars/cmliu/edgetunnel?style=flat-square&logo=github)](https://github.com/cmliu/edgetunnel/stargazers)
[![Forks](https://img.shields.io/github/forks/cmliu/edgetunnel?style=flat-square&logo=github)](https://github.com/cmliu/edgetunnel/network/members)
[![License](https://img.shields.io/github/license/cmliu/edgetunnel?style=flat-square)](https://github.com/cmliu/edgetunnel/blob/main/LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-Group-blue?style=flat-square&logo=telegram)](https://t.me/CMLiussss)
[![YouTube](https://img.shields.io/badge/YouTube-Channel-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=LeT4jQUh8ok)
[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=flat-square&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/cmliu/edgetunnel)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/cmliu/edgetunnel)

---

## 📚 Detailed Tutorials (Bahasa Indonesia)

All guides live in the [`docs/`](docs/) directory:

| Guide | Description |
|---|---|
| [Deploy via Dashboard — Workers](docs/install-dashboard-workers.md) | Easiest, no local tools |
| [Deploy via Pages — Upload](docs/install-pages-upload.md) | Upload ZIP from dashboard |
| [Deploy via Pages + GitHub](docs/install-pages-github.md) | Auto-deploy from your fork |
| [Deploy via Wrangler CLI](docs/install-wrangler-cli.md) | Terminal-based deployment |
| [Client setup](docs/clients.md) | v2rayN/NG, Clash, sing-box, Shadowrocket, iOS |
| [Custom domain](docs/custom-domain.md) | Bind your own domain |
| [Admin panel & post-install](docs/after-install.md) | Config, logs, KV keys, Telegram |
| [Advanced usage](docs/advanced.md) | PATH proxy switching, env vars, tokens |

Or start from the index: [docs/TUTORIALS.md](docs/TUTORIALS.md)

---

## 📖 About the Project

**edgetunnel** is an edge-computing tunnel solution built on the CF Workers/Pages platform. It handles network traffic efficiently and provides a powerful admin panel with flexible node configuration.

- 🖥️ **Demo site**: [https://EDT-Pages.github.io/admin](https://EDT-Pages.github.io/admin)

### ✨ Key Features

- 🛡️ **Protocol support**: VLESS, Trojan, Shadowsocks and other mainstream protocols, with deep integration of encrypted transport.
- 📊 **Admin panel**: built-in visual backend supporting live config changes, log viewing, and traffic statistics.
- 🛠️ **Flexible deployment**: fully compatible with CF Workers and CF Pages (GitHub / upload).
- 🔄 **Subscription system**: built-in auto subscription generation and obfuscated conversion, compatible with mainstream clients (Clash, Sing-box, Surge, etc.).
- ⚡ **Performance boost**: custom ProxyIP, SOCKS5/HTTP chained proxy, and preferred-IP API support to optimize network latency.
- 🌐 **Multi-platform**: works perfectly on Windows, Android, iOS, macOS, and various soft-router firmwares.

---

## 💡 Quick Deployment
>[!TIP]
> 📖 **Detailed step-by-step guide**: [edgetunnel deployment guide](https://cmliussss.com/p/edt2/)

>[!WARNING]
> ⚠️ **Error 1101 issue**: [video explanation](https://www.youtube.com/watch?v=r4uVTEJptdE)

### ⚙️ Workers Deployment

<details>
<summary><code><strong>"Workers Deployment (Text Guide)"</strong></code></summary>

1. Deploy the CF Worker:
   - Create a new Worker in the CF Worker dashboard.
   - Paste the contents of [worker.js](https://github.com/cmliu/edgetunnel/blob/main/_worker.js) into the Worker editor.
   - In the `Settings` tab on the left, choose `Variables` > `Add Variable`.
     Set the variable name to **ADMIN** and the value to your admin password, then click `Save`.

2. Bind a KV namespace:
   - In the `Bindings` tab choose `Add Binding +` > `KV Namespace` > `Add Binding`, then select an existing namespace or create a new one to bind.
   - Set the `Variable name` to **KV**, then click `Add Binding`.

3. Bind a custom domain to the Worker:
   - In the Worker dashboard's `Triggers` tab, click `Add Custom Domain` below.
   - Enter a subdomain of a domain already moved to CF's DNS service, e.g. `vless.google.com`, then click `Add Custom Domain` and wait for the certificate to become active.

4. Access the panel:
   - Visit `https://vless.google.com/admin` and enter the admin password to log in.

</details>

### 🛠 Pages Upload Deployment **Highly recommended!!!** [Illustrated guide](https://cmliussss.com/p/edt2/)

<details>
<summary><code><strong>"Pages Upload Deployment (Text Guide)"</strong></code></summary>

1. Deploy CF Pages:
   - Download the [main.zip](https://github.com/cmliu/edgetunnel/archive/refs/heads/main.zip) file, and give the repo a Star !!!
   - In the CF Pages dashboard choose `Upload assets`, name your project and click `Create project`, then upload the downloaded [main.zip](https://github.com/cmliu/edgetunnel/archive/refs/heads/main.zip) file and click `Deploy site`.
   - After deployment click `Continue to project`, then choose `Settings` > `Environment variables` > **Define variables for Production** > `Add variable`.
     Set the variable name to **ADMIN** and the value to your admin password, then click `Save`.
   - Return to the `Deployments` tab, click `Create new deployment` at the bottom right, re-upload the [main.zip](https://github.com/cmliu/edgetunnel/archive/refs/heads/main.zip) file and click `Save and deploy`.

2. Bind a KV namespace:
   - In the `Settings` tab choose `Bindings` > `+ Add` > `KV Namespace`, then select an existing namespace or create a new one to bind.
   - Set the `Variable name` to **KV**, then click `Save` and retry the deployment.

3. Bind a CNAME custom domain to Pages: [video guide](https://www.youtube.com/watch?v=LeT4jQUh8ok&t=851s)
   - In the Pages dashboard's `Custom domains` tab, click `Set up a custom domain` below.
   - Enter your custom subdomain — do not use your root domain, e.g.:
     if your assigned domain is `fuck.cloudns.biz`, add the custom domain as `lizi.fuck.cloudns.biz`;
   - As required by CF, go back to your domain's DNS provider and add a CNAME record for the custom domain `lizi` pointing to `edgetunnel.pages.dev`, then click `Activate domain`.

4. Access the panel:
   - Visit `https://lizi.fuck.cloudns.biz/admin` and enter the admin password to log in.

</details>

### 🛠 Pages + GitHub Deployment

<details>
<summary><code><strong>"Pages + GitHub Deployment (Text Guide)"</strong></code></summary>

1. Deploy CF Pages:
   - Fork this project on GitHub first, and give it a Star !!!
   - In the CF Pages dashboard choose `Connect to Git`, select the `edgetunnel` project and click `Begin setup`.
   - On the `Set up builds and deployments` page, choose `Environment variables (advanced)` and `Add variable`.
     Set the variable name to **ADMIN** and the value to your admin password, then click `Save and deploy`.

2. Bind a KV namespace:
   - In the `Settings` tab choose `Bindings` > `+ Add` > `KV Namespace`, then select an existing namespace or create a new one to bind.
   - Set the `Variable name` to **KV**, then click `Save` and retry the deployment.

3. Bind a CNAME custom domain to Pages: [video guide](https://www.youtube.com/watch?v=LeT4jQUh8ok&t=851s)
   - In the Pages dashboard's `Custom domains` tab, click `Set up a custom domain` below.
   - Enter your custom subdomain — do not use your root domain, e.g.:
     if your assigned domain is `fuck.cloudns.biz`, add the custom domain as `lizi.fuck.cloudns.biz`;
   - As required by CF, go back to your domain's DNS provider and add a CNAME record for the custom domain `lizi` pointing to `edgetunnel.pages.dev`, then click `Activate domain`.

4. Access the panel:
   - Visit `https://lizi.fuck.cloudns.biz/admin` and enter the admin password to log in.

</details>

---

## 🖼️ English Admin Panel

The bundled admin panel and login page (served from the upstream static site) are in Chinese.
This repository ships English translations in the `panel/` directory. The worker serves them
automatically when the following KV keys exist — no code changes needed:

| KV key | File |
| :--- | :--- |
| `admin_en.html` | `panel/admin_en.html` |
| `login_en.html` | `panel/login_en.html` |

Upload them (requires the `KV` binding from the deployment steps above):

```
npx wrangler kv key put --binding KV 'admin_en.html' --path panel/admin_en.html --remote
npx wrangler kv key put --binding KV 'login_en.html'  --path panel/login_en.html  --remote
```

If the keys are missing, the worker falls back to the upstream Chinese pages.

> **Note:** the panel JavaScript still reads/writes the config using the legacy Chinese keys.
> The worker translates them automatically on `GET/POST /admin/config.json`, so the panel
> works unchanged against the English config schema.

---

## 🔑 Environment Variables

| Variable | Required | Example | Description |
| :--- | :---: | :--- | :--- |
| **ADMIN** | ✅ | `123456` | Admin panel login password |
| **KEY** | ❌ | `CMLiussss` | Quick-subscription path key; visiting `/CMLiussss` quickly fetches the nodes |
| **UUID** | ❌ | `90cd4a77-141a-43c9-991b-08263cfe9c10` | Force a fixed UUID; only **UUIDv4** standard format is supported |
| **PROXYIP** | ❌ | `proxyip.cmliussss.net:443` | Global custom reverse-proxy IP |
| **URL** | ❌ | `https://cloudflare-error-page-3th.pages.dev` | Default homepage fake-page address (a webpage URL or `1101`) |
| **GO2SOCKS5** | ❌ | `blog.cmliussss.com`,`*.ip111.cn`,`*google.com` | Force-list for SOCKS5 (`*` = global; separate domains with commas) |
| **DEBUG** | ❌ | `1` or `true` | **Developer mode**: debug logging (console.log) is **off** by default; set `1` or `true` to **enable** debug logging |
| **OFF_LOG** | ❌ | `1` or `true` | KV logging is **on** by default; set `1` or `true` to **disable** logging |
| **BEST_SUB** | ❌ | `1` or `true` | The **preferred-IP subscription generator** feature is **off** by default; set `1` or `true` to **enable** it |
| **PRELOAD_RACE_DIAL** | ❌ | `1` or `true` | **Preload race dialing** is **off** by default; set `1` or `true` to **enable** it |
| **TCP_CONCURRENT_DIAL**   | ❌ | `2` | **TCP concurrent dial count**, default `2`; once set, it no longer auto-drops to a single path on China Mobile networks |
| **PROXY_CONCURRENT_DIAL** | ❌ | `1` | **Proxy concurrent dial count**, default `1`; higher values connect faster but switch IPs more often |

---

## 🔧 Advanced Tips
To change **the TOKEN in your subscription URL** and **the UUID used for node verification**, modify these variables:
1. Changing the value of `ADMIN` or `KEY` randomly regenerates **the subscription TOKEN** and **the node verification UUID**.
2. Setting the `UUID` variable force-fixes **the subscription TOKEN** and **the node verification UUID** — it must be standard **UUIDv4** format, otherwise the nodes will not work.

This tool supports dynamically switching the underlying proxy scheme via the **PATH**:

- `PROXYIP` examples
   ```url
   /proxyip=proxyip.cmliussss.net
   /?proxyip=proxyip.cmliussss.net
   ```

- `SOCKS5` examples
   ```url
   /socks5=user:password@127.0.0.1:1080
   /?socks5=user:password@127.0.0.1:1080
   /socks://dXNlcjpwYXNzd29yZA==@127.0.0.1:1080 (activates global SOCKS5 by default)
   /socks5://user:password@127.0.0.1:1080 (activates global SOCKS5 by default)
   ```

- `HTTP proxy` examples
   ```url
   /http=user:password@127.0.0.1:1080
   /http://user:password@127.0.0.1:8080 (activates global SOCKS5 by default)
   ```

- `Trojan fallback` example (intended for self-hosted pairing: Trojan inbound only, and the fallback service must use the same password, non-WebSocket, non-TLS. UDP is passed through to the fallback — great performance, full functionality)
   ```url
   /trojan=1.1.1.1:1234
   ```

---

## 💻 Client Compatibility

| Platform | Recommended clients |
| :--- | :--- |
| **Windows** | [v2rayN](https://github.com/2dust/v2rayN/releases)、[Hiddify](https://github.com/hiddify/hiddify-app/releases)、[FlClash](https://github.com/chen08209/FlClash/releases)、[mihomo-party](https://github.com/mihomo-party-org/clash-party/releases)、[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)、[Clashmi](https://github.com/KaringX/clashmi/releases)、[FlyClash](https://github.com/GtxFury/FlyClash/releases)、[Karing](https://github.com/KaringX/karing/releases)、[Bettbox](https://github.com/appshubcc/Bettbox/releases) |
| **Android** | [v2rayNG](https://github.com/2dust/v2rayNG/releases)、[ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases/)、[FlClash](https://github.com/chen08209/FlClash/releases)、[Clashmi](https://github.com/KaringX/clashmi/releases)、[Hiddify](https://github.com/hiddify/hiddify-app/releases)、[NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)、[FlyClash](https://github.com/GtxFury/FlyClash/releases)、[Karing](https://github.com/KaringX/karing/releases)、[Bettbox](https://github.com/appshubcc/Bettbox/releases) |
| **iOS** | Surge、Shadowrocket、Stash、[Hiddify](https://github.com/hiddify/hiddify-app/releases)、Loon、Egern、[Clashmi](https://clashmi.app/download)、[Karing](https://karing.app/)、Quantumult X |
| **macOS** | [FlClash](https://github.com/chen08209/FlClash/releases)、[mihomo-party](https://github.com/mihomo-party-org/clash-party/releases)、[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)、Surge、[Clashmi](https://clashmi.app/download)、[Karing](https://karing.app/)、[FlyClash](https://github.com/GtxFury/FlyClash/releases) |
| **HarmonyOS** | [ClashBox](https://github.com/xiaobaigroup/ClashBox/releases) |
---

## ⭐ Project Popularity

![Stargazers over time](https://github.com/cmliu/cmliu/blob/main/star/edgetunnel.svg)

---

## 🙏 Acknowledgements
### 💖 Sponsors - providing cloud servers that keep the [subscription conversion service](https://sub.cmliussss.net/) running
- [Yuusei Network](https://yuusei.io/)
- [VMRack](https://www.vmrack.net?ref_code=5Zk7eNhbgL7)

### 🛠 Open-source code referenced
- [zizifn/edgetunnel](https://github.com/zizifn/edgetunnel)
- [3Kmfi6HP/EDtunnel](https://github.com/6Kmfi6HP/EDtunnel)
- [SHIJS1999/cloudflare-worker-vless-ip](https://github.com/SHIJS1999/cloudflare-worker-vless-ip)
- [Stanley-baby](https://github.com/Stanley-baby)
- [ACL4SSR](https://github.com/ACL4SSR/ACL4SSR/tree/master/Clash/config)
- [股神 (Stock God)](https://t.me/CF_NAT/38889)
- [Workers/Pages Metrics](https://t.me/zhetengsha/3382)
- [白嫖哥 (BestCFIP)](https://t.me/bestcfipas)
- [Mingyu](https://github.com/ymyuuu/workers-vless)
- [ToiCF/CF-Workers-HTTPS](https://github.com/ToiCF/CF-Workers-HTTPS)
- [ToiCF/CF-Workers-TURN](https://github.com/ToiCF/CF-Workers-TURN)
- [ToiCF/CF-Workers-SoftEther](https://github.com/ToiCF/CF-Workers-SoftEther)
- [eooce](https://github.com/eooce/Cloudflare-proxy)
- [Sukka](https://ip.skk.moe/)
- [zhangtaile](https://github.com/cmliu/edgetunnel/pull/999)
- [1345695](https://github.com/1345695/edcloudwasm)
- [ToiCF/GrainTCP](https://github.com/ToiCF/GrainTCP)
- [xream](https://github.com/cmliu/edgetunnel/pull/1359)

---

## ⚠️ Disclaimer

1. This project ("edgetunnel") is intended **for educational, scientific research, and personal security testing purposes only**.
2. Users must strictly comply with the laws and regulations of their region when downloading or using this project's code.
3. The author **cmliu** assumes no responsibility for any actions or consequences caused by misuse of this project's code.
4. This project is not liable for any direct or indirect damages arising from the use of this code.
5. It is recommended to delete all related deployments within 24 hours after testing is complete.

---

**If you find this project helpful, please give it a Star 🌟 — that means the most to me!**
