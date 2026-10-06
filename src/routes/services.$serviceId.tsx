import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { PageHero, SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Settings, Code, Palette, Puzzle, Layout, Server, Brain, BarChart, 
  Link as LinkIcon, Cpu, Layers, Zap, RefreshCw, ArrowUp, GraduationCap, 
  Headset, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, Users, Database, Sparkles,
  Globe, Building, Building2
} from "lucide-react";

export const Route = createFileRoute("/services/$serviceId")({
  component: ServiceDetailPage,
});

interface ServiceData {
  title: string;
  subtitle: string;
  eyebrow: string;
  badge: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  overview: string[];
  deliverables: { title: string; description: string; icon: any }[];
  process: { step: string; title: string; desc: string }[];
  faq: [string, string][];
}

const SERVICES_DATA: Record<string, ServiceData> = {
  "upgrades": {
    title: "Enterprise Moodle Upgrades & Modernization",
    subtitle: "Zero-Downtime migration to Moodle 4.x and Moodle Workplace with full database refactoring, theme modernization, and legacy plugin compatibility assurance.",
    eyebrow: "Certified Moodle Support",
    badge: "Moodle 4.4+ Ready",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Average Cutover Time", value: "< 15 Mins" },
      { label: "Data Integrity Rate", value: "100%" },
      { label: "Performance Gain", value: "Up to 3x" }
    ],
    overview: [
      "Upgrading an enterprise LMS is more than just running a database script. In large-scale educational institutions and Fortune-500 corporations, legacy plugins, custom theme modifications, and complex MySQL/PostgreSQL schemas require careful architectural refactoring before moving to modern Moodle 4.x environments.",
      "Inspired by global Moodle best practices and rigorous engineering standards, our upgrade methodology guarantees zero data loss and zero unexpected downtime. We create full staging replicas, audit all third-party modules, rewrite deprecated PHP 7.x/8.0 code to PHP 8.2+ standards, and optimize database indexing for maximum responsiveness."
    ],
    deliverables: [
      { title: "Pre-Upgrade Code & Plugin Audit", description: "Deep inspection of all installed third-party modules and custom codebases to identify deprecated APIs before touching production.", icon: Code },
      { title: "Zero-Downtime Staging Replication", description: "We mirror your live database and file system in a sandboxed environment to dry-run the entire upgrade sequence.", icon: RefreshCw },
      { title: "Database Schema & Query Tuning", description: "Refactoring large log tables, gradebook histories, and custom index structures to eliminate bottlenecks in newer Moodle releases.", icon: Database },
      { title: "Theme Modernization to Bootstrap 5", description: "Upgrading your existing visual theme to leverage modern responsive grid layouts and sleek accessibility standards.", icon: Palette },
      { title: "Automated Regression Testing", description: "Simulating thousands of concurrent user logins, quiz submissions, and SCORM completions to ensure flawless stability.", icon: ShieldCheck },
      { title: "Post-Upgrade Training & Hyper-Care", description: "Dedicated 30-day monitoring and hands-on administrator workshops to help your team master new Moodle 4.x navigation.", icon: GraduationCap }
    ],
    process: [
      { step: "01", title: "Environment Discovery & Backup", desc: "Complete snapshot of database, moodledata, and source files with dependency mapping." },
      { step: "02", title: "Staging Refactoring & Test Upgrade", desc: "Executing the migration in an isolated sandbox while refactoring incompatible plugins." },
      { step: "03", title: "User Acceptance Testing (UAT)", desc: "Inviting stakeholder verification on speed, UI clarity, and course accessibility." },
      { step: "04", title: "Live Cutover & DNS Sync", desc: "Seamless production transition during low-traffic windows with instant fallback protocols." }
    ],
    faq: [
      ["Will our customized plugins break during the upgrade?", "No. During our phase-one audit, we identify every custom plugin and update its code structure to comply with Moodle 4.x core API guidelines before the live upgrade."],
      ["How long will our learning platform be offline during cutover?", "For most enterprise deployments, live maintenance downtime is under 15 minutes. We prepare the database structure in advance using blue/green deployment strategies."],
      ["Can we upgrade directly from an old Moodle 3.5 or 3.9 LTS system?", "Yes! We specialize in multi-hop migrations from legacy 3.x systems directly to the latest stable Moodle 4.x release with full gradebook preservation."]
    ]
  },
  "moodle-consulting": {
    title: "Strategic Moodle & E-Learning Consulting",
    subtitle: "Architecting high-concurrency learning ecosystems, governance frameworks, and digital transformation roadmaps for universities and global enterprises.",
    eyebrow: "Strategic Advisory",
    badge: "Enterprise Architects",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Learner Capacity Planned", value: "5M+" },
      { label: "Cost Reduction", value: "35%" },
      { label: "ISO Compliance", value: "100%" }
    ],
    overview: [
      "Choosing the right architecture and configuration for Moodle requires deep alignment between pedagogical goals and IT infrastructure. Poor initial architectural choices can lead to slow page loads during exam periods, tangled permissions, and expensive scalability bottlenecks.",
      "Our solution architects bring over 15 years of Moodle ecosystem expertise, helping chief learning officers and IT directors design fault-tolerant, secure, and highly engaging digital learning platforms tailored to exact institutional requirements."
    ],
    deliverables: [
      { title: "Infrastructure & Capacity Planning", description: "Designing AWS, Azure, or private cloud architectures capable of supporting 50,000+ simultaneous quiz takers.", icon: Server },
      { title: "Pedagogical & Workflow Design", description: "Structuring course hierarchies, competency frameworks, and conditional release rules for optimal learner engagement.", icon: Brain },
      { title: "Security & ISO 27001 Compliance", description: "Hardening authentication flows, data encryption at rest/in transit, and role-based access control (RBAC).", icon: ShieldCheck },
      { title: "Total Cost of Ownership (TCO) Optimization", description: "Eliminating redundant licensing costs and optimizing cloud server compute resource allocation.", icon: BarChart },
      { title: "Vendor & Technology Selection", description: "Objective evaluations of proctoring tools, virtual classrooms (Zoom, Teams), and content authoring suites.", icon: Layers },
      { title: "Change Management & Governance", description: "Formulating clear policies for course archiving, user de-provisioning, and long-term platform maintenance.", icon: Users }
    ],
    process: [
      { step: "01", title: "Stakeholder Discovery Interviews", desc: "Aligning IT, academic leadership, and HR on core KPIs and technical constraints." },
      { step: "02", title: "Architectural Blueprint Creation", desc: "Drafting comprehensive server topologies, integration flows, and security protocols." },
      { step: "03", title: "Pilot Prototype Validation", desc: "Building a proof-of-concept environment to validate complex user journeys and integrations." },
      { step: "04", title: "Executive Roadmap Delivery", desc: "Presenting a clear, phased implementation plan with predictable budgets and milestones." }
    ],
    faq: [
      ["What is the difference between Moodle Core and Moodle Workplace?", "Moodle Core is optimized for academic education, whereas Moodle Workplace adds multi-tenancy, dynamic organizational hierarchies, automated compliance workflows, and custom reporting for corporate training."],
      ["How do you help reduce cloud hosting bills for existing LMS setups?", "We analyze database query logs, implement Redis caching layers, and configure auto-scaling Kubernetes clusters so you only pay for high compute during peak exam windows."]
    ]
  },
  "moodle-implementation": {
    title: "End-to-End Moodle Implementation & Deployment",
    subtitle: "Turnkey enterprise LMS setup, custom theme branding, authentication SSO integration, and automated course enrollment workflows.",
    eyebrow: "Turnkey Solution",
    badge: "Fast-Track Delivery",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Deployment Speed", value: "3-6 Weeks" },
      { label: "System Uptime SLA", value: "99.99%" },
      { label: "User Adoption Rate", value: "94%" }
    ],
    overview: [
      "Launching a enterprise-grade learning platform requires seamless execution across server engineering, UI/UX branding, and data synchronization. Skydot delivers turnkey Moodle implementations that are ready for production on day one.",
      "We handle everything from Linux server provisioning and SSL configuration to OAuth2/SAML SSO setups with Microsoft Entra ID (Azure AD), Google Workspace, and Okta. Your learners receive an intuitive, frictionless login experience matched to your brand identity."
    ],
    deliverables: [
      { title: "High-Availability Server Setup", description: "Configuring load-balanced web servers with separated database and file storage clusters.", icon: Server },
      { title: "Single Sign-On (SSO) Integration", description: "Connecting OAuth2, SAML 2.0, LDAP, or Active Directory for automated user authentication and role mapping.", icon: LinkIcon },
      { title: "Custom Brand UI/UX Styling", description: "Applying your organization's typography, color palette, and logo to create a cohesive portal experience.", icon: Palette },
      { title: "Automated Enrollment Rules", description: "Setting up cohort syncs and dynamic grouping based on HR departments or academic semester codes.", icon: Zap },
      { title: "SCORM & LTI Tool Configuration", description: "Connecting interactive courseware, H5P modules, and external tools like Turnitin or BigBlueButton.", icon: Puzzle },
      { title: "Administrator & Author Handover", description: "Delivering customized video manuals and live coaching for your internal management teams.", icon: Award }
    ],
    process: [
      { step: "01", title: "Server & Domain Provisioning", desc: "Setting up cloud VPCs, DNS records, SSL certificates, and firewall policies." },
      { step: "02", title: "Core Configuration & SSO Sync", desc: "Installing stable Moodle releases and establishing secure identity provider connections." },
      { step: "03", title: "Theme Branding & Course Structure", desc: "Designing user dashboards, course templates, and navigation menus." },
      { step: "04", title: "Go-Live & Hyper-Care Launch", desc: "Opening doors to learners with real-time support monitoring and performance tracking." }
    ],
    faq: [
      ["Can you integrate our new Moodle instance with our existing HRIS or ERP?", "Absolutely. We build bidirectional synchronization pipelines with SAP, Workday, Salesforce, Oracle, and custom university campus management systems."],
      ["Do you provide hosting as part of implementation?", "We can deploy either on your own AWS/Azure/GCP cloud tenant or host your platform on Skydot's managed high-concurrency cloud infrastructure."]
    ]
  },
  "moodle-customization": {
    title: "Bespoke Moodle Customization & Workflow Engineering",
    subtitle: "Transforming standard Moodle into a tailored digital campus with custom grading scales, specialized student portals, and automated compliance tracking.",
    eyebrow: "Tailored Engineering",
    badge: "100% Bespoke Code",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Custom Modules Built", value: "350+" },
      { label: "API Compatibility", value: "100%" },
      { label: "Workflow Efficiency", value: "+65%" }
    ],
    overview: [
      "No two organizations have identical training workflows or assessment rules. When off-the-shelf LMS features fall short of your operational needs, our engineering team custom-codes Moodle to fit your exact business logic.",
      "Whether you need complex multi-stage certification approvals, gamified leaderboards, custom proctoring rules, or specialized transcript generation, we write clean, modular PHP and JavaScript code that adheres strictly to Moodle coding standards so future upgrades remain effortless."
    ],
    deliverables: [
      { title: "Custom Assessment & Grading Engines", description: "Building weighted GPA calculators, rubric evaluations, and specialized competency sign-offs.", icon: Award },
      { title: "Tailored Dashboard Experiences", description: "Creating role-specific landing pages for students, corporate trainers, department managers, and auditors.", icon: Layout },
      { title: "Automated Certificate & Badging", description: "Dynamic PDF certificate generation with QR code verification and blockchain credential archiving.", icon: CheckCircle2 },
      { title: "Gamification & Engagement Modules", description: "Implementing custom experience points (XP), achievement badges, and interactive peer leaderboards.", icon: Sparkles },
      { title: "Custom Reporting & PDF Exports", description: "Designing automated weekly attendance, completion, and compliance reports emailed directly to managers.", icon: BarChart },
      { title: "Workflow & Notification Automation", description: "Triggering custom SMS, WhatsApp, and email reminders based on course inactivity or approaching deadlines.", icon: Zap }
    ],
    process: [
      { step: "01", title: "Requirement Specification & UI Mockups", desc: "Detailing exact user stories, wireframes, and data flow diagrams for the new feature." },
      { step: "02", title: "Modular Code Engineering", desc: "Writing clean, documented local plugins and block extensions in an isolated Git repository." },
      { step: "03", title: "Security & Unit Testing", desc: "Verifying code against SQL injection, XSS vulnerabilities, and memory leak standards." },
      { step: "04", title: "Staging Deployment & Handover", desc: "Deploying to sandbox for user sign-off before integrating seamlessly into production." }
    ],
    faq: [
      ["Will customizing Moodle prevent us from updating to future versions?", "No! We never hack core Moodle files directly. We develop all customizations as clean local plugins, blocks, or child themes that plug into official Moodle hooks, ensuring 100% upgrade safety."]
    ]
  },
  "plugin-development": {
    title: "Custom Moodle Plugin & Module Development",
    subtitle: "Enterprise-grade PHP and React plugin engineering for Moodle blocks, activity modules, authentication drivers, and payment gateways.",
    eyebrow: "Software Engineering",
    badge: "Official API Standards",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Code Test Coverage", value: "98%" },
      { label: "Security Compliant", value: "ISO 27001" },
      { label: "Delivery Warranty", value: "1 Year" }
    ],
    overview: [
      "When your e-learning strategy requires groundbreaking functional capabilities, Skydot builds custom Moodle plugins from scratch. Our full-stack developers specialize in creating activity modules, enrollment drivers, block widgets, and custom REST API endpoints.",
      "All plugins are engineered following official Moodle coding guidelines, complete with PHPDoc documentation, automated PHPUnit tests, and privacy API implementation (GDPR compliance), making them ready for private enterprise deployment or publishing on the official Moodle Plugin Directory."
    ],
    deliverables: [
      { title: "Custom Activity & Content Modules", description: "Interactive simulations, custom submission types, and collaborative classroom exercises.", icon: Puzzle },
      { title: "Payment Gateway & E-Commerce Plugins", description: "Integrating Stripe, Razorpay, PayPal, or custom local banking APIs for instant course purchasing and invoicing.", icon: ShieldCheck },
      { title: "Authentication & Identity Drivers", description: "Custom SAML, OAuth2, or biometric login verification plugins tailored to proprietary security hardware.", icon: LinkIcon },
      { title: "AI & LLM Integration Plugins", description: "Connecting OpenAI, Claude, or local LLMs to generate automated essay feedback and study summaries.", icon: Brain },
      { title: "Custom Enrollment & Cohort Plugins", description: "Automating user assignments based on real-time API feeds from external licensing or HR systems.", icon: Users },
      { title: "Third-Party API Connector Blocks", description: "Displaying live external data (like ERP credentials or Zoom schedules) directly on learner course pages.", icon: Code }
    ],
    process: [
      { step: "01", title: "API & Data Schema Architecture", desc: "Mapping database tables, capability definitions, and event observers." },
      { step: "02", title: "Agile Sprints & Prototyping", desc: "Iterative development with bi-weekly demo releases for stakeholder feedback." },
      { step: "03", title: "Automated QA & Security Review", desc: "Running Moodle CodeChecker, PHPStan, and automated regression suites." },
      { step: "04", title: "Production Packaging & Warranty", desc: "Delivering packaged ZIP modules with installation guides and 1-year bug-fix warranty." }
    ],
    faq: [
      ["Can you take over and maintain an existing custom plugin written by another agency?", "Yes. We perform a comprehensive code audit, refactor any security or performance flaws, and assume ongoing maintenance and version compatibility support."]
    ]
  },
  "theme-development": {
    title: "Branded, Responsive Moodle & LMS Theme Design",
    subtitle: "Stunning, state-of-the-art UI/UX theme engineering built on Bootstrap 5 and modern CSS styling to transform Moodle into a premium consumer-grade app.",
    eyebrow: "UI/UX Engineering",
    badge: "Glassmorphism & Dark Mode",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Mobile Responsiveness", value: "100%" },
      { label: "WCAG Accessibility", value: "AAA Level" },
      { label: "Page Load Speed", value: "< 0.8s" }
    ],
    overview: [
      "Let's face it: default Moodle looks like an academic database from 2010. Today's modern learners expect the sleek visual polish, dark mode toggles, micro-animations, and intuitive navigation of platforms like Netflix, Notion, or Apple.",
      "Skydot designs and engineers custom Moodle themes that captivate users from first glance. We build on top of modern Boost and Bootstrap 5 architectures, incorporating custom login portals, personalized progress cards, smooth hover transitions, and full WCAG 2.1 AAA accessibility compliance."
    ],
    deliverables: [
      { title: "Bespoke Login & Dashboard Portals", description: "Stunning split-screen login pages with dynamic background imagery and personalized welcome banners.", icon: Layout },
      { title: "Dark Mode & Color System Toggles", description: "Built-in theme switchers allowing learners to seamlessly transition between crisp light and obsidian dark modes.", icon: Palette },
      { title: "Intuitive Course Card Grid Layouts", description: "Replacing clunky text lists with modern visual course cards displaying progress bars and instructor avatars.", icon: Sparkles },
      { title: "Mobile-First Responsive Engineering", description: "Flawless rendering across iPhones, iPads, Android devices, and 4K desktop monitors with touch-friendly menus.", icon: Zap },
      { title: "WCAG 2.1 Accessibility Compliance", description: "High-contrast color modes, screen-reader optimized ARIA attributes, and full keyboard navigation support.", icon: CheckCircle2 },
      { title: "Custom Typography & Iconography", description: "Integrating premium Google Fonts (Inter, Outfit) and custom vector icon sets for a polished corporate feel.", icon: Award }
    ],
    process: [
      { step: "01", title: "Figma UI/UX Prototyping", desc: "Creating pixel-perfect interactive design wireframes for desktop, tablet, and mobile screens." },
      { step: "02", title: "CSS/SCSS & Mustache Templating", desc: "Converting designs into highly efficient Moodle theme renderers and layout files." },
      { step: "03", title: "Cross-Browser & Device Testing", desc: "Rigorous testing across Safari, Chrome, Edge, Firefox, and iOS/Android viewports." },
      { step: "04", title: "Theme Installation & CSS Optimization", desc: "Deploying to production with minified stylesheets and optimized asset caching." }
    ],
    faq: [
      ["Can we have different theme brandings for different departments or subsidiaries?", "Yes! With our multi-tenant and cohort-based theming engines, different user groups can see completely distinct logos, colors, and dashboard layouts on the same Moodle instance."]
    ]
  },
  "moodle-hosting": {
    title: "Managed High-Concurrency Moodle Cloud Hosting",
    subtitle: "Ultra-fast, fault-tolerant cloud infrastructure on AWS, Microsoft Azure, and MeitY-empanelled cloud data centers, protected by Cloudflare Enterprise WAF & CDN.",
    eyebrow: "Cloud Infrastructure",
    badge: "MeitY Empanelled & AWS/Azure",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Concurrent Quiz Takers", value: "50,000+" },
      { label: "Cloudflare Edge Nodes", value: "275+" },
      { label: "Uptime SLA Guarantee", value: "99.99%" }
    ],
    overview: [
      "Generic web hosts crash when 5,000 students log in simultaneously at 9:00 AM for a final exam. Moodle is a database-heavy, CPU-intensive PHP application that requires specialized caching layers, read-replicas, and auto-scaling server clusters to maintain sub-second response times under high-stakes load.",
      "Dynamic Pixel provides fully managed, white-glove cloud hosting on Amazon Web Services (AWS), Microsoft Azure, and Government of India MeitY-empanelled cloud infrastructures (NIC, AWS India, Azure India). We configure Redis session clusters, OPcache, database read-replicas, and Cloudflare Enterprise edge CDN & DDoS protection, backed by 24/7 DevOps monitoring and a financially enforceable 99.99% uptime SLA."
    ],
    deliverables: [
      { title: "MeitY-Empanelled Cloud Data Centers", description: "Deploying on Government of India Ministry of Electronics and Information Technology (MeitY) empanelled cloud infrastructures (AWS India, Azure India, NIC) ensuring complete data sovereignty, DPDP compliance, and public sector security.", icon: ShieldCheck },
      { title: "AWS & Microsoft Azure Auto-Scaling", description: "Elastic Kubernetes and EC2/VM cluster setups that scale compute pods automatically within seconds during high-stakes exam surges and scale down during off-peak hours.", icon: Server },
      { title: "Cloudflare Enterprise CDN & WAF Protection", description: "Global 275+ edge node caching and enterprise Web Application Firewall (WAF) to neutralize Layer 3-7 DDoS attacks, SQL injection attempts, and bad bots instantly.", icon: Globe },
      { title: "Redis In-Memory & OPcache Acceleration", description: "Offloading session state and application universal caching (MUC) to dedicated Redis clusters, reducing database queries by over 85%.", icon: Zap },
      { title: "Database Read-Replicas & High Availability", description: "Configuring multi-AZ PostgreSQL/MySQL read-replicas to isolate reporting queries from live student quiz submissions.", icon: Database },
      { title: "24/7 Real-Time DevOps & Disaster Recovery", description: "Automated Prometheus/Grafana alerting, hourly encrypted off-site backups, and guaranteed 15-minute emergency engineering response SLAs.", icon: Headset }
    ],
    process: [
      { step: "01", title: "Infrastructure Sizing & Cloud Audit", desc: "Analyzing current disk usage and database IOPS to size AWS, Azure, or MeitY cloud compute instances perfectly." },
      { step: "02", title: "Zero-Downtime Data Migration", desc: "Syncing files and database over encrypted rsync channels with automated checksum verification and zero data loss." },
      { step: "03", title: "Cloudflare WAF & Stress Simulating", desc: "Configuring Cloudflare edge routing and firing simulated traffic spikes (10,000+ concurrent requests) to verify auto-scaling triggers." },
      { step: "04", title: "DNS Cutover & 24/7 SLA Activation", desc: "Switching live traffic to the new cloud cluster with continuous 24/7 DevOps monitoring and emergency support." }
    ],
    faq: [
      ["What does MeitY-empanelled cloud hosting mean for educational and government institutions?", "MeitY (Ministry of Electronics and Information Technology, Government of India) empanelled cloud providers (such as AWS India and Microsoft Azure India) have passed rigorous government security audits. Hosting on MeitY-empanelled infrastructure ensures full compliance with Indian data sovereignty laws, public sector security guidelines, and DPDP regulations."],
      ["How does Cloudflare protect our Moodle instance during online exams?", "Cloudflare Enterprise edge caching absorbs static asset traffic (images, CSS, JS, SCORM videos) before it ever reaches your origin server, while the Cloudflare WAF inspects every HTTP request to block DDoS attacks and malicious bots with zero latency."]
    ]
  },
  "learning-analytics": {
    title: "Advanced Learning Analytics & Predictive Insights",
    subtitle: "Transform raw learner clickstreams into actionable intelligence with AI-driven dropout prediction, competency heatmaps, and executive PowerBI dashboards.",
    eyebrow: "Data Intelligence",
    badge: "AI-Powered Insights",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Dropout Prediction Accuracy", value: "91%" },
      { label: "Data Pipeline Latency", value: "< 5 Sec" },
      { label: "Custom KPI Reports", value: "Unlimited" }
    ],
    overview: [
      "Are your learners actually absorbing material, or just clicking 'Next' to finish mandatory compliance modules? Standard LMS reports only show basic completion checkmarks. To drive real educational ROI, decision-makers need deep behavioral analytics.",
      "Skydot extracts, cleanses, and visualizes granular learning data using xAPI, LRS (Learning Record Stores), and custom SQL analytics engines. We build automated predictive models that flag at-risk students weeks before they fail, alongside interactive executive dashboards in PowerBI, Tableau, and Apache Superset."
    ],
    deliverables: [
      { title: "Predictive Dropout & Risk Modeling", description: "Machine learning algorithms that analyze login frequency, quiz scores, and forum participation to alert advisors to struggling learners.", icon: Brain },
      { title: "Executive PowerBI & Tableau Dashboards", description: "Custom visual reports for C-level executives showing real-time departmental training ROI and compliance rates.", icon: BarChart },
      { title: "xAPI & Learning Record Store (LRS) Setup", description: "Capturing learning experiences from external simulators, mobile apps, and VR headsets into a centralized database.", icon: Database },
      { title: "Competency & Skill Gap Heatmaps", description: "Visualizing workforce readiness across branch offices or academic departments to guide targeted training investments.", icon: Layers },
      { title: "Automated Compliance Alerting", description: "Daily automated email summaries sent to HR managers highlighting expiring certifications or incomplete safety trainings.", icon: Clock },
      { title: "Custom SQL Query & Report Builders", description: "Empowering internal administrators with easy-to-use custom filtering tools to export exact CSV/Excel data cuts.", icon: Code }
    ],
    process: [
      { step: "01", title: "Data Audit & KPI Mapping", desc: "Identifying required business metrics and auditing existing database logging verbosity." },
      { step: "02", title: "ETL Pipeline Engineering", desc: "Building automated data extraction and transformation workflows into secure data warehouses." },
      { step: "03", title: "Dashboard & AI Model Design", desc: "Designing visual graphs and training machine learning risk classification algorithms." },
      { step: "04", title: "Stakeholder Rollout & Training", desc: "Delivering finished analytical suites with training for academic advisors and HR analysts." }
    ],
    faq: [
      ["Can we combine Moodle data with our internal HR performance reviews?", "Yes! We build automated data pipelines that merge Moodle completion logs with Workday, SAP, or BambooHR employee performance scores to measure true training impact."]
    ]
  },
  "erp-integration": {
    title: "Seamless ERP, HRIS & CRM LMS Integration",
    subtitle: "Automating organizational data flow between Moodle and SAP, Workday, Salesforce, Microsoft Entra ID, and campus management systems.",
    eyebrow: "Enterprise Integration",
    badge: "Zero-Touch Sync",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Manual Admin Time Saved", value: "90%" },
      { label: "Sync Reliability", value: "99.99%" },
      { label: "API Systems Supported", value: "50+" }
    ],
    overview: [
      "Manually importing CSV files of new employee hires or student enrollments is error-prone, insecure, and a massive waste of administrative time. In modern enterprise IT ecosystems, your LMS must operate in seamless real-time synchronization with your system of record.",
      "Skydot engineers robust, fault-tolerant middleware and direct API connectors between Moodle and major global enterprise platforms. When an employee is hired in Workday or a student enrolls in Oracle Campus Cloud, they are instantly provisioned in Moodle with the exact course assignments matching their role or degree program."
    ],
    deliverables: [
      { title: "Bidirectional HRIS Automated Sync", description: "Instant provisioning and de-provisioning of staff from Workday, SAP SuccessFactors, BambooHR, and Darwinbox.", icon: Users },
      { title: "CRM Salesforce & HubSpot Connectors", description: "Automatically enrolling customers into product training courses upon deal closure and syncing completion certificates back to CRM contacts.", icon: LinkIcon },
      { title: "University SIS & Banner Integration", description: "Real-time synchronization of academic terms, course catalogs, faculty assignments, and student rosters.", icon: GraduationCap },
      { title: "Automated Grade & Transcript Export", description: "Pushing final course grades and competency scores from Moodle directly back to central university registries or HR files.", icon: CheckCircle2 },
      { title: "Microsoft Entra ID & Google Workspace SSO", description: "Enterprise federation with multi-factor authentication (MFA) and automated departmental group syncing.", icon: ShieldCheck },
      { title: "Custom Webhook & Event Middleware", description: "Building resilient event-driven architectures that retry failed API calls automatically without data loss.", icon: Cpu }
    ],
    process: [
      { step: "01", title: "API Mapping & Security Review", desc: "Documenting field-level data mappings, authentication tokens, and firewall exemptions." },
      { step: "02", title: "Middleware & Connector Engineering", desc: "Developing secure REST/SOAP data connectors with comprehensive error logging tables." },
      { step: "03", title: "Sandbox Data Synchronization", desc: "Testing edge cases (name changes, department transfers, terminations) in isolated test environments." },
      { step: "04", title: "Automated Production Scheduling", desc: "Enabling real-time webhook triggers or scheduled cron jobs with automated admin error alerting." }
    ],
    faq: [
      ["What happens if our ERP system goes offline temporarily?", "Our integration middleware utilizes asynchronous queueing and exponential back-off retries. If your ERP is unreachable, data sync events are queued securely and processed immediately once connection is restored."]
    ]
  },
  "api-development": {
    title: "Custom REST API & Webhook Engineering",
    subtitle: "Extending Moodle's core web services with custom high-performance endpoints, OAuth2 secure tokens, and real-time webhook event triggers.",
    eyebrow: "Backend Engineering",
    badge: "REST & GraphQL Ready",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "API Response Latency", value: "< 45ms" },
      { label: "Security Standard", value: "OAuth 2.0" },
      { label: "Custom Endpoints Built", value: "500+" }
    ],
    overview: [
      "While Moodle includes standard web services, enterprise mobile apps, proprietary hardware simulators, and external dashboards often require custom data payloads that default APIs cannot provide. Poorly written external API queries can lock database tables and cripple site performance.",
      "Skydot develops secure, high-performance custom REST and GraphQL API plugins for Moodle. We design clean JSON schemas, implement OAuth 2.0 token authentication, and build real-time webhook broadcasting systems that notify external servers the exact millisecond a learner finishes a course."
    ],
    deliverables: [
      { title: "Custom RESTful JSON Endpoints", description: "Engineered endpoints tailored to your mobile apps or external frontends, returning optimized, lightweight data structures.", icon: Code },
      { title: "Real-Time Webhook Broadcasting", description: "Event-driven notifications that push instant HTTP POST alerts to your servers on quiz completion, login, or badging.", icon: Zap },
      { title: "OAuth 2.0 & JWT Security Hardening", description: "Replacing static API tokens with modern short-lived JWT access tokens and secure refresh token rotation.", icon: ShieldCheck },
      { title: "High-Concurrency Query Optimization", description: "Writing raw, optimized SQL backend queries within Moodle's DB wrapper to serve API requests in under 45 milliseconds.", icon: Cpu },
      { title: "Interactive Swagger / OpenAPI Docs", description: "Delivering complete interactive API documentation and Postman collections for your frontend developer teams.", icon: Layout },
      { title: "Rate Limiting & DDOS Throttling", description: "Protecting your LMS database by implementing intelligent API request throttling and IP whitelisting.", icon: Server }
    ],
    process: [
      { step: "01", title: "Payload Specification & Swagger Design", desc: "Defining exact request/response JSON contracts and error status codes with developer teams." },
      { step: "02", title: "Moodle Web Service Engineering", desc: "Coding custom external function classes and registering secure service functions in Moodle." },
      { step: "03", title: "Security & Load Benchmarking", desc: "Simulating 5,000+ API requests per minute with Apache JMeter to verify database response speeds." },
      { step: "04", title: "Production Deployment & Monitoring", desc: "Releasing endpoints with automated API access logging and latency dashboard tracking." }
    ],
    faq: [
      ["Can we use custom APIs to build our own React or Flutter mobile app for Moodle?", "Yes! Over 40% of our API engineering work is building high-speed custom endpoints specifically to power proprietary iOS, Android, and Next.js custom frontends for our clients."]
    ]
  },
  "multi-tenant-lms": {
    title: "Scalable Multi-Tenant LMS & Moodle Workplace",
    subtitle: "Deploy a single centralized platform that serves hundreds of distinct corporations, subsidiaries, or campus branches with complete visual and data isolation.",
    eyebrow: "Enterprise Architecture",
    badge: "Moodle Workplace",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Tenants per Instance", value: "500+" },
      { label: "Data Isolation Safety", value: "100%" },
      { label: "Admin Overhead Saved", value: "75%" }
    ],
    overview: [
      "Managing 20 separate Moodle installations for different company subsidiaries, franchise locations, or client corporations is an administrative nightmare and a waste of server infrastructure. Enterprise organizations need multi-tenancy.",
      "Skydot implements and custom-engineers Moodle Workplace and custom multi-tenant Moodle architectures. We enable you to operate hundreds of isolated 'virtual LMS portals' from a single backend database. Each tenant enjoys its own custom domain, branded color scheme, dedicated login page, and isolated user data."
    ],
    deliverables: [
      { title: "Complete Visual Tenant Branding", description: "Automatic switching of logos, CSS color palettes, and welcome banners based on the user's domain or organizational division.", icon: Palette },
      { title: "100% Data & Privacy Isolation", description: "Strict database scoping ensuring tenant administrators can only view, enroll, and report on learners within their own organization.", icon: ShieldCheck },
      { title: "Shared & Private Course Catalogs", description: "Publishing common core training modules globally while allowing individual tenants to author their own private courses.", icon: Layers },
      { title: "Custom Domain & URL Routing", description: "Configuring SSL certificates and routing so `clientA.yourlms.com` and `training.clientB.com` point seamlessly to their respective tenant portals.", icon: Globe },
      { title: "Tenant-Specific SSO & Authentication", description: "Allowing Tenant A to log in via Microsoft Azure AD while Tenant B utilizes Google Workspace or local email sign-up.", icon: LinkIcon },
      { title: "Automated Tenant Onboarding Scripts", description: "1-click admin tools to spin up a brand new fully branded tenant portal with default courses in under 60 seconds.", icon: Zap }
    ],
    process: [
      { step: "01", title: "Tenancy Governance & Hierarchy Planning", desc: "Designing organizational structures, role permissions, and content sharing rules." },
      { step: "02", title: "Core Multi-Tenant Installation", desc: "Configuring Moodle Workplace or custom tenant isolation layers on scalable cloud infrastructure." },
      { step: "03", title: "Tenant Branding & SSO Setup", desc: "Applying custom styling rules and connecting distinct identity providers for pilot departments." },
      { step: "04", title: "Global Administrator Handover", desc: "Training super-administrators on managing tenant quotas, global reporting, and system maintenance." }
    ],
    faq: [
      ["Is learner data strictly separated between tenants for GDPR compliance?", "Yes. Multi-tenant architectures enforce strict database-level query restrictions. A tenant administrator or instructor is cryptographically restricted from accessing any user records outside their assigned tenant ID."]
    ]
  },
  "performance-optimization": {
    title: "High-Load Performance Tuning & Database Optimization",
    subtitle: "Eliminating 504 Gateway Timeouts, sluggish page loads, and database locks through Redis session clusters, query indexing, and PHP 8.x OPcache tuning.",
    eyebrow: "Performance Engineering",
    badge: "3x Faster Page Loads",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Page Load Reduction", value: "-70%" },
      { label: "Database IOPS Saved", value: "85%" },
      { label: "Exam Concurrency Boost", value: "4x" }
    ],
    overview: [
      "There is nothing more frustrating for students and faculty than an LMS that freezes or throws '504 Gateway Timeout' errors during high-stakes online examinations. Moodle is an intensive application; unoptimized database queries and missing caching layers can bring even expensive cloud servers to their knees.",
      "Skydot's performance engineers perform deep-dive diagnostic audits on underperforming Moodle platforms. We analyze MySQL/PostgreSQL slow query logs, configure in-memory Redis session and application caching, optimize PHP-FPM worker pools, and rebuild fragmented database indexes to deliver sub-second response times."
    ],
    deliverables: [
      { title: "Redis Session & MUC Cache Clusters", description: "Moving session state and Moodle Universal Cache (MUC) out of the database and into ultra-fast RAM clusters.", icon: Zap },
      { title: "MySQL / PostgreSQL Slow Query Refactoring", description: "Identifying and rewriting inefficient database queries, adding missing table indexes, and optimizing buffer pool sizes.", icon: Database },
      { title: "PHP-FPM & OPcache Tuning", description: "Calibrating child worker processes, memory limits, and bytecode caching to maximize CPU instruction throughput.", icon: Cpu },
      { title: "Apache JMeter Stress & Load Testing", description: "Simulating 20,000+ simultaneous quiz takers to identify exact server breaking points and verify tuning improvements.", icon: BarChart },
      { title: "Cron & Background Task Optimization", description: "Decoupling heavy automated tasks (like course backups and gradebook recaching) to run during off-peak hours.", icon: Clock },
      { title: "Cloud Asset CDN Integration", description: "Offloading heavy course videos, SCORM packages, and static images to global edge CDNs (Cloudflare / AWS CloudFront).", icon: Globe }
    ],
    process: [
      { step: "01", title: "Diagnostic Profiling & Audit", desc: "Installing APM tools (New Relic / Datadog) to pinpoint exact latency bottlenecks in real time." },
      { step: "02", title: "Caching & Database Index Remodeling", desc: "Implementing Redis clusters and restructuring database indexing tables during maintenance windows." },
      { step: "03", title: "High-Concurrency Load Simulating", desc: "Executing synthetic traffic floods to measure response time degradation and confirm stability." },
      { step: "04", title: "Optimization Report & Handover", desc: "Delivering before-and-after performance benchmarks with long-term server maintenance guidelines." }
    ],
    faq: [
      ["Why does our Moodle site become extremely slow specifically when students submit quizzes?", "Quizzes generate intense real-time database write operations. Without Redis caching and dedicated database read/write separation, row-level locks occur. Our optimization specifically eliminates these quiz bottlenecks."]
    ]
  },
  "migration": {
    title: "Seamless LMS Data Migration & Platform Transition",
    subtitle: "Flawless, zero-data-loss migration from Blackboard, Canvas, Sakai, legacy Moodle, or proprietary systems to modern cloud Moodle ecosystems.",
    eyebrow: "Data Engineering",
    badge: "100% Data Preservation",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Historical Records Moved", value: "10M+" },
      { label: "Data Loss Incidence", value: "0.00%" },
      { label: "User Transition Rate", value: "100%" }
    ],
    overview: [
      "Migrating years of academic history, student transcripts, complex quiz banks, and SCORM packages from a legacy LMS (like Blackboard, Canvas, or an outdated Moodle server) is a high-risk endeavor. A single corrupted table can result in lost student certifications or compliance audit failures.",
      "Skydot utilizes automated ETL data pipelines and verified migration scripts to transition your entire educational ecosystem seamlessly. We preserve full gradebook histories, forum discussions, user completion badges, and course structures, validating every byte with automated checksum verification before cutover."
    ],
    deliverables: [
      { title: "Blackboard & Canvas to Moodle Conversion", description: "Extracting proprietary course cartridges (IMS-CC) and translating them perfectly into interactive Moodle course structures.", icon: RefreshCw },
      { title: "Full Historical Gradebook Preservation", description: "Migrating years of past student grades, quiz attempts, and instructor feedback without losing decimal precision.", icon: Award },
      { title: "SCORM & H5P Package Relocation", description: "Transferring interactive multimedia learning packages and verifying completion tracking APIs in the new environment.", icon: Puzzle },
      { title: "User Account & Password Hash Syncing", description: "Migrating user profiles and authentication credentials so learners can log into the new system with existing passwords.", icon: Users },
      { title: "Automated Checksum & Integrity Validation", description: "Running automated pre- and post-migration data audits to certify that 100% of files and records were transferred.", icon: CheckCircle2 },
      { title: "Legacy URL Redirect Mapping", description: "Configuring 301 redirects for old course links and bookmarks so faculty and students never encounter 404 errors.", icon: LinkIcon }
    ],
    process: [
      { step: "01", title: "Source System Audit & Extraction", desc: "Cataloging all courses, users, and storage volumes in the legacy LMS platform." },
      { step: "02", title: "Sandbox Test Migration", desc: "Performing a trial migration into a secure staging environment for faculty inspection." },
      { step: "03", title: "User Verification & Sign-Off", desc: "Inviting department heads to verify course formatting, question banks, and grade accuracy." },
      { step: "04", title: "Final Delta Sync & Live Cutover", desc: "Syncing final user activity during a brief overnight window and launching the new platform." }
    ],
    faq: [
      ["How do you handle courses that were built using proprietary Blackboard or Canvas tools?", "Our migration engineers map proprietary question types and discussion boards to their exact Moodle equivalents, manually rebuilding any unique interactive widgets to ensure zero loss of pedagogical value."]
    ]
  },
  "training": {
    title: "Comprehensive Moodle Administrator & Instructor Training",
    subtitle: "Empower your faculty, instructional designers, and system administrators with hands-on, role-based certification workshops led by senior Moodle experts.",
    eyebrow: "Professional Development",
    badge: "Certified Instructors",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Professionals Trained", value: "12,000+" },
      { label: "Workshop Satisfaction", value: "4.9 / 5" },
      { label: "Training Formats", value: "Live & VOD" }
    ],
    overview: [
      "The most technologically advanced learning platform in the world is useless if your instructors don't know how to create engaging content, or if your administrators struggle to manage user enrollments. True digital transformation requires investing in human capabilities.",
      "Skydot delivers structured, hands-on training programs tailored to your organization's specific workflow. Led by certified Moodle educators and senior solution architects, our workshops cover everything from basic course creation and H5P interactive gamification to advanced Linux server administration and security auditing."
    ],
    deliverables: [
      { title: "System Administrator Masterclasses", description: "Deep-dive training on user authentication, permissions, cohort management, plugin installation, and cron debugging.", icon: Server },
      { title: "Instructional Design & Authoring Workshops", description: "Teaching faculty how to build gamified quizzes, interactive H5P videos, peer-assessment rubrics, and conditional pathways.", icon: Brain },
      { title: "Moodle Workplace & Multi-Tenancy Training", description: "Specialized coaching for corporate trainers on setting up dynamic organizational rules, compliance tracking, and automated certificates.", icon: Building },
      { title: "Custom Video Reference Libraries", description: "Recording high-definition, screen-shared video tutorials customized specifically to your branded Moodle UI for future onboarding.", icon: Layout },
      { title: "Train-the-Trainer Certification Programs", description: "Equipping your internal champions with the skills and training materials needed to mentor new staff internally.", icon: Award },
      { title: "Live Q&A & Office Hours Support", description: "Ongoing post-training mentoring sessions where faculty can bring real-world course design challenges to our experts.", icon: Headset }
    ],
    process: [
      { step: "01", title: "Skill Gap & Audience Assessment", desc: "Surveying your team's existing technical proficiency to customize workshop pacing and topics." },
      { step: "02", title: "Curriculum & Sandbox Preparation", desc: "Creating dedicated practice courses in a sandboxed training LMS so participants can learn by doing." },
      { step: "03", title: "Interactive Workshop Delivery", desc: "Conducting engaging live sessions via Zoom, Microsoft Teams, or on-site at your campus." },
      { step: "04", title: "Certification & Reference Handover", desc: "Awarding digital certificates of completion and delivering permanent video archives and cheat sheets." }
    ],
    faq: [
      ["Are your training sessions generic, or customized to our specific Moodle theme and plugins?", "Every training workshop we conduct is 100% customized. We train your staff directly inside a staging copy of your actual branded LMS, using your specific plugins and grading rules."]
    ]
  },
  "technical-support": {
    title: "24/7/365 Enterprise Moodle Technical Support",
    subtitle: "Financial-grade SLAs, dedicated Level 3 Moodle engineers, automated security patching, and proactive application monitoring for mission-critical learning platforms.",
    eyebrow: "Enterprise SLA Support",
    badge: "15-Min Emergency SLA",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Emergency Response Time", value: "< 15 Mins" },
      { label: "First-Contact Resolution", value: "88%" },
      { label: "Proactive Fix Rate", value: "94%" }
    ],
    overview: [
      "When your LMS serves thousands of students or corporate employees across global time zones, technical glitches don't wait for business hours. You need an experienced engineering team watching your back around the clock.",
      "Skydot provides comprehensive, tier-1 to tier-3 technical support backed by financially enforceable SLAs. From answering faculty usage questions and debugging plugin conflicts to emergency database recovery and automated zero-day security patching, our certified engineers act as an extension of your IT department."
    ],
    deliverables: [
      { title: "15-Minute Emergency Incident Response", description: "Guaranteed rapid response from senior DevOps engineers for critical Severity-1 outages or server anomalies.", icon: Clock },
      { title: "Proactive Security Patching & Upgrades", description: "Continuous monitoring of Moodle security advisories with automated application of vulnerability patches within 24 hours.", icon: ShieldCheck },
      { title: "Dedicated Level 3 Moodle Developers", description: "Direct access to real software developers who can inspect PHP logs, write custom bug patches, and resolve database errors.", icon: Code },
      { title: "Automated Uptime & Health Monitoring", description: "24/7 synthetic transaction monitoring that checks login flows, database responsiveness, and disk space every 60 seconds.", icon: Server },
      { title: "Monthly Architectural Health Reviews", description: "Regular executive reports detailing system uptime, ticket trends, security audits, and proactive optimization recommendations.", icon: BarChart },
      { title: "Omnichannel Helpdesk Portal Access", description: "Seamless ticket submission via email, dedicated customer portal, Slack/Teams shared channels, or emergency hotline.", icon: Headset }
    ],
    process: [
      { step: "01", title: "Onboarding & Architecture Audit", desc: "Documenting your server environment, custom plugins, and emergency escalation contacts." },
      { step: "02", title: "Monitoring & Helpdesk Integration", desc: "Connecting APM monitoring sensors and setting up dedicated Slack/Teams communication channels." },
      { step: "03", title: "24/7 Proactive SLA Protection", desc: "Continuous round-the-clock monitoring, routine maintenance, and rapid bug resolution." },
      { step: "04", title: "Monthly Executive Reporting", desc: "Transparent review of SLAs achieved, tickets resolved, and upcoming maintenance schedules." }
    ],
    faq: [
      ["Can we communicate with support engineers directly via Slack or Microsoft Teams?", "Yes! For our enterprise SLA clients, we establish secure, shared real-time Slack or Microsoft Teams channels for direct, instant communication with our Level 3 engineering team."]
    ]
  }
};

function ServiceDetailPage() {
  const { serviceId } = Route.useParams();
  
  // Fallback if URL slug is not in map
  const data: ServiceData = SERVICES_DATA[serviceId] || {
    title: serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + " Solutions",
    subtitle: "Enterprise e-learning engineering, custom architecture, and scalable Moodle solutions tailored to your organization's exact requirements.",
    eyebrow: "Skydot Enterprise Service",
    badge: "Enterprise Standard",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Delivery Standard", value: "ISO 27001" },
      { label: "System Reliability", value: "99.99%" },
      { label: "Client Satisfaction", value: "100%" }
    ],
    overview: [
      "Our comprehensive engineering team provides state-of-the-art e-learning technology services designed for universities, government bodies, and global enterprises. We combine deep pedagogical understanding with rigorous software engineering to build robust learning ecosystems.",
      "From high-concurrency cloud deployments and custom module development to seamless ERP integrations and proactive 24/7 maintenance, Skydot ensures your learning platform operates at peak performance."
    ],
    deliverables: [
      { title: "Custom Architecture Design", description: "Tailored system topologies engineered for high scalability and zero data loss.", icon: Server },
      { title: "Full-Stack Code Engineering", description: "Clean, documented PHP and TypeScript code adhering to official Moodle guidelines.", icon: Code },
      { title: "Enterprise Systems Integration", description: "Seamless bidirectional sync with HRIS, CRM, and university campus management tools.", icon: LinkIcon },
      { title: "Security & ISO Compliance", description: "Rigorous data encryption, role-based access control, and vulnerability patching.", icon: ShieldCheck },
      { title: "Performance & Caching Tuning", description: "Sub-second response times powered by Redis session clusters and database query optimization.", icon: Zap },
      { title: "Dedicated 24/7 SLA Support", description: "Round-the-clock proactive monitoring and emergency resolution from senior architects.", icon: Headset }
    ],
    process: [
      { step: "01", title: "Discovery & Blueprinting", desc: "Aligning technical requirements with organizational learning objectives." },
      { step: "02", title: "Agile Engineering & Staging", desc: "Iterative development and sandbox verification with zero disruption to live ops." },
      { step: "03", title: "Security & Performance QA", desc: "Rigorous load benchmarking and automated regression testing suites." },
      { step: "04", title: "Production Launch & Handover", desc: "Seamless deployment with dedicated training and 30-day hyper-care warranty." }
    ],
    faq: [
      ["How do we get started with this service?", "Simply schedule a free 45-minute architectural workshop with our team. We will analyze your current platform and provide a tailored technical roadmap."],
      ["Do you provide custom Service Level Agreements (SLAs)?", "Yes, we structure financially backed SLAs tailored to your organization's specific uptime and support response time requirements."]
    ]
  };

  return (
    <div className="bg-background min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border bg-gradient-to-b from-surface via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-display font-semibold text-xs uppercase tracking-wider mb-6 animate-fade-in">
                <Sparkles className="size-3.5" />
                <span>{data.eyebrow} · {data.badge}</span>
              </div>
              <div className="mb-4 animate-fade-in delay-100">
                <img src="/moodle_logo_TM.svg" alt="Moodle" className="h-8 sm:h-12 object-contain" />
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
                    Schedule Architectural Consultation <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base border-border hover:border-primary/50">
                  <Link to="/contact">Request Technical Proposal</Link>
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
                    <span>Enterprise Deliverable Standard</span>
                  </div>
                  <h3 className="text-white font-display font-bold text-xl sm:text-2xl">
                    Engineered for Scalability & Security
                  </h3>
                  <p className="mt-1 text-slate-300 text-xs sm:text-sm line-clamp-2">
                    Every project follows strict ISO 27001 data security protocols and zero-downtime deployment practices.
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
              Executive Overview & Engineering Approach
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

      {/* DELIVERABLES & CAPABILITIES GRID */}
      <section className="section-y bg-surface border-y border-border">
        <div className="container-page">
          <SectionHeader
            eyebrow="Key Deliverables"
            title="What We Deliver in This Service"
            description="Our engineering team provides comprehensive, end-to-end technical execution with transparent milestones and documented code."
            align="center"
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.deliverables.map((del, idx) => {
              const IconComponent = del.icon || CheckCircle2;
              return (
                <Card key={idx} className="p-7 border-border bg-card shadow-soft flex flex-col h-full card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <IconComponent className="size-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-heading mb-3 group-hover:text-primary transition-colors">
                    {del.title}
                  </h3>
                  <p className="text-sm sm:text-base text-paragraph leading-relaxed flex-1">
                    {del.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY / PROCESS STEPPER */}
      <section className="section-y bg-background">
        <div className="container-page">
          <SectionHeader
            eyebrow="Proven Methodology"
            title="How We Execute Your Project"
            description="A risk-free, transparent 4-stage engineering lifecycle designed to eliminate surprises and guarantee on-time delivery."
            align="left"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((pr, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl border border-border bg-card shadow-card flex flex-col justify-between group hover:border-primary/50 transition-all">
                <div>
                  <div className="font-display font-black text-4xl text-primary/20 group-hover:text-primary transition-colors mb-4">
                    {pr.step}
                  </div>
                  <h4 className="font-display font-bold text-lg text-heading mb-2">
                    {pr.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-paragraph leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Phase Milestone</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYDOT OVER STANDARD VENDORS */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 lg:p-16 shadow-elevated">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The Skydot Advantage</div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-heading tracking-tight">
                  Why Leading Enterprises Trust Skydot Over Off-the-Shelf Agencies
                </h2>
                <p className="mt-4 text-paragraph text-base sm:text-lg leading-relaxed">
                  We are not just general web designers; we are deep-systems LMS architects. We combine pedagogical mastery with rigorous Linux, database, and AI engineering.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "100% In-House Moodle & AI Engineers",
                    "Zero-Downtime Migration Guarantee",
                    "ISO 27001 Certified Security Practices",
                    "Financially Enforceable 99.99% SLAs",
                    "No Vendor Lock-In — Clean Open Standards",
                    "Dedicated On-Call Solution Architects"
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
                <h4 className="font-display font-bold text-xl mb-3 text-orange-400">Ready for a Technical Deep Dive?</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Skip the salesperson. In our 45-minute discovery workshop, you will meet directly with a senior Moodle solution architect to review your database schemas, server load, or plugin code.
                </p>
                <div className="space-y-3 mb-8 text-xs text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Free architectural risk assessment</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Custom server sizing & TCO roadmap</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange-400 shrink-0" /> Mutual NDA signed prior to call</div>
                </div>
                <Button asChild size="lg" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  <Link to="/contact">Book Your Free Workshop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE FAQ SECTION */}
      <section className="section-y bg-background border-t border-border">
        <div className="container-page max-w-4xl">
          <SectionHeader
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Everything you need to know about our engineering standards, timelines, and post-launch support."
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
                Ready to Upgrade Your Learning Ecosystem?
              </h2>
              <p className="mt-5 text-slate-300 text-lg sm:text-xl leading-relaxed">
                Speak with our engineering leadership today. We'll evaluate your institutional objectives and draft a tailored technical execution roadmap.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                  <Link to="/contact">Talk to an Architect</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 text-white">
                  <Link to="/solutions">Explore Industries</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
