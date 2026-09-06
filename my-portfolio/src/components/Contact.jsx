import { useState } from "react";
import { profile } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: sambungkan ke layanan form beneran (mis. Formspree, Resend, atau backend sendiri).
    // Untuk sekarang form ini cuma menampilkan status "terkirim" secara lokal.
    setStatus("sent");
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-24 border-t border-line">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            Ngobrol dulu, yuk
          </h2>
          <p className="text-muted max-w-sm mb-8">{profile.responseTime}</p>

          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-ink hover:text-accent transition-colors"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-ink hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-ink hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-muted mb-1.5">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-surface border border-line px-4 py-2.5 text-ink placeholder:text-muted focus:border-accent outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-surface border border-line px-4 py-2.5 text-ink placeholder:text-muted focus:border-accent outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted mb-1.5">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md bg-surface border border-line px-4 py-2.5 text-ink placeholder:text-muted focus:border-accent outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-accent text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Kirim pesan
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent" role="status">
              Terima kasih! Pesan kamu tercatat — saya belum menyambungkan form ini
              ke email sungguhan, jadi jangan lupa setup itu dulu.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}