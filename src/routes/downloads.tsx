import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Shield, Server, Code, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  component: DownloadsPage,
});

const DOWNLOADS = [
  {
    title: "Skydot Enterprise Moodle Architecture Whitepaper",
    category: "Technical Whitepaper (PDF)",
    size: "4.2 MB",
    desc: "Comprehensive 40-page guide detailing high-concurrency Linux/Kubernetes topology, Redis session clusters, and MySQL read-replica configuration.",
    icon: Server
  },
  {
    title: "ISO 27001 & HIPAA LMS Compliance Checklist",
    category: "Security Guide (PDF)",
    size: "1.8 MB",
    desc: "An actionable audit verification list for university CIOs and healthcare IT directors preparing for regulatory data security inspections.",
    icon: Shield
  },
  {
    title: "Workday & SAP SuccessFactors Integration Spec",
    category: "API Document (PDF / OpenAPI)",
    size: "2.5 MB",
    desc: "Complete REST webhook contracts, field mapping matrices, and OAuth 2.0 authentication flows for automated HRIS onboarding.",
    icon: Code
  },
  {
    title: "Moodle Workplace Multi-Tenancy Governance Guide",
    category: "Administration Manual (PDF)",
    size: "3.1 MB",
    desc: "Best practices for setting up organizational hierarchies, shared course pools, and branded tenant portals across global corporations.",
    icon: Layers
  },
  {
    title: "Zero-Downtime LMS Migration Blueprint",
    category: "Engineering Guide (PDF)",
    size: "2.9 MB",
    desc: "Step-by-step procedures for migrating from Blackboard, Canvas, or legacy Moodle 3.x systems without data loss or user downtime.",
    icon: FileText
  }
];

function DownloadsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        badge="Enterprise Resources"
        title="Whitepapers & Architecture Specifications"
        description="Download technical documentation, security checklists, and integration blueprints authored by Skydot's engineering leadership."
      />

      <section className="section-y bg-background">
        <div className="container-page max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {DOWNLOADS.map((dl, idx) => {
              const IconComponent = dl.icon;
              return (
                <Card key={idx} className="p-7 border-border bg-card shadow-soft flex flex-col justify-between card-hover group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {dl.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">{dl.size}</span>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                        <IconComponent className="size-6" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-heading group-hover:text-primary transition-colors leading-snug">
                        {dl.title}
                      </h3>
                    </div>
                    <p className="text-sm text-paragraph leading-relaxed mb-6">
                      {dl.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Button asChild variant="outline" size="sm" className="gap-2 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                      <Link to="/contact">
                        <Download className="size-4" /> Download Specification
                      </Link>
                    </Button>
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
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">Need a Custom RFP or Security Response?</h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Our architects can fill out your organization's formal Request for Proposal (RFP) or vendor security questionnaires within 48 hours.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link to="/contact">Submit RFP / Questionnaire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
