"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Anti-spam measures
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime] = useState(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          honeypot,
          formLoadTime,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Redirect to thank you page
      window.location.href = "/contact/thank-you";
    } catch (error) {
      console.error("Error:", error);
      setSubmitError("Failed to send message. Please try again or call us directly at 1-747-200-5520");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Mailyan Law</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Let&apos;s discuss your legal needs. Schedule a consultation today.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Office Location</h3>
                <p className="text-gray-200 leading-relaxed">
                  801 N Brand Blvd Suite 665<br />
                  Glendale, CA 91203
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Phone</h3>
                <a
                  href="tel:1-747-200-5520"
                  className="text-2xl font-bold hover:text-gray-300 transition-colors block mb-2"
                >
                  1-747-200-5520
                </a>
                <p className="text-sm text-gray-400">Mon – Fri: 9:00 AM – 5:00 PM</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <a
                  href="mailto:info@mailyanlaw.com"
                  className="text-xl font-semibold hover:text-gray-300 transition-colors block"
                >
                  info@mailyanlaw.com
                </a>
                <p className="text-sm text-gray-400 mt-4">We respond within 24 hours</p>
              </div>
            </div>

            {/* Two Column Layout: Form + Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                  {submitError && (
                    <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-semibold">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-gray-900"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-gray-900"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-gray-900"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">
                          Legal Service *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-gray-900"
                        >
                          <option value="">Select a service</option>
                          <option value="asylum">Asylum</option>
                          <option value="deportation">Deportation Defense</option>
                          <option value="family">Family Petitions</option>
                          <option value="naturalization">Naturalization</option>
                          <option value="u-visa">U-Visa</option>
                          <option value="personal-injury">Personal Injury</option>
                          <option value="other">Other Legal Matter</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-gray-900"
                        placeholder="Please describe your legal needs in detail..."
                      />
                    </div>

                    {/* Honeypot field - hidden from users but visible to bots */}
                    <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                      <label htmlFor="website">Website (leave blank)</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-slate-900 hover:to-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="/images/meline-mailyan-lawyer-7.jpg"
                      alt="Attorney Meline Mailyan"
                      fill
                      className="object-cover"
                      style={{ objectPosition: '50% 35%' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Meline Mailyan</h3>
                    <p className="text-primary font-semibold mb-3">Immigration & Personal Injury Attorney</p>
                    <p className="text-gray-600 text-sm">
                      Dedicated to helping individuals and families with immigration and personal injury matters.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between pb-3 border-b border-white/20">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="font-semibold">9 AM - 5 PM</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-white/20">
                      <span className="text-gray-300">Saturday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Need Immediate Help?</h4>
                      <p className="text-sm text-gray-700 mb-3">For urgent legal matters, please call us directly during business hours.</p>
                      <a href="tel:1-747-200-5520" className="text-blue-600 font-bold hover:text-blue-700">
                        1-747-200-5520
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Visit Our Office</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Conveniently located in Glendale, California
            </p>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8166276707685!2d-118.25583!3d34.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7a5620db6edae4f!2s801%20N%20Brand%20Blvd%20Suite%20665%2C%20Glendale%2C%20CA%2091203!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
