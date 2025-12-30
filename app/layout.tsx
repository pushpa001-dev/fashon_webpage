import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "lenis/react";

const tanPearl = localFont({
  src: "../public/fonts/fonnts.com-tan-pearl.otf",
  variable: "--font-tan-pearl",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LAOSE - Fashion Presentation",
  description: "Fashion presentation and collection 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tanPearl.variable} antialiased`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
