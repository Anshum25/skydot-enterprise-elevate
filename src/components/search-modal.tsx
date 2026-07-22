import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Clock, TrendingUp, ArrowRight, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const recentSearches = [
    "Moodle implementation",
    "CBT platform",
    "Learning analytics",
    "Enterprise LMS",
  ];

  const popularPages = [
    { title: "Services", href: "/services" },
    { title: "CBT Platform", href: "/cbt" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "About Us", href: "/about" },
  ];

  const suggestedServices = [
    { title: "Moodle Consulting", href: "/services/moodle-consulting", icon: "Settings" },
    { title: "AI Learning Solutions", href: "/services/ai-learning", icon: "Brain" },
    { title: "Plugin Development", href: "/services/plugin-development", icon: "Plugin" },
    { title: "Managed Hosting", href: "/services/moodle-hosting", icon: "Server" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              placeholder="Search services, solutions, resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base h-12"
            />
            <kbd className="hidden sm:inline-flex h-8 items-center gap-1 rounded border border-border bg-muted px-2 text-xs font-medium text-muted-foreground">
              <span className="text-xs">ESC</span>
            </kbd>
          </div>

          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {searchQuery ? (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-heading">Search Results</h3>
                <p className="text-sm text-muted-foreground">
                  No results found for "{searchQuery}"
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-heading flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      Recent Searches
                    </h3>
                    <button className="text-xs text-primary hover:underline">
                      Clear all
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => setSearchQuery(search)}
                        className="px-3 py-1.5 text-sm rounded-md bg-accent hover:bg-accent/80 text-paragraph transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-heading flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    Popular Pages
                  </h3>
                  <div className="space-y-2">
                    {popularPages.map((page) => (
                      <Link
                        key={page.title}
                        to={page.href}
                        onClick={() => onOpenChange(false)}
                        className="flex items-center justify-between p-3 rounded-md hover:bg-accent/50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-heading group-hover:text-primary transition-colors">
                          {page.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-heading">Suggested Services</h3>
                  <div className="space-y-2">
                    {suggestedServices.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href as any}
                        onClick={() => onOpenChange(false)}
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors group"
                      >
                        <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon name={service.icon} className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-heading group-hover:text-primary transition-colors">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="px-6 py-4 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↑↓</kbd>
                  <span>to navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">↵</kbd>
                  <span>to select</span>
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">ESC</kbd>
                <span>to close</span>
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    Settings: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    Brain: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    Plugin: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    Server: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
  };

  return icons[name] || null;
}
