import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aayush Singh | Developer Portfolio",
  description: "Portfolio of Aayush Singh, building modern web experiences and intelligent systems.",
  keywords: ["Aayush Singh", "Developer", "Portfolio", "Web Development", "Software Engineer", "Full Stack Developer", "Next.js"],
  authors: [{ name: "Aayush Singh" }],
  creator: "Aayush Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aayushdevfolio.vercel.app",
    title: "Aayush Singh | Developer Portfolio",
    description: "Portfolio of Aayush Singh, building modern web experiences and intelligent systems.",
    siteName: "Aayush Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Singh | Developer Portfolio",
    description: "Portfolio of Aayush Singh, building modern web experiences and intelligent systems.",
    creator: "@aayush",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
