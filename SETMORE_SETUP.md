# Setmore Scheduling Integration Guide

This guide will help you integrate your Setmore account with Body's By Bert Performance & Fitness website.

## Prerequisites

- An active Setmore account (free or paid plan)
- Your Setmore booking page URL

## Step 1: Get Your Setmore Booking Page URL

1. **Log in to Setmore**
   - Go to [https://my.setmore.com](https://my.setmore.com)
   - Sign in with your credentials

2. **Find Your Booking Page URL**
   - Click on **Settings** in the left sidebar
   - Go to **Booking Page** section
   - Click on **Share Your Booking Page**
   - Copy your booking page URL that looks like:
     ```
     https://booking.setmore.com/scheduleappointment/YOUR_BUSINESS_ID
     ```

   Alternative method:
   - Go to **Apps & Integrations**
   - Select **Website Widget**
   - Find your booking page link in the embed code

## Step 2: Configure Environment Variables

1. **Create a `.env.local` file** in the root of your project:
   ```bash
   touch .env.local
   ```

2. **Add your Setmore URL** to `.env.local`:
   ```env
   NEXT_PUBLIC_SETMORE_URL=https://booking.setmore.com/scheduleappointment/YOUR_BUSINESS_ID
   ```

   Replace `YOUR_BUSINESS_ID` with your actual business ID from Step 1.

3. **Save the file**

## Step 3: Restart Your Development Server

After adding the environment variable, restart your Next.js development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 4: Verify the Integration

1. Visit your website at `http://localhost:3000`
2. Click "BOOK SESSION" in the navigation or "BEGIN YOUR JOURNEY" in the hero
3. Scroll to the booking section
4. You should see your Setmore booking calendar embedded

## Setting Up Your Setmore Account

### Create Services

Set up your training programs in Setmore:

1. Go to **Services** in your Setmore dashboard
2. Click **Add Service**
3. Create services for each program:
   - **Strength Training**
     - Duration: 60 minutes
     - Price: $XX
   - **HIIT Combat**
     - Duration: 45 minutes
     - Price: $XX
   - **Personal Training**
     - Duration: 60 minutes
     - Price: $XX
   - **Warrior Bootcamp**
     - Duration: 90 minutes
     - Price: $XX

### Set Your Availability

Configure when clients can book sessions:

1. Go to **Settings > Working Hours**
2. Set your availability for each day:
   - Monday - Friday: 5:00 AM - 10:00 PM
   - Saturday: 6:00 AM - 8:00 PM
   - Sunday: 7:00 AM - 6:00 PM
3. Add breaks or blocked time as needed

### Enable Online Payments

Setmore integrates with multiple payment processors:

1. **Go to Settings > Payments**
2. **Choose a payment provider**:
   - **Stripe** (recommended - 2.9% + $0.30 per transaction)
   - **Square** (2.9% + $0.30 per transaction)
   - **PayPal** (varies by country)
   - **Razorpay** (for India)

3. **Connect your account**:
   - Click "Connect" next to your chosen provider
   - Follow the authentication flow
   - Complete the setup

4. **Set payment requirements**:
   - **Full payment**: Client pays entire amount when booking
   - **Deposit**: Set a fixed amount or percentage
   - **No payment**: Allow booking without immediate payment

5. **Configure refund policy**:
   - Set cancellation window (e.g., 24 hours)
   - Define refund amount (full, partial, or no refund)

### Customize Booking Page Appearance

Match your brand colors (red, black, white):

1. Go to **Settings > Booking Page**
2. Click **Customize Booking Page**
3. **Theme Settings**:
   - **Primary Color**: `#dc0000` (red)
   - **Text Color**: `#000000` (black)
   - **Background**: `#ffffff` (white)
4. **Upload your logo** (Body's By Bert logo)
5. **Add business description**
6. **Set booking confirmation message**

### Email Notifications

Set up automated emails:

1. **Go to Settings > Notifications**
2. **Enable customer notifications**:
   - Booking confirmation
   - Reminder (24 hours before)
   - Reminder (2 hours before)
   - Follow-up after appointment
3. **Customize email templates**:
   - Add your branding
   - Personalize messages
   - Include preparation instructions

### Calendar Sync

Prevent double bookings by syncing calendars:

1. **Go to Settings > Calendar Sync**
2. **Connect your calendar**:
   - Google Calendar
   - Outlook/Office 365
   - Apple iCloud
3. **Enable two-way sync**:
   - Setmore → Your Calendar
   - Your Calendar → Setmore

### Intake Forms

Collect client information before sessions:

1. **Go to Settings > Intake Forms**
2. **Create a new form**:
   - Fitness goals
   - Health conditions
   - Emergency contact
   - Liability waiver
3. **Attach to services** that require the form
4. **Make it mandatory** for first-time clients

## Advanced Customization

### Change Iframe Height

Edit `components/Booking.tsx` to adjust the booking widget height:

```tsx
<iframe
  src={setmoreUrl}
  width="100%"
  height="800"  // Change this value (600-1200 recommended)
  frameBorder="0"
  title="Schedule Appointment"
  scrolling="yes"
></iframe>
```

### Multiple Staff Members

If you have multiple trainers:

1. **Go to Settings > Staff**
2. **Add staff members**
3. **Assign services** to each staff member
4. **Set individual availability** for each trainer
5. Clients will see staff selection in booking flow

### Class/Group Sessions

For bootcamp or group training:

1. **Go to Services**
2. **Create a class**:
   - Set max capacity (e.g., 10 people)
   - Set recurring schedule
   - Set group pricing
3. **Enable waitlist** when full
4. Clients can book spots in group sessions

### Custom Booking Widget Styles

Modify `app/globals.css` to customize the booking section:

```css
.setmore-embed-container {
    /* Change border color */
    border: 2px solid var(--color-red);

    /* Adjust border radius */
    border-radius: 8px;

    /* Add shadow */
    box-shadow: 0 4px 20px rgba(220, 0, 0, 0.2);
}
```

## Troubleshooting

### Booking Widget Not Showing

**Issue**: The booking section appears empty.

**Solutions**:
- Verify `NEXT_PUBLIC_SETMORE_URL` is correct in `.env.local`
- Check your Setmore account is active
- Restart the dev server after adding env variables
- Clear browser cache and reload
- Check browser console for errors

### Wrong Booking Page Displaying

**Issue**: Shows a different business or error message.

**Solutions**:
- Verify your business ID in the URL
- Check that booking page is published in Setmore settings
- Ensure your Setmore account is active (not suspended)

### Payment Not Working

**Issue**: Clients can't complete payment.

**Solutions**:
- Verify payment integration in Setmore Settings > Payments
- Check that your payment processor account is active
- Test in Setmore's test mode first
- Verify you've completed payment provider verification

### Mobile Display Issues

**Issue**: Booking widget doesn't display properly on mobile.

**Solutions**:
- Setmore's widget is mobile-responsive by default
- Adjust iframe height if needed
- Test on real devices, not just browser resize
- Check `scrolling="yes"` attribute is set on iframe

### Calendar Sync Not Working

**Issue**: Appointments not syncing to personal calendar.

**Solutions**:
- Reconnect your calendar in Setmore settings
- Check calendar permissions are granted
- Verify two-way sync is enabled
- Allow up to 15 minutes for sync

## Setmore Features Overview

### Free Plan Includes:
- ✅ Unlimited appointments
- ✅ Up to 4 staff members
- ✅ Calendar sync
- ✅ Email reminders
- ✅ Customer database
- ✅ Mobile apps

### Premium Plan Adds:
- ✅ Online payments ($5/month)
- ✅ Intake forms
- ✅ Recurring appointments
- ✅ Class bookings
- ✅ Remove Setmore branding
- ✅ Advanced reporting

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variable** to your hosting platform:
   - **Vercel**: Project Settings > Environment Variables
   - **Netlify**: Site Settings > Build & Deploy > Environment
   - Add: `NEXT_PUBLIC_SETMORE_URL=your-actual-url`

2. **Redeploy** your site

3. **Test** the booking flow on production

4. **Enable SSL** (should be automatic with most hosts)

## Support Resources

- **Setmore Help Center**: [https://support.setmore.com](https://support.setmore.com)
- **Setmore API Docs**: [https://developer.setmore.com](https://developer.setmore.com)
- **Setmore Status**: [https://status.setmore.com](https://status.setmore.com)
- **Contact Setmore Support**: support@setmore.com

## Next Steps Checklist

After integration is complete:

- [ ] Set up all your services with pricing
- [ ] Configure your availability/working hours
- [ ] Connect payment processor (Stripe recommended)
- [ ] Customize booking page colors and branding
- [ ] Set up email notifications
- [ ] Create intake forms for new clients
- [ ] Sync with your personal calendar
- [ ] Add staff members if applicable
- [ ] Test the complete booking flow
- [ ] Book a test appointment to verify emails
- [ ] Set up cancellation policy
- [ ] Configure buffer time between appointments
- [ ] Add your business hours to the booking page
- [ ] Enable SMS reminders (premium feature)

## Tips for Success

1. **Response Time**: Enable instant booking confirmations
2. **Reminders**: Use both email and SMS reminders to reduce no-shows
3. **Buffer Time**: Add 10-15 minutes between sessions for cleanup/prep
4. **Cancellation Policy**: Clearly communicate your 24-hour cancellation policy
5. **Intake Forms**: Collect health info before first session for safety
6. **Follow-up**: Send post-session emails asking for feedback
7. **Promotions**: Use Setmore to create discount codes for new clients

---

**Questions?** Refer to the main README.md for general website customization.
