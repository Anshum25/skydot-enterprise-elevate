import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Database, BookOpen, HelpCircle, FileText, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/knowledge-base")({
  component: KnowledgeBasePage,
});

const KB_ARTICLES = [
  {
    title: "How to Configure Moodle Workplace Multi-Tenant Domain Routing",
    category: "Multi-Tenancy",
    readTime: "6 min read",
    desc: "A comprehensive guide on setting up DNS wildcard records, SSL certificates, and tenant brand switching for 100+ organizational tenants."
  },
  {
    title: "Zero-Downtime Blue/Green Moodle Database Migration Strategy",
    category: "Database & Cloud",
    readTime: "8 min read",
    desc: "Step-by-step SQL scripts and rsync procedures to upgrade from Moodle 3.11 to Moodle 4.4 without interrupting live student examinations."
  },
  {
    title: "Integrating Microsoft Entra ID (Azure AD) with SAML 2.0 and MFA",
    category: "Security & SSO",
    readTime: "5 min read",
    desc: "Securing your institutional login flow with Azure AD Federation, automated cohort syncing, and biometric multi-factor authentication."
  },
  {
    title: "Tuning Redis Cache Clusters to Eliminate 504 Gateway Timeouts",
    category: "Performance Tuning",
    readTime: "7 min read",
    desc: "Moving Moodle Universal Cache (MUC) and PHP sessions into in-memory Redis nodes to reduce database load by over 80% during peak hours."
  },
  {
    title: "Automating Workday HRIS Onboarding via Custom Webhooks",
    category: "ERP Integration",
    readTime: "9 min read",
    desc: "Building resilient REST middleware that instantly enrolls newly hired employees into mandatory ISO 27001 compliance certification courses."
  },
  {
    title: "Developing Custom WCAG AAA Accessible Moodle 4.x Themes",
    category: "UI/UX & Themes",
    readTime: "6 min read",
    desc: "Leveraging Bootstrap 5 grid utilities, Mustache templates, and screen-reader ARIA attributes for consumer-grade educational apps."
  }
];

function KnowledgeBasePage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        badge="Enterprise Knowledge Base"
        title="Engineering Insights & Best Practices"
        description="Curated technical whitepapers, architectural blueprints, and troubleshooting guides written by senior Moodle solution architects."
      >
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search knowledge articles (e.g., 'Workday', 'Redis', 'DNS routing')..."
            className="h-14 pl-12 pr-4 rounded-2xl border-border bg-card text-base shadow-lg focus-visible:ring-primary"
          />
        </div>
      </PageHero>

      <section className="section-y bg-background">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {KB_ARTICLES.map((art, idx) => (
              <Card key={idx} className="p-7 border-border bg-card shadow-soft flex flex-col justify-between card-hover group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      {art.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{art.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-heading mb-3 group-hover:text-primary transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-primary">
                  <span>Read Full Article</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#0B0F19] p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">Need Architectural Advice?</h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Our engineering team is available for 1-on-1 consultations to review your LMS infrastructure and solve complex integration challenges.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
