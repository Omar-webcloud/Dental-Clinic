import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CLINIC_CONFIG } from "@/lib/whatsapp";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a261c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Evrika Dent | Modern Dental Clinic & Microscopic Dentistry",
  description:
    "Evrika Dent — Modern dental clinic with 17 years of experience. Carl Zeiss microscope dentistry, computer-guided 3D dental implants, cosmetic veneers, and pain-free treatments. Book appointment via WhatsApp.",
  keywords: [
    "Dental Clinic",
    "Dentist New York",
    "Dental Implants",
    "Carl Zeiss Microscope Dentistry",
    "Porcelain Veneers",
    "Laser Teeth Whitening",
    "Pain-Free Dentist",
    "WhatsApp Dental Appointment",
    "Evrika Dent"
  ],
  authors: [{ name: "Evrika Dent Clinic" }],
  creator: "Evrika Dent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evrikadent.com",
    title: "Evrika Dent | Modern Dental Clinic & Implant Center",
    description:
      "Dentistry of the future where technology meets care. Carl Zeiss optical microscope precision, in-house CAD/CAM milling, and painless treatments. Instant WhatsApp booking.",
    siteName: "Evrika Dent",
    images: [
      {
        url: "/images/hero-smile.jpg",
        width: 1200,
        height: 630,
        alt: "Evrika Dent - Modern Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evrika Dent | Modern Dental Clinic",
    description:
      "Dentistry of the future where technology meets care. Book your consultation on WhatsApp today.",
    images: ["/images/hero-smile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#faf8f5] text-[#1a2e26]">
        {children}
      </body>
    </html>
  );
}
