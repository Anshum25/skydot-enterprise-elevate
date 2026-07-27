import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Brain, Server, ShieldCheck, BarChart3, Users, Layers, ArrowRight, CheckCircle2, 
  Sparkles, TrendingUp, HelpCircle, FileText, Target, Award, Zap, Building2
} from "lucide-react";

export const Route = createFileRoute("/services/moodle-consulting")({
  component: MoodleConsultingPage,
});

const ADVISORY_FOCUS_AREAS = [
  {
    id: "scaling",
    label: "High-Concurrency Scaling",
    icon: Server,
    title: "50,000+ Simultaneous Exam Takers",
    desc: "We architect AWS & Kubernetes clusters with Redis session sharding and database read-replicas to ensure zero latency during high-stakes university or enterprise exam windows.",
    metric: "99.99% Guaranteed Uptime",
    tag: "Infrastructure Blueprint"
  },
  {
    id: "pedagogical",
    label: "Pedagogical & UI Redesign",
    icon: Brain,
    title: "Modernizing the Learner Experience",
    desc: "Transform clunky academic course lists into intuitive, consumer-grade digital campuses with gamified progression, competency frameworks, and conditional release rules.",
    metric: "+65% Learner Engagement",
    tag: "Workflow & UI Strategy"
  },
  {
    id: "security",
    label: "ISO 27001 & Security Hardening",
    icon: ShieldCheck,
    title: "Bank-Grade LMS Data Security",
    desc: "Comprehensive OAuth2 / SAML SSO integration, multi-factor authentication enforcement, AES-256 database encryption, and tamper-proof compliance audit logging.",
    metric: "100% Audit Readiness",
    tag: "Security Blueprint"
  },
  {
    id: "tco",
    label: "Cloud TCO & Cost Reduction",
    icon: BarChart3,
    title: "Slashing Unnecessary Cloud Bills",
    desc: "We analyze database slow queries, eliminate redundant commercial licenses, and implement auto-scaling server pods so you only pay for high compute during peak hours.",
    metric: "35% Average Cost Savings",
    tag: "Financial Optimization"
  }
];

const COMPARISON_MATRIX = [
  {
    metric: "Server Architecture",
    standard: "Single generic web server with shared database; crashes under exam surges.",
    skydot: "Auto-scaling Kubernetes web nodes with dedicated Redis session clusters and database read-replicas."
  },
  {
    metric: "Upgrade Safety",
    standard: "Hacked core PHP files that break completely whenever Moodle releases an update.",
    skydot: "100% clean local plugin & hook architecture; upgrades are seamless and zero-downtime."
  },
  {
    metric: "User Authentication",
    standard: "Manual CSV file uploads and password resets requiring endless IT helpdesk hours.",
    skydot: "Automated SAML / Microsoft Entra ID (Azure AD) SSO with automated HR department cohort syncing."
  },
  {
    metric: "Security & Privacy",
    standard: "Basic password encryption with no data residency or GDPR / HIPAA compliance auditing.",
    skydot: "ISO 27001 certified engineering, AES-256 encryption at rest, and immutable compliance audit trails."
  }
];

const DISCOVERY_PILLARS = [
  { step: "01", title: "Stakeholder Discovery & KPI Mapping", desc: "We interview CIOs, academic deans, HR leaders, and IT depts to establish clear technical and pedagogical KPIs." },
  { step: "02", title: "Infrastructure & Database Audit", desc: "Deep inspection of your MySQL/PostgreSQL schemas, query execution logs, server IOPS, and third-party plugin health." },
  { step: "03", title: "Strategic Blueprint Creation", desc: "Delivering a comprehensive 40-page architectural topology, security hardening matrix, and cloud sizing roadmap." },
  { step: "04", title: "Prototype & Proof of Concept (PoC)", desc: "Building a sandboxed staging environment to validate complex SSO logins, custom workflows, and API integrations." }
];

function MoodleConsultingPage() {
  const [activeTab, setActiveTab] = React.useState("scaling");
  const currentFocus = ADVISORY_FOCUS_AREAS.find(f => f.id === activeTab) || ADVISORY_FOCUS_AREAS[0];

  return (
    <div className="bg-background min-h-screen">
      {/* UNIQUE HERO: STRATEGIC ADVISORY & INTERACTIVE BLUEPRINT SELECTOR */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 border-b border-border bg-gradient-to-b from-surface via-background to-background">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-display font-semibold text-xs uppercase tracking-widest mb-6">
                <Brain className="size-3.5" />
                <span>Executive Strategic Advisory</span>
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-heading tracking-tight leading-[1.12]">
                Architecting High-Concurrency <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">Moodle Ecosystems</span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-paragraph leading-relaxed font-normal max-w-2xl">
                Avoid costly architectural blind spots. Our senior solution architects help universities and global enterprises design fault-tolerant, secure, and highly scalable digital learning ecosystems before writing a single line of code.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="h-13 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25">
                  <Link to="/contact">
                    Book Architectural Audit <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 px-6 text-base border-border hover:border-primary hover:text-primary">
                  <Link to="/downloads">Download Architecture Spec</Link>
                </Button>
              </div>

              {/* STRATEGIC METRICS STRIP */}
              <div className="mt-12 pt-8 border-t border-border/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-primary">15+ Yrs</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Deep Moodle Expertise</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-orange-500">5M+</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Learners Architected</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-500">ISO 27001</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Security Standard</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE FOCUS AREA BLUEPRINT HUB */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl relative">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center justify-between">
                  <span>Interactive Architecture Explorer</span>
                  <span className="text-primary font-semibold">Select Focus Area</span>
                </div>

                {/* SELECTOR TABS */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {ADVISORY_FOCUS_AREAS.map((f) => {
                    const IconComp = f.icon;
                    const isSelected = f.id === activeTab;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setActiveTab(f.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                          isSelected
                            ? "border-primary bg-primary/10 text-heading font-semibold shadow-sm"
                            : "border-border/60 bg-surface/50 text-muted-foreground hover:text-heading hover:bg-surface"
                        }`}
                      >
                        <IconComp className={`size-4 shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-xs sm:text-sm leading-snug">{f.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* DYNAMIC BLUEPRINT PREVIEW CARD */}
                <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-orange-950/20 via-card to-card relative overflow-hidden animate-fade-in">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/15 text-primary text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="size-3" />
                    <span>{currentFocus.tag}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-heading mb-2">
                    {currentFocus.title}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed mb-6">
                    {currentFocus.desc}
                  </p>
                  <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">Key Advisory Outcome</span>
                      <span className="font-display font-bold text-base text-primary">{currentFocus.metric}</span>
                    </div>
                    <Button asChild size="sm" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/contact">Discuss Strategy</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CONSULTING MATTERS (THE COSTS OF POOR ARCHITECTURE) */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
              Why Off-the-Shelf Moodle Setups Fail at Enterprise Scale
            </h2>
            <p className="mt-4 text-paragraph text-base sm:text-lg leading-relaxed">
              Without strategic advisory, organizations frequently fall into severe technical traps that lead to system crashes, security vulnerabilities, and inflated cloud hosting bills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {COMPARISON_MATRIX.map((row, idx) => (
              <Card key={idx} className="p-7 border-border bg-card shadow-soft">
                <div className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2">
                  {row.metric}
                </div>
                <div className="space-y-4 pt-3 border-t border-border">
                  <div className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-red-500/10 text-red-500 grid place-items-center shrink-0 mt-0.5 font-bold text-xs">✕</div>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase block mb-0.5">Typical Unadvised Setup</span>
                      <p className="text-sm text-paragraph">{row.standard}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-3 border-t border-border/50">
                    <div className="size-5 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase block mb-0.5">Skydot Strategic Blueprint</span>
                      <p className="text-sm font-medium text-heading">{row.skydot}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 4-PILLAR STRATEGIC DISCOVERY FRAMEWORK */}
      <section className="section-y bg-background">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Advisory Methodology</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
              Our Strategic Discovery Lifecycle
            </h2>
            <p className="mt-3 text-paragraph text-base sm:text-lg">
              A structured, highly analytical engineering process designed to uncover risks, optimize total cost of ownership, and align IT with academic/corporate learning goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DISCOVERY_PILLARS.map((pil, idx) => (
              <div key={idx} className="p-7 rounded-2xl border border-border bg-card shadow-card relative flex flex-col justify-between group hover:border-primary/50 transition-all">
                <div>
                  <div className="font-display font-black text-4xl text-primary/20 group-hover:text-primary transition-colors mb-4">
                    {pil.step}
                  </div>
                  <h4 className="font-display font-bold text-xl text-heading mb-3">
                    {pil.title}
                  </h4>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Deliverable Output</span>
                  <CheckCircle2 className="size-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ SPECIFIC TO CONSULTING */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-heading">Strategic Advisory FAQ</h2>
            <p className="mt-2 text-paragraph text-base">Everything you need to know about engaging our solution architects.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="c-1" className="border border-border rounded-xl px-6 bg-card shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-lg text-heading hover:no-underline py-5 text-left">
                What is the difference between Moodle Consulting and Moodle Implementation?
              </AccordionTrigger>
              <AccordionContent className="text-paragraph text-base leading-relaxed pb-5">
                Consulting focuses on **architectural strategy, capacity planning, security auditing, and vendor selection** before installation occurs. Implementation is the hands-on engineering execution of that blueprint (server setup, SSO coding, theme branding). We strongly advise consulting first for deployments over 2,500 users.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c-2" className="border border-border rounded-xl px-6 bg-card shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-lg text-heading hover:no-underline py-5 text-left">
                How do you help reduce cloud hosting bills for existing Moodle servers?
              </AccordionTrigger>
              <AccordionContent className="text-paragraph text-base leading-relaxed pb-5">
                We perform a database and query execution audit. Most organizations pay for massively oversized cloud instances because unoptimized database queries and missing Redis caching layers lock CPU threads. By sharding session caching and indexing slow MySQL tables, we routinely reduce AWS/Azure compute requirements by 30% to 50%.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c-3" className="border border-border rounded-xl px-6 bg-card shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-lg text-heading hover:no-underline py-5 text-left">
                Do you sign mutual NDAs before reviewing our proprietary courseware or schemas?
              </AccordionTrigger>
              <AccordionContent className="text-paragraph text-base leading-relaxed pb-5">
                Yes. We execute mutual non-disclosure agreements prior to commencing any technical architecture review, database inspection, or code audit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* UNIQUE CTA BANNER: THE ARCHITECTURAL AUDIT BOOKING */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-orange-950/40 via-[#0B0F19] to-[#0B0F19] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Ready to Future-Proof Your LMS Architecture?
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Schedule a 45-minute discovery workshop with our senior Moodle solution architects. We will review your database performance, cloud sizing, or security compliance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-13 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30">
                <Link to="/contact">Schedule 1-on-1 Architectural Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white">
                <Link to="/solutions">Explore Industry Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
