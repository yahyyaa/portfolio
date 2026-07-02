export const siteConfig = {
  name: "Yahya Sheikh",
  title: "Data Analyst & BI Developer",
  hook: "Data Science graduate turning raw data into dashboards, business insights, and automation.",
  email: "yahyasheikh432@gmail.com",
  phone: "0305 2277734",
  location: "Karachi, Pakistan",
  github: "https://github.com/yahyyaa",
  linkedin: "https://www.linkedin.com/in/yahya-sheikh-aa00b12a0/",
  cvPath: "/cv/yahya-sheikh-cv.pdf",
};

export const navLinks = [
  { label: "Persona", href: "#about" },
  { label: "Arsenal", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const persona = {
  headline: "Architecting Intelligent Data Experiences",
  paragraphs: [
    "I'm Yahya Sheikh, a Data Science graduate merging analytical precision with aesthetic innovation. I don't just build dashboards — I craft digital ecosystems that transform raw data into decisions.",
    "From Power BI storytelling to Python automation and full-stack apps, I bring technical depth and creative vision to every project — turning ideas into products people can actually use.",
  ],
  focus: "Power BI, Python Pipelines, & Full-Stack Analytics.",
  stats: [
    { value: 3.45, suffix: "", label: "CGPA", decimals: 2 },
    { value: 800, suffix: "+", label: "Event Participants", decimals: 0 },
    { value: 30, suffix: "+", label: "Daily Transactions", decimals: 0 },
    { value: 9, suffix: "+", label: "Projects Delivered", decimals: 0 },
  ],
};

export const technicalArsenal = [
  {
    id: "01",
    title: "Data Analytics & BI",
    subtitle: "Dashboards & Business Intelligence",
    proficiency: 92,
    tools: ["Power BI", "Excel", "DAX", "KPIs"],
  },
  {
    id: "02",
    title: "Python Development",
    subtitle: "Automation & Data Engineering",
    proficiency: 88,
    tools: ["Python", "Pandas", "Matplotlib", "Automation"],
  },
  {
    id: "03",
    title: "Full Stack Engineering",
    subtitle: "Web Apps & APIs",
    proficiency: 85,
    tools: ["Node.js", "Express", "JavaScript", "PWA"],
  },
  {
    id: "04",
    title: "Database Systems",
    subtitle: "Schema Design & Querying",
    proficiency: 87,
    tools: ["MySQL", "SQL", "Database Design"],
  },
  {
    id: "05",
    title: "Machine Learning",
    subtitle: "Computer Vision & Deep Learning",
    proficiency: 78,
    tools: ["Deep Learning", "RCNN", "OpenCV", "Flask"],
  },
  {
    id: "06",
    title: "Business Intelligence",
    subtitle: "Reporting & Insights",
    proficiency: 90,
    tools: ["Reporting", "Data Cleaning", "Visualization"],
  },
];

export const projectFilters = [
  "All",
  "Power BI",
  "Python",
  "Full Stack",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export const experiences = [
  {
    role: "Operations & Data Intern",
    company: "Karachi United",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Supported operations for a multi-city championship with 800+ participants across 40 teams.",
      "Built analytics dashboards for player demographics, age groups, and institute distribution.",
      "Managed logistics, venue coordination, and Excel-based registration workflows.",
      "Coordinated with partners including Unilever, Jubilee Life, and myco.",
    ],
    image: "/images/kusc-dashboard.png",
  },
  {
    role: "IT Intern",
    company: "Gerry's International (GSA)",
    period: "Jul 2025 – Aug 2025",
    highlights: [
      "Provided ERP and IT support using Odoo systems across departments.",
      "Developed a Python automation script to match sales invoices and flag discrepancies.",
      "Streamlined internal reporting and reduced manual reconciliation time.",
    ],
  },
  {
    role: "General Secretary",
    company: "Vanquishers, IoBM Sports Society",
    period: "Aug 2025 – Jul 2026",
    highlights: [
      "Led planning and analytics for campus sports events and resource allocation.",
      "Served as Events Director, coordinating teams, venues, and participant data.",
      "Optimized event workflows using data-driven scheduling and budgeting.",
    ],
  },
  {
    role: "Assistant Manager",
    company: "Asian Corporation",
    period: "Jun 2023 – Jul 2024",
    highlights: [
      "Managed internal reporting, operational workflows, and financial data tracking.",
      "Oversaw day-to-day operations and cross-team communication.",
      "Maintained accurate records for inventory and financial reconciliation.",
    ],
  },
];

export const projects = [
  {
    title: "Custom Invoice & Ledger System",
    description:
      "Full-stack PWA for a paint raw material supplier handling 30+ daily transactions — auto-pricing, PDF generation, accounts ledger, and inventory management.",
    tags: ["Node.js", "Express", "MySQL", "JavaScript", "PWA", "Railway"],
    category: "Full Stack" as ProjectFilter,
    image: null,
    featured: true,
    status: "Live",
  },
  {
    title: "DENTRAT — AI Dental Analysis",
    description:
      "Final Year Project: deep learning platform for OPG X-ray analysis with object detection, severity scoring, and clinical recommendations.",
    tags: ["Python", "Deep Learning", "RCNN", "Computer Vision", "Flask"],
    category: "Python" as ProjectFilter,
    image: "/images/dentrat-analysis.png",
    gallery: [
      "/images/dentrat-dashboard.png",
      "/images/dentrat-analysis.png",
      "/images/dentrat-login.png",
    ],
    featured: true,
    status: "In Progress",
  },
  {
    title: "Netflix Movies & TV Dashboard",
    description:
      "Interactive Power BI dashboard analyzing 5K+ titles — genre distribution, geographic reach, duration patterns, and release trends.",
    tags: ["Power BI", "Data Visualization", "DAX"],
    category: "Power BI" as ProjectFilter,
    image: "/images/netflix-dashboard.png",
    gallery: ["/images/netflix-dashboard.png", "/images/netflix-dashboard-2.png"],
    featured: true,
  },
  {
    title: "Employee Attrition Analysis",
    description:
      "HR analytics dashboard uncovering attrition drivers across work-life balance, job level, satisfaction scores, and salary trends.",
    tags: ["Power BI", "HR Analytics", "KPIs"],
    category: "Power BI" as ProjectFilter,
    image: "/images/hr-dashboard.png",
    featured: true,
  },
  {
    title: "Social Media Engagement Analysis",
    description:
      "Marketing ROI dashboard tracking 12B+ views across platforms, content types, hashtags, and day-of-week engagement patterns.",
    tags: ["Power BI", "Marketing Analytics", "ROI"],
    category: "Power BI" as ProjectFilter,
    image: "/images/marketing-dashboard.png",
    featured: true,
  },
  {
    title: "Karachi United Championship Analytics",
    description:
      "Operational dashboard for 770 players across 42 institutes — age group breakdowns, board distribution, and institute heatmaps.",
    tags: ["Power BI", "Sports Analytics", "Excel"],
    category: "Power BI" as ProjectFilter,
    image: "/images/kusc-dashboard.png",
  },
  {
    title: "Sales-Invoice Matcher Automation",
    description:
      "Python folder-watching script that automatically matches sales invoices and flags discrepancies for finance teams.",
    tags: ["Python", "Automation", "Odoo"],
    category: "Python" as ProjectFilter,
    image: null,
  },
  {
    title: "Athlete Performance Analysis",
    description:
      "Football player performance analysis using Pandas and Matplotlib — statistical breakdowns and visual trend reports.",
    tags: ["Python", "Pandas", "Matplotlib"],
    category: "Python" as ProjectFilter,
    image: null,
  },
  {
    title: "Business Insights Database",
    description:
      "Relational MySQL database with normalized schema design and complex analytical queries for business reporting.",
    tags: ["MySQL", "SQL", "Database Design"],
    category: "Full Stack" as ProjectFilter,
    image: null,
  },
];

export const credentials = [
  {
    id: "01",
    title: "High Achiever Award",
    issuer: "Highbrow College",
    date: "2022",
    description:
      "Recognized for outstanding academic performance and leadership during A-Levels.",
    image: "/images/trophies.png",
  },
  {
    id: "02",
    title: "Eminent Phoenix Award",
    issuer: "Highbrow College",
    date: "2021",
    description:
      "Awarded for excellence in extracurricular achievement and community contribution.",
    image: "/images/trophies.png",
  },
  {
    id: "03",
    title: "High Achiever Award",
    issuer: "Beaconhouse School System",
    date: "O-Levels",
    description:
      "Academic distinction award for top performance in O-Level examinations.",
    image: "/images/trophies.png",
  },
  {
    id: "04",
    title: "Football Captain",
    issuer: "University & College Teams",
    date: "Leadership",
    description:
      "Led university and college football teams to multiple championship titles.",
    image: "/images/trophies.png",
  },
];

export const leadership = {
  roles: [
    "General Secretary — Vanquishers, IoBM Sports Society",
    "Events Director — Vanquishers Sports Society",
    "Captain — University Football Team",
    "Captain — College Football Team",
  ],
  image: "/images/trophies.png",
};

export const education = [
  {
    degree: "Bachelor of Science in Data Science",
    institution: "Institute of Business Management (IoBM)",
    period: "Expected June 2026",
    detail: "CGPA: 3.45 / 4.0",
    tags: ["Data Science", "Machine Learning", "Analytics"],
  },
  {
    degree: "A-Levels",
    institution: "Highbrow College",
    period: "2022",
    detail: "High Achiever Award",
    tags: ["Mathematics", "Statistics", "Leadership"],
  },
  {
    degree: "O-Levels",
    institution: "Beaconhouse School System",
    period: "Completed",
    detail: "High Achiever Award",
    tags: ["Science", "Academic Excellence"],
  },
];
