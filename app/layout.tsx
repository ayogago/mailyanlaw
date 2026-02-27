import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mailyanlaw.com"),
  title: "Mailyan Law - Immigration Attorney Services",
  description: "Expert immigration law services including asylum, deportation defense, family petitions, naturalization, U-Visa, and H-1B Visa assistance.",
  alternates: {
    canonical: "https://www.mailyanlaw.com",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Mailyan Law - Immigration Attorney Services",
    description: "Expert immigration law services including asylum, deportation defense, family petitions, naturalization, U-Visa, and H-1B Visa assistance.",
    url: "https://www.mailyanlaw.com",
    siteName: "Mailyan Law",
    images: [
      {
        url: "/images/logo-navy-white.jpg",
        width: 1200,
        height: 630,
        alt: "Mailyan Law - Immigration Attorney",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mailyan Law - Immigration Attorney Services",
    description: "Expert immigration law services including asylum, deportation defense, family petitions, naturalization, U-Visa, and H-1B Visa assistance.",
    images: ["/images/logo-navy-white.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.mailyanlaw.com/#organization",
    "name": "Mailyan Law",
    "url": "https://www.mailyanlaw.com",
    "logo": "https://www.mailyanlaw.com/images/logo-navy-white.jpg",
    "image": "https://www.mailyanlaw.com/images/logo-navy-white.jpg",
    "description": "Expert immigration law services including asylum, deportation defense, family petitions, naturalization, U-Visa, and H-1B Visa assistance.",
    "telephone": "+1-747-200-5520",
    "email": "info@mailyanlaw.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 N Brand Blvd Suite 665",
      "addressLocality": "Glendale",
      "addressRegion": "CA",
      "postalCode": "91203",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.1466,
      "longitude": -118.25583
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Immigration Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asylum Applications",
            "description": "Legal protection for individuals fleeing persecution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deportation Defense",
            "description": "Strategic legal representation in removal proceedings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Petitions",
            "description": "Family-based immigration petitions and green card sponsorship"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Naturalization",
            "description": "Comprehensive guidance through the naturalization process"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "U-Visa",
            "description": "Immigration relief for victims of qualifying crimes"
          }
        }
      ]
    }
  };

  const attorneySchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Meline Mailyan",
    "jobTitle": "Immigration Attorney",
    "worksFor": {
      "@id": "https://www.mailyanlaw.com/#organization"
    },
    "email": "info@mailyanlaw.com",
    "telephone": "+1-747-200-5520",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 N Brand Blvd Suite 665",
      "addressLocality": "Glendale",
      "addressRegion": "CA",
      "postalCode": "91203",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
