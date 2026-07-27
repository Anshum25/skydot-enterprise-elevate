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
    title: "Higher Education & University Digital Campus",
    subtitle: "Architecting high-concurrency learning ecosystems for universities, colleges, and K-12 networks with SIS integration, automated grading, and AI tutoring.",
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
      "Inspired by world-class university deployments on Moodle.com, Skydot engineers resilient, high-concurrency academic learning portals. We integrate Moodle natively with Student Information Systems (Banner, Peoplesoft, PowerSchool), implement automated anti-cheating proctoring tools, and design accessible WCAG AAA compliant interfaces for diverse student bodies."
    ],
    capabilities: [
      { title: "Automated SIS & Campus ERP Integration", description: "Real-time bidirectional syncing of academic semesters, course catalogs, student enrollments, and registrar gradebooks.", icon: Layers },
      { title: "High-Concurrency Online Examination Hub", description: "Load-balanced database architectures designed specifically to handle 50,000+ simultaneous quiz submissions without slowdowns.", icon: Server },
      { title: "AI Tutor & Personalized Learning Paths", description: "Integrating custom LLM study assistants that help students review lecture transcripts and practice for exams 24/7.", icon: Sparkles },
      { title: "Plagiarism & AI Proctoring Integration", description: "Seamless connectors for Turnitin, Respondus Monitor, Proctorio, and automated facial recognition verification.", icon: Lock },
      { title: "Interactive H5P & Multimedia Courseware", description: "Empowering professors with over 40 interactive video, branching scenario, and gamified assignment types.", icon: BookOpen },
      { title: "WCAG 2.1 AAA Accessibility Compliance", description: "Screen-reader optimized layouts, high-contrast themes, and full keyboard navigation for inclusive campus learning.", icon: CheckCircle2 }
    ],
    useCases: [
      { title: "University-Wide Exam Weeks", desc: "Executing high-stakes online examinations across 15 faculties with zero server timeouts and real-time proctoring." },
      { title: "Hybrid Lecture & Flipped Classrooms", desc: "Delivering asynchronous pre-lecture videos and automated quizzes before students attend in-person seminar discussions." },
      { title: "Multi-Campus Consortium Management", desc: "Hosting 5 affiliated regional colleges under a single Moodle Workplace database with strict data and branding isolation." }
    ],
    faq: [
      ["How do you prevent database crashes during mid-term exam periods?", "We implement Redis session clusters, MySQL read-replicas, and auto-scaling Kubernetes web nodes that multiply compute capacity automatically 15 minutes before scheduled exams begin."],
      ["Can professors import existing course cartridges from Blackboard or Canvas?", "Yes. Our automated migration tools ingest IMS-CC packages and convert quizzes, rubrics, and discussion prompts into native Moodle formats."]
    ]
  },
  "corporate": {
    title: "Corporate Enterprise Learning & Talent Development",
    subtitle: "Transform workforce training with Moodle Workplace: automated onboarding, dynamic organizational hierarchies, HRIS synchronization, and compliance tracking.",
    eyebrow: "Enterprise Solution",
    badge: "Moodle Workplace",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Onboarding Time Saved", value: "65%" },
      { label: "HRIS Sync Accuracy", value: "100%" },
      { label: "Compliance Audit Rate", value: "99.8%" }
    ],
    overview: [
      "Modern enterprises need more than just a course repository; they require an intelligent talent development engine that aligns employee growth with corporate strategy. Off-the-shelf corporate platforms are often prohibitively expensive and lack customization flexibility.",
      "Skydot deploys Moodle Workplace to deliver consumer-grade learning experiences for corporate employees. We automate onboarding workflows from Workday and SAP SuccessFactors, build personalized management dashboards, and enforce mandatory annual compliance certifications with automated email notifications and managerial reporting."
    ],
    capabilities: [
      { title: "Automated HRIS Onboarding Workflows", description: "New hires are automatically assigned role-specific security, culture, and technical training the moment they enter your HR system.", icon: Users },
      { title: "Dynamic Organizational Hierarchies", description: "Mirroring your company's exact departmental, regional, and reporting structures for automated team reporting.", icon: Building },
      { title: "Automated Compliance & Recertification", description: "Setting automated expiration timers for mandatory courses (ISO 27001, OSHA, AML) with recurring renewal reminders.", icon: Clock },
      { title: "Manager & Executive PowerBI Dashboards", description: "Real-time analytics showing team completion rates, skill gap heatmaps, and training ROI metrics.", icon: BarChart },
      { title: "Social Learning & Peer Communities", description: "Gamified leaderboards, internal subject-matter expert forums, and collaborative peer assessment rubrics.", icon: Award },
      { title: "Single Sign-On (SSO) & Azure AD MFA", description: "Seamless, secure login via Microsoft Entra ID, Okta, or Google Workspace with multi-factor verification.", icon: ShieldCheck }
    ],
    useCases: [
      { title: "Global Enterprise Onboarding", desc: "Standardizing orientation for 5,000+ new hires annually across 12 countries in 8 localized languages." },
      { title: "Leadership & Succession Programs", desc: "Creating exclusive, invitation-only management training academies with mentor evaluations and 360-degree feedback." },
      { title: "Partner & Customer Training Portals", desc: "Extending your training ecosystem to external B2B distributors and customers using multi-tenant portal isolation." }
    ],
    faq: [
      ["How does Moodle Workplace differ from standard Moodle for corporations?", "Workplace includes advanced corporate features like multi-tenancy, automated dynamic rules, report builder, organizational hierarchies, and automated certificate re-issuance without needing third-party add-ons."],
      ["Can managers view their direct reports' learning progress?", "Yes. Our managerial dashboards allow team leads to view completion statuses, approve course enrollment requests, and export team compliance reports with 1 click."]
    ]
  },
  "government": {
    title: "Government & Public Sector Training Ecosystems",
    subtitle: "Highly secure, air-gapped, and sovereign cloud LMS architectures engineered for civil service academies, defense agencies, and municipal administrations.",
    eyebrow: "Public Sector Solution",
    badge: "Sovereign Cloud & ISO 27001",
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Data Sovereignty", value: "100%" },
      { label: "Security Encryption", value: "AES-256" },
      { label: "Civil Servants Served", value: "2M+" }
    ],
    overview: [
      "Government bodies and public sector agencies operate under stringent data sovereignty laws, rigorous cybersecurity mandates, and immense user scale. Training millions of civil servants, municipal officers, and emergency responders requires an infrastructure where data privacy is absolute.",
      "Skydot designs sovereign, military-grade Moodle architectures deployed on government-approved cloud regions (AWS GovCloud, Azure Government, or private air-gapped data centers). We enforce end-to-end encryption, strict role-based access controls, and full compliance with national digital privacy standards."
    ],
    capabilities: [
      { title: "Sovereign Cloud & Air-Gapped Deployment", description: "Hosting your platform within national borders with zero cross-border data transfer, complying strictly with data residency laws.", icon: Shield },
      { title: "Military-Grade AES-256 Encryption", description: "Encrypting all user records, exam banks, and video archives at rest and in transit with automated key rotation.", icon: Lock },
      { title: "Massive-Scale Civil Service Academies", description: "Architecting databases capable of simultaneously training 500,000+ public employees across national ministries.", icon: Server },
      { title: "Strict Role-Based Access Control (RBAC)", description: "Granular permission definitions ensuring departmental administrators can only access records within their specific ministry.", icon: Users },
      { title: "Automated Audit Trails & Forensics", description: "Immutable activity logging capturing every login, grade modification, and file download for regulatory compliance audits.", icon: Database },
      { title: "Accessibility & Multilingual Support", description: "Full localization into regional languages and compliance with national public sector digital accessibility standards.", icon: Globe }
    ],
    useCases: [
      { title: "National Civil Service Training Academy", desc: "Delivering standardized administrative, legal, and ethics certifications to all government employees nationwide." },
      { title: "Emergency & Disaster Response Readiness", desc: "Rapid deployment of time-critical safety protocols and incident management simulations to first responders." },
      { title: "Municipal E-Governance Upskilling", desc: "Training local city council staff on digital transformation workflows and cybersecurity best practices." }
    ],
    faq: [
      ["Can Skydot deploy Moodle on our internal, on-premise government servers?", "Yes. Our DevOps engineers specialize in deploying containerized Kubernetes or Docker installations directly onto private government data centers and air-gapped networks."]
    ]
  },
  "healthcare": {
    title: "Healthcare, Medical Compliance & Clinical Training",
    subtitle: "HIPAA and GDPR compliant e-learning systems for hospitals, medical colleges, and pharmaceutical companies with CPR recertification and clinical simulation tracking.",
    eyebrow: "Medical Sector Solution",
    badge: "HIPAA / GDPR Compliant",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Compliance Pass Rate", value: "99.9%" },
      { label: "Clinical Staff Tracking", value: "75,000+" },
      { label: "Data Security Standard", value: "HIPAA Ready" }
    ],
    overview: [
      "In healthcare, training is directly tied to patient safety and legal liability. Medical professionals require continuous medical education (CME), annual BLS/ACLS resuscitation certifications, and rigorous privacy (HIPAA/GDPR) training that cannot be compromised.",
      "Skydot builds specialized medical learning platforms on Moodle Workplace. We automate mandatory hospital compliance workflows, integrate with clinical simulation hardware via xAPI, and generate verifiable digital badges and continuing education transcripts for hospital accreditation audits."
    ],
    capabilities: [
      { title: "Automated Resuscitation & Safety Recertification", description: "Automated tracking of CPR, BLS, ACLS, and infection control expiration dates with mandatory renewal lockouts.", icon: Clock },
      { title: "HIPAA & Patient Privacy Encryption", description: "Strict data sanitization and access logging to ensure all training records comply with healthcare privacy regulations.", icon: ShieldCheck },
      { title: "xAPI Clinical Simulation Integration", description: "Capturing performance data from physical CPR mannequins, VR surgical simulators, and medical lab software.", icon: Cpu },
      { title: "Continuing Medical Education (CME) Credits", description: "Automated calculation and transcript archiving of CME credit hours for nursing and physician annual license renewals.", icon: Award },
      { title: "Hospital Shift-Friendly Mobile Learning", description: "Micro-learning modules optimized for smartphones, allowing nurses and doctors to complete 5-minute refresher lessons during breaks.", icon: Zap },
      { title: "Joint Commission Audit Reporting", description: "1-click generation of hospital-wide compliance verification reports for regulatory healthcare accreditation bodies.", icon: BarChart }
    ],
    useCases: [
      { title: "Multi-Hospital Healthcare Networks", desc: "Centralizing clinical training across 10 hospital campuses with departmental reporting for nursing, surgery, and administration." },
      { title: "Pharmaceutical Sales & Ethics Training", desc: "Certifying medical representatives on drug safety protocols, FDA guidelines, and ethical marketing standards." },
      { title: "Medical School Undergraduate Curricula", desc: "Managing 4-year MBBS/MD clinical rotation grading, OSCE examination rubrics, and hospital internship logs." }
    ],
    faq: [
      ["How do you track nurses and doctors who work irregular shift hours?", "Our platform includes mobile-first offline learning capabilities. Staff can download video modules on their phones, complete quizzes during shift breaks without internet, and sync scores once reconnected."]
    ]
  },
  "manufacturing": {
    title: "Industrial Manufacturing & Safety Compliance LMS",
    subtitle: "Ruggedized workforce training for factories, assembly lines, and logistics networks with OSHA compliance, equipment safety sign-offs, and IoT simulator syncing.",
    eyebrow: "Industrial Solution",
    badge: "OSHA & Safety Ready",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Factory Accident Reduction", value: "-45%" },
      { label: "Safety Certification Rate", value: "100%" },
      { label: "Shift Workers Trained", value: "250,000+" }
    ],
    overview: [
      "In manufacturing and heavy industry, workplace safety is paramount. Operating heavy machinery, handling hazardous chemicals, and managing assembly lines without proper certification leads to industrial accidents and crippling regulatory fines.",
      "Skydot deploys robust manufacturing LMS solutions designed for shop-floor employees. We replace paper training sign-off sheets with digital QR-code verification, automate OSHA/EHS safety certifications, and integrate multilingual video training modules accessible from factory floor kiosks or mobile devices."
    ],
    capabilities: [
      { title: "Automated OSHA & EHS Safety Tracking", description: "Mandatory pre-shift safety certifications with automatic machine lockout rules for uncertified personnel.", icon: ShieldCheck },
      { title: "QR-Code Equipment Certification Verification", description: "Supervisors scan employee ID badges via mobile phones to verify live machine operation certification on the shop floor.", icon: Zap },
      { title: "Multilingual Shop-Floor Video Modules", description: "Delivering safety procedures in multiple regional languages with visual interactive hazard identification quizzes.", icon: Globe },
      { title: "Shift-Based Attendance & Toolbox Talks", description: "Digital logging of daily 10-minute safety toolbox talks and assembly line briefing attendances.", icon: Users },
      { title: "Standard Operating Procedure (SOP) Versioning", description: "Automated notifications requiring employees to re-certify whenever engineering updates equipment operating manuals.", icon: Layers },
      { title: "IoT & VR Safety Simulator Integration", description: "Connecting VR welding and forklift training simulators directly into employee competency transcripts.", icon: Cpu }
    ],
    useCases: [
      { title: "Automotive Assembly Line Safety", desc: "Certifying 10,000+ assembly workers on robotics safety and quality control inspection protocols." },
      { title: "Chemical Processing Plant Compliance", desc: "Rigorous HAZMAT handling certifications with automated annual regulatory refresher exams." },
      { title: "Global Supply Chain & Logistics Onboarding", desc: "Standardizing warehouse safety and forklift operation training across 30 distribution centers." }
    ],
    faq: [
      ["Can shop-floor workers who don't have corporate email addresses log into Moodle?", "Yes! We configure custom SMS OTP authentication or Employee ID / PIN login methods so factory workers without company email accounts can easily access training kiosks."]
    ]
  },
  "banking": {
    title: "Banking, Financial Services & Regulatory Compliance",
    subtitle: "High-security training portals for banks, fintechs, and insurance firms with automated Anti-Money Laundering (AML), KYC certifications, and FINRA audit trails.",
    eyebrow: "Financial Sector Solution",
    badge: "SOC2 & ISO 27001",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Regulatory Audit Pass", value: "100%" },
      { label: "Security Hardening", value: "Bank-Grade" },
      { label: "Financial Analysts Served", value: "120,000+" }
    ],
    overview: [
      "Financial institutions operate in one of the world's most strictly regulated environments. Failure to train employees on Anti-Money Laundering (AML), Data Privacy, GDPR, or insider trading rules can result in multi-million dollar penalties and loss of banking licenses.",
      "Skydot builds bank-grade Moodle Workplace platforms fortified with advanced cybersecurity controls. We automate mandatory annual compliance campaigns, enforce strict time-tracked course completion rules, and maintain tamper-proof audit histories for central bank and financial regulatory inspectors."
    ],
    capabilities: [
      { title: "Automated AML & KYC Recertification", description: "Mandatory annual regulatory training campaigns with automated escalation emails to branch managers for non-compliant staff.", icon: Clock },
      { title: "Tamper-Proof Audit Trails & Forensics", description: "Immutable database logging that proves exact course completion durations and IP addresses during regulatory audits.", icon: Database },
      { title: "Bank-Grade Security & Penetration Testing", description: "Regular OWASP Top-10 security assessments, WAF hardening, and multi-factor biometric login enforcement.", icon: Lock },
      { title: "Wealth Management & Product Training", description: "Continuous upskilling for financial advisors on new investment instruments, loan products, and market regulations.", icon: BarChart },
      { title: "Branch & Franchise Multi-Tenancy", description: "Isolated training portals for retail branch networks, wealth management divisions, and international subsidiaries.", icon: Building },
      { title: "HRIS & Active Directory Federation", description: "Instant synchronization with banking HR records to suspend system access when employee security clearances change.", icon: LinkIcon }
    ],
    useCases: [
      { title: "National Commercial Bank Compliance", desc: "Executing annual AML and fraud prevention certifications for 25,000 branch employees nationwide." },
      { title: "Fintech Rapid Scaling & Onboarding", desc: "Onboarding remote engineering and customer support teams on PCI-DSS and data security standards." },
      { title: "Insurance Underwriter Certification Academy", desc: "Delivering continuing education credits and product license exam prep for regional insurance brokers." }
    ],
    faq: [
      ["How do you guarantee that employees actually spend time reading compliance slides instead of skipping them?", "We implement custom minimum-time enforcement timers and interactive question checks per slide. An employee cannot proceed to the final certification exam until they have actively spent the mandatory required minutes in the lesson."]
    ]
  },
  "insurance": {
    title: "Insurance & Risk Management Certification Platform",
    subtitle: "Empower insurance agents, underwriters, and brokers with continuous education, product licensing portals, and automated regulatory compliance tracking.",
    eyebrow: "Insurance Sector Solution",
    badge: "Broker Certification",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Licensed Agents Trained", value: "80,000+" },
      { label: "CE Credit Accuracy", value: "100%" },
      { label: "Product Rollout Speed", value: "2x Faster" }
    ],
    overview: [
      "The insurance industry relies on vast networks of internal underwriters, independent agents, and regional brokers who must stay constantly informed on complex policy underwriting guidelines, claims processing rules, and state/national insurance commission laws.",
      "Skydot engineers multi-tenant Moodle Workplace solutions tailored for insurance carriers. We create branded agent portals where brokers can earn continuing education (CE) credits, take product certification exams, and access searchable knowledge bases of policy documentation from any mobile device."
    ],
    capabilities: [
      { title: "Independent Broker Certification Portals", description: "Branded external training hubs allowing independent insurance agents to earn product selling certifications.", icon: Award },
      { title: "Continuing Education (CE) Credit Tracking", description: "Automated calculation and state registry reporting of CE credit hours required for annual broker license renewals.", icon: Clock },
      { title: "Rapid New Policy Rollout Training", description: "Instant deployment of interactive product walkthroughs and micro-assessments when new insurance lines are launched.", icon: Zap },
      { title: "Claims Processing Simulation Modules", description: "Interactive branching scenarios where adjusters practice investigating complex claims and detecting fraud markers.", icon: Brain },
      { title: "Multi-Tiered Agency Hierarchies", description: "Structuring reporting lines so regional agency directors can track the certification readiness of all sub-brokers.", icon: Layers },
      { title: "CRM & Policy Administration Sync", description: "Connecting Moodle with Salesforce or Guidewire so only certified agents are authorized to quote specific policy lines.", icon: LinkIcon }
    ],
    useCases: [
      { title: "National Life & Health Broker Network", desc: "Certifying 15,000 independent brokers on new annual health policy changes and compliance mandates." },
      { title: "Property & Casualty Claims Adjuster Academy", desc: "Simulated field inspection training and fraud detection workshops for regional claims adjusters." },
      { title: "Underwriter Risk Assessment Upskilling", desc: "Advanced actuarial and underwriting continuous education programs for corporate risk analysts." }
    ],
    faq: [
      ["Can we restrict an agent from selling a specific insurance product in our CRM if they haven't passed the Moodle exam?", "Yes! Through our real-time CRM API connectors, the moment an agent passes the product exam in Moodle, their certification flag is updated in Salesforce/Guidewire, instantly unlocking their ability to generate quotes for that product."]
    ]
  },
  "ngo": {
    title: "Non-Profit Organizations & Global Community Learning",
    subtitle: "Low-bandwidth, multilingual, and offline-capable e-learning platforms for international NGOs, humanitarian foundations, and UN development agencies.",
    eyebrow: "Humanitarian Solution",
    badge: "Offline & Mobile Ready",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Global Learners Reached", value: "1.5M+" },
      { label: "Languages Supported", value: "40+" },
      { label: "Low-Bandwidth Efficiency", value: "100%" }
    ],
    overview: [
      "International NGOs and humanitarian organizations face unique training challenges: their learners are often field workers, volunteers, and community leaders located in remote, developing regions with unreliable internet connectivity, low-end smartphones, and diverse linguistic backgrounds.",
      "Skydot specializes in engineering highly optimized, low-bandwidth Moodle platforms for global development agencies. We integrate offline-first mobile apps, support right-to-left (RTL) languages like Arabic and Urdu, and optimize video streaming bitrates so critical humanitarian training reaches everyone, anywhere."
    ],
    capabilities: [
      { title: "Offline-First Mobile App Engineering", description: "Learners in remote field camps can download entire courses over Wi-Fi, study offline, and sync progress when reconnected.", icon: Zap },
      { title: "40+ Language Localization & RTL Support", description: "Complete interface and content translation support, including seamless rendering for Arabic, Farsi, Swahili, and French.", icon: Globe },
      { title: "Extreme Low-Bandwidth Optimization", description: "Compressing images, audio, and video assets and removing heavy background scripts so pages load over 2G/3G cellular networks.", icon: Cpu },
      { title: "Volunteer & Field Worker Onboarding", description: "Streamlined, self-registration portals with automated SMS/WhatsApp verification for rapid deployment during crises.", icon: Users },
      { title: "Donor & Grant Impact Reporting", description: "Generating transparent, granular attendance and completion data reports required by international aid donors and UN agencies.", icon: BarChart },
      { title: "Open-Source & Cost-Effective Hosting", description: "Maximizing NGO funding efficiency by utilizing pure open-source Moodle architectures with zero per-user licensing fees.", icon: Server }
    ],
    useCases: [
      { title: "International Refugee Relief Training", desc: "Deploying rapid humanitarian assistance and child protection training to 20,000 field volunteers across Africa and the Middle East." },
      { title: "Global Healthcare Worker Upskilling", desc: "Delivering maternal health and disease prevention video courses to rural community nurses in low-connectivity regions." },
      { title: "Environmental & Conservation Academies", desc: "Educating global grassroots activists on sustainable agriculture and climate resilience strategies." }
    ],
    faq: [
      ["How does Moodle handle learners who have no internet access for weeks at a time?", "Our customized Moodle Mobile app stores course packages and quiz attempts locally on the smartphone's SQLite database. When the volunteer returns to an area with cellular signal or Wi-Fi, the app automatically synchronizes all timestamps and grades with the cloud server."]
    ]
  },
  "training-academy": {
    title: "Commercial Training Academies & Certification Hubs",
    subtitle: "Turnkey e-commerce LMS portals for commercial training providers, test-prep institutes, and professional certification associations with Stripe/Razorpay billing.",
    eyebrow: "Commercial LMS Solution",
    badge: "E-Commerce Ready",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Annual Course Sales", value: "$25M+" },
      { label: "Payment Gateways", value: "Stripe/Razorpay" },
      { label: "Student Renewal Rate", value: "82%" }
    ],
    overview: [
      "For commercial training institutes, language academies, and professional certification bodies, your LMS is your primary revenue engine. You need an attractive, frictionless storefront that converts visitors into paying students, combined with secure content protection to prevent course piracy.",
      "Skydot transforms Moodle into a high-converting commercial e-learning marketplace. We integrate payment gateways (Stripe, Razorpay, PayPal), build subscription and coupon discount engines, implement video DRM anti-piracy protection, and automate branded verifiable PDF certificate generation upon course completion."
    ],
    capabilities: [
      { title: "Integrated E-Commerce & Payment Gateways", description: "Instant course purchasing via Stripe, Razorpay, PayPal, or local bank transfers with automated tax receipt generation.", icon: ShieldCheck },
      { title: "Subscription Bundles & Coupon Discounts", description: "Creating monthly VIP membership tiers, multi-course certification bundles, and promotional discount codes.", icon: Sparkles },
      { title: "Video DRM & Content Anti-Piracy Protection", description: "Preventing unauthorized screen recording and video downloading through encrypted HLS streaming and dynamic user watermarking.", icon: Lock },
      { title: "Verifiable Digital Badges & QR Certificates", description: "Issuing PDF diplomas embedded with unique QR verification codes that employers can scan to verify authenticity online.", icon: Award },
      { title: "Automated Student Email Marketing Sync", description: "Connecting Mailchimp, ActiveCampaign, or HubSpot to trigger automated upsell emails when students finish a course.", icon: LinkIcon },
      { title: "B2B Corporate Cohort Purchasing", description: "Allowing corporate clients to purchase 50 seats in bulk and self-manage their employee enrollments via a dedicated manager portal.", icon: Building }
    ],
    useCases: [
      { title: "Professional IT Certification Academy", desc: "Selling cloud computing, cybersecurity, and coding bootcamps to 30,000+ global students with automated grading lab environments." },
      { title: "National Language & Test Prep Institute", desc: "Delivering IELTS, TOEFL, and GRE mock exam simulations with automated speaking and writing scoring." },
      { title: "Executive Leadership Coaching Marketplace", desc: "Offering premium masterclasses with integrated 1-on-1 Zoom coaching calendar bookings and peer networking forums." }
    ],
    faq: [
      ["Can we sell courses to corporate clients where they buy 100 seats at once?", "Yes! Our B2B cohort purchasing module allows a corporate manager to buy a bulk voucher pack via invoice or credit card. They receive a dedicated dashboard to invite their 100 employees and track their team's progress."]
    ]
  },
  "employee-learning": {
    title: "Workforce Development & Employee Learning Hub",
    subtitle: "Engage, upskill, and retain your talent with continuous employee learning programs, peer mentorship networks, skill marketplaces, and AI career pathways.",
    eyebrow: "Talent Retention Solution",
    badge: "Continuous Learning",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Employee Retention Boost", value: "+28%" },
      { label: "Daily Active Learners", value: "85%" },
      { label: "Internal Mobility Rate", value: "2x" }
    ],
    overview: [
      "The modern workforce values continuous career growth and skill development above almost all other corporate perks. When employees feel their company isn't investing in their professional evolution, retention drops and talent migrates to competitors.",
      "Skydot designs vibrant, employee-centric learning ecosystems built on Moodle Workplace. We move beyond boring mandatory videos to create self-directed skill marketplaces, mentorship pairing programs, gamified team learning challenges, and AI-recommended learning paths aligned with internal promotion opportunities."
    ],
    capabilities: [
      { title: "AI-Powered Personalized Career Pathways", description: "Recommending relevant courses, articles, and podcasts based on an employee's current job role and desired career goals.", icon: Brain },
      { title: "Internal Skill Marketplace & Tagging", description: "Mapping institutional competencies so managers can easily identify internal employees who possess emerging skills like AI or data analysis.", icon: Layers },
      { title: "Gamified Team Learning Challenges", description: "Fostering healthy departmental competition with monthly learning XP leaderboards, badges, and company-wide recognition.", icon: Sparkles },
      { title: "Peer Mentorship & Coaching Hubs", description: "Connecting junior employees with senior subject-matter experts for 1-on-1 virtual mentoring and knowledge sharing.", icon: Users },
      { title: "Micro-Learning & Workflow Integration", description: "Delivering bite-sized 3-minute lessons directly into Slack, Microsoft Teams, or mobile devices during daily workflows.", icon: Zap },
      { title: "Comprehensive 360-Degree Feedback & ROI", description: "Measuring the direct impact of learning initiatives on employee promotion rates, performance scores, and retention metrics.", icon: BarChart }
    ],
    useCases: [
      { title: "Enterprise Digital Transformation Upskilling", desc: "Upskilling 10,000 legacy employees on modern cloud computing, agile methodologies, and AI productivity tools." },
      { title: "Remote Workforce Culture & Engagement", desc: "Building a unified digital campus for a 100% remote global team to foster cultural cohesion and continuous learning." },
      { title: "Leadership & High-Potential Mentorship", desc: "Nurturing the next generation of vice presidents and directors through structured 6-month leadership cohorts." }
    ],
    faq: [
      ["How do we encourage employees to log into the LMS voluntarily when they are already busy?", "We integrate learning directly into their daily flow of work. By embedding micro-learning notifications into Slack or Microsoft Teams and introducing gamified peer recognition, voluntary engagement typically increases by over 60%."]
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
