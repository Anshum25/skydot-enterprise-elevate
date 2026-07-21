import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "CBT Platform", to: "/cbt" },
  { label: "Moodle", to: "/moodle-development" },
  { label: "AI", to: "/ai-services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          : "border-b border-transparent bg-background/60 backdrop-blur",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold shadow-soft">
            S
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] tracking-tight text-heading">Skydot Infotech</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">Enterprise Moodle & AI</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-paragraph hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" aria-label="Search" className="hidden sm:inline-flex rounded-full">
            <Search className="size-5" />
          </Button>
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex shadow-soft">
            <Link to="/contact">Book a Demo</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium text-paragraph hover:bg-surface hover:text-primary"
                activeProps={{ className: "text-primary bg-surface" }}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Book a Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
