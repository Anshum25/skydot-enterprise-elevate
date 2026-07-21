import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Server, Puzzle, Palette, GitBranch, Container, ShieldCheck, LineChart, Sparkles, RefreshCw, Cog, Cloud, Cpu, Users, Layers, LifeBuoy, Zap, Award, Lock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Enterprise Moodle, LMS, Cloud & AI | Skydot Infotech" },
      { name: "description", content: "End-to-end services: Moodle consulting, implementation, customization, plugin & theme development, managed hosting, integrations and 24×7 support." },
      { property: "og:title", content: "Skydot Services — Enterprise Moodle, LMS, Cloud & AI" },
      { property: "og:description", content: "One accountable partner across the full enterprise learning lifecycle." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const GROUPS = [
  {
    title: "Consulting & Strategy",
    icon: Compass2,
    items: [
      ["Moodle Consulting", "Roadmaps, audits, TCO analysis and platform strategy."],
      ["LMS Selection & RFP support", "Independent, vendor-neutral advisory for buyers."],
      ["Learning Architecture", "Blueprints for content, data, integrations and analytics."],
    ],
  },
  {
    title: "Implementation & Engineering",
    icon: Cog,
    items: [
      ["Moodle Implementation", "Full-lifecycle deployments — from discovery to go-live."],
      ["Customization", "Deep customization of workflows, roles and learner experience."],
      ["Plugin Development", "Bespoke plugins, blocks, activities and reports."],
      ["Theme Development", "Accessible, on-brand themes for Moodle & Workplace."],
      ["Migration", "From Moodle 3.x, Totara, Blackboard, Canvas and legacy LMS."],
    ],
  },
  {
    title: "Cloud, DevOps & Hosting",
    icon: Cloud,
    items: [
      ["Managed Hosting", "24×7 hosting on AWS, Azure, GCP, private and sovereign cloud."],
      ["Docker & Kubernetes", "Container-native, autoscaling Moodle & LMS platforms."],
      ["CI/CD & GitOps", "Reproducible releases with automated testing and rollbacks."],
      ["Performance Optimization", "Caching, query tuning, CDN and load testing."],
      ["Monitoring & Observability", "Grafana, Prometheus, ELK and alerting workflows."],
      ["Backup & DR", "Encrypted backups and multi-region disaster recovery."],
    ],
  },
  {
    title: "Integrations",
    icon: Puzzle,
    items: [
      ["SSO", "SAML, OAuth 2.0, OIDC, LDAP, Active Directory."],
      ["ERP & HRMS", "SAP SuccessFactors, Workday, Oracle HCM, Zoho People."],
      ["CRM", "Salesforce, HubSpot, Dynamics 365 learner journeys."],
      ["Content Standards", "SCORM, xAPI, cmi5, H5P, LTI 1.3 / Advantage."],
      ["Payments", "Stripe, Razorpay, PayU and enterprise billing workflows."],
    ],
  },
  {
    title: "Security & Governance",
    icon: Lock,
    items: [
      ["Security Hardening", "OWASP, CIS benchmarks, secure SDLC."],
      ["Compliance", "GDPR, DPDP, HIPAA, ISO 27001-aligned controls."],
      ["Accessibility", "WCAG 2.1 AA and localization for global learners."],
      ["Audit Support", "Evidence packs and audit-ready reporting."],
    ],
  },
  {
    title: "AI & Analytics",
    icon: Sparkles,
    items: [
      ["AI Tutor & Chatbot", "Grounded assistants embedded in the learning flow."],
      ["Learning Analytics", "Dashboards, xAPI/LRS pipelines, skills intelligence."],
      ["AI Proctoring", "Face, voice and environment analysis for secure exams."],
      ["Content Generation", "Auto-question generation, summaries, translation."],
    ],
  },
  {
    title: "Managed Services & Support",
    icon: LifeBuoy,
    items: [
      ["24×7 Technical Support", "L1–L3 support with defined SLAs and named engineers."],
      ["Training & Enablement", "Admin, author and instructor certification programmes."],
      ["Continuous Improvement", "Quarterly business reviews and platform roadmaps."],
    ],
  },
];

function Compass2(props: any) { return <Sparkles {...props} />; }

const PROCESS = [
  { step: "01", title: "Discover", desc: "Workshops, KPI definition and current-state assessment." },
  { step: "02", title: "Design", desc: "Solution blueprint, UX, architecture and integration map." },
  { step: "03", title: "Build", desc: "Agile delivery with weekly demos and executive visibility." },
  { step: "04", title: "Deploy", desc: "Cloud provisioning, hardening, UAT and go-live." },
  { step: "05", title: "Operate", desc: "24×7 managed operations and continuous improvement." },
];

const FAQ = [
  ["Do you offer fixed-price engagements?", "Yes. We use fixed-price for well-scoped implementations and time-and-materials for open-ended engineering work."],
  ["What SLAs do you offer for managed hosting?", "Standard SLAs include 99.95% uptime with options for 99.99% via active-active deployment; response times start at 15 minutes for P1."],
  ["Can you take over an existing Moodle instance?", "Yes. We run a 2–3 week transition covering audit, hardening, runbooks and knowledge transfer before assuming operations."],
  ["Do you provide on-site engineers?", "For select government and enterprise engagements, we deploy on-site engineers and secure liaison teams."],
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title={<>One accountable partner across the full learning-platform lifecycle.</>}
        description="Whether you are launching a new LMS, modernizing a legacy Moodle estate or running mission-critical assessments, our teams cover every stage — strategy, engineering, cloud, AI and 24×7 operations."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Talk to a solution architect <ArrowRight className="ml-2 size-4" /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/case-studies">See case studies</Link></Button>
        </div>
      </PageHero>

      {GROUPS.map((g, idx) => (
        <section key={g.title} className={`section-y ${idx % 2 === 1 ? "bg-surface border-y border-border" : ""}`}>
          <div className="container-page">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><g.icon className="size-5" /></div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-heading">{g.title}</h2>
            </div>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {g.items.map(([title, desc]) => (
                <Card key={title} className="p-6 border-border bg-card card-hover">
                  <div className="font-display font-semibold text-heading">{title}</div>
                  <p className="mt-2 text-sm text-paragraph leading-relaxed">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Delivery" title="A predictable, engineering-led delivery model." />
          <div className="mt-14 grid md:grid-cols-5 gap-4">
            {PROCESS.map(p => (
              <div key={p.step} className="rounded-xl border border-border bg-card p-6 card-hover">
                <div className="font-mono text-xs text-primary tracking-widest">{p.step}</div>
                <div className="mt-3 font-display font-semibold text-heading">{p.title}</div>
                <div className="mt-1.5 text-sm text-paragraph">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <SectionHeader eyebrow="FAQ" title="Common questions from enterprise buyers." />
          <Accordion type="single" collapsible defaultValue="q0" className="w-full">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger className="text-left font-display font-semibold text-heading hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-paragraph leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary to-[#1D4ED8] text-white p-10 md:p-14 shadow-elevated">
            <h3 className="font-display font-bold text-3xl md:text-4xl">Have a specific requirement in mind?</h3>
            <p className="mt-4 text-white/85 max-w-2xl">Send us a brief. We'll respond within one business day with an approach note, indicative timeline and next steps.</p>
            <Button asChild size="lg" variant="secondary" className="mt-8 bg-white text-primary hover:bg-white/90"><Link to="/contact">Start a conversation <ArrowRight className="ml-2 size-4" /></Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
