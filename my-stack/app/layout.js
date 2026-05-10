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
  title: "Nosa Egharevba | Full Stack Developer Nigeria",
  description:
    "Full Stack Developer skilled in React, Next.js, Django, and modern web technologies. Explore projects, portfolio work, and development services by Nosa Egharevba.",
  keywords: [
    "Full Stack Developer Nigeria",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer Nigeria",
    "Web Developer Portfolio",
    "Django Developer",
  ],
  openGraph: {
    title: "Nosa Egharevba | Full Stack Developer",
    description:
      "Portfolio of Nosa Egharevba showcasing React, Next.js, and full stack development projects.",
    url: "https://nosa-stack.vercel.app",
    siteName: "Nosa Stack",
    type: "website",
  },
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
