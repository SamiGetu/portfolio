export interface Project {
  id: string;
  name: string;
  description: string;
  isPersonal?: boolean;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  projects: string[];
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
