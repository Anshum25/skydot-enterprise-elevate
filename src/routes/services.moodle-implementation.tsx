import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Server, Link as LinkIcon, Palette, Zap, Puzzle, Award, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock, Layers, Users, GraduationCap, Building2, Cpu, RefreshCw
} from "lucide-react";

export const Route = createFileRoute("/services/moodle-implementation")({
  component: MoodleImplementationPage,
});

const DEPLOYMENT_STAGES = [
  {
    week: "Week 01",
    title: "Cloud VPC Provisioning & Security Hardening",
    desc: "Deploying high-availability Linux web servers on AWS/Azure with separated database storage clusters, SSL configuration, and DDoS firewall exemptions.",
    deliverables: ["AWS / Azure VPC Topology", "SSL & Domain DNS Setup", "Redis In-Memory Cache Node", "Automated Hourly Snapshot Backup"]
  },
  {
    week: "Week 02",
    title: "Core Configuration & SSO Identity Sync",
    desc: "Installing stable Moodle releases and connecting SAML 2.0 or OAuth2 identity providers (Microsoft Entra ID, Okta, Google Workspace) with MFA support.",
    deliverables: ["SAML 2.0 / OAuth2 SSO Integration", "Automated Cohort HR Sync", "Role-Based Access Control (RBAC)", "GDPR Privacy API Setup"]
  },
  {
    week: "Week 03",
    title: "Theme Branding & Course Structure Setup",
    desc: "Applying your organization's exact typography, color system, and logo to create a consumer-grade dashboard with automated course enrollment pipelines.",
    deliverables: ["Bootstrap 5 Responsive Branding", "Dark Mode Theme Switcher", "Course Hierarchy & Category Rules", "SCORM & LTI Tool Connection"]
  },
  {
    week: "Week 04",
    title: "UAT Verification & 99.99% SLA Go-Live",
    desc: "Inviting stakeholder verification, running simulated concurrent user stress tests, and launching production with 30 days of hyper-care warranty support.",
    deliverables: ["Simulated Stress Test (10k Users)", "Administrator Training Workshop", "30-Day Hyper-Care Warranty", "24/7/365 DevOps Monitoring Activation"]
  }
];

const INTEGRATIONS_ECOSYSTEM = [
  { name: "Workday HRIS", type: "Bidirectional Sync", desc: "Automated employee onboarding, department transfers, and termination access revocation.", icon: Users },
  { name: "Microsoft Entra ID", type: "SSO & MFA", desc: "Enterprise Azure AD federation with biometric multi-factor authentication and group syncing.", icon: ShieldCheck },
  { name: "SAP SuccessFactors", type: "Talent Feed", desc: "Pushing completed compliance certifications and skill badges directly into SAP personnel files.", icon: Layers },
  { name: "Salesforce CRM", type: "Customer Enablement", desc: "Automatically enrolling customers into product training courses upon sales deal closure.", icon: LinkIcon },
  { name: "Oracle Campus SIS", type: "Academic Registry", desc: "Real-time synchronization of academic semesters, faculty assignments, and student rosters.", icon: GraduationCap },
  { name: "Turnitin & BigBlueButton", type: "LTI Tooling", desc: "Deep connector integration for automated AI plagiarism checking and virtual classrooms.", icon: Puzzle }
];

function MoodleImplementationPage() {
  const [activeStage, setActiveStage] = React.useState(0);
  const [deployType, setDeployType] = React.useState<"academic" | "corporate">("academic");

  return (
    <div className="bg-background min-h-screen">
      {/* UNIQUE HERO: TURNKEY DEPLOYMENT & STAGE TRACKER */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 border-b border-border bg-gradient-to-b from-surface via-background to-background">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-display font-semibold text-xs uppercase tracking-widest mb-6">
                <Server className="size-3.5" />
                <span>Turnkey Enterprise Deployment</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-heading tracking-tight leading-[1.12]">
                End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">Moodle Implementation</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-paragraph leading-relaxed font-normal max-w-2xl">
                Launch a high-availability, fully branded learning platform ready for production on day one. We handle Linux cloud provisioning, SSO identity integration, automated enrollment pipelines, and 24/7 SLA monitoring.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="h-13 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25">
                  <Link to="/contact">
                    Start Your Implementation <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 px-6 text-base border-border hover:border-primary hover:text-primary">
                  <Link to="/contact">Request Turnkey Proposal</Link>
                </Button>
              </div>

              {/* IMPLEMENTATION STATS STRIP */}
              <div className="mt-12 pt-8 border-t border-border/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-primary">3-6 Wks</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fast-Track Delivery</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-orange-500">99.99%</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Uptime SLA Guarantee</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-500">Zero</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Data Loss Protocols</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE 4-WEEK STAGE TRACKER */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl relative">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center justify-between">
                  <span>Turnkey Deployment Roadmap</span>
                  <span className="text-primary font-semibold">4-Stage Execution</span>
                </div>

                {/* STAGE TABS */}
                <div className="grid grid-cols-4 gap-1.5 mb-6">
                  {DEPLOYMENT_STAGES.map((st, idx) => {
                    const isSel = idx === activeStage;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStage(idx)}
                        className={`py-2 px-1 rounded-lg text-center font-bold text-xs transition-all border ${
                          isSel
                            ? "bg-primary border-primary text-primary-foreground shadow-md"
                            : "bg-surface border-border/60 text-muted-foreground hover:text-heading"
                        }`}
                      >
                        Wk 0{idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* STAGE DETAILS CARD */}
                <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-orange-950/20 via-card to-card relative overflow-hidden animate-fade-in">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/15 text-primary text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Clock className="size-3" />
                    <span>{DEPLOYMENT_STAGES[activeStage].week} Milestone</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-heading mb-2">
                    {DEPLOYMENT_STAGES[activeStage].title}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed mb-6">
                    {DEPLOYMENT_STAGES[activeStage].desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Verified Stage Deliverables:</span>
                    {DEPLOYMENT_STAGES[activeStage].deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-heading">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTEGRATIONS ECOSYSTEM GRID */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Enterprise Middleware</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
              Seamless Bidirectional Systems Integration
            </h2>
            <p className="mt-3 text-paragraph text-base sm:text-lg">
              No manual CSV uploads. We build automated real-time REST API connectors that sync your new employee hires and student enrollments instantly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS_ECOSYSTEM.map((intg, idx) => {
              const IconComp = intg.icon;
              return (
                <Card key={idx} className="p-7 border-border bg-card shadow-soft flex flex-col justify-between card-hover group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComp className="size-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                        {intg.type}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-heading mb-2 group-hover:text-primary transition-colors">
                      {intg.name}
                    </h3>
                    <p className="text-sm text-paragraph leading-relaxed mb-6">
                      {intg.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-primary">
                    <RefreshCw className="size-3.5" />
                    <span>Live Auto-Sync Enabled</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE DEPLOYMENT CUSTOMIZER */}
      <section className="section-y bg-background">
        <div className="container-page max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
              What's Included in Your Turnkey Package
            </h2>
            <p className="mt-3 text-paragraph text-base sm:text-lg">
              We customize the implementation stack based on whether you are deploying a campus LMS or an enterprise corporate workplace portal.
            </p>
            
            <div className="mt-8 inline-flex p-1 rounded-xl border border-border bg-surface">
              <button
                onClick={() => setDeployType("academic")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-display font-bold text-sm sm:text-base transition-all ${
                  deployType === "academic"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-heading"
                }`}
              >
                <GraduationCap className="size-4" /> Academic Campus Setup
              </button>
              <button
                onClick={() => setDeployType("corporate")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-display font-bold text-sm sm:text-base transition-all ${
                  deployType === "corporate"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-heading"
                }`}
              >
                <Building2 className="size-4" /> Corporate Workplace Setup
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {deployType === "academic" ? (
              <>
                <Card className="p-7 border-border bg-card shadow-soft">
                  <h3 className="font-display font-bold text-xl text-heading mb-4 flex items-center gap-2 text-primary">
                    <GraduationCap className="size-5" /> University SIS & Exam Hub
                  </h3>
                  <div className="space-y-3 text-sm text-paragraph">
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Native SIS integration (Banner, PowerSchool, Peoplesoft)</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Turnitin AI plagiarism checking & proctoring tools</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> 50,000+ concurrent exam taker database read-replicas</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Faculty H5P interactive courseware authoring suite</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> WCAG 2.1 AAA accessibility high-contrast theme</div>
                  </div>
                </Card>
                <Card className="p-7 border-border bg-card shadow-soft">
                  <h3 className="font-display font-bold text-xl text-heading mb-4 flex items-center gap-2 text-orange-500">
                    <Users className="size-5" /> Student & Faculty Handover
                  </h3>
                  <div className="space-y-3 text-sm text-paragraph">
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> Automated semester cohort enrollment rules</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> Custom branded mobile app for iOS and Android</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> Live instructional design workshops for academic deans</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> 30-day hyper-care launch support during mid-terms</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> 24/7 Level 3 Moodle engineering emergency hotline</div>
                  </div>
                </Card>
              </>
            ) : (
              <>
                <Card className="p-7 border-border bg-card shadow-soft">
                  <h3 className="font-display font-bold text-xl text-heading mb-4 flex items-center gap-2 text-primary">
                    <Building2 className="size-5" /> Moodle Workplace Multi-Tenancy
                  </h3>
                  <div className="space-y-3 text-sm text-paragraph">
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Multi-tenant domain isolation for corporate subsidiaries</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Workday & SAP SuccessFactors automated onboarding</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Dynamic organizational reporting hierarchies</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Automated ISO 27001 compliance expiration tracking</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-primary shrink-0" /> Microsoft Entra ID (Azure AD) biometric MFA login</div>
                  </div>
                </Card>
                <Card className="p-7 border-border bg-card shadow-soft">
                  <h3 className="font-display font-bold text-xl text-heading mb-4 flex items-center gap-2 text-orange-500">
                    <Award className="size-5" /> Corporate Management Handover
                  </h3>
                  <div className="space-y-3 text-sm text-paragraph">
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> Executive PowerBI / Tableau real-time ROI dashboards</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> Branded PDF certificate & QR badge verification engine</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> Managerial team progress monitoring portals</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> 30-day hyper-care launch warranty with DevOps tracking</div>
                    <div className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-orange-500 shrink-0" /> Dedicated SLA account manager & Slack channel</div>
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ SPECIFIC TO IMPLEMENTATION */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-heading">Implementation FAQ</h2>
            <p className="mt-2 text-paragraph text-base">Clear answers regarding timelines, hosting, and SLA warranties.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="i-1" className="border border-border rounded-xl px-6 bg-card shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-lg text-heading hover:no-underline py-5 text-left">
                Do we have to host on Skydot's cloud, or can you deploy onto our own AWS / Azure tenant?
              </AccordionTrigger>
              <AccordionContent className="text-paragraph text-base leading-relaxed pb-5">
                Either option works! Over 50% of our enterprise implementation clients prefer us to deploy directly onto their own internal AWS, Microsoft Azure, or GCP cloud VPCs. We configure the Kubernetes pods, Redis cache, and MySQL databases inside your infrastructure while providing remote 24/7 DevOps SLA management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="i-2" className="border border-border rounded-xl px-6 bg-card shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-lg text-heading hover:no-underline py-5 text-left">
                What happens during the 30-day hyper-care launch warranty?
              </AccordionTrigger>
              <AccordionContent className="text-paragraph text-base leading-relaxed pb-5">
                During the first 30 days post-launch, our senior DevOps engineers and solution architects monitor your server logs, database CPU load, and user authentication flows in real time. If any user login confusion or styling glitch occurs, we fix it immediately at zero additional cost under our launch SLA.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* UNIQUE CTA BANNER: THE TURNKEY PROPOSAL BOOKING */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-orange-950/40 via-[#0B0F19] to-[#0B0F19] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Ready to Launch Your Turnkey Learning Portal?
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect with our implementation engineering team today. We will evaluate your server requirements and provide a turnkey proposal with guaranteed timelines.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-13 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30">
                <Link to="/contact">Request Implementation Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white">
                <Link to="/services/moodle-customization">Explore Customization Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
