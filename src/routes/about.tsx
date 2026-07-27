import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Compass, Eye, HeartHandshake, Users, Building2, ArrowRight, Sparkles, ShieldCheck, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dynamic Pixel — Our story, mission and leadership" },
      { name: "description", content: "Dynamic Pixel is an enterprise learning technology company building custom content, Moodle, and AI platforms for global organizations." },
      { property: "og:title", content: "About Dynamic Pixel" },
      { property: "og:description", content: "The people, mission and craft behind Dynamic Pixel's e-learning solutions." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Integrity first", desc: "Enterprise trust is earned. We write clear contracts, honest estimates and deliver what we commit." },
  { icon: Sparkles, title: "Creative Craft", desc: "We choose engaging content, high-quality animations, and considered design over trend-chasing." },
  { icon: HeartHandshake, title: "Customer outcomes", desc: "We measure ourselves by learner outcomes and business KPIs." },
  { icon: Rocket, title: "Continuous Innovation", desc: "Leveraging the latest in AI and educational technology." },
];

const JOURNEY = [
  ["2014", "Founded with a focus on custom e-learning content for Indian enterprises."],
  ["2016", "First national-scale deployment of custom K-12 learning modules."],
  ["2018", "Launched the KnowxBox off-the-shelf softskills courses."],
  ["2020", "Global expansion. Delivered our first Moodle-based enterprise solution."],
  ["2022", "AI R&D group established. Launched HACC Gen Moodle-AI Plugin."],
  ["2024", "400+ enterprise customers. Millions of learners on platforms we've built content for."],
];

const LEADERS = [
  { name: "Vikram S. Iyer", role: "Founder & CEO", bio: "20+ years across enterprise e-learning and digital transformation." },
  { name: "Priya Nair", role: "Chief Technology Officer", bio: "Ex-principal engineer with a background in Moodle and learning platforms." },
  { name: "Ahmed Al-Farsi", role: "Managing Director, MENA", bio: "Leads Middle East delivery, working with governments and financial institutions." },
  { name: "Elena Petrova", role: "VP, Applied AI", bio: "Research background in NLP and adaptive learning; leads Dynamic Pixel's AI centre of excellence." },
];

function AboutPage() {
  const matchRoute = useMatchRoute();
  const isExact = matchRoute({ to: "/about", fuzzy: false });

  if (!isExact) {
    return <Outlet />;
  }

  return (
    <div>
      <PageHero
        eyebrow="About Dynamic Pixel"
        title={<>An enterprise learning company built by educators, designers and engineers.</>}
        description="For a decade we have quietly built the content and platforms that governments, universities and enterprises rely on to train their people — combining e-learning expertise, product design and applied AI."
      />

      <section className="section-y">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader eyebrow="Our mission" title="Make world-class learning infrastructure accessible to every serious organization." description="Enterprise learning has been under-served by software vendors for too long. We exist to change that — with platforms and services that meet the bar of the modern software industry." />
          </div>
          <div>
            <SectionHeader eyebrow="Our vision" title="A world where every learner has access to the best of open, adaptive learning." description="We contribute to open ecosystems, partner deeply with the Moodle community, and open-source the plugins and tooling that our customers rely on." />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader eyebrow="Values" title="What we hold ourselves to." align="center" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <Card key={v.title} className="p-6 border-border bg-card card-hover">
                <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary"><v.icon className="size-5" /></div>
                <div className="mt-4 font-display font-semibold text-heading">{v.title}</div>
                <p className="mt-2 text-sm text-paragraph leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Journey" title="Ten years of building for the enterprise." />
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {JOURNEY.map(([year, text], i) => (
                <div key={year} className={`relative grid md:grid-cols-2 gap-6 md:gap-16 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className="pl-12 md:pl-0 md:pr-8 md:text-right [direction:ltr]">
                    <div className="font-mono text-sm text-primary font-semibold tracking-widest">{year}</div>
                    <div className="mt-1 text-heading font-display font-semibold">{text}</div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 size-3 rounded-full bg-primary ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader eyebrow="Leadership" title="A team of operators who have shipped at scale." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEADERS.map((l) => (
              <Card key={l.name} className="p-6 border-border bg-card card-hover">
                <div className="size-16 rounded-full bg-gradient-to-br from-primary/30 to-accent-brand/30 grid place-items-center text-primary font-display font-bold text-xl">
                  {l.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                </div>
                <div className="mt-5 font-display font-semibold text-heading">{l.name}</div>
                <div className="text-xs text-primary font-medium mt-0.5 uppercase tracking-wider">{l.role}</div>
                <p className="mt-3 text-sm text-paragraph leading-relaxed">{l.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Building2, k: "Global presence", v: "Delivery hubs around the world" },
            { icon: Users, k: "220+ people", v: "Educators, designers, LMS specialists" },
            { icon: Award, k: "ISO 27001 aligned", v: "Data security and privacy controls" },
          ].map((s) => (
            <Card key={s.k} className="p-8 border-border bg-card">
              <s.icon className="size-6 text-primary" />
              <div className="mt-4 font-display font-semibold text-heading text-lg">{s.k}</div>
              <div className="text-sm text-paragraph mt-1">{s.v}</div>
            </Card>
          ))}
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}

function CtaBlock() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="rounded-xl border border-border bg-surface p-10 md:p-14 grid md:grid-cols-[1.6fr_1fr] items-center gap-8">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-heading">Work with a partner your board will trust.</h3>
            <p className="mt-3 text-paragraph max-w-2xl">Talk to a solution architect. No sales cycle theatre — just a working conversation about your goals.</p>
          </div>
          <div className="flex md:justify-end">
            <Button asChild size="lg"><Link to="/contact">Contact us <ArrowRight className="ml-2 size-4" /></Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
