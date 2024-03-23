import type { Metadata } from "next";
import "./globals.css";

const ogUrl = process.env.NEXT_OG;

export const metadata: Metadata = {
  title: "Marissa Vargas",
  icons: "/favicon.ico",
  description:
    "I find creativity in building digital products as a frontend developer.",
  openGraph: {
    images: [
      {
        url: `${ogUrl}`,
        width: 1200,
        height: 630,
        alt: "Marissa Vargas Sánchez Frontend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
