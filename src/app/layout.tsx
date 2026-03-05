import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "REVINT",
  description:
    "Museums, historical registers, spare parts, retailers and stories from people who live every day with classic motorcycles.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SplashScreen>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SplashScreen>
      </body>
    </html>
  );
}
