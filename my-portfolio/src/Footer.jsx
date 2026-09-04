import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-line">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="hover:text-ink transition-colors">
          Kembali ke atas
        </a>
      </div>
    </footer>
  );
}