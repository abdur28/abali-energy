import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppPopUp from "@/components/WhatsAppPopUp/WhatsAppPopUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abali Energy",
  description: "Abali Energy is an energy company that provides reliable and efficient energy solutions to our clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,100..900;1,100..900&family=Great+Vibes&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <NavBar />
        <main className="min-h-screen bg-white lg:pt-20 pt-[4.1rem]">
          {children}
          <WhatsAppPopUp />
        </main>
        <Footer />
      </body>
    </html>
  );
}
