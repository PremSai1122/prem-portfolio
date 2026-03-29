export const portfolio = {
  name: "Prem Sai",
  email: "pprem.sai1998@gmail.com",
  phone: "+91 770 244 2255",
  location: "Bengaluru, Karnataka, India",
  linkedin: "#", // replace with real URL
  github: "#", // replace with real URL

  summary:
    "4 years building enterprise-grade React applications for global clients. Specializing in scalable UI architecture, complex state management, and clean code that stands the test of time.",

  stats: [
    { num: "4", suffix: "+", label: "Years at TCS" },
    { num: "3", suffix: "", label: "Enterprise Clients" },
    { num: "3", suffix: "", label: "Major Projects" },
    { num: "1", suffix: "", label: "Adobe Cert" },
  ],

  coreStack: [
    "React.js",
    "TypeScript",
    "Redux",
    "Recoil",
    "REST",
    "Git",
    "Agile",
  ],

  skills: [
    { group: "Frontend", items: ["React.js", "TypeScript", "HTML", "CSS"] },
    {
      group: "State Management",
      items: ["Redux", "Context API", "Recoil", "Reducers"],
    },
    {
      group: "Architecture",
      items: ["RESTful APIs", "SOA", "Component Design"],
    },
    {
      group: "Tools & Delivery",
      items: ["Git", "GitHub", "Agile / Scrum", "JIRA"],
    },
  ],

  projects: [
    {
      num: "01",
      client: "Merck KGaA",
      name: "On Demand Knowledge",
      period: "Mar 2022 – Jul 2024 · 28 months",
      colorVar: "accent", // maps to $accent in SCSS
      colorHex: "#6366f1",
      desc: "Continuous learning & development platform for CFO areas — Finance, MBS, and Procurement Operations — at a global science and technology leader.",
      points: [
        "Enabled users to build personal skill inventories to drive targeted learning actions.",
        "Supported NextGen Profiles with cultural behavior expectations and skill frameworks.",
        "Built scalable React component architecture with TypeScript across business domains.",
      ],
      tech: ["React.js", "TypeScript", "State Management"],
    },
    {
      num: "02",
      client: "EY (Ernst & Young)",
      name: "Report Author",
      period: "Aug 2024 – Jun 2025 · 11 months",
      colorVar: "accent2",
      colorHex: "#34d399",
      desc: "Intelligent document processing platform that ingests files from SharePoint, extracts structured data, and exposes APIs for full project and file lifecycle management.",
      points: [
        "Built React UI for file upload flows, project dashboards, and ingestion status tracking.",
        "Integrated create/delete project APIs and file re-ingestion workflows.",
        "Processing pipeline extracts text, images, and tables for downstream reporting.",
      ],
      tech: ["React.js", "TypeScript", "REST APIs", "SharePoint"],
    },
    {
      num: "03",
      client: "UIDAI (Govt. of India)",
      name: "BackOffice Platform",
      period: "Jul 2024 – Apr 2025 · 10 months",
      colorVar: "accent3",
      colorHex: "#fb923c",
      desc: "Government-grade platform for UIDAI to support regional office workflows and streamline Aadhaar management operations across India.",
      points: [
        "Developed end-to-end workflows for Aadhaar deactivation and omission cases.",
        "Built approval process flows to streamline regional office operations.",
        "Ensured strict compliance with UIDAI regulatory and security guidelines.",
      ],
      tech: ["React.js", "TypeScript", "Agile"],
    },
  ],

  experience: {
    company: "Tata Consultancy Services",
    role: "Frontend Developer / React JS Developer",
    period: "Feb 2022 – Apr 2026",
    duration: "4+ Yrs",
    location: "India",
    bullets: [
      "Built and shipped React enterprise platforms using React.js and TypeScript for clients in pharma, consulting, and government.",
      "Implemented complex state management using Redux, Context API, Recoil, and custom reducers tailored per project.",
      "Contributed to service-oriented solutions and RESTful API integrations, bridging frontend with backend data flows.",
      "Delivered within Agile/Scrum frameworks — sprint planning, retrospectives, JIRA tracking, and release coordination.",
      "Maintained clean codebases via Git workflows, code reviews, and GitHub version control best practices.",
      "Completed Adobe Design Thinking Workshop at Merck KGaA client site, deepening user-centered product thinking.",
    ],
  },
};
