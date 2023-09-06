import NavBar from "@/components/nav-bar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MobileNavMenu from "@/components/mobile-nav-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manuel Rodriguez Urdapilleta",
  description: "Manuel Rodriguez Urdapilleta's developer portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar className="hidden md:block" />
        <MobileNavMenu className="md:hidden" />
        {children}
      </body>
    </html>
  );
}
