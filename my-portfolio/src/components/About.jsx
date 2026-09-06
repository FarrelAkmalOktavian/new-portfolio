import { profile, skillGroups } from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 border-t border-line">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 md:gap-16">
        <div>
          <img src="images.jpg" alt="" />
          <div className="aspect-3/4 rounded-lg bg-surface border border-line flex items-center justify-center mb-6">
            <span className="text-muted text-sm">Foto profil</span>
          </div>
          <p className="text-sm text-muted">{profile.availability}</p>
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