import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "../context/Providers";
import { Toaster } from "sonner";
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
  title: "VirtuCare | Healthcare Appointment System",
  description: "Book appointments with top healthcare professionals securely and easily through VirtuCare.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50/50 text-gray-900">
        <Providers>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
        </Providers>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
