export const audiences = [
  {
    id: "smb",
    title: "Local SMBs",
    text: "Clinics, salons, schools, retail, and service businesses that need a website, leads, and simple ops tools.",
    intent: "webcrm",
    cta: "Get Website + CRM",
  },
  {
    id: "startup",
    title: "Startups",
    text: "Founders who need an MVP and a growth stack fast — product first, then AI-assisted marketing and sales.",
    intent: "mvp",
    cta: "Build my MVP",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    text: "Scale-ups and teams that need custom AI workflows, internal tools, and retained delivery.",
    intent: "enterprise",
    cta: "Enterprise inquiry",
  },
]

export const offerLines = [
  {
    id: 1,
    title: "AI Growth Stack",
    text: "Social, sales, support agents, and custom workflows we build and run for your business.",
    href: "/ai",
    intent: "ai",
  },
  {
    id: 2,
    title: "Software Development Plans",
    text: "Three clear tiers — Launch, Growth (Website + CRM), and Scale (apps & products).",
    href: "/pricing",
    intent: "software",
  },
  {
    id: 3,
    title: "Startup MVP Package",
    text: "A focused tech foundation to launch your MVP and start learning from real users.",
    href: "/solutions/mvp",
    intent: "mvp",
  },
  {
    id: 4,
    title: "Website + CRM Dashboard",
    text: "One system from visitor to lead to follow-up — built for local SMBs that sell every day.",
    href: "/solutions/website-crm",
    intent: "webcrm",
  },
  {
    id: 5,
    title: "Enterprise & Custom Tools",
    text: "Bespoke AI, integrations, and internal platforms tailored to how your team works.",
    href: "/appointment?intent=enterprise",
    intent: "enterprise",
  },
]

export const aiProducts = [
  {
    id: 1,
    title: "AI Social Media Management",
    outcome: "Consistent presence without a full marketing team",
    gets: [
      "Content calendar and on-brand post drafts",
      "Scheduling across key channels",
      "Basic reply assistance",
      "Monthly performance report",
    ],
  },
  {
    id: 2,
    title: "AI Sales Process",
    outcome: "More booked calls, less manual chasing",
    gets: [
      "Lead capture and qualification chat",
      "CRM notes and pipeline sync",
      "Follow-up sequences",
      "Handoff to your sales owner",
    ],
  },
  {
    id: 3,
    title: "AI Support / Query Agent",
    outcome: "24/7 answers and fewer support tickets",
    gets: [
      "Site or WhatsApp agent trained on your FAQs",
      "Business data and policy grounding",
      "Escalation to a human when needed",
      "Conversation insights",
    ],
  },
  {
    id: 4,
    title: "AI-Accelerated Build",
    outcome: "Faster delivery with clearer timelines",
    gets: [
      "AI-assisted coding workflows for our engineers",
      "Quicker iterations on websites and apps",
      "Transparent milestones",
      "Quality review before launch",
    ],
  },
  {
    id: 5,
    title: "Custom AI Workflows",
    outcome: "Hours saved every week on repetitive work",
    gets: [
      "Automations for orders, bookings, invoices, or HR",
      "Integrations with your existing tools",
      "Human-in-the-loop where it matters",
      "Monitoring and iteration",
    ],
  },
]

export const softwarePlans = [
  {
    id: "launch",
    name: "Launch",
    tagline: "SMB starter",
    bestFor: "Local businesses going online properly",
    intent: "software",
    includes: [
      "Marketing website or landing pages (5–8 pages)",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact / WhatsApp CTA",
      "Analytics + lead form",
    ],
    notIncluded: ["Custom app", "CRM dashboard", "Complex integrations"],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Website + CRM",
    bestFor: "SMBs that need sales follow-up, not just a brochure site",
    intent: "webcrm",
    featured: true,
    includes: [
      "Everything in Launch",
      "CRM dashboard (leads, pipeline, customer records)",
      "Website ↔ CRM sync",
      "Simple automations",
      "Optional booking / appointment flow",
    ],
    notIncluded: ["Full custom product app", "Enterprise SSO"],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Product / App",
    bestFor: "Startups and ops-heavy businesses",
    intent: "software",
    includes: [
      "Custom web app or cross-platform app",
      "Auth, roles, and admin",
      "Core business workflows",
      "Optional AI agent or automation hook",
      "Staging + handoff / retainer support",
    ],
    notIncluded: ["Unlimited feature scope without milestones"],
  },
]

export const planAddOns = [
  "AI support / query agent",
  "AI social retainer",
  "Paid ads (SEM)",
  "SEO content",
  "Enterprise SSO / integrations",
]

export const mvpPackage = {
  title: "Startup MVP Package",
  promise: "A focused tech foundation to launch your startup MVP and start learning from real users.",
  includes: [
    "Discovery workshop (goals, users, must-haves)",
    "Scope freeze: 1 primary user journey + admin essentials",
    "Design system lite + build (web or app)",
    "Analytics, basic auth, and deploy",
    "2-week post-launch bugfix window",
    "Optional: AI Growth Stack starter (social + query agent)",
  ],
  intent: "mvp",
}

export const websiteCrm = {
  title: "Website + CRM Dashboard",
  promise: "One system from visitor → lead → follow-up → customer.",
  problem: "Leads get lost in WhatsApp chats, spreadsheets, and forgotten follow-ups.",
  features: [
    { title: "Lead capture", text: "Forms and CTAs on your site feed straight into the dashboard." },
    { title: "Pipeline", text: "See every lead stage — new, contacted, qualified, won." },
    { title: "Reminders", text: "Simple follow-up prompts so nothing goes cold." },
    { title: "Reports", text: "Know which pages and campaigns create real conversations." },
  ],
  forWho: ["Local service businesses", "Clinics and salons", "Schools and institutes", "Retail and booking-led brands"],
  intent: "webcrm",
}

export const serviceCatalog = [
  {
    id: 1,
    category: "AI Growth Stack",
    title: "AI Social, Sales & Support",
    desc: [{ text: "We build and operate AI for social media, sales qualification, support agents, and custom workflows fitted to your business." }],
    post: "AI Services",
    cover: "/images/services/consulting.jpg",
    href: "/ai",
  },
  {
    id: 2,
    category: "Software",
    title: "Websites & Landing Pages",
    desc: [{ text: "Launch-ready marketing sites and landing pages with SEO basics, analytics, and clear conversion paths." }],
    post: "Launch Plan",
    cover: "/images/services/web-dev.jpg",
    href: "/pricing",
  },
  {
    id: 3,
    category: "Software",
    title: "Website + CRM Dashboard",
    desc: [{ text: "Connect your website to a CRM so leads, follow-ups, and customer records live in one place." }],
    post: "Growth Plan",
    cover: "/images/services/app-dev.jpg",
    href: "/solutions/website-crm",
  },
  {
    id: 4,
    category: "Software",
    title: "Apps & Startup MVP",
    desc: [{ text: "Custom web or cross-platform apps, plus a fixed-scope MVP package for founders who need to ship and learn." }],
    post: "Scale / MVP",
    cover: "/images/services/seo.jpg",
    href: "/solutions/mvp",
  },
  {
    id: 5,
    category: "Marketing",
    title: "SEO, Content & Paid Ads",
    desc: [{ text: "Search, content, and SEM campaigns aligned to the services you sell — not vanity traffic." }],
    post: "Digital Marketing",
    cover: "/images/services/digital-ads.jpg",
    href: "/appointment?intent=ai",
  },
  {
    id: 6,
    category: "Enterprise",
    title: "Enterprise & Custom Tools",
    desc: [{ text: "Bespoke AI workflows, internal tools, and integrations for teams that need more than a standard plan." }],
    post: "Custom Build",
    cover: "/images/services/social-media.jpg",
    href: "/appointment?intent=enterprise",
  },
]

export const intentLabels = {
  ai: "Get AI setup",
  mvp: "Build my MVP",
  webcrm: "Website + CRM",
  enterprise: "Enterprise inquiry",
  software: "Software development",
  default: "Book a consultation",
}

export const appointmentHref = (intent) =>
  intent ? `/appointment?intent=${intent}` : "/appointment"
