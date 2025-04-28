import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlusSquare, History, Settings } from "lucide-react";

// Define props type
interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed top-16 left-0 bottom-0 border-r bg-background z-0 pt-4 transition-all duration-300 ease-in-out flex flex-col",
        isCollapsed ? "w-16 px-2" : "w-64 px-4"
      )}
    >
      {/* Top Section Buttons */}
      <div className="flex flex-col gap-2 mb-4">
        <Button variant="ghost" className={cn("w-full", isCollapsed ? "justify-center px-0" : "justify-start")}>
          <PlusSquare className={cn("h-5 w-5", !isCollapsed && "mr-2")} />
          {!isCollapsed && <span>New Search</span>}
          {isCollapsed && <span className="sr-only">New Search</span>}
        </Button>
        <Button variant="ghost" className={cn("w-full", isCollapsed ? "justify-center px-0" : "justify-start")}>
          <History className={cn("h-5 w-5", !isCollapsed && "mr-2")} />
          {!isCollapsed && <span>History</span>}
          {isCollapsed && <span className="sr-only">History</span>}
        </Button>
      </div>

      {/* Placeholder for future main navigation */}
      <nav className="flex-grow">
        {/* {!isCollapsed && <p>Main Nav Area</p>} */}
      </nav>

      {/* Footer Section Button */}
      <div className="mt-auto pb-4">
        <Button variant="ghost" className={cn("w-full", isCollapsed ? "justify-center px-0" : "justify-start")}>
          <Settings className={cn("h-5 w-5", !isCollapsed && "mr-2")} />
          {!isCollapsed && <span>Settings</span>}
          {isCollapsed && <span className="sr-only">Settings</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar; 