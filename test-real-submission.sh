#!/bin/bash

echo "Testing real form submission to production server..."
echo ""

curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Real Submission",
    "email": "test@example.com",
    "phone": "555-123-4567",
    "subject": "asylum",
    "message": "This is testing a real submission to diagnose email issues."
  }' \
  -v

echo ""
echo ""
echo "Check the logs above for any errors."
echo "Also check your email at info@mailyanlaw.com for the notification."
