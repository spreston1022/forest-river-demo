/**
 * zudoku.config.tsx — Forest River API Platform Demo
 *
 * Prerequisites:
 *   1. Enable the API Key Service in your Zuplo project (portal.zuplo.com → Services)
 *   2. Set up an Auth0 or Okta app and fill in the TODOs below
 *   3. Replace TODO_YOUR_GATEWAY_URL with your deployed Zuplo gateway URL
 *
 * Local dev: npm run docs  →  http://localhost:9200
 */

import { type ZudokuConfig } from "zudoku";
import { createApiIdentityPlugin } from "zudoku/plugins";
import { SubscribePage } from "./SubscribePage";

const config: ZudokuConfig = {
  // ─── Site Branding ──────────────────────────────────────────────────────
  site: {
    title: "Forest River Developer Portal",
    banner: {
      message: "🚧 Demo environment — not connected to production systems.",
      color: "caution",
      dismissible: true,
    },
  },

  // ─── Authentication ──────────────────────────────────────────────────────
  // Auth0:  issuer = "https://<tenant>.us.auth0.com"
  // Okta:   issuer = "https://<org>.okta.com/oauth2/default"
  authentication: {
    type: "openid",
    clientId: "TODO_YOUR_CLIENT_ID",
    issuer: "TODO_YOUR_ISSUER_URL",
    scopes: ["openid", "profile", "email"],
  },

  // ─── API Reference ───────────────────────────────────────────────────────
  // Served from the /openapi route on your gateway
  apis: {
    type: "url",
    input: "TODO_YOUR_GATEWAY_URL/openapi",
    path: "/api",
  },

  // ─── Navigation ──────────────────────────────────────────────────────────
  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book-open",
      items: [
        { type: "doc", file: "pages/introduction", label: "Introduction" },
        { type: "doc", file: "pages/quickstart", label: "Quickstart" },
        { type: "doc", file: "pages/authentication", label: "Authentication" },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
      icon: "code",
    },
    // Only visible when signed in (scenarios 3.1, 3.3, 1.2, 1.6, 3.4)
    {
      type: "custom-page",
      path: "/subscribe",
      label: "API Access",
      icon: "key",
      element: <SubscribePage initialView="plans" />,
      display: "auth",
    },
    {
      type: "custom-page",
      path: "/my-subscriptions",
      label: "My Subscriptions",
      icon: "layers",
      element: <SubscribePage initialView="subscriptions" />,
      display: "auth",
    },
  ],

  // ─── API Playground: auto-attach signed-in user's token ──────────────────
  plugins: [
    createApiIdentityPlugin({
      getIdentities: async (context) => [
        {
          id: "oauth-token",
          label: "My OAuth Token",
          authorizeRequest: (request) => {
            return context.authentication?.signRequest(request);
          },
        },
      ],
    }),
  ],

  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
