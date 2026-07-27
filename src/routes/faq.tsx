import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle, Server, ShieldCheck, Zap, Award, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

const FAQ_CATEGORIES = [
  {
    category: "Moodle Upgrades & Migrations",
    icon: Zap,
    questions: [
      ["How long does an enterprise Moodle upgrade take?", "For standard enterprise deployments, our zero-downtime blue/green upgrade sequence takes less than 15 minutes of actual maintenance downtime. The preliminary staging refactoring and UAT testing take approximately 2 to 4 weeks."],
      ["Can we migrate without losing our historical student grades and certificates?", "Yes! 100% data preservation is guaranteed under our SLA. We migrate all historical gradebooks, user completion badges, forum posts, and SCORM tracking without decimal loss."],
      ["Will our legacy custom theme and plugins work on Moodle 4.4+?", "During our phase-one audit, we inspect all third-party code. We refactor deprecated PHP 7.x/8.0 code and upgrade Bootstrap styles to ensure 100% compatibility with modern Moodle releases."]
    ]
  },
  {
    category: "Cloud Hosting & Performance",
    icon: Server,
    questions: [
      ["How many simultaneous quiz takers can your cloud infrastructure support?", "Our auto-scaling Kubernetes clusters with Redis session caching and MySQL/PostgreSQL read-replicas routinely support over 50,000+ concurrent examination submitters without latency degradation."],
      ["Where is our learner data hosted geographically?", "We deploy your Moodle cluster in your exact preferred cloud region (AWS, Azure, or GCP in India, Europe, UK, UAE, or US) to comply strictly with national data sovereignty laws."],
      ["What is your guaranteed system uptime SLA?", "We provide financially enforceable Service Level Agreements guaranteeing up to 99.99% system uptime, backed by 24/7/365 real-time DevOps monitoring."]
    ]
  },
  {
    category: "Security & ISO 27001 Compliance",
    icon: ShieldCheck,
    questions: [
      ["Are your e-learning solutions ISO 27001 and HIPAA/GDPR compliant?", "Yes. We adhere to rigorous ISO 27001 information security standards. For healthcare and public sector clients, we enforce AES-256 database encryption, strict RBAC isolation, and tamper-proof audit trails."],
      ["How do you protect against DDoS attacks during high-stakes exam periods?", "Every cloud cluster is protected by enterprise Cloudflare WAF and DDoS mitigation edge filtering, automatically blocking malicious bot floods and SQL injection attempts."],
      ["Do you support Single Sign-On (SSO) and Multi-Factor Authentication (MFA)?", "Absolutely. We integrate natively with Microsoft Entra ID (Azure AD), Google Workspace, Okta, and SAML 2.0 identity providers with full MFA support."]
    ]
  },
  {
    category: "Pricing, Licensing & Contracts",
    icon: Award,
    questions: [
      ["Does Moodle require per-user annual license fees like Canvas or Blackboard?", "Moodle Core is pure open-source software with zero per-user licensing fees. You only pay for our professional engineering, customization, managed cloud hosting, and SLA support."],
      ["Do you sign mutual NDAs prior to technical discovery calls?", "Yes. We sign mutual non-disclosure agreements before reviewing your database schemas, proprietary courseware, or internal server topologies."],
      ["Can we hire Skydot on a retainer for ongoing 24/7 Level 3 support?", "Yes! We offer flexible monthly and annual support retainers that give your team direct real-time Slack/Teams access to senior Level 3 Moodle developers with a 15-minute emergency response SLA."]
    ]
  }
];

function FAQPage() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredCategories = FAQ_CATEGORIES.map(cat => ({
    ...cat,
    questions: cat.questions.filter(([q, a]) => 
      q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        badge="Knowledge Center"
        title="Frequently Asked Questions"
        description="Comprehensive technical and architectural answers regarding our Moodle engineering, cloud hosting, security, and SLAs."
      >
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search questions (e.g., 'upgrade downtime', 'SSO', 'Redis', 'SLA')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-14 pl-12 pr-4 rounded-2xl border-border bg-card text-base shadow-lg focus-visible:ring-primary"
          />
        </div>
      </PageHero>

      <section className="section-y bg-background">
        <div className="container-page max-w-5xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-2xl p-8">
              <HelpCircle className="size-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-heading">No matching questions found</h3>
              <p className="mt-2 text-paragraph text-sm max-w-md mx-auto">
                We couldn't find an answer matching "{searchTerm}". Please contact our solution architects directly for immediate assistance.
              </p>
              <Button asChild className="mt-6">
                <Link to="/contact">Ask an Architect <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                      <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                        <IconComponent className="size-5" />
                      </div>
                      <h2 className="font-display font-bold text-2xl text-heading">{cat.category}</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3 pt-2">
                      {cat.questions.map(([q, a], qIdx) => (
                        <AccordionItem key={qIdx} value={`${idx}-${qIdx}`} className="border border-border rounded-xl px-6 bg-card shadow-soft">
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
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#0B0F19] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">Have a Unique Technical Requirement?</h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Our engineering team is ready to review your custom plugin code, database schema, or infrastructure topology in a free 45-minute technical session.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link to="/contact">Schedule Technical Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
