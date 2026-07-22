import * as React from "react";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { HeaderActions } from "@/components/header-actions";
import { SearchModal } from "@/components/search-modal";
import { MobileNavigation } from "@/components/mobile-navigation";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-background border-b border-border transition-shadow duration-200",
          isScrolled && "shadow-sm",
          className
        )}
      >
        <div className="container-page">
          <div className="flex h-18 items-center justify-between gap-6">
            <Logo />
            <Navigation />
            <div className="flex items-center gap-3">
              <HeaderActions onSearchOpen={() => setSearchOpen(true)} />
              <MobileNavigation open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
            </div>
          </div>
        </div>
      </header>
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
