import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { restaurant } from "@/data/restaurant";
import { restaurantSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emberandspice.example"),
  title: {
    default: `${restaurant.name} | ${restaurant.tagline}`,
    template: `%s | ${restaurant.name}`,
  },
  description: restaurant.description,
  keywords: [
    "premium restaurant website template",
    "fine dining San Francisco",
    "restaurant reservations",
    "private dining",
    "modern restaurant menu",
  ],
  openGraph: {
    title: `${restaurant.name} | ${restaurant.tagline}`,
    description: restaurant.description,
    type: "website",
    url: "/",
    images: [
      {
        url: "/hero-premium.jpg",
        width: 1200,
        height: 800,
        alt: "EMBER & SPICE dining room",
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
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema()) }} />
        {children}
      </body>
    </html>
  );
}
