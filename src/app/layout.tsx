import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/Application/Utils/AppProvider";

export const metadata: Metadata = {
  title: "Valadate Dating App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> <AppProvider> {children} </AppProvider></body>
    </html>
  );
}