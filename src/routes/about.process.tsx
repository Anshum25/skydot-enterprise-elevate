import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  ClipboardCheck,
  Code2,
  ShieldCheck,
  Rocket,
  Wrench,
  Users,
  FileText,
  LineChart,
  AlertTriangle,
  GraduationCap,
  HeadphonesIcon,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about/process")({
  head: () => ({
    meta: [
      { title: "Our Delivery Process | Skydot Infotech" },
      { name: "description", content: "A Proven Approach to Successful Moodle Implementations" },
    ],
    links: [{ rel: "canonical", href: "/about/process" }],
  }),
  component: ProcessPage,
});

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Discovery & Consultation",
    desc: "Discuss business objectives, learning requirements, existing systems and project goals.",
    icon: MessageSquare,
    deliverables: ["Requirement Gathering", "Stakeholder Workshops", "Initial Assessment"]
  },
  {
    step: "2",
    title: "Planning & Solution Design",
    desc: "Define project scope, architecture, integrations, implementation roadmap and delivery milestones.",
    icon: ClipboardCheck,
    deliverables: ["Project Plan", "Architecture Design", "Timeline", "Risk Assessment"]
  },
  {
    step: "3",
    title: "Implementation & Development",
    desc: "Configure Moodle, develop custom features, build integrations and prepare infrastructure.",
    icon: Code2,
    deliverables: ["Moodle Setup", "Custom Development", "Integrations", "Cloud Infrastructure"]
  },
  {
    step: "4",
    title: "Testing & Quality Assurance",
    desc: "Validate functionality, performance, security and user experience before production deployment.",
    icon: ShieldCheck,
    deliverables: ["Functional Testing", "Performance Testing", "Security Review", "User Acceptance Testing"]
  },
  {
    step: "5",
    title: "Deployment & Training",
    desc: "Launch the platform, train administrators and support users during go-live.",
    icon: Rocket,
    deliverables: ["Production Deployment", "User Training", "Documentation", "Go-Live Support"]
  },
  {
    step: "6",
    title: "Support & Continuous Improvement",
    desc: "Provide ongoing monitoring, maintenance, upgrades and optimization based on evolving business requirements.",
    icon: Wrench,
    deliverables: ["Monitoring", "Updates", "Technical Support", "Performance Optimization"]
  }
];

const HIGHLIGHTS = [
  { icon: MessageSquare, title: "Transparent Communication", desc: "Regular project updates and milestone reviews." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every delivery is tested before deployment." },
  { icon: LineChart, title: "Scalable Solutions", desc: "Designed to grow with your organization." },
  { icon: Users, title: "Long-Term Partnership", desc: "Continuous support beyond project completion." }
];

const GOVERNANCE = [
  { icon: Users, title: "Dedicated Project Manager" },
  { icon: FileText, title: "Technical Documentation" },
  { icon: LineChart, title: "Progress Reviews" },
  { icon: AlertTriangle, title: "Risk Management" },
  { icon: GraduationCap, title: "Knowledge Transfer" },
  { icon: HeadphonesIcon, title: "Post-Go-Live Support" }
];

function ProcessPage() {
  return (
    <div>
      {/* SECTION INTRODUCTION */}
      <section className="relative border-b border-border bg-background pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Our Process</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-heading">
              A Proven Approach to Successful Moodle Implementations
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-paragraph">
              Every project follows a structured delivery methodology focused on planning, collaboration, quality assurance and long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="max-w-4xl mx-auto relative">
            {/* Desktop Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2" />
            
            <div className="flex flex-col gap-12 md:gap-0">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.step} className={cn("relative flex md:justify-between items-center group", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 size-12 rounded-full border-2 border-primary bg-background items-center justify-center font-mono font-bold text-primary shadow-soft z-10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className={cn("w-full md:w-[45%] flex flex-col", index % 2 === 0 ? "md:text-right md:items-end" : "md:text-left md:items-start")}>
                    {/* Mobile Node (Hidden on Desktop) */}
                    <div className="md:hidden flex size-10 rounded-full border-2 border-primary bg-background items-center justify-center font-mono font-bold text-primary shadow-soft mb-4">
                      {step.step}
                    </div>
                    
                    <div className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-soft w-full text-left card-hover">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <step.icon className="size-5" />
                        </div>
                        <h3 className="font-display font-semibold text-xl text-heading">{step.title}</h3>
                      </div>
                      <p className="text-sm text-paragraph leading-relaxed mb-6">
                        {step.desc}
                      </p>
                      
                      <div>
                        <div className="text-[10px] uppercase font-bold text-muted-foreground mb-3 tracking-wider">Deliverables</div>
                        <ul className="space-y-2">
                          {step.deliverables.map(del => (
                            <li key={del} className="flex items-start gap-2 text-sm text-heading">
                              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS HIGHLIGHTS */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="The Skydot Difference"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="flex flex-col items-center text-center p-6 border border-border bg-surface rounded-xl shadow-soft">
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary mb-5">
                  <h.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-heading mb-2">{h.title}</h3>
                <p className="text-sm text-paragraph">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GOVERNANCE */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight text-heading mb-10">
              Every Project Includes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GOVERNANCE.map((g) => (
                <div key={g.title} className="flex flex-col items-center justify-center p-5 rounded-lg border border-border bg-card shadow-soft text-center card-hover h-full">
                  <g.icon className="size-6 text-primary mb-3" />
                  <h4 className="font-display font-medium text-sm text-heading">{g.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-card p-10 md:p-16 text-center shadow-elevated">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-heading tracking-tight max-w-3xl mx-auto">
              Ready to Start Your Moodle Project?
            </h2>
            <p className="mt-5 text-paragraph text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you're planning a new implementation, migration or modernization project, our experts will guide you through every stage with a structured delivery approach.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background">
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
