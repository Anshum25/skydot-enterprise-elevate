import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Server,
  Cloud,
  Code2,
  Network,
  Bot,
  LineChart,
  ArrowRight,
  Shield,
  Zap,
  LayoutTemplate,
  MonitorCheck,
  Building2,
  Video,
  Mail,
  MessageCircle,
  CreditCard,
  BarChart4,
  Key,
  Database,
  Globe,
  Settings,
  ArrowDown,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about/technology")({
  head: () => ({
    meta: [
      { title: "Technology Stack & Integrations | Skydot Infotech" },
      { name: "description", content: "Built with Modern, Enterprise-Ready Technologies" },
    ],
    links: [{ rel: "canonical", href: "/about/technology" }],
  }),
  component: TechnologyPage,
});

const TABS = [
  { id: "platform", label: "Platform", icon: LayoutTemplate },
  { id: "cloud", label: "Cloud", icon: Cloud },
  { id: "development", label: "Development", icon: Code2 },
  { id: "integration", label: "Integration", icon: Network },
  { id: "ai", label: "AI", icon: Bot },
  { id: "analytics", label: "Analytics", icon: LineChart },
];

const TAB_CONTENT: Record<string, { desc: string; items: string[] }> = {
  platform: {
    desc: "Our core learning platforms are built on robust, scalable and extensible standards to ensure long-term sustainability.",
    items: ["Moodle LMS", "Open Source", "Multi-Tenant", "SCORM", "H5P", "LTI", "xAPI", "Responsive Learning", "Role Management"]
  },
  cloud: {
    desc: "We leverage modern cloud infrastructure to improve reliability, scalability and performance for enterprise workloads.",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "NGINX", "Redis", "Load Balancing", "CDN", "Automated Backup", "Monitoring", "High Availability"]
  },
  development: {
    desc: "Modern development practices and modern stacks enable secure, maintainable and high-performance solutions.",
    items: ["PHP", "Laravel", "Node.js", "Python", "FastAPI", "TypeScript", "React", "Next.js", "REST API", "GraphQL", "Git", "CI/CD"]
  },
  integration: {
    desc: "Moodle can integrate seamlessly with existing enterprise systems, directories and business applications.",
    items: ["Microsoft Teams", "Google Workspace", "Zoom", "ERPNext", "SAP", "Salesforce", "HubSpot", "HRMS", "CRM", "SSO", "LDAP", "OAuth", "REST APIs", "Webhooks"]
  },
  ai: {
    desc: "We utilize AI to enhance learning, automate workflows and provide deeper insights rather than replacing instructors.",
    items: ["OpenAI", "Anthropic", "Vector Search", "AI Chatbot", "Smart Search", "Recommendation Engine", "Automation"]
  },
  analytics: {
    desc: "Organizations can make data-driven learning decisions through comprehensive, real-time analytics and reporting.",
    items: ["Power BI", "Custom Dashboards", "Reports", "Learning Analytics", "Competency Tracking", "Performance Reports", "Executive Dashboards"]
  }
};

const WHY_TECH = [
  { icon: Globe, title: "Open Standards", desc: "Built on open-source technologies." },
  { icon: Shield, title: "Enterprise Security", desc: "Designed for secure enterprise environments." },
  { icon: Server, title: "Scalable Infrastructure", desc: "Grow from hundreds to thousands of learners." },
  { icon: Zap, title: "Future Ready", desc: "Modern technologies designed for long-term evolution." }
];

const INTEGRATIONS = [
  { icon: Video, title: "Microsoft Teams", desc: "Enterprise collaboration" },
  { icon: Video, title: "Google Meet", desc: "Virtual classrooms" },
  { icon: Video, title: "Zoom", desc: "Live sessions" },
  { icon: Building2, title: "ERP", desc: "Enterprise resource planning" },
  { icon: Network, title: "CRM", desc: "Customer relationship management" },
  { icon: Users, title: "HRMS", desc: "Human capital management" },
  { icon: CreditCard, title: "Payment Gateway", desc: "Secure transactions" },
  { icon: BarChart4, title: "Power BI", desc: "Business intelligence" },
  { icon: Key, title: "Single Sign-On", desc: "Seamless authentication" },
  { icon: Mail, title: "Email Services", desc: "Automated notifications" },
  { icon: MessageCircle, title: "SMS Gateway", desc: "Instant alerts" },
  { icon: MessageCircle, title: "WhatsApp", desc: "Conversational updates" }
];

function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("platform");

  return (
    <div>
      {/* SECTION INTRODUCTION */}
      <section className="relative border-b border-border bg-background pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Technology</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-heading">
              Built with Modern, Enterprise-Ready Technologies
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-paragraph">
              Every Moodle deployment is backed by modern cloud infrastructure, secure integrations, scalable architecture and industry-standard technologies.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK TABS */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4 overflow-x-auto hide-scrollbar">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                    activeTab === tab.id 
                      ? "bg-primary text-primary-foreground shadow-soft" 
                      : "text-paragraph hover:bg-background hover:text-heading border border-transparent hover:border-border"
                  )}
                >
                  <tab.icon className="size-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-soft min-h-[250px] animate-fade-in">
              <h3 className="text-2xl font-display font-bold text-heading mb-3">
                {TABS.find(t => t.id === activeTab)?.label} Stack
              </h3>
              <p className="text-paragraph leading-relaxed mb-8 max-w-3xl">
                {TAB_CONTENT[activeTab].desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {TAB_CONTENT[activeTab].items.map((item) => (
                  <div key={item} className="px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium text-heading">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="System Architecture"
            align="center"
          />
          <div className="mt-14 max-w-4xl mx-auto">
            {/* Desktop Horizontal Workflow */}
            <div className="hidden md:flex items-center justify-between relative px-6">
              <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 bg-border -z-10" />
              {[
                { icon: Users, label: "Users" },
                { icon: LayoutTemplate, label: "Moodle LMS" },
                { icon: Key, label: "Authentication" },
                { icon: Building2, label: "Business Apps" },
                { icon: Cloud, label: "Cloud Infra" },
                { icon: LineChart, label: "Analytics" }
              ].map((step, i) => (
                <div key={step.label} className="flex flex-col items-center gap-3 bg-background group px-2">
                  <div className="grid size-16 place-items-center rounded-xl border border-border bg-card shadow-soft group-hover:border-primary transition-colors">
                    <step.icon className="size-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-xs font-semibold text-heading max-w-[80px] text-center">{step.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Workflow */}
            <div className="md:hidden flex flex-col items-center gap-6">
              {[
                { icon: Users, label: "Users" },
                { icon: LayoutTemplate, label: "Moodle LMS" },
                { icon: Key, label: "Authentication" },
                { icon: Building2, label: "Business Applications" },
                { icon: Cloud, label: "Cloud Infrastructure" },
                { icon: LineChart, label: "Analytics & Reporting" }
              ].map((step, i) => (
                <div key={step.label} className="flex flex-col items-center text-center">
                  <div className="grid size-16 place-items-center rounded-xl border border-border bg-card shadow-soft text-primary">
                    <step.icon className="size-7" />
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-sm text-heading">{step.label}</h3>
                  {i < 5 && (
                    <ArrowDown className="size-5 text-muted-foreground mt-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUR TECHNOLOGY */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            title="Why Our Technology"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_TECH.map((wt) => (
              <div key={wt.title} className="flex flex-col items-start p-6 rounded-xl border border-border bg-card shadow-card card-hover">
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary mb-5">
                  <wt.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-heading mb-2">{wt.title}</h3>
                <p className="text-sm text-paragraph">{wt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION HIGHLIGHTS */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="Enterprise Integrations"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {INTEGRATIONS.map((int) => (
              <div key={int.title} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface card-hover shadow-soft">
                <div className="grid size-10 place-items-center rounded-lg bg-background border border-border text-primary shrink-0">
                  <int.icon className="size-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-heading">{int.title}</h4>
                  <p className="mt-0.5 text-xs text-paragraph">{int.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-card p-10 md:p-16 text-center shadow-elevated">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-heading tracking-tight max-w-3xl mx-auto">
              Need a Moodle Platform That Fits Your Existing Technology Stack?
            </h2>
            <p className="mt-5 text-paragraph text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Our engineers help organizations integrate Moodle with enterprise applications, cloud infrastructure and modern business systems.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background">
                <Link to="/about/technology">Explore Our Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
