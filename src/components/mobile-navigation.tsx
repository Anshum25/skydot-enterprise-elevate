import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { X, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", hasSubmenu: true, items: [
    { label: "Moodle Consulting", href: "/services/moodle-consulting" },
    { label: "Moodle Implementation", href: "/services/moodle-implementation" },
    { label: "Moodle Customization", href: "/services/moodle-customization" },
    { label: "Plugin Development", href: "/services/plugin-development" },
    { label: "Theme Development", href: "/services/theme-development" },
    { label: "Managed Hosting", href: "/services/moodle-hosting" },
    { label: "AI Learning", href: "/ai-services" },
    { label: "Learning Analytics", href: "/services/learning-analytics" },
    { label: "ERP Integration", href: "/services/erp-integration" },
  ]},
  { label: "Solutions", hasSubmenu: true, items: [
    { label: "Education", href: "/solutions/education" },
    { label: "Corporate", href: "/solutions/corporate" },
    { label: "Government", href: "/solutions/government" },
    { label: "Healthcare", href: "/solutions/healthcare" },
    { label: "Manufacturing", href: "/solutions/manufacturing" },
    { label: "Banking", href: "/solutions/banking" },
  ]},
  { label: "CBT Platform", href: "/cbt" },
  { label: "Resources", hasSubmenu: true, items: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Documentation", href: "/docs" },
    { label: "Knowledge Base", href: "/knowledge-base" },
    { label: "FAQs", href: "/faq" },
  ]},
  { label: "Company", hasSubmenu: true, items: [
    { label: "About", href: "/about" },
    { label: "Why Skydot", href: "/about/why-skydot" },
    { label: "Development Process", href: "/about/process" },
    { label: "Technology Stack", href: "/about/technology" },
    { label: "Careers", href: "/careers" },
  ]},
  { label: "Contact", href: "/contact" },
];

export function MobileNavigation({ open, onOpenChange }: MobileNavigationProps) {
  const [expandedMenus, setExpandedMenus] = React.useState<Set<string>>(new Set());

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <>
      <button
        onClick={() => onOpenChange(true)}
        className="lg:hidden p-2 rounded-md hover:bg-accent/50 transition-colors text-muted-foreground hover:text-primary"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
          onClick={() => onOpenChange(false)}
        />
        <div className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-xl animate-slide-up">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="text-lg font-semibold text-heading font-display">Menu</span>
              <button
                onClick={() => onOpenChange(false)}
                className="p-2 rounded-md hover:bg-accent/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <nav className="space-y-1">
                {mobileNavItems.map((item) => (
                  <div key={item.label}>
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => toggleMenu(item.label)}
                          className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors text-left"
                          aria-expanded={expandedMenus.has(item.label)}
                        >
                          <span className="text-base font-medium text-heading">{item.label}</span>
                          {expandedMenus.has(item.label) ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                        {expandedMenus.has(item.label) && (
                          <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href as any}
                                onClick={() => onOpenChange(false)}
                                className="block p-3 rounded-lg hover:bg-accent/50 transition-colors text-base text-paragraph hover:text-primary"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href as any}
                        onClick={() => onOpenChange(false)}
                        className="block p-4 rounded-lg hover:bg-accent/50 transition-colors text-base font-medium text-heading"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="p-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-heading">Theme</span>
                <ThemeToggle />
              </div>
              <Button asChild size="lg" className="w-full">
                <a href="/contact">Schedule Demo</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
