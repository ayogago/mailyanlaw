const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('Testing email configuration...\n');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***configured***' : 'NOT SET');
  console.log('');

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✓ SMTP connection verified successfully!\n');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"Mailyan Law Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Test Email - Email Configuration Working',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px;">
            <h1 style="color: #1e293b;">✓ Email Configuration Test</h1>
            <p style="font-size: 16px; color: #64748b;">This is a test email to verify that your Gmail SMTP configuration is working correctly.</p>
            <div style="background-color: #dcfce7; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #166534; font-weight: 600;">Email sending is working properly!</p>
            </div>
            <p style="font-size: 14px; color: #94a3b8;">Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    console.log('✓ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\n✓ All tests passed! Email configuration is working correctly.');
  } catch (error) {
    console.error('✗ Error:', error.message);

    if (error.code === 'EAUTH') {
      console.error('\n❌ Authentication failed!');
      console.error('Possible issues:');
      console.error('  1. Wrong password or app password');
      console.error('  2. 2-Factor Authentication requires an App Password');
      console.error('  3. "Less secure app access" needs to be enabled (not recommended)');
      console.error('\nTo fix: Use an App Password from https://myaccount.google.com/apppasswords');
    } else if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      console.error('\n❌ Network connection error!');
      console.error('Cannot reach Gmail servers. Check your internet connection.');
    } else {
      console.error('\n❌ Unexpected error occurred.');
    }
    process.exit(1);
  }
}

testEmail();
