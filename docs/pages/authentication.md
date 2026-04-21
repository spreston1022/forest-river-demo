# Authentication

The Forest River API uses **API key authentication**. Every request must include a valid API key in the `Authorization` header.

## Obtaining an API key

1. [Sign in](/oauth/login) to this developer portal
2. Go to [Plans](/subscribe) and request access to a plan
3. Once approved, your API key appears on the [My Subscriptions](/my-subscriptions) page
4. Copy the key — it will not be shown again after you leave the page

## Using your API key

Include your API key as a Bearer token in the `Authorization` header of every request:

```
Authorization: Bearer YOUR_API_KEY
```

### Example — cURL

```bash
curl https://TODO_YOUR_GATEWAY_URL/path-1 \
  -H "Authorization: Bearer fr-basic-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Example — JavaScript (fetch)

```js
const response = await fetch("https://TODO_YOUR_GATEWAY_URL/path-1", {
  headers: {
    Authorization: "Bearer fr-basic-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
});

const data = await response.json();
```

### Example — Python (requests)

```python
import requests

resp = requests.get(
    "https://TODO_YOUR_GATEWAY_URL/path-1",
    headers={"Authorization": "Bearer fr-basic-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
)
data = resp.json()
```

## Error responses

If your API key is missing or invalid, the API returns a `401 Unauthorized` response:

```json
{
  "status": 401,
  "title": "Unauthorized",
  "detail": "No valid API key was found in the Authorization header."
}
```

## API key security

- **Keep your key secret.** Do not commit it to source control or expose it in client-side code
- **Use environment variables.** Store the key in a `.env` file or your deployment platform's secret manager
- **Rotate regularly.** Revoke old keys from the [My Subscriptions](/my-subscriptions) page and request a new one
- **One key per environment.** Use separate keys for development, staging, and production

## Plan limits and rate limiting

Each API key is associated with a plan that defines its rate limit and monthly quota. If you exceed your rate limit, the API returns a `429 Too Many Requests` response. See the [Plans](/subscribe) page to view your current limits or request an upgrade.
