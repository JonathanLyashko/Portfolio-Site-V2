import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Jonathan Lyashko",
  description: "Full Stack | Machine Learning | Computer Engineering student at the University of Waterloo. Let's build something the world needs",
  icons: {
    icon: [
      { url: '/favicon.ico'},
      { url: '/favicon-32x32.png', sizes: '32x32'},
      { url: '/favicon-16x16.png', sizes: '16x16'}
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png'}
    ]
  }
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
