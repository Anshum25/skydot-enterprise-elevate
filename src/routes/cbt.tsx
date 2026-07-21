import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Camera, ScanFace, Database, CalendarClock, LineChart, Users, ServerCog, Globe, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/cbt")({
  head: () => ({
    meta: [
      { title: "CBT Platform — Secure enterprise computer-based testing | Skydot" },
      { name: "description", content: "Skydot's CBT platform delivers secure, AI-proctored computer-based examinations for governments, universities and enterprises at national scale." },
      { property: "og:title", content: "Skydot CBT Platform" },
      { property: "og:description", content: "National-scale, AI-proctored computer-based testing." },
    ],
    links: [{ rel: "canonical", href: "/cbt" }],
  }),
  component: CbtPage,
});

const CAPS = [
  { icon: Database, title: "Question Bank", desc: "Enterprise question bank with taxonomies, item analysis and versioning." },
  { icon: CalendarClock, title: "Exam Scheduling", desc: "Slot-based, session-based and continuous testing with capacity planning." },
  { icon: ScanFace, title: "AI Proctoring", desc: "Face, voice and environment analysis with human-in-the-loop review." },
  { icon: Camera, title: "Remote Proctoring", desc: "Live and recorded proctoring across geographies and time zones." },
  { icon: Shield, title: "Test Security", desc: "Lockdown browser, secure delivery, plagiarism and impersonation detection." },
  { icon: LineChart, title: "Analytics", desc: "Psychometric analytics, IRT support and examiner dashboards." },
  { icon: Users, title: "Candidate Journey", desc: "Registration, verification, admit cards, results and revaluation flows." },
  { icon: ServerCog, title: "Elastic Infrastructure", desc: "Autoscaling architecture that supports 500K+ concurrent candidates." },
];

const FAQ = [
  ["What is the largest exam you have delivered?", "A single national-level examination cycle with 1.4M candidates across 380 test centres over a two-week window."],
  ["Do you support both remote and centre-based testing?", "Yes. The platform supports centre-based, remote-proctored and hybrid delivery modes from the same question bank."],
  ["What proctoring modes are supported?", "AI-only, hybrid AI + human, live proctor, and recorded review with configurable thresholds and evidence trails."],
  ["Is the platform accessible?", "Yes. The candidate experience is WCAG 2.1 AA compliant with screen reader support, high-contrast themes and configurable time extensions."],
];

function CbtPage() {
  return (
    <div>
      <PageHero
        eyebrow="Product · CBT Platform"
        title={<>Secure, AI-proctored testing — from a single classroom to a nation.</>}
        description="Skydot's CBT platform powers high-stakes examinations for governments, universities and enterprises. Built for scale, hardened for trust, and instrumented for the examiner."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Request a platform demo <ArrowRight className="ml-2 size-4" /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/case-studies">See how governments use it</Link></Button>
        </div>
      </PageHero>

      {/* Product mock */}
      <section className="section-y">
        <div className="container-page">
          <div className="rounded-2xl border border-border bg-card p-2 shadow-elevated">
            <div className="rounded-xl overflow-hidden border border-border bg-surface">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="ml-3 text-xs font-mono text-muted-foreground">cbt.skydot.cloud / exam-control</div>
              </div>
              <div className="p-6 grid md:grid-cols-4 gap-4">
                {[
                  ["Active candidates", "482,918"],
                  ["Sessions in progress", "1,204"],
                  ["Flags to review", "37"],
                  ["Avg. response time", "112 ms"],
                ].map(([l, v]) => (
                  <Card key={l} className="p-5 bg-card border-border">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{l}</div>
                    <div className="mt-2 font-mono text-2xl font-semibold text-heading">{v}</div>
                  </Card>
                ))}
                <Card className="col-span-full p-6 border-border">
                  <div className="flex items-center justify-between">
                    <div className="font-display font-semibold text-heading">Live proctoring queue</div>
                    <Badge variant="outline" className="rounded-full">Live</Badge>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-4 gap-3">
                    {["C-19284", "C-19291", "C-19305", "C-19332"].map((id) => (
                      <div key={id} className="rounded-lg border border-border bg-background aspect-video grid-bg relative">
                        <div className="absolute top-2 left-2 text-[10px] font-mono bg-background/90 rounded px-1.5 py-0.5 border border-border">{id}</div>
                        <div className="absolute bottom-2 right-2 text-[10px] font-medium bg-primary/10 text-primary rounded px-1.5 py-0.5">OK</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader eyebrow="Capabilities" title="A complete examinations platform." description="Every capability an examinations authority or corporate certification programme needs, in one integrated product." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPS.map(c => (
              <Card key={c.title} className="p-6 border-border bg-card card-hover">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><c.icon className="size-5" /></div>
                <div className="mt-4 font-display font-semibold text-heading">{c.title}</div>
                <p className="mt-2 text-sm text-paragraph leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <SectionHeader eyebrow="Security" title="Trust, engineered into every layer." description="From candidate identity to result publication, every step is designed for defensibility and audit." />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["End-to-end encryption", "TLS in transit, AES-256 at rest, HSM-backed key management."],
              ["Identity verification", "Multi-factor identity, document verification and biometric checks."],
              ["Tamper-evident logs", "Immutable audit trails and evidence packs for every session."],
              ["ISO 27001 aligned", "Delivered under Skydot's ISMS with regular penetration testing."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-3"><Lock className="size-5 text-primary shrink-0 mt-0.5" /><div>
                  <div className="font-display font-semibold text-heading text-sm">{t}</div>
                  <p className="mt-1 text-sm text-paragraph">{d}</p>
                </div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <SectionHeader eyebrow="FAQ" title="Questions from examinations authorities." />
          <Accordion type="single" collapsible defaultValue="q0">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger className="text-left font-display font-semibold text-heading hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-paragraph leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
