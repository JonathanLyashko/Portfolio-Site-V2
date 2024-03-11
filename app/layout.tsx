import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Jonathan Lyashko",
  description: "Full Stack | Machine Learning | Computer Engineering student at the University of Waterloo. Let's build something the world needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
