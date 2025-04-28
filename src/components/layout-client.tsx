'use client';

import { useState } from 'react';
import { Inter } from "next/font/google"; // Keep font import if needed for body className
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ChatInput from "@/components/chat-input"; // Import ChatInput

const inter = Inter({ subsets: ["latin"] });

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col relative", // Add relative positioning context if needed
        inter.className // Apply font class here
      )}
    >
      <Header isSidebarCollapsed={isSidebarCollapsed} onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden"> {/* Added flex-1 and overflow-hidden */}
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className={cn(
          "flex-1 pt-16 transition-all duration-300 ease-in-out flex flex-col overflow-hidden", // Added flex flex-col overflow-hidden
          isSidebarCollapsed ? "pl-16" : "pl-64"
        )}>
          <div className="flex-1 overflow-y-auto px-6 py-4 pb-24">
            {children}
          </div>
        </main>
      </div>
      {/* Render ChatInput outside the main flex flow for fixed positioning */}
      <ChatInput isSidebarCollapsed={isSidebarCollapsed} />
    </body>
  );
} 