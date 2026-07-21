import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Landmark, HeartPulse, Banknote, ShieldCheck, Factory, Radio, Handshake, ShoppingBag, Cpu, UtensilsCrossed, Zap, Building, Briefcase, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Enterprise learning across regulated sectors | Skydot" },
      { name: "description", content: "Higher education, government, healthcare, banking, insurance, manufacturing, telecom, NGO, retail and more — with sector-specific expertise." },
      { property: "og:title", content: "Industries served — Skydot Infotech" },
      { property: "og:description", content: "Sector expertise across every industry that takes learning seriously." },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const INDS = [
  { icon: GraduationCap, name: "Higher Education", challenges: "Fragmented tools, hybrid delivery, faculty enablement.", solution: "Unified LMS estate, LTI-based tool ecosystems, learning analytics." },
  { icon: Landmark, name: "Government", challenges: "Data sovereignty, procurement scrutiny, mass-scale training.", solution: "Sovereign cloud, audit-ready controls, national skill programmes." },
  { icon: HeartPulse, name: "Healthcare", challenges: "CME compliance, clinical protocols, shift-based learners.", solution: "Mobile-first LMS, CME tracking, simulation & assessment workflows." },
  { icon: Banknote, name: "Banking", challenges: "Regulatory training across geographies, product velocity.", solution: "Compliance-first LMS, multilingual delivery, examiner-ready reports." },
  { icon: ShieldCheck, name: "Insurance", challenges: "Agent onboarding, regulator certifications, CPD hours.", solution: "IRDAI-aligned training, digital certification, CPD dashboards." },
  { icon: Factory, name: "Manufacturing", challenges: "Multilingual shopfloor workforce, safety, OJT tracking.", solution: "Offline-first mobile, video training, OJT signoffs and audits." },
  { icon: Radio, name: "Telecom", challenges: "Rapid product cycles, field-force enablement, partner training.", solution: "Micro-learning, sales enablement, partner academies." },
  { icon: Handshake, name: "NGOs & Non-profits", challenges: "Low bandwidth, distributed learners, donor reporting.", solution: "Lightweight LMS, offline sync, impact reporting." },
  { icon: ShoppingBag, name: "Retail", challenges: "High attrition, franchise diversity, seasonal onboarding.", solution: "Fast onboarding, franchise academies, gamified engagement." },
  { icon: Cpu, name: "IT & Technology", challenges: "Skills half-life, certification pressure, tool sprawl.", solution: "Skills intelligence, cert academies, integrated dev environments." },
  { icon: UtensilsCrossed, name: "Hospitality", challenges: "Distributed properties, brand consistency, guest experience.", solution: "Brand academy, SOP training, mystery-audit integration." },
  { icon: Zap, name: "Energy & Utilities", challenges: "Safety-critical training, field workforce, compliance.", solution: "HSE academies, competency management, evidence workflows." },
  { icon: Building, name: "Real Estate", challenges: "Agent enablement, product training, regional regulation.", solution: "Agent academies, RERA-aligned modules, CRM integration." },
  { icon: Briefcase, name: "Professional Services", challenges: "Billable-hour pressure, career pathing, methodology rollout.", solution: "Micro-learning, methodology certification, skills-based staffing." },
];

function IndustriesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Industries"
        title={<>Deep sector expertise across every industry where learning matters.</>}
        description="From national governments to global banks, we bring pattern libraries, compliance packs and reference implementations that shorten time-to-value dramatically."
      >
        <Button asChild size="lg"><Link to="/contact">Talk to a sector specialist <ArrowRight className="ml-2 size-4" /></Link></Button>
      </PageHero>

      <section className="section-y">
        <div className="container-page space-y-5">
          {INDS.map(i => (
            <Card key={i.name} className="p-7 border-border bg-card card-hover">
              <div className="grid md:grid-cols-[220px_1fr_1fr] gap-6 items-start">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary"><i.icon className="size-5" /></div>
                  <div className="font-display font-semibold text-heading">{i.name}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest font-semibold text-muted-foreground">Challenges</div>
                  <p className="mt-1.5 text-sm text-paragraph leading-relaxed">{i.challenges}</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest font-semibold text-primary">Our approach</div>
                  <p className="mt-1.5 text-sm text-heading leading-relaxed">{i.solution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
