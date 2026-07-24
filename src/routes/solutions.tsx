import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Building2,
  Landmark,
  HeartPulse,
  Factory,
  Banknote,
  ShieldCheck,
  School,
  Handshake,
  Headset,
  Users,
  LineChart,
  ArrowRight,
  Shield,
  Settings,
  Zap,
  ArrowDown
} from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Dynamic Pixel" },
      { name: "description", content: "Custom Learning Solutions for Every Industry" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  {
    icon: GraduationCap,
    title: "Induction Training",
    desc: "Engaging digital orientation programs for smooth onboarding of new employees."
  },
  {
    icon: Building2,
    title: "Internal Policies",
    desc: "Interactive courses covering internal policies, guidelines, and compliance requirements."
  },
  {
    icon: Landmark,
    title: "Product Explanation",
    desc: "Clear and detailed interactive modules to explain complex products to staff and customers."
  },
  {
    icon: HeartPulse,
    title: "Applications/Softwares",
    desc: "Software simulation training for hands-on experience without risking live environments."
  },
  {
    icon: Factory,
    title: "Game Based Learning",
    desc: "Gamified learning content to increase engagement, retention, and motivation."
  },
  {
    icon: Banknote,
    title: "Mobile Learning",
    desc: "Responsive, bite-sized learning content optimized for any device."
  },
  {
    icon: ShieldCheck,
    title: "Softskills Content",
    desc: "KnowxBox OTS softskills courses focusing on communication, leadership, and management."
  },
  {
    icon: School,
    title: "K-12 Content",
    desc: "Curriculum-based digital content and KinderSpecial modules for school education."
  },
  {
    icon: Handshake,
    title: "Animated Videos",
    desc: "2D and whiteboard animations for effective storytelling and concept explanation."
  },
  {
    icon: Headset,
    title: "AI Solutions",
    desc: "HACC Gen plugin integrating generative AI into learning management systems."
  },
  {
    icon: Users,
    title: "Custom E-Learning",
    desc: "Fully bespoke e-learning content designed specifically for your organization's goals."
  },
  {
    icon: LineChart,
    title: "Flash to HTML5",
    desc: "Modernize legacy flash content to secure, cross-platform HTML5 format."
  }
];

const BENEFITS = [
  {
    icon: Building2,
    title: "Enterprise Ready",
    desc: "Designed for organizations of every size."
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    desc: "Every implementation matches your business process."
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    desc: "Enterprise-grade infrastructure and security."
  },
  {
    icon: Zap,
    title: "Future Ready",
    desc: "Built with modern technologies and open standards."
  }
];

const PROCESS = [
  { step: "1", title: "Discover", desc: "Understand your unique needs" },
  { step: "2", title: "Plan", desc: "Design the architecture" },
  { step: "3", title: "Implement", desc: "Build and integrate" },
  { step: "4", title: "Train", desc: "Empower your team" },
  { step: "5", title: "Support", desc: "Provide 24/7 assistance" },
  { step: "6", title: "Optimize", desc: "Continuous improvement" }
];

function SolutionsPage() {
  return (
    <div>
      {/* SECTION INTRODUCTION */}
      <section className="relative border-b border-border bg-background">
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">Solutions</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-heading">
              Custom Learning Solutions for Every Industry
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-paragraph">
              Every organization has different learning, compliance and training requirements. Dynamic Pixel delivers customized E-Learning and Moodle solutions designed for each industry.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION CARDS */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SOLUTIONS.map((s) => (
              <Card key={s.title} className="p-6 border-border bg-card rounded-xl shadow-soft flex flex-col h-full card-hover group">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary mb-5">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-heading">{s.title}</h3>
                <p className="mt-2 text-sm text-paragraph leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 pt-4 border-t border-border mt-auto">
                  <Link to="/contact" className="inline-flex items-center text-sm font-medium text-heading group-hover:text-primary transition-colors">
                    Learn More <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION BENEFITS */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="Why Our Solutions Work"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center p-6">
                <div className="grid size-14 place-items-center rounded-xl bg-surface text-primary mb-5 border border-border shadow-soft">
                  <b.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-heading mb-2">{b.title}</h3>
                <p className="text-sm text-paragraph">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS PROCESS */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="max-w-5xl mx-auto">
            <div className="hidden lg:grid grid-cols-6 gap-4 relative">
              {/* Desktop Horizontal Line */}
              <div className="absolute top-6 left-[8%] right-[8%] h-0.5 bg-border -z-10" />
              {PROCESS.map((p) => (
                <div key={p.title} className="flex flex-col items-center text-center group">
                  <div className="grid size-12 place-items-center rounded-full bg-background border border-border text-primary font-mono font-bold text-sm shadow-soft group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    {p.step}
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-heading">{p.title}</h3>
                  <p className="mt-1 text-xs text-paragraph">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="lg:hidden flex flex-col items-center gap-6">
              {PROCESS.map((p, i) => (
                <div key={p.title} className="flex flex-col items-center text-center">
                  <div className="grid size-12 place-items-center rounded-full bg-background border border-border text-primary font-mono font-bold text-sm shadow-soft">
                    {p.step}
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-heading">{p.title}</h3>
                  <p className="mt-1 text-xs text-paragraph">{p.desc}</p>
                  {i < PROCESS.length - 1 && (
                    <ArrowDown className="size-5 text-muted-foreground mt-4" />
                  )}
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
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-heading tracking-tight">Find the Right Learning Solution for Your Organization</h2>
            <p className="mt-5 text-paragraph text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Whether you're a school, enterprise or training organization, we'll help you build the right custom content and LMS ecosystem for your needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
