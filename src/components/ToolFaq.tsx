import { useState } from "react";
import { Plus } from "lucide-react";
import { toolFaqs, type ToolFaq } from "@/lib/tool-faqs";

export function ToolFaqSection({ slug, toolName }: { slug: string; toolName: string }) {
  const faqs: ToolFaq[] = toolFaqs[slug] || [];
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  if (faqs.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      {/* Minimal Header */}
      <div className="mb-10 text-center sm:mb-14">
        <h2 className="font-serif text-3xl font-normal tracking-tight text-[#000000] sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm text-[#4A4740] sm:text-base">
          Questions and answers regarding {toolName}.
        </p>
      </div>

      {/* Minimal Apple-Style Accordion List */}
      <div className="divide-y divide-[#D6CCB5]/70 border-y border-[#D6CCB5]/70">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);

          return (
            <div key={faq.q} className="group">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer transition-colors"
              >
                <span className="text-base font-medium tracking-tight text-[#000000] transition-colors group-hover:text-[#7895B2] sm:text-lg">
                  {faq.q}
                </span>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D6CCB5] bg-transparent text-[#000000] transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-[#000000] text-[#FFFFFF] border-[#000000]"
                      : "group-hover:border-[#7895B2]"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>

              {/* Smooth Grid Accordion */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-6"
                    : "grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pr-12 text-sm leading-relaxed text-[#4A4740] sm:text-[15px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
