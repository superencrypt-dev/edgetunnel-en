# English Admin Panel Assets

The worker's admin panel and login page are static pages from the upstream project
(`edt-pages.github.io`) and are in Chinese. This directory contains the English
translations which the worker serves from KV.

## Install

Upload both files into the KV namespace bound as `KV`:

```
npx wrangler kv key put --binding KV 'admin_en.html' --path panel/admin_en.html --remote
npx wrangler kv key put --binding KV 'login_en.html'  --path panel/login_en.html  --remote
```

The worker serves `login_en.html` / `admin_en.html` from KV automatically and
falls back to the upstream Chinese pages if the keys are missing.

## Config key adapter

The panel JavaScript reads/writes the config with legacy Chinese keys
(`反代`, `优选订阅生成.本地IP库`, ...). The worker maps them to the English
config schema (`proxy`, `preferredSubGen.localIpPool`, ...) on
`GET/POST /admin/config.json` automatically, so the panel works unchanged.
