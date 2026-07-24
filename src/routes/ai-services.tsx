import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bot,
  MessageSquare,
  Search,
  Compass,
  FileQuestion,
  MessageCircle,
  Languages,
  LineChart,
  FileText,
  CheckSquare,
  BarChart4,
  Activity,
  Target,
  FileBarChart,
  Lightbulb,
  Clock,
  ThumbsUp,
  TrendingUp,
  Link as LinkIcon,
  LayoutDashboard
} from "lucide-react";

export const Route = createFileRoute("/ai-services")({
  head: () => ({
    meta: [
      { title: "AI-Powered Learning & Analytics | Skydot Infotech" },
      { name: "description", content: "Making Enterprise Learning Smarter with Artificial Intelligence" },
    ],
    links: [{ rel: "canonical", href: "/ai-services" }],
  }),
  component: AiAnalyticsPage,
});

const AI_CAPABILITIES = [
  { icon: Bot, title: "AI Learning Assistant", desc: "Provide contextual guidance and learner support inside courses." },
  { icon: MessageSquare, title: "AI Chatbot", desc: "Answer common learner and administrator questions instantly." },
  { icon: Search, title: "Smart Search", desc: "Find courses, documents and resources using semantic search." },
  { icon: Compass, title: "Adaptive Learning", desc: "Recommend personalized learning paths based on learner progress." },
  { icon: FileQuestion, title: "Question Generator", desc: "Assist instructors in creating assessments more efficiently." },
  { icon: MessageCircle, title: "AI Feedback", desc: "Generate personalized feedback for assignments and assessments." },
  { icon: Languages, title: "Content Translation", desc: "Translate learning materials into multiple languages." },
  { icon: LineChart, title: "Predictive Learning Insights", desc: "Identify learners who may require additional support." },
  { icon: FileText, title: "Document OCR", desc: "Digitize printed educational content into searchable resources." },
  { icon: CheckSquare, title: "AI-Assisted Assessment", desc: "Support faster evaluation of descriptive responses." }
];

const ANALYTICS_FEATURES = [
  { icon: BarChart4, title: "Course Completion Tracking", desc: "Track learner progress across all programs." },
  { icon: Activity, title: "Engagement Analytics", desc: "Measure participation and learning activity." },
  { icon: Target, title: "Competency Monitoring", desc: "Understand workforce skill development." },
  { icon: FileBarChart, title: "Executive Reporting", desc: "Generate reports for administrators and leadership teams." }
];

const BUSINESS_BENEFITS = [
  { icon: Lightbulb, title: "Improve Learning Outcomes", desc: "Deliver personalized experiences." },
  { icon: Clock, title: "Reduce Administrative Work", desc: "Automate repetitive learning processes." },
  { icon: ThumbsUp, title: "Increase Engagement", desc: "Encourage active learner participation." },
  { icon: TrendingUp, title: "Support Better Decisions", desc: "Use analytics to continuously improve learning programs." }
];

const INTEGRATIONS = [
  "ERP", "HRMS", "CRM", "Power BI", "Microsoft Teams", "Google Workspace", "Zoom", "Open APIs"
];

function AiAnalyticsPage() {
  return (
    <div>
      {/* SECTION INTRODUCTION */}
      <section className="relative border-b border-border bg-background pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow">AI-Powered Learning</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-heading">
              Making Enterprise Learning Smarter with Artificial Intelligence
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-paragraph">
              Artificial intelligence can improve learner engagement, automate repetitive tasks, enhance decision-making and provide personalized learning experiences within Moodle environments. We focus on practical, enterprise-ready applications that deliver real business value.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: AI CAPABILITIES */}
      <section className="section-y bg-surface border-b border-border">
        <div className="container-page">
          <SectionHeader
            title="AI Capabilities"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {AI_CAPABILITIES.map((cap) => (
              <Card key={cap.title} className="p-5 border-border bg-card rounded-lg shadow-soft card-hover flex flex-col h-full">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary mb-4">
                  <cap.icon className="size-5" />
                </div>
                <h4 className="font-display font-semibold text-sm text-heading mb-2 leading-tight">{cap.title}</h4>
                <p className="text-xs text-paragraph leading-relaxed flex-1">{cap.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: LEARNING ANALYTICS */}
      <section className="section-y bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-heading">
                Turn Learning Data into Actionable Insights
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-paragraph">
                Organizations can effectively monitor learner progress, measure engagement and improve training outcomes through comprehensive, data-driven dashboards.
              </p>
            </div>

            {/* ANALYTICS DASHBOARD PREVIEW */}
            <div className="relative mx-auto w-full max-w-[800px] xl:max-w-none">
              <div className="rounded-xl border border-border bg-surface p-2 shadow-elevated">
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-alt">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5 mr-4">
                        <span className="size-3 rounded-full bg-border" />
                        <span className="size-3 rounded-full bg-border" />
                        <span className="size-3 rounded-full bg-border" />
                      </div>
                      <div className="text-sm font-semibold text-heading flex items-center gap-2"><LayoutDashboard className="size-4 text-muted-foreground" /> Learning Analytics</div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 grid grid-cols-6 gap-4 bg-background">
                    {/* Top Stats */}
                    <div className="col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { label: "Active Learners", val: "18,294", change: "+12%" },
                        { label: "Course Completion", val: "76.4%", change: "+3.2%" },
                        { label: "Learning Hours", val: "42,105", change: "+18%" },
                        { label: "Certifications", val: "3,892", change: "+5%" },
                      ].map(stat => (
                        <div key={stat.label} className="border border-border rounded-lg p-3 bg-surface">
                          <div className="text-[9px] sm:text-[10px] uppercase text-muted-foreground font-semibold">{stat.label}</div>
                          <div className="flex items-end justify-between mt-1">
                            <div className="text-lg sm:text-xl font-bold text-heading">{stat.val}</div>
                            <div className="text-[9px] sm:text-[10px] text-green-600 font-medium">{stat.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main Charts Area */}
                    <div className="col-span-6 sm:col-span-4 border border-border rounded-lg p-4 bg-surface flex flex-col">
                      <div className="text-sm font-semibold text-heading mb-4">Enrollment & Engagement Trends</div>
                      <div className="h-32 sm:h-40 w-full flex items-end gap-1.5 sm:gap-2 px-1 sm:px-2 mt-auto">
                        {/* CSS Bar Chart */}
                        {[35, 42, 38, 55, 62, 70, 65, 80, 85, 75, 90, 95].map((h, i) => (
                          <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative" style={{ height: `${h}%` }}>
                            <div className="absolute top-0 left-0 w-full bg-primary/80 rounded-t-sm" style={{ height: '3px' }}></div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-3 text-[9px] sm:text-[10px] text-muted-foreground px-1 sm:px-2">
                        <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
                      </div>
                    </div>

                    {/* Side panel */}
                    <div className="col-span-6 sm:col-span-2 flex flex-col gap-4">
                      <div className="border border-border rounded-lg p-4 bg-surface flex-1">
                        <div className="text-sm font-semibold text-heading mb-3">Department Performance</div>
                        <div className="space-y-3">
                          {[
                            { name: "Engineering", score: 92 },
                            { name: "Sales", score: 85 },
                            { name: "Marketing", score: 78 },
                            { name: "HR", score: 88 }
                          ].map(dept => (
                            <div key={dept.name} className="flex flex-col gap-1.5">
                              <div className="flex justify-between text-[10px] sm:text-[11px] font-medium text-heading">
                                <span>{dept.name}</span><span>{dept.score}%</span>
                              </div>
                              <div className="w-full bg-border rounded-full h-1.5">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: `${dept.score}%` }}></div>
                              </div>
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

          {/* ANALYTICS FEATURES GRID */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ANALYTICS_FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start p-6 border border-border bg-surface rounded-xl shadow-soft">
                <f.icon className="size-6 text-primary mb-4" />
                <h4 className="font-display font-semibold text-base text-heading mb-2">{f.title}</h4>
                <p className="text-sm text-paragraph">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page">
          <SectionHeader
            title="Business Benefits"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_BENEFITS.map((b) => (
              <Card key={b.title} className="p-6 border-border bg-card rounded-lg shadow-card text-center flex flex-col items-center">
                <div className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary mb-4">
                  <b.icon className="size-5" />
                </div>
                <h4 className="font-display font-semibold text-base text-heading mb-2">{b.title}</h4>
                <p className="text-sm text-paragraph">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION NOTE */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight text-heading">
              Designed to Work with Your Existing Systems
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
              {INTEGRATIONS.map(int => (
                <div key={int} className="px-5 py-2.5 rounded-full border border-border bg-surface text-sm font-medium text-heading flex items-center gap-2">
                  <LinkIcon className="size-4 text-primary" />
                  {int}
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
              Ready to Build a Smarter Learning Platform?
            </h2>
            <p className="mt-5 text-paragraph text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Discover how AI and analytics can improve learning experiences while giving your organization deeper operational insights.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/contact">Explore AI Solutions</Link>
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
