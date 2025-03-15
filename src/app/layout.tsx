import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

// Import Space Mono from Google Fonts
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RoboWars",
  description: "The official RoboWars website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}