---
title: Quickstart
---

# Quickstart

## 1. Get your API key

[Request access](/subscribe) and wait for approval. Once active, copy your key from [My Subscriptions](/my-subscriptions).

## 2. Make your first request

```bash
curl https://YOUR_GATEWAY_URL/path-1 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

A successful response looks like:

```json
{
  "url": "https://echo.zuplo.io/path-1",
  "method": "GET",
  "headers": { "..." }
}
```

## 3. Explore the API

Use the [API Reference](/api) to browse all available endpoints and try them live in the playground.
