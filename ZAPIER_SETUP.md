# Zapier Contact Form Notifications Setup

This guide will show you how to set up **email and SMS text alerts** when someone submits the contact form on your website using Zapier.

## What You'll Get

- ✅ **Email notification** to your inbox when a contact form is submitted
- ✅ **SMS text message** to your phone with customer details
- ✅ **Automatic formatting** of customer information
- ✅ **Instant alerts** - receive notifications within seconds

## Prerequisites

- A Zapier account (free plan works!)
  - Sign up at [zapier.com](https://zapier.com)
- Your phone number for SMS alerts

## Step 1: Create a New Zap

1. **Log in to Zapier**
   - Go to [zapier.com](https://zapier.com) and sign in

2. **Create a New Zap**
   - Click **"Create Zap"** button in the top right
   - Or go to [zapier.com/app/zaps](https://zapier.com/app/zaps) and click **"+ Create"**

## Step 2: Set Up the Trigger (Webhooks by Zapier)

### Configure the Webhook

1. **Search for "Webhooks"**
   - In the "Trigger" search box, type **"Webhooks by Zapier"**
   - Select **"Webhooks by Zapier"**

2. **Choose Event**
   - Select **"Catch Hook"** as the event
   - Click **"Continue"**

3. **Set Up Hook (Optional)**
   - Leave "Pick off a Child Key" blank
   - Click **"Continue"**

4. **Get Your Webhook URL**
   - Zapier will show you a webhook URL like:
     ```
     https://hooks.zapier.com/hooks/catch/1234567/abcdefg/
     ```
   - **IMPORTANT**: Copy this URL - you'll need it in Step 3
   - **Keep this page open** - we'll come back to test it

## Step 3: Add Webhook to Your Website

1. **Open your project** and create `.env.local` file if you haven't already

2. **Add the webhook URL** to `.env.local`:
   ```bash
   NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/
   ```

   Replace with your actual webhook URL from Step 2.

3. **Restart your development server**:
   ```bash
   # Stop the server (Ctrl+C)
   # Then restart:
   npm run dev
   ```

## Step 4: Test the Webhook

1. **Go to your website**
   - Visit `http://localhost:3000#contact`

2. **Fill out the contact form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: (555) 123-4567
   - Message: This is a test message

3. **Submit the form**

4. **Back in Zapier**, click **"Test trigger"**
   - You should see the test data appear
   - It will show the name, email, phone, message, and timestamp

5. **Click "Continue"** once you see the test data

## Step 5: Add Email Notification Action

### Configure Email by Zapier

1. **Click "+" to add an action**

2. **Search for "Email"**
   - Select **"Email by Zapier"**

3. **Choose Action Event**
   - Select **"Send Outbound Email"**
   - Click **"Continue"**

4. **Set Up Email**
   - **To**: Enter your email address (e.g., bert@bodysbybertfitness.com)
   - **From Name**: Body's By Bert Contact Form
   - **From Email**: noreply@bodysbybertfitness.com (or any email)
   - **Subject**: 🔥 New Contact Form Submission from [Name]
     - Click in the field and map **Name** from the webhook data
   - **Body**: Use this template (click to insert webhook data):
     ```
     You have a new contact form submission!

     ═══════════════════════════════════

     👤 NAME:
     [Name]

     📧 EMAIL:
     [Email]

     📱 PHONE:
     [Phone]

     💬 MESSAGE:
     [Message]

     ⏰ SUBMITTED:
     [Timestamp]

     ═══════════════════════════════════

     Reply to this customer ASAP!
     ```

5. **Click "Continue"**

6. **Test the action**
   - Click **"Test step"**
   - Check your email inbox - you should receive the test email
   - Click **"Continue"**

## Step 6: Add SMS Notification Action

### Option A: SMS by Zapier (Easiest - US/Canada only)

1. **Click "+" to add another action**

2. **Search for "SMS"**
   - Select **"SMS by Zapier"**

3. **Choose Action Event**
   - Select **"Send SMS"**
   - Click **"Continue"**

4. **Set Up SMS**
   - **To Number**: Enter your phone number (e.g., +15551234567)
     - Must include country code (+1 for US/Canada)
   - **Message**: Use this template:
     ```
     🔥 NEW LEAD!

     Name: [Name]
     Phone: [Phone]
     Email: [Email]

     Msg: [Message]

     - Body's By Bert Fitness
     ```
     Click in the fields to map webhook data

5. **Click "Continue"**

6. **Test the action**
   - Click **"Test step"**
   - You should receive an SMS on your phone
   - Click **"Continue"**

### Option B: Twilio (More features, worldwide)

If you need international SMS or more advanced features:

1. **Sign up for Twilio** at [twilio.com](https://www.twilio.com)
   - Get a phone number and API credentials

2. **In Zapier, search for "Twilio"**
   - Select **"Twilio"**

3. **Choose Action Event**
   - Select **"Send SMS"**
   - Click **"Continue"**

4. **Connect Twilio Account**
   - Enter your Twilio Account SID and Auth Token
   - Click **"Yes, Continue"**

5. **Set Up SMS**
   - **From Number**: Your Twilio phone number
   - **To Number**: Your personal phone number
   - **Message**: Same template as Option A

6. **Test and continue**

## Step 7: Publish Your Zap

1. **Give your Zap a name**
   - Click on "Untitled Zap" at the top
   - Name it: "Contact Form → Email & SMS Alerts"

2. **Turn on your Zap**
   - Click the toggle in the top right to turn it **ON**
   - Your Zap is now live!

## Step 8: Deploy to Production

When you're ready to deploy your website:

1. **Add the webhook URL to production environment**:
   - **Vercel**: Settings > Environment Variables
   - **Netlify**: Site Settings > Build & Deploy > Environment
   - Add: `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=your-webhook-url`

2. **Redeploy your site**

3. **Test on production** by submitting the contact form

## Customization Options

### Multiple Recipients for Email

In the "Email by Zapier" action:
- **To**: Enter multiple emails separated by commas:
  ```
  bert@bodysbybertfitness.com, admin@bodysbybertfitness.com
  ```

### Multiple Phone Numbers for SMS

Create multiple SMS actions:
1. After Step 6, click **"+"** again
2. Add another "SMS by Zapier" action
3. Enter a different phone number
4. Repeat for each person who needs alerts

### Add to Google Sheets

Track all submissions in a spreadsheet:

1. **Add another action**
2. **Search for "Google Sheets"**
3. **Choose "Create Spreadsheet Row"**
4. **Connect your Google account**
5. **Select your spreadsheet** and worksheet
6. **Map the fields**:
   - Column A: Name
   - Column B: Email
   - Column C: Phone
   - Column D: Message
   - Column E: Timestamp

### Add to CRM (HubSpot, Salesforce, etc.)

1. **Add another action**
2. **Search for your CRM** (HubSpot, Salesforce, Pipedrive, etc.)
3. **Choose "Create Contact" or "Create Lead"**
4. **Map the contact form fields** to CRM fields

### Auto-Reply Email to Customer

Send an automatic confirmation email to the customer:

1. **Add another action**
2. **Search for "Gmail" or "Email by Zapier"**
3. **Choose "Send Email"**
4. **Set up auto-reply**:
   - **To**: Map the **Email** field from webhook
   - **Subject**: Thank you for contacting Body's By Bert!
   - **Body**:
     ```
     Hi [Name],

     Thank you for reaching out to Body's By Bert Performance & Fitness!

     We've received your message and will get back to you within 24 hours.

     In the meantime, feel free to:
     - Book a session: https://your-website.com#booking
     - Call us: (555) 123-4567
     - Check out our programs: https://your-website.com#services

     Let's transform your body together!

     - Bert
     Body's By Bert Performance & Fitness
     ```

## Zapier Pricing

- **Free Plan**: 100 tasks/month (perfect for starting out)
  - 1 task = 1 form submission that triggers all actions
  - Example: 100 form submissions = 100 tasks

- **Starter Plan**: $19.99/month - 750 tasks/month

- **Professional Plan**: $49/month - 2,000 tasks/month

**Tip**: Start with the free plan and upgrade if you get more than 100 form submissions per month!

## Troubleshooting

### Not Receiving Notifications

**Check these:**
1. Is your Zap turned **ON**? (Check the toggle in Zapier)
2. Did you add `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL` to `.env.local`?
3. Did you restart the dev server after adding the env variable?
4. Check your email spam/junk folder
5. For SMS: Is your phone number in correct format (+1XXXXXXXXXX)?

### Form Submits but No Data in Zapier

**Solutions:**
1. Make sure the webhook URL in `.env.local` is correct
2. Check browser console for errors (F12 > Console tab)
3. Verify the form data is being sent (Network tab in browser dev tools)
4. Re-test the trigger in Zapier

### Getting Error When Submitting Form

**Check:**
1. Webhook URL format is correct (should start with https://hooks.zapier.com)
2. No extra spaces in `.env.local`
3. Restart dev server after changing `.env.local`

### SMS Not Sending (SMS by Zapier)

**Note:** SMS by Zapier only works for US/Canada numbers.

**Solutions:**
- Phone number must include country code: `+15551234567`
- Remove spaces, dashes, parentheses: Use +15551234567, not +1 (555) 123-4567
- If outside US/Canada, use Twilio instead

### Webhook URL Exposed in Frontend Code

**This is intentional and safe:**
- Webhook URLs are meant to be public-facing
- They can only receive data (POST), not leak data
- No sensitive information is exposed
- Zapier webhooks have rate limiting built-in

If you're concerned, you can create a Next.js API route instead (see alternative below).

## Alternative: Use Next.js API Route

For more security, create an API route:

1. **Create `app/api/contact/route.ts`**:
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()

  // Send to Zapier webhook (URL hidden on server)
  const zapierUrl = process.env.ZAPIER_WEBHOOK_URL // No NEXT_PUBLIC_

  await fetch(zapierUrl!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return NextResponse.json({ success: true })
}
```

2. **Update `components/Contact.tsx`**:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

3. **Update `.env.local`** (remove NEXT_PUBLIC_):
```bash
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
```

## Support

- **Zapier Help**: [help.zapier.com](https://help.zapier.com)
- **Zapier Community**: [community.zapier.com](https://community.zapier.com)
- **SMS by Zapier Docs**: [zapier.com/apps/sms/integrations](https://zapier.com/apps/sms/integrations)

---

**Questions?** Check the main README.md or SETMORE_SETUP.md for other integration guides.
