import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Meline Mailyan - Immigration & Personal Injury Attorney | Mailyan Law",
  description: "Meet Meline Mailyan, an experienced immigration and personal injury attorney in Glendale, CA. UCLA graduate, UC Davis Law alum, and member of AILA with 12+ years of experience helping clients with immigration and personal injury cases.",
  alternates: {
    canonical: "https://www.mailyanlaw.com/about",
  },
  openGraph: {
    title: "About Meline Mailyan - Immigration & Personal Injury Attorney | Mailyan Law",
    description: "Meet Meline Mailyan, an experienced immigration and personal injury attorney in Glendale, CA. UCLA graduate, UC Davis Law alum, and member of AILA with 12+ years of experience.",
    url: "https://www.mailyanlaw.com/about",
    siteName: "Mailyan Law",
    images: [
      {
        url: "/images/logo-navy-white.jpg",
        width: 1200,
        height: 630,
        alt: "Mailyan Law - About Attorney Meline Mailyan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our legal practice, ensuring honest and transparent communication with our clients.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Dedication",
      description: "We are fully committed to each case we take on, working tirelessly to achieve the best possible outcome for our clients.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our legal services, staying current with changes in immigration and personal injury law and providing top-tier representation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: "12+", label: "Years of Experience" },
    { number: "1000+", label: "Cases Handled" },
    { number: "95%", label: "Success Rate" }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Mailyan Law</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in immigration and personal injury law
          </p>
        </div>
      </section>

      {/* Attorney Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/meline-mailyan-lawyer-8.jpg"
                    alt="Attorney Meline Mailyan"
                    width={600}
                    height={700}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-xs">
                  <p className="text-sm font-semibold mb-1">Licensed Attorney</p>
                  <p className="text-xs text-gray-200">California State Bar</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Meet Your Attorney</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900">Meline Mailyan</h2>
                </div>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Meline Mailyan is a dedicated attorney with a proven track record of success in helping individuals and families navigate complex legal matters. With extensive experience in both immigration and personal injury law, Meline has successfully represented clients in immigration courts, government agencies, and personal injury claims throughout California.
                  </p>
                  <p>
                    Meline earned her Bachelor's degree in Political Science and Russian Language from the University of California, Los Angeles (UCLA) and received her Juris Doctor from the University of California, Davis School of Law (King Hall), where she was inducted into the Order of Barristers for excellence in advocacy and oral argument.
                  </p>
                  <p>
                    Beyond her legal practice, Meline has long been an advocate for human rights and justice. She has been an active voice in the recognition of the Armenian Genocide and the advancement of international accountability. Following the 2020 Artsakh War, she co-founded the Center for Truth and Justice, a human rights organization dedicated to documenting war crimes, preserving survivor testimony, and pursuing justice through international legal mechanisms. The organization's mission is to give survivors a voice, promote accountability, and advance the rule of law.
                  </p>
                  <p>
                    As a proud member of the American Immigration Lawyers Association (AILA), Meline stays at the forefront of immigration law developments and maintains the highest standards of professional practice in representing clients before immigration agencies and courts.
                  </p>
                  <p>
                    At Mailyan Law, we understand that legal issues - whether immigration or personal injury - affect not just individuals, but entire families. We take a compassionate, client-centered approach to every case, ensuring that each client receives personalized attention and a tailored legal strategy.
                  </p>
                  <p>
                    In addition to immigration law, Meline represents personal injury clients who have been injured due to the negligence of others, including motor vehicle accidents, slip and fall incidents, dog bites, and wrongful death cases. She is committed to fighting for maximum compensation and justice for injury victims.
                  </p>
                  <p>
                    Our firm is built on the principles of integrity, dedication, and excellence in legal representation. We are committed to fighting for your rights and helping you achieve your legal goals.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <p className="text-xs font-semibold text-blue-700 mb-3 uppercase tracking-wider">Professional Membership</p>
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <Image
                          src="/images/aila-logo.png"
                          alt="AILA Logo"
                          width={80}
                          height={80}
                          className="w-20 h-20"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">American Immigration Lawyers Association</h3>
                        <p className="text-sm text-gray-700 mb-2">AILA - The national association of immigration lawyers</p>
                        <a
                          href="https://www.aila.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
                        >
                          Learn more about AILA
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/services"
                    className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl"
                  >
                    View Services
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our practice and define our commitment to our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-primary mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our proven approach to achieving successful legal outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We begin with a thorough consultation to understand your unique situation, goals, and concerns.
                    This allows us to provide you with an honest assessment of your case.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Strategy Development</h3>
                  <p className="text-gray-600">
                    We develop a customized legal strategy tailored to your specific case and immigration objectives,
                    ensuring the best path forward.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Representation</h3>
                  <p className="text-gray-600">
                    We provide comprehensive legal representation throughout the entire process, keeping you informed
                    and prepared every step of the way.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our commitment doesn't end when your case is resolved. We're here to support your ongoing
                    immigration needs and future endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Contact us today for a consultation. Let&apos;s discuss how we can help you with your immigration or personal injury case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:1-747-200-5520"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block"
            >
              Call: 1-747-200-5520
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
