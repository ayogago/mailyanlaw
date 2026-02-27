export default function Privacy() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your privacy and confidentiality are our top priorities
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Last Updated:</strong> March 2024
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Mailyan Law, we are committed to protecting your privacy and maintaining the confidentiality
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact us through our website contact form</li>
                      <li>Schedule a consultation</li>
                      <li>Engage our legal services</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Communicate with us via email or phone</li>
                    </ul>
                    <p className="mt-3">This information may include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name and contact information (email, phone number, mailing address)</li>
                      <li>Immigration status and related documentation</li>
                      <li>Personal identification information</li>
                      <li>Financial information for payment processing</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
                    <p className="mb-3">When you visit our website, we may automatically collect certain information, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address and browser type</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="mb-3">We use the information we collect for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide legal services and representation</li>
                    <li>To communicate with you about your case or inquiries</li>
                    <li>To process payments and maintain financial records</li>
                    <li>To send you important updates, newsletters, and marketing communications (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations and professional responsibilities</li>
                    <li>To protect our rights and prevent fraud</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Attorney-Client Privilege</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    All communications between you and Mailyan Law regarding legal representation are protected
                    by attorney-client privilege. We maintain strict confidentiality of all client information
                    in accordance with professional ethical standards and applicable laws.
                  </p>
                  <p className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg mt-4">
                    <strong className="text-gray-900">Important:</strong> Please note that contacting us through
                    our website does not automatically establish an attorney-client relationship. Privileged
                    communication begins only after we have formally agreed to represent you.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="mb-3">We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With Your Consent:</strong> When you authorize us to share information with third parties</li>
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website or conducting our business (e.g., payment processors, document management systems)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Professional Obligations:</strong> As necessary to comply with professional ethical rules and legal obligations</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of our practice (subject to continued confidentiality obligations)</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Data Security</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your
                    personal information from unauthorized access, disclosure, alteration, or destruction.
                    These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Secure SSL encryption for data transmission</li>
                    <li>Restricted access to personal information</li>
                    <li>Regular security assessments and updates</li>
                    <li>Secure document storage and management systems</li>
                    <li>Employee training on data protection and confidentiality</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure.
                    While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Your Rights and Choices</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="mb-3">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal and professional obligations)</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at <a href="mailto:info@mailyanlaw.com" className="text-blue-600 hover:text-blue-700 font-semibold">info@mailyanlaw.com</a> or call <a href="tel:1-747-200-5520" className="text-blue-600 hover:text-blue-700 font-semibold">1-747-200-5520</a>.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience
                    and analyze website traffic. You can control cookie settings through your browser preferences.
                    Please note that disabling cookies may affect the functionality of our website.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Third-Party Links</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices or content of these external sites. We encourage you to review the privacy policies
                    of any third-party sites you visit.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Children's Privacy</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect
                    personal information from children. If you believe we have inadvertently collected information
                    from a child, please contact us immediately.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Data Retention</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined
                    in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    Client files and records are retained in accordance with professional ethical obligations and
                    applicable legal requirements.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or
                    legal requirements. We will notify you of any material changes by posting the updated policy
                    on our website with a new "Last Updated" date. We encourage you to review this Privacy Policy
                    periodically.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Contact Us</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                    practices, please contact us:
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-3">Mailyan Law</p>
                    <p className="text-gray-700 mb-2">801 N Brand Blvd Suite 665</p>
                    <p className="text-gray-700 mb-2">Glendale, CA 91203</p>
                    <p className="text-gray-700 mb-2">
                      Phone: <a href="tel:1-747-200-5520" className="text-blue-600 hover:text-blue-700 font-semibold">1-747-200-5520</a>
                    </p>
                    <p className="text-gray-700">
                      Email: <a href="mailto:info@mailyanlaw.com" className="text-blue-600 hover:text-blue-700 font-semibold">info@mailyanlaw.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Notice */}
            <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Your Privacy Matters</h3>
              <p className="text-gray-200 leading-relaxed">
                At Mailyan Law, we understand the sensitive nature of immigration matters. We are committed to
                maintaining the highest standards of confidentiality and data protection. Your trust is our
                priority, and we take every measure to safeguard your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
