"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Media", href: "/media" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b-2 border-primary/20 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:1-747-200-5520" className="flex items-center gap-2 hover:text-secondary transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1-747-200-5520</span>
              </a>
              <a href="mailto:info@mailyanlaw.com" className="hidden sm:flex items-center gap-2 hover:text-secondary transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@mailyanlaw.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
              <div className="flex items-center gap-2 md:gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-1 md:gap-1.5">
                  <svg width="16" height="12" viewBox="0 0 9 6" className="inline-block md:w-5 md:h-3.5">
                    <rect fill="#fff" width="9" height="2"/>
                    <rect fill="#0039a6" y="2" width="9" height="2"/>
                    <rect fill="#d52b1e" y="4" width="9" height="2"/>
                  </svg>
                  <span>Мы говорим по-русски</span>
                </span>
                <span className="text-gray-500">|</span>
                <span className="flex items-center gap-1 md:gap-1.5">
                  <svg width="16" height="12" viewBox="0 0 6 4" className="inline-block md:w-5 md:h-3.5">
                    <rect fill="#d90012" width="6" height="4"/>
                    <rect fill="#0033a0" y="1.33" width="6" height="2.67"/>
                    <rect fill="#f2a800" y="2.67" width="6" height="1.33"/>
                  </svg>
                  <span>Մենք խոսում ենք հայերեն</span>
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon – Fri: 9 am – 5 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 relative">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo-navy-white.jpg"
              alt="Mailyan Law"
              width={350}
              height={120}
              className="h-20 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-gray-700 hover:text-primary font-semibold text-sm uppercase tracking-wider transition-all group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 top-6 text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeIn">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 px-4 bg-primary text-white font-semibold rounded-lg text-center mt-4 hover:bg-opacity-90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
