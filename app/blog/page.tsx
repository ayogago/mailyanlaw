import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Law Blog - Legal Insights & Updates | Mailyan Law",
  description: "Stay informed with immigration law insights, updates, and advice from attorney Meline Mailyan. Expert analysis on asylum, visas, naturalization, and more.",
  alternates: {
    canonical: "https://www.mailyanlaw.com/blog",
  },
  openGraph: {
    title: "Immigration Law Blog - Legal Insights & Updates | Mailyan Law",
    description: "Stay informed with immigration law insights, updates, and advice from attorney Meline Mailyan.",
    url: "https://www.mailyanlaw.com/blog",
    siteName: "Mailyan Law",
    images: [
      {
        url: "/images/logo-navy-white.jpg",
        width: 1200,
        height: 630,
        alt: "Mailyan Law - Immigration Law Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the Asylum Process in the United States",
      date: "March 15, 2024",
      author: "Meline Mailyan",
      readTime: "5 min read",
      excerpt:
        "Learn about the steps involved in applying for asylum and what you need to know to prepare your case.",
      category: "Asylum",
      image: "/images/services/asylum.jpg",
    },
    {
      id: 2,
      title: "Family-Based Immigration: Bringing Your Loved Ones to the U.S.",
      date: "March 10, 2024",
      author: "Meline Mailyan",
      readTime: "7 min read",
      excerpt:
        "Explore the different pathways for U.S. citizens and permanent residents to petition for family members.",
      category: "Family Immigration",
      image: "/images/services/family.jpg",
    },
  ];

  const categories = ["All", "Asylum", "Family Immigration", "Naturalization"];

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Immigration Law Blog</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, updates, and guidance on U.S. immigration law
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-slate-800 text-slate-800 font-semibold hover:bg-slate-800 hover:text-white transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {blogPosts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-slate-800 ${
                      index === 0 ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                      <div className="relative h-64 lg:h-full overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h2 className={`font-bold mb-4 text-gray-900 group-hover:text-slate-800 transition-colors ${
                          index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'
                        }`}>
                          {post.title}
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center text-white font-bold">
                              M
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                              <p className="text-xs text-gray-500">Attorney at Law</p>
                            </div>
                          </div>

                          <button className="inline-flex items-center gap-2 text-slate-800 font-bold hover:gap-3 transition-all">
                            Read More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                <div className="mb-6">
                  <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  We're working on bringing you valuable immigration law insights and updates. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest immigration law updates, case insights, and expert guidance delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
