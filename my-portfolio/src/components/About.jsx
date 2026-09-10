import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa6";
import { profile, skillGroups } from "../data/content";

const socials = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Dribbble", href: profile.dribbble, icon: FaDribbble },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 border-t border-line">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 md:gap-16">
        <div>
          {/* Ganti div ini dengan <img src="/foto-kamu.jpg" /> */}
          <div className="aspect-3/4 rounded-lg bg-surface border border-line flex items-center justify-center mb-6">
            <span className="text-muted text-sm">Foto profil</span>
          </div>
          <p className="text-sm text-muted">{profile.availability}</p>
          {/* Social links — ikon persegi minimal, konsisten sama gaya border-line di section lain */}
          <div className="flex items-center gap-3 mt-2 mb-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
            Tentang saya
          </h2>

          {profile.bio.map((para) => (
            <p key={para} className="text-base text-ink/90 leading-relaxed max-w-xl mb-4">
              {para}
            </p>
          ))}

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm text-accent mb-3">{group.category}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}