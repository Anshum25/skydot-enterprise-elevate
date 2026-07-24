import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building2,
  Settings,
  ShieldCheck,
  Users,
  ArrowDown
} from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Success Stories | Skydot Infotech" },
      { name: "description", content: "Helping Organizations Build Better Learning Platforms" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: SuccessStoriesPage,
});

const CASE_STUDIES = [
  {
    industry: "Higher Education",
    title: "Modernizing a University Learning Platform",
    challenge: "The university needed to consolidate multiple learning systems into a single secure Moodle platform while improving performance and simplifying administration.",
    solution: "Designed a centralized Moodle implementation with custom integrations, streamlined course management and scalable cloud infrastructure.",
    technology: ["Moodle", "SSO", "Cloud Hosting", "REST APIs"],
    outcome: "Improved platform performance, simplified administration and delivered a consistent learning experience across departments.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
  },
  {
    industry: "Corporate Learning",
    title: "Enterprise Employee Learning Platform",
    challenge: "The organization required a centralized learning environment for employee onboarding, compliance training and certification management.",
    solution: "Implemented a customized Moodle solution integrated with enterprise authentication and reporting tools.",
    technology: ["Moodle", "LDAP", "Power BI", "Azure"],
    outcome: "Improved training management, simplified reporting and increased learning accessibility across the organization.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    industry: "Government",
    title: "Secure Computer-Based Examination Platform",
    challenge: "The department required a reliable online examination platform capable of supporting large-scale assessments while maintaining examination integrity.",
    solution: "Developed a secure CBT platform with candidate management, live monitoring and advanced reporting.",
    technology: ["Moodle", "CBT", "AI Monitoring", "Cloud Infrastructure"],
    outcome: "Delivered a secure examination environment with improved operational efficiency and scalable infrastructure.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
  },
  {
    industry: "Healthcare",
    title: "Digital Learning for Healthcare Professionals",
    challenge: "Healthcare professionals required structured learning, certification tracking and ongoing compliance education.",
    solution: "Implemented a Moodle learning platform with certification workflows and centralized reporting.",
    technology: ["Moodle", "Analytics", "Certificates", "Cloud Hosting"],
    outcome: "Improved certification management and enhanced access to continuing professional education.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  }
];

const STATS = [
  { label: "Enterprise Implementations", value: "250+" },
  { label: "Government Projects", value: "45+" },
  { label: "Corporate Learning Platforms", value: "120+" },
  { label: "University Solutions", value: "85+" }
];

const WHY_CLIENTS_SUCCEED = [
  { icon: Building2, title: "Business-Focused Planning", desc: "Every solution begins with understanding organizational objectives." },
  { icon: Settings, title: "Tailored Implementation", desc: "Solutions are customized to each client's operational requirements." },
  { icon: ShieldCheck, title: "Reliable Technology", desc: "Built using secure, scalable and modern technologies." },
  { icon: Users, title: "Long-Term Partnership", desc: "Continuous support and optimization after deployment." }
];

const JOURNEY = [
  "Business Discussion",
  "Requirement Analysis",
  "Solution Design",
  "Implementation",
  "Deployment",
  "Long-Term Support"
];

function SuccessStoriesPage() {
  return (
    <div>
      {/* SECTION INTRODUCTION */}
      <section className="relative border-b border-border bg-background pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Success Stories</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-heading">
              Helping Organizations Build Better Learning Platforms
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-paragraph">
              Every implementation is designed around business objectives, operational efficiency and long-term scalability rather than simply deploying software.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            {CASE_STUDIES.map((study) => (
              <Card key={study.title} className="overflow-hidden border-border bg-card flex flex-col h-full shadow-soft card-hover">
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-surface border-b border-border">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="object-cover w-full h-full object-center"
                    loading="lazy"
                  />
                  <Badge variant="outline" className="absolute top-4 left-4 bg-background/95 backdrop-blur shadow-sm border-border text-heading font-medium px-3 py-1">
                    {study.industry}
                  </Badge>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-2xl text-heading leading-snug mb-6">{study.title}</h3>
                  
                  <div className="space-y-5 flex-1">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5">Business Challenge</div>
                      <p className="text-sm text-paragraph leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5">Solution Delivered</div>
                      <p className="text-sm text-paragraph leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Technology Used</div>
                      <div className="flex flex-wrap gap-2">
                        {study.technology.map(tech => (
                          <span key={tech} className="px-2.5 py-1 rounded-md bg-surface border border-border text-[11px] font-medium text-heading">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border mt-4">
                      <div className="text-[11px] uppercase tracking-wider font-bold text-primary mb-1.5">Business Outcome</div>
                      <p className="text-sm font-medium text-heading leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-5 border-t border-border">
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-heading hover:text-primary transition-colors group">
                      Learn More <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHTS (STATS) */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STATS.map(stat => (
              <div key={stat.label} className="p-6 border border-border rounded-xl bg-surface text-center shadow-soft">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-heading">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS SUCCEED */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            title="Why Clients Succeed"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CLIENTS_SUCCEED.map((w) => (
              <div key={w.title} className="flex flex-col items-start p-6 rounded-xl border border-border bg-card shadow-soft card-hover">
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary mb-5">
                  <w.icon className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-heading mb-2">{w.title}</h3>
                <p className="text-sm text-paragraph">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT JOURNEY */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="Client Journey"
            align="center"
          />
          <div className="mt-14 max-w-5xl mx-auto">
            {/* Desktop Horizontal Workflow */}
            <div className="hidden lg:flex items-center justify-between relative px-4">
              <div className="absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-0.5 bg-border -z-10" />
              {JOURNEY.map((step, i) => (
                <div key={step} className="flex flex-col items-center gap-4 bg-background group px-2">
                  <div className="grid size-10 place-items-center rounded-full border-2 border-primary bg-background text-primary font-bold shadow-soft">
                    {i + 1}
                  </div>
                  <div className="text-sm font-semibold text-heading max-w-[120px] text-center">{step}</div>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Workflow */}
            <div className="lg:hidden flex flex-col items-center gap-6">
              {JOURNEY.map((step, i) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="grid size-10 place-items-center rounded-full border-2 border-primary bg-background text-primary font-bold shadow-soft">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-base text-heading">{step}</h3>
                  {i < JOURNEY.length - 1 && (
                    <ArrowDown className="size-5 text-muted-foreground mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="rounded-xl border border-border bg-card p-10 md:p-16 text-center shadow-elevated">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-heading tracking-tight max-w-3xl mx-auto">
              Let's Build Your Success Story
            </h2>
            <p className="mt-5 text-paragraph text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you're modernizing an existing learning platform or starting a new implementation, our team can help you design a solution aligned with your business goals.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
