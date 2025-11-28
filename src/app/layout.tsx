import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOOX - Free Music Streaming App",
  description: "Stream over 40 million songs for free. Enjoy Karaoke, Live video chat rooms, and trending videos on JOOX.",
  keywords: "JOOX, music streaming, free music, karaoke, live streaming",
  icons: {
    icon: [
      { url: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Fn0mLBQ6kS6KDd2UPD_0uw.png" },
    ],
    apple: [
      { url: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Fn0mLBQ6kS6KDd2UPD_0uw.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
          strategy="beforeInteractive"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}