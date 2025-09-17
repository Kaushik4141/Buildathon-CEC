import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./components/RetroFooter.css";
import Header from "./components/Header";
import RetroFooter from "./components/RetroFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTA VI — Fan Landing",
  description: "A cinematic, animated fan landing experience with scroll interactions.",
  openGraph: {
    title: "GTA VI — Fan Landing",
    description: "A cinematic, animated fan landing experience with scroll interactions.",
    url: "https://example.com",
    siteName: "GTA VI Fan",
    images: [
      { url: "/heroKeyArt.webp", width: 1200, height: 630, alt: "GTA VI Key Art" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA VI — Fan Landing",
    description: "A cinematic, animated fan landing experience with scroll interactions.",
    images: ["/heroKeyArt.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
