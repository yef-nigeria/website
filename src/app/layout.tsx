import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

function getMetadataBase() {
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  title: "Youth Empowerment Foundation",
  description:
    "Youth Empowerment Foundation – A not-for-profit based in sub-Saharan Africa working to up-skill the youth populace to give them a chance at a better future",
  metadataBase: getMetadataBase(),
  openGraph: {
    images: "/assets/images/usaid-girls-cropped.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
