export const I18N_KEYS = {
  common: {
    languageSwitcherLabel: "common.languageSwitcherLabel",
  },
  nav: {
    home: "nav.home",
    linkedin: "nav.linkedin",
    github: "nav.github",
    whatsapp: "nav.whatsapp",
    whatsappMessage: "nav.whatsappMessage",
  },
  hero: {
    title: "hero.title",
    bio: "hero.bio",
    downloadResume: "hero.downloadResume",
    resumeFile: "hero.resumeFile",
    resumeFileName: "hero.resumeFileName",
  },
  technologies: {
    heading: "technologies.heading",
  },
  experience: {
    heading: "experience.heading",
    role: (id: string) => `experience.items.${id}.role`,
    description: (id: string) => `experience.items.${id}.description`,
  },
  projects: {
    heading: "projects.heading",
    title: (id: string) => `projects.items.${id}.title`,
    description: (id: string) => `projects.items.${id}.description`,
  },
  contact: {
    heading: "contact.heading",
  },
};
