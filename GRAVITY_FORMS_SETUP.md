# Gravity Forms Connection Setup Guide

## Current Status

✅ **WordPress GraphQL**: Connected successfully
✅ **WordPress REST API**: Connected successfully
❌ **Gravity Forms API**: **NOT CONFIGURED** - This is why form entries are not being recorded

## Problem

Your Gravity Forms credentials (`GF_CONSUMER_KEY` and `GF_CONSUMER_SECRET`) are missing from your `.env.local` file. Without these credentials, the Next.js application cannot submit form entries to WordPress.

## Solution

Follow these steps to enable Gravity Forms integration:

### Step 1: Generate API Keys in WordPress

1. Log into your WordPress admin panel:
   ```
   https://cms.adl99.com.au/wp-admin
   ```

2. Navigate to **Forms → Settings → REST API**

3. Click **Add Key** to create new API credentials

4. Fill in the form:
   - **Description**: "Next.js ADL99 Website"
   - **User**: Select an admin user
   - **Permissions**: Read/Write

5. Click **Add Key**

6. **IMPORTANT**: Copy both the **Consumer Key** and **Consumer Secret** immediately (you won't be able to see the secret again!)

### Step 2: Add Credentials to .env.local

1. Open your `.env.local` file

2. Find these lines:
   ```env
   GF_CONSUMER_KEY=
   GF_CONSUMER_SECRET=
   ```

3. Add your credentials:
   ```env
   GF_CONSUMER_KEY=ck_your_consumer_key_here
   GF_CONSUMER_SECRET=cs_your_consumer_secret_here
   ```

4. Save the file

### Step 3: Restart Your Development Server

1. Stop your current Next.js dev server (Ctrl+C)

2. Restart it:
   ```bash
   npm run dev
   ```

### Step 4: Verify Connection

Run the diagnostic script to verify everything is working:

```bash
node test-wordpress-connection.js
```

You should see:
```
✅ Gravity Forms API connection successful!
   Forms available: [number]
   Forms:
     - Form #2: [Your Contact Form Name]
```

## Testing Form Submissions

1. Go to your website's contact form
2. Fill out and submit the form
3. Check WordPress admin at: `https://cms.adl99.com.au/wp-admin/admin.php?page=gf_entries`
4. You should see the new entry appear

## Troubleshooting

### Forms still not submitting?

1. **Check browser console** for errors:
   - Open DevTools (F12)
   - Go to Console tab
   - Submit the form
   - Look for red error messages

2. **Check Network tab**:
   - Open DevTools (F12)
   - Go to Network tab
   - Submit the form
   - Click on the `/api/gravity-forms/2` request
   - Check the Response tab for error messages

3. **Verify API permissions**:
   - Make sure the API key has **Read/Write** permissions
   - Try regenerating the API keys if needed

### Common Issues

**Issue**: "401 Unauthorized" errors
- **Solution**: Your API credentials are incorrect. Double-check them in `.env.local`

**Issue**: "403 Forbidden" errors
- **Solution**: Your API key doesn't have write permissions. Recreate it with Read/Write access

**Issue**: Form submits but no entry in WordPress
- **Solution**: Check that you're using the correct Form ID (currently using Form #2)

## Alternative: Fallback Forms

If you can't get Gravity Forms API working immediately, the site has a fallback system that allows forms to work without the API credentials. However, **entries won't be recorded in WordPress** - they'll only show a success message.

To properly record form submissions, you **must** configure the API credentials.

## Need Help?

- WordPress Admin: https://cms.adl99.com.au/wp-admin
- Gravity Forms Documentation: https://docs.gravityforms.com/rest-api-v2/
- Run diagnostics: `node test-wordpress-connection.js`
