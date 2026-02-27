import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    console.log('[Contact Form] Received request');
    const body = await request.json();
    console.log('[Contact Form] Body:', JSON.stringify(body, null, 2));
    const { name, email, phone, subject, message, honeypot, formLoadTime } = body;

    // Anti-spam validation: Check honeypot field
    if (honeypot) {
      console.log('[Contact Form] Spam detected - honeypot field filled');
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Anti-spam validation: Check form submission time (minimum 3 seconds)
    const submissionTime = Date.now();
    const timeSpent = submissionTime - formLoadTime;
    if (timeSpent < 3000) {
      console.log('[Contact Form] Spam detected - form submitted too quickly:', timeSpent, 'ms');
      return NextResponse.json(
        { error: 'Please take your time filling out the form' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      console.log('[Contact Form] Validation failed - missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Anti-spam validation: Check for gibberish text
    const isGibberish = (text: string): boolean => {
      // Remove spaces and convert to lowercase
      const cleanText = text.toLowerCase().replace(/\s+/g, '');

      // Check for excessive consonant clusters (5+ consonants in a row)
      const consonantCluster = /[bcdfghjklmnpqrstvwxyz]{5,}/i;
      if (consonantCluster.test(cleanText)) {
        return true;
      }

      // Check for very low vowel ratio (less than 15% vowels)
      const vowels = cleanText.match(/[aeiou]/g)?.length || 0;
      const vowelRatio = vowels / cleanText.length;
      if (cleanText.length > 10 && vowelRatio < 0.15) {
        return true;
      }

      // Check for excessive repetition of same character (5+ times)
      const repeatPattern = /(.)\1{4,}/;
      if (repeatPattern.test(cleanText)) {
        return true;
      }

      // Check for random capital letter patterns (like HGnShvlrWtSOG)
      const randomCapsPattern = /[A-Z][a-z]*[A-Z][a-z]*[A-Z]/;
      if (randomCapsPattern.test(text) && text.length < 30) {
        return true;
      }

      return false;
    };

    // Check if name or message contains gibberish
    if (isGibberish(name)) {
      console.log('[Contact Form] Spam detected - gibberish in name:', name);
      return NextResponse.json(
        { error: 'Please enter a valid name' },
        { status: 400 }
      );
    }

    if (isGibberish(message)) {
      console.log('[Contact Form] Spam detected - gibberish in message');
      return NextResponse.json(
        { error: 'Please enter a meaningful message' },
        { status: 400 }
      );
    }

    // Anti-spam validation: Check minimum text lengths
    if (name.trim().length < 2) {
      console.log('[Contact Form] Validation failed - name too short');
      return NextResponse.json(
        { error: 'Please enter a valid name (at least 2 characters)' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      console.log('[Contact Form] Validation failed - message too short');
      return NextResponse.json(
        { error: 'Please provide more details in your message (at least 10 characters)' },
        { status: 400 }
      );
    }

    // Anti-spam validation: Check email format and domain
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[Contact Form] Validation failed - invalid email format');
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Block common disposable email domains
    const disposableDomains = [
      'tempmail', 'throwaway', 'guerrillamail', 'mailinator', '10minutemail',
      'trashmail', 'fakeinbox', 'yopmail', 'getnada', 'temp-mail'
    ];
    const emailDomain = email.toLowerCase().split('@')[1];
    if (disposableDomains.some(domain => emailDomain.includes(domain))) {
      console.log('[Contact Form] Spam detected - disposable email domain:', emailDomain);
      return NextResponse.json(
        { error: 'Please use a valid email address' },
        { status: 400 }
      );
    }
    console.log('[Contact Form] Validation passed');

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Service name mapping
    const serviceNames: { [key: string]: string } = {
      asylum: 'Asylum',
      deportation: 'Deportation Defense',
      family: 'Family Petitions',
      naturalization: 'Naturalization',
      'u-visa': 'U-Visa',
      'personal-injury': 'Personal Injury',
      other: 'Other Immigration Matter',
    };

    const serviceName = serviceNames[subject] || subject;

    // Beautiful HTML email template for the law firm
    const lawFirmEmailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header with Logo -->
          <tr>
            <td style="background: #011e40; padding: 40px 30px; text-align: center;">
              <a href="https://www.mailyanlaw.com" style="text-decoration: none;">
                <img src="https://www.mailyanlaw.com/Image-Meline/mailyan-law-logo-white-navy-background.jpg" alt="Mailyan Law" style="max-width: 200px; height: auto; margin-bottom: 20px;">
              </a>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">New Contact Form Submission</h1>
              <p style="color: #cbd5e1; margin: 10px 0 0 0; font-size: 16px;">From mailyanlaw.com</p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #dbeafe; padding: 20px 30px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 600;">
                ⚡ New inquiry received - Please respond within 24 hours
              </p>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Client Details Header -->
              <h2 style="color: #1e293b; font-size: 20px; margin: 0 0 25px 0; padding-bottom: 15px; border-bottom: 2px solid #e2e8f0;">
                📋 Client Information
              </h2>

              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                    <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 600;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Email and Phone -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="48%" style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                      <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                    <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                      <a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Service Type -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0 0 5px 0; color: #1e40af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Immigration Service Requested</p>
                    <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 700;">${serviceName}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <h2 style="color: #1e293b; font-size: 20px; margin: 30px 0 15px 0; padding-bottom: 15px; border-bottom: 2px solid #e2e8f0;">
                💬 Client Message
              </h2>
              <div style="padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #64748b;">
                <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">
                This email was sent from the contact form at
              </p>
              <p style="margin: 0;">
                <a href="https://www.mailyanlaw.com" style="color: #3b82f6; text-decoration: none; font-weight: 600;">www.mailyanlaw.com</a>
              </p>
              <p style="margin: 15px 0 0 0; color: #94a3b8; font-size: 12px;">
                📍 801 N Brand Blvd Suite 665, Glendale, CA 91203 | 📞 1-747-200-5520
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Beautiful confirmation email for the client
    const clientEmailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Mailyan Law</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header with Logo -->
          <tr>
            <td style="background: #011e40; padding: 40px 30px; text-align: center;">
              <a href="https://www.mailyanlaw.com" style="text-decoration: none;">
                <img src="https://www.mailyanlaw.com/Image-Meline/mailyan-law-logo-white-navy-background.jpg" alt="Mailyan Law" style="max-width: 200px; height: auto; margin-bottom: 20px;">
              </a>
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Thank You for Reaching Out!</h1>
            </td>
          </tr>

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <div style="display: inline-block; padding: 20px; background-color: #dcfce7; border-radius: 50%; margin-bottom: 20px;">
                <span style="font-size: 48px;">✓</span>
              </div>
              <h2 style="color: #1e293b; font-size: 24px; margin: 0 0 15px 0;">We've Received Your Message</h2>
              <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                Dear ${name},<br><br>
                Thank you for contacting Mailyan Law. We have received your inquiry regarding <strong>${serviceName}</strong> and will review your message carefully.
              </p>
            </td>
          </tr>

          <!-- What's Next -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #eff6ff; padding: 30px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">What Happens Next?</h3>
                <ul style="color: #1e293b; margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li>Our team will review your inquiry within <strong>24–48 business hours</strong></li>
                  <li>A team member will contact you to discuss your case</li>
                  <li>We'll schedule a consultation at your convenience</li>
                </ul>
              </div>
            </td>
          </tr>

          <!-- Your Submission Details -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <h3 style="color: #1e293b; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0;">Your Submission Details</h3>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td style="padding: 12px 15px; background-color: #f8fafc; border-radius: 6px;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 600;">SERVICE TYPE</p>
                    <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${serviceName}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 15px; background-color: #f8fafc; border-radius: 6px;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 600;">YOUR MESSAGE</p>
                    <p style="margin: 10px 0 0 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; border-top: 1px solid #e2e8f0;">
              <h3 style="color: #1e293b; margin: 0 0 20px 0; text-align: center;">Need Immediate Assistance?</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="text-align: center; padding: 15px;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 600;">CALL US</p>
                    <p style="margin: 5px 0 0 0;">
                      <a href="tel:1-747-200-5520" style="color: #3b82f6; text-decoration: none; font-size: 18px; font-weight: 700;">1-747-200-5520</a>
                    </p>
                  </td>
                  <td width="50%" style="text-align: center; padding: 15px;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 600;">EMAIL US</p>
                    <p style="margin: 5px 0 0 0;">
                      <a href="mailto:info@mailyanlaw.com" style="color: #3b82f6; text-decoration: none; font-size: 16px; font-weight: 600;">info@mailyanlaw.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #011e40; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #cbd5e1; font-size: 14px; font-weight: 600;">
                Mailyan Law - Immigration Attorney Services
              </p>
              <p style="margin: 0 0 15px 0; color: #94a3b8; font-size: 13px;">
                801 N Brand Blvd Suite 665, Glendale, CA 91203
              </p>
              <p style="margin: 0;">
                <a href="https://www.mailyanlaw.com" style="color: #60a5fa; text-decoration: none; font-weight: 600;">www.mailyanlaw.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email to law firm
    console.log('[Contact Form] Sending email to law firm...');
    await transporter.sendMail({
      from: `"Mailyan Law Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔔 New Contact Form: ${serviceName} - ${name}`,
      html: lawFirmEmailHtml,
      replyTo: email,
    });
    console.log('[Contact Form] Law firm email sent successfully');

    // Send confirmation email to client
    console.log('[Contact Form] Sending confirmation email to client...');
    await transporter.sendMail({
      from: `"Mailyan Law" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Mailyan Law',
      html: clientEmailHtml,
    });
    console.log('[Contact Form] Client confirmation email sent successfully');

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[Contact Form] ERROR:', error);
    console.error('[Contact Form] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
