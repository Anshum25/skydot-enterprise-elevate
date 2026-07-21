import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Enterprise learning insights | Skydot Infotech" },
      { name: "description", content: "Perspectives on Moodle, enterprise LMS strategy, learning analytics, AI in education and platform engineering." },
      { property: "og:title", content: "Skydot Blog" },
      { property: "og:description", content: "Perspectives on enterprise learning technology." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  { cat: "Moodle", title: "Migrating from Moodle 3.x to 4.x: a pragmatic enterprise playbook", excerpt: "The upgrade path most teams underestimate — and the seven decisions that determine your migration timeline.", time: "9 min read" },
  { cat: "AI", title: "Grounded AI tutors: when retrieval beats fine-tuning for enterprise learning", excerpt: "A practical framing for teams evaluating LLM strategies for their learners.", time: "12 min read" },
  { cat: "Architecture", title: "Running Moodle on Kubernetes: patterns from six enterprise deployments", excerpt: "Autoscaling, session stickiness, MUC, and the operational patterns that actually work.", time: "14 min read" },
  { cat: "Assessments", title: "AI proctoring without the false positives: a tuning methodology", excerpt: "How to configure and monitor AI proctoring so it earns trust from candidates and examiners alike.", time: "8 min read" },
  { cat: "Strategy", title: "Buying enterprise LMS in 2026: the questions your RFP is missing", excerpt: "Ten under-asked questions that separate good vendor answers from great ones.", time: "7 min read" },
  { cat: "Analytics", title: "From xAPI to executive KPIs: designing a learning analytics stack", excerpt: "A reference architecture, from statement design to boardroom-grade reporting.", time: "11 min read" },
  { cat: "Compliance", title: "GDPR, DPDP and learning platforms: a compliance checklist", excerpt: "Practical controls for L&D and security teams operating across geographies.", time: "10 min read" },
  { cat: "Culture", title: "Inside Skydot's engineering practice: how we ship for enterprise", excerpt: "Rituals, principles and the operating cadence that produce predictable enterprise delivery.", time: "6 min read" },
];

function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <div>
      <PageHero
        eyebrow="Insights"
        title={<>Perspectives on enterprise learning technology.</>}
        description="Field notes from our engineers, architects and designers — written for L&D leaders, CIOs and platform teams."
      />

      <section className="section-y">
        <div className="container-page">
          <Card className="grid md:grid-cols-2 overflow-hidden border-border bg-card">
            <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-primary/20 to-accent-brand/10 grid-bg relative">
              <Badge className="absolute top-5 left-5 bg-background/80 text-heading backdrop-blur">Featured</Badge>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge variant="outline">{featured.cat}</Badge>
              <h2 className="mt-4 font-display font-bold text-2xl md:text-3xl text-heading leading-tight">{featured.title}</h2>
              <p className="mt-4 text-paragraph leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground"><Clock className="size-3.5" /> {featured.time}</div>
              <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">Read article <ArrowRight className="size-3.5" /></Link>
            </div>
          </Card>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(p => (
              <Card key={p.title} className="p-7 border-border bg-card card-hover">
                <Badge variant="outline">{p.cat}</Badge>
                <h3 className="mt-4 font-display font-semibold text-heading text-lg leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-paragraph leading-relaxed">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Clock className="size-3.5" /> {p.time}</span>
                  <span className="text-primary font-medium inline-flex items-center gap-1">Read <ArrowRight className="size-3.5" /></span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <div className="eyebrow justify-center">Newsletter</div>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-heading">The Learning Platform Brief</h2>
            <p className="mt-3 text-paragraph">One thoughtful email a month for L&D leaders and platform teams. No fluff.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="you@company.com" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
