import type { Metadata } from "next";
import { Inter, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-gujarati",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raawellness.com"),
  title: "રા Wellness Center | Coach Sarvaiya Shaktisinh Jashubha",
  description:
    "રા Wellness Center by Certified Wellness Coach Sarvaiya Shaktisinh Jashubha in Vataliya, Talaja, Bhavnagar. Personalized nutrition, visceral fat loss, healthy lifestyle habits, and lifelong vitality.",
  keywords: [
    "રા Wellness Center",
    "Sarvaiya Shaktisinh Jashubha",
    "સરવૈયા શક્તિસિંહ જશુભા",
    "રા વેલનેસ સેન્ટર",
    "Wellness Coach Talaja Bhavnagar",
    "Weight Loss Vataliya Talaja",
    "Lifestyle Transformation Bhavnagar Gujarat",
    "Nutrition Coach Gujarat",
    "Online Health Coaching Gujarat"
  ],
  authors: [{ name: "Coach Sarvaiya Shaktisinh Jashubha" }],
  openGraph: {
    title: "રા Wellness Center | Sustainable Health, Measurable Transformations",
    description:
      "Small lifestyle changes. Meaningful transformations. Guided by Certified Wellness Coach Sarvaiya Shaktisinh Jashubha in Vataliya, Talaja.",
    url: "https://raawellness.com",
    siteName: "રા Wellness Center",
    images: [
      {
        url: "/images/hero/hero-wellness-family.jpg",
        width: 1200,
        height: 630,
        alt: "રા Wellness Center - Coach Sarvaiya Shaktisinh Jashubha",
      },
    ],
    locale: "gu_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="gu" className={`${inter.variable} ${notoSansGujarati.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ivory text-charcoal min-h-screen flex flex-col font-sans selection:bg-primary selection:text-ivory">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

