export default function CaseStudyCard({ study, reversed }) {
  return (
    <article
      className={`grid md:grid-cols-2 gap-8 md:gap-14 items-start py-12 border-b border-line ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Kalau study.image sudah diisi (lihat content.js), tampilkan gambar asli.
          Kalau belum, tetap tampil placeholder supaya layout tidak rusak. */}
      {study.image ? (
        <img
          src={study.image}
          alt={study.imageAlt}
          className="aspect-4/3 rounded-lg border border-line object-cover w-full"
        />
      ) : (
        <div
          className="aspect-4/3 rounded-lg bg-surface border border-line flex items-center justify-center"
          role="img"
          aria-label={study.imageAlt}
        >
          <span className="text-muted text-sm">Visual studi kasus</span>
        </div>
      )}

      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs rounded-full bg-accent text-background px-2.5 py-1 font-medium">
            {study.discipline}
          </span>
          <span className="text-xs text-muted">{study.year}</span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-ink leading-snug">
          {study.title}
        </h3>

        <p className="mt-2 text-sm text-muted">{study.role}</p>

        <p className="mt-4 text-base text-ink/90 leading-relaxed max-w-md">
          {study.summary}
        </p>

        <p className="mt-3 text-sm text-muted max-w-md">{study.outcome}</p>

        <a
          href={study.link}
          className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
        >
          {study.button}
        </a>
      </div>
    </article>
  );
}