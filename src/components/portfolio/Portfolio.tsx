import { Mail, Phone, Linkedin, Languages, Shield, Code, ChevronDown, Sparkles, BookOpen, CodeXml, User, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { journey, skills, projects, pick } from "@/lib/portfolio-data";
import { Typing } from "./Typing";
import { Reveal, RevealBar } from "./Reveal";

const journeyIcons = {
  sparkles: Sparkles,
  book: BookOpen,
  code: CodeXml,
  shield: Shield,
};

export function Portfolio() {
  const { t, lang, toggle, dir } = useI18n();

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
      <header className="fixed inset-x-0 top-0 z-40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <nav className="flex items-center gap-7 text-sm">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-muted-foreground transition hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            <Languages size={14} className="text-primary" />
            {t("switch_lang")}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Shield className="absolute left-[15%] top-20 h-20 w-20 text-primary opacity-10 animate-float" />
          <Code className="absolute bottom-32 right-[20%] h-16 w-16 text-accent opacity-10 animate-float" style={{ animationDelay: "1s" }} />
          <CodeXml className="absolute bottom-20 right-10 h-24 w-24 text-primary opacity-10" />
          <div className="absolute inset-0 grid-bg" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <Reveal>
            <p className="mb-6 font-body text-sm uppercase tracking-[0.3em] text-primary">
              {t("hero_eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              <span className="text-gradient-gold">{t("hero_name")}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">{t("hero_title")}</p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mb-12 min-h-[2rem]">
              <span className="typing-cursor text-lg text-foreground/70">
                <Typing phrases={[t("hero_tagline")]} />
              </span>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <a href="#journey" aria-label="Scroll down" className="inline-block animate-float">
              <ChevronDown className="mx-auto h-8 w-8 text-primary" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="section-heading">
              <span className="text-gradient-gold">{t("journey_title")}</span>
            </h2>
          </Reveal>

          <div className="relative">
            <div className="timeline-line hidden md:block" />
            <div className="space-y-16 md:space-y-24">
              {journey.map((entry, idx) => {
                const left = idx % 2 === 0;
                const Icon = journeyIcons[entry.icon];
                return (
                  <Reveal key={entry.year} delay={idx * 80}>
                    <div className="relative">
                      <div className="timeline-dot top-8 hidden md:block animate-glow-pulse" />
                      <div className={`md:w-[45%] ${left ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                        <div className="cyber-border card-hover rounded-lg bg-card p-6">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-body text-lg font-bold text-primary">{entry.year}</span>
                          </div>
                          <h3 className="mb-3 text-xl font-bold text-foreground">{pick(entry.title, lang)}</h3>
                          <p className="leading-relaxed text-muted-foreground">{pick(entry.body, lang)}</p>
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
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="section-heading">
              <span className="text-gradient-gold">{t("about_title")}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="cyber-border card-hover relative rounded-lg bg-card p-8 md:p-12">
              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-gold">
                <User className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="mt-4 text-center text-lg leading-relaxed text-foreground/80">
                {t("about_body")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="section-heading">
              <span className="text-gradient-gold">{t("skills_title")}</span>
            </h2>
          </Reveal>
          <div className="space-y-6">
            {skills.map((s, i) => (
              <Reveal key={s.name.en} delay={i * 80}>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium text-foreground">{pick(s.name, lang)}</span>
                    <span className="font-body text-sm text-primary">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
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
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="section-heading">
              <span className="text-gradient-gold">{t("projects_title")}</span>
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.url} delay={i * 100}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block cyber-border card-hover rounded-lg bg-card p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {pick(p.title, lang)}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {pick(p.description, lang)}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag.en}
                        className="rounded-full bg-primary/10 px-2 py-1 font-body text-xs text-primary"
                      >
                        {pick(tag, lang)}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-sm text-primary group-hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    {t("view_project")}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="section-heading">
              <span className="text-gradient-gold">{t("contact_title")}</span>
            </h2>
          </Reveal>
          <div className="grid gap-4">
            <ContactRow icon={Mail} label={t("email_label")} value="ruiiihf@gmail.com" href="mailto:ruiiihf@gmail.com" />
            <ContactRow icon={Phone} label={t("phone_label")} value="0501780242" href="tel:+966501780242" />
            <ContactRow
              icon={Linkedin}
              label={t("linkedin_label")}
              value={t("linkedin_value")}
              href="https://www.linkedin.com/in/rahaf-alshaibani-bb3001329"
              external
            />
          </div>
          <p className="mt-16 text-center text-sm text-muted-foreground">{t("footer")}</p>
        </div>
      </section>
    </div>
  );
}

function ContactRow({
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
      className="group cyber-border card-hover flex items-center gap-4 rounded-lg bg-card p-5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </a>
  );
}
