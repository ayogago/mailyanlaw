#!/bin/bash

echo "========================================="
echo "Watching Contact Form Logs"
echo "========================================="
echo "Press Ctrl+C to stop"
echo ""

tail -f /tmp/mailyan-server.log | grep --line-buffered "\[Contact Form\]"
