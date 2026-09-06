import { useState } from "react";
import { caseStudies, disciplines } from "../data/content";
import CaseStudyCard from "./Casestudycard";

export default function Work() {
  const [active, setActive] = useState("Semua");
  const tabs = ["Semua", ...disciplines];

  const filtered =
    active === "Semua"
      ? caseStudies
      : caseStudies.filter((s) => s.discipline === active);

  return (
    <section id="work" className="px-6 md:px-10 py-24 border-t border-line">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Karya pilihan
          </h2>

          <div
            role="tablist"
            aria-label="Filter berdasarkan disiplin"
            className="flex flex-wrap gap-1 border border-line rounded-full p-1 w-fit"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
                  active === tab
                    ? "bg-accent text-background"
                    : "text-muted hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted py-12">Belum ada karya untuk kategori ini.</p>
        ) : (
          <div>
            {filtered.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} reversed={i % 2 === 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}