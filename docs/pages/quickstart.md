# Quick Start

Get up and running with the Forest River API in under five minutes.

## Step 1 — Sign in and get an API key

1. Click **Sign in** in the top-right corner of this portal
2. Navigate to [Plans](/subscribe) and choose the tier that fits your needs
3. Click **Request access** — Basic plan keys are issued instantly
4. Copy your API key from the [My Subscriptions](/my-subscriptions) page

## Step 2 — Make your first request

All API requests require an `Authorization` header with your API key:

```bash
curl https://TODO_YOUR_GATEWAY_URL/path-1 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

A successful response looks like this:

```json
{
  "url": "https://TODO_YOUR_GATEWAY_URL/path-1",
  "method": "GET",
  "headers": {
    "authorization": "Bearer YOUR_API_KEY"
  }
}
```

## Step 3 — Explore the API reference

Browse all available endpoints in the [API Reference](/api). You can try requests directly from the browser using the built-in playground — just make sure you're signed in so your credentials are attached automatically.

## Next steps

- Read the [Authentication guide](./authentication) to understand how API keys work
- Review the [Plans](/subscribe) page to upgrade your rate limits
- Check the [API Reference](/api) for the full list of endpoints and parameters

## Need help?

If you run into any issues, check that:

1. Your API key is active on the [My Subscriptions](/my-subscriptions) page
2. You're including the `Authorization: Bearer <key>` header on every request
3. You haven't exceeded your plan's rate limit
