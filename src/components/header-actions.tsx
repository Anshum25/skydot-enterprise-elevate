import * as React from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderActionsProps {
  className?: string;
  onSearchOpen?: () => void;
}

export function HeaderActions({ className, onSearchOpen }: HeaderActionsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <button
        onClick={onSearchOpen}
        className="p-2 rounded-md hover:bg-accent/50 transition-colors text-muted-foreground hover:text-primary"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
      <ThemeToggle />
      <Button asChild size="default" className="hidden sm:inline-flex">
        <a href="/contact">Schedule Demo</a>
      </Button>
    </div>
  );
}
