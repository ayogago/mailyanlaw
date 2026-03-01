# Instagram Integration Setup Guide

This guide will help you connect your Instagram account to automatically display reels on the Media page.

## How It Works

The Media page dynamically fetches your latest Instagram reels via the Instagram Graph API. Reels are cached for 1 hour and automatically refreshed. No hardcoded content — every new reel you post will appear automatically.

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Business" as the app type
4. Fill in your app details:
   - App Name: Mailyan Law Website
   - Contact Email: Your email
   - Business Account: Optional

## Step 2: Add Instagram API with Instagram Login

1. In your app dashboard, click "Add Product"
2. Find "Instagram API with Instagram Login" and click "Set Up"
3. Configure the required permissions:
   - `instagram_business_basic` — to read your media
4. Add your Instagram account as a tester
5. Go to Instagram → Profile → Settings → Apps and Websites → Tester Invites
6. Accept the tester invitation

## Step 3: Generate Access Token

1. Back in Facebook Developers, go to Instagram API → Token Generator
2. Click "Generate Token" next to your Instagram account
3. Follow the prompts to authorize the app
4. Copy the generated Access Token

## Step 4: Get a Long-Lived Token

Short-lived tokens expire after 1 hour. Exchange it for a long-lived token (60 days):

```bash
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN"
```

The response will include a long-lived `access_token` and `expires_in` (seconds).

## Step 5: Add Credentials to Your Website

Create or edit the `.env.local` file in the project root:

```bash
# Instagram API Credentials (server-side only — never use NEXT_PUBLIC_ prefix)
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
INSTAGRAM_APP_ID=your_app_id_here
INSTAGRAM_APP_SECRET=your_app_secret_here
```

**Important**: These variables are server-side only. They are NOT exposed to the browser.

## Step 6: Rebuild and Restart

```bash
npm run build
npm run start
```

## Token Refresh

- Long-lived tokens last **60 days**
- The API route automatically attempts to refresh expired tokens
- You can also manually refresh by calling:
  ```
  GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_LONG_LIVED_TOKEN
  ```
- Tokens can be refreshed when they are at least 24 hours old and not yet expired

## Architecture

```
Browser → /media page → GET /api/instagram → Instagram Graph API
                                ↓
                         1-hour cache (in-memory)
```

- **`/app/api/instagram/route.ts`** — Server-side API route that calls Instagram Graph API
- **`/app/media/page.tsx`** — Client component that fetches from the API route
- **`/lib/instagram.ts`** — Reusable helper for fetching Instagram data

## Troubleshooting

### No reels showing up?
- Check that your Instagram account has posted reels/videos
- Verify the access token is correct in `.env.local`
- Check the server logs for any error messages
- Make sure you're using a business or creator Instagram account

### Access token expired?
- Generate a new long-lived token using Step 4
- Update the `.env.local` file
- Rebuild and restart the application

### Getting 400 errors?
- The token may be expired — check server logs for "code: 190" errors
- Regenerate the token following Steps 3-4

## Security

- Never commit your `.env.local` file to version control
- The `.gitignore` file already excludes this file
- Access tokens are kept server-side only (no `NEXT_PUBLIC_` prefix)
- The API route acts as a proxy — the token is never sent to the browser

## For More Help

- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)
- [Facebook Developers Support](https://developers.facebook.com/support/)
