import type { Project, Experience, SkillCategory } from '../types';

export const EXPERIENCE: Experience[] = [
  {
    company: "Oneplanet International School — Oneness Academy",
    role: "Full Stack Developer",
    projects: [
      "Oneness Academy E-learning Platform"
    ],
    current: true
  },
  {
    company: "Invictus Technology Solutions",
    role: "Front-end Developer",
    projects: [
      "KisPay (payment gateway)",
      "Kefeta Microfinance merchant dashboard",
      "HR System",
      "Parent-Student Portal"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Oneness Academy",
    description: "E-learning platform for students and teachers.",
    isPersonal: false
  },
  {
    id: "02",
    name: "HR System",
    description: "Comprehensive Human Resources management system.",
    isPersonal: false
  },
  {
    id: "03",
    name: "Kefeta Microfinance",
    description: "Merchant backoffice dashboard for managing operations.",
    isPersonal: false
  },
  {
    id: "04",
    name: "Kispay Gateway",
    description: "Payment gateway merchant backoffice dashboard for seamless transactions.",
    isPersonal: false
  },
  {
    id: "05",
    name: "Parent Student Portal",
    description: "Portal connecting parents and students with school resources.",
    isPersonal: false
  },
  {
    id: "06",
    name: "Oneplanet Media",
    description: "YouTube channel management platform.",
    isPersonal: false
  },
  {
    id: "07",
    name: "zMenu",
    description: "Food menu management platform for restaurants.",
    isPersonal: true
  },
  {
    id: "08",
    name: "Website Builder",
    description: "Template based website builder for rapid development.",
    isPersonal: true
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "FRONTEND",
    skills: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Vite", "Next.js"]
  },
  {
    title: "DESIGN",
    skills: ["Figma", "UI/UX", "Prototyping", "Wireframing", "Design Systems"]
  }
];

export const SOCIALS = [
  { name: "Email", link: "mailto:samuel@example.com", label: "samuel@example.com" },
  { name: "LinkedIn", link: "https://linkedin.com/in/samuelgetachew", label: "linkedin.com/in/samuelgetachew" },
  { name: "GitHub", link: "https://github.com/samuelgetachew", label: "github.com/samuelgetachew" }
];
