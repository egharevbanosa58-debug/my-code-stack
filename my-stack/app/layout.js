import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Code Stack",
  description: "A NOSA Production",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><meta name="google-site-verification" content="Kk5vSEjBvDnyy9uV-ToRRSxgZaZ5i_KgxtY2MalsMj0" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500`}
      >
        <Providers>
          <Analytics />
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
