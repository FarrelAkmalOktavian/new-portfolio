import { profile } from "../data/content";
//import LanyardResponsive from "./LanyardResponsive";
import Lanyard from "./Lanyard";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16"
    >
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
      <div className="max-w-2xl w-full">
        <p
          className="animate-rise text-sm text-muted mb-6"
          style={{ animationDelay: "0.05s" }}
        >
          {profile.role} · {profile.location}
        </p>

        <h1 className="font-display text-ink text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05]">
          {profile.heroLines.map((line, i) => (
            <span
              key={line}
              className="block animate-rise"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          className="animate-rise mt-8 max-w-xl text-lg text-muted leading-relaxed"
          style={{ animationDelay: "0.45s" }}
        >
          {profile.heroSubtext}
        </p>

        <div
          className="animate-rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-accent text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Lihat karya
          </a>
          <a
            href={profile.resumeFile}
            className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Unduh resume
          </a>
        </div>
      </div>

      <div className="flex justify-center scale-90 md:scale-100">
        <Lanyard/>
      </div>
      </div>
    </section>
  );
}