# Email Configuration Guide 📧

## 🎯 Overview

Your portfolio now has a fully functional contact form that sends emails directly to your Gmail account using SMTP.

## 🔧 Setup Instructions

### Step 1: Configure Gmail

#### Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled

#### Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** as the app
3. Select **Other** as the device and name it "Portfolio Contact Form"
4. Click **Generate**
5. Copy the 16-character password (you'll need this for `.env.local`)

### Step 2: Configure Environment Variables

1. Open `.env.local` in your project root
2. Update the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com          # Your Gmail address
SMTP_PASS=xxxx xxxx xxxx xxxx           # App password from Step 1
SMTP_FROM=your-email@gmail.com          # Your Gmail address
SMTP_TO=nelsonprox92@gmail.com          # Where to receive messages
```

**Important Notes:**
- `SMTP_USER` and `SMTP_FROM` should be the same Gmail address
- `SMTP_PASS` is the 16-character App Password (NOT your regular Gmail password)
- `SMTP_TO` is where you want to receive contact form submissions
- Remove spaces from the App Password if copying from Google

### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Start it again
npm run dev
```

**Note:** Environment variables are only loaded on server start.

## 📋 Features

### ✅ Security Features
- **Rate Limiting**: 3 emails per hour per IP address
- **Input Validation**: Email format, field length checks
- **Sanitization**: Prevents injection attacks
- **Error Handling**: Graceful error messages

### ✅ Email Features
- **HTML Email**: Beautiful formatted emails
- **Plain Text Fallback**: For email clients that don't support HTML
- **Reply-To Header**: Click reply to respond directly to sender
- **Metadata**: Includes timestamp and IP address
- **Professional Design**: Gradient header, clean layout

### ✅ User Experience
- **Loading States**: Shows spinner while sending
- **Success Toast**: Confirmation message
- **Error Toast**: Clear error messages
- **Form Reset**: Clears form after successful submission

## 📧 Email Template

When someone submits the form, you'll receive an email like this:

**Subject:** New Portfolio Message from [Name]

**Content:**
- Sender's name
- Sender's email (clickable)
- Message content
- Reply button
- Timestamp
- IP address (for security)

## 🧪 Testing

### Test the Contact Form

1. Fill out the form on your portfolio
2. Click "Send Message"
3. Check your Gmail inbox (SMTP_TO address)
4. You should receive the email within seconds

### Test Rate Limiting

1. Send 3 messages quickly
2. Try to send a 4th message
3. You should see: "Too many requests. Please try again later."

### Test Validation

Try these to test validation:
- Empty fields → "All fields are required"
- Invalid email → "Invalid email address"
- Very long message (>5000 chars) → "Field length exceeded"

## 🐛 Troubleshooting

### "Email service is not configured"
- Check that all environment variables are set in `.env.local`
- Restart the development server
- Verify no typos in variable names

### "Authentication failed"
- Verify you're using an App Password, not your regular Gmail password
- Check that 2-Factor Authentication is enabled
- Regenerate the App Password if needed
- Remove any spaces from the App Password

### "Failed to send message"
- Check your internet connection
- Verify Gmail SMTP is not blocked by firewall
- Check Gmail account is not locked or suspended
- Review server logs for detailed error messages

### Rate Limit Issues
- Wait 1 hour for the rate limit to reset
- Or restart the server (clears in-memory rate limit)

## 🔒 Security Best Practices

### ✅ Do's
- ✅ Use App Passwords (never regular passwords)
- ✅ Keep `.env.local` in `.gitignore`
- ✅ Use different passwords for production
- ✅ Monitor email logs for abuse
- ✅ Adjust rate limits as needed

### ❌ Don'ts
- ❌ Never commit `.env.local` to Git
- ❌ Don't share your App Password
- ❌ Don't use regular Gmail password
- ❌ Don't disable rate limiting
- ❌ Don't expose SMTP credentials in client code

## 📁 File Structure

```
frontend/
├── .env.local                    # Your SMTP credentials (DO NOT COMMIT)
├── .env.example                  # Template for others
├── src/
│   ├── app/
│   │   └── api/
│   │       └── send-email/
│   │           └── route.ts      # Email API endpoint
│   └── components/
│       └── sections/
│           └── Contact.tsx       # Contact form component
```

## 🚀 Deployment

### Vercel (Recommended)

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add each variable from `.env.local`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `SMTP_TO`
4. Redeploy your project

### Other Platforms

Add the same environment variables in your platform's settings:
- **Netlify**: Site settings → Environment variables
- **Railway**: Project → Variables
- **Render**: Environment → Environment Variables

## 📊 API Endpoint

### POST `/api/send-email`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "messageId": "<unique-id@gmail.com>"
}
```

**Error Response (400/429/500):**
```json
{
  "error": "Error message here",
  "details": "Additional details (dev only)"
}
```

## 🎨 Customization

### Change Rate Limit
Edit `src/app/api/send-email/route.ts`:
```typescript
const RATE_LIMIT = 5; // 5 emails per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
```

### Customize Email Template
Edit the `html` section in `mailOptions` in `route.ts`

### Change Email Subject
Edit the `subject` field in `mailOptions`:
```typescript
subject: `Portfolio Inquiry from ${name}`,
```

### Add CC/BCC
Add to `mailOptions`:
```typescript
cc: 'team@example.com',
bcc: 'archive@example.com',
```

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` (TLS) or `465` (SSL) |
| `SMTP_USER` | Your Gmail address | `your-email@gmail.com` |
| `SMTP_PASS` | Gmail App Password | `xxxx xxxx xxxx xxxx` |
| `SMTP_FROM` | Sender email address | `your-email@gmail.com` |
| `SMTP_TO` | Recipient email address | `nelsonprox92@gmail.com` |

## ✅ Checklist

Before going live:
- [ ] Gmail 2FA enabled
- [ ] App Password generated
- [ ] `.env.local` configured
- [ ] Server restarted
- [ ] Test email sent successfully
- [ ] Rate limiting tested
- [ ] Environment variables added to hosting platform
- [ ] `.env.local` NOT committed to Git

## 🎉 Success!

Your contact form is now fully functional and will send emails directly to your Gmail inbox!

---

**Need Help?**
- Check the troubleshooting section above
- Review server logs for detailed errors
- Verify all environment variables are set correctly
- Test with a simple email first

**Security Note:**
Never share your `.env.local` file or App Password with anyone!
