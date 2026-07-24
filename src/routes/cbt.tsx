import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Camera,
  ScanFace,
  Database,
  CalendarClock,
  LineChart,
  Users,
  ServerCog,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle2,
  FileQuestion,
  Shuffle,
  MonitorCheck,
  UserCheck,
  FileCheck,
  Award,
  BarChart,
  FileKey,
  DatabaseZap,
  ClipboardList,
  Edit,
  Play,
  FileBarChart,
  Activity,
  ArrowRightCircle,
  Building,
  GraduationCap,
  Briefcase,
  Landmark,
  School,
  Library,
  Settings,
  ArrowDown
} from "lucide-react";

export const Route = createFileRoute("/cbt")({
  head: () => ({
    meta: [
      { title: "CBT Platform | Skydot Infotech" },
      { name: "description", content: "Secure Computer-Based Testing Platform for Large-Scale Assessments" },
    ],
    links: [{ rel: "canonical", href: "/cbt" }],
  }),
  component: CbtPage,
});

const FEATURES = [
  { icon: Camera, title: "Remote Proctoring", desc: "Live monitoring from anywhere." },
  { icon: ScanFace, title: "AI-Assisted Proctoring", desc: "Automated anomaly detection." },
  { icon: Database, title: "Question Bank Management", desc: "Organized repository of items." },
  { icon: Shuffle, title: "Question Randomization", desc: "Unique exam sets for each candidate." },
  { icon: CalendarClock, title: "Exam Scheduling", desc: "Flexible slot and session planning." },
  { icon: Users, title: "Candidate Management", desc: "Bulk registration and verification." },
  { icon: Lock, title: "Secure Browser Support", desc: "Prevent unauthorized access." },
  { icon: MonitorCheck, title: "Live Monitoring", desc: "Real-time examiner dashboards." },
  { icon: Shield, title: "Role-Based Access", desc: "Granular permissions control." },
  { icon: FileCheck, title: "Result Processing", desc: "Automated grading and normalization." },
  { icon: Award, title: "Certificate Generation", desc: "Secure digital credentialing." },
  { icon: BarChart, title: "Detailed Analytics", desc: "Comprehensive performance reports." }
];

const SECURITY = [
  { icon: UserCheck, title: "Identity Verification", desc: "Candidate authentication and secure login." },
  { icon: MonitorCheck, title: "Browser Lockdown", desc: "Prevent unauthorized applications during exams." },
  { icon: DatabaseZap, title: "Data Encryption", desc: "Protect examination data using industry best practices." },
  { icon: ClipboardList, title: "Audit Logs", desc: "Maintain complete activity records for compliance." }
];

const WORKFLOW = [
  { step: "1", title: "Create Exam", desc: "Set rules and questions" },
  { step: "2", title: "Assign Candidates", desc: "Schedule and notify" },
  { step: "3", title: "Conduct Examination", desc: "Secure online delivery" },
  { step: "4", title: "Live Monitoring", desc: "AI and human proctoring" },
  { step: "5", title: "Automatic Evaluation", desc: "Instant result calculation" },
  { step: "6", title: "Reports & Certificates", desc: "Publish and issue" }
];

const BENEFITS = [
  { icon: ServerCog, title: "Scalable Infrastructure", desc: "Support thousands of concurrent candidates." },
  { icon: Activity, title: "Reliable Performance", desc: "Designed for uninterrupted examination experiences." },
  { icon: Settings, title: "Flexible Configuration", desc: "Support different exam formats and workflows." },
  { icon: FileBarChart, title: "Comprehensive Reporting", desc: "Generate meaningful insights for administrators." }
];

const USE_CASES = [
  { icon: Landmark, title: "Government Recruitment" },
  { icon: GraduationCap, title: "University Examinations" },
  { icon: Briefcase, title: "Corporate Certification" },
  { icon: FileKey, title: "Professional Licensing" },
  { icon: School, title: "Training Academies" },
  { icon: Library, title: "Educational Institutions" }
];

function CbtPage() {
  return (
    <div>
      {/* SECTION INTRODUCTION & DASHBOARD PREVIEW */}
      <section className="relative border-b border-border bg-background pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="container-page">
          <div className="grid xl:grid-cols-[1fr_1.1fr] gap-12 xl:gap-16 items-center">
            <div className="max-w-2xl">
              <span className="eyebrow">CBT Platform</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-heading">
                Secure Computer-Based Testing Platform for Large-Scale Assessments
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-paragraph">
                Our platform supports online examinations, recruitment tests, university assessments, employee certifications and professional examinations with enterprise-grade security, scalability and reliability.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
              </div>
            </div>

            {/* DASHBOARD PREVIEW */}
            <div className="relative mx-auto w-full max-w-[800px] xl:max-w-none">
              <div className="rounded-xl border border-border bg-surface p-2 shadow-elevated">
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-alt">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5 mr-4">
                        <span className="size-3 rounded-full bg-destructive/80" />
                        <span className="size-3 rounded-full bg-yellow-500/80" />
                        <span className="size-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="text-sm font-semibold text-heading">Skydot ExamControl</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="hidden sm:flex items-center gap-1.5"><CalendarClock className="size-4" /> 14:30 UTC</span>
                      <span className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">AD</span>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-4 sm:p-5 grid grid-cols-4 gap-4 bg-background">
                    {/* Sidebar / Menu */}
                    <div className="col-span-1 border-r border-border pr-4 hidden sm:flex flex-col gap-2">
                      {[
                        { name: "Active Exams", active: true },
                        { name: "Question Bank", active: false },
                        { name: "Exam Calendar", active: false },
                        { name: "Live Monitoring", active: false },
                        { name: "Results & Reports", active: false },
                        { name: "Invigilator Panel", active: false },
                        { name: "Analytics", active: false },
                        { name: "Notifications", active: false },
                      ].map((item, idx) => (
                        <div key={idx} className={`text-xs font-medium px-3 py-2 rounded-md ${item.active ? 'bg-primary/10 text-primary' : 'text-paragraph hover:bg-surface transition-colors cursor-default'}`}>
                          {item.name}
                        </div>
                      ))}
                    </div>

                    {/* Main Area */}
                    <div className="col-span-4 sm:col-span-3 flex flex-col gap-4">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="border border-border rounded-lg p-3 bg-surface">
                          <div className="text-[9px] sm:text-[10px] uppercase text-muted-foreground font-semibold">Active Candidates</div>
                          <div className="text-lg sm:text-xl font-bold text-heading mt-1">12,482</div>
                        </div>
                        <div className="border border-border rounded-lg p-3 bg-surface">
                          <div className="text-[9px] sm:text-[10px] uppercase text-muted-foreground font-semibold">Upcoming Exams</div>
                          <div className="text-lg sm:text-xl font-bold text-heading mt-1">8</div>
                        </div>
                        <div className="border border-border rounded-lg p-3 bg-surface">
                          <div className="text-[9px] sm:text-[10px] uppercase text-muted-foreground font-semibold">Live Alerts</div>
                          <div className="text-lg sm:text-xl font-bold text-destructive mt-1">14</div>
                        </div>
                      </div>

                      {/* Monitoring Preview */}
                      <div className="border border-border rounded-lg p-3 sm:p-4 flex-1">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-sm font-semibold text-heading">Live Monitoring Feed</div>
                          <Badge variant="outline" className="text-[9px] sm:text-[10px] text-primary border-primary bg-primary/5 px-1.5 py-0">PROCTORING ACTIVE</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-video bg-surface-alt border border-border rounded overflow-hidden relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Users className="size-6 text-muted-foreground/30" />
                              </div>
                              <div className="absolute top-1 left-1 bg-background/80 text-[9px] px-1 rounded border border-border">Cam {i}</div>
                              {i === 2 && (
                                <div className="absolute bottom-1 right-1 bg-destructive text-destructive-foreground text-[8px] sm:text-[9px] px-1 rounded">Motion Detected</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            title="Comprehensive Examination Features"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <Card key={f.title} className="p-5 border-border bg-card rounded-lg shadow-soft card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <f.icon className="size-5 text-primary shrink-0" />
                  <h4 className="font-display font-semibold text-sm text-heading leading-tight">{f.title}</h4>
                </div>
                <p className="text-xs text-paragraph leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="Built with Enterprise Security in Mind"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY.map((s) => (
              <div key={s.title} className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-card shadow-soft">
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary mb-5">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-heading mb-2">{s.title}</h3>
                <p className="text-sm text-paragraph">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            title="End-to-End Examination Workflow"
            align="center"
          />
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="hidden lg:grid grid-cols-6 gap-2 relative">
              {/* Desktop Horizontal Line */}
              <div className="absolute top-6 left-[8%] right-[8%] h-0.5 bg-border -z-10" />
              {WORKFLOW.map((w) => (
                <div key={w.title} className="flex flex-col items-center text-center group px-2">
                  <div className="grid size-12 place-items-center rounded-full bg-background border border-border text-primary font-mono font-bold text-sm shadow-card group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    {w.step}
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-sm text-heading">{w.title}</h3>
                  <p className="mt-1 text-xs text-paragraph">{w.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="lg:hidden flex flex-col items-center gap-6">
              {WORKFLOW.map((w, i) => (
                <div key={w.title} className="flex flex-col items-center text-center w-full max-w-xs">
                  <div className="grid size-12 place-items-center rounded-full bg-background border border-border text-primary font-mono font-bold text-sm shadow-card">
                    {w.step}
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-base text-heading">{w.title}</h3>
                  <p className="mt-1 text-sm text-paragraph">{w.desc}</p>
                  {i < WORKFLOW.length - 1 && (
                    <ArrowDown className="size-5 text-muted-foreground mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM BENEFITS */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="Platform Benefits"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex flex-col items-start p-6 rounded-xl border border-border bg-surface card-hover">
                <b.icon className="size-6 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg text-heading mb-2">{b.title}</h3>
                <p className="text-sm text-paragraph">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            title="Trusted Across Industries"
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {USE_CASES.map((u) => (
              <div key={u.title} className="flex flex-col items-center text-center p-5 rounded-lg border border-border bg-card shadow-soft card-hover">
                <u.icon className="size-6 text-muted-foreground mb-3" />
                <h4 className="font-display font-semibold text-xs text-heading">{u.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-card p-10 md:p-16 text-center shadow-elevated">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-heading tracking-tight max-w-3xl mx-auto">
              Looking for a Reliable Online Examination Platform?
            </h2>
            <p className="mt-5 text-paragraph text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Our CBT specialists can help you design and deploy a secure examination system tailored to your organization's requirements.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background">
                <Link to="/contact">Talk to Our Experts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
