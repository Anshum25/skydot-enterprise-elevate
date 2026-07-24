import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Globe,
  User,
  Quote
} from "lucide-react";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Client Confidence | Dynamic Pixel" },
      { name: "description", content: "Trusted by Organizations Building Modern E-Learning Platforms" },
    ],
    links: [{ rel: "canonical", href: "/trust" }],
  }),
  component: TrustPage,
});

const TESTIMONIALS = [
  {
    name: "Dr. Ananya Rao",
    org: "University",
    designation: "Director of Educational Technology",
    feedback: "Dynamic Pixel completely transformed our digital learning infrastructure. Their team didn't just provide content; they engineered a scalable, engaging ecosystem that seamlessly integrates with our curriculum."
  },
  {
    name: "Michael Chen",
    org: "Corporate",
    designation: "VP of Learning & Development",
    feedback: "The transparency and technical expertise provided by Dynamic Pixel gave us the confidence we needed to migrate our global compliance training. The animated videos were highly engaging."
  },
  {
    name: "Elena Rodriguez",
    org: "Healthcare",
    designation: "Chief Medical Training Officer",
    feedback: "Quality and accuracy are non-negotiable in healthcare. Dynamic Pixel delivered compliant e-learning content that our professionals can rely on. Their ongoing support has been outstanding."
  }
];

const TRUST_REASONS = [
  { icon: Building2, title: "Enterprise Expertise", desc: "Specialized Moodle engineering experience." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Regular updates throughout the project lifecycle." },
  { icon: ShieldCheck, title: "Security First", desc: "Best practices for secure enterprise deployments." },
  { icon: CheckCircle2, title: "Reliable Delivery", desc: "Structured implementation methodology." },
  { icon: Wrench, title: "Long-Term Support", desc: "Continuous maintenance and upgrades." },
  { icon: Globe, title: "Open Technology", desc: "Built on open standards without vendor lock-in." }
];

const FAQS = [
  { q: "What services does Dynamic Pixel provide?", a: "We provide end-to-end E-learning services including custom content development, Moodle architecture design, AI plugins, animated videos, and K-12 solutions." },
  { q: "How long does custom content development take?", a: "Development timelines vary based on complexity, interactivity, and length. A standard interactive course typically ranges from 4 to 8 weeks from storyboard to final delivery." },
  { q: "Do you develop SCORM compliant content?", a: "Yes, all our custom e-learning modules are SCORM and xAPI compliant, ensuring seamless integration with any modern Learning Management System." },
  { q: "Do you provide LMS hosting?", a: "We provide managed, scalable cloud hosting for Moodle, optimized specifically for high-concurrency performance and reliability." },
  { q: "Can you convert legacy Flash content?", a: "Absolutely. We offer complete Flash to HTML5 conversion services, ensuring your legacy content is secure, mobile-friendly, and accessible on modern devices." },
  { q: "Do you offer animated video creation?", a: "Yes, we specialize in creating engaging 2D animations, whiteboard animations, and explainer videos tailored to your specific training or marketing needs." },
  { q: "What is the HACC Gen plugin?", a: "HACC Gen is our advanced Moodle-AI plugin that integrates generative AI capabilities directly into your LMS for personalized learning experiences." },
  { q: "Can the e-learning content be customized?", a: "Everything we build is highly customizable. We tailor the instructional design, visuals, assessments, and overall look and feel to match your brand and learning objectives." }
];

function TrustPage() {
  return (
    <div>
      {/* SECTION INTRODUCTION */}
      <section className="relative border-b border-border bg-background pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Client Success</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-heading">
              Trusted by Organizations Building Modern Learning Platforms
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-paragraph">
              Dynamic Pixel partners with organizations to deliver secure, scalable and engaging E-Learning and Moodle solutions through transparent collaboration and long-term technical support.
            </p>
          </div>
        </div>
      </section>

      {/* SUBSECTION 1: CLIENT TESTIMONIALS */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="flex flex-col p-8 border-border bg-card shadow-soft h-full">
                <Quote className="size-8 text-primary/20 mb-6" />
                <p className="text-paragraph leading-relaxed mb-8 flex-1 italic">
                  "{t.feedback}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
                  <div className="size-12 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground shrink-0">
                    <User className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-heading text-sm">{t.name}</h4>
                    <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium text-primary">{t.org}</span>
                      <span className="text-border">•</span>
                      <span>{t.designation}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSECTION 2: WHY CLIENTS TRUST SKYDOT */}
      <section className="section-y bg-background border-y border-border">
        <div className="container-page">
          <SectionHeader
            title="Why Clients Trust Dynamic Pixel"
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_REASONS.map((r) => (
              <div key={r.title} className="flex flex-col p-6 rounded-xl border border-border bg-surface shadow-soft card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <r.icon className="size-5 text-primary shrink-0" />
                  <h3 className="font-display font-semibold text-base text-heading leading-tight">{r.title}</h3>
                </div>
                <p className="text-sm text-paragraph leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSECTION 3: FAQ & SIDE PANEL */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-16 items-start">
            {/* FAQ Accordion */}
            <div>
              <SectionHeader
                title="Frequently Asked Questions"
                description="Common questions about our custom e-learning and LMS implementation services."
              />
              <div className="mt-8">
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                      <AccordionTrigger className="text-left font-display font-semibold text-heading hover:text-primary transition-colors text-base py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-paragraph leading-relaxed pb-6 text-sm">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Optional Side Panel */}
            <div className="sticky top-24">
              <Card className="p-8 border-border bg-card shadow-elevated">
                <h3 className="font-display font-semibold text-xl text-heading mb-6">Why Choose Dynamic Pixel?</h3>
                <ul className="space-y-4">
                  {[
                    "Custom E-Learning Specialists",
                    "SCORM Compliant Content",
                    "AI-Enhanced Learning",
                    "End-to-End Project Delivery",
                    "Engaging Animated Videos"
                  ].map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-heading leading-tight pt-0.5">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSECTION 4: TRUST BANNER */}
      <section className="py-20 md:py-24 bg-background border-t border-border relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-heading tracking-tight mb-6">
              A Reliable Partner for Enterprise Learning
            </h2>
            <p className="text-paragraph text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              Whether you're developing custom content for the first time or modernizing an existing learning platform, Dynamic Pixel provides the expertise, creativity, and long-term partnership needed to ensure success.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {[
                "Engaging Custom Content",
                "Secure & Scalable LMS",
                "Long-Term Technical Support",
                "Creative Animation Team"
              ].map(indicator => (
                <div key={indicator} className="flex items-center gap-2 text-sm md:text-base font-semibold text-heading">
                  <CheckCircle2 className="size-5 text-primary" />
                  {indicator}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
