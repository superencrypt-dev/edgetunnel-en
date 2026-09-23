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

## 📖 Project Overview

**edgetunnel** is an edge-computing tunnel decryption solution based on the CF Workers/Pages platform. It handles network traffic efficiently and provides a powerful admin panel with flexible node configuration capabilities.

- 🖥️ **Demo Site**: [https://EDT-Pages.github.io/admin](https://EDT-Pages.github.io/admin)

### ✨ Core Features

- 🛡️ **Protocol Support**: Supports major protocols such as VLESS, Trojan, and Shadowsocks, with deep integration of encrypted transport.
- 📊 **Admin Panel**: Built-in visual dashboard with live config edits, log viewing, and traffic statistics.
- 🛠️ **Flexible Deployment**: Fully compatible with CF Workers and CF Pages (GitHub / Upload).
- 🔄 **Subscription System**: Built-in automatic subscription generation and obfuscation conversion, compatible with popular clients (Clash, Sing-box, Surge, etc.).
- ⚡ **Performance Boost**: Supports custom ProxyIP, SOCKS5/HTTP chained proxies, and preferred-IP APIs to optimize network latency.
- 🌐 **Multi-Platform Support**: Works perfectly on Windows, Android, iOS, MacOS, and various router firmware.

---

## 💡 Quick Deploy
>[!TIP]
> 📖 **Detailed guide with screenshots**: [edgetunnel deployment guide](https://cmliussss.com/p/edt2/)

>[!WARNING]
> ⚠️ **Error 1101 issue**: [video explanation](https://www.youtube.com/watch?v=r4uVTEJptdE)

### ⚙️ Workers Deployment

<details>
<summary><code><strong>「 Workers deployment text guide 」</strong></code></summary>

1. Deploy a CF Worker:
   - Create a new Worker in the CF Workers console.
   - Paste the contents of [worker.js](https://github.com/cmliu/edgetunnel/blob/main/_worker.js) into the Worker editor.
   - On the left `Settings` tab, go to `Variables` > `Add variable`.
     Set the variable name to **ADMIN** and the value to your admin password, then click `Save`.

2. Bind a KV namespace:
   - On the `Bindings` tab, choose `Add binding +` > `KV namespace` > `Add binding`, then select an existing namespace or create a new one.
   - Set the `Variable name` to **KV**, then click `Add binding`.

3. Bind a custom domain to the Worker:
   - On the `Triggers` tab, click `Add custom domain` below.
   - Enter a subdomain already on Cloudflare DNS, e.g. `vless.google.com`, then click `Add custom domain` and wait for the certificate to take effect.

4. Open the admin panel:
   - Visit `https://vless.google.com/admin` and enter the admin password to log in.

</details>

### 🛠 Pages Upload Deployment **Highly recommended!!!** [Guide with screenshots](https://cmliussss.com/p/edt2/)

<details>
<summary><code><strong>「 Pages file-upload deployment text guide 」</strong></code></summary>

1. Deploy CF Pages:
   - Download the [main.zip](https://github.com/cmliu/edgetunnel/archive/refs/heads/main.zip) file, and give it a Star !!!
   - In the CF Pages console, choose `Upload assets`, name your project and click `Create project`, then upload the [main.zip](https://github.com/cmliu/edgetunnel/archive/refs/heads/main.zip) file and click `Deploy site`.
   - After deployment, click `Continue handling site`, then go to `Settings` > `Environment variables` > define variables for the **Production** environment > `Add variable`.
     Set the variable name to **ADMIN** and the value to your admin password, then click `Save`.
   - Go back to the `Deployments` tab, click `Create new deployment` at the bottom right, re-upload the [main.zip](https://github.com/cmliu/edgetunnel/archive/refs/heads/main.zip) file, then click `Save and deploy`.

2. Bind a KV namespace:
   - On the `Settings` tab, go to `Bindings` > `+ Add` > `KV namespace`, then select an existing namespace or create a new one.
   - Set the `Variable name` to **KV**, then click `Save` and redeploy.

3. Bind a CNAME custom domain to Pages: [video tutorial](https://www.youtube.com/watch?v=LeT4jQUh8ok&t=851s)
   - On the Pages console `Custom domains` tab, click `Set up a custom domain` below.
   - Enter your custom subdomain — do not use your root domain. For example:
     If your assigned domain is `fuck.cloudns.biz`, enter `lizi.fuck.cloudns.biz` as the custom domain;
   - As instructed by CF, go back to your DNS provider and add a CNAME record for `lizi` pointing to `edgetunnel.pages.dev`, then click `Activate domain`.

4. Open the admin panel:
   - Visit `https://lizi.fuck.cloudns.biz/admin` and enter the admin password to log in.

</details>

### 🛠 Pages + GitHub Deployment

<details>
<summary><code><strong>「 Pages + GitHub deployment text guide 」</strong></code></summary>

1. Deploy CF Pages:
   - Fork this project on GitHub first, and give it a Star !!!
   - In the CF Pages console, choose `Connect to Git`, select the `edgetunnel` project, then click `Get started`.
   - On the `Set up builds and deployments` page, under `Environment variables (advanced)`, `Add variable`
     with the name **ADMIN** and your admin password as the value, then click `Save and deploy`.

2. Bind a KV namespace:
   - On the `Settings` tab, go to `Bindings` > `+ Add` > `KV namespace`, then select an existing namespace or create a new one.
   - Set the `Variable name` to **KV**, then click `Save` and redeploy.

3. Bind a CNAME custom domain to Pages: [video tutorial](https://www.youtube.com/watch?v=LeT4jQUh8ok&t=851s)
   - On the Pages console `Custom domains` tab, click `Set up a custom domain` below.
   - Enter your custom subdomain — do not use your root domain. For example:
     If your assigned domain is `fuck.cloudns.biz`, enter `lizi.fuck.cloudns.biz` as the custom domain;
   - As instructed by CF, go back to your DNS provider and add a CNAME record for `lizi` pointing to `edgetunnel.pages.dev`, then click `Activate domain`.

4. Open the admin panel:
   - Visit `https://lizi.fuck.cloudns.biz/admin` and enter the admin password to log in.

</details>

---

## 🔑 Environment Variables

| Variable | Required | Example | Details |
| :--- | :---: | :--- | :--- |
| **ADMIN** | ✅ | `123456` | Admin panel login password |
| **KEY** | ❌ | `CMLiussss` | Quick-subscription path key — visit `/CMLiussss` to fetch nodes quickly |
| **UUID** | ❌ | `90cd4a77-141a-43c9-991b-08263cfe9c10` | Force a fixed UUID. Only standard **UUIDv4** format is supported |
| **PROXYIP** | ❌ | `proxyip.cmliussss.net:443` | Global custom reverse-proxy IP |
| **URL** | ❌ | `https://cloudflare-error-page-3th.pages.dev` | Default homepage disguise (a page URL, or `1101`) |
| **GO2SOCKS5** | ❌ | `blog.cmliussss.com`,`*.ip111.cn`,`*google.com` | Force-SOCKS5 list (`*` = global, comma-separated domains) |
| **DEBUG** | ❌ | `1` or `true` | **Developer mode**. Debug logging (console.log) is **off** by default; set `1` or `true` to turn it **on** |
| **OFF_LOG** | ❌ | `1` or `true` | KV log recording is **on** by default; set `1` or `true` to turn it **off** |
| **BEST_SUB** | ❌ | `1` or `true` | **Preferred-subscription generator** mode, **off** by default; set `1` or `true` to turn it **on** |
| **PRELOAD_RACE_DIAL** | ❌ | `1` or `true` | **Preload race dialing**, **off** by default; set `1` or `true` to turn it **on** |
| **TCP_CONCURRENT_DIAL**   | ❌ | `2` | **TCP concurrent dials**, default `2`. Once set, it no longer auto-drops to a single connection on China Mobile networks |
| **PROXY_CONCURRENT_DIAL** | ❌ | `1` | **Reverse-proxy concurrent dials**, default `1`. Higher values connect faster but switch IPs more often |

---

## 🔧 Advanced Tips
To change the **TOKEN in subscription URLs** and the **UUID used for node auth**, edit variables:
1. Changing `ADMIN` or `KEY` randomly regenerates the **TOKEN in subscription URLs** and the **UUID used for node auth**
2. Setting `UUID` forces fixed values for both. It must be standard **UUIDv4** format, otherwise nodes will not work.

This tool can switch proxy schemes on the fly via the **PATH**:

- Specify a `PROXYIP`, e.g.
   ```url
   /proxyip=proxyip.cmliussss.net
   /?proxyip=proxyip.cmliussss.net
   ```

- Specify a `SOCKS5` proxy, e.g.
   ```url
   /socks5=user:password@127.0.0.1:1080
   /?socks5=user:password@127.0.0.1:1080
   /socks://dXNlcjpwYXNzd29yZA==@127.0.0.1:1080 (enables global SOCKS5 by default)
   /socks5://user:password@127.0.0.1:1080 (enables global SOCKS5 by default)
   ```

- Specify an `HTTP` proxy, e.g.
   ```url
   /http=user:password@127.0.0.1:1080
   /http://user:password@127.0.0.1:8080 (enables global SOCKS5 by default)
   ```

- Specify a `Trojan fallback`, e.g. (built for self-hosted relay scenarios: Trojan inbound only, and the fallback service must share the password with no WebSocket and no TLS. UDP is passed through to the fallback with excellent performance and full features)
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

## 🙏 Special Thanks
### 💖 Sponsors - keeping the [subscription converter](https://sub.cmliussss.net/) servers running
- [Yuusei Network](https://yuusei.io/)
- [VMRack](https://www.vmrack.net?ref_code=5Zk7eNhbgL7)

### 🛠 Open Source Credits
- [zizifn/edgetunnel](https://github.com/zizifn/edgetunnel)
- [3Kmfi6HP/EDtunnel](https://github.com/6Kmfi6HP/EDtunnel)
- [SHIJS1999/cloudflare-worker-vless-ip](https://github.com/SHIJS1999/cloudflare-worker-vless-ip)
- [Stanley-baby](https://github.com/Stanley-baby)
- [ACL4SSR](https://github.com/ACL4SSR/ACL4SSR/tree/master/Clash/config)
- [股神](https://t.me/CF_NAT/38889)
- [Workers/Pages Metrics](https://t.me/zhetengsha/3382)
- [白嫖哥](https://t.me/bestcfipas)
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

1. This project ("edgetunnel") is for **educational, research, and personal security-testing** purposes only.
2. Anyone downloading or using this code must strictly comply with the laws of their region.
3. The author **cmliu** assumes no responsibility for any behavior or consequences arising from misuse of this code.
4. This project is not liable for any direct or indirect damages caused by using the code.
5. It is recommended to delete related deployments within 24 hours after testing.

---

**If this project helped you, please give it a Star 🌟 — it means a lot!**
