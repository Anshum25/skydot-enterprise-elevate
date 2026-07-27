import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Book, Code, Server, Shield, Layers, ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
});

const DOCS_CATEGORIES = [
  {
    title: "Moodle 4.4+ Architecture & Setup",
    desc: "Complete step-by-step guides for installing and scaling Moodle on AWS, Azure, and Kubernetes.",
    icon: Server,
    articles: ["System Requirements & Sizing", "Linux Nginx & PHP-FPM Configuration", "Redis Session Cluster Setup", "MySQL Read-Replica Routing"]
  },
  {
    title: "Plugin & Theme Engineering",
    desc: "Official API documentation and code templates for custom activity modules and Boost child themes.",
    icon: Code,
    articles: ["Moodle Plugin Structure (mod, block, local)", "Mustache Templates & Bootstrap 5", "Web Services & REST API Development", "PHPUnit Automated Testing"]
  },
  {
    title: "Moodle Workplace Multi-Tenancy",
    desc: "Configuring dynamic rules, tenant isolation, and automated corporate compliance reporting.",
    icon: Layers,
    articles: ["Tenant Isolation Setup", "Dynamic Organizational Hierarchies", "Automated Certificate Issuance", "Shared vs. Private Course Catalogs"]
  },
  {
    title: "Security & ISO 27001 Hardening",
    desc: "Best practices for securing enterprise LMS databases and preventing unauthorized access.",
    icon: Shield,
    articles: ["OAuth2 & Azure AD SSO Setup", "GDPR & Data Privacy API", "WAF & DDoS Mitigation Rules", "Database Encryption at Rest"]
  },
  {
    title: "Data Migration & ETL Pipelines",
    desc: "Technical procedures for importing historical courses and gradebooks from legacy LMS platforms.",
    icon: FileText,
    articles: ["Blackboard & Canvas IMS-CC Import", "Gradebook Checksum Validation", "User Account & Password Hash Sync", "SCORM 1.2 / 2004 Asset Relocation"]
  },
  {
    title: "Performance & Caching Tuning",
    desc: "Eliminating database bottlenecks and 504 Gateway Timeouts under high concurrent examination load.",
    icon: Book,
    articles: ["OPcache & PHP 8.2 Optimization", "Slow Query Log Refactoring", "Apache JMeter Stress Testing", "Cloudflare CDN Edge Caching"]
  }
];

function DocsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        badge="Technical Documentation"
        title="Skydot E-Learning Architecture Docs"
        description="Official engineering specifications, code repositories, and system administration guides for Moodle Core and Moodle Workplace."
      >
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search documentation (e.g., 'Redis', 'Multi-tenant', 'SAML SSO')..."
            className="h-14 pl-12 pr-4 rounded-2xl border-border bg-card text-base shadow-lg focus-visible:ring-primary"
          />
        </div>
      </PageHero>

      <section className="section-y bg-background">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCS_CATEGORIES.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <Card key={idx} className="p-7 border-border bg-card shadow-soft flex flex-col justify-between card-hover group">
                  <div>
                    <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className="size-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-heading mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-paragraph leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                    <div className="space-y-2.5 pt-4 border-t border-border/80">
                      {cat.articles.map((art, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-heading hover:text-primary cursor-pointer transition-colors">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                          <span>{art}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-primary">
                    <span>Explore Section</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#0B0F19] p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">Need Custom Architecture Specifications?</h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Our system architects can draft custom API integration specs and topology diagrams for your internal development team.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link to="/contact">Request Custom Architecture Spec</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
