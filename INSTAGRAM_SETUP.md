# Instagram Integration Setup Guide

This guide will help you connect your Instagram account so new posts automatically appear on the Media page.

## How It Works

1. The website has an API route (`/api/instagram`) that fetches your latest posts from Instagram's Graph API
2. Results are cached for 1 hour — new posts appear within an hour of publishing
3. If no credentials are configured, the page falls back to the existing hardcoded reels
4. A token refresh endpoint (`/api/instagram/refresh-token`) helps keep your token alive

---

## Step 1: Create a Facebook/Meta App

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Choose **"Business"** as the app type
4. Fill in your app details:
   - App Name: `Mailyan Law Website`
   - Contact Email: Your email
   - Business Account: Optional

## Step 2: Set Up Instagram API with Instagram Login

1. In your app dashboard, click **"Add Product"**
2. Find **"Instagram"** and click **"Set Up"**
3. Under **"Instagram API with Instagram Login"**, generate a token:
   - Click **"Add or Remove Instagram Testers"**
   - Add your Instagram account (`@mailyanesq`) as a tester
4. Go to Instagram → **Profile** → **Settings** → **Apps and Websites** → **Tester Invites**
5. Accept the tester invitation

## Step 3: Generate Your Access Token

1. Back in Meta Developers → Instagram → **User Token Generator**
2. Click **"Generate Token"** next to your Instagram account
3. Follow the prompts to authorize
4. Copy the generated **Access Token**
5. Copy your **Instagram User ID** (shown in the same section)

### Convert to a Long-Lived Token (Important!)

Short-lived tokens expire in 1 hour. Exchange it for a long-lived token (60 days):

```bash
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_CLIENT_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN"
```

Save the `access_token` from the response — this is your long-lived token.

## Step 4: Add Credentials to Your Server

Create or edit the `.env.local` file in the project root:

```bash
# Instagram API Credentials (server-side only — do NOT use NEXT_PUBLIC_ prefix)
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
INSTAGRAM_USER_ID=your_user_id_here
```

## Step 5: Rebuild and Restart

```bash
npm run build
pm2 restart mailyanlaw
```

That's it! Your media page will now automatically show your latest Instagram posts.

---

## Token Refresh

Long-lived tokens expire after **60 days**. You must refresh before they expire.

### Manual Refresh

Visit this URL in your browser (or call it from a cron job):

```
https://your-domain.com/api/instagram/refresh-token
```

This will return the new token. Update your `.env.local` with the new token value and restart the app.

### Automated Refresh (Recommended)

Set up a cron job to call the refresh endpoint every 50 days:

```bash
# Add to your crontab (crontab -e)
0 0 */50 * * curl -s https://your-domain.com/api/instagram/refresh-token >> /var/log/instagram-token-refresh.log 2>&1
```

**Note:** After refreshing, you still need to update the `INSTAGRAM_ACCESS_TOKEN` in `.env.local` with the new token value returned by the endpoint, then restart the app.

---

## Troubleshooting

### No posts showing up?
- Verify your access token and user ID are correct in `.env.local`
- Check server logs for `[Instagram API]` messages
- Test the API directly: visit `/api/instagram` in your browser
- Make sure the token hasn't expired

### Only seeing hardcoded reels?
- This means either `INSTAGRAM_ACCESS_TOKEN` or `INSTAGRAM_USER_ID` is missing from `.env.local`
- Make sure you restarted the app after adding the env variables

### Access token expired?
1. Visit `/api/instagram/refresh-token` to get a new token
2. Update `.env.local` with the new token
3. Restart: `pm2 restart mailyanlaw`

### Posts not updating?
- The cache lasts 1 hour — new posts appear within 1 hour of publishing
- To force a cache refresh, restart the app: `pm2 restart mailyanlaw`

---

## Security Notes

- Tokens are kept server-side only (no `NEXT_PUBLIC_` prefix) — they are never exposed to the browser
- Never commit `.env.local` to version control (already in `.gitignore`)
- The `/api/instagram/refresh-token` endpoint returns the new token in the response — consider restricting access in production

## References

- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)
- [Meta for Developers](https://developers.facebook.com/)
