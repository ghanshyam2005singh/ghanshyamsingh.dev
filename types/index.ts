export interface Project {
  name: string;
  url: string;
  description: string;
  stack: string;
  status: string;
}

export interface TechStackItem {
  name: string;
  src: string;
  category: string;
  proficiency: number;
  description: string;
}