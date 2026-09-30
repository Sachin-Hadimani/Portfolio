import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export type Experience = {
  id: string;
  year: string;
  company: string;
  technologies: string[];
};

export type Project = {
  id: string;
  image: string;
  technologies: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "eg",
    year: "Mar 2025 - Present",
    company: "EG",
    technologies: ["React", "Preact", "RTK Query", "Redux Toolkit", "Micro Frontend", "TypeScript"],
  },
  {
    id: "visNetworks",
    year: "Nov 2022 - Oct 2023",
    company: "VIS Networks",
    technologies: ["Java", "Spring Boot", "Spring Security", "REST API", "MySQL", "ReactJS", "HTML", "CSS"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ems",
    image: project4,
    technologies: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "REST API", "TailwindCSS"],
  },
  {
    id: "bliss",
    image: project1,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "productManagement",
    image: project2,
    technologies: ["Java", "Spring Boot", "REST API", "React", "MySQL"],
  },
  {
    id: "portfolioWebsite",
    image: project3,
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "react-icons"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9110232822",
  email: "sachina0075@gmail.com",
};
