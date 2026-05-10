export const personalInfo = {
  name: "Robert Amaba",
  title: "Full Stack Developer | BSIT Graduate",
  location: "Labangon Tisa, Cebu City, Philippines",
  email: "amabarobert@gmail.com",
  phone: "+63 919 737 6101",
  tagline: "Building full-stack web applications with modern technologies",
  github: "https://github.com/robertamaba",
  linkedin: "https://linkedin.com/in/robertamaba",
};

export const aboutText =
  "Bachelor of Science in Information Technology graduate from Cebu Institute of Technology-University. Experienced in developing full stack web applications and project collaboration. Flexible and eager to learn other programming languages and committed to enhancing my skills and knowledge to contribute future projects in the IT industry.";

export const quickStats = [
  { label: "Years of Study", value: "5" },
  { label: "Projects Completed", value: "2+" },
  { label: "Technologies", value: "10+" },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 67 },
    { name: "TypeScript", level: 55 },
    { name: "Java", level: 45 },
    { name: "PHP", level: 55 },
    { name: "C", level: 34 },
    { name: "SQL", level: 45 },
  ],
  frameworks: [
    { name: "React.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Material-UI", category: "Frontend" },
    { name: "HTML & CSS", category: "Frontend" },
    { name: "Laravel", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "Expo", category: "Mobile" },
    { name: "React Navigation", category: "Mobile" },
  ],
  tools: [
    { name: "MySQL" },
    { name: "SQLite" },
    { name: "Supabase" },
    { name: "Vite" },
    { name: "Brevo" },
    { name: "Google Cloud" },
    { name: "XAMPP" },
    { name: "Figma" },
    { name: "Canva" },
    { name: "GitHub" },
    { name: "WordPress" },
  ],
  softSkills: [
    "Project Management",
    "Teamwork",
    "Time Management",
    "Critical Thinking",
    "Adaptability",
    "UI/UX Design",
  ],
};

export const experience = [
  {
    role: "WordPress Developer / Support",
    company: "HUMEDIT PHILIPPINES",
    type: "OJT",
    duration: "Feb 2025 - Apr 2025",
    responsibilities: [
      "Assisting in updating website content, including links, terms and texts",
      "Debugging and testing website functionality and user experience",
      "Develop front-end designs by converting Figma mockups into responsive WordPress pages using HTML and CSS",
      "Identifying and fixing website errors, bugs, and responsiveness",
      "Converting PDFs and manuals into a structured, web-readable HTML",
    ],
  },
];

export const projects = [
  {
    title: "Rent Tracker",
    subtitle: "Property & Rent Management App",
    type: "Personal Project",
    duration: "May 2026",
    role: "Solo Developer",
    description:
      "An Android mobile app for landlords and property managers to track rental properties, guest information, monthly payments, and electric meter readings — fully offline with all data stored locally on the device.",
    achievements: [
      "Built a fully offline Android app using local SQLite storage with no backend or internet requirement",
      "Implemented automated monthly billing cycle detection that rolls over meter readings and schedules rent due push notifications at 8AM",
      "Integrated one-tap contact actions (call, SMS, WhatsApp) directly from the guest detail view",
      "Published to Google Play Store via EAS Build with internal testing distribution",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "React Navigation",
      "expo-notifications",
      "date-fns",
    ],
    github: "https://github.com/miracle3411/rent-tracker",
  },
  {
    title: "Payslip System",
    subtitle: "Payroll Management System",
    type: "Freelance Project",
    duration: "March 2026 - April 2026",
    role: "Full Stack Developer",
    description:
      "A web-based payroll management system for generating, managing, and distributing employee payslips across multiple companies and currencies.",
    achievements: [
      "Built multi-company payroll management with USD and PHP currency support including live exchange rate conversion",
      "Implemented bulk payslip delivery via email and bulk PDF generation with folder download support",
      "Developed a dynamic custom column system with formula builder and Excel data import",
      "Integrated Supabase authentication with role-based access control and company-level authorization",
    ],
    technologies: [
      "React",
      "Vite",
      "Spring Boot",
      "Java",
      "MySQL",
      "Supabase",
      "Tailwind CSS",
      "jsPDF",
    ],
  },
  {
    title: "Baon Buddy",
    subtitle: "Allowance Tracker for Filipino Students",
    type: "Personal Project",
    duration: "February 2026 - Present",
    role: "Solo Developer",
    description:
      "A mobile app that helps Filipino students track their daily allowance (baon), log expenses by category, and see if their budget will last until the next reload date.",
    achievements: [
      "Built a real-time budget meter system (green/yellow/red) that calculates daily safe-to-spend based on remaining balance and days left in the allowance period",
      "Integrated Google AdMob (banner, interstitial, rewarded video) and RevenueCat subscription billing for a free vs. Pro monetization model",
      "Implemented full offline-first data persistence with AsyncStorage, push notifications, Victory Native charts, and a shareable weekly summary image",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "AsyncStorage",
      "RevenueCat",
      "AdMob",
      "Victory Native",
      "Expo Notifications",
    ],
    playStore: true,
  },
  {
    title: "CebuStay",
    subtitle: "Booking Application",
    type: "Capstone Project",
    duration: "Jan 2024 - Dec 2024",
    role: "Project Team Lead / Backend Developer",
    description:
      "A web and mobile booking application for Cebu City accommodations.",
    achievements: [
      "Collaborated with a team of 5 developers",
      "Transitioned from team member to team lead, managing tasks and coordinating with the project adviser",
      "Developed backend using PHP (Laravel), building APIs and server-side logic",
      "Implemented MySQL for database management hosted on XAMPP during development",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "XAMPP"],
    github: "https://github.com/IrishLeigh/CebuStay",
  },
  {
    title: "EvoHub",
    subtitle: "School Event Management System",
    type: "Academic Project",
    duration: "Aug 2023 - Dec 2023",
    role: "Project Team Lead / Full Stack Developer",
    description:
      "A web application for managing school events at CIT-University.",
    achievements: [
      "Collaborated with a team of 4 to develop the complete system",
      "Worked as a full-stack developer, using React.js and Material-UI for responsive web features",
      "Built the backend with Java (Spring Boot), handling event management and user authentication",
      "Integrated frontend and backend using NetBeans IDE with MySQL hosted on XAMPP",
    ],
    technologies: [
      "React.js",
      "Material-UI",
      "Java",
      "Spring Boot",
      "MySQL",
    ],
    github: "https://github.com/miracle3411/EvoHub",
  },
];

export const currentlyLearning = [
  {
    title: "Next.js",
    description:
      "App Router, Server Components, and full-stack React framework",
    status: "In Progress",
  },
  {
    title: "Supabase",
    description:
      "Authentication, Real-time features, and Database management",
    status: "In Progress",
  },
  {
    title: "AI-Assisted Development",
    description:
      "Using Claude Code for development assistance and productivity",
    status: "In Progress",
  },
];

export const education = {
  school: "Cebu Institute of Technology-University",
  degree: "Bachelor of Science in Information Technology",
  years: "2020 - 2025",
};

export const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Learning", href: "learning" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];
