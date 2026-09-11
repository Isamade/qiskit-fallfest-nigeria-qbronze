import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "QBronze199 | Quantum Computing Workshop",
  description: "Join the QBronze199 introductory workshop on Quantum Computing and Programming. Learn the basics of quantum systems, Qiskit, and quantum search algorithms.",
  keywords: ["Quantum Computing", "Qiskit", "Workshop", "QBronze199", "QWorld", "Programming"],
  openGraph: {
    title: "QBronze199 Quantum Workshop",
    description: "Join the introductory workshop on Quantum Computing and Programming.",
    url: "https://qworld.net/qbronze199",
    siteName: "QWorld",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
