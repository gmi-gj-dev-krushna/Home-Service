import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";

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

export const metadata = {
  title: "GMI Home Services",
  description: "Find Home Service/Repair near you...",
  icons: {
    icon: ["/icon.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx16">
            <Header />
            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
