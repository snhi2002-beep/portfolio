"use client";

import React, { useState } from "react";
import { ShieldCheck, Database, Radio, ArrowRight, FileCode } from "lucide-react";
import { ARCHITECTURE_BLUEPRINTS } from "@/data/portfolio";

export default function ArchitectureViewer() {
  const [activeId, setActiveId] = useState<string>(ARCHITECTURE_BLUEPRINTS[0].id);

  const activeBlueprint =
    ARCHITECTURE_BLUEPRINTS.find((b) => b.id === activeId) || ARCHITECTURE_BLUEPRINTS[0];

  const getIcon = (id: string) => {
    if (id === "auth-security") return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    if (id === "db-caching") return <Database className="w-4 h-4 text-indigo-400" />;
    return <Radio className="w-4 h-4 text-amber-400" />;
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Blueprint Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {ARCHITECTURE_BLUEPRINTS.map((bp) => {
          const isSelected = bp.id === activeId;
          return (
            <button
              key={bp.id}
              onClick={() => setActiveId(bp.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? "bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/10"
                  : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                {getIcon(bp.id)}
                <span>SYSTEM BLUEPRINT</span>
              </div>
              <p className="text-sm font-bold text-white mt-1.5">{bp.title}</p>
              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{bp.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Active Blueprint Content */}
      <div className="space-y-6 pt-2">
        <div className="border-b border-slate-800 pb-4">
          <h3 className="text-xl font-bold text-white">{activeBlueprint.title}</h3>
          <p className="text-sm text-slate-300 mt-1">{activeBlueprint.summary}</p>
        </div>

        {/* 4-Stage Pipeline Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeBlueprint.nodes.map((node, index) => (
            <div
              key={node.step}
              className="relative rounded-xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                    STAGE {node.step}
                  </span>
                  {index < activeBlueprint.nodes.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden lg:block" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mt-3">{node.layer}</h4>
                <p className="text-xs font-mono text-emerald-400 mt-0.5">{node.tech}</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{node.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reference Implementation Code */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
          <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-indigo-400" />
              {activeBlueprint.codeBlock.filename}
            </span>
            <span className="text-emerald-400">Production Pattern</span>
          </div>
          <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
            <code>{activeBlueprint.codeBlock.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
