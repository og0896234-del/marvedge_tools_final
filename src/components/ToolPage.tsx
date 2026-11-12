import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Lock } from "lucide-react";
import { getTool, MARVEDGE_URL, type Tool } from "@/lib/tools";
import { ToolAnimation } from "./ToolAnimation";
import { ToolWorkspace } from "./tools/registry";
import { ToolFaqSection } from "./ToolFaq";

export function ToolPage({ tool }: { tool: Tool }) {
  return (
    <div className="min-h-screen bg-[#E8DFCA] text-[#000000] transition-colors duration-300">
      {/* ========================================================================
          HERO & PRIMARY TOOL WORKSPACE (TOP OF EVERY TOOL PAGE)
          ======================================================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8">
        {/* Title & Editorial Lead */}
        <div className="mb-8 animate-fade-up">
          <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#000000] sm:text-5xl md:text-6xl">
            {tool.name}{" "}
            <span className="italic text-[#7895B2]">
              ({tool.headline[1].toLowerCase()})
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#2D2A26] sm:text-lg">
            {tool.story[0]} {tool.story[1]}
          </p>
        </div>

        {/* PRIMARY ACTIVE TOOL WORKSPACE (IMMEDIATELY ACCESSIBLE AT TOP) */}
        <div className="rounded-3xl border border-[#D6CCB5] bg-[#FFFFFF] p-6 shadow-sm sm:p-8">
          <ToolWorkspace slug={tool.slug} />
        </div>
      </section>

      {/* ========================================================================
          VISUAL ARCHITECTURE & INTERACTIVE DEMONSTRATION
          ======================================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#D6CCB5] bg-[#FFFFFF] p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
          <ToolAnimation slug={tool.slug} />

          <div className="mt-6 flex flex-wrap gap-2 border-t border-[#E8DFCA] pt-4 text-xs font-medium text-black/70">
            {tool.features.map((feat) => (
              <span
                key={feat}
                className="rounded-full border border-[#D6CCB5] bg-[#FAF7F0] px-3.5 py-1 text-black/80 shadow-xs"
              >
                ✓ {feat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
          MINIMAL FREQUENTLY ASKED QUESTIONS
          ======================================================================== */}
      <ToolFaqSection slug={tool.slug} toolName={tool.name} />

      {/* ========================================================================
          CONVERSION BANNER & RELATED TOOLS
          ======================================================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8">
        <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-[#000000] p-8 text-[#FFFFFF] shadow-2xl md:flex-row md:items-center md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#AEBDCA]">
              {tool.story[2]}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-[#FFFFFF] sm:text-4xl">
              Want to enjoy the full potential?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#AEBDCA] sm:text-base">
              Turn your product into interactive demos that sell, onboard and explain — with Marvedge.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={MARVEDGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-5 py-3 text-xs font-semibold text-[#000000] shadow-md transition-all hover:bg-[#E8DFCA] active:scale-[0.98]"
            >
              Explore Marvedge <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={MARVEDGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-3 text-xs font-semibold text-[#FFFFFF] transition-colors hover:bg-white/10 active:scale-[0.98]"
            >
              <Lock className="h-3.5 w-3.5 text-[#AEBDCA]" /> Log in
            </a>
          </div>
        </div>

        {/* Related Tools Navigator */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold text-black/60">Related tools:</span>
          {tool.related.map((slug) => {
            const r = getTool(slug);
            return (
              <Link
                key={slug}
                to="/$slug"
                params={{ slug }}
                className="rounded-full border border-[#D6CCB5] bg-[#FFFFFF] px-3.5 py-1.5 font-medium text-black transition-colors hover:border-[#7895B2] hover:bg-[#E8DFCA]/40"
              >
                {r.name} →
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
