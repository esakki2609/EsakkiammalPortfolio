export const profile = {
  name: "Esakkiammal",
  fullName: "Esakkiammal Palanisamy",
  role: "Senior Full Stack Developer",
  email: "esakkiammal2609@gmail.com",
  phone: "6383788537",
  phoneDisplay: "+91 63837 88537",
  linkedIn: "https://www.linkedin.com/in/esakkiammal-palanisamy/",
  github: "https://github.com/esakki2609",
  resumeUrl: "/api/resume",
  objective:
    "Senior Full Stack Developer with 4+ years of experience building scalable web applications, serverless architectures, and AI-powered automation tools using JavaScript, Node.js, React.js, AWS, and GenAI frameworks — with end-to-end ownership from system design to deployment.",
};

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js",
      "React.js",
      "Next.js",
      "Express.js",
      "Serverless Framework",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "MERN",
    ],
  },
  {
    title: "APIs, Auth & Payments",
    items: [
      "RESTful APIs",
      "GraphQL",
      "OAuth",
      "JWT",
      "Polar Payment",
      "Stripe Payment Gateway",
    ],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "MongoDB", "Prisma", "CI/CD", "GitHub", "Docker"],
  },
  {
    title: "Cloud & Services",
    items: [
      "AWS Lambda",
      "S3",
      "API Gateway",
      "CloudWatch",
      "SNS",
      "SSM",
      "AppSync",
      "Amplify",
      "IAM",
      "ECS",
      "SQS",
      "SES",
    ],
  },
  {
    title: "AI Tools & Frameworks",
    items: ["LangChain", "LangGraph", "GenAI", "Cursor", "Antigravity"],
  },
];

export const experience = [
  {
    company: "Forzo TechLabs",
    role: "Full Stack with AI Integration Developer",
    product: "ForzoFlow",
    location: "Chennai",
    period: "September 2025 – Present",
    points: [
      "Architected and developed ForzoFlow, a LinkedIn-approved automation platform for creating and scheduling posts, managing comments, and formatting content via a Chrome extension and web app.",
      "Integrated Polar Payment Gateway for subscription billing and built a serverless backend on AWS Lambda and API Gateway for multi-tenant workflows at scale.",
      "Designed LangChain and LangGraph-powered AI workflows for intelligent content generation and task orchestration.",
      "Built GraphQL APIs and integrated LinkedIn productivity tools to reduce manual content operations.",
    ],
  },
  {
    company: "Forzo TechLabs",
    role: "Full Stack with AI Integration Developer",
    product: "Carboventory",
    location: "Chennai",
    period: "September 2025 – Present",
    points: [
      "Built Carboventory, a carbon emission tracking platform that calculates carbon savings from industry averages and refurbished emission values.",
      "Implemented Caly AI prompt workflows for emission estimates when public data is unavailable, with Tavily-powered source search for verified proof.",
      "Developed the full stack with React, Node.js, and AWS SQS for async processing, plus Excel extraction for product-level carbon reporting.",
    ],
  },
  {
    company: "Forzo TechLabs",
    role: "Full Stack Developer",
    product: "E-Check Insurance",
    location: "Chennai",
    period: "May 2023 – Present",
    points: [
      "Owned end-to-end a multi-role insurance comparison and dealership management platform with Super Admin, Manager, and Employee access.",
      "Handled requirement gathering, development, testing, and production releases with zero delays.",
      "Implemented Canopy API customer verification, multi-dealership association, and centralized document storage.",
      "Enforced role-based access control (RBAC) with JWT authentication across all user roles.",
    ],
  },
  {
    company: "Mobius Knowledge and Services",
    role: "MERN Stack Developer",
    product: "On the Stage",
    location: "Chennai",
    period: "March 2022 – April 2023",
    points: [
      "Integrated Stripe Payment Gateway and RESTful APIs with Node.js and Express.js for end-to-end ticket purchasing.",
      "Built responsive React.js UI for event listing, ticket booking, and user dashboards.",
      "Optimized frontend performance and added real-time notifications for better engagement.",
    ],
  },
];

export const projects = [
  {
    title: "ForzoFlow",
    tag: "AI Automation",
    summary:
      "LinkedIn-approved automation platform for content scheduling, comment management, and AI-assisted formatting — with Polar billing and a serverless AWS backend.",
    images: [],
  },
  {
    title: "Carboventory",
    tag: "Climate Tech",
    summary:
      "Carbon emission tracking for businesses, combining industry data, AI-generated estimates, and verified source search for product-level carbon savings reports.",
    images: [],
  },
  {
    title: "E-Check Insurance",
    tag: "InsurTech",
    summary:
      "Multi-role insurance comparison and dealership management platform with secure verification workflows, RBAC, and end-to-end ownership from design to production.",
    images: [
      "/projects/echeck1.jpeg",
      "/projects/echeck2.jpeg",
      "/projects/echeck3.jpeg",
      "/projects/echeck4.jpeg",
      "/projects/echeck5.jpeg",
      "/projects/echeck6.jpeg",
      "/projects/echeck7.jpeg",
      "/projects/echeck8.jpeg",
      "/projects/echeck9.jpeg",
    ],
  },
  {
    title: "On the Stage",
    tag: "Ticketing",
    summary:
      "Online ticketing and theater management experience with Stripe payments, seat selection, event scheduling, and real-time notifications.",
    images: [
      "/projects/ots1.jpeg",
      "/projects/ots2.jpeg",
      "/projects/ots3.jpeg",
      "/projects/ots4.jpeg",
      "/projects/ots5.jpeg",
      "/projects/ots6.jpeg",
      "/projects/ots7.jpeg",
    ],
  },
];

export const certifications = [
  "LangChain",
  "LangGraph",
  "AWS Cloud Practitioner (CLF-C02)",
  "Git and GitHub",
];

export const education = {
  school: "Einstein College of Engineering",
  degree: "BE (EEE)",
  score: "8.49 CGPA",
  period: "2018 – 2022",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];
