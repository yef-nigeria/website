import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Empowerment Foundation",
  description:
    "Youth Empowerment Foundation – A not-for-profit based in sub-saharan Africa working to up-skill the youth populace to give them a chance at a better future",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
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
