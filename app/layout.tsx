import type { Metadata } from "next";
import { Tourney, Gruppo } from "next/font/google";
import "./globals.css";

const tourney = Tourney({
  variable: "--font-tourney",
  subsets: ["latin"],
});

const gruppo = Gruppo({
  variable: "--font-gruppo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Irene's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gruppo.variable} ${tourney.variable}`}>
        {children}
      </body>
    </html>
  );
}
