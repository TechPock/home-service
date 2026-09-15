import type { Metadata } from "next";
import { Yantramanav, Archivo } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const yantramanav = Yantramanav({
  variable: "--font-yantramanav",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HomePro Services | Plumbing, Electrical & HVAC Services",
  description:
    "Professional plumbing, electrical and HVAC services from trusted local technicians. Get reliable home service and request a free quote today.",
  keywords:
    "plumbing, electrical, HVAC, home services, repair, installation, maintenance, emergency service",
  authors: [{ name: "HomePro Services" }],
  openGraph: {
    title: "HomePro Services | Plumbing, Electrical & HVAC Services",
    description:
      "Professional plumbing, electrical and HVAC services from trusted local technicians. Get reliable home service and request a free quote today.",
    url: "https://homeproservices.com",
    siteName: "HomePro Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${yantramanav.variable} ${archivo.variable} antialiased text-text`}
      >
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
