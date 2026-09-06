import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg text-ink hover:text-accent transition-colors"
        >
          {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent transition-colors"
        >
          Hubungi saya
        </a>

        {/* Nav mobile sederhana: link Kontak saja, cukup untuk layar kecil */}
        <a
          href="#contact"
          className="sm:hidden text-sm text-ink border border-line rounded-full px-3 py-1.5"
        >
          Kontak
        </a>
      </nav>
    </header>
  );
}