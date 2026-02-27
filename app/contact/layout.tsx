import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Immigration Attorney - Free Consultation | Mailyan Law",
  description: "Contact Mailyan Law for a consultation. Call 1-747-200-5520 or visit us at 801 N Brand Blvd Suite 665, Glendale, CA 91203. Expert immigration legal services.",
  alternates: {
    canonical: "https://www.mailyanlaw.com/contact",
  },
  openGraph: {
    title: "Contact Immigration Attorney - Free Consultation | Mailyan Law",
    description: "Contact Mailyan Law for expert immigration legal services. Located in Glendale, CA. Call 1-747-200-5520 for a consultation.",
    url: "https://www.mailyanlaw.com/contact",
    siteName: "Mailyan Law",
    images: [
      {
        url: "/images/logo-navy-white.jpg",
        width: 1200,
        height: 630,
        alt: "Mailyan Law - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
