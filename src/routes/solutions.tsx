import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Landmark, HeartPulse, Factory, Banknote, ShieldCheck, ShoppingBag, Users, ArrowRight, Briefcase, Award, Handshake, LineChart, BookOpen, School } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Learning platforms tailored to your organization | Skydot" },
      { name: "description", content: "Purpose-built learning solutions for universities, government, corporate learning, healthcare, banking, insurance, manufacturing and more." },
      { property: "og:title", content: "Skydot Solutions" },
      { property: "og:description", content: "Sector-specific learning platforms, accelerators and reference architectures." },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  { icon: GraduationCap, title: "Corporate Learning", desc: "Unified L&D platform for global workforces — onboarding, upskilling and compliance in one place." },
  { icon: School, title: "Universities", desc: "Modern LMS estates for research universities, autonomous colleges and university federations." },
  { icon: BookOpen, title: "Schools & K-12", desc: "Safe, curriculum-aligned learning platforms for schools and school networks." },
  { icon: Landmark, title: "Government", desc: "Sovereign-cloud learning platforms for ministries, PSUs and defense training academies." },
  { icon: HeartPulse, title: "Healthcare", desc: "CME, clinical simulation, protocol training and mandatory compliance workflows." },
  { icon: Factory, title: "Manufacturing", desc: "Shopfloor training, OJT, safety onboarding and multilingual delivery to plant workers." },
  { icon: Banknote, title: "Banking", desc: "Regulatory certification, product training and compliance across geographies." },
  { icon: ShieldCheck, title: "Insurance", desc: "Agent onboarding, IRDAI-aligned training and continuous professional development." },
  { icon: Handshake, title: "NGOs & Non-profits", desc: "Impact-focused training programmes with donor reporting and low-bandwidth delivery." },
  { icon: ShoppingBag, title: "Retail", desc: "Frontline workforce enablement, brand training and franchise learning networks." },
  { icon: Briefcase, title: "Sales Enablement", desc: "Rep readiness, playbooks, coaching and CRM-integrated learning journeys." },
  { icon: Users, title: "Partner & Customer Education", desc: "Certification academies for channel partners and end customers." },
  { icon: Award, title: "Compliance Training", desc: "Audit-ready compliance programmes with automated reminders and reporting." },
  { icon: LineChart, title: "Skill Development", desc: "National skill missions and workforce development at population scale." },
];

function SolutionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Solutions"
        title={<>Learning platforms designed for the way your organization actually works.</>}
        description="Every industry has different learners, regulations and success metrics. We bring reference architectures, accelerators and sector expertise so your platform ships faster and lasts longer."
      >
        <Button asChild size="lg"><Link to="/contact">Discuss your use case <ArrowRight className="ml-2 size-4" /></Link></Button>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map(s => (
              <Card key={s.title} className="p-7 border-border bg-card card-hover">
                <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary"><s.icon className="size-5" /></div>
                <h3 className="mt-5 font-display font-semibold text-heading">{s.title}</h3>
                <p className="mt-2 text-sm text-paragraph leading-relaxed">{s.desc}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">Talk to us <ArrowRight className="size-3.5" /></Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader eyebrow="Reference architectures" title="Proven blueprints, not blank slates." description="We start every engagement from a sector-tuned reference architecture — validated across dozens of enterprise deployments — and evolve it to your context." align="center" />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              ["Multi-tenant academy", "For customer & partner education programmes with per-tenant branding."],
              ["Sovereign gov cloud", "Isolated tenancy, in-country data residency and hardened controls."],
              ["High-scale examinations", "Elastic CBT infrastructure with proctoring for national-level exams."],
            ].map(([t, d]) => (
              <Card key={t} className="p-7 border-border bg-card card-hover">
                <div className="font-display font-semibold text-heading">{t}</div>
                <p className="mt-2 text-sm text-paragraph">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
