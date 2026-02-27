import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Injury Attorney in Glendale, CA | Mailyan Law",
  description: "Experienced personal injury attorney in Glendale, CA. Free consultation for car accidents, slip and fall, and wrongful death cases.",
  keywords: "personal injury attorney, car accident lawyer, slip and fall attorney, wrongful death attorney, Glendale CA, California personal injury law",
  openGraph: {
    title: "Personal Injury Attorney in Glendale, CA | Mailyan Law",
    description: "Experienced personal injury attorney in Glendale, CA. Free consultation for car accidents, slip and fall, and wrongful death cases.",
    url: "https://www.mailyanlaw.com/personal-injury",
    siteName: "Mailyan Law",
    images: [
      {
        url: "/images/logo-navy-white.jpg",
        width: 1200,
        height: 630,
        alt: "Mailyan Law - Personal Injury Attorney",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Injury Attorney in Glendale, CA | Mailyan Law",
    description: "Experienced personal injury attorney in Glendale, CA. Free consultation for car accidents, slip and fall, and wrongful death cases.",
    images: ["/images/logo-navy-white.jpg"],
  },
  alternates: {
    canonical: "https://www.mailyanlaw.com/personal-injury",
  },
};

export default function PersonalInjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
