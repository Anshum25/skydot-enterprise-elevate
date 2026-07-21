import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeartPulse, GraduationCap, Rocket, Coffee, Users, Globe, ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Skydot — Build the future of enterprise learning" },
      { name: "description", content: "Join Skydot Infotech: engineers, designers, LMS specialists and AI researchers building enterprise learning platforms." },
      { property: "og:title", content: "Careers — Skydot Infotech" },
      { property: "og:description", content: "Join a team that builds enterprise learning platforms at global scale." },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const BENEFITS = [
  { icon: HeartPulse, t: "Comprehensive healthcare", d: "Family health cover, mental wellness support and parental leave." },
  { icon: GraduationCap, t: "Learning budget", d: "An annual budget for courses, certifications and conferences." },
  { icon: Rocket, t: "Meaningful equity", d: "Every full-time employee has an equity stake in Skydot." },
  { icon: Coffee, t: "Flexible & hybrid", d: "Modern hybrid model with quarterly team offsites." },
  { icon: Users, t: "Real mentorship", d: "Weekly 1:1s and structured growth conversations with senior leaders." },
  { icon: Globe, t: "Global exposure", d: "Work on programmes across India, MENA, Europe and Southeast Asia." },
];

const JOBS = [
  ["Senior Moodle Engineer", "Bengaluru · Hybrid", "Engineering"],
  ["Platform SRE (Kubernetes)", "Bengaluru · Remote", "Engineering"],
  ["Applied AI Engineer", "Bengaluru · Hybrid", "AI"],
  ["Product Designer, Learning Experience", "Remote", "Design"],
  ["Enterprise Solutions Architect", "Dubai · Hybrid", "Solutions"],
  ["Delivery Manager, Government", "New Delhi · On-site", "Delivery"],
  ["Technical Writer", "Remote", "Content"],
  ["Cybersecurity Analyst", "Bengaluru · Hybrid", "Security"],
];

const STEPS = [
  { s: "01", t: "Application", d: "Send us your CV and a short note on what you'd like to work on." },
  { s: "02", t: "Intro conversation", d: "A 30-minute chat with a hiring manager to understand fit." },
  { s: "03", t: "Craft interview", d: "A deep, respectful conversation about your craft — no whiteboard theatrics." },
  { s: "04", t: "Team meet", d: "Meet the people you'd work with day-to-day." },
  { s: "05", t: "Offer", d: "We move quickly — you'll hear back within a week of the final round." },
];

function CareersPage() {
  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title={<>Come build the platforms that governments and enterprises trust.</>}
        description="We are engineers, designers and educators who care about craft, learners and outcomes. If that sounds like you, we'd love to talk."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Benefits" title="What we offer" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(b => (
              <Card key={b.t} className="p-6 border-border bg-card card-hover">
                <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary"><b.icon className="size-5" /></div>
                <div className="mt-4 font-display font-semibold text-heading">{b.t}</div>
                <p className="mt-2 text-sm text-paragraph">{b.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader eyebrow="Hiring process" title="Respectful, transparent and fast." />
          <div className="mt-12 grid md:grid-cols-5 gap-4">
            {STEPS.map(p => (
              <div key={p.s} className="rounded-xl border border-border bg-card p-6 card-hover">
                <div className="font-mono text-xs text-primary tracking-widest">{p.s}</div>
                <div className="mt-3 font-display font-semibold text-heading">{p.t}</div>
                <div className="mt-1.5 text-sm text-paragraph">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Open roles" title="We're hiring across engineering, design and delivery." />
          <div className="mt-12 space-y-3">
            {JOBS.map(([role, loc, team]) => (
              <div key={role} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-xl border border-border bg-card p-5 card-hover">
                <div>
                  <div className="font-display font-semibold text-heading">{role}</div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" /> {loc}</span>
                    <Badge variant="outline">{team}</Badge>
                  </div>
                </div>
                <Button asChild variant="outline"><Link to="/contact">Apply <ArrowRight className="ml-2 size-4" /></Link></Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
