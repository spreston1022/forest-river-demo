---
title: Authentication
---

# Authentication

The Forest River API supports three authentication methods depending on your plan and use case.

## API Key (all plans)

Pass your key as a Bearer token on every request:

```
Authorization: Bearer frpr_abc123_xyz456789
```

Keys are issued automatically on Basic plan approval, and within 1 business day for Pro and Enterprise.

## OAuth 2.0 — Client Credentials (Pro / Enterprise)

For server-to-server integrations where no user is present:

```bash
curl -X POST https://YOUR_IDP/oauth/token \
  -d grant_type=client_credentials \
  -d client_id=YOUR_CLIENT_ID \
  -d client_secret=YOUR_CLIENT_SECRET \
  -d audience=https://api.forestriver.com
```

## OAuth 2.0 — Authorization Code + PKCE (Pro / Enterprise)

For user-facing applications. Use your IdP's authorization endpoint with `response_type=code`
and a PKCE `code_challenge`. Exchange the authorization code for an access token and pass it
as a Bearer token.

## Key rotation

Regenerate your API key at any time from [My Subscriptions](/my-subscriptions).
The old key is invalidated immediately.
