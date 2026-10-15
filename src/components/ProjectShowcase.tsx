"use client";

import React, { useState } from "react";
import { ExternalLink, Github, Code2, Layers, CheckCircle2 } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio";

const CATEGORIES = ["All", "Full-Stack", "Systems & Security", "Real-Time & AI"] as const;

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>("streaming-platform");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                  active
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <span className="text-xs font-mono text-slate-400">
          Showing {filteredProjects.length} of {PROJECTS.length} engineered repositories
        </span>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project: Project) => {
          const isCodeOpen = selectedSnippet === project.id;
          return (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-800/90 bg-slate-900/50 hover:bg-slate-900/80 hover:border-indigo-500/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-2.5 py-0.5 rounded-full">
                      <Layers className="w-3 h-3" /> {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-indigo-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">{project.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                      title="View Source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-indigo-600/20 border border-indigo-500/40 hover:bg-indigo-600 text-indigo-300 hover:text-white transition"
                        title="Open Live Production Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

                {/* Architecture Callout */}
                <div className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-3.5 text-xs text-slate-300">
                  <span className="font-mono text-emerald-400 font-semibold">Architecture Highlight: </span>
                  {project.architectureHighlight}
                </div>

                {/* Key Metrics */}
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="inline-flex items-center gap-1 text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {metric}
                    </span>
                  ))}
                </div>

                {/* Optional Code Preview Toggle */}
                {project.codeSnippet && (
                  <div className="pt-1">
                    <button
                      onClick={() => setSelectedSnippet(isCodeOpen ? null : project.id)}
                      className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      {isCodeOpen ? "Hide implementation snippet" : `Inspect ${project.codeSnippet.filename}`}
                    </button>

                    {isCodeOpen && (
                      <div className="mt-2.5 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                        <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
                          <span>{project.codeSnippet.filename}</span>
                          <span className="text-indigo-400">{project.codeSnippet.language}</span>
                        </div>
                        <pre className="p-3 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                          <code>{project.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
