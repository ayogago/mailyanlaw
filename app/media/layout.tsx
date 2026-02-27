import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Social Content - Immigration Law Tips | Mailyan Law",
  description: "Watch immigration law tips and educational content from attorney Meline Mailyan. Follow us on social media for the latest updates and legal insights.",
  alternates: {
    canonical: "https://www.mailyanlaw.com/media",
  },
  openGraph: {
    title: "Media & Social Content - Immigration Law Tips | Mailyan Law",
    description: "Watch immigration law tips and educational content from attorney Meline Mailyan.",
    url: "https://www.mailyanlaw.com/media",
    siteName: "Mailyan Law",
    images: [
      {
        url: "/images/logo-navy-white.jpg",
        width: 1200,
        height: 630,
        alt: "Mailyan Law - Media & Social Content",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
