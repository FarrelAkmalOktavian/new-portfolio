import { profile, experience, education } from "../data/content";

export default function Resume() {
  return (
    <section id="resume" className="px-6 md:px-10 py-24 border-t border-line">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
              Resume
            </h2>
            <p className="text-muted max-w-md">
              Ringkasan pengalaman dan skill saya dalam satu halaman. Isi lengkapnya
              selalu sama dengan yang ada di situs ini.
            </p>
          </div>

          <a
            href={profile.resumeFile}
            download
            className="shrink-0 inline-flex items-center rounded-full bg-accent text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Unduh PDF
          </a>
        </div>

        {/* Timeline pengalaman & pendidikan — datanya diambil dari content.js,
            tinggal edit array `experience` dan `education` di sana */}
        <div className="mt-14 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm text-accent mb-6">Pengalaman</h3>
            <div className="space-y-8">
              {experience.map((item) => (
                <div key={item.id} className="border-l border-line pl-5">
                  <p className="text-xs text-muted mb-1">{item.period}</p>
                  <p className="text-ink font-medium">{item.role}</p>
                  <p className="text-sm text-muted mb-2">{item.org}</p>
                  {item.description && (
                    <p className="text-sm text-ink/80 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-accent mb-6">Pendidikan</h3>
            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.id} className="border-l border-line pl-5">
                  <p className="text-xs text-muted mb-1">{item.period}</p>
                  <p className="text-ink font-medium">{item.degree}</p>
                  <p className="text-sm text-muted mb-2">{item.institution}</p>
                  {item.description && (
                    <p className="text-sm text-ink/80 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}