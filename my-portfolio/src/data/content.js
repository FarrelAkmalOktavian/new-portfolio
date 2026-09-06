// ────────────────────────────────────────────────────────────────
// Ganti semua isi di file ini dengan data asli kamu.
// Komponen di /components tidak perlu diubah kalau cuma ganti teks/gambar di sini.
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: "Farrel Akmal Oktavian",
  role: "Product & UI/UX Designer",
  // Kalimat pembuka di Hero — satu hook yang gampang diingat, bukan slogan generik.
  heroLines: [
    "Merancang pengalaman digital",
    "dari layar ke rasa.",
  ],
  heroSubtext:
    "UI/UX designer yang juga menulis kode — sedikit web, sedikit mobile, sedikit game — supaya setiap desain yang saya buat memang bisa dibangun.",
  bio: [
    "Saya mulai dari rasa penasaran soal kenapa satu aplikasi terasa enak dipakai dan yang lain bikin frustrasi. Dari situ saya belajar desain, lalu belajar membangunnya sendiri — supaya keputusan desain saya nggak berhenti di mockup.",
    "Fokus utama saya UI/UX, tapi saya senang keluar-masuk web, mobile, dan game development kalau itu bikin saya lebih paham masalah yang sedang saya rancang solusinya.",
  ],
  location: "Surakarta, Indonesia",
  availability: "Terbuka untuk peran full-time & proyek freelance",
  email: "hello@farrelakmal.dev", // EDIT ME
  linkedin: "https://www.linkedin.com/in/farrelakmal", // EDIT ME
  github: "https://github.com/farrelakmal", // EDIT ME
  resumeFile: "/resume.pdf", // taruh file PDF asli di folder /public
  responseTime: "Biasanya balas dalam 2 hari kerja.",
};

// Urutan array = urutan tab. "UI/UX" sengaja pertama sesuai positioning di PRD.
export const disciplines = ["UI/UX", "Web Dev", "Mobile Dev", "Game Dev"];

export const caseStudies = [
  {
    id: "case-01",
    title: "Redesain alur checkout — [Nama Produk]", // EDIT ME
    discipline: "UI/UX",
    year: "2026",
    role: "Lead Product Designer",
    summary:
      "Alur checkout lama kehilangan hampir sepertiga pengguna sebelum pembayaran selesai. Saya memetakan ulang alurnya lewat riset, lalu menyederhanakan dari 5 langkah jadi 2.",
    outcome: "Tulis dampak/metrik nyata di sini kalau ada.", // EDIT ME
    link: "#", // arahkan ke halaman studi kasus lengkap
    imageAlt: "Tangkapan layar alur checkout sebelum dan sesudah redesain",
  },
  {
    id: "case-02",
    title: "Design system untuk tim internal", // EDIT ME
    discipline: "UI/UX",
    year: "2025",
    role: "Design System Owner",
    summary:
      "Tiga tim produk membangun komponen UI masing-masing secara terpisah. Saya menyatukan pola yang berulang jadi satu design system yang dipakai lintas tim.",
    outcome: "Tulis dampak/metrik nyata di sini kalau ada.",
    link: "#",
    imageAlt: "Contoh komponen dari design system",
  },
  {
    id: "case-03",
    title: "Aplikasi pelacak kebiasaan — proyek pribadi", // EDIT ME
    discipline: "Mobile Dev",
    year: "2025",
    role: "Designer & Developer",
    summary:
      "Belajar React Native sambil merancang aplikasi yang benar-benar saya pakai sendiri tiap hari — dari wireframe sampai rilis ke TestFlight.",
    outcome: "Tulis dampak/metrik nyata di sini kalau ada.",
    link: "#",
    imageAlt: "Tampilan layar aplikasi pelacak kebiasaan",
  },
  {
    id: "case-04",
    title: "Website portofolio studio kecil", // EDIT ME
    discipline: "Web Dev",
    year: "2024",
    role: "Designer & Front-End Developer",
    summary:
      "Klien butuh situs yang terasa seperti karya desain itu sendiri, bukan template. Dibangun dari nol dengan React dan animasi seperlunya.",
    outcome: "Tulis dampak/metrik nyata di sini kalau ada.",
    link: "#",
    imageAlt: "Tampilan beranda website studio",
  },
  {
    id: "case-05",
    title: "Game puzzle 2D — proyek kuliah/hobi", // EDIT ME
    discipline: "Game Dev",
    year: "2024",
    role: "Game & UI Designer",
    summary:
      "Merancang mekanik puzzle sekaligus UI menu dan HUD-nya — latihan mikir sistem interaksi di luar layar aplikasi biasa.",
    outcome: "Tulis dampak/metrik nyata di sini kalau ada.",
    link: "#",
    imageAlt: "Cuplikan gameplay dan menu game puzzle",
  },
];

export const skillGroups = [
  {
    category: "Design",
    items: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing"],
  },
  {
    category: "Front-End",
    items: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Mobile UI Patterns"],
  },
  {
    category: "Game Dev",
    items: ["Unity", "Game UI/UX"],
  },
];

export const navLinks = [
  { label: "Karya", href: "#work" },
  { label: "Tentang", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Kontak", href: "#contact" },
];