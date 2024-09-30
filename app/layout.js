"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this value to control the loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthSessionProvider>
          {loading ? (
            <div className="flex flex-col items-center justify-center h-screen bg-[#2929FF]">
              <div className="mb-8">
                <Image
                  src="/icon.jpg" // Replace with your actual logo path
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </div>
            </div>
          ) : (
            <div>
              <Header />
              <Toaster />
              <div className="mx-6 md:mx16">{children}</div>
            </div>
          )}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
