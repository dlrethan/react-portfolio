# Ethan De La Rosa — Portfolio

Personal portfolio site built with React. Features a refined parchment aesthetic, scroll-triggered animations, and live GitHub activity.

**Live:** https://react-portfolio-master-dun.vercel.app

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (Create React App) |
| Styling | Tailwind CSS v3 + custom CSS variables |
| Scroll animations | IntersectionObserver (custom `useInView` hook) |
| Icons | react-icons |
| Smooth scroll | react-scroll |
| Fonts | Cormorant Garamond, JetBrains Mono |
| Deployment | Vercel |

---

## Features

- **Parchment light theme** — warm cream background with rust gold accents and ink text, using CSS custom properties throughout
- **Scroll reveal animations** — elements animate in once as they enter the viewport via a custom `useInView` hook
- **Live "Now Building" indicator** — fetches the most recently pushed public repo from the GitHub API and displays it on the hero with a time-ago formatter
- **Custom cursor** — dot and ring follow the mouse on desktop, disabled on touch devices
- **Noise overlay** — subtle grain texture layered over the background for depth
- **Contact form** — powered by Getform, no backend required
- **Responsive** — fluid typography and layout via `clamp()`, single-column on mobile

---

## Sections

| # | Section | Description |
|---|---|---|
| 01 | Home | Hero with staggered fade-up animations and live repo indicator |
| 02 | About | Background, UCR bootcamp credential, and tech focus |
| 03 | Skills | 11 technologies across frontend and backend |
| 04 | Work | 6 projects with live demo and GitHub links |
| 05 | Contact | Email link, LinkedIn, resume, and contact form |

---

## Projects Featured

- **Iron Room** — Mobile-first workout and nutrition tracker (React 19, Vite, Supabase)
- **Advisor Tracker / LaneIQ** — Real-time repair-order Kanban for auto service advisors with AI-generated scripts via Claude API
- **YardDrop** — Map-based marketplace for yard sales with auto-expiry and in-app messaging
- **E-Commerce API** — RESTful back-end with Sequelize and MySQL
- **Express Note Taker** — Full-stack note app with persistent JSON backend
- **Social Network API** — MongoDB/Mongoose back-end with friends and reactions

---

## Local Development

```bash
git clone https://github.com/dlrethan/react-portfolio.git
cd react-portfolio
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

Deployed on Vercel with automatic deploys on push to `master`.

```bash
vercel --prod
```
