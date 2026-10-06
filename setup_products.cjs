const fs = require('fs');

let content = fs.readFileSync('src/routes/services.$serviceId.tsx', 'utf-8');

content = content.replace('"/services/$serviceId"', '"/products/$productId"');
content = content.replace(/ServiceDetailPage/g, 'ProductDetailPage');
content = content.replace(/ServiceData/g, 'ProductData');
content = content.replace(/SERVICES_DATA/g, 'PRODUCTS_DATA');
content = content.replace(/const service =/g, 'const product =');
content = content.replace(/!service/g, '!product');
content = content.replace(/Service not found/g, 'Product not found');
content = content.replace(/service\./g, 'product.');

const productDataString = `const PRODUCTS_DATA: Record<string, ProductData> = {
  "moodle-lms": {
    title: "Moodle LMS",
    subtitle: "Engage your learners with flexible, secure, and accessible online learning spaces.",
    eyebrow: "Core Platform",
    badge: "Most Popular",
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Global Users", value: "300M+" },
      { label: "Open Source", value: "100%" },
      { label: "Languages", value: "120+" }
    ],
    overview: [
      "Moodle LMS is the world's most customisable and trusted open source learning management system. It empowers educators to improve learning outcomes with an incredibly flexible toolset.",
      "Whether you are teaching a few students or millions, Moodle LMS can scale to meet your needs, providing a secure and accessible online learning space."
    ],
    deliverables: [
      { title: "Flexible Course Creation", description: "Design courses using a variety of formats and activities.", icon: Layout },
      { title: "Secure & Private", description: "Maintain full control over your data and privacy.", icon: ShieldCheck },
      { title: "Accessible Learning", description: "WCAG 2.1 compliant out of the box for inclusive education.", icon: CheckCircle2 },
      { title: "Extensive Analytics", description: "Track learner progress and engagement with detailed reports.", icon: BarChart },
      { title: "Open Source Freedom", description: "Modify and extend the platform to suit your exact requirements.", icon: Code },
      { title: "Global Community Support", description: "Join millions of educators sharing resources and best practices.", icon: Globe }
    ],
    process: [
      { step: "01", title: "Installation & Setup", desc: "Deploy Moodle LMS on your preferred infrastructure." },
      { step: "02", title: "Configuration", desc: "Tailor the platform settings to your educational goals." },
      { step: "03", title: "Course Development", desc: "Create engaging content and activities for your learners." },
      { step: "04", title: "Launch & Iterate", desc: "Welcome learners and continuously improve courses based on feedback." }
    ],
    faq: [
      ["Is Moodle LMS really free?", "Yes, the core Moodle LMS software is open source and free to download. You only pay for hosting, support, or custom development services if you choose to use them."]
    ]
  },
  "moodle-workplace": {
    title: "Moodle Workplace",
    subtitle: "Streamline training, onboarding, and compliance management while driving learning outcomes that you can measure.",
    eyebrow: "Corporate Solution",
    badge: "Enterprise Ready",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Multi-Tenancy", value: "Built-in" },
      { label: "Automation", value: "Dynamic" },
      { label: "Compliance", value: "Tracked" }
    ],
    overview: [
      "Moodle Workplace is designed specifically for corporate and organizational learning. It combines the flexibility of Moodle LMS with advanced features for employee training, onboarding, and compliance.",
      "With powerful automation, multi-tenancy, and advanced reporting, Moodle Workplace empowers HR and L&D teams to deliver impactful learning programs at scale."
    ],
    deliverables: [
      { title: "Multi-Tenancy Architecture", description: "Manage multiple organizations or departments from a single installation.", icon: Layers },
      { title: "Automated Workflows", description: "Streamline enrollments, certifications, and notifications with dynamic rules.", icon: Zap },
      { title: "Compliance Management", description: "Easily track and manage mandatory training and certifications.", icon: ShieldCheck },
      { title: "Customizable Reports", description: "Build and share detailed reports using the drag-and-drop report builder.", icon: BarChart },
      { title: "Organizational Structure", description: "Mirror your company hierarchy to assign learning paths and permissions.", icon: Users },
      { title: "Seamless Integration", description: "Connect with HRIS, ERP, and CRM systems for automated user management.", icon: LinkIcon }
    ],
    process: [
      { step: "01", title: "Needs Analysis", desc: "Identify key training and compliance requirements." },
      { step: "02", title: "Tenant & Structure Setup", desc: "Configure multi-tenancy and organizational hierarchies." },
      { step: "03", title: "Automation Rules", desc: "Implement dynamic rules for enrollments and certifications." },
      { step: "04", title: "Deployment", desc: "Roll out learning programs to employees and partners." }
    ],
    faq: [
      ["How is Moodle Workplace different from Moodle LMS?", "Moodle Workplace includes additional features specifically for corporate learning, such as multi-tenancy, dynamic rules, organizational hierarchies, and advanced reporting, which are not available in the standard Moodle LMS."]
    ]
  },
  "moodle-cloud": {
    title: "MoodleCloud",
    subtitle: "For individuals who sell courses, or small organisations with basic training and onboarding needs.",
    eyebrow: "Hosted Solution",
    badge: "Ready in Minutes",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Setup Time", value: "Minutes" },
      { label: "Hosting", value: "Managed" },
      { label: "Updates", value: "Automatic" }
    ],
    overview: [
      "MoodleCloud offers a quick and easy way to get started with Moodle. It's a fully hosted solution managed by Moodle HQ, perfect for educators and small businesses.",
      "You don't need to worry about servers, updates, or maintenance. Just sign up, customize your site, and start teaching."
    ],
    deliverables: [
      { title: "Instant Setup", description: "Get your learning environment up and running in minutes.", icon: Zap },
      { title: "Fully Managed Hosting", description: "Leave the server administration and security to the experts.", icon: Server },
      { title: "Automatic Updates", description: "Always have access to the latest features and security patches.", icon: RefreshCw },
      { title: "Integrated Web Conferencing", description: "Built-in BigBlueButton integration for live online classes.", icon: Headset },
      { title: "Customizable Branding", description: "Add your logo and colors to make the site your own.", icon: Palette },
      { title: "Scalable Plans", description: "Upgrade your plan as your user base and storage needs grow.", icon: ArrowUp }
    ],
    process: [
      { step: "01", title: "Choose a Plan", desc: "Select the MoodleCloud plan that fits your user and storage needs." },
      { step: "02", title: "Sign Up", desc: "Create your account and instantly access your new site." },
      { step: "03", title: "Customize", desc: "Add your branding, configure settings, and create courses." },
      { step: "04", title: "Invite Learners", desc: "Start enrolling students and delivering your online courses." }
    ],
    faq: [
      ["Can I upgrade my MoodleCloud plan later?", "Yes, you can easily upgrade your MoodleCloud plan to accommodate more users or storage space as your needs grow."]
    ]
  },
  "moodle-app": {
    title: "Moodle App",
    subtitle: "Access Moodle from anywhere, on any device online and offline.",
    eyebrow: "Mobile Learning",
    badge: "iOS & Android",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Offline Access", value: "Supported" },
      { label: "Push Notifications", value: "Real-time" },
      { label: "Branding", value: "Customizable" }
    ],
    overview: [
      "The official Moodle App brings learning to your fingertips. Learners can access course content, submit assignments, and participate in discussions from their mobile devices.",
      "With offline capabilities, learning can happen anywhere, anytime, regardless of internet connectivity."
    ],
    deliverables: [
      { title: "Offline Learning", description: "Download courses and complete activities without an internet connection.", icon: Globe },
      { title: "Push Notifications", description: "Keep learners informed with instant alerts for messages and deadlines.", icon: Zap },
      { title: "Mobile-Optimized Interface", description: "A user-friendly experience designed specifically for touch screens.", icon: Layout },
      { title: "Seamless Sync", description: "Offline progress automatically synchronizes when the device reconnects.", icon: RefreshCw },
      { title: "Branded App Options", description: "Get a custom version of the app with your own branding in app stores.", icon: Palette },
      { title: "Multimedia Support", description: "Easily upload images, audio, and video directly from your mobile device.", icon: Sparkles }
    ],
    process: [
      { step: "01", title: "Enable Mobile Access", desc: "Ensure your Moodle site is configured to support the mobile app." },
      { step: "02", title: "Download the App", desc: "Learners install the app from the App Store or Google Play." },
      { step: "03", title: "Connect to Site", desc: "Enter your Moodle site URL and log in to access courses." },
      { step: "04", title: "Learn Anywhere", desc: "Start learning on the go, online or offline." }
    ],
    faq: [
      ["Is the Moodle App free?", "The standard Moodle App is free for learners to download. There are premium plans and branded app options available for organizations requiring advanced features or custom branding."]
    ]
  },
  "certified-integrations": {
    title: "Certified Integrations",
    subtitle: "Extend your online learning ecosystem with powerful and trusted add-ons.",
    eyebrow: "Ecosystem",
    badge: "Verified Partners",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    stats: [
      { label: "Certified Partners", value: "Growing" },
      { label: "Security Checked", value: "Yes" },
      { label: "Seamless Fit", value: "Guaranteed" }
    ],
    overview: [
      "Certified Integrations are trusted add-ons that seamlessly extend the functionality of your Moodle platform. They have been rigorously vetted by Moodle HQ for quality, security, and performance.",
      "From advanced proctoring and plagiarism detection to comprehensive reporting tools, Certified Integrations help you build a robust and tailored learning ecosystem."
    ],
    deliverables: [
      { title: "Vetted for Security", description: "All integrations undergo strict security reviews to protect your data.", icon: ShieldCheck },
      { title: "Guaranteed Compatibility", description: "Ensure smooth operation with your current Moodle version.", icon: CheckCircle2 },
      { title: "Enhanced Functionality", description: "Add advanced features like web conferencing, anti-plagiarism, and more.", icon: Sparkles },
      { title: "Streamlined Workflows", description: "Integrate seamlessly with your existing tools and processes.", icon: LinkIcon },
      { title: "Reliable Support", description: "Get dedicated support from Certified Integration partners.", icon: Headset },
      { title: "Future-Proof Ecosystem", description: "Build a scalable platform that grows with your organization's needs.", icon: Layers }
    ],
    process: [
      { step: "01", title: "Identify Needs", desc: "Determine the additional functionalities your learning platform requires." },
      { step: "02", title: "Explore Integrations", desc: "Browse the catalog of Moodle Certified Integrations." },
      { step: "03", title: "Installation & Configuration", desc: "Easily install and set up the integration on your Moodle site." },
      { step: "04", title: "Enhance Learning", desc: "Leverage the new tools to improve the educational experience." }
    ],
    faq: [
      ["What makes an integration 'Certified'?", "Certified Integrations are developed by trusted Moodle Partners and have been technically reviewed by Moodle HQ to ensure they meet strict standards for security, performance, and compatibility."]
    ]
  }
};`;

// replace from `const PRODUCTS_DATA` to `function ProductDetailPage`
const startIdx = content.indexOf('const PRODUCTS_DATA');
const endIdx = content.indexOf('function ProductDetailPage');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + productDataString + '\n\n' + content.substring(endIdx);
  fs.writeFileSync('src/routes/products.$productId.tsx', content, 'utf-8');
  console.log('Successfully updated products.$productId.tsx');
} else {
  console.log('Could not find boundaries for replacement. startIdx:', startIdx, 'endIdx:', endIdx);
}
