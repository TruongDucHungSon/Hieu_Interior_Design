import Footer from "@/layout/footer/Footer";
import Header from "@/layout/header/Header";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const FontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FontPoppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
