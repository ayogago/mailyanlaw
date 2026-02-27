"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    textSpacing: false,
    lineHeight: false,
    dyslexiaFont: false,
    highContrast: false,
    darkMode: false,
    lightMode: false,
    highlightLinks: false,
    bigCursor: false,
    readingGuide: false,
    stopAnimations: false,
  });

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.style.fontSize = `${settings.fontSize}%`;

    // Text spacing
    if (settings.textSpacing) {
      root.style.letterSpacing = "0.12em";
      root.style.wordSpacing = "0.16em";
    } else {
      root.style.letterSpacing = "";
      root.style.wordSpacing = "";
    }

    // Line height
    if (settings.lineHeight) {
      root.style.lineHeight = "2";
    } else {
      root.style.lineHeight = "";
    }

    // Dyslexia-friendly font
    if (settings.dyslexiaFont) {
      root.style.fontFamily = "Arial, Helvetica, sans-serif";
    } else {
      root.style.fontFamily = "";
    }

    // High contrast
    if (settings.highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    // Dark mode
    if (settings.darkMode) {
      root.classList.add("dark-mode-accessibility");
      root.classList.remove("light-mode-accessibility");
    } else {
      root.classList.remove("dark-mode-accessibility");
    }

    // Light mode
    if (settings.lightMode) {
      root.classList.add("light-mode-accessibility");
      root.classList.remove("dark-mode-accessibility");
    } else {
      root.classList.remove("light-mode-accessibility");
    }

    // Highlight links
    if (settings.highlightLinks) {
      root.classList.add("highlight-links");
    } else {
      root.classList.remove("highlight-links");
    }

    // Big cursor
    if (settings.bigCursor) {
      root.classList.add("big-cursor");
    } else {
      root.classList.remove("big-cursor");
    }

    // Reading guide
    if (settings.readingGuide) {
      root.classList.add("reading-guide");
    } else {
      root.classList.remove("reading-guide");
    }

    // Stop animations
    if (settings.stopAnimations) {
      root.classList.add("stop-animations");
    } else {
      root.classList.remove("stop-animations");
    }
  }, [settings]);

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      textSpacing: false,
      lineHeight: false,
      dyslexiaFont: false,
      highContrast: false,
      darkMode: false,
      lightMode: false,
      highlightLinks: false,
      bigCursor: false,
      readingGuide: false,
      stopAnimations: false,
    });
  };

  const increaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.min(prev.fontSize + 10, 150),
    }));
  };

  const decreaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.max(prev.fontSize - 10, 80),
    }));
  };

  const toggleSetting = (key: keyof typeof settings) => {
    if (key === "darkMode" && !settings.darkMode) {
      setSettings((prev) => ({ ...prev, darkMode: true, lightMode: false }));
    } else if (key === "lightMode" && !settings.lightMode) {
      setSettings((prev) => ({ ...prev, lightMode: true, darkMode: false }));
    } else {
      setSettings((prev) => ({
        ...prev,
        [key]: typeof prev[key] === "boolean" ? !prev[key] : prev[key],
      }));
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Accessibility Menu"
        title="Accessibility Options"
      >
        <Image
          src="/accessibility-icon.png"
          alt="Accessibility"
          width={32}
          height={32}
          className="w-8 h-8 brightness-0 invert"
        />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl w-80 max-h-[600px] overflow-y-auto border-2 border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-t-2xl sticky top-0 z-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">Accessibility</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Close accessibility menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-blue-100">Adjust settings for better accessibility</p>
          </div>

          {/* Settings */}
          <div className="p-5 space-y-4">
            {/* Font Size */}
            <div className="pb-4 border-b border-gray-200">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Font Size: {settings.fontSize}%
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseFontSize}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${((settings.fontSize - 80) / 70) * 100}%` }}
                  ></div>
                </div>
                <button
                  onClick={increaseFontSize}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Toggle Options */}
            <div className="space-y-3">
              {/* Text Spacing */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Text Spacing</label>
                <button
                  onClick={() => toggleSetting("textSpacing")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.textSpacing ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle text spacing"
                  aria-pressed={settings.textSpacing}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.textSpacing ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Line Height */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Line Height</label>
                <button
                  onClick={() => toggleSetting("lineHeight")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.lineHeight ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle line height"
                  aria-pressed={settings.lineHeight}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.lineHeight ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Dyslexia Font */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Dyslexia Friendly</label>
                <button
                  onClick={() => toggleSetting("dyslexiaFont")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.dyslexiaFont ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle dyslexia friendly font"
                  aria-pressed={settings.dyslexiaFont}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.dyslexiaFont ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">High Contrast</label>
                <button
                  onClick={() => toggleSetting("highContrast")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.highContrast ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle high contrast"
                  aria-pressed={settings.highContrast}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.highContrast ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Dark Mode</label>
                <button
                  onClick={() => toggleSetting("darkMode")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.darkMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle dark mode"
                  aria-pressed={settings.darkMode}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.darkMode ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Light Mode */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Light Mode</label>
                <button
                  onClick={() => toggleSetting("lightMode")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.lightMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle light mode"
                  aria-pressed={settings.lightMode}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.lightMode ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Highlight Links */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Highlight Links</label>
                <button
                  onClick={() => toggleSetting("highlightLinks")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.highlightLinks ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle highlight links"
                  aria-pressed={settings.highlightLinks}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.highlightLinks ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Big Cursor */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Big Cursor</label>
                <button
                  onClick={() => toggleSetting("bigCursor")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.bigCursor ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle big cursor"
                  aria-pressed={settings.bigCursor}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.bigCursor ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Reading Guide */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Reading Guide</label>
                <button
                  onClick={() => toggleSetting("readingGuide")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.readingGuide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle reading guide"
                  aria-pressed={settings.readingGuide}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.readingGuide ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>

              {/* Stop Animations */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Stop Animations</label>
                <button
                  onClick={() => toggleSetting("stopAnimations")}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    settings.stopAnimations ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label="Toggle stop animations"
                  aria-pressed={settings.stopAnimations}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.stopAnimations ? "translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Reset all accessibility settings"
            >
              Reset All
            </button>
          </div>
        </div>
      )}

      {/* Reading Guide Line */}
      {settings.readingGuide && (
        <div
          id="reading-guide"
          className="fixed left-0 right-0 h-1 bg-yellow-400 pointer-events-none z-40"
          style={{ top: "50%" }}
        ></div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(1.5);
        }

        .dark-mode-accessibility {
          background-color: #1a1a1a !important;
          color: #ffffff !important;
        }

        .dark-mode-accessibility * {
          background-color: inherit !important;
          color: inherit !important;
          border-color: #444 !important;
        }

        .light-mode-accessibility {
          background-color: #ffffff !important;
          color: #000000 !important;
        }

        .light-mode-accessibility * {
          background-color: inherit !important;
          color: inherit !important;
        }

        .highlight-links a {
          background-color: #ffff00 !important;
          color: #000000 !important;
          text-decoration: underline !important;
          padding: 2px 4px !important;
          border-radius: 3px !important;
        }

        .big-cursor,
        .big-cursor * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="black" stroke="white" stroke-width="1"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') 12 12, auto !important;
        }

        .stop-animations,
        .stop-animations * {
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </>
  );
}
