import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Sparkles, ShieldCheck, Zap, Code, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/updates")({
  component: UpdatesPage,
});

const UPDATES = [
  {
    version: "Skydot Enterprise Stack v4.4.2",
    date: "July 2026",
    badge: "Major Release",
    highlights: [
      "Full support and zero-downtime migration compatibility for Moodle 4.4 stable release.",
      "New AI Tutor LLM plugin with custom OpenAI / Claude token streaming and essay auto-grading.",
      "Redis cluster session sharding improvements, boosting concurrent exam capacity by 35%.",
      "Enhanced ISO 27001 automated compliance audit report builder in Moodle Workplace."
    ]
  },
  {
    version: "Skydot Enterprise Stack v4.3.8",
    date: "April 2026",
    badge: "Security & Performance",
    highlights: [
      "Automated SAML 2.0 and Microsoft Entra ID (Azure AD) biometric multi-factor login support.",
      "WCAG 2.1 AAA high-contrast accessibility color system switcher added to all Boost child themes.",
      "Workday HRIS webhook connector upgraded with exponential backoff and automatic error retry queues."
    ]
  },
  {
    version: "Skydot Enterprise Stack v4.3.0",
    date: "January 2026",
    badge: "Feature Rollout",
    highlights: [
      "Multi-tenant domain routing engine released for commercial training academies and franchise networks.",
      "Stripe and Razorpay billing gateway plugin with subscription membership discounting.",
      "xAPI Learning Record Store (LRS) connector for VR simulation and clinical healthcare hardware."
    ]
  }
];

function UpdatesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        badge="Platform Changelog"
        title="Latest Architectural Updates & Releases"
        description="Stay up to date with Skydot's engineering enhancements, security patches, and new Moodle integration capabilities."
      />

      <section className="section-y bg-background">
        <div className="container-page max-w-4xl">
          <div className="space-y-10">
            {UPDATES.map((upd, idx) => (
              <Card key={idx} className="p-8 border-border bg-card shadow-soft relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                      {upd.badge}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-heading">
                      {upd.version}
                    </h3>
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">{upd.date}</span>
                </div>
                
                <div className="space-y-3.5">
                  {upd.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-paragraph">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
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
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">Ready to Upgrade to Our Latest Stack?</h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Our DevOps team can migrate your existing instance to our latest Moodle 4.4+ cloud architecture with zero data loss.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link to="/contact">Schedule Architecture Upgrade</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
