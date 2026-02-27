export default function Terms() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
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
                Welcome to Mailyan Law. These Terms of Service ("Terms") govern your use of our website and
                legal services. By accessing our website or engaging our services, you agree to be bound by
                these Terms. Please read them carefully.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    By accessing or using the Mailyan Law website (the "Site") or engaging our legal services,
                    you agree to be bound by these Terms of Service and all applicable laws and regulations.
                    If you do not agree with any part of these terms, you may not use our website or services.
                  </p>
                  <p>
                    We reserve the right to modify these Terms at any time. Your continued use of the Site
                    after any changes constitutes acceptance of the new Terms.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">2. No Attorney-Client Relationship</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
                    <strong className="text-gray-900">Important Notice:</strong> Use of this website, sending
                    us an email, or communicating with us through our contact forms does NOT establish an
                    attorney-client relationship.
                  </p>
                  <p>
                    An attorney-client relationship is only formed when:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We have conducted a conflicts check</li>
                    <li>We have agreed to represent you in writing</li>
                    <li>You have signed a written engagement agreement (retainer agreement)</li>
                    <li>Any required retainer fees have been paid</li>
                  </ul>
                  <p className="mt-4">
                    Until an attorney-client relationship is formally established, you should not send us
                    confidential information. Information sent to us before we agree to represent you may
                    not be protected by attorney-client privilege.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Information and Content</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">General Information Only</h3>
                    <p>
                      The information provided on this website is for general informational purposes only
                      and does not constitute legal advice. Immigration laws are complex and frequently change.
                      The content on this Site may not reflect the most current legal developments.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">No Legal Advice</h3>
                    <p className="mb-3">
                      Nothing on this website should be construed as legal advice for any individual case
                      or situation. Legal advice can only be provided after:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>A thorough review of your specific circumstances</li>
                      <li>An evaluation of all relevant facts and documentation</li>
                      <li>Establishment of an attorney-client relationship</li>
                      <li>A formal consultation with our attorney</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">No Guarantees</h3>
                    <p>
                      Past results described on this website do not guarantee future outcomes. Every
                      immigration case is unique, and results depend on the specific facts and circumstances
                      of each case.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Confidential Information</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                    <strong className="text-gray-900">Warning:</strong> Do not send confidential, sensitive,
                    or time-sensitive information through this website, email, or contact forms until an
                    attorney-client relationship has been established.
                  </p>
                  <p>
                    Information submitted through our website contact forms or via unsolicited emails:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>May not be treated as confidential</li>
                    <li>May not be protected by attorney-client privilege</li>
                    <li>Does not prevent us from representing adverse parties</li>
                    <li>May be subject to disclosure under certain circumstances</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Scope of Services</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Mailyan Law provides legal services in the area of immigration law. The specific scope
                    of our representation will be defined in a written engagement agreement. We do not provide
                    services in areas outside of immigration law.
                  </p>
                  <p className="mt-4">
                    <strong className="text-gray-900">Jurisdiction:</strong> We are licensed to practice law
                    in the State of California and before U.S. immigration agencies and courts. We do not
                    provide legal services in other practice areas or jurisdictions unless specifically agreed
                    upon in writing.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Fees and Payment</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our legal fees and billing arrangements will be set forth in a written engagement agreement.
                    Payment terms, retainer requirements, and fee structures vary depending on the type of
                    service provided.
                  </p>
                  <p className="mt-4">
                    Unless otherwise stated in writing, consultations are not free. Fee information will be
                    provided before any services are rendered.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Fees are subject to change and will be communicated in advance</li>
                    <li>Retainer fees may be required before services commence</li>
                    <li>Clients are responsible for costs and expenses as outlined in the engagement agreement</li>
                    <li>Government filing fees are separate from attorney fees</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Client Responsibilities</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="mb-3">When you engage our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide complete, accurate, and truthful information</li>
                    <li>Respond promptly to requests for information or documentation</li>
                    <li>Attend scheduled meetings and court appearances</li>
                    <li>Pay fees and costs as agreed upon in the engagement agreement</li>
                    <li>Keep us informed of any changes in your contact information</li>
                    <li>Notify us immediately of any developments affecting your case</li>
                    <li>Follow our legal advice and recommendations</li>
                  </ul>
                  <p className="mt-4">
                    Failure to fulfill these responsibilities may adversely affect the outcome of your case
                    and may result in termination of our representation.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Limitation of Liability</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    To the fullest extent permitted by law, Mailyan Law and its attorney shall not be liable
                    for any damages, including but not limited to direct, indirect, incidental, consequential,
                    or special damages arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Your use of or inability to use this website</li>
                    <li>Reliance on information contained on this website</li>
                    <li>Any errors or omissions in the website content</li>
                    <li>Any technical failures or interruptions of service</li>
                    <li>Unauthorized access to or alteration of your transmissions or data</li>
                  </ul>
                  <p className="mt-4">
                    Our liability for professional services will be governed by the terms of the engagement
                    agreement and applicable professional responsibility rules.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Intellectual Property</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    All content on this website, including text, graphics, logos, images, and software, is
                    the property of Mailyan Law and is protected by copyright, trademark, and other intellectual
                    property laws.
                  </p>
                  <p className="mt-4">
                    You may not reproduce, distribute, modify, or create derivative works from any content
                    on this Site without our express written permission.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Links to Third-Party Websites</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our website may contain links to third-party websites for your convenience. We do not
                    endorse, control, or assume responsibility for the content, privacy policies, or practices
                    of any third-party sites.
                  </p>
                  <p className="mt-4">
                    Your use of third-party websites is at your own risk, and you should review their terms
                    and policies before using them.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Termination of Services</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="mb-3">
                    Either party may terminate the attorney-client relationship as provided in the engagement
                    agreement and subject to applicable professional rules. Grounds for termination may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Non-payment of fees or costs</li>
                    <li>Client's failure to cooperate or follow advice</li>
                    <li>Conflicts of interest</li>
                    <li>Client's request for termination</li>
                    <li>Completion of the agreed-upon services</li>
                  </ul>
                  <p className="mt-4">
                    Upon termination, you remain responsible for payment of all fees and costs incurred up
                    to the date of termination.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Disclaimers</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Website Use:</strong> This website is provided "as is"
                    without warranties of any kind, either express or implied, including but not limited to
                    warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                  <p className="mt-4">
                    <strong className="text-gray-900">Accuracy:</strong> While we strive to provide accurate
                    and up-to-date information, we make no representations or warranties regarding the accuracy,
                    completeness, or timeliness of the content on this Site.
                  </p>
                  <p className="mt-4">
                    <strong className="text-gray-900">Technical Issues:</strong> We do not guarantee that
                    this website will be uninterrupted, secure, or error-free.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Indemnification</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    You agree to indemnify, defend, and hold harmless Mailyan Law, its attorney, employees,
                    and agents from any claims, liabilities, damages, losses, or expenses (including reasonable
                    attorney fees) arising out of or related to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Your use of this website</li>
                    <li>Your violation of these Terms of Service</li>
                    <li>Your violation of any rights of another party</li>
                    <li>Any information you provide that is inaccurate or misleading</li>
                  </ul>
                </div>
              </div>

              {/* Section 14 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Governing Law and Jurisdiction</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    These Terms of Service are governed by and construed in accordance with the laws of the
                    State of California, without regard to its conflict of law provisions.
                  </p>
                  <p className="mt-4">
                    Any disputes arising from these Terms or your use of this website shall be resolved in
                    the state or federal courts located in Los Angeles County, California, and you consent
                    to the personal jurisdiction of such courts.
                  </p>
                </div>
              </div>

              {/* Section 15 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">15. Severability</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining
                    provisions shall remain in full force and effect. The invalid or unenforceable provision
                    shall be replaced with a valid provision that most closely approximates the intent of
                    the original provision.
                  </p>
                </div>
              </div>

              {/* Section 16 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">16. Entire Agreement</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    These Terms of Service, together with our Privacy Policy, constitute the entire agreement
                    between you and Mailyan Law regarding your use of this website. These Terms supersede
                    any prior agreements or understandings.
                  </p>
                  <p className="mt-4">
                    For clients who have signed an engagement agreement, the terms of that agreement shall
                    govern the attorney-client relationship and shall supersede these Terms to the extent
                    of any conflict.
                  </p>
                </div>
              </div>

              {/* Section 17 */}
              <div className="border-l-4 border-slate-800 pl-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">17. Contact Information</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us:
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
              <h3 className="text-2xl font-bold mb-4">Acknowledgment</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                By using this website, you acknowledge that you have read, understood, and agree to be bound
                by these Terms of Service. If you do not agree to these Terms, please do not use our website
                or services.
              </p>
              <p className="text-gray-200 leading-relaxed">
                These Terms are subject to change at any time. We encourage you to review them periodically
                to stay informed of any updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
