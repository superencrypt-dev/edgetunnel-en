## [2.1.20260904162413] - 2026-09-04 16:24:13

### ADD

- Added **ALPN** field support: node links now automatically include the ALPN parameter, adapting to more client scenarios.

### Debug

- Fixed **HTTPS proxy**: TLS handshake failure when the upstream server requests a client certificate (CertificateRequest); an empty certificate is now echoed back to complete the handshake normally.[commit](https://github.com/cmliu/CF-Workers-CheckSocks5/commit/ae93bc28462a6df03795143a5caa85f717ba231a)

## [2.1.20260811144522] - 2026-08-11 14:45:22

### Change

- Improved **XHTTP** upstream transfer: added a data coalescing mechanism — small chunks are merged and sent together, reducing frequent small-packet writes, lowering resource overhead, and making large uploads smoother.

## [2.1.20260810030901] - 2026-08-10 03:09:01

### ADD

- Added **XHTTP obfs padding** receiver support: recognizes `xPaddingObfsMode` (tokenish / queryInHeader) obfuscation headers.

## [2.1.20260809231057] - 2026-08-09 23:10:57

### Debug

- Fixed **XHTTP chained proxy** parameter parsing: a trailing `/` in the path used to invalidate the proxy config; trailing slashes are now tolerated.

## [2.1.20260809201158] - 2026-08-09 20:11:58

### Change

- Improved **XHTTP** transfer pipeline: TCP data now flows bidirectionally via `request.body.pipeTo(socket.writable)` and `socket.readable.pipeTo(IdentityTransformStream)` instead of ReadableStream + upstream write queue + BYOB/Grain chunk-by-chunk copying, significantly reducing CPU usage.
- Improved **XHTTP** connection management: `forwardataTCP` gained a "connect-only" mode — after connecting and writing the first packet it returns the socket directly for piping, while keeping the fallback logic that auto-switches to a proxy after direct-connection failure (gRPC/WS callers unaffected).
- Improved **XHTTP UDP** handling: the UDP branch was split into a dedicated handler, preserving Trojan UDP proxying and DNS forwarding logic.

## [2.1.20260729235734] - 2026-07-29 23:57:34

### Change

- Corrected the **PRELOAD_RACE_DIAL** environment variable logic: the default changed from `true` to `false` (preload race dialing is **off** by default); set `1` or `true` to **enable** it. The README description was updated accordingly.[commit](https://github.com/cmliu/edgetunnel/commit/aea8b85688ef6066116af551cfd5e6fd2ce77567)

## [2.1.20260724150359] - 2026-07-24 15:03:59

### Change

- Synced the latest **GrainTCP** transport optimizations: the upstream Grain coalescing target changed from `16KB` to `20KB`, reusing a unified stow/coalesce core; consecutive small chunks are opportunistically merged during drain, reducing high-frequency `writer.write()` calls.[upstream commit](https://github.com/ToiCF/GrainTCP/commit/1d22628f4d1413989f521f1d41591b0c72e658eb)
- Improved downstream **GrainTCP** aggregation: kept the `32KB` aggregation cap with a `tail × 12` low watermark and up to `4` rounds of `1ms` growth observation; flush can send multiple aggregated packets consecutively and sends promptly near the cap, reducing the number of small WebSocket frames.[upstream commit](https://github.com/ToiCF/GrainTCP/commit/1d22628f4d1413989f521f1d41591b0c72e658eb)
- Improved downstream packet handling: large chunks are sent directly when the Grain is empty; small chunks detach from reusable read buffers in the BYOB/default reader path; aggregation results are copied before sending to prevent scratch-buffer reuse from overwriting data.[upstream commit](https://github.com/ToiCF/GrainTCP/commit/1d22628f4d1413989f521f1d41591b0c72e658eb)
- Enhanced TCP connection management based on the upstream transport model: added connection generation, socket identity, and an old-downstream drain barrier; during redial, upstream data keeps being stowed while waiting for a new writer, and async teardown of old readers/timers/connections no longer pollutes the new connection.[upstream idea](https://github.com/ToiCF/GrainTCP/commit/1d22628f4d1413989f521f1d41591b0c72e658eb)
- Unified direct sends, segmented sends, and timed flushes into a serial send chain based on the upstream Grain send model, with async send errors persisted; response headers are consumed only on the first real send, preventing redials or dead connections from consuming protocol response headers early.[upstream idea](https://github.com/ToiCF/GrainTCP/commit/1d22628f4d1413989f521f1d41591b0c72e658eb)
- Preserved multi-protocol compatibility: WS upstream uses non-awaiting enqueue to reduce message-processing blocking, while XHTTP/gRPC still wait for remote writes to complete; a `16MiB / 4096`-entry upload high-watermark guard remains locally to prevent unbounded Worker queue growth.[upstream change](https://github.com/ToiCF/GrainTCP/commit/1d22628f4d1413989f521f1d41591b0c72e658eb)
- Improved: local speed-test responses are now enabled only in **proxy mode**; when using **SOCKS5/HTTP/HTTPS/TURN/SSTP** proxies, speed-test requests are forwarded normally instead.

## [2.1.20260722191426] - 2026-07-22 19:14:26

### Change

- Adapted to the real connectivity test URL `http://cp.cloudflare.com/generate_204`.

## [2.1.20260711190235] - 2026-07-11 19:02:35

### ADD

- Added the **TCP_CONCURRENT_DIAL** environment variable to customize the **TCP concurrent dial count**; once set, it no longer auto-drops to a single path on China Mobile networks.
- Added the **PROXY_CONCURRENT_DIAL** environment variable to customize the **proxy concurrent dial count**.

## [2.1.20260711022318] - 2026-07-11 02:23:18

### Change

- Improved **proxy-related logic**: fixed multi-proxy node parameters being silently overridden by a global variable and not taking effect.
- Improved the **DoH cache**: recent domain resolution results are cached, reducing duplicate requests and speeding up resolution while lowering resource usage; domains without results are also cached briefly to avoid repeated queries.

### ADD

- Added the **proxy concurrent dial count**: adjust the concurrency of proxy connections yourself. Higher values connect faster but switch IPs more often; lower values are more stable.
- Added **sub-conversion config** options: **UDP**, **XUDP**, **TLS 1.3**, **insert node type**, and **base node sorting**, all passed through to the sub-conversion backend.
- Added **Trojan fallback proxy**: the Trojan protocol now supports a backup proxy address. When the primary connection fails, it automatically switches to the backup for more stable, reliable connectivity.[PR #1359](https://github.com/cmliu/edgetunnel/pull/1359)

## [2.1.20260617014121] - 2026-06-17 01:41:21

### ADD

- Sub-conversion config gained an **output node info only** option.

## [2.1.20260611041617] - 2026-06-11 04:16:17

### Change

- Improved the UUID validation logic of the **version info endpoint** for better security.

## [2.1.20260609132903] - 2026-06-09 13:29:03

### Debug

- Fixed the **Error 1101** signature.

### Change

- Improved the **PROXYIP resolution cache**: proxy addresses are lowercased before cache comparison so the same address with different casing is not resolved twice.

## [2.1.20260601154939] - 2026-06-01 15:49:39

### Change

- Adapted to **Xray-core v26.2.6**: TLS removed the `allowInsecure` option, so Base64 subscriptions no longer emit the **skip certificate verification** feature; Clash and Sing-box subscriptions are unaffected.[Release](https://github.com/XTLS/Xray-core/releases/tag/v26.2.6)

## [2.1.20260529014818] - 2026-05-29 01:48:18

### Change

- Improved: TCP concurrent dialing degrades to a single path on **China Mobile** direct connections to mitigate CPU timeouts.

## [2.1.20260526210857] - 2026-05-26 21:08:57

### Debug

- Fixed **TURN authentication**: an empty `REALM` in the STUN auth challenge is now allowed, preventing empty realms from being mistaken for missing ones and failing the connection.

## [2.1.20260518183745] - 2026-05-18 18:37:45

### ADD

- Added the **PRELOAD_RACE_DIAL** environment variable to customize **TCP preload race dialing**: on first direct connection to a domain, A/AAAA records are queried concurrently via DoH (IPv4 preferred, IPv6 fills up to the `TCP concurrent dial count` cap); proxy fallback logic is separated from normal first direct connections to avoid accidental preload triggers.

## [2.1.20260517185203] - 2026-05-17 18:52:03

### Debug

- Fixed **WS/XHTTP/gRPC uploads**: upstream writes now wait for remote writes to complete before processing the next chunk, preventing bursts from piling up inside the Worker and triggering `upload queue overflow`.
- Improved the **WS explicit transfer queue**: upstream queue guard raised from 256KB to 16MB / 4096 entries, and queued write tasks are properly released on queue cleanup, reducing occasional overflows during large uploads.

## [2.1.20260515185129] - 2026-05-15 18:51:29

### Change

- Improved **Shadowsocks subscriptions**: with TLS off, preferred ports are automatically rewritten to noTLS ports. (Not applicable to proxy IPs.)
- Improved the **GO2SOCKS5** variable: changed from override mode to append mode.[PR #1202](https://github.com/cmliu/edgetunnel/pull/1202)

## [2.1.20260513042803] - 2026-05-13 04:28:03

### Change

- Optimized the **VLESS** hot path: the UUID is pre-decoded to 16 bytes for direct comparison, and first-packet parsing now uses offsets and `subarray()` for fewer copies.[open-source references](https://github.com/ToiCF/GrainTCP)
- Improved **WS Early Data**: added an 8KB cap and prevented normal WebSocket subprotocols from being mistaken for early data injected into the first packet.[open-source references](https://github.com/ToiCF/GrainTCP)
- Improved **WS/XHTTP/gRPC** upstream links: added bounded queues, small-packet coalescing, and 256KB backpressure protection to reduce frequent small writes and prevent unbounded queue growth.[open-source references](https://github.com/ToiCF/GrainTCP)
- Improved downstream **GrainTCP** sending: small packets aggregate via microtasks and short silence windows; large packets flush the aggregator first then send directly in the BYOB path, reducing copies and WebSocket frame count.[open-source references](https://github.com/ToiCF/GrainTCP)
- Improved TCP connection setup: direct and proxyIP candidates now race 4 concurrent dials for the first successful connection, while SOCKS/HTTP/HTTPS/TURN/SSTP proxy links keep their original handshake logic.[open-source references](https://github.com/ToiCF/GrainTCP)
- Improved the WebSocket handshake and WS main-link transport: `allowHalfOpen` gained an exception fallback, the 101 response clears `Sec-WebSocket-Extensions`, and the WS main link now uses an explicit ordered queue.[open-source references](https://github.com/ToiCF/GrainTCP)

## [2.1.20260511041705] - 2026-05-11 04:17:05

### Change

- Improved the **login page** password validation: a stray newline in a beginner\u2019s `ADMIN` password no longer makes the password impossible to enter (we\u2019ve all been there!).

### Delete

- Removed the request-count refresh countdown from subscription headers so beginners don\u2019t panic seeing it!

## [2.1.20260508190728] - 2026-05-08 19:07:28

### Debug

- Fixed **random preferred IPs** losing carrier info during sub conversion, which prevented generating carrier-specific preferred IPs.

### Change

- Improved sub conversion to submit a temporary `TOKEN` instead of the real subscription address, preventing its disclosure.

## [2.1.20260508041513] - 2026-05-08 04:15:13

### Change

- Improved **PROXYIP** domain resolution: the domain first reads proxy addresses from **TXT** records, falling back to **A** records when no TXT results are found.
- **AAAA** records are only queried when both TXT and A records return nothing, reducing unnecessary IPv6 queries.

### Delete

- Removed the `.william` domain special-casing and the Google DoH backup retry logic; ordinary domains can now configure proxy addresses via TXT records too.

## [2.1.20260506175102] - 2026-05-06 17:51:02

### New

- Added **TURN protocol** proxy support in proxy mode.[open-source references](https://github.com/ToiCF/CF-Workers-TURN)
- Added **SSTP (SoftEther) protocol** proxy support in proxy mode.[open-source references](https://github.com/ToiCF/CF-Workers-SoftEther)
- Custom subscriptions gained the ability to add **chained proxy** nodes.

## [2.1.20260503011925] - 2026-05-03 01:19:25

### Change

- Adapted to **Sing-box\u2019s** ECH custom **EchConfig resolution domain** feature.
- **Custom subscriptions** now support wildcard preferred domains.

### Delete

- Removed the **Clash** ECH **EchConfig DNS service** backup DoH.

## [2.1.20260417015756] - 2026-04-17 01:57:56

### Debug

- Synced upstream project updates fixing known **HTTPS proxy** issues.[reference](https://t.me/Enkelte_notif/824)
- Fixed known issues [#1117](https://github.com/cmliu/edgetunnel/issues/1117) [#1119](https://github.com/cmliu/edgetunnel/issues/1119) [#1120](https://github.com/cmliu/edgetunnel/issues/1120)

## [2.1.20260416044724] - 2026-04-16 04:47:24

### New

- The Trojan protocol now supports DNS queries over UDP-over-TCP (UoT).
- Added **HTTPS proxy** support in reverse-proxy mode.[open-source references](https://github.com/ToiCF/CF-Workers-HTTPS)

## [2.1.20260413174651] - 2026-04-13 17:46:51

### Change

- Improved WebSocket data transfer with BYOB mode support for better performance and flexibility.

## [2.1.20260410060317] - 2026-04-10 06:03:17

### New

- Added Shadowsocks **AEAD encrypted transport**, providing content encryption for non-TLS transport modes.

## [2.1.0]

### New
- VLESS/Trojan now support XHTTP and gRPC transports.

## [2.0.0]

### New

- The project architecture was completely rewritten, adding a frontend web panel.[frontend source](https://github.com/EDT-Pages/EDT-Pages.github.io)
