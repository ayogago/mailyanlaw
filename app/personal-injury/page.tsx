"use client";

import { useState } from "react";
import Image from "next/image";

export default function PersonalInjury() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "personal-injury",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Personal Injury Attorney</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Fighting for Your Rights and Fair Compensation
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Experienced Personal Injury Representation</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Mailyan Law, we understand that suffering a personal injury can be a life-changing event.
              Whether you've been injured in a car accident, slip and fall, or any other incident caused by
              someone else's negligence, you deserve experienced legal representation to protect your rights
              and secure the compensation you need.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Areas of Practice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Motor Vehicle Accidents</h3>
                <p className="text-gray-600">
                  Car, truck, motorcycle, and other vehicle accident claims.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Slip and Fall</h3>
                <p className="text-gray-600">
                  Premises liability claims for injuries on another's property.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🐕</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Dog Bites</h3>
                <p className="text-gray-600">
                  Claims for injuries caused by animal attacks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Wrongful Death</h3>
                <p className="text-gray-600">
                  Representing families who have lost loved ones due to negligence.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Why Choose Mailyan Law?</h2>
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Personalized Attention</h3>
                  <p className="text-gray-700">
                    We treat every client with the individual attention they deserve. Your case is important to us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Aggressive Representation</h3>
                  <p className="text-gray-700">
                    We fight tirelessly to maximize your compensation and hold negligent parties accountable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Proven Track Record</h3>
                  <p className="text-gray-700">
                    Our experience and dedication have helped countless clients recover the compensation they deserve.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Schedule Your Free Consultation</h2>
              <p className="text-xl text-gray-600">
                Get the legal representation you deserve. Contact us today for a free case evaluation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8 md:p-10">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Request Your Free Consultation</h3>

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
                      <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                        Describe Your Case *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-gray-900"
                        placeholder="Please describe what happened, when it occurred, and any injuries you sustained..."
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
                        "Get Your Free Consultation"
                      )}
                    </button>

                    <p className="text-sm text-gray-600 text-center mt-4">
                      By submitting this form, you agree to be contacted by Mailyan Law regarding your case.
                    </p>
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
                    <p className="text-primary font-semibold mb-3">Personal Injury Attorney</p>
                    <p className="text-gray-600 text-sm">
                      Dedicated to fighting for the rights of injury victims and their families.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Phone</p>
                      <a href="tel:1-747-200-5520" className="text-xl font-bold hover:text-gray-300 transition-colors">
                        1-747-200-5520
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Email</p>
                      <a href="mailto:info@mailyanlaw.com" className="text-lg font-semibold hover:text-gray-300 transition-colors">
                        info@mailyanlaw.com
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Office Hours</p>
                      <p className="font-semibold">Mon - Fri: 9 AM - 5 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Free Consultation</h4>
                      <p className="text-sm text-gray-700">
                        Your first consultation is completely free. We'll review your case and discuss your legal options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Wait - Time Limits Apply</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            California law imposes strict deadlines on personal injury claims. Contact us today to ensure your rights are protected.
          </p>
          <a
            href="tel:1-747-200-5520"
            className="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Call Now: 1-747-200-5520
          </a>
        </div>
      </section>
    </div>
  );
}
