import { profile, expertise, experiences, projects } from "@/lib/site-content";
import { Button } from "@/components/ui/button";

const sectionTitleClass =
  "text-sm font-semibold uppercase tracking-[0.2em] text-token-secondary";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="bg-ornaments" aria-hidden />
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-20 px-6 py-16 md:py-20">
        <section className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-token bg-token-panel p-8 md:p-12">
          <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-token-accent/50 blur-3xl" />
          <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <p className="text-xs uppercase tracking-[0.28em] text-token-secondary">
            {profile.location} - Seçili projeler için uygun
          </p>
          <h1 className="hero-title max-w-5xl text-4xl font-bold leading-tight md:text-7xl">
            {profile.name}
            <span className="block text-token-muted">{profile.title}</span>
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-token-secondary">
            {profile.shortBio}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#projects">Projeleri İncele</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              İletişime Geç
            </Button>
          </div>
        </section>

        <section className="ticker-wrap" aria-label="Teknoloji bandı">
          <div className="ticker-track">
            {[...expertise, ...expertise, ...expertise].map((item, idx) => (
              <span key={`${item}-${idx}`} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-4">
            <h2 className={sectionTitleClass}>Hakkımda</h2>
          </div>
          <div className="card card-tilt md:col-span-8">
            <p className="text-base leading-8 text-token-secondary">
              Frontend tarafında ürün kalitesini sadece arayüzde değil, render
              stratejisi, bileşen mimarisi ve performans kararlarında da ele
              alıyorum. Hedefim, ilk bakışta güven veren, hızlı ve
              sürdürülebilir ürünler ortaya çıkarmak.
            </p>
          </div>
        </section>
        <section id="projects" className="grid gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-4">
            <h2 className={sectionTitleClass}>Projeler</h2>
          </div>
          <div className="project-grid md:col-span-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="card card-tilt group flex flex-col gap-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm leading-7 text-token-secondary">
                    {project.summary}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-token transition duration-300 group-hover:translate-x-1 group-hover:text-token-accent"
                >
                  Detayları Gör
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-4">
            <h2 className={sectionTitleClass}>Deneyim</h2>
          </div>
          <div className="grid gap-4 md:col-span-8">
            {experiences.map((experience) => (
              <article key={experience.role} className="card card-tilt flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{experience.role}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-token-muted">
                    {experience.period}
                  </p>
                </div>
                <p className="text-sm font-medium text-token-secondary">
                  {experience.company}
                </p>
                <p className="text-sm leading-7 text-token-secondary">
                  {experience.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Birlikte Çalışalım</h2>
            <p className="text-sm text-token-secondary">
              Yeni bir ürün, redesign veya performans odaklı frontend desteği
              için ulaşabilirsin.
            </p>
          </div>
          <Button href={`mailto:${profile.email}`}>
            {profile.email}
          </Button>
        </section>
      </div>
    </main>
  );
}
