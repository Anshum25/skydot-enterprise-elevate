import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Code, Award, Sparkles, Layout, CheckCircle2, Zap, ArrowRight, ShieldCheck, 
  Cpu, Layers, RefreshCw, Terminal, GitBranch, Database, Lock
} from "lucide-react";

export const Route = createFileRoute("/services/moodle-customization")({
  component: MoodleCustomizationPage,
});

const CUSTOM_MODULE_SHOWCASE = [
  {
    id: "grading",
    title: "Custom Assessment & GPA Grading Engines",
    tag: "Academic & Corporate Assessment",
    icon: Award,
    desc: "Standard Moodle grading rubrics don't always match accredited medical, legal, or university GPA calculation rules. We custom-code weighted grading algorithms, clinical sign-off rubrics, and automated competency evaluations.",
    features: ["Weighted GPA & Transcript Calculators", "Multi-Stage Clinical Competency Sign-Offs", "Automated Rubric & Peer Assessment Logic", "Custom Excel / CSV Gradebook Exporters"],
    codeSnippet: `// Custom local plugin hook for weighted GPA calculation
function local_skydot_calculate_gpa($userid, $courseid) {
    global $DB;
    $grades = $DB->get_records('grade_grades', ['userid' => $userid]);
    return skydot_apply_weighted_algorithm($grades);
}`
  },
  {
    id: "gamification",
    title: "Gamified Leaderboards & Experience Points (XP)",
    tag: "Learner Engagement",
    icon: Sparkles,
    desc: "Boost voluntary course completion rates by 65%. We engineer interactive XP progress bars, departmental leaderboards, and achievement badges that trigger automatically when learners complete lessons or participate in forums.",
    features: ["Real-Time Departmental Leaderboards", "Custom Level-Up XP Progression Bars", "Automated Achievement Badges & Trophies", "Peer Recognition & Social Learning Feeds"],
    codeSnippet: `// Event observer triggering XP award upon quiz submission
public static function quiz_submitted(\\mod_quiz\\event\\attempt_submitted $event) {
    local_xp_award_points($event->get_record_snapshot('user', $event->userid), 250);
}`
  },
  {
    id: "badging",
    title: "Verifiable PDF Diplomas & QR Code Badging",
    tag: "Credential Security",
    icon: CheckCircle2,
    desc: "Prevent certificate forgery. We develop custom PDF certificate engines that embed cryptographic QR codes onto diplomas. Employers can scan the QR code to verify learner graduation authenticity instantly on your portal.",
    features: ["Dynamic PDF Certificate Generation", "Cryptographic QR Verification Codes", "Open Badges 2.0 / 3.0 Standard Compliant", "Automated LinkedIn Profile Certification Share"],
    codeSnippet: `// Generate encrypted QR validation token on diploma PDF
$qrcode_hash = sha1($user->id . '-' . $course->id . '-' . $CFG->skydot_secret);
$pdf->draw_qr_code('https://yourlms.com/verify?token=' . $qrcode_hash);`
  },
  {
    id: "ai-grading",
    title: "AI LLM Essay & Submission Auto-Grading",
    tag: "Artificial Intelligence",
    icon: Cpu,
    desc: "Eliminate grading backlogs for professors. We integrate OpenAI, Claude, or local LLM models natively into Moodle assignments to generate instant grammar feedback, rubric evaluations, and plagiarism indicators.",
    features: ["Instant Rubric-Based Essay Evaluation", "Automated Student Writing Feedback", "Turnitin / AI Plagiarism Confidence Score", "Professor Override & Manual Review Dashboard"],
    codeSnippet: `// Stream OpenAI rubric feedback for student essay submission
$response = skydot_llm_client::evaluate_essay($submission->text, $rubric_criteria);
$grade_item->update_final_grade($submission->userid, $response->suggested_score);`
  }
];

const ARCHITECTURE_SAFETY_COMPARISON = [
  {
    aspect: "Where Code is Written",
    bad: "Directly modifying core Moodle PHP files (e.g., editing /lib/moodlelib.php or /course/lib.php).",
    skydot: "100% isolated within local plugins (/local), blocks (/blocks), or child theme renderers (/theme)."
  },
  {
    aspect: "Upgrade Consequences",
    bad: "When you run a Moodle update, your customizations are completely overwritten and destroyed.",
    skydot: "Zero upgrade friction. Our local plugins plug into official Moodle hooks and survive all updates."
  },
  {
    aspect: "Security & QA Standards",
    bad: "Unchecked SQL queries vulnerable to SQL injection and cross-site scripting (XSS) memory leaks.",
    skydot: "Rigorous automated testing using Moodle CodeChecker, PHPStan, and PHPUnit regression suites."
  }
];

function MoodleCustomizationPage() {
  const [activeMod, setActiveMod] = React.useState("grading");
  const currentMod = CUSTOM_MODULE_SHOWCASE.find(m => m.id === activeMod) || CUSTOM_MODULE_SHOWCASE[0];

  return (
    <div className="bg-background min-h-screen">
      {/* UNIQUE HERO: CUSTOM ENGINEERING & CODE SHOWCASE */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 border-b border-border bg-gradient-to-b from-surface via-background to-background">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 font-display font-semibold text-xs uppercase tracking-widest mb-6">
                <Code className="size-3.5" />
                <span>Bespoke Software Engineering</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-heading tracking-tight leading-[1.12]">
                Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-primary">Moodle Customization</span> & Workflow Engineering
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-paragraph leading-relaxed font-normal max-w-2xl">
                When off-the-shelf LMS features fall short of your operational needs, our full-stack engineering team custom-codes Moodle to fit your exact business logic without ever breaking future upgrade compatibility.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="h-13 px-8 text-base bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl shadow-orange-600/25">
                  <Link to="/contact">
                    Discuss Custom Engineering <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 px-6 text-base border-border hover:border-amber-500">
                  <Link to="/contact">Review Code Samples</Link>
                </Button>
              </div>

              {/* CUSTOMIZATION STATS STRIP */}
              <div className="mt-12 pt-8 border-t border-border/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-500">350+</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Custom Modules Built</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-orange-500">100%</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Upgrade Safe API</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-primary">1 Year</div>
                  <div className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Code Bug Warranty</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE MODULE SHOWCASE & TERMINAL */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl relative">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center justify-between">
                  <span>Custom Module Showcase</span>
                  <span className="text-amber-500 font-semibold">Select Feature Engine</span>
                </div>

                {/* MODULE SELECTOR TABS */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {CUSTOM_MODULE_SHOWCASE.map((mod) => {
                    const IconComp = mod.icon;
                    const isSel = mod.id === activeMod;
                    return (
                      <button
                        key={mod.id}
                        onClick={() => setActiveMod(mod.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                          isSel
                            ? "border-amber-500 bg-amber-500/10 text-heading font-semibold shadow-sm"
                            : "border-border/60 bg-surface/50 text-muted-foreground hover:text-heading hover:bg-surface"
                        }`}
                      >
                        <IconComp className={`size-4 shrink-0 ${isSel ? "text-amber-500" : "text-muted-foreground"}`} />
                        <span className="text-xs sm:text-sm leading-snug">{mod.title.split(' ')[0]} {mod.title.split(' ')[1]}</span>
                      </button>
                    );
                  })}
                </div>

                {/* MODULE DETAILS & CODE BOX */}
                <div className="p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-950/20 via-card to-card relative overflow-hidden animate-fade-in">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-500 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Terminal className="size-3" />
                    <span>{currentMod.tag}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-heading mb-2">
                    {currentMod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-paragraph leading-relaxed mb-4">
                    {currentMod.desc}
                  </p>

                  {/* SIMULATED CODE TERMINAL */}
                  <div className="rounded-lg bg-[#0B0F19] p-3 border border-white/10 font-mono text-[11px] text-amber-400 overflow-x-auto mb-4">
                    <div className="text-slate-500 text-[9px] uppercase tracking-wider mb-1 flex items-center gap-1">
                      <GitBranch className="size-3" /> local_plugin_hook.php
                    </div>
                    <pre className="whitespace-pre-wrap">{currentMod.codeSnippet}</pre>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/80">
                    {currentMod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-heading">
                        <CheckCircle2 className="size-3 text-amber-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY OUR CODE NEVER BREAKS UPGRADES */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">100% Upgrade Safe Architecture</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
              Why We Never Hack Core Moodle Files
            </h2>
            <p className="mt-3 text-paragraph text-base sm:text-lg">
              Amateur web agencies edit core Moodle PHP files directly. The first time you try to apply a security update, the entire site crashes. Skydot engineers clean, isolated modular plugins that survive all future version upgrades.
            </p>
          </div>

          <div className="space-y-4">
            {ARCHITECTURE_SAFETY_COMPARISON.map((comp, idx) => (
              <Card key={idx} className="p-6 sm:p-8 border-border bg-card shadow-soft grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3">
                  <span className="font-display font-bold text-lg text-heading block">{comp.aspect}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Engineering Standard</span>
                </div>
                <div className="md:col-span-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-sm">
                  <div className="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">✕ Hacking Core Files (Bad)</div>
                  {comp.bad}
                </div>
                <div className="md:col-span-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-heading text-sm font-medium">
                  <div className="font-bold text-xs uppercase tracking-wider text-amber-500 mb-1 flex items-center gap-1">✓ Skydot Local Hook Architecture (Safe)</div>
                  {comp.skydot}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MODULAR ENGINEERING SPRINT LIFECYCLE */}
      <section className="section-y bg-background">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Agile Methodology</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
              How We Build Custom Features
            </h2>
            <p className="mt-3 text-paragraph text-base sm:text-lg">
              Every custom module follows strict software engineering lifecycle standards from wireframe prototyping to automated QA and code handover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Figma UI Mockup & Wireframe Approval", desc: "We design pixel-perfect interactive UI wireframes for your custom feature so your team can verify workflows before coding." },
              { step: "02", title: "Clean Modular PHP / React Engineering", desc: "Writing clean, PHPDoc-documented local plugins and blocks in an isolated Git repository adhering to official Moodle API standards." },
              { step: "03", title: "Automated Security & Regression QA", desc: "Running Moodle CodeChecker, PHPStan, and automated regression suites to eliminate SQL injections or memory leaks." },
              { step: "04", title: "Sandbox Sign-Off & 1-Year Warranty", desc: "Deploying to your staging server for user verification before live cutover, backed by our 1-year code bug warranty." }
            ].map((st, idx) => (
              <div key={idx} className="p-7 rounded-2xl border border-border bg-card shadow-card relative flex flex-col justify-between group hover:border-amber-500/50 transition-all">
                <div>
                  <div className="font-display font-black text-4xl text-amber-500/20 group-hover:text-amber-500 transition-colors mb-4">
                    {st.step}
                  </div>
                  <h4 className="font-display font-bold text-xl text-heading mb-3">
                    {st.title}
                  </h4>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-amber-500">
                  <span>Agile Phase Output</span>
                  <CheckCircle2 className="size-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ SPECIFIC TO CUSTOMIZATION */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-heading">Customization FAQ</h2>
            <p className="mt-2 text-paragraph text-base">Answering common questions on code ownership, maintenance, and warranties.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="cus-1" className="border border-border rounded-xl px-6 bg-card shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-lg text-heading hover:no-underline py-5 text-left">
                Do we own the intellectual property (IP) and source code of the customizations you build?
              </AccordionTrigger>
              <AccordionContent className="text-paragraph text-base leading-relaxed pb-5">
                Yes! Upon project handover and completion, your organization owns 100% of the custom code, local plugin files, and intellectual property developed for your LMS. We provide clean Git repository access with zero proprietary vendor lock-in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cus-2" className="border border-border rounded-xl px-6 bg-card shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-lg text-heading hover:no-underline py-5 text-left">
                Can you take over and fix an existing custom plugin written by another agency that is currently broken?
              </AccordionTrigger>
              <AccordionContent className="text-paragraph text-base leading-relaxed pb-5">
                Absolutely. Over 35% of our engineering workload involves rescuing broken Moodle instances where third-party developers hacked core files or wrote incompatible plugins. We perform a complete diagnostic code audit, refactor the codebase into clean local plugins, and assume ongoing maintenance support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* UNIQUE CTA BANNER: THE CODE WARRANTY BOOKING */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page max-w-4xl">
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-[#0B0F19] to-[#0B0F19] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Have a Unique Functional Requirement?
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect directly with our software engineering leads. We will review your workflow logic and draft a clean, modular technical specification.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-13 px-8 text-base font-semibold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg shadow-orange-600/30">
                <Link to="/contact">Request Custom Engineering Spec</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white">
                <Link to="/services/moodle-implementation">Explore Implementation Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
