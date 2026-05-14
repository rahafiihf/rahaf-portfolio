import { useState } from "react";
import { Mail, Phone, Linkedin, ArrowRight, Languages, Shield, Code2, Lock, Cpu, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { journey, skills, projects, pick, type Project } from "@/lib/portfolio-data";
import { Typing } from "./Typing";
import { Reveal } from "./Reveal";
import { ProjectModal } from "./ProjectModal";

export function Portfolio() {
  const { t, lang, toggle, dir } = useI18n();
  const [active, setActive] = useState<Project | null>(null);

  const navItems = [
    { id: "journey", label: t("nav_journey") },
    { id: "about", label: t("nav_about") },
    { id: "skills", label: t("nav_skills") },
    { id: "projects", label: t("nav_projects") },
    { id: "contact", label: t("nav_contact") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" dir={dir}>
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg tracking-wide text-gold-gradient">
            {lang === "en" ? "R . H . A" : "ر . ح . ش"}
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {t("switch_lang")}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative isolate overflow-hidden bg-hero grain pt-40 pb-32 sm:pt-48 sm:pb-44"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              {lang === "en" ? "A story in chapters" : "قصة في فصول"}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl leading-[1.05] sm:text-7xl">
              <span className="text-gold-gradient">{t("hero_name")}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">{t("hero_title")}</p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-4 text-base italic text-foreground/80 sm:text-lg">
              {t("hero_tagline")}
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 min-h-[2.5rem] text-2xl sm:text-3xl">
              <Typing phrases={[t("typing_1"), t("typing_2"), t("typing_3")]} />
            </div>
          </Reveal>
          <Reveal delay={600}>
            <a
              href="#journey"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90"
            >
              {t("hero_cta")}
              <ArrowRight size={16} className={dir === "rtl" ? "rotate-180" : ""} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-gradient">
              {lang === "en" ? "Timeline" : "الخط الزمني"}
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{t("journey_title")}</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{t("journey_sub")}</p>
          </Reveal>

          <div className="relative mt-16">
            {/* Center line */}
            <div className="absolute inset-y-0 start-4 w-px timeline-line md:start-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {journey.map((entry, idx) => {
                const left = idx % 2 === 0;
                return (
                  <Reveal key={entry.year} delay={idx * 80}>
                    <div
                      className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                        left ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute start-4 top-2 z-10 -translate-x-1/2 md:start-1/2">
                        <div className="h-4 w-4 rounded-full bg-gold-gradient shadow-gold ring-4 ring-background" />
                      </div>

                      <div
                        className={`ps-12 md:ps-0 ${
                          left ? "md:text-end md:pe-12" : "md:ps-12"
                        }`}
                      >
                        <p className="font-display text-5xl text-gold-gradient">{entry.year}</p>
                      </div>
                      <div
                        className={`ps-12 md:ps-0 ${
                          left ? "md:ps-12" : "md:text-end md:pe-12"
                        }`}
                      >
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant transition hover:border-primary/50">
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            {t("chapter")} {String(idx + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-2 text-2xl">{pick(entry.title, lang)}</h3>
                          <p className="mt-3 text-muted-foreground">{pick(entry.body, lang)}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative bg-card/30 px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-gradient">
              {lang === "en" ? "Who I am" : "من أنا"}
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{t("about_title")}</h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-3">
            <p className="text-lg leading-relaxed text-foreground/90">{t("about_body")}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, label: lang === "en" ? "Programmer" : "مبرمجة" },
                { icon: Shield, label: lang === "en" ? "Cybersecurity Student" : "طالبة أمن سيبراني" },
                { icon: Cpu, label: lang === "en" ? "Curious Builder" : "صانعة فضولية" },
                { icon: Lock, label: lang === "en" ? "Privacy First" : "الخصوصية أولاً" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3"
                >
                  <Icon size={18} className="text-primary" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-gradient">
              {lang === "en" ? "Toolbox" : "صندوق الأدوات"}
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{t("skills_title")}</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{t("skills_sub")}</p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-sm text-gold-gradient">{s.level}%</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gold-gradient transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative bg-card/30 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-gradient">
              {lang === "en" ? "Selected" : "مختارة"}
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{t("projects_title")}</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{t("projects_sub")}</p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-elegant transition hover:-translate-y-1 hover:border-primary/60">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-primary-foreground shadow-gold">
                    {p.id === "portfolio" && <Globe size={20} />}
                    {p.id === "awareness" && <Shield size={20} />}
                    {p.id === "tool" && <Lock size={20} />}
                  </div>
                  <h3 className="text-2xl">{pick(p.title, lang)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pick(p.short, lang)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tools.map((tl) => (
                      <span
                        key={tl}
                        className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {tl}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActive(p)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
                  >
                    {t("view_project")}
                    <ArrowRight size={14} className={dir === "rtl" ? "rotate-180" : ""} />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-gradient">
              {lang === "en" ? "Final chapter — for now" : "الفصل الأخير — حتى الآن"}
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{t("contact_title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("contact_sub")}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <ContactCard
                icon={Mail}
                label={t("email_label")}
                value="ruiiihf@gmail.com"
                href="mailto:ruiiihf@gmail.com"
              />
              <ContactCard
                icon={Phone}
                label={t("phone_label")}
                value="0501780242"
                href="tel:+966501780242"
              />
              <ContactCard
                icon={Linkedin}
                label={t("linkedin_label")}
                value="rahaf-alshaibani"
                href="https://www.linkedin.com/in/rahaf-alshaibani-bb3001329"
                external
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/50 px-6 py-10 text-center text-xs text-muted-foreground">
        <p>{t("footer")}</p>
      </footer>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold transition group-hover:scale-110">
        <Icon size={18} />
      </span>
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </a>
  );
}
