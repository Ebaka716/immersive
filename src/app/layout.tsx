import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "@/components/layout-client";

export const metadata: Metadata = {
  title: "Immersive UI",
  description: "Chat + Search UI Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LayoutClient>{children}</LayoutClient>
    </html>
  );
}
