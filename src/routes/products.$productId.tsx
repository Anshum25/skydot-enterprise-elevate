import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Settings, Code, Palette, Puzzle, Layout, Server, Brain, BarChart, 
  Link as LinkIcon, Cpu, Layers, Zap, RefreshCw, ArrowUp, GraduationCap, 
  Headset, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, Users, Database, Sparkles,
  Globe, Building, Building2
} from "lucide-react";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetailPage,
});

interface ProductData {
  title: string;
  subtitle: string;
  eyebrow: string;
  badge: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  overview: string[];
  deliverables: { title: string; description: string; icon: any }[];
  process: { step: string; title: string; desc: string }[];
  faq: [string, string][];
}

const PRODUCTS_DATA: Record<string, ProductData> = {
  "moodle-lms": {
    title: "Moodle LMS",
    subtitle: "Engage your learners with flexible, secure, and accessible online learning spaces.",
    eyebrow: "Core Platform",
    badge: "Most Popular",
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Global Users", value: "300M+" },
      { label: "Open Source", value: "100%" },
      { label: "Languages", value: "120+" }
    ],
    overview: [
      "Moodle LMS is the world's most customisable and trusted open source learning management system. It empowers educators to improve learning outcomes with an incredibly flexible toolset.",
      "Whether you are teaching a few students or millions, Moodle LMS can scale to meet your needs, providing a secure and accessible online learning space."
    ],
    deliverables: [
      { title: "Flexible Course Creation", description: "Design courses using a variety of formats and activities.", icon: Layout },
      { title: "Secure & Private", description: "Maintain full control over your data and privacy.", icon: ShieldCheck },
      { title: "Accessible Learning", description: "WCAG 2.1 compliant out of the box for inclusive education.", icon: CheckCircle2 },
      { title: "Extensive Analytics", description: "Track learner progress and engagement with detailed reports.", icon: BarChart },
      { title: "Open Source Freedom", description: "Modify and extend the platform to suit your exact requirements.", icon: Code },
      { title: "Global Community Support", description: "Join millions of educators sharing resources and best practices.", icon: Globe }
    ],
    process: [
      { step: "01", title: "Installation & Setup", desc: "Deploy Moodle LMS on your preferred infrastructure." },
      { step: "02", title: "Configuration", desc: "Tailor the platform settings to your educational goals." },
      { step: "03", title: "Course Development", desc: "Create engaging content and activities for your learners." },
      { step: "04", title: "Launch & Iterate", desc: "Welcome learners and continuously improve courses based on feedback." }
    ],
    faq: [
      ["Is Moodle LMS really free?", "Yes, the core Moodle LMS software is open source and free to download. You only pay for hosting, support, or custom development services if you choose to use them."]
    ]
  },
  "moodle-workplace": {
    title: "Moodle Workplace",
    subtitle: "Streamline training, onboarding, and compliance management while driving learning outcomes that you can measure.",
    eyebrow: "Corporate Solution",
    badge: "Enterprise Ready",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Multi-Tenancy", value: "Built-in" },
      { label: "Automation", value: "Dynamic" },
      { label: "Compliance", value: "Tracked" }
    ],
    overview: [
      "Moodle Workplace is designed specifically for corporate and organizational learning. It combines the flexibility of Moodle LMS with advanced features for employee training, onboarding, and compliance.",
      "With powerful automation, multi-tenancy, and advanced reporting, Moodle Workplace empowers HR and L&D teams to deliver impactful learning programs at scale."
    ],
    deliverables: [
      { title: "Multi-Tenancy Architecture", description: "Manage multiple organizations or departments from a single installation.", icon: Layers },
      { title: "Automated Workflows", description: "Streamline enrollments, certifications, and notifications with dynamic rules.", icon: Zap },
      { title: "Compliance Management", description: "Easily track and manage mandatory training and certifications.", icon: ShieldCheck },
      { title: "Customizable Reports", description: "Build and share detailed reports using the drag-and-drop report builder.", icon: BarChart },
      { title: "Organizational Structure", description: "Mirror your company hierarchy to assign learning paths and permissions.", icon: Users },
      { title: "Seamless Integration", description: "Connect with HRIS, ERP, and CRM systems for automated user management.", icon: LinkIcon }
    ],
    process: [
      { step: "01", title: "Needs Analysis", desc: "Identify key training and compliance requirements." },
      { step: "02", title: "Tenant & Structure Setup", desc: "Configure multi-tenancy and organizational hierarchies." },
      { step: "03", title: "Automation Rules", desc: "Implement dynamic rules for enrollments and certifications." },
      { step: "04", title: "Deployment", desc: "Roll out learning programs to employees and partners." }
    ],
    faq: [
      ["How is Moodle Workplace different from Moodle LMS?", "Moodle Workplace includes additional features specifically for corporate learning, such as multi-tenancy, dynamic rules, organizational hierarchies, and advanced reporting, which are not available in the standard Moodle LMS."]
    ]
  },
  "moodle-cloud": {
    title: "MoodleCloud",
    subtitle: "For individuals who sell courses, or small organisations with basic training and onboarding needs.",
    eyebrow: "Hosted Solution",
    badge: "Ready in Minutes",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Setup Time", value: "Minutes" },
      { label: "Hosting", value: "Managed" },
      { label: "Updates", value: "Automatic" }
    ],
    overview: [
      "MoodleCloud offers a quick and easy way to get started with Moodle. It's a fully hosted solution managed by Moodle HQ, perfect for educators and small businesses.",
      "You don't need to worry about servers, updates, or maintenance. Just sign up, customize your site, and start teaching."
    ],
    deliverables: [
      { title: "Instant Setup", description: "Get your learning environment up and running in minutes.", icon: Zap },
      { title: "Fully Managed Hosting", description: "Leave the server administration and security to the experts.", icon: Server },
      { title: "Automatic Updates", description: "Always have access to the latest features and security patches.", icon: RefreshCw },
      { title: "Integrated Web Conferencing", description: "Built-in BigBlueButton integration for live online classes.", icon: Headset },
      { title: "Customizable Branding", description: "Add your logo and colors to make the site your own.", icon: Palette },
      { title: "Scalable Plans", description: "Upgrade your plan as your user base and storage needs grow.", icon: ArrowUp }
    ],
    process: [
      { step: "01", title: "Choose a Plan", desc: "Select the MoodleCloud plan that fits your user and storage needs." },
      { step: "02", title: "Sign Up", desc: "Create your account and instantly access your new site." },
      { step: "03", title: "Customize", desc: "Add your branding, configure settings, and create courses." },
      { step: "04", title: "Invite Learners", desc: "Start enrolling students and delivering your online courses." }
    ],
    faq: [
      ["Can I upgrade my MoodleCloud plan later?", "Yes, you can easily upgrade your MoodleCloud plan to accommodate more users or storage space as your needs grow."]
    ]
  },
  "moodle-app": {
    title: "Moodle App",
    subtitle: "Access Moodle from anywhere, on any device online and offline.",
    eyebrow: "Mobile Learning",
    badge: "iOS & Android",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Offline Access", value: "Supported" },
      { label: "Push Notifications", value: "Real-time" },
      { label: "Branding", value: "Customizable" }
    ],
    overview: [
      "The official Moodle App brings learning to your fingertips. Learners can access course content, submit assignments, and participate in discussions from their mobile devices.",
      "With offline capabilities, learning can happen anywhere, anytime, regardless of internet connectivity."
    ],
    deliverables: [
      { title: "Offline Learning", description: "Download courses and complete activities without an internet connection.", icon: Globe },
      { title: "Push Notifications", description: "Keep learners informed with instant alerts for messages and deadlines.", icon: Zap },
      { title: "Mobile-Optimized Interface", description: "A user-friendly experience designed specifically for touch screens.", icon: Layout },
      { title: "Seamless Sync", description: "Offline progress automatically synchronizes when the device reconnects.", icon: RefreshCw },
      { title: "Branded App Options", description: "Get a custom version of the app with your own branding in app stores.", icon: Palette },
      { title: "Multimedia Support", description: "Easily upload images, audio, and video directly from your mobile device.", icon: Sparkles }
    ],
    process: [
      { step: "01", title: "Enable Mobile Access", desc: "Ensure your Moodle site is configured to support the mobile app." },
      { step: "02", title: "Download the App", desc: "Learners install the app from the App Store or Google Play." },
      { step: "03", title: "Connect to Site", desc: "Enter your Moodle site URL and log in to access courses." },
      { step: "04", title: "Learn Anywhere", desc: "Start learning on the go, online or offline." }
    ],
    faq: [
      ["Is the Moodle App free?", "The standard Moodle App is free for learners to download. There are premium plans and branded app options available for organizations requiring advanced features or custom branding."]
    ]
  },
  "certified-integrations": {
    title: "Certified Integrations",
    subtitle: "Extend your online learning ecosystem with powerful and trusted add-ons.",
    eyebrow: "Ecosystem",
    badge: "Verified Partners",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Certified Partners", value: "Growing" },
      { label: "Security Checked", value: "Yes" },
      { label: "Seamless Fit", value: "Guaranteed" }
    ],
    overview: [
      "Certified Integrations are trusted add-ons that seamlessly extend the functionality of your Moodle platform. They have been rigorously vetted by Moodle HQ for quality, security, and performance.",
      "From advanced proctoring and plagiarism detection to comprehensive reporting tools, Certified Integrations help you build a robust and tailored learning ecosystem."
    ],
    deliverables: [
      { title: "Vetted for Security", description: "All integrations undergo strict security reviews to protect your data.", icon: ShieldCheck },
      { title: "Guaranteed Compatibility", description: "Ensure smooth operation with your current Moodle version.", icon: CheckCircle2 },
      { title: "Enhanced Functionality", description: "Add advanced features like web conferencing, anti-plagiarism, and more.", icon: Sparkles },
      { title: "Streamlined Workflows", description: "Integrate seamlessly with your existing tools and processes.", icon: LinkIcon },
      { title: "Reliable Support", description: "Get dedicated support from Certified Integration partners.", icon: Headset },
      { title: "Future-Proof Ecosystem", description: "Build a scalable platform that grows with your organization's needs.", icon: Layers }
    ],
    process: [
      { step: "01", title: "Identify Needs", desc: "Determine the additional functionalities your learning platform requires." },
      { step: "02", title: "Explore Integrations", desc: "Browse the catalog of Moodle Certified Integrations." },
      { step: "03", title: "Installation & Configuration", desc: "Easily install and set up the integration on your Moodle site." },
      { step: "04", title: "Enhance Learning", desc: "Leverage the new tools to improve the educational experience." }
    ],
    faq: [
      ["What makes an integration 'Certified'?", "Certified Integrations are developed by trusted Moodle Partners and have been technically reviewed by Moodle HQ to ensure they meet strict standards for security, performance, and compatibility."]
    ]
  }
};

function ProductDetailPage() {
  const { productId } = Route.useParams();
  
  // Fallback if URL slug is not in map
  const data: ProductData = PRODUCTS_DATA[productId] || {
    title: productId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + " Solutions",
    subtitle: "Enterprise e-learning engineering, custom architecture, and scalable Moodle solutions tailored to your organization's exact requirements.",
    eyebrow: "Skydot Enterprise Service",
    badge: "Enterprise Standard",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Delivery Standard", value: "ISO 27001" },
      { label: "System Reliability", value: "99.99%" },
      { label: "Client Satisfaction", value: "100%" }
    ],
    overview: [
      "Our comprehensive engineering team provides state-of-the-art e-learning technology services designed for universities, government bodies, and global enterprises. We combine deep pedagogical understanding with rigorous software engineering to build robust learning ecosystems.",
      "From high-concurrency cloud deployments and custom module development to seamless ERP integrations and proactive 24/7 maintenance, Skydot ensures your learning platform operates at peak performance."
    ],
    deliverables: [
      { title: "Custom Architecture Design", description: "Tailored system topologies engineered for high scalability and zero data loss.", icon: Server },
      { title: "Full-Stack Code Engineering", description: "Clean, documented PHP and TypeScript code adhering to official Moodle guidelines.", icon: Code },
      { title: "Enterprise Systems Integration", description: "Seamless bidirectional sync with HRIS, CRM, and university campus management tools.", icon: LinkIcon },
      { title: "Security & ISO Compliance", description: "Rigorous data encryption, role-based access control, and vulnerability patching.", icon: ShieldCheck },
      { title: "Performance & Caching Tuning", description: "Sub-second response times powered by Redis session clusters and database query optimization.", icon: Zap },
      { title: "Dedicated 24/7 SLA Support", description: "Round-the-clock proactive monitoring and emergency resolution from senior architects.", icon: Headset }
    ],
    process: [
      { step: "01", title: "Discovery & Blueprinting", desc: "Aligning technical requirements with organizational learning objectives." },
      { step: "02", title: "Agile Engineering & Staging", desc: "Iterative development and sandbox verification with zero disruption to live ops." },
      { step: "03", title: "Security & Performance QA", desc: "Rigorous load benchmarking and automated regression testing suites." },
      { step: "04", title: "Production Launch & Handover", desc: "Seamless deployment with dedicated training and 30-day hyper-care warranty." }
    ],
    faq: [
      ["How do we get started with this service?", "Simply schedule a free 45-minute architectural workshop with our team. We will analyze your current platform and provide a tailored technical roadmap."],
      ["Do you provide custom Service Level Agreements (SLAs)?", "Yes, we structure financially backed SLAs tailored to your organization's specific uptime and support response time requirements."]
    ]
  };

  return (
    <div className="bg-background min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border bg-gradient-to-b from-surface via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-display font-semibold text-xs uppercase tracking-wider mb-6 animate-fade-in">
                <Sparkles className="size-3.5" />
                <span>{data.eyebrow} · {data.badge}</span>
              </div>
              <div className="mb-4 animate-fade-in delay-100">
                <img src="/moodle_logo_TM.svg" alt="Moodle" className="h-8 sm:h-12 object-contain" />
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-heading tracking-tight leading-[1.15]">
                {data.title}
              </h1>
              <p className="mt-6 text-base sm:text-xl text-paragraph leading-relaxed font-normal max-w-2xl">
                {data.subtitle}
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
                  <Link to="/contact">
                    Schedule Architectural Consultation <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base border-border hover:border-primary/50">
                  <Link to="/contact">Request Technical Proposal</Link>
                </Button>
              </div>

              {/* STATS STRIP */}
              <div className="mt-12 pt-8 border-t border-border/80 grid grid-cols-3 gap-6 max-w-xl">
                {data.stats.map((st, idx) => (
                  <div key={idx}>
                    <div className="font-display font-bold text-2xl sm:text-3xl text-heading tracking-tight text-primary">
                      {st.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO VISUAL CARD */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl group">
                <img 
                  src={data.heroImage} 
                  alt={data.title}
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9] dark:brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest mb-2">
                    <CheckCircle2 className="size-4" />
                    <span>Enterprise Deliverable Standard</span>
                  </div>
                  <h3 className="text-white font-display font-bold text-xl sm:text-2xl">
                    Engineered for Scalability & Security
                  </h3>
                  <p className="mt-1 text-slate-300 text-xs sm:text-sm line-clamp-2">
                    Every project follows strict ISO 27001 data security protocols and zero-downtime deployment practices.
                  </p>
                </div>
              </div>
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl -z-10 opacity-70 dark:opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section-y bg-background">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-heading mb-6">
              Executive Overview & Engineering Approach
            </h2>
            <div className="space-y-5 text-paragraph text-base sm:text-lg leading-relaxed">
              {data.overview.map((p, i) => (
                <p key={i} className="first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES & CAPABILITIES GRID */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Key Deliverables"
            title="What We Deliver in This Service"
            description="Our engineering team provides comprehensive, end-to-end technical execution with transparent milestones and documented code."
            align="center"
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.deliverables.map((del, idx) => {
              const IconComponent = del.icon || CheckCircle2;
              return (
                <Card key={idx} className="p-7 border-border bg-card shadow-soft flex flex-col h-full card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <IconComponent className="size-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-heading mb-3 group-hover:text-primary transition-colors">
                    {del.title}
                  </h3>
                  <p className="text-sm sm:text-base text-paragraph leading-relaxed flex-1">
                    {del.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY / PROCESS STEPPER */}
      <section className="section-y bg-background">
        <div className="container-page">
          <SectionHeader
            eyebrow="Proven Methodology"
            title="How We Execute Your Project"
            description="A risk-free, transparent 4-stage engineering lifecycle designed to eliminate surprises and guarantee on-time delivery."
            align="left"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((pr, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl border border-border bg-card shadow-card flex flex-col justify-between group hover:border-primary/50 transition-all">
                <div>
                  <div className="font-display font-black text-4xl text-primary/20 group-hover:text-primary transition-colors mb-4">
                    {pr.step}
                  </div>
                  <h4 className="font-display font-bold text-lg text-heading mb-2">
                    {pr.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-paragraph leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Phase Milestone</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYDOT OVER STANDARD VENDORS */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 lg:p-16 shadow-elevated">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The Skydot Advantage</div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
                  Why Leading Enterprises Trust Skydot Over Off-the-Shelf Agencies
                </h2>
                <p className="mt-4 text-paragraph text-base sm:text-lg leading-relaxed">
                  We are not just general web designers; we are deep-systems LMS architects. We combine pedagogical mastery with rigorous Linux, database, and AI engineering.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "100% In-House Moodle & AI Engineers",
                    "Zero-Downtime Migration Guarantee",
                    "ISO 27001 Certified Security Practices",
                    "Financially Enforceable 99.99% SLAs",
                    "No Vendor Lock-In — Clean Open Standards",
                    "Dedicated On-Call Solution Architects"
                  ].map((adv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm font-medium text-heading">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0B0F19] rounded-2xl p-8 border border-white/10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <h4 className="font-display font-bold text-xl mb-3 text-orange-400">Ready for a Technical Deep Dive?</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Skip the salesperson. In our 45-minute discovery workshop, you will meet directly with a senior Moodle solution architect to review your database schemas, server load, or plugin code.
                </p>
                <div className="space-y-3 mb-8 text-xs text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Free architectural risk assessment</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Custom server sizing & TCO roadmap</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Mutual NDA signed prior to call</div>
                </div>
                <Button asChild size="lg" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  <Link to="/contact">Book Your Free Workshop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE FAQ SECTION */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page max-w-4xl">
          <SectionHeader
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Everything you need to know about our engineering standards, timelines, and post-launch support."
            align="center"
          />

          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {data.faq.map(([q, a], idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-6 bg-card shadow-soft">
                  <AccordionTrigger className="font-display font-semibold text-base sm:text-lg text-heading hover:no-underline py-5 text-left">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-paragraph text-sm sm:text-base leading-relaxed pb-5 pt-1">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19] p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Ready to Upgrade Your Learning Ecosystem?
              </h2>
              <p className="mt-5 text-slate-300 text-lg sm:text-xl leading-relaxed">
                Speak with our engineering leadership today. We'll evaluate your institutional objectives and draft a tailored technical execution roadmap.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                  <Link to="/contact">Talk to an Architect</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white">
                  <Link to="/solutions">Explore Industries</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
