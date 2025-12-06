import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting (simple in-memory store)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // 3 emails per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Field length exceeded.' },
        { status: 400 }
      );
    }

    // Check environment variables
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
      SMTP_TO,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
      console.error('Missing SMTP configuration');
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${SMTP_FROM}>`,
      to: SMTP_TO,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio contact form
IP: ${ip}
Time: ${new Date().toISOString()}
      `.trim(),
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      background-color: #f5f5f7;
      padding: 40px 20px;
    }
    .email-container {
      max-width: 680px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06);
    }
    .header {
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      padding: 48px 40px;
      text-align: center;
      border-bottom: 1px solid #e5e5e7;
    }
    .header h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
    }
    .header p {
      color: #a1a1a6;
      font-size: 15px;
      font-weight: 400;
    }
    .content {
      padding: 48px 40px;
    }
    .greeting {
      font-size: 17px;
      color: #1d1d1f;
      margin-bottom: 32px;
      font-weight: 500;
    }
    .info-grid {
      display: table;
      width: 100%;
      margin-bottom: 32px;
      border-collapse: separate;
      border-spacing: 0 12px;
    }
    .info-row {
      display: table-row;
    }
    .info-label {
      display: table-cell;
      font-size: 13px;
      font-weight: 600;
      color: #86868b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding-right: 24px;
      vertical-align: top;
      width: 100px;
      padding-top: 2px;
    }
    .info-value {
      display: table-cell;
      font-size: 15px;
      color: #1d1d1f;
      font-weight: 400;
      vertical-align: top;
    }
    .info-value a {
      color: #0071e3;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .info-value a:hover {
      color: #0077ed;
      text-decoration: underline;
    }
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #d2d2d7 20%, #d2d2d7 80%, transparent);
      margin: 32px 0;
    }
    .message-section {
      margin-bottom: 40px;
    }
    .message-label {
      font-size: 13px;
      font-weight: 600;
      color: #86868b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 16px;
    }
    .message-content {
      background: #f5f5f7;
      border: 1px solid #e5e5e7;
      border-radius: 8px;
      padding: 24px;
      font-size: 15px;
      line-height: 1.7;
      color: #1d1d1f;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .action-section {
      text-align: center;
      margin: 40px 0;
    }
    .reply-button {
      display: inline-block;
      padding: 14px 32px;
      background: #000000;
      color: #ffffff;
      text-decoration: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: -0.2px;
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .reply-button:hover {
      background: #1a1a1a;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      transform: translateY(-1px);
    }
    .footer {
      background: #f5f5f7;
      padding: 32px 40px;
      border-top: 1px solid #e5e5e7;
    }
    .footer-content {
      font-size: 13px;
      color: #86868b;
      line-height: 1.8;
    }
    .footer-row {
      margin-bottom: 6px;
    }
    .footer-label {
      display: inline-block;
      min-width: 80px;
      font-weight: 600;
      color: #6e6e73;
    }
    .footer-value {
      color: #86868b;
    }
    .signature {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #d2d2d7;
      font-size: 12px;
      color: #a1a1a6;
      text-align: center;
    }
    @media only screen and (max-width: 600px) {
      body {
        padding: 20px 10px;
      }
      .header, .content, .footer {
        padding: 32px 24px;
      }
      .header h1 {
        font-size: 24px;
      }
      .info-grid {
        display: block;
      }
      .info-row {
        display: block;
        margin-bottom: 20px;
      }
      .info-label, .info-value {
        display: block;
        width: 100%;
        padding: 0;
      }
      .info-label {
        margin-bottom: 6px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Contact Request</h1>
      <p>Portfolio Website Inquiry</p>
    </div>
    
    <div class="content">
      <div class="greeting">
        You have received a new message from your portfolio contact form.
      </div>
      
      <div class="info-grid">
        <div class="info-row">
          <div class="info-label">From</div>
          <div class="info-value">${name}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Email</div>
          <div class="info-value">
            <a href="mailto:${email}">${email}</a>
          </div>
        </div>
        <div class="info-row">
          <div class="info-label">Date</div>
          <div class="info-value">${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <div class="message-section">
        <div class="message-label">Message</div>
        <div class="message-content">${message}</div>
      </div>
      
      <div class="action-section">
        <a href="mailto:${email}?subject=Re: Portfolio Inquiry" class="reply-button">
          Reply to ${name.split(' ')[0]}
        </a>
      </div>
    </div>
    
    <div class="footer">
      <div class="footer-content">
        <div class="footer-row">
          <span class="footer-label">Source:</span>
          <span class="footer-value">Portfolio Contact Form</span>
        </div>
        <div class="footer-row">
          <span class="footer-label">IP Address:</span>
          <span class="footer-value">${ip}</span>
        </div>
        <div class="footer-row">
          <span class="footer-label">Timestamp:</span>
          <span class="footer-value">${new Date().toISOString()}</span>
        </div>
      </div>
      
      <div class="signature">
        This is an automated message from your portfolio website.<br>
        Please do not reply directly to this email.
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
