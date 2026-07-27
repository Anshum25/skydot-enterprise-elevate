import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Shield,
  Cpu,
  GraduationCap,
  Building2,
  Landmark,
  HeartPulse,
  Factory,
  Banknote,
  Users,
  BarChart3,
  Server,
  Cloud,
  Lock,
  Sparkles,
  CheckCircle2,
  Zap,
  BookOpen,
  Award,
  Globe,
  Play,
  ChevronRight,
  Target,
  Eye,
  GitBranch,
  Handshake,
  Code2,
  ClipboardCheck,
  MonitorCheck,
  Plug,
  Gauge,
  Headphones,
  Network,
  Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader, Eyebrow } from "@/components/section-header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dynamic Pixel — Best E-Learning Content Development Company" },
      {
        name: "description",
        content:
          "Explore India's best eLearning content development companies for custom, interactive training solutions and services.",
      },
      { property: "og:title", content: "Dynamic Pixel — Best E-Learning Content Development" },
      {
        property: "og:description",
        content:
          "Explore India's best eLearning content development companies for custom, interactive training solutions and services.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const TRUST_LOGOS = [
  "Ministry of Education",
  "IIT Delhi",
  "TCS Learning",
  "Emirates NBD",
  "Reliance",
  "Apollo Hospitals",
  "Standard Chartered",
  "Tata Steel",
  "IIM Bangalore",
  "Airtel",
];

const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "400+", label: "Clients Globally" },
  { value: "5000+", label: "Projects Delivered" },
  { value: "28", label: "Countries delivered in" },
];

const CORE_VALUES = [
  {
    icon: GitBranch,
    title: "Innovative Solutions",
    desc: "Providing cutting-edge E-learning solutions tailored to your needs.",
  },
  {
    icon: Shield,
    title: "Quality Content",
    desc: "High-quality, engaging, and interactive content development.",
  },
  {
    icon: Handshake,
    title: "Client Centric",
    desc: "Focusing on delivering maximum value and long-term partnerships.",
  },
  {
    icon: Code2,
    title: "Expert Team",
    desc: "Experienced professionals dedicated to your success.",
  },
];

const CHOOSE_DYNAMIC_PIXEL = [
  {
    icon: Award,
    title: "Custom E-Learning",
    desc: "Tailored content to meet organizational learning objectives.",
  },
  {
    icon: Code2,
    title: "Moodle Services",
    desc: "Complete Moodle implementation, customization, and plugin development.",
  },
  {
    icon: Cloud,
    title: "Animated Videos",
    desc: "Engaging 2D and whiteboard animations to simplify complex concepts.",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    desc: "HACC Gen Moodle-AI plugin for enhanced learning experiences.",
  },
  {
    icon: MonitorCheck,
    title: "K-12 Content",
    desc: "Interactive curriculum-aligned content for schools.",
  },
  {
    icon: Plug,
    title: "Softskills Training",
    desc: "KnowxBox OTS softskills courses for corporate training.",
  },
  {
    icon: Gauge,
    title: "Flash to HTML5",
    desc: "Convert legacy flash content to modern HTML5 formats.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Continuous support and maintenance for all your learning platforms.",
  },
];

const HIGHLIGHTS = [
  "Enterprise Architecture",
  "Secure Infrastructure",
  "Scalable Solutions",
  "Open Source Experts",
  "Modern Technology Stack",
];

const SERVICES = [
  {
    icon: BookOpen,
    title: "Moodle Services",
    desc: "Consulting, implementation, customization, plugin & theme development.",
    href: "/moodle-development",
  },
  {
    icon: Shield,
    title: "Custom Learning",
    desc: "Custom eLearning development, mobile learning, and game-based learning.",
    href: "/solutions",
  },
  {
    icon: Sparkles,
    title: "AI Services",
    desc: "HACC Gen - Moodle-AI Plugin and advanced AI learning features.",
    href: "/ai-services",
  },
  {
    icon: Cloud,
    title: "Animated Videos",
    desc: "2D animations and whiteboard animations for engaging product explanation.",
    href: "/services",
  },
  {
    icon: Cpu,
    title: "K-12 Solutions",
    desc: "KinderSpecial pre-primary content and interactive school curriculums.",
    href: "/solutions",
  },
  {
    icon: BarChart3,
    title: "Softskills Courses",
    desc: "KnowxBox off-the-shelf softskills courses for corporate training.",
    href: "/services",
  },
];

const INDUSTRIES = [
  { icon: GraduationCap, name: "Higher Education", desc: "Universities, colleges, and institutes" },
  { icon: Landmark, name: "Corporate", desc: "Internal policies, induction, and product training" },
  { icon: Building2, name: "K-12 Schools", desc: "Interactive digital curriculum content" },
  { icon: HeartPulse, name: "Training Academies", desc: "Commercial learning platforms" },
  { icon: Banknote, name: "Government", desc: "Public sector training and compliance" },
  { icon: Factory, name: "NGOs", desc: "Affordable learning solutions for social impact" },
];

const WHY = [
  {
    icon: Award,
    title: "Certified Moodle Partner-grade expertise",
    desc: "A dedicated Moodle centre of excellence with 60+ certified engineers, plugin authors and LMS architects.",
  },
  {
    icon: Lock,
    title: "Built for regulated environments",
    desc: "ISO 27001, SOC 2 aligned processes, GDPR & DPDP compliance, on-prem and sovereign cloud deployment options.",
  },
  {
    icon: Globe,
    title: "Global delivery, local presence",
    desc: "Delivery hubs across India, UAE and UK with multilingual support and 24×7 managed services.",
  },
  {
    icon: Zap,
    title: "Engineered for scale",
    desc: "Battle-tested architectures serving 1M+ concurrent learners with active-active DR and multi-region failover.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "Stakeholder workshops, learning ecosystem audit, KPI definition." },
  { step: "02", title: "Design", desc: "Solution blueprint, architecture, UX design, integration map." },
  { step: "03", title: "Build", desc: "Agile delivery, plugin & theme engineering, integrations, migrations." },
  { step: "04", title: "Deploy", desc: "Cloud provisioning, CI/CD, security hardening, load testing." },
  { step: "05", title: "Operate", desc: "Managed hosting, monitoring, incident response, continuous improvement." },
];

const CASES = [
  {
    tag: "Higher Education",
    title: "National university federation modernizes learning for 1.2M students",
    metric: "40% faster course delivery",
    color: "from-blue-500/10 to-sky-400/10",
  },
  {
    tag: "Government",
    title: "Public service academy launches nationwide certification programme",
    metric: "180K certifications / year",
    color: "from-indigo-500/10 to-blue-500/10",
  },
  {
    tag: "Banking",
    title: "Tier-1 bank unifies compliance training across 42 countries",
    metric: "98% completion rate",
    color: "from-sky-500/10 to-cyan-400/10",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Dynamic Pixel rebuilt our Moodle estate and transformed our content. We now support 3× the concurrent learners with highly engaging courses.",
    name: "Dr. Ananya Rao",
    role: "CIO, National Skills University",
  },
  {
    quote:
      "The CBT platform delivered flawlessly across 380 remote centres. Their AI proctoring engine set a new standard for us.",
    name: "Mr. Rajiv Menon",
    role: "Director of Examinations, State Public Service Commission",
  },
  {
    quote:
      "A rare partner that understands both enterprise governance and modern learning experience. Our board-level KPIs finally moved.",
    name: "Sarah Whitmore",
    role: "VP Learning & Development, Global Banking Group",
  },
];

const FAQ = [
  {
    q: "Do you work with organizations already on Moodle?",
    a: "Yes. Most of our engagements are upgrades, migrations, hardening or customization of existing Moodle estates — including migrations from Moodle 3.x/4.x, Totara, Blackboard and Canvas.",
  },
  {
    q: "Can you host on our private cloud or on-premises?",
    a: "Absolutely. We deploy on AWS, Azure, GCP, private clouds and sovereign/government cloud, as well as fully on-premises environments with hardened Kubernetes and observability.",
  },
  {
    q: "How do you handle data residency and compliance?",
    a: "We support GDPR, DPDP, HIPAA and sector-specific regulatory frameworks with regional data residency, encryption at rest and in transit, and audit-ready controls.",
  },
  {
    q: "What is the typical engagement timeline?",
    a: "A production-ready enterprise LMS launch typically takes 8 to 16 weeks depending on integrations and content migration scope. Managed operations begin from day one of go-live.",
  },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <Hero />

      {/* TRUST BAR */}
      <TrustBar />

      {/* COMPANY INTRODUCTION */}
      <section className="section-y bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 xl:gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="A Trusted Technology Partner for Enterprise Learning Solutions"
                description="Dynamic Pixel specializes in designing, implementing, customizing and managing enterprise Moodle platforms and custom E-learning content for organizations that need scalable, secure and future-ready learning environments. Our work combines Moodle expertise, learning technology, custom content development, AI learning, and digital transformation into practical systems teams can run with confidence."
              />

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                <Card className="p-6 border-border bg-card">
                  <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Target className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-heading">Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paragraph">
                    Helping organizations build reliable digital learning ecosystems through enterprise-grade E-learning and Moodle solutions.
                  </p>
                </Card>
                <Card className="p-6 border-border bg-card">
                  <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Eye className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-heading">Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paragraph">
                    To become a trusted global technology partner for modern learning platforms and digital education transformation.
                  </p>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg border border-border bg-card p-5 shadow-elevated">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <div className="font-display text-sm font-semibold text-heading">Enterprise Learning Platform</div>
                    <div className="mt-1 text-xs text-muted-foreground">Moodle architecture overview</div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-primary/70" />
                    <span className="size-2 rounded-full bg-muted-foreground/30" />
                    <span className="size-2 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-lg border border-border bg-surface p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                        <BookOpen className="size-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-heading">Moodle LMS Core</div>
                        <div className="text-xs text-muted-foreground">Courses, roles, cohorts, reporting</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Network, title: "Integrations", text: "SSO, ERP, HRMS" },
                      { icon: Layers3, title: "Custom Layer", text: "Plugins and workflows" },
                      { icon: Lock, title: "Security", text: "Access, audit, compliance" },
                      { icon: BarChart3, title: "Analytics", text: "Dashboards and insights" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-lg border border-border bg-background p-4">
                        <item.icon className="size-5 text-primary" />
                        <div className="mt-3 text-sm font-semibold text-heading">{item.title}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{item.text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-border bg-background p-4">
                    <div className="flex flex-wrap gap-2">
                      {["CBT", "AI Learning", "Managed Cloud", "Support"].map((tag) => (
                        <span key={tag} className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-heading">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((value) => (
              <Card key={value.title} className="p-6 border-border bg-card">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-heading">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYDOT */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why Choose Dynamic Pixel"
            title="Why Organizations Choose Dynamic Pixel"
            description="Successful learning implementations require more than just software. They require engaging content, architecture, customization, integration, and long-term support from a team that understands how learning behaves."
            align="center"
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CHOOSE_DYNAMIC_PIXEL.map((feature) => (
              <Card key={feature.title} className="p-6 border-border bg-card">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-heading">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{feature.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-border bg-background px-5 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="inline-flex items-center gap-2 text-sm font-medium text-heading">
                  <CheckCircle2 className="size-4 text-primary" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <SectionHeader
              eyebrow="What we do"
              title={<>A complete partner for E-learning development.</>}
              description="From strategy and custom content to AI, hosting and LMS operations — one accountable partner across the full lifecycle."
            />
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link to="/services">All services <ChevronRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Card key={s.title} className="p-6 card-hover border-border bg-card">
                <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-heading">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{s.desc}</p>
                <Link to={s.href} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                  Learn more <ArrowRight className="size-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <SectionHeader
              eyebrow="Why Dynamic Pixel"
              title="The rigor of an enterprise vendor. The craft of a modern content team."
              description="We combine deep Moodle engineering with product design, custom E-learning development and applied AI."
            />
            <div className="grid sm:grid-cols-2 gap-5">
              {WHY.map((w) => (
                <div key={w.title} className="rounded-xl border border-border bg-card p-6 shadow-soft card-hover">
                  <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <w.icon className="size-5" />
                  </div>
                  <div className="mt-4 font-display font-semibold text-heading">{w.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-paragraph">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-8 text-center card-hover">
                <div className="font-mono font-semibold text-4xl md:text-5xl text-heading">{s.value}</div>
                <div className="mt-2 text-sm text-paragraph">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Industries"
            title="Built for the industries where learning is mission-critical."
            description="Sector-specific accelerators, compliance packs and reference architectures for regulated and high-scale environments."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((i) => (
              <Card key={i.name} className="p-6 card-hover border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <i.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-heading">{i.name}</div>
                    <p className="mt-1 text-sm text-paragraph">{i.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/industries">Explore all industries <ChevronRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Delivery"
            title="A predictable path from strategy to steady-state operations."
            description="Our engagement model brings executive visibility, engineering discipline and measurable milestones — with no surprises."
          />
          <div className="mt-14 grid md:grid-cols-5 gap-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-xl border border-border bg-card p-6 card-hover">
                <div className="font-mono text-xs text-primary tracking-widest">{p.step}</div>
                <div className="mt-3 font-display font-semibold text-heading">{p.title}</div>
                <div className="mt-1.5 text-sm text-paragraph">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <SectionHeader
              eyebrow="Case studies"
              title="Outcomes our customers ship to their boards."
            />
            <Button asChild variant="ghost">
              <Link to="/case-studies">View all <ChevronRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {CASES.map((c) => (
              <Link key={c.title} to="/case-studies" className="group">
                <Card className="overflow-hidden border-border bg-card card-hover h-full">
                  <div className={`aspect-[4/3] bg-gradient-to-br ${c.color} relative border-b border-border grid-bg`}>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur">{c.tag}</Badge>
                      <div className="font-mono text-xs font-medium text-heading bg-background/80 backdrop-blur rounded-full px-3 py-1 border border-border">
                        {c.metric}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-display font-semibold text-heading group-hover:text-primary transition">
                      {c.title}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read case study <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="What leaders say"
            title="Trusted by CIOs, examination boards and Chief Learning Officers."
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="p-7 border-border bg-card">
                <div className="text-primary font-serif text-4xl leading-none">"</div>
                <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-heading">{t.quote}</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-display font-semibold text-sm text-heading">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Technology"
            title="A modern, open technology stack."
            description="We build on proven, open technologies — production-hardened for regulated and high-scale environments."
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Moodle 4.x", "Workplace", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "Elastic", "Grafana", "GitHub Actions", "Terraform"].map((t) => (
              <div key={t} className="rounded-lg border border-border bg-card px-4 py-4 text-center text-sm font-medium text-heading card-hover">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Answers for enterprise buyers."
            description="Have a specific requirement? Our solution architects respond within one business day."
          />
          <Accordion type="single" collapsible defaultValue="q0" className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`q${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display font-semibold text-heading hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-paragraph leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/90 via-white to-slate-50 p-8 sm:p-12 lg:p-16 text-heading shadow-elevated transition-colors duration-300 dark:border-white/10 dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#0B0F19] dark:text-white dark:shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/15 dark:bg-primary/25 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 grid-bg opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />

            {/* 2-Column Grid Layout */}
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
              {/* Left Column: Hook & Actions */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-6">
                  <Sparkles className="size-3.5 animate-pulse" /> Ready when you are
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-heading dark:text-white leading-[1.15]">
                  Let's design your <span className="bg-gradient-to-r from-primary to-orange-600 dark:from-orange-400 dark:to-amber-200 bg-clip-text text-transparent">enterprise learning platform.</span>
                </h2>
                <p className="mt-5 text-paragraph dark:text-slate-300 text-lg leading-relaxed max-w-xl">
                  Book a 45-minute working session with our solution architects. We'll review your goals,
                  estate and constraints — and leave you with a concrete roadmap.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/25 px-8 h-12 text-base transition-all">
                    <Link to="/contact" className="group inline-flex items-center">
                      Book a working session <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border border-border/80 bg-white/90 hover:bg-white text-heading shadow-sm dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:shadow-none font-medium px-7 h-12 text-base backdrop-blur-sm transition-all">
                    <Link to="/case-studies" className="inline-flex items-center">
                      See what we've built <Users className="ml-2 size-4 text-muted-foreground dark:text-slate-400" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Workshop Agenda Card */}
              <div className="relative rounded-2xl border border-orange-200/60 bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-2xl transition-colors duration-300">
                <div className="flex items-center justify-between border-b border-border/60 dark:border-white/10 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-primary/10 border border-primary/20 text-primary dark:bg-primary/20 dark:border-primary/30">
                      <Target className="size-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-heading dark:text-white text-base">45-Min Architecture Workshop</div>
                      <div className="text-xs text-muted-foreground dark:text-slate-400">Zero sales theater · Technical alignment</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">100% Free</span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Cpu,
                      title: "Deep-Dive Estate Analysis",
                      desc: "Review Moodle, LMS architecture & scalability bottlenecks."
                    },
                    {
                      icon: Shield,
                      title: "Security & Compliance Check",
                      desc: "ISO 27001, data residency & governance mapping."
                    },
                    {
                      icon: Zap,
                      title: "Custom Engineering Roadmap",
                      desc: "Concrete next steps for CBT, plugins & AI integration."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3.5 items-start">
                      <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-orange-50 border border-orange-200/60 text-heading dark:bg-white/5 dark:border-white/10 dark:text-slate-300">
                        <item.icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-heading dark:text-white">{item.title}</div>
                        <div className="text-xs text-muted-foreground dark:text-slate-400 leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs text-muted-foreground dark:text-slate-400">
                  <div className="flex items-center gap-2 font-medium text-heading dark:text-slate-300">
                    <CheckCircle2 className="size-4 text-primary" /> Deliverable: Custom Solution Blueprint
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground dark:text-slate-400 text-xs">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Architects Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
