import React from 'react';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelRightClose } from 'lucide-react';

interface HeaderProps {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

const Header = ({ isSidebarCollapsed, onToggleSidebar }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background z-10 flex items-center px-4">
      <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="mr-4">
        {isSidebarCollapsed ? (
          <PanelRightClose className="h-5 w-5" />
        ) : (
          <PanelLeftClose className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
      <h1 className="text-lg font-semibold">Immersive UI</h1>
    </header>
  );
};

export default Header; 