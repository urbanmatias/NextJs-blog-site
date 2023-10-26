import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/MyProfilePic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matias's blog",
  description: "Created by Matias Urban",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-600 dark:bg-slate-800">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
