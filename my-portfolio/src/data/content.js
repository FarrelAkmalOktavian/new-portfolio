// ────────────────────────────────────────────────────────────────
// Ganti semua isi di file ini dengan data asli kamu.
// Komponen di /components tidak perlu diubah kalau cuma ganti teks/gambar di sini.
// ────────────────────────────────────────────────────────────────
 
// Import gambar studi kasus dari src/assets/ — tambahkan satu baris import
// per gambar baru di sini, lalu pakai variabelnya di properti "image" di bawah.
import isyaraImage from "../assets/isyara.png";
import gameDevImage from "../assets/gamedev.png";
import medicoImage from "../assets/medico.png";
import golfdemyImage from "../assets/golfdemy.png";
import friptoImage from "../assets/fripto.png";
import fakeImage from "../assets/fake.png";
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
    button: "Link Github Project",
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
    button: "Link Preview Project",
  },
  {
    id: "case-03",
    title: "UI Aplikasi Kesehatan - Medico",
    discipline: "UI/UX",
    year: "2025",
    role: "Designer",
    summary:
      "Desain tampilan untuk aplikasi layanan kesehatan di mobile dan juga web. Desain aplikasi dibuat simple, minimalist, dan juga tidak melupakan kenyamanan serta kemudahan pengguna dalam navigasi aplikasi ini",
    link: "https://www.figma.com/design/D9BCwOJrtNeHpaL17mEmx1/Medical-Healthcare?node-id=0-1&t=Y1d6vZCQQCetZ1tf-1",
    image: medicoImage,
    imageAlt: "Overview tampilan desain",
    button: "Link Figma Desain",
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
    image: fakeImage,
    imageAlt: "Tampilan aplikasi web",
    button: "Link Project",
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
    image: golfdemyImage,
    imageAlt: "Cover dribbble desain",
    button: "Link Preview Desain",
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
    image: friptoImage,
    imageAlt: "Cover dribbble desain",
    button: "Link Preview Desain",
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
    role: "Game Programmer & Game Artist", // EDIT ME
    org: "DTS TSA & KOMDIGI", // EDIT ME
    period: "Jul 2024 — Sep 2024", // EDIT ME
    description: "Kompetisi Pengembangan game - Top 20", // EDIT ME
  },{
    id: "exp-02",
    role: "Mobile Development Cohort", // EDIT ME
    org: "Bangkit Academy - Yayasan Dicoding Indonesia", // EDIT ME
    period: "Sep 2024 — Des 2024", // EDIT ME
    description: "Belajar tentang dasar-dasar tentang pemrograman sebuah aplikasi mobile sampai membuat aplikasi mobile yang memiliki fungsi nyata sebagai proyek akhir", // EDIT ME
  },
  {
    id: "exp-03",
    role: "UI/UX Designer",
    org: "PT Nifty Teknologi Edukasi",
    period: "Mar 2025 — Agu 2025",
    description: "Mempelajari cara membuat desain UI/UX yang baik, prototype yang menarik, dan juga memastikan desain yang buat sesuai dengan kebutuhan pengguna.",
  },
];
 
export const education = [
  {
    id: "edu-01",
    degree: "S1 Teknik Informatika", // EDIT ME, mis. "S1 Desain Komunikasi Visual"
    institution: "Universitas Negeri Semarang", // EDIT ME
    period: "2022 — 2026", // EDIT ME
    description: "IPK 3,81 - Mengkuti Organisasi Himpunan Mahasiswa - Skripsi berhubungan dengan Machine Learning",
  },
];