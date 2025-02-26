import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/context/AuthContext";
import ToasterContext from "@/context/ToasterContext";
import ActiveStatus from "@/components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeChat| a chat application",
  description: "a chat application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-100`}>
        <AuthContext>
          <ToasterContext/>
          <ActiveStatus/>
        {children}
        </AuthContext>
        </body>
    </html>
  );
}
