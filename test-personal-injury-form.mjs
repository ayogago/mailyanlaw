#!/usr/bin/env node

/**
 * Test script for Personal Injury contact form
 * This script tests the form submission and email sending functionality
 */

console.log('🧪 Testing Personal Injury Form Submission\n');
console.log('='.repeat(60));

// Test form data
const testData = {
  name: 'Test User - Personal Injury',
  email: 'test@example.com',
  phone: '(555) 123-4567',
  subject: 'personal-injury',
  message: 'This is a test submission for the Personal Injury form. I was injured in a car accident and need legal representation.',
  honeypot: '', // Should be empty for valid submissions
  formLoadTime: Date.now() - 5000, // Simulate form being open for 5 seconds
};

async function testFormSubmission() {
  try {
    console.log('\n📤 Sending test form submission...');
    console.log('Form Data:', JSON.stringify(testData, null, 2));
    console.log('');

    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log(`Response Status: ${response.status} ${response.statusText}`);

    const result = await response.json();
    console.log('Response Body:', JSON.stringify(result, null, 2));

    if (response.ok) {
      console.log('\n✅ SUCCESS: Form submission successful!');
      console.log('📧 Check your email inbox at info@mailyanlaw.com for:');
      console.log('   1. Law firm notification email');
      console.log('   2. Client confirmation email (sent to test@example.com)');
      console.log('\n✨ The Personal Injury form is working correctly!');
    } else {
      console.log('\n❌ FAILED: Form submission failed');
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.log('\n❌ ERROR: Failed to connect to the server');
    console.log('Error:', error.message);
    console.log('\n💡 Make sure the Next.js server is running:');
    console.log('   npm run dev');
    console.log('   OR');
    console.log('   pm2 list (to check if mailyanlaw is running)');
  }
}

// Run the test
testFormSubmission();
