import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spitfire Formula One | Pure Speed",
  description: "Premium Spitfire Formula One Wheels - The Future of Smooth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.className} antialiased bg-black text-white no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
