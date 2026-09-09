import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const merriweather = Merriweather({ weight: ["400", "700"], subsets: ["latin"], variable: '--font-merriweather' });

export const metadata: Metadata = {
  title: "Mana Vantillu | The Taste of Home, Delivered to You",
  description: "Freshly prepared Tiffins, flavorful Biryanis, and refreshing drinks delivered straight to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased hero-pattern`}>
        {children}
      </body>
    </html>
  );
}
