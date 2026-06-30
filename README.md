# Sachin Hadimani — Portfolio

A personal portfolio website built with **React + Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion**. It showcases my experience, projects, technologies, and contact details.

## Features

- Fully responsive, mobile-first layout (tested across 375px / 768px / 1280px breakpoints)
- Scroll-triggered animations and smooth transitions via Framer Motion
- Floating technology icons powered by `react-icons`
- Dynamic experience timeline — entries are sorted automatically by end date (with "Present" treated as the most recent)
- Project gallery (EMS, Bliss Expertise, Product Management App, Portfolio)
- Downloadable resume
- Click-to-contact links (`mailto:` for email, `tel:` for phone)
- SEO + Open Graph meta tags for clean link previews on LinkedIn / WhatsApp

## Tech Stack

| Area      | Stack                                      |
| --------- | ------------------------------------------ |
| Framework | React 18, Vite 6                           |
| Styling   | Tailwind CSS, PostCSS, Autoprefixer        |
| Animation | Framer Motion                              |
| Icons     | react-icons (`fa`, `ri`, `si`, `bi`)       |
| Tooling   | ESLint, Vite Dev Server / HMR              |

## Project Structure

```
.
├── index.html
├── public/
│   └── Sachin_Resume.pdf
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   │   └── projects/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   ├── Projects.jsx
│   │   └── Technologies.jsx
│   └── constants/
│       └── index.js          # EXPERIENCES, PROJECTS, CONTACT
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open <http://localhost:5173/>.

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Customization

All editable content lives in `src/constants/index.js`:

- `EXPERIENCES` — work history (auto-sorted by date in `src/components/Experience.jsx`)
- `PROJECTS` — project cards
- `CONTACT` — phone and email

Replace the resume at `public/Sachin_Resume.pdf`, and update images under `src/assets/projects/`.

## Contact

- **Email:** sachina0075@gmail.com
- **LinkedIn:** [sachin-hadimani](https://www.linkedin.com/in/sachin-hadimani-675184224/)
- **GitHub:** [Sachin0075](https://github.com/Sachin0075)
- **Instagram:** [@sachin___hadimani](https://www.instagram.com/sachin___hadimani/)

