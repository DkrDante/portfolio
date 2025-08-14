# Contact Form Setup with Resend

Your contact form is now integrated with Resend for sending emails! Here's how to complete the setup:

## 🚀 Quick Setup

### 1. Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to "API Keys" in your dashboard
4. Create a new API key
5. Copy the API key

### 2. Set Up Environment Variables

Create a `.env.local` file in your project root:

```bash
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Your email address (where you want to receive contact form emails)
CONTACT_EMAIL=dkrdante@gmail.com
```

### 3. Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to your portfolio website
3. Fill out the contact form
4. Submit the form
5. Check your email (dkrdante@gmail.com) for the message

## 📧 How It Works

1. **User fills out form** → Name, Email, Subject, Message
2. **Form validation** → Checks all fields are filled and email is valid
3. **API call** → Sends data to `/api/contact`
4. **Resend processes** → Sends email to your inbox
5. **Success response** → User sees confirmation message

## 🎨 Email Template

The email you receive will look like this:

```
Subject: Portfolio Contact: [User's Subject]

New Contact Form Submission

Name: [User's Name]
Email: [User's Email]
Subject: [User's Subject]
Message: [User's Message]

This message was sent from your portfolio contact form at [timestamp]
```

## 🔧 Customization Options

### Change Email Address

Update the `CONTACT_EMAIL` in your `.env.local` file.

### Customize Email Template

Edit the HTML template in `src/pages/api/contact.ts` (lines 45-60).

### Add Your Domain

1. In Resend dashboard, add your domain
2. Update the `from` field in the API route:
   ```javascript
   from: "Contact Form <contact@yourdomain.com>";
   ```

### Add Spam Protection

Consider adding reCAPTCHA or similar protection.

## 📊 Resend Free Tier

- **3,000 emails per month** (100 per day)
- **No credit card required**
- **Great deliverability**
- **Email analytics**

## 🚨 Important Notes

1. **Never commit your API key** to version control
2. **Add `.env.local` to `.gitignore`** (should already be there)
3. **Test in development** before deploying
4. **Monitor your email usage** in Resend dashboard

## 🔍 Troubleshooting

### Emails not sending?

1. Check your API key is correct
2. Verify your email address in environment variables
3. Check browser console for errors
4. Check server logs for API errors

### Form not working?

1. Make sure the API route is accessible
2. Check network tab in browser dev tools
3. Verify all environment variables are set

## 🎯 Next Steps

Once this is working, consider:

- Adding email templates
- Setting up email notifications
- Adding spam protection
- Creating an auto-reply to the sender
- Adding email analytics

---

**Need help?** Check the [Resend documentation](https://resend.com/docs) or [Next.js API routes](https://nextjs.org/docs/api-routes/introduction).
