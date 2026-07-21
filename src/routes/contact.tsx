import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Skydot Infotech — Talk to a solution architect" },
      { name: "description", content: "Book a demo, request a proposal or reach our sales, support and partnership teams." },
      { property: "og:title", content: "Contact — Skydot Infotech" },
      { property: "og:description", content: "Talk to our team about your enterprise learning platform." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().min(2, "Please enter your organization").max(120),
  role: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "A few more words please").max(2000),
});

const FAQ = [
  ["How quickly will you respond?", "Within one business day. For urgent enterprise requests, our on-call solution architect responds within 4 hours."],
  ["Do you sign NDAs?", "Yes — we sign mutual NDAs before any detailed discovery discussion."],
  ["Where are your delivery hubs?", "Bengaluru (India), Dubai (UAE) and London (UK)."],
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      role: fd.get("role") ?? undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 700));
    setSubmitting(false);
    (e.currentTarget as HTMLFormElement).reset();
    toast.success("Thanks — we'll be in touch within one business day.");
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk about your learning platform.</>}
        description="Send us a note and a member of our solutions team will get back to you within one business day. No sales cycle theatre — just a working conversation."
      />

      <section className="section-y">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <Card className="p-8 md:p-10 border-border bg-card shadow-soft">
            <h2 className="font-display font-bold text-2xl text-heading">Book a working session</h2>
            <p className="mt-2 text-sm text-paragraph">A 45-minute conversation with a solution architect.</p>
            <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Organization</Label>
                <Input id="company" name="company" placeholder="Acme University" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role (optional)</Label>
                <Input id="role" name="role" placeholder="Chief Learning Officer" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message">Tell us about your programme</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Learners, timeline, current platform, integrations…" required />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-3">
                <div className="text-xs text-muted-foreground inline-flex items-center gap-2"><CheckCircle2 className="size-3.5 text-primary" /> We'll never share your details.</div>
                <Button type="submit" size="lg" disabled={submitting}>{submitting ? "Sending…" : <>Send message <ArrowRight className="ml-2 size-4" /></>}</Button>
              </div>
            </form>
          </Card>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "Sales & partnerships", value: "hello@skydotinfotech.com" },
              { icon: Mail, label: "Technical support", value: "support@skydotinfotech.com" },
              { icon: Phone, label: "Phone", value: "+91 80 4567 8900" },
              { icon: MapPin, label: "Head office", value: "Level 12, Prestige Tower, Bengaluru — 560001" },
              { icon: Clock, label: "Business hours", value: "Mon–Fri · 09:00–19:00 IST" },
            ].map(c => (
              <Card key={c.label} className="p-5 border-border bg-card card-hover">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary shrink-0"><c.icon className="size-4" /></div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest font-semibold text-muted-foreground">{c.label}</div>
                    <div className="mt-1 text-sm text-heading font-medium">{c.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface border-y border-border">
        <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <SectionHeader eyebrow="Before you write" title="A few common questions." />
          <Accordion type="single" collapsible defaultValue="q0">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger className="text-left font-display font-semibold text-heading hover:no-underline">{q}</AccordionTrigger>
                <AccordionContent className="text-paragraph leading-relaxed">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
