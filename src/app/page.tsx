import React from "react";
import {
  Github,
  Code2,
  Cpu,
  Shield,
  Sparkles,
  ArrowUpRight,
  Layers,
  Terminal as TerminalIcon,
  Wrench,
} from "lucide-react";
import { DEVELOPER_PROFILE, SKILL_GROUPS } from "@/data/portfolio";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ProjectShowcase from "@/components/ProjectShowcase";
import ArchitectureViewer from "@/components/ArchitectureViewer";
import ContactSection from "@/components/ContactSection";

export default function PortfolioHomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-indigo-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[400px] bg-emerald-600/10 blur-[130px] rounded-full" />
      </div>

      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-mono text-sm font-bold text-white">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
              &lt;/&gt;
            </span>
            <span>{DEVELOPER_PROFILE.handle}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#projects" className="hover:text-indigo-400 transition">01. Projects</a>
            <a href="#architecture" className="hover:text-indigo-400 transition">02. Architecture</a>
            <a href="#skills" className="hover:text-indigo-400 transition">03. Skill Matrix</a>
            <a href="#terminal" className="hover:text-indigo-400 transition">04. CLI Shell</a>
            <a href="#contact" className="hover:text-indigo-400 transition">05. Contact</a>
          </nav>

          <a
            href={DEVELOPER_PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-mono text-slate-200 transition"
          >
            <Github className="w-3.5 h-3.5 text-indigo-400" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-28">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-indigo-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{DEVELOPER_PROFILE.status}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineering{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Full-Stack Systems
              </span>{" "}
              &amp; Secure Architectures.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {DEVELOPER_PROFILE.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition"
              >
                Explore Featured Work
              </a>
              <a
                href="#architecture"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-mono transition"
              >
                System Blueprints
              </a>
              <a
                href={DEVELOPER_PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Key Engineering Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {DEVELOPER_PROFILE.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/90"
                >
                  <p className="text-base sm:text-lg font-bold text-white font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Column: Interactive Terminal */}
          <div id="terminal" className="lg:col-span-5">
            <InteractiveTerminal />
          </div>
        </section>

        {/* SECTION 01: PRODUCTION PROJECTS */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> 01 // FEATURED REPOSITORIES &amp; DEPLOYMENTS
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">
                Engineered Systems &amp; Web Platforms
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              From Turborepo streaming monorepos and MongoDB publishing engines to AI browser extensions and real-time WebSocket hubs.
            </p>
          </div>

          <ProjectShowcase />
        </section>

        {/* SECTION 02: SYSTEM ARCHITECTURE BLUEPRINTS */}
        <section id="architecture" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                <Shield className="w-4 h-4" /> 02 // ARCHITECTURE &amp; SECURITY SPECIFICATIONS
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">
                How I Design Resilient Backends
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Interactive walkthroughs of authentication pipelines, relational normalization + Redis caching, and real-time streaming guards.
            </p>
          </div>

          <ArchitectureViewer />
        </section>

        {/* SECTION 03: TECHNICAL SKILL MATRIX */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> 03 // TECHNICAL COMPETENCIES
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">
                Full-Stack, Systems &amp; Data Engineering Matrix
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Bridging high-level TypeScript web frameworks with low-level C++ memory management, Java OOP, and 3NF database design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-5 shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                    <p className="text-xs text-slate-400 mt-1">{group.description}</p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 shrink-0">
                    {group.badge}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{skill.name}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{skill.detail}</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded self-start sm:self-center shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 04: BEYOND THE TERMINAL (ENGINEERING + CREATIVITY) */}
        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-indigo-950/40 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> Craftsmanship Beyond Software
              </span>
              <h3 className="text-xl font-bold text-white">
                Mechanical Kinematics, Mathematical Modeling &amp; Acoustic Rhythm
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Outside of full-stack development, I enjoy designing rotational wooden gear train mechanisms driven by single-motor kinematics, applying linear algebra &amp; statistical hypothesis testing to real-world problems, and practicing acoustic guitar progressions.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 font-mono text-xs text-slate-300 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>UML, Sequence &amp; ER Modeling</span>
              </div>
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-emerald-400" />
                <span>C++ Pointers, STL &amp; Sorting</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>Mechanical Gear Ratios &amp; Guitar</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: CONTACT & COLLABORATION */}
        <section id="contact" className="space-y-8 scroll-mt-20">
          <div className="border-b border-slate-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              05 // INITIATE CONNECTION
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Get In Touch
            </h2>
          </div>

          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © {new Date().getFullYear()} {DEVELOPER_PROFILE.handle}. Built with Next.js 15, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://blogging-ui-three.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              Blogging UI ↗
            </a>
            <a
              href="https://app-seven-delta-54.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              Live Web App ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
