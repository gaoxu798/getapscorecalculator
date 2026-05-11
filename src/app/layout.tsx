import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/Analytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getapscorecalculator.xyz"),
  title: "AP Score Calculator — Free 1-5 Prediction for All 38 Subjects",
  description:
    "Instantly predict your AP exam score. Free calculator for all 38 AP subjects based on official 2026 scoring guidelines. No signup required.",
  keywords: [
    "ap score calculator",
    "ap exam calculator",
    "ap score predictor",
    "ap calculus score calculator",
    "ap biology score calculator",
    "apush score calculator",
  ],
  openGraph: {
    title: "Know Your AP Score Before the Exam",
    description:
      "Free AP score calculator for all 38 subjects. Enter your practice results. Get an instant 1-5 prediction.",
    images: ["/assets/og-image.jpg"],
    type: "website",
    url: "https://getapscorecalculator.xyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "AP Score Calculator — Free 1-5 Prediction for All 38 Subjects",
    description:
      "Instantly predict your AP exam score. 38 subjects, real-time calculation, mobile-friendly.",
    images: ["/assets/og-image.jpg"],
  },
  verification: {
    google: undefined,
  },
  alternates: {
    canonical: "https://getapscorecalculator.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-background text-text-primary antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
