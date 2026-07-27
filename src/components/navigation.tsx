import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", hasMegaMenu: true },
  { label: "Solutions", hasMegaMenu: true },
  { label: "CBT Platform", href: "/cbt" },
  { label: "Resources", hasMegaMenu: true },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const menuTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMenuEnter = (label: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <nav className={cn("hidden lg:flex items-center gap-1", className)}>
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.hasMegaMenu && handleMenuEnter(item.label)}
          onMouseLeave={handleMenuLeave}
        >
          {item.href ? (
            <Link
              to={item.href}
              className="px-4 py-2 text-sm font-medium text-paragraph hover:text-primary transition-colors rounded-md hover:bg-accent/50"
              activeProps={{
                className: "text-primary",
              }}
            >
              {item.label}
            </Link>
          ) : (
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium text-paragraph hover:text-primary transition-colors rounded-md hover:bg-accent/50 flex items-center gap-1",
                activeMenu === item.label && "text-primary"
              )}
              aria-expanded={activeMenu === item.label}
              aria-haspopup="true"
            >
              {item.label}
              <ChevronDown className="h-4 w-4" />
            </button>
          )}

          {item.hasMegaMenu && activeMenu === item.label && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-screen max-w-4xl">
              <div className="bg-card border border-border rounded-lg shadow-lg p-6 animate-fade-in">
                {item.label === "Services" && <ServicesMegaMenu />}
                {item.label === "Solutions" && <SolutionsMegaMenu />}
                {item.label === "Resources" && <ResourcesMegaMenu />}
                {item.label === "Company" && <CompanyMegaMenu />}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

function ServicesMegaMenu() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">Moodle Services</h3>
        <ul className="space-y-3">
          <MegaMenuItem
            icon="Settings"
            title="Moodle Consulting"
            description="Expert guidance for your LMS strategy"
            href="/services/moodle-consulting"
          />
          <MegaMenuItem
            icon="Code"
            title="Moodle Implementation"
            description="End-to-end deployment and setup"
            href="/services/moodle-implementation"
          />
          <MegaMenuItem
            icon="Palette"
            title="Moodle Customization"
            description="Tailored solutions for your needs"
            href="/services/moodle-customization"
          />
          <MegaMenuItem
            icon="Plugin"
            title="Plugin Development"
            description="Custom plugins and integrations"
            href="/services/plugin-development"
          />
          <MegaMenuItem
            icon="Layout"
            title="Theme Development"
            description="Branded, responsive themes"
            href="/services/theme-development"
          />
          <MegaMenuItem
            icon="Server"
            title="Managed Hosting"
            description="Secure, scalable hosting solutions"
            href="/services/moodle-hosting"
          />
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">Enterprise Solutions</h3>
        <ul className="space-y-3">
          <MegaMenuItem
            icon="Brain"
            title="AI Learning"
            description="Intelligent learning experiences"
            href="/ai-services"
          />
          <MegaMenuItem
            icon="BarChart"
            title="Learning Analytics"
            description="Data-driven insights"
            href="/services/learning-analytics"
          />
          <MegaMenuItem
            icon="Link"
            title="ERP Integration"
            description="Seamless system connectivity"
            href="/services/erp-integration"
          />
          <MegaMenuItem
            icon="Api"
            title="API Development"
            description="Custom API solutions"
            href="/services/api-development"
          />
          <MegaMenuItem
            icon="Layers"
            title="Multi Tenant LMS"
            description="Scalable multi-tenant architecture"
            href="/services/multi-tenant-lms"
          />
          <MegaMenuItem
            icon="Zap"
            title="Performance Optimization"
            description="Speed and reliability improvements"
            href="/services/performance-optimization"
          />
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-primary mb-4">Support</h3>
        <ul className="space-y-3">
          <MegaMenuItem
            icon="RefreshCw"
            title="Migration"
            description="Smooth platform transitions"
            href="/services/migration"
          />
          <MegaMenuItem
            icon="ArrowUp"
            title="Upgrades"
            description="Latest version updates"
            href="/services/upgrades"
          />
          <MegaMenuItem
            icon="GraduationCap"
            title="Training"
            description="Comprehensive user training"
            href="/services/training"
          />
          <MegaMenuItem
            icon="Headset"
            title="Technical Support"
            description="24/7 expert assistance"
            href="/services/technical-support"
          />
        </ul>
      </div>
    </div>
  );
}

function SolutionsMegaMenu() {
  const industries = [
    { name: "Education", icon: "GraduationCap", desc: "Universities & Schools", href: "/solutions/education" },
    { name: "Corporate", icon: "Building", desc: "Enterprise LMS", href: "/solutions/corporate" },
    { name: "Government", icon: "Building2", desc: "Public Sector", href: "/solutions/government" },
    { name: "Healthcare", icon: "Heart", desc: "Medical Training", href: "/solutions/healthcare" },
    { name: "Manufacturing", icon: "Factory", desc: "Industrial Training", href: "/solutions/manufacturing" },
    { name: "Banking", icon: "Landmark", desc: "Financial Services", href: "/solutions/banking" },
    { name: "Insurance", icon: "Shield", desc: "Risk Management", href: "/solutions/insurance" },
    { name: "NGO", icon: "Globe", desc: "Non-Profit Organizations", href: "/solutions/ngo" },
    { name: "Training Academy", icon: "BookOpen", desc: "Professional Training", href: "/solutions/training-academy" },
    { name: "Employee Learning", icon: "Users", desc: "Workforce Development", href: "/solutions/employee-learning" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {industries.map((industry) => (
        <Link
          key={industry.name}
          to={industry.href as any}
          className="flex items-start gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors group"
        >
          <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon name={industry.icon} className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-heading group-hover:text-primary transition-colors">
              {industry.name}
            </h4>
            <p className="text-xs text-muted-foreground">{industry.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ResourcesMegaMenu() {
  const resources = [
    { name: "Blog", href: "/blog", icon: "FileText" },
    { name: "Case Studies", href: "/case-studies", icon: "Briefcase" },
    { name: "Documentation", href: "/docs", icon: "Book" },
    { name: "Knowledge Base", href: "/knowledge-base", icon: "Database" },
    { name: "FAQs", href: "/faq", icon: "HelpCircle" },
    { name: "Latest Updates", href: "/updates", icon: "Bell" },
    { name: "Downloads", href: "/downloads", icon: "Download" },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {resources.map((resource) => (
        <Link
          key={resource.name}
          to={resource.href}
          className="flex items-center gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors"
        >
          <Icon name={resource.icon} className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-heading">{resource.name}</span>
        </Link>
      ))}
    </div>
  );
}

function CompanyMegaMenu() {
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Why Skydot", href: "/about/why-skydot" },
    { name: "Development Process", href: "/about/process" },
    { name: "Technology Stack", href: "/about/technology" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {companyLinks.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className="flex items-center gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors"
        >
          <Icon name="ArrowRight" className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-heading">{link.name}</span>
        </Link>
      ))}
    </div>
  );
}

function MegaMenuItem({
  icon,
  title,
  description,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="flex items-start gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors group"
    >
      <div className="h-8 w-8 rounded bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
        <Icon name={icon} className="h-4 w-4" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-heading group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    Settings: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    Code: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    Palette: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    Plugin: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    Layout: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    Server: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    Brain: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    BarChart: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    Link: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    Api: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    Layers: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    Zap: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    RefreshCw: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    ArrowUp: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>,
    GraduationCap: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
    Headset: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    Building: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    Building2: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 21l6-6m12 0l-6-6" /></svg>,
    Heart: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    Factory: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    Landmark: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>,
    Shield: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    Globe: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    BookOpen: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    Users: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    FileText: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    Briefcase: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    Book: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    Database: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    HelpCircle: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    Bell: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    Download: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
    ArrowRight: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>,
  };

  return icons[name] || null;
}
