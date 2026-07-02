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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3.45", label: "CGPA" },
  { value: "800+", label: "Event Participants" },
  { value: "30+", label: "Daily Transactions Automated" },
  { value: "2026", label: "Graduation Year" },
];

export const aboutText = [
  "I'm a Data Science graduate from the Institute of Business Management with a passion for transforming complex datasets into clear, actionable insights. From interactive Power BI dashboards to Python automation pipelines and full-stack web apps, I build tools that help teams make smarter decisions faster.",
  "My experience spans operations analytics at Karachi United, ERP automation at Gerry's International, and leading campus sports events — giving me a unique blend of technical depth and real-world execution.",
];

export const skillGroups = [
  {
    title: "Data & BI",
    skills: [
      "Power BI",
      "Data Visualization",
      "Dashboarding",
      "Excel",
      "Pivot Tables",
      "KPIs",
    ],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "C++", "JavaScript", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MySQL", "Database Design"],
  },
  {
    title: "Core Skills",
    skills: [
      "Data Cleaning",
      "Data Analysis",
      "Reporting",
      "Automation",
      "Business Insights",
    ],
  },
];

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
    image: null,
    featured: true,
    status: "Live",
  },
  {
    title: "DENTRAT — AI Dental Analysis",
    description:
      "Final Year Project: deep learning platform for OPG X-ray analysis with object detection, severity scoring, and clinical recommendations.",
    tags: ["Python", "Deep Learning", "RCNN", "Computer Vision", "Flask"],
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
    image: "/images/netflix-dashboard.png",
    gallery: ["/images/netflix-dashboard.png", "/images/netflix-dashboard-2.png"],
    featured: true,
  },
  {
    title: "Employee Attrition Analysis",
    description:
      "HR analytics dashboard uncovering attrition drivers across work-life balance, job level, satisfaction scores, and salary trends.",
    tags: ["Power BI", "HR Analytics", "KPIs"],
    image: "/images/hr-dashboard.png",
    featured: true,
  },
  {
    title: "Social Media Engagement Analysis",
    description:
      "Marketing ROI dashboard tracking 12B+ views across platforms, content types, hashtags, and day-of-week engagement patterns.",
    tags: ["Power BI", "Marketing Analytics", "ROI"],
    image: "/images/marketing-dashboard.png",
    featured: true,
  },
  {
    title: "Karachi United Championship Analytics",
    description:
      "Operational dashboard for 770 players across 42 institutes — age group breakdowns, board distribution, and institute heatmaps.",
    tags: ["Power BI", "Sports Analytics", "Excel"],
    image: "/images/kusc-dashboard.png",
  },
  {
    title: "Sales-Invoice Matcher Automation",
    description:
      "Python folder-watching script that automatically matches sales invoices and flags discrepancies for finance teams.",
    tags: ["Python", "Automation", "Odoo"],
    image: null,
  },
  {
    title: "Athlete Performance Analysis",
    description:
      "Football player performance analysis using Pandas and Matplotlib — statistical breakdowns and visual trend reports.",
    tags: ["Python", "Pandas", "Matplotlib"],
    image: null,
  },
  {
    title: "Business Insights Database",
    description:
      "Relational MySQL database with normalized schema design and complex analytical queries for business reporting.",
    tags: ["MySQL", "SQL", "Database Design"],
    image: null,
  },
];

export const leadership = {
  roles: [
    "General Secretary — Vanquishers, IoBM Sports Society",
    "Events Director — Vanquishers Sports Society",
    "Captain — University Football Team",
    "Captain — College Football Team",
  ],
  awards: [
    "High Achiever Award — Highbrow College (2022)",
    "Eminent Phoenix Award — Highbrow College (2021)",
    "High Achiever Award — Beaconhouse School System (O-Levels)",
  ],
  image: "/images/trophies.png",
};

export const education = [
  {
    degree: "Bachelor of Science in Data Science",
    institution: "Institute of Business Management (IoBM)",
    period: "Expected June 2026",
    detail: "CGPA: 3.45 / 4.0",
  },
  {
    degree: "A-Levels",
    institution: "Highbrow College",
    period: "2022",
    detail: "High Achiever Award",
  },
  {
    degree: "O-Levels",
    institution: "Beaconhouse School System",
    period: "Completed",
    detail: "High Achiever Award",
  },
];
