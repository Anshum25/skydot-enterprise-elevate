import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  GraduationCap, Building, Building2, Heart, Factory, Landmark, Shield, 
  Globe, BookOpen, Users, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, 
  Database, Sparkles, Cpu, Layers, Zap, BarChart, Server, Lock, Brain, Link as LinkIcon
} from "lucide-react";

export const Route = createFileRoute("/solutions/$solutionId")({
  component: SolutionDetailPage,
});

interface SolutionData {
  title: string;
  subtitle: string;
  eyebrow: string;
  badge: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  overview: string[];
  capabilities: { title: string; description: string; icon: any }[];
  useCases: { title: string; desc: string }[];
  faq: [string, string][];
}

const SOLUTIONS_DATA: Record<string, SolutionData> = {
  "education": {
    title: "Education",
    subtitle: "Support every type of learner, undergraduate, continuing education, non-degree, and professional development, all within one LMS.",
    eyebrow: "Academic Sector Solution",
    badge: "Moodle Education",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Concurrent Student Capacity", value: "100,000+" },
      { label: "SIS Sync Reliability", value: "99.99%" },
      { label: "Faculty Adoption Rate", value: "95%" }
    ],
    overview: [
      "In higher education, the LMS is the heartbeat of the digital campus. During mid-term and final examination periods, thousands of students simultaneously submit quizzes, download lecture materials, and participate in discussion forums. Legacy university servers frequently buckle under this pressure.",
      "Inspired by world-class university deployments on Moodle.com, we engineer resilient, high-concurrency academic learning portals. We integrate Moodle natively with Student Information Systems, implement automated anti-cheating proctoring tools, and design accessible WCAG AAA compliant interfaces for diverse student bodies."
    ],
    capabilities: [
      { title: "Automated SIS & Campus ERP Integration", description: "Real-time bidirectional syncing of academic semesters, course catalogs, student enrollments, and registrar gradebooks.", icon: "Layers" },
      { title: "High-Concurrency Online Examination Hub", description: "Load-balanced database architectures designed specifically to handle 50,000+ simultaneous quiz submissions without slowdowns.", icon: "Server" },
      { title: "AI Tutor & Personalized Learning Paths", description: "Integrating custom LLM study assistants that help students review lecture transcripts and practice for exams 24/7.", icon: "Sparkles" },
      { title: "Plagiarism & AI Proctoring Integration", description: "Seamless connectors for automated facial recognition verification.", icon: "Lock" },
      { title: "Interactive H5P & Multimedia Courseware", description: "Empowering professors with over 40 interactive video, branching scenario, and gamified assignment types.", icon: "BookOpen" },
      { title: "WCAG 2.1 AAA Accessibility Compliance", description: "Screen-reader optimized layouts, high-contrast themes, and full keyboard navigation for inclusive campus learning.", icon: "CheckCircle2" }
    ],
    useCases: [
      { title: "University-Wide Exam Weeks", desc: "Executing high-stakes online examinations across 15 faculties with zero server timeouts and real-time proctoring." },
      { title: "Hybrid Lecture & Flipped Classrooms", desc: "Delivering asynchronous pre-lecture videos and automated quizzes before students attend in-person seminar discussions." },
      { title: "Multi-Campus Consortium Management", desc: "Hosting affiliated regional colleges under a single Moodle Workplace database with strict data and branding isolation." }
    ],
    faq: [
      ["How do you prevent database crashes during mid-term exam periods?", "We implement Redis session clusters, MySQL read-replicas, and auto-scaling web nodes that multiply compute capacity automatically 15 minutes before scheduled exams begin."],
      ["Can professors import existing course cartridges from Blackboard or Canvas?", "Yes. Our automated migration tools ingest IMS-CC packages and convert quizzes, rubrics, and discussion prompts into native Moodle formats."]
    ]
  },
  "workplace-learning": {
    title: "Workplace Learning",
    subtitle: "Train and upskill your workforce with a suite of automation, reporting, and virtual learning tools that save time and drive results.",
    eyebrow: "Enterprise Solution",
    badge: "Moodle Workplace",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Onboarding Time Saved", value: "65%" },
      { label: "HRIS Sync Accuracy", value: "100%" },
      { label: "Compliance Audit Rate", value: "99.8%" }
    ],
    overview: [
      "Modern enterprises need more than just a course repository; they require an intelligent talent development engine that aligns employee growth with corporate strategy.",
      "We deploy Moodle Workplace to deliver consumer-grade learning experiences for corporate employees. We automate onboarding workflows, build personalized management dashboards, and enforce mandatory annual compliance certifications with automated email notifications and managerial reporting."
    ],
    capabilities: [
      { title: "Automated HRIS Onboarding Workflows", description: "New hires are automatically assigned role-specific security, culture, and technical training the moment they enter your HR system.", icon: "Users" },
      { title: "Dynamic Organizational Hierarchies", description: "Mirroring your company's exact departmental, regional, and reporting structures for automated team reporting.", icon: "Building" },
      { title: "Automated Compliance & Recertification", description: "Setting automated expiration timers for mandatory courses with recurring renewal reminders.", icon: "Clock" },
      { title: "Manager & Executive PowerBI Dashboards", description: "Real-time analytics showing team completion rates, skill gap heatmaps, and training ROI metrics.", icon: "BarChart" },
      { title: "Social Learning & Peer Communities", description: "Gamified leaderboards, internal subject-matter expert forums, and collaborative peer assessment rubrics.", icon: "Award" },
      { title: "Single Sign-On (SSO)", description: "Seamless, secure login via Microsoft Entra ID, Okta, or Google Workspace with multi-factor verification.", icon: "ShieldCheck" }
    ],
    useCases: [
      { title: "Global Enterprise Onboarding", desc: "Standardizing orientation for 5,000+ new hires annually across localized languages." },
      { title: "Leadership & Succession Programs", desc: "Creating exclusive, invitation-only management training academies with mentor evaluations and 360-degree feedback." },
      { title: "Partner & Customer Training Portals", desc: "Extending your training ecosystem to external B2B distributors and customers using multi-tenant portal isolation." }
    ],
    faq: [
      ["How does Moodle Workplace differ from standard Moodle for corporations?", "Workplace includes advanced corporate features like multi-tenancy, automated dynamic rules, report builder, organizational hierarchies, and automated certificate re-issuance without needing third-party add-ons."]
    ]
  },
  "government": {
    title: "Government",
    subtitle: "Meet regulatory and compliance standards with a scalable and secure LMS for public sector and government agencies.",
    eyebrow: "Public Sector Solution",
    badge: "Sovereign Cloud Ready",
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Data Sovereignty", value: "100%" },
      { label: "Security Encryption", value: "AES-256" },
      { label: "Civil Servants Served", value: "2M+" }
    ],
    overview: [
      "Government bodies and public sector agencies operate under stringent data sovereignty laws, rigorous cybersecurity mandates, and immense user scale. Training millions of civil servants, municipal officers, and emergency responders requires an infrastructure where data privacy is absolute.",
      "We design sovereign, military-grade Moodle architectures deployed on government-approved cloud regions. We enforce end-to-end encryption, strict role-based access controls, and full compliance with national digital privacy standards."
    ],
    capabilities: [
      { title: "Sovereign Cloud Deployment", description: "Hosting your platform within national borders with zero cross-border data transfer, complying strictly with data residency laws.", icon: "Shield" },
      { title: "Military-Grade AES-256 Encryption", description: "Encrypting all user records, exam banks, and video archives at rest and in transit with automated key rotation.", icon: "Lock" },
      { title: "Massive-Scale Civil Service Academies", description: "Architecting databases capable of simultaneously training 500,000+ public employees across national ministries.", icon: "Server" },
      { title: "Strict Role-Based Access Control (RBAC)", description: "Granular permission definitions ensuring departmental administrators can only access records within their specific ministry.", icon: "Users" },
      { title: "Automated Audit Trails & Forensics", description: "Immutable activity logging capturing every login, grade modification, and file download for regulatory compliance audits.", icon: "Database" },
      { title: "Accessibility & Multilingual Support", description: "Full localization into regional languages and compliance with national public sector digital accessibility standards.", icon: "Globe" }
    ],
    useCases: [
      { title: "National Civil Service Training Academy", desc: "Delivering standardized administrative, legal, and ethics certifications to all government employees nationwide." },
      { title: "Emergency & Disaster Response Readiness", desc: "Rapid deployment of time-critical safety protocols and incident management simulations to first responders." },
      { title: "Municipal E-Governance Upskilling", desc: "Training local city council staff on digital transformation workflows and cybersecurity best practices." }
    ],
    faq: [
      ["Can you deploy Moodle on our internal, on-premise government servers?", "Yes. Our DevOps engineers specialize in deploying containerized Kubernetes or Docker installations directly onto private government data centers and air-gapped networks."]
    ]
  },
  "vocational-training": {
    title: "Vocational Training",
    subtitle: "Bring your vocational education and training courses online with Moodle LMS.",
    eyebrow: "Vocational Solution",
    badge: "Skills Focused",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Skill Badges Issued", value: "500K+" },
      { label: "Offline Accessibility", value: "100%" },
      { label: "Practical Assessments", value: "Seamless" }
    ],
    overview: [
      "Vocational training requires a unique approach to learning, combining theoretical knowledge with practical, hands-on skill demonstrations.",
      "Moodle LMS provides the flexibility to blend online coursework with practical assessments, enabling vocational institutions to deliver comprehensive training programs that prepare learners for the real world."
    ],
    capabilities: [
      { title: "Competency-Based Learning", description: "Map courses to specific industry competencies and track learner progress against them.", icon: "Target" },
      { title: "Practical Assessment Workflows", description: "Allow instructors to evaluate hands-on skills through video submissions or in-person grading rubrics.", icon: "CheckSquare" },
      { title: "Digital Badging & Micro-Credentials", description: "Issue verifiable digital badges for acquired skills to enhance learner employability.", icon: "Award" },
      { title: "Mobile & Offline Learning", description: "Ensure learners can access training materials on the go, even in areas with poor internet connectivity.", icon: "Smartphone" },
      { title: "Interactive Multimedia Content", description: "Engage learners with rich multimedia content, simulations, and interactive tutorials.", icon: "Video" },
      { title: "Apprenticeship Tracking", description: "Monitor and manage apprenticeship programs, linking on-the-job training with academic progress.", icon: "Briefcase" }
    ],
    useCases: [
      { title: "Trade Skills Certification", desc: "Providing online theoretical modules and tracking practical hours for electricians, plumbers, and carpenters." },
      { title: "Healthcare Assistant Training", desc: "Combining online medical terminology courses with clinical placement evaluations." },
      { title: "Culinary Arts Institutes", desc: "Delivering recipe tutorials and evaluating student cooking techniques via video submissions." }
    ],
    faq: [
      ["How can Moodle handle practical, hands-on assessments?", "Instructors can create assignments that require students to upload videos demonstrating their skills, or use detailed grading rubrics to evaluate students during in-person practical sessions."]
    ]
  },
  "moodle-and-ai": {
    title: "Moodle and AI",
    subtitle: "Learn about Moodle's human-centred approach to AI and our commitment to transparency, equality, and ethical practice.",
    eyebrow: "AI Innovation",
    badge: "Human-Centred",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "AI Tools Integrated", value: "Growing" },
      { label: "Ethical Standards", value: "Strict" },
      { label: "Educator Control", value: "Maximized" }
    ],
    overview: [
      "Artificial Intelligence is transforming education, but it must be implemented ethically and thoughtfully.",
      "Moodle's approach to AI is human-centred, ensuring that AI tools empower educators rather than replace them, while prioritizing data privacy, transparency, and equity for all learners."
    ],
    capabilities: [
      { title: "AI-Assisted Content Creation", description: "Help educators generate course outlines, quiz questions, and study materials efficiently.", icon: "Wand2" },
      { title: "Personalized Learning Pathways", description: "Use AI to adapt content and provide customized recommendations based on learner performance.", icon: "Route" },
      { title: "Intelligent Tutoring Systems", description: "Provide learners with 24/7 support and immediate feedback on common queries.", icon: "Bot" },
      { title: "Automated Grading & Feedback", description: "Assist instructors in grading assignments and providing constructive feedback more rapidly.", icon: "CheckCircle" },
      { title: "Accessibility Enhancements", description: "Leverage AI for automatic transcription, translation, and image descriptions to improve accessibility.", icon: "Ear" },
      { title: "Ethical AI Framework", description: "Ensure all AI integrations adhere to strict standards for privacy, bias reduction, and transparency.", icon: "Shield" }
    ],
    useCases: [
      { title: "Automated Course Generation", desc: "Educators use AI tools within Moodle to quickly draft initial course structures and content." },
      { title: "Adaptive Quizzing", desc: "Quizzes that automatically adjust their difficulty based on the student's previous answers." },
      { title: "Multilingual Support", desc: "Real-time AI translation of forum posts to facilitate global collaboration among learners." }
    ],
    faq: [
      ["Is my data safe when using AI features in Moodle?", "Yes. Moodle is committed to data privacy. Any AI integration must comply with our strict data protection standards, ensuring learner data is not misused."]
    ]
  }
};

function SolutionDetailPage() {
  const { solutionId } = Route.useParams();
  
  // Fallback if URL slug is not in map
  const data: SolutionData = SOLUTIONS_DATA[solutionId] || {
    title: solutionId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + " Industry Learning Ecosystem",
    subtitle: "Bespoke enterprise learning architecture, regulatory compliance automation, and high-concurrency Moodle solutions tailored specifically for your sector.",
    eyebrow: "Skydot Industry Solution",
    badge: "Sector Specialist",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Sector Compliance", value: "100%" },
      { label: "Deployment SLA", value: "99.99%" },
      { label: "Custom Workflows", value: "Bespoke" }
    ],
    overview: [
      "Every industry faces unique operational constraints, regulatory mandates, and learner expectations. Off-the-shelf software genericizes these challenges, forcing your organization to compromise on workflow efficiency and compliance verification.",
      "Skydot designs domain-specific Moodle learning ecosystems tailored to the exact requirements of your industry. Whether you need air-gapped security, mobile shop-floor kiosks, SIS university integration, or e-commerce monetization, our solution architects deliver turnkey excellence."
    ],
    capabilities: [
      { title: "Sector-Specific Compliance Tracking", description: "Automated certification renewal workflows tailored to your industry's legal standards.", icon: ShieldCheck },
      { title: "High-Concurrency Cloud Architecture", description: "Fault-tolerant server clusters engineered to handle massive peak usage without slowdowns.", icon: Server },
      { title: "System of Record Integration", description: "Bidirectional automated syncing with your existing ERP, HRIS, CRM, or SIS database.", icon: Layers },
      { title: "Custom UI/UX Brand Experience", description: "Consumer-grade interfaces with dark mode and WCAG accessibility designed for your workforce.", icon: Sparkles },
      { title: "AI-Powered Learning Insights", description: "Predictive analytics and PowerBI executive dashboards to track real ROI and skill gaps.", icon: BarChart },
      { title: "24/7/365 Dedicated SLA Support", description: "Round-the-clock proactive monitoring and emergency resolution from senior engineers.", icon: Clock }
    ],
    useCases: [
      { title: "Enterprise Workforce Transformation", desc: "Standardizing technical and compliance training across distributed regional branches with centralized reporting." },
      { title: "High-Stakes Certification Testing", desc: "Executing secure, proctored online certification exams with automated grading and digital badging." },
      { title: "Partner & Distributor Enablement", desc: "Extending your training portal to external B2B partners using multi-tenant portal isolation." }
    ],
    faq: [
      ["How quickly can Skydot deploy a custom solution for our industry?", "For standard enterprise configurations, our turnkey deployment takes between 3 to 6 weeks, including server provisioning, SSO setup, theme branding, and initial administrator training."],
      ["Do you provide custom Service Level Agreements (SLAs)?", "Yes, we structure financially backed SLAs tailored to your organization's specific uptime and support response time requirements."]
    ]
  };

  return (
    <div className="bg-background min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border bg-gradient-to-b from-surface via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-display font-semibold text-xs uppercase tracking-wider mb-6 animate-fade-in">
                <Sparkles className="size-3.5" />
                <span>{data.eyebrow} · {data.badge}</span>
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
                    Schedule Sector Workshop <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base border-border hover:border-primary/50">
                  <Link to="/contact">Request RFP / Proposal</Link>
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
                    <span>Industry Specialist Engineering</span>
                  </div>
                  <h3 className="text-white font-display font-bold text-xl sm:text-2xl">
                    Tailored for Your exact Workflows
                  </h3>
                  <p className="mt-1 text-slate-300 text-xs sm:text-sm line-clamp-2">
                    We adapt Moodle's powerful core engine to comply with your sector's regulatory and operational standards.
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
              Industry Challenge & Strategic Solution
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

      {/* CAPABILITIES GRID */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="Engineered Specifically for Your Sector"
            description="Explore the architectural and functional capabilities we deploy to solve your industry's training bottlenecks."
            align="center"
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.capabilities.map((cap, idx) => {
              const IconComponent = cap.icon || CheckCircle2;
              return (
                <Card key={idx} className="p-7 border-border bg-card shadow-soft flex flex-col h-full card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <IconComponent className="size-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-heading mb-3 group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm sm:text-base text-paragraph leading-relaxed flex-1">
                    {cap.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL-WORLD USE CASES */}
      <section className="section-y bg-background">
        <div className="container-page">
          <SectionHeader
            eyebrow="Proven Impact"
            title="Real-World Deployment Scenarios"
            description="See how leading organizations in your sector leverage our architecture to transform learning outcomes."
            align="left"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {data.useCases.map((uc, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-border bg-card shadow-card flex flex-col justify-between group hover:border-primary/50 transition-all">
                <div>
                  <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary font-bold text-base mb-6">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-xl text-heading mb-3 group-hover:text-primary transition-colors">
                    {uc.title}
                  </h4>
                  <p className="text-sm sm:text-base text-paragraph leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
                  <span>Verified Architecture</span>
                  <CheckCircle2 className="size-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & SECURITY BANNER */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 lg:p-16 shadow-elevated">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Uncompromised Security</div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
                  Built to Satisfy the Strictest Regulatory Auditors
                </h2>
                <p className="mt-4 text-paragraph text-base sm:text-lg leading-relaxed">
                  We don't cut corners on compliance. Whether you are facing ISO 27001, HIPAA, OSHA, SOC2, or government data residency inspections, our architecture keeps your data protected.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "ISO 27001 Certified Engineering",
                    "End-to-End AES-256 Encryption",
                    "Tamper-Proof Immutable Audit Logs",
                    "Single Sign-On & Biometric MFA",
                    "Dedicated Sovereign Cloud Regions",
                    "Automated Vulnerability Patching"
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
                <h4 className="font-display font-bold text-xl mb-3 text-orange-400">Need a Sector Compliance Review?</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Our solution architects can join your next IT or compliance audit meeting to present our security topology and data isolation documentation directly to your inspectors.
                </p>
                <div className="space-y-3 mb-8 text-xs text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Full SOC2 / ISO architecture whitepapers</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Custom data sovereignty agreements</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Zero vendor lock-in open architecture</div>
                </div>
                <Button asChild size="lg" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  <Link to="/contact">Schedule Compliance Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION FAQ SECTION */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page max-w-4xl">
          <SectionHeader
            eyebrow="Sector FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions regarding deployment timelines, integration capabilities, and ongoing support for your sector."
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
                Ready to Transform Your {data.title.split(' ')[0]} Training?
              </h2>
              <p className="mt-5 text-slate-300 text-lg sm:text-xl leading-relaxed">
                Connect with our specialized industry architects today. We will evaluate your current infrastructure and provide a custom blueprint and RFP response.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                  <Link to="/contact">Speak with a Sector Architect</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white">
                  <Link to="/services">Explore Moodle Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
