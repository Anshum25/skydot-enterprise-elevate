import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, Search, FileQuestion, Compass, Languages, Eye, MessagesSquare, LineChart, ScanFace, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ai-services")({
  head: () => ({
    meta: [
      { title: "AI Services — Applied AI for learning | Skydot Infotech" },
      { name: "description", content: "AI tutors, chatbots, adaptive learning, content generation, translation, OCR, predictive analytics and AI proctoring." },
      { property: "og:title", content: "AI Services — Skydot Infotech" },
      { property: "og:description", content: "Applied AI embedded into the learning experience." },
    ],
    links: [{ rel: "canonical", href: "/ai-services" }],
  }),
  component: AiPage,
});

const CAPS = [
  { icon: Bot, title: "AI Tutor", desc: "Grounded, subject-aware tutors that guide learners with citations and safety guardrails." },
  { icon: MessagesSquare, title: "AI Chatbot", desc: "Enterprise-ready assistants embedded in Moodle and CBT flows." },
  { icon: Search, title: "Smart Search", desc: "Semantic search across courses, resources and knowledge bases." },
  { icon: FileQuestion, title: "Question Generation", desc: "Auto-generate MCQs, short answers and case-based items from source content." },
  { icon: Sparkles, title: "Content Recommendation", desc: "Personalized learning path recommendations based on goals and history." },
  { icon: Compass, title: "Adaptive Learning", desc: "Dynamic difficulty and pathway adaptation with clear pedagogy." },
  { icon: Eye, title: "OCR & Content Ingestion", desc: "Extract structured content from PDFs, handwritten notes and scanned exams." },
  { icon: Languages, title: "Translation", desc: "Neural translation of courses and assessments across 40+ languages." },
  { icon: Sparkles, title: "AI Feedback", desc: "Rubric-guided AI feedback on essays, code and open-response answers." },
  { icon: LineChart, title: "Predictive Analytics", desc: "Early-warning signals for at-risk learners and cohort risk scoring." },
  { icon: ScanFace, title: "AI Proctoring", desc: "Face, voice and environment analysis with tuned false-positive controls." },
];

function AiPage() {
  return (
    <div>
      <PageHero
        eyebrow="Applied AI"
        title={<>AI that lives inside the learning experience — not bolted on.</>}
        description="We build AI features grounded in your content, aligned with your pedagogy, and governed by your security and compliance requirements."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Explore AI for your learners <ArrowRight className="ml-2 size-4" /></Link></Button>
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPS.map(c => (
              <Card key={c.title} className="p-6 border-border bg-card card-hover">
                <div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary"><c.icon className="size-5" /></div>
                <h3 className="mt-4 font-display font-semibold text-heading">{c.title}</h3>
                <p className="mt-2 text-sm text-paragraph leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader eyebrow="AI governance" title="Enterprise-grade guardrails on every AI feature." description="Grounding, evaluations, red-team testing and human review — because AI in education has to be trustworthy by default." />
            <ul className="mt-8 space-y-3 text-sm">
              {["Retrieval-grounded responses with citations","PII redaction and safety filters","Model choice & data residency controls","Evaluation harness with domain experts","Full audit trail of AI interactions"].map(t => (
                <li key={t} className="flex items-start gap-2 text-heading"><span className="mt-2 size-1.5 rounded-full bg-primary" />{t}</li>
              ))}
            </ul>
          </div>
          <Card className="p-6 border-border bg-card shadow-elevated">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">AI Tutor · session</div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-lg border border-border p-3 bg-surface">
                <div className="text-xs font-semibold text-primary mb-1">Learner</div>
                Explain how a diode works in a bridge rectifier.
              </div>
              <div className="rounded-lg border border-border p-3 bg-primary/5">
                <div className="text-xs font-semibold text-primary mb-1">AI Tutor</div>
                A bridge rectifier uses four diodes arranged so that during both halves of the AC cycle, current flows through the load in the same direction. Would you like a circuit diagram from your course pack?
                <div className="mt-2 text-[11px] text-muted-foreground">Cited: EE-201 · Module 3 · Section 2</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
