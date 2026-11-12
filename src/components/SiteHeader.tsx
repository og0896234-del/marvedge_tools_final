import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, Wrench, Sparkles } from "lucide-react";
import { tools, MARVEDGE_URL } from "@/lib/tools";

function ToolDropdownContent({ onPick }: { onPick?: () => void }) {
  const utilities = tools.filter((t) => t.category === "Free utility");
  const aiTools = tools.filter((t) => t.category === "AI tool");

  return (
    <div className="grid gap-6 p-6 md:grid-cols-2">
      <div>
        <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-black/60">
          <Wrench className="h-3.5 w-3.5 text-[#7895B2]" />
          <span>Free Utilities ({utilities.length})</span>
        </div>
        <div className="space-y-1">
          {utilities.map((t) => (
            <Link
              key={t.slug}
              to="/$slug"
              params={{ slug: t.slug }}
              onClick={onPick}
              className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-black/80 transition-all duration-150 hover:bg-[#E8DFCA]/60 hover:text-black"
            >
              <span className="font-medium">{t.name}</span>
              <span className="text-[11px] text-black/40 group-hover:text-black/70">Local</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-black/60">
          <Sparkles className="h-3.5 w-3.5 text-[#7895B2]" />
          <span>AI Media & Voice ({aiTools.length})</span>
        </div>
        <div className="space-y-1">
          {aiTools.map((t) => (
            <Link
              key={t.slug}
              to="/$slug"
              params={{ slug: t.slug }}
              onClick={onPick}
              className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-black/80 transition-all duration-150 hover:bg-[#E8DFCA]/60 hover:text-black"
            >
              <span className="font-medium">{t.name}</span>
              <span className="text-[11px] text-[#7895B2] font-medium">AI Model</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D6CCB5]/80 bg-[#E8DFCA]/90 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Monogram & Title */}
        <Link to="/" className="flex items-center gap-2.5 transition-transform active:scale-[0.98]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF] shadow-sm">
            M
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[16px] font-bold tracking-tight text-[#000000]">Marvedge</span>
            <span className="rounded-md bg-[#D6CCB5]/60 px-1.5 py-0.5 text-[11px] font-medium text-[#000000]/70">
              Tools
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[#000000]/70 transition-colors hover:text-[#000000]"
            activeProps={{ className: "text-[#000000] bg-[#D6CCB5]/50 font-semibold" }}
          >
            Overview
          </Link>

          {/* All Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-[#000000]/80 transition-colors hover:bg-[#D6CCB5]/40 hover:text-[#000000]"
            >
              <span>19 Tools</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-black/60 transition-transform duration-200 ${
                  open ? "rotate-180 text-black" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-2">
                <div className="overflow-hidden rounded-2xl border border-[#D6CCB5] bg-[#FFFFFF] shadow-2xl">
                  <ToolDropdownContent onPick={() => setOpen(false)} />
                  <div className="flex items-center justify-between border-t border-[#E8DFCA] bg-[#FAF7F0] px-6 py-3 text-xs text-black/70">
                    <span>Privacy First: All free tools run directly on your browser GPU.</span>
                    <a
                      href={MARVEDGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#7895B2] hover:text-black"
                    >
                      Visit Marvedge Platform <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href={MARVEDGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-[#000000]/70 transition-colors hover:text-[#000000]"
          >
            <span>Marvedge.com</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-black/40" />
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href={MARVEDGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs font-semibold text-black/75 transition-colors hover:text-black sm:inline-block"
          >
            Log in
          </a>

          <a
            href={MARVEDGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pure-black text-xs font-semibold tracking-wide"
          >
            Launch Marvedge
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobile((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D6CCB5] bg-transparent text-black transition-colors hover:bg-[#D6CCB5]/40 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-[#D6CCB5] bg-[#FFFFFF] px-5 py-6 shadow-2xl lg:hidden">
          <ToolDropdownContent onPick={() => setMobile(false)} />
          <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-[#E8DFCA]">
            <a
              href={MARVEDGE_URL}
              className="btn-warm-sand w-full text-center text-xs font-semibold"
            >
              Log in to Marvedge
            </a>
            <a
              href={MARVEDGE_URL}
              className="btn-pure-black w-full text-center text-xs font-semibold"
            >
              Get Full Product Experience
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
