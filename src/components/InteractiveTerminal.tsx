"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Play, RotateCcw, Sparkles } from "lucide-react";
import { DEVELOPER_PROFILE, PROJECTS, SKILL_GROUPS } from "@/data/portfolio";

interface LogEntry {
  command: string;
  output: React.ReactNode;
}

const QUICK_COMMANDS = ["help", "whoami", "skills", "projects", "architecture", "contact", "clear"];

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      command: "init --portfolio",
      output: (
        <div className="space-y-1 text-emerald-400">
          <p>✔ Loaded snhi2002-beep runtime environment (Next.js 15 + TypeScript + Turborepo)</p>
          <p className="text-slate-400">
            Type <span className="text-indigo-400 font-semibold">help</span> or click a command chip below to inspect projects, architecture, and skills.
          </p>
        </div>
      ),
    },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: React.ReactNode;

    switch (cmd) {
      case "help":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
            <div><span className="text-indigo-400 font-semibold">whoami</span> — Developer bio & engineering focus</div>
            <div><span className="text-indigo-400 font-semibold">skills</span> — Full-stack, Systems & DB matrix</div>
            <div><span className="text-indigo-400 font-semibold">projects</span> — Inspect production GitHub repos</div>
            <div><span className="text-indigo-400 font-semibold">architecture</span> — Security, Caching & DRM specs</div>
            <div><span className="text-indigo-400 font-semibold">hobby</span> — Beyond code (Guitar & Gear Design)</div>
            <div><span className="text-indigo-400 font-semibold">clear</span> — Reset terminal output</div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white font-semibold">{DEVELOPER_PROFILE.handle} — {DEVELOPER_PROFILE.name}</p>
            <p>{DEVELOPER_PROFILE.bio}</p>
            <p className="text-emerald-400 text-xs mt-1">Status: {DEVELOPER_PROFILE.status}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-slate-300">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category}>
                <span className="text-indigo-400 font-semibold">{group.category}: </span>
                <span>{group.skills.map((s) => s.name).join(" • ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-slate-300">
            {PROJECTS.map((p) => (
              <div key={p.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-1">
                <div>
                  <span className="text-emerald-400 font-semibold">{p.title}</span>{" "}
                  <span className="text-xs text-slate-400">({p.techStack.slice(0, 3).join(", ")})</span>
                </div>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-indigo-400 hover:underline"
                >
                  github.com ↗
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case "architecture":
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-amber-300 font-semibold">Active System Blueprints:</p>
            <p>1. Zero-Trust OAuth 2.0 + HttpOnly JWT Cookie Pipeline (Express.js + Passport + Redis)</p>
            <p>2. 3NF Relational Schema + Redis Write-Through Caching Layer (MySQL + MongoDB)</p>
            <p>3. Protected Media Streaming & Multiplexed Socket.io Room Coordinator</p>
          </div>
        );
        break;

      case "hobby":
        output = (
          <div className="text-slate-300 space-y-1">
            <p>🎸 Acoustic Guitar: Practicing chord progressions & rhythm transitions.</p>
            <p>⚙️ Mechanical Design: Designing precision wooden gear trains driven by single-motor kinematics.</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-slate-300 space-y-1">
            <p>
              GitHub:{" "}
              <a href={DEVELOPER_PROFILE.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-400 underline">
                {DEVELOPER_PROFILE.githubUrl}
              </a>
            </p>
            <p>Scroll down to the interactive contact form to send a direct message or project inquiry.</p>
          </div>
        );
        break;

      default:
        output = (
          <span className="text-rose-400">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-indigo-400">help</span> for available commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput("");
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            snhi2002-beep@portfolio:~ (interactive-shell)
          </span>
        </div>
        <button
          onClick={() => executeCommand("clear")}
          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded bg-slate-800/70 hover:bg-slate-800 transition"
          title="Clear terminal"
        >
          <RotateCcw className="w-3 h-3" /> clear
        </button>
      </div>

      {/* Quick Chips */}
      <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/70 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-indigo-400" /> Quick run:
        </span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-indigo-300 hover:bg-indigo-600 hover:text-white transition"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output */}
      <div
        ref={containerRef}
        className="p-4 font-mono text-xs sm:text-sm h-64 overflow-y-auto space-y-3"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-indigo-400">~</span>
              <span className="text-white">{item.command}</span>
            </div>
            <div className="pl-5 leading-relaxed">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand(input);
        }}
        className="flex items-center border-t border-slate-800 bg-slate-900/60 px-4 py-2.5"
      >
        <span className="text-emerald-400 font-mono text-sm mr-2">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command (e.g. help, projects, skills, architecture)..."
          className="w-full bg-transparent text-xs sm:text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
          aria-label="Terminal command input"
        />
        <button
          type="submit"
          className="ml-2 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono flex items-center gap-1 transition"
        >
          <Play className="w-3 h-3" /> Run
        </button>
      </form>
    </div>
  );
}
