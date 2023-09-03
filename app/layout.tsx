import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import NavItem from "@/components/NavItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav>
          <NavItem href="/">Beranda</NavItem>
          <NavItem href="/course">Pelajaran</NavItem>
        </Nav>
        <div className="px-6 pt-20 pb-6 md:px-20">{children}</div>
      </body>
    </html>
  );
}
