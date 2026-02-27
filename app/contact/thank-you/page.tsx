"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className={`transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Success Check Animation */}
            <div className="inline-block mb-8">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-2xl transform transition-transform duration-500 hover:scale-110">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">Thank You!</h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
              Your message has been successfully sent.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* What's Next Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  We've Received Your Message
                </h2>
                <p className="text-lg text-gray-600">
                  A confirmation email has been sent to your inbox.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200 mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
                  What Happens Next?
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700">Our team will review your inquiry within <strong>24–48 business hours</strong>.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700">A team member will contact you to discuss your case.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700">We'll schedule a consultation at your convenience.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info for Urgent Matters */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Need Immediate Assistance?</h4>
                    <p className="text-gray-700 mb-3">
                      For urgent immigration matters, please call us directly during business hours:
                    </p>
                    <a
                      href="tel:1-747-200-5520"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      1-747-200-5520
                    </a>
                    <p className="text-sm text-gray-600 mt-2">Mon – Fri: 9:00 AM – 5:00 PM PST</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4 px-6 rounded-lg font-bold text-center hover:from-slate-900 hover:to-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-slate-900 py-4 px-6 rounded-lg font-bold text-center border-2 border-slate-900 hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Immigration Resources</h3>
                <p className="text-sm text-gray-600 mb-4">Learn more about immigration processes and requirements.</p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Visit Our Blog →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Case Portal</h3>
                <p className="text-sm text-gray-600 mb-4">Access your case information and documents securely.</p>
                <Link href="/client-portal" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                  Client Portal →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">About Us</h3>
                <p className="text-sm text-gray-600 mb-4">Learn about our experienced immigration attorney.</p>
                <Link href="/about" className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                  Meet Our Team →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
