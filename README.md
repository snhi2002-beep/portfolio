# ⚡ snhi2002-beep — Full-Stack & Systems Engineer Portfolio

A production-ready, interactive developer portfolio engineered with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**, plus a zero-build standalone **`index.html`** preview for instant static hosting.

---

## ✨ Key Architectural Features

1. **Interactive CLI Terminal Emulator (`src/components/InteractiveTerminal.tsx`)**
   - Supports live developer inspection commands (`whoami`, `projects`, `skills`, `architecture`, `hobby`, `contact`, `clear`) and one-click command chips.
2. **Filterable Project & Code Showcase (`src/components/ProjectShowcase.tsx`)**
   - Highlights real GitHub repositories and Vercel deployments (`streaming-platform`, `blogging-ui`, `gemini-extention`, `next-platform-starter`, `app`, `hd-new`) with expandable implementation code snippets.
3. **Interactive System Architecture Blueprint Viewer (`src/components/ArchitectureViewer.tsx`)**
   - Visualizes 4-stage production pipelines for:
     - **Zero-Trust OAuth 2.0 + HttpOnly JWT Cookie Authentication** (Express.js, Passport.js, Redis)
     - **3NF Relational Schema + Redis Write-Through Caching** (MySQL, MongoDB, Redis)
     - **Protected Media Streaming & Multiplexed Socket.io Rooms** (Turborepo, WebSockets)
4. **Full-Stack & Systems Competency Matrix (`src/data/portfolio.ts`)**
   - Structured breakdown across **Web Monorepos**, **C++ Memory & STL / Java OOP**, **Database Normalization & Security**, and **UML / ER Modeling**.
5. **Validated Contact API Route (`src/app/api/contact/route.ts`)**
   - Built-in Next.js `POST /api/contact` endpoint with payload validation and receipt generation.

---

## 🚀 Quick Start (Next.js 15 App)

```bash
# 1. Clone the repository
git clone https://github.com/snhi2002-beep/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🌐 Instant Deployment Options

- **Vercel (Recommended for Next.js 15):** Import `snhi2002-beep/portfolio` in Vercel with zero configuration required.
- **GitHub Pages / Static Preview:** Open or serve `index.html` directly in any browser without a build step.
