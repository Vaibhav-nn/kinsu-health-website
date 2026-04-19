import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kinsu - Your AI-Powered Health Assistant",
  description:
    "Kinsu is a comprehensive health assistant that keeps your health records, prescriptions, and vitals secure with in-house AI technology.",
  keywords: [
    "health app",
    "AI health assistant",
    "health records",
    "prescription management",
    "vitals tracking",
    "secure health data",
  ],
  openGraph: {
    title: "Kinsu - Your AI-Powered Health Assistant",
    description:
      "Secure, intelligent health management powered by proprietary AI technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
