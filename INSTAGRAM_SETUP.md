# Instagram Integration Setup Guide

This guide will help you connect your Instagram account to automatically display reels on the Media page.

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Business" as the app type
4. Fill in your app details:
   - App Name: Mailyan Law Website
   - Contact Email: Your email
   - Business Account: Optional

## Step 2: Add Instagram Basic Display

1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Scroll down to "User Token Generator"
4. Click "Add or Remove Instagram Testers"
5. Add your Instagram account as a tester
6. Go to Instagram → Profile → Settings → Apps and Websites → Tester Invites
7. Accept the tester invitation

## Step 3: Generate Access Token

1. Back in Facebook Developers, go to Instagram Basic Display → Basic Display
2. Under "User Token Generator", click "Generate Token" next to your Instagram account
3. Follow the prompts to authorize the app
4. Copy the generated Access Token
5. Also copy your Instagram User ID (shown in the same section)

## Step 4: Add Credentials to Your Website

1. Create or edit the `.env.local` file in the project root:

```bash
# Instagram API Credentials
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
NEXT_PUBLIC_INSTAGRAM_USER_ID=your_user_id_here
```

2. Replace `your_access_token_here` with the Access Token from Step 3
3. Replace `your_user_id_here` with your Instagram User ID from Step 3

## Step 5: Rebuild and Restart

```bash
npm run build
npm run start -- -p 3001
```

## Important Notes

- **Access Token Expiration**: Short-lived tokens expire after 1 hour. You'll need to generate a long-lived token (60 days) or refresh it regularly.
- **Long-Lived Tokens**: You can exchange your short-lived token for a long-lived one using:
  ```
  https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret={your-client-secret}&access_token={short-lived-access-token}
  ```
- **Automatic Refresh**: The reels are cached for 1 hour, so new reels will appear automatically within an hour of posting.
- **Content Type**: Only VIDEO and REELS content will be displayed from your Instagram feed.

## Troubleshooting

### No reels showing up?
- Check that your Instagram account has posted reels
- Verify the access token and user ID are correct
- Check the browser console for any error messages
- Make sure you're using a business or creator Instagram account

### Access token expired?
- Generate a new long-lived token
- Update the `.env.local` file
- Rebuild and restart the application

## Security

- Never commit your `.env.local` file to version control
- The `.gitignore` file already excludes this file
- Access tokens should be kept private and secure

## For More Help

- [Instagram Basic Display API Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Facebook Developers Support](https://developers.facebook.com/support/)
