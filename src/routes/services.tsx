import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Code,
  Server,
  Briefcase,
  GraduationCap,
  Headset,
  Zap,
  Eye,
  Award,
  Gamepad2,
  Target,
  Map,
  Palette,
  Plug,
  Video,
  CreditCard,
  Database,
  CheckCircle,
  GitMerge,
  Container,
  Network,
  Activity,
  ShieldCheck,
  Cpu,
  Handshake,
  ArrowRight
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Dynamic Pixel" },
      { name: "description", content: "Complete E-Learning & Custom Content Solutions" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const CATEGORIES = [
  {
    icon: Lightbulb,
    title: "E-Learning Solutions",
    description: "Helping organizations build custom e-learning modules from induction to product training.",
    services: [
      "Induction Training",
      "Internal Policies",
      "Product Explanation",
      "Applications/Softwares",
      "Game Based Learning",
      "Mobile Learning",
      "Simulations",
    ],
    image: "https://dynamicpixel.co.in/assets/img/solutions_img/elearning_solution.png"
  },
  {
    icon: Code,
    title: "Moodle LMS Solutions",
    description: "Complete Moodle services including implementation, hosting, and custom AI plugins.",
    services: [
      "Moodle Installation",
      "Moodle Hosting",
      "Custom Plugin Development",
      "HACC Gen Moodle-AI",
      "Theme Customization",
      "Moodle Upgrade",
      "Moodle Support",
    ],
    image: "https://dynamicpixel.co.in/assets/img/solutions_img/lms.png"
  },
  {
    icon: Server,
    title: "Animated Videos",
    description: "Engaging 2D animations and whiteboard animations to simplify complex concepts.",
    services: [
      "2D Animations",
      "Whiteboard Animations",
      "Explainer Videos",
      "Character Animation",
      "Storyboarding",
      "Voiceover",
      "Scriptwriting",
    ],
    image: "https://dynamicpixel.co.in/assets/img/solutions_img/2D_animations.png"
  },
  {
    icon: Briefcase,
    title: "K-12 Solutions",
    description: "Interactive curriculum-aligned content for schools and pre-primary education.",
    services: [
      "KinderSpecial",
      "Curriculum Content",
      "Interactive Assessments",
      "Digital Textbooks",
      "Teacher Resources",
      "Animation for Kids",
      "Mobile Learning",
    ],
    image: "https://dynamicpixel.co.in/assets/img/solutions_img/K-12_solution.png"
  }
];

const ADDITIONAL_SERVICES = [
  { icon: GraduationCap, title: "Training", desc: "Expert-led sessions." },
  { icon: Headset, title: "Support", desc: "24/7 dedicated assistance." },
  { icon: Zap, title: "Performance Optimization", desc: "High-speed configurations." },
  { icon: Eye, title: "Accessibility", desc: "WCAG compliant designs." },
  { icon: Award, title: "Certificates", desc: "Automated credentialing." },
  { icon: Gamepad2, title: "Gamification", desc: "Engaging learning mechanics." },
  { icon: Target, title: "Competency Framework", desc: "Skill mapping tools." },
  { icon: Map, title: "Learning Paths", desc: "Structured curriculums." },
  { icon: Palette, title: "White Label", desc: "Fully branded solutions." },
  { icon: Plug, title: "API Integration", desc: "Seamless system connectivity." },
  { icon: Video, title: "Zoom Integration", desc: "Live virtual classrooms." },
  { icon: Video, title: "Microsoft Teams", desc: "Enterprise communications." },
  { icon: Video, title: "Google Meet", desc: "Integrated meetings." },
  { icon: CreditCard, title: "Payment Gateway", desc: "Secure online transactions." },
  { icon: Database, title: "Data Migration", desc: "Safe historical data transfer." },
  { icon: CheckCircle, title: "Quality Assurance", desc: "Rigorous testing protocols." },
  { icon: GitMerge, title: "DevOps", desc: "Continuous integration pipelines." },
  { icon: Container, title: "Docker", desc: "Containerized environments." },
  { icon: Network, title: "Kubernetes", desc: "Orchestrated scaling." },
  { icon: Activity, title: "Monitoring", desc: "Real-time system insights." },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Custom Tailored",
    description: "Every solution is custom-built to match your organization's specific learning objectives and branding."
  },
  {
    icon: Cpu,
    title: "Technology Driven",
    description: "We utilize modern technologies like HTML5, AI, and Moodle to deliver future-proof content."
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "Dynamic Pixel focuses on continuous improvement and support rather than just one-time delivery."
  }
];

function ServicesPage() {
  const matchRoute = useMatchRoute();
  const isExact = matchRoute({ to: "/services", fuzzy: false });

  if (!isExact) {
    return <Outlet />;
  }

  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Complete E-Learning & Custom Content Solutions"
        description="Dynamic Pixel provides end-to-end custom e-learning development, Moodle services, K-12 solutions, animated videos, and AI plugins for organizations and institutions."
      />

      {/* SERVICE CATEGORIES */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            {CATEGORIES.map((cat) => (
              <Card key={cat.title} className="p-8 border-border bg-card shadow-soft rounded-lg flex flex-col h-full card-hover group">
                <div className="flex justify-between items-start mb-6">
                  <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary">
                    <cat.icon className="size-6" />
                  </div>
                  {cat.image && <img src={cat.image} alt={cat.title} className="h-12 object-contain" />}
                </div>
                <h3 className="font-display font-bold text-2xl text-heading">{cat.title}</h3>
                <p className="mt-3 text-paragraph leading-relaxed text-lg">{cat.description}</p>
                <div className="mt-8 flex-1">
                  <div className="text-xs font-bold text-heading mb-5 uppercase tracking-wider">Included Services</div>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                    {cat.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-paragraph">
                        <span className="mt-[2px] text-primary shrink-0">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL PROFESSIONAL SERVICES */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="Additional Professional Services"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-5">
            {ADDITIONAL_SERVICES.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-card p-5 card-hover shadow-card flex items-start gap-4">
                <s.icon className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-heading">{s.title}</h4>
                  <p className="mt-1 text-xs text-paragraph leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR SERVICES */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {WHY_US.map((why) => (
              <div key={why.title} className="flex flex-col items-start group">
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <why.icon className="size-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-heading mb-3">{why.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-paragraph">{why.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-card p-10 md:p-16 text-center shadow-elevated">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-heading tracking-tight">Looking for the Right E-Learning Solution?</h2>
            <p className="mt-5 text-paragraph text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Our specialists can help you choose the right content strategy, LMS deployment, and development approach for your organization.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
