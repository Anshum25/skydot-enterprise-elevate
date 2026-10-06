const fs = require('fs');

let content = fs.readFileSync('src/routes/solutions.$solutionId.tsx', 'utf-8');

const solutionsDataString = `const SOLUTIONS_DATA: Record<string, SolutionData> = {
  "education": {
    title: "Education",
    subtitle: "Support every type of learner, undergraduate, continuing education, non-degree, and professional development, all within one LMS.",
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
      "Inspired by world-class university deployments on Moodle.com, we engineer resilient, high-concurrency academic learning portals. We integrate Moodle natively with Student Information Systems, implement automated anti-cheating proctoring tools, and design accessible WCAG AAA compliant interfaces for diverse student bodies."
    ],
    capabilities: [
      { title: "Automated SIS & Campus ERP Integration", description: "Real-time bidirectional syncing of academic semesters, course catalogs, student enrollments, and registrar gradebooks.", icon: "Layers" },
      { title: "High-Concurrency Online Examination Hub", description: "Load-balanced database architectures designed specifically to handle 50,000+ simultaneous quiz submissions without slowdowns.", icon: "Server" },
      { title: "AI Tutor & Personalized Learning Paths", description: "Integrating custom LLM study assistants that help students review lecture transcripts and practice for exams 24/7.", icon: "Sparkles" },
      { title: "Plagiarism & AI Proctoring Integration", description: "Seamless connectors for automated facial recognition verification.", icon: "Lock" },
      { title: "Interactive H5P & Multimedia Courseware", description: "Empowering professors with over 40 interactive video, branching scenario, and gamified assignment types.", icon: "BookOpen" },
      { title: "WCAG 2.1 AAA Accessibility Compliance", description: "Screen-reader optimized layouts, high-contrast themes, and full keyboard navigation for inclusive campus learning.", icon: "CheckCircle2" }
    ],
    useCases: [
      { title: "University-Wide Exam Weeks", desc: "Executing high-stakes online examinations across 15 faculties with zero server timeouts and real-time proctoring." },
      { title: "Hybrid Lecture & Flipped Classrooms", desc: "Delivering asynchronous pre-lecture videos and automated quizzes before students attend in-person seminar discussions." },
      { title: "Multi-Campus Consortium Management", desc: "Hosting affiliated regional colleges under a single Moodle Workplace database with strict data and branding isolation." }
    ],
    faq: [
      ["How do you prevent database crashes during mid-term exam periods?", "We implement Redis session clusters, MySQL read-replicas, and auto-scaling web nodes that multiply compute capacity automatically 15 minutes before scheduled exams begin."],
      ["Can professors import existing course cartridges from Blackboard or Canvas?", "Yes. Our automated migration tools ingest IMS-CC packages and convert quizzes, rubrics, and discussion prompts into native Moodle formats."]
    ]
  },
  "workplace-learning": {
    title: "Workplace Learning",
    subtitle: "Train and upskill your workforce with a suite of automation, reporting, and virtual learning tools that save time and drive results.",
    eyebrow: "Enterprise Solution",
    badge: "Moodle Workplace",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Onboarding Time Saved", value: "65%" },
      { label: "HRIS Sync Accuracy", value: "100%" },
      { label: "Compliance Audit Rate", value: "99.8%" }
    ],
    overview: [
      "Modern enterprises need more than just a course repository; they require an intelligent talent development engine that aligns employee growth with corporate strategy.",
      "We deploy Moodle Workplace to deliver consumer-grade learning experiences for corporate employees. We automate onboarding workflows, build personalized management dashboards, and enforce mandatory annual compliance certifications with automated email notifications and managerial reporting."
    ],
    capabilities: [
      { title: "Automated HRIS Onboarding Workflows", description: "New hires are automatically assigned role-specific security, culture, and technical training the moment they enter your HR system.", icon: "Users" },
      { title: "Dynamic Organizational Hierarchies", description: "Mirroring your company's exact departmental, regional, and reporting structures for automated team reporting.", icon: "Building" },
      { title: "Automated Compliance & Recertification", description: "Setting automated expiration timers for mandatory courses with recurring renewal reminders.", icon: "Clock" },
      { title: "Manager & Executive PowerBI Dashboards", description: "Real-time analytics showing team completion rates, skill gap heatmaps, and training ROI metrics.", icon: "BarChart" },
      { title: "Social Learning & Peer Communities", description: "Gamified leaderboards, internal subject-matter expert forums, and collaborative peer assessment rubrics.", icon: "Award" },
      { title: "Single Sign-On (SSO)", description: "Seamless, secure login via Microsoft Entra ID, Okta, or Google Workspace with multi-factor verification.", icon: "ShieldCheck" }
    ],
    useCases: [
      { title: "Global Enterprise Onboarding", desc: "Standardizing orientation for 5,000+ new hires annually across localized languages." },
      { title: "Leadership & Succession Programs", desc: "Creating exclusive, invitation-only management training academies with mentor evaluations and 360-degree feedback." },
      { title: "Partner & Customer Training Portals", desc: "Extending your training ecosystem to external B2B distributors and customers using multi-tenant portal isolation." }
    ],
    faq: [
      ["How does Moodle Workplace differ from standard Moodle for corporations?", "Workplace includes advanced corporate features like multi-tenancy, automated dynamic rules, report builder, organizational hierarchies, and automated certificate re-issuance without needing third-party add-ons."]
    ]
  },
  "government": {
    title: "Government",
    subtitle: "Meet regulatory and compliance standards with a scalable and secure LMS for public sector and government agencies.",
    eyebrow: "Public Sector Solution",
    badge: "Sovereign Cloud Ready",
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Data Sovereignty", value: "100%" },
      { label: "Security Encryption", value: "AES-256" },
      { label: "Civil Servants Served", value: "2M+" }
    ],
    overview: [
      "Government bodies and public sector agencies operate under stringent data sovereignty laws, rigorous cybersecurity mandates, and immense user scale. Training millions of civil servants, municipal officers, and emergency responders requires an infrastructure where data privacy is absolute.",
      "We design sovereign, military-grade Moodle architectures deployed on government-approved cloud regions. We enforce end-to-end encryption, strict role-based access controls, and full compliance with national digital privacy standards."
    ],
    capabilities: [
      { title: "Sovereign Cloud Deployment", description: "Hosting your platform within national borders with zero cross-border data transfer, complying strictly with data residency laws.", icon: "Shield" },
      { title: "Military-Grade AES-256 Encryption", description: "Encrypting all user records, exam banks, and video archives at rest and in transit with automated key rotation.", icon: "Lock" },
      { title: "Massive-Scale Civil Service Academies", description: "Architecting databases capable of simultaneously training 500,000+ public employees across national ministries.", icon: "Server" },
      { title: "Strict Role-Based Access Control (RBAC)", description: "Granular permission definitions ensuring departmental administrators can only access records within their specific ministry.", icon: "Users" },
      { title: "Automated Audit Trails & Forensics", description: "Immutable activity logging capturing every login, grade modification, and file download for regulatory compliance audits.", icon: "Database" },
      { title: "Accessibility & Multilingual Support", description: "Full localization into regional languages and compliance with national public sector digital accessibility standards.", icon: "Globe" }
    ],
    useCases: [
      { title: "National Civil Service Training Academy", desc: "Delivering standardized administrative, legal, and ethics certifications to all government employees nationwide." },
      { title: "Emergency & Disaster Response Readiness", desc: "Rapid deployment of time-critical safety protocols and incident management simulations to first responders." },
      { title: "Municipal E-Governance Upskilling", desc: "Training local city council staff on digital transformation workflows and cybersecurity best practices." }
    ],
    faq: [
      ["Can you deploy Moodle on our internal, on-premise government servers?", "Yes. Our DevOps engineers specialize in deploying containerized Kubernetes or Docker installations directly onto private government data centers and air-gapped networks."]
    ]
  },
  "vocational-training": {
    title: "Vocational Training",
    subtitle: "Bring your vocational education and training courses online with Moodle LMS.",
    eyebrow: "Vocational Solution",
    badge: "Skills Focused",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Skill Badges Issued", value: "500K+" },
      { label: "Offline Accessibility", value: "100%" },
      { label: "Practical Assessments", value: "Seamless" }
    ],
    overview: [
      "Vocational training requires a unique approach to learning, combining theoretical knowledge with practical, hands-on skill demonstrations.",
      "Moodle LMS provides the flexibility to blend online coursework with practical assessments, enabling vocational institutions to deliver comprehensive training programs that prepare learners for the real world."
    ],
    capabilities: [
      { title: "Competency-Based Learning", description: "Map courses to specific industry competencies and track learner progress against them.", icon: "Target" },
      { title: "Practical Assessment Workflows", description: "Allow instructors to evaluate hands-on skills through video submissions or in-person grading rubrics.", icon: "CheckSquare" },
      { title: "Digital Badging & Micro-Credentials", description: "Issue verifiable digital badges for acquired skills to enhance learner employability.", icon: "Award" },
      { title: "Mobile & Offline Learning", description: "Ensure learners can access training materials on the go, even in areas with poor internet connectivity.", icon: "Smartphone" },
      { title: "Interactive Multimedia Content", description: "Engage learners with rich multimedia content, simulations, and interactive tutorials.", icon: "Video" },
      { title: "Apprenticeship Tracking", description: "Monitor and manage apprenticeship programs, linking on-the-job training with academic progress.", icon: "Briefcase" }
    ],
    useCases: [
      { title: "Trade Skills Certification", desc: "Providing online theoretical modules and tracking practical hours for electricians, plumbers, and carpenters." },
      { title: "Healthcare Assistant Training", desc: "Combining online medical terminology courses with clinical placement evaluations." },
      { title: "Culinary Arts Institutes", desc: "Delivering recipe tutorials and evaluating student cooking techniques via video submissions." }
    ],
    faq: [
      ["How can Moodle handle practical, hands-on assessments?", "Instructors can create assignments that require students to upload videos demonstrating their skills, or use detailed grading rubrics to evaluate students during in-person practical sessions."]
    ]
  },
  "moodle-and-ai": {
    title: "Moodle and AI",
    subtitle: "Learn about Moodle's human-centred approach to AI and our commitment to transparency, equality, and ethical practice.",
    eyebrow: "AI Innovation",
    badge: "Human-Centred",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "AI Tools Integrated", value: "Growing" },
      { label: "Ethical Standards", value: "Strict" },
      { label: "Educator Control", value: "Maximized" }
    ],
    overview: [
      "Artificial Intelligence is transforming education, but it must be implemented ethically and thoughtfully.",
      "Moodle's approach to AI is human-centred, ensuring that AI tools empower educators rather than replace them, while prioritizing data privacy, transparency, and equity for all learners."
    ],
    capabilities: [
      { title: "AI-Assisted Content Creation", description: "Help educators generate course outlines, quiz questions, and study materials efficiently.", icon: "Wand2" },
      { title: "Personalized Learning Pathways", description: "Use AI to adapt content and provide customized recommendations based on learner performance.", icon: "Route" },
      { title: "Intelligent Tutoring Systems", description: "Provide learners with 24/7 support and immediate feedback on common queries.", icon: "Bot" },
      { title: "Automated Grading & Feedback", description: "Assist instructors in grading assignments and providing constructive feedback more rapidly.", icon: "CheckCircle" },
      { title: "Accessibility Enhancements", description: "Leverage AI for automatic transcription, translation, and image descriptions to improve accessibility.", icon: "Ear" },
      { title: "Ethical AI Framework", description: "Ensure all AI integrations adhere to strict standards for privacy, bias reduction, and transparency.", icon: "Shield" }
    ],
    useCases: [
      { title: "Automated Course Generation", desc: "Educators use AI tools within Moodle to quickly draft initial course structures and content." },
      { title: "Adaptive Quizzing", desc: "Quizzes that automatically adjust their difficulty based on the student's previous answers." },
      { title: "Multilingual Support", desc: "Real-time AI translation of forum posts to facilitate global collaboration among learners." }
    ],
    faq: [
      ["Is my data safe when using AI features in Moodle?", "Yes. Moodle is committed to data privacy. Any AI integration must comply with our strict data protection standards, ensuring learner data is not misused."]
    ]
  }
};`;

// replace from `const SOLUTIONS_DATA` to `function SolutionDetailPage`
const startIdx = content.indexOf('const SOLUTIONS_DATA');
const endIdx = content.indexOf('function SolutionDetailPage');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + solutionsDataString + '\n\n' + content.substring(endIdx);
  fs.writeFileSync('src/routes/solutions.$solutionId.tsx', content, 'utf-8');
  console.log('Successfully updated solutions.$solutionId.tsx');
} else {
  console.log('Could not find boundaries for replacement. startIdx:', startIdx, 'endIdx:', endIdx);
}
