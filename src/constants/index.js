import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const EXPERIENCES = [
  {
    year: "Mar 2025 - Present",
    role: "Junior Software Developer",
    company: "EG",
    description: `Working on migrating a large monorepo to a Micro Frontend (MFE) architecture and upgrading the codebase from Preact to React. Adopting modern technologies such as Redux Toolkit (RTK Query) for efficient data fetching and state management, and building a custom shared component library to standardize UI across applications. Also delivered new product features including a real-time Alarms module and an Automated Report Generation system.`,
    technologies: ["React", "Preact", "RTK Query", "Redux Toolkit", "Micro Frontend", "TypeScript"],
  },
  {
    year: "Nov 2022 - Oct 2023",
    role: "Junior Application Engineer",
    company: "VIS Networks",
    description: `Worked across the stack, building backend services with Java, Spring Boot, and Spring Security, and developing React-based user interfaces. Designed and integrated REST APIs with MySQL, implemented authentication and authorization, and delivered responsive, performant frontend experiences.`,
    technologies: ["Java", "Spring Boot", "Spring Security", "REST API", "MySQL", "ReactJS", "HTML", "CSS"],
  }


];

export const PROJECTS = [
  {
    title: "EMS – Energy Management System",
    image: project4,
    description:
      "Built during my internship at EG as a hands-on learning project. A web-based Energy Management System that visualizes real-time consumption data, supports role-based access, and includes dashboards and alarms. Built interactive charts and graphs to visualize real-time and historical energy data for trend analysis. Helped me ramp up on React, TypeScript, and Redux Toolkit (RTK Query) used in production code.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "REST API", "TailwindCSS"],
  },
  {
    title: "Bliss Expertise – AC Sales & Service",
    image: project1,
    description:
      "A MERN-stack web application for an AC sales and service business. Customers can view service details (including expiry dates, pricing, and booking history) and book services online. Built with separate customer and admin modules, enabling role-based access for managing services, bookings, and sales.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Product Management App",
    image: project2,
    description:
      "A full-stack product management application with complete CRUD support (Create, Read, Update, Delete). Built a Spring Boot REST API backed by a relational database, and a React-based UI for managing the product catalog with form validation and inline editing.",
    technologies: ["Java", "Spring Boot", "REST API", "React", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "The very site you're on — a fully responsive personal portfolio built with React and Vite. Uses Tailwind CSS for styling, Framer Motion for scroll-triggered animations and smooth transitions, and react-icons for the technology showcase. Features a dynamic experience timeline sorted by date, an EMS / Bliss Expertise / Product Management project gallery, a downloadable resume, and click-to-contact phone and email links. Designed mobile-first with adaptive layouts, accessible alt text, and SEO/Open Graph meta tags for clean link previews.",
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "react-icons"],
  },

];

export const CONTACT = {
  phoneNo: "+91 9110232822",
  email: "sachina0075@gmail.com",
};
