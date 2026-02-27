import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Legal Services - Asylum, Deportation Defense, Visas | Mailyan Law",
  description: "Comprehensive immigration legal services in Glendale, CA. Expert representation for asylum, deportation defense, family petitions, naturalization, U-Visa, and more. Call 1-747-200-5520.",
  alternates: {
    canonical: "https://www.mailyanlaw.com/services",
  },
  openGraph: {
    title: "Immigration Legal Services - Asylum, Deportation Defense, Visas | Mailyan Law",
    description: "Comprehensive immigration legal services including asylum, deportation defense, family petitions, naturalization, and U-Visa assistance.",
    url: "https://www.mailyanlaw.com/services",
    siteName: "Mailyan Law",
    images: [
      {
        url: "/images/logo-navy-white.jpg",
        width: 1200,
        height: 630,
        alt: "Mailyan Law - Immigration Legal Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Services() {
  const services = [
    {
      name: "Asylum",
      icon: "/images/services/asylum.jpg",
      color: "from-primary to-slate-700",
      tagline: "Protection from Persecution",
      description:
        "If you are fleeing persecution in your home country based on race, religion, nationality, political opinion, or membership in a particular social group, you may be eligible for asylum in the United States.",
      details: [
        "Affirmative asylum applications",
        "Defensive asylum cases",
        "Asylum interviews preparation",
        "Immigration court representation",
        "Appeals and motions",
      ],
      benefits: [
        "Protection from deportation",
        "Work authorization",
        "Path to permanent residence",
      ],
    },
    {
      name: "Deportation Defense",
      icon: "/images/services/deportation.jpg",
      color: "from-primary to-slate-700",
      tagline: "Defend Your Right to Stay",
      description:
        "Facing deportation or removal proceedings can be overwhelming. Our experienced attorneys provide strong legal defense to protect your rights and help you remain in the United States.",
      details: [
        "Removal defense strategies",
        "Bond hearings",
        "Cancellation of removal",
        "Adjustment of status in removal proceedings",
        "Appeals to the Board of Immigration Appeals (BIA)",
      ],
      benefits: [
        "Expert court representation",
        "Strategic defense planning",
        "Family unity preservation",
      ],
    },
    {
      name: "Family Petitions",
      icon: "/images/services/family.jpg",
      color: "from-primary to-slate-700",
      tagline: "Reunite with Your Loved Ones",
      description:
        "Reunite with your loved ones through family-based immigration. We help U.S. citizens and permanent residents petition for their family members to obtain lawful permanent residence.",
      details: [
        "Immediate relative petitions",
        "Family preference categories",
        "K-1 fiancé(e) visas",
        "Marriage-based green cards",
        "Adjustment of status applications",
      ],
      benefits: [
        "Family reunification",
        "Permanent residence for relatives",
        "Faster processing for immediate relatives",
      ],
    },
    {
      name: "Naturalization",
      icon: "/images/services/naturalization.jpg",
      color: "from-primary to-slate-700",
      tagline: "Become a U.S. Citizen",
      description:
        "Achieve your dream of becoming a U.S. citizen. We guide you through the naturalization process, from determining eligibility to preparing for your citizenship interview.",
      details: [
        "Eligibility assessment",
        "N-400 application preparation",
        "Interview preparation",
        "Oath ceremony guidance",
        "Certificate of citizenship applications",
      ],
      benefits: [
        "Right to vote",
        "U.S. passport eligibility",
        "Sponsor family members",
      ],
    },
    {
      name: "U-Visa",
      icon: "/images/services/u-visa.jpg",
      color: "from-primary to-slate-700",
      tagline: "Relief for Crime Victims",
      description:
        "The U-Visa is available to victims of certain crimes who have suffered mental or physical abuse and are willing to assist law enforcement in the investigation or prosecution of criminal activity.",
      details: [
        "U-Visa eligibility evaluation",
        "I-918 petition preparation",
        "Law enforcement certification assistance",
        "U-Visa derivative petitions for family members",
        "Path to permanent residence",
      ],
      benefits: [
        "Legal status for crime victims",
        "Work authorization",
        "Green card eligibility after 3 years",
      ],
    },
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Immigration Services</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to your immigration needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h2>
                      <p className="text-base text-primary font-semibold">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Services Offered */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                      </svg>
                      Services We Provide
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className={`bg-gradient-to-br ${service.color} p-6 rounded-xl shadow-lg text-white`}>
                    <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                      </svg>
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image/Visual */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm aspect-square rounded-2xl shadow-xl overflow-hidden">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven, step-by-step approach to achieving successful immigration outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300"></div>

              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-slate-800 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-900">Initial Consultation</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        We begin with a comprehensive consultation to understand your unique situation, immigration goals, and concerns. This allows us to provide an honest assessment of your case and determine the best path forward.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-slate-800 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-900">Strategy Development</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        We develop a customized legal strategy tailored specifically to your case and immigration objectives. Our experienced team ensures every detail is carefully planned to maximize your chances of success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-slate-800 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-900">Expert Representation</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        We provide comprehensive legal representation throughout the entire immigration process. From filing petitions to court appearances, we keep you informed and prepared at every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-slate-800 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-900">Ongoing Support</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Our commitment doesn't end when your case is resolved. We provide continued support for your ongoing immigration needs and future endeavors, ensuring long-term success and peace of mind.
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
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Contact us today for a consultation. Our experienced immigration attorneys are here to help you navigate the complex immigration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block text-lg"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:1-747-200-5520"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block text-lg"
            >
              Call: 1-747-200-5520
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
