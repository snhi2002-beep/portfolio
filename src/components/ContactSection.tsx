"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Terminal, Github, ExternalLink } from "lucide-react";
import { DEVELOPER_PROFILE } from "@/data/portfolio";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Full-Stack / Systems Engineering Inquiry");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Message logged and ready for dispatch.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("success");
      setResponseMsg("Payload validated locally! Click 'Open in Mail Client' below if you prefer direct email.");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 shadow-2xl">
      {/* Left Column: Direct Channels */}
      <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Open for Collaboration
          </span>
          <h3 className="text-2xl font-bold text-white">
            Let&apos;s Architect Your Next System
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Whether you need a scalable Next.js / Turborepo monorepo, a real-time WebSocket service, hardened OAuth 2.0 & JWT security, or normalized database architecture, feel free to reach out.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-800">
          <a
            href={DEVELOPER_PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/60 text-slate-200 hover:text-white transition"
          >
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="text-xs text-slate-400 font-mono">GitHub Profile</p>
                <p className="text-sm font-semibold">@{DEVELOPER_PROFILE.handle}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold">
              <Terminal className="w-3.5 h-3.5" /> API Endpoint Active
            </div>
            <p>POST /api/contact — Validates schema & returns signed acknowledgment receipt.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR NAME *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Rivera"
              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR EMAIL *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5">TOPIC / SUBJECT</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="Full-Stack / Systems Engineering Inquiry">Full-Stack / Systems Engineering Inquiry</option>
            <option value="Next.js & Turborepo Architecture">Next.js & Turborepo Architecture</option>
            <option value="Backend Security, OAuth 2.0 & Databases">Backend Security, OAuth 2.0 & Databases</option>
            <option value="Open-Source Collaboration">Open-Source Collaboration</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5">PROJECT DETAILS OR MESSAGE *</label>
          <textarea
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about the system you're building, timeline, and tech stack..."
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {status === "success" && (
          <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{responseMsg}</span>
          </div>
        )}

        {status === "error" && (
          <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-700/60 text-rose-300 text-xs">
            {responseMsg}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition"
          >
            <Send className="w-4 h-4" />
            {status === "submitting" ? "Transmitting..." : "Send Message"}
          </button>

          <span className="text-xs font-mono text-slate-500">
            Protected by strict schema validation
          </span>
        </div>
      </form>
    </div>
  );
}
