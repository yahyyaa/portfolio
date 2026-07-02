import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yahya Sheikh | Data Analyst & BI Developer",
  description:
    "Data Science graduate turning raw data into dashboards, business insights, and automation. Portfolio of Power BI, Python, and full-stack projects.",
  keywords: [
    "Yahya Sheikh",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "Python",
    "Portfolio",
    "Karachi",
  ],
  authors: [{ name: "Yahya Sheikh" }],
  openGraph: {
    title: "Yahya Sheikh | Data Analyst & BI Developer",
    description:
      "Data Science graduate turning raw data into dashboards, business insights, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
