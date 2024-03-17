import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";

// components
import UpperHeader from "@/components/Headers/UpperHeader";
import Header from "@/components/Headers/Header";
import ThemeModeFooter from "@/components/Footers/ThemeModeFooter";
import Footer from "@/components/Footers/Footer";

const ubuntuFont = Ubuntu({ weight: "500", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Shubham Printing Press",
  description: "Shubham Printing Press",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={ubuntuFont.className}>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <UpperHeader text="B2B Order & Delivery System in Pan India" />
        <Header />
        <main className="background w-full min-h-[100vh]">{children}</main>
        <ThemeModeFooter />
        <Footer />
      </body>
    </html>
  );
}
