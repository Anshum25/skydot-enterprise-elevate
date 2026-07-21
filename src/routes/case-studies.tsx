import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case studies — Enterprise learning outcomes | Skydot Infotech" },
      { name: "description", content: "How universities, governments, banks and Fortune-scale enterprises transformed learning with Skydot." },
      { property: "og:title", content: "Case studies — Skydot" },
      { property: "og:description", content: "Real outcomes from enterprise learning transformations." },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CasesPage,
});

const CASES = [
  { tag: "Higher Education", title: "A national university federation modernizes learning for 1.2M students", challenge: "Fragmented LMS estate across 14 constituent universities, no unified analytics, poor faculty experience.", solution: "Consolidated onto a multi-tenant Moodle Workplace platform with SSO, LTI ecosystem, and central learning analytics.", result: "40% faster course delivery · 3× learner engagement · 62% infrastructure cost reduction.", color: "from-blue-500/15 to-sky-400/10" },
  { tag: "Government", title: "Public service academy launches nationwide certification programme", challenge: "Manual, paper-based examinations across 22 states with limited proctoring and long result cycles.", solution: "Deployed Skydot's CBT platform with AI proctoring, question bank governance and result publication in 72 hours.", result: "180,000 certifications delivered annually · 99.99% platform uptime · Zero examination integrity incidents.", color: "from-indigo-500/15 to-blue-500/10" },
  { tag: "Banking", title: "Tier-1 bank unifies compliance training across 42 countries", challenge: "Regulatory training delivered across 42 country instances of varying LMS platforms; audit visibility limited.", solution: "Unified global academy on Moodle Workplace with country tenants, regional data residency and executive dashboards.", result: "98% completion rate · 40% reduction in audit findings · $2.4M annual licence savings.", color: "from-sky-500/15 to-cyan-400/10" },
  { tag: "Healthcare", title: "Hospital network deploys clinical simulation platform for 40,000 clinicians", challenge: "Fragmented CME tracking, no simulation infrastructure, poor mobile experience for shift-based clinicians.", solution: "Custom Moodle + simulation platform with CME tracking, mobile-first UI and integration with HRMS.", result: "12,000 hours of simulation training/quarter · 96% CME compliance across 22 hospitals.", color: "from-teal-500/15 to-emerald-400/10" },
  { tag: "Manufacturing", title: "Global manufacturer digitizes shopfloor training across 60 plants", challenge: "Multilingual shopfloor workforce with limited connectivity; OJT tracked on paper.", solution: "Offline-first mobile learning with QR-based OJT sign-offs and multilingual content in 8 languages.", result: "83% learner activation · 60% reduction in safety incidents on lines with completed training.", color: "from-amber-500/15 to-orange-400/10" },
  { tag: "Enterprise", title: "Global IT services firm builds skills intelligence for 220,000 employees", challenge: "No unified view of skills, capabilities and gaps across a workforce of 220K.", solution: "Deployed a skills intelligence layer over Moodle Workplace with role-mapped learning paths and analytics.", result: "22% faster deployment onto client projects · 3.1× internal mobility · 41% growth in certifications.", color: "from-violet-500/15 to-indigo-400/10" },
];

function CasesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Case studies"
        title={<>Outcomes our customers ship to their boards.</>}
        description="Detailed stories from enterprise learning transformations — with the challenges, our approach and the measurable results."
      />

      <section className="section-y">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {CASES.map(c => (
            <Card key={c.title} className="overflow-hidden border-border bg-card card-hover">
              <div className={`aspect-[16/8] bg-gradient-to-br ${c.color} border-b border-border grid-bg relative`}>
                <Badge variant="outline" className="absolute top-4 left-4 bg-background/80 backdrop-blur">{c.tag}</Badge>
              </div>
              <div className="p-7">
                <h3 className="font-display font-semibold text-heading text-lg leading-snug">{c.title}</h3>
                <div className="mt-5 space-y-3 text-sm">
                  <div><div className="text-[11px] uppercase tracking-widest font-semibold text-muted-foreground">Challenge</div><p className="mt-1 text-paragraph">{c.challenge}</p></div>
                  <div><div className="text-[11px] uppercase tracking-widest font-semibold text-muted-foreground">Solution</div><p className="mt-1 text-paragraph">{c.solution}</p></div>
                  <div><div className="text-[11px] uppercase tracking-widest font-semibold text-primary">Result</div><p className="mt-1 text-heading font-medium">{c.result}</p></div>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">Discuss a similar programme <ArrowRight className="size-3.5" /></Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
