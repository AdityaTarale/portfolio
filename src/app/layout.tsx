import Footer from "@/layouts/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Tarale | Software Engineer",
  description:
    "Portfolio of Aditya Tarale, a Software Engineer focused on building high-performance, human-centered digital experiences.",
  keywords: [
    "Aditya Tarale",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "Full Stack",
  ],
  authors: [{ name: "Aditya Tarale" }],
  openGraph: {
    title: "Aditya Tarale | Software Engineer",
    description:
      "Software Engineer focused on building high-performance digital experiences.",
    url: "https://www.adityatarale.com/",
    siteName: "Aditya Tarale",
    images: [
      {
        url: "/images/my-profile.jpg",
        width: 800,
        height: 800,
        alt: "Aditya Tarale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Tarale | Software Engineer",
    description:
      "Software Engineer focused on building high-performance digital experiences.",
    images: ["/images/my-profile.jpg"],
  },
  metadataBase: new URL("https://www.adityatarale.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aditya Tarale",
              url: "https://www.adityatarale.com/",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/AdityaTarale",
                "https://www.linkedin.com/in/aditya-tarale-about/",
                "https://x.com/aditarale1805",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
