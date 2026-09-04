import { profile } from "../data/content";

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

        {/* Ringkasan singkat on-page — opsional, boleh diperluas jadi timeline pengalaman */}
        <div className="mt-12 rounded-lg border border-line bg-surface p-8">
          <p className="font-display text-xl text-ink mb-2">{profile.name}</p>
          <p className="text-muted mb-6">{profile.role}</p>
          <p className="text-sm text-muted">
            Tambahkan ringkasan pengalaman kerja / pendidikan singkat di sini,
            atau hapus kotak ini kalau resume PDF sudah cukup.
          </p>
        </div>
      </div>
    </section>
  );
}