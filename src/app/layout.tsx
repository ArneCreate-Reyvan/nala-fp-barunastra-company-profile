import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NALA | Autonomous Marine Systems",
  description:
    "NALA develops autonomous marine research vessels integrating AI navigation, sensor telemetry, and modular robotics systems.",
  keywords: [
    "autonomous vessel",
    "marine robotics",
    "AI navigation",
    "robotics research",
    "Barunastra"
  ],
  openGraph: {
    title: "NALA Autonomous Systems",
    description:
      "Engineering the next generation of autonomous marine systems.",
    type: "website"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
