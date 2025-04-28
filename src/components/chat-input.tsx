'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from 'lucide-react';
import { cn } from "@/lib/utils";

// Updated interface to accept sidebar state
interface ChatInputProps {
  className?: string;
  isSidebarCollapsed: boolean;
}

// Helper class to hide scrollbar (add this to globals.css if needed)
/*
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}
*/

const ChatInput = ({ className, isSidebarCollapsed }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  // Auto-resize logic
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height
      const scrollHeight = textarea.scrollHeight;
      // Consider max-height defined in CSS (e.g., max-h-48 -> 12rem -> 192px)
      const maxHeight = 192; // Example max height in pixels
      textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  }, [inputValue]);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('Submitting:', inputValue);
      setInputValue('');
      // Reset height explicitly after submit
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    // Wrapper Div
    <div
      className={cn(
        // Base positioning & Appearance
        "fixed bottom-4 z-20",
        "relative flex rounded-2xl border border-border shadow-xl bg-background p-3",

        // Conditional positioning: Respects sidebar width + 1.5rem padding on all sizes
        isSidebarCollapsed
          ? "left-[calc(4rem+1.5rem)] right-4 md:left-[calc(50%+2rem)] md:-translate-x-1/2 md:w-[800px] md:right-auto" // Collapsed logic (sm & md+)
          : "left-[calc(16rem+1.5rem)] right-4 md:left-[calc(50%+8rem)] md:-translate-x-1/2 md:w-[800px] md:right-auto", // Expanded logic (sm & md+)

        className
      )}
    >
      <Textarea
        ref={textareaRef}
        placeholder="Ask anything..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        rows={1}
        className={cn(
          // Sizing & Appearance
          "flex-1 resize-none overflow-y-auto bg-transparent border-0 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar-hide shadow-none appearance-none",
          // Padding
          "py-3 pl-4 pr-14",
          // Text & Height
          "text-sm placeholder:text-muted-foreground min-h-10 max-h-48"
        )}
      />
      {/* Absolute positioned button INSIDE the wrapper */}
      <Button
        variant="ghost"
        onClick={handleSubmit}
        disabled={!inputValue.trim()}
        size="icon"
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 shrink-0 rounded-lg",
        )}
      >
        <SendHorizontal className="h-4 w-4" />
        <span className="sr-only">Send message</span>
      </Button>
    </div>
  );
};

export default ChatInput; 