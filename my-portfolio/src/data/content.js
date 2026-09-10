// ────────────────────────────────────────────────────────────────
// Ganti semua isi di file ini dengan data asli kamu.
// Komponen di /components tidak perlu diubah kalau cuma ganti teks/gambar di sini.
// ────────────────────────────────────────────────────────────────
 
// Import gambar studi kasus dari src/assets/ — tambahkan satu baris import
// per gambar baru di sini, lalu pakai variabelnya di properti "image" di bawah.
import isyaraImage from "../assets/isyara.png";
import gameDevImage from "../assets/gamedev.png";
import medicoImage from "../assets/medico.png";
import placeholder from "../assets/images.jpg";

export const profile = {
  name: "Farrel Akmal Oktavian",
  role: "Programmer & UI/UX Designer",
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
  location: "Semarang, Indonesia",
  availability: "Terbuka untuk peran full-time & proyek freelance",
  email: "farrelakmal5772@gmail.com",
  linkedin: "https://www.linkedin.com/in/farrelakmal",
  github: "https://github.com/farrelakmal",
  resumeFile: "/resume.pdf",
  responseTime: "Biasanya balas dalam 2 hari kerja.",
  dribbble: "https://dribbble.com/farrelakmal",
};

// Urutan array = urutan tab. "UI/UX" sengaja pertama sesuai positioning di PRD.
export const disciplines = ["UI/UX", "Web Dev", "Mobile Dev", "Game Dev"];

export const caseStudies = [
  {
    id: "case-01",
    title: "Aplikasi Penerjemah Bahasa Isyarat — Isyara",
    discipline: "Mobile Dev",
    year: "2024",
    role: "UI Designer/Mobile Dev",
    summary:
      "Isyara merupakan aplikasi penerjemah bahasa isyarat real-time, dengan berbagai fitur lain seperti kamus, quiz latihan, dan informasi seputar Bahasa Isyarat Indonesia. Dibuat sebagai final project program Studi Independen Bangkit Academy 2024.",
    outcome: "Android Studio - Kotlin, Figma",
    link: "https://github.com/Isyara-App/MobileDevelopment",
    image: isyaraImage,
    imageAlt: "Tampilan aplikasi Isyara",
  },
  {
    id: "case-02",
    title: "Dukun StartUp: Shamanic Tycoon",
    discipline: "Game Dev",
    year: "2024",
    role: "Programmer/Game artist",
    summary:
      "Game yang dikembangkan untuk kompetisi Game Jam yang diadakan oleh DTS TSA dan Komdigi, mencapai peringkat Top 20 pada kompetisi game tersebut.",
    outcome: "Unity - C#, Aseprite",
    link: "https://youtu.be/hzSi6xsUV_0?si=zY0rPsrgvuuebxko",
    image: gameDevImage,
    imageAlt: "Screenshoot gameplay",
  },
  {
    id: "case-03",
    title: "UI Aplikasi Kesehatan - Medico",
    discipline: "UI/UX",
    year: "2025",
    role: "Designer",
    summary:
      "Desain tampilan untuk aplikasi layanan kesehatan di mobile dan juga web.",
    link: "https://www.figma.com/design/D9BCwOJrtNeHpaL17mEmx1/Medical-Healthcare?node-id=0-1&t=Y1d6vZCQQCetZ1tf-1",
    image: medicoImage,
    imageAlt: "Overview tampilan desain",
  },
  {
    id: "case-04",
    title: "E-Commerce Fake Review Detection",
    discipline: "Web Dev",
    year: "2026",
    role: "Programmer",
    summary:
      "Dibuat sebagai project tugas akhir skripsi, digunakan untuk mendeteksi ulasan palsu berbasis teks yang dibuat oleh AI (AI Generated)",
    outcome: "Python",
    link: "https://github.com/FarrelAkmalOktavian/Fake-Review-Detection",
    image: placeholder,
    imageAlt: "Tampilan aplikasi web",
  },
  {
    id: "case-05",
    title: "Landing Page Golf Academy",
    discipline: "UI/UX",
    year: "2025",
    role: "Designer",
    summary:
      "Desain web landing page profesional dan modern untuk golf academy",
    outcome: "Tulis dampak/metrik nyata di sini kalau ada.",
    link: "https://dribbble.com/shots/27667764-Golfdemy-Golf-Academy-Landing-Page",
    image: placeholder,
    imageAlt: "Cover dribbble desain",
  },
  {
    id: "case-06",
    title: "Crypto Dashboard",
    discipline: "UI/UX",
    year: "2025",
    role: "Designer",
    summary:
      "Desain dashboard untuk pengelolaan crypto",
    outcome: "Tulis dampak/metrik nyata di sini kalau ada.",
    link: "https://dribbble.com/shots/26220032-Fripto-Crypto-Management-Dashboard",
    image: placeholder,
    imageAlt: "Cover dribbble desain",
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
    items: ["Android Studio", "Kotlin"],
  },
  {
    category: "Game Dev",
    items: ["Unity", "Game UI/UX", "C#"],
  },
];

export const navLinks = [
  { label: "Karya", href: "#work" },
  { label: "Tentang", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Kontak", href: "#contact" },
];

// Urutan: yang paling baru/terkini di atas.
export const experience = [
  {
    id: "exp-01",
    role: "Jabatan kamu", // EDIT ME
    org: "Nama perusahaan / klien / organisasi", // EDIT ME
    period: "Jan 2025 — Sekarang", // EDIT ME
    description: "Satu-dua kalimat soal tanggung jawab atau pencapaian di posisi ini.", // EDIT ME
  },
  {
    id: "exp-02",
    role: "Jabatan sebelumnya",
    org: "Nama perusahaan / klien / organisasi",
    period: "Jun 2023 — Des 2024",
    description: "Satu-dua kalimat soal tanggung jawab atau pencapaian di posisi ini.",
  },
];
 
export const education = [
  {
    id: "edu-01",
    degree: "Jenjang & jurusan", // EDIT ME, mis. "S1 Desain Komunikasi Visual"
    institution: "Nama sekolah/kampus", // EDIT ME
    period: "2022 — 2026", // EDIT ME
    description: "Opsional — fokus studi, organisasi, atau pencapaian relevan.",
  },
];