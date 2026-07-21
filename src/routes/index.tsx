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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader, Eyebrow } from "@/components/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skydot Infotech — Enterprise Moodle, LMS & AI Solutions" },
      {
        name: "description",
        content:
          "Enterprise Moodle engineering, CBT platforms and applied AI for universities, governments and global enterprises. Trusted by 400+ organizations.",
      },
      { property: "og:title", content: "Skydot Infotech — Enterprise Learning Platforms" },
      {
        property: "og:description",
        content:
          "We build compliant, high-scale Moodle, CBT and AI learning ecosystems for regulated industries worldwide.",
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
  { value: "400+", label: "Enterprise deployments" },
  { value: "12M+", label: "Learners served globally" },
  { value: "99.99%", label: "Platform uptime SLA" },
  { value: "28", label: "Countries delivered in" },
];

const SERVICES = [
  {
    icon: BookOpen,
    title: "Moodle Engineering",
    desc: "Consulting, implementation, customization, plugin & theme development on Moodle LMS and Workplace.",
    href: "/moodle-development",
  },
  {
    icon: Shield,
    title: "CBT & Assessment",
    desc: "Enterprise-grade computer-based testing with AI proctoring, question banks and secure delivery at scale.",
    href: "/cbt",
  },
  {
    icon: Sparkles,
    title: "Applied AI for Learning",
    desc: "AI tutors, adaptive learning, content generation, translation and predictive analytics.",
    href: "/ai-services",
  },
  {
    icon: Cloud,
    title: "Managed Cloud Hosting",
    desc: "24×7 managed hosting on AWS, Azure and private cloud with Kubernetes, autoscaling and DR.",
    href: "/services",
  },
  {
    icon: Cpu,
    title: "Integrations & APIs",
    desc: "SSO, LDAP, OAuth, SAP, Oracle, Workday, Salesforce and HRMS/ERP integrations built-in.",
    href: "/services",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    desc: "Executive dashboards, xAPI/LRS pipelines and skills intelligence for measurable outcomes.",
    href: "/ai-services",
  },
];

const INDUSTRIES = [
  { icon: GraduationCap, name: "Higher Education", desc: "Universities, edtech, research institutes" },
  { icon: Landmark, name: "Government", desc: "Ministries, PSUs, defense training academies" },
  { icon: Building2, name: "Enterprise", desc: "Fortune-scale corporate learning & upskilling" },
  { icon: HeartPulse, name: "Healthcare", desc: "CME, clinical training, compliance" },
  { icon: Banknote, name: "Banking & Insurance", desc: "Regulatory training and certifications" },
  { icon: Factory, name: "Manufacturing", desc: "Shopfloor training, safety and OJT" },
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
      "Skydot rebuilt our Moodle estate from the ground up. We now support 3× the concurrent learners on 40% lower infrastructure spend.",
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
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="rounded-full bg-background/70 backdrop-blur border-border py-1.5 px-3">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium">Trusted by 400+ enterprises across 28 countries</span>
            </Badge>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.03] tracking-tight">
              Enterprise learning platforms,{" "}
              <span className="text-primary">engineered for outcomes.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-paragraph">
              Skydot Infotech builds and operates Moodle, CBT and AI-powered learning ecosystems for
              universities, governments and Fortune-scale enterprises — with the compliance, scale
              and craft your organization demands.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="shadow-soft">
                <Link to="/contact">
                  Book an executive demo <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">
                  <Play className="mr-2 size-4" /> See customer stories
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-primary" /> ISO 27001 aligned</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-primary" /> GDPR & DPDP compliant</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-primary" /> 24×7 managed services</span>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="mt-16 md:mt-20 mx-auto max-w-6xl">
            <div className="relative rounded-2xl border border-border bg-card p-2 shadow-elevated">
              <div className="rounded-xl overflow-hidden border border-border bg-surface">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="ml-3 text-xs font-mono text-muted-foreground">skydot.cloud / learning-console</div>
                </div>
                <div className="grid md:grid-cols-[220px_1fr] min-h-[380px]">
                  <div className="hidden md:block border-r border-border bg-background p-4 space-y-1">
                    {["Overview", "Programs", "Learners", "Assessments", "Analytics", "Compliance", "Integrations", "Settings"].map((s, i) => (
                      <div key={s} className={`px-3 py-2 rounded-md text-xs font-medium ${i === 0 ? "bg-primary/10 text-primary" : "text-paragraph"}`}>{s}</div>
                    ))}
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Learning Console</div>
                        <div className="mt-1 font-display font-bold text-lg text-heading">Q4 Programme Overview</div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2">
                        <Badge variant="outline" className="rounded-full">Live</Badge>
                        <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/10">All regions</Badge>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        ["Active learners", "1,284,902", "+12.4%"],
                        ["Course completion", "87.3%", "+3.1%"],
                        ["Assessments run", "42,918", "+8.7%"],
                        ["Avg. NPS", "72", "+4"],
                      ].map(([label, val, delta]) => (
                        <div key={label} className="rounded-lg border border-border bg-card p-4">
                          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
                          <div className="mt-2 font-mono text-xl font-semibold text-heading">{val}</div>
                          <div className="mt-1 text-[11px] text-primary font-medium">{delta}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg border border-border bg-card p-4 h-48 relative overflow-hidden">
                      <div className="text-[11px] uppercase tracking-wide text-muted-foreground mb-3">Engagement · last 30 days</div>
                      <svg viewBox="0 0 400 120" className="w-full h-32">
                        <defs>
                          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,90 C40,70 60,80 90,60 C130,35 160,55 200,45 C240,35 270,55 300,40 C340,20 370,30 400,20 L400,120 L0,120 Z" fill="url(#g1)" />
                        <path d="M0,90 C40,70 60,80 90,60 C130,35 160,55 200,45 C240,35 270,55 300,40 C340,20 370,30 400,20" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-10">
          <div className="text-center text-xs uppercase tracking-[0.15em] font-semibold text-muted-foreground">
            Powering learning at leading organizations
          </div>
          <div className="mt-6 overflow-hidden">
            <div className="flex gap-14 animate-marquee whitespace-nowrap">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((n, i) => (
                <span key={i} className="font-display font-semibold text-lg text-muted-foreground/70 hover:text-heading transition">
                  {n}
                </span>
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
              title={<>A complete platform partner for enterprise learning.</>}
              description="From strategy and platform engineering to AI, hosting and 24×7 operations — one accountable partner across the full lifecycle."
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
              eyebrow="Why Skydot"
              title="The rigor of an enterprise vendor. The craft of a modern product team."
              description="We combine deep Moodle engineering with product design and applied AI — governed by enterprise-grade delivery, security and operations."
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-[#1D4ED8] text-primary-foreground p-10 md:p-16 shadow-elevated">
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="relative max-w-3xl">
              <Eyebrow className="text-white/80">Ready when you are</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
                Let's design your enterprise learning platform.
              </h2>
              <p className="mt-5 text-white/85 text-lg max-w-2xl">
                Book a 45-minute working session with our solution architects. We'll review your goals,
                estate and constraints — and leave you with a concrete roadmap.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">Book a working session <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10">
                  <Link to="/case-studies">See what we've built <Users className="ml-2 size-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
