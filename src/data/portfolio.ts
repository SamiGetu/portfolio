import type { Project, Experience, SkillCategory } from '../types';

import hrImg from '../assets/projects/hr.webp';
import keftaImg from '../assets/projects/kefta.webp';
import kispayImg from '../assets/projects/kispay.webp';
import onenessImg from '../assets/projects/oneness.webp';
import opmImg from '../assets/projects/opm.webp';
import parentPortalImg from '../assets/projects/parent-portal.webp';
import zmenuImg from '../assets/projects/zmenu.webp';
import websiteBuilderImg from '../assets/projects/webbuilder.webp';

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
    isPersonal: false,
    image: onenessImg
  },
  {
    id: "02",
    name: "HR System",
    description: "Comprehensive Human Resources management system.",
    isPersonal: false,
    image: hrImg
  },
  {
    id: "03",
    name: "Kefeta Microfinance",
    description: "Merchant backoffice dashboard for managing operations.",
    isPersonal: false,
    image: keftaImg
  },
  {
    id: "04",
    name: "Kispay Gateway",
    description: "Payment gateway merchant backoffice dashboard for seamless transactions.",
    isPersonal: false,
    image: kispayImg
  },
  {
    id: "05",
    name: "Parent Student Portal",
    description: "Portal connecting parents and students with school resources.",
    isPersonal: false,
    image: parentPortalImg
  },
  {
    id: "06",
    name: "Oneplanet Media",
    description: "YouTube channel management platform.",
    isPersonal: false,
    image: opmImg
  },
  {
    id: "07",
    name: "zMenu",
    description: "Food menu management platform for restaurants.",
    isPersonal: true,
    image: zmenuImg
  },
  {
    id: "08",
    name: "Website Builder",
    description: "Template based website builder for rapid development.",
    isPersonal: true,
    image: websiteBuilderImg
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
  { name: "Email", link: "mailto:samuelgetachew360@gmail.com", label: "samuelgetachew360@.gmail.com" },
  { name: "GitHub", link: "https://github.com/SamiGetu", label: "github.com/SamiGetu" }
];
