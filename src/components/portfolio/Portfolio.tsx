import {
  Award,
  BookOpen,
  Code,
  CodeXml,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Languages,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Eye,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { achievements, journey, pick, programs, projects, skillCategories } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CvViewer } from "./CvViewer";

const CV_URL = "/downloads/Rahaf_Alshaibani_CV.pdf";
const CV_FILE = "Rahaf_Alshaibani_CV.pdf";

const journeyIcons = { sparkles: Sparkles, book: BookOpen, code: CodeXml, shield: Shield };
const skillIcons = [CodeXml, Code, Database, Sparkles, Shield];

export function Portfolio() {
  const { t, lang, toggle, dir } = useI18n();
  const [cvBlobUrl, setCvBlobUrl] = useState<string | null>(null);
  const [cvViewer, setCvViewer] = useState(false);
  const navItems = [
    { id: "journey", label: t("nav_journey") },
    { id: "about", label: t("nav_about") },
    { id: "skills", label: t("nav_skills") },
    { id: "projects", label: t("nav_projects") },
    { id: "programs", label: t("nav_programs") },
    { id: "achievements", label: t("nav_achievements") },
    { id: "contact", label: t("nav_contact") },
  ];

  // Load the CV once so "View CV" can open the real document instantly.
  useEffect(() => {
    let alive = true;
    let objectUrl: string | null = null;
    fetch(CV_URL)
      .then((r) => (r.ok ? r.blob() : Promise.reject(new Error(`CV ${r.status}`))))
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        if (alive) setCvBlobUrl(objectUrl);
        else URL.revokeObjectURL(objectUrl);
      })
      .catch(() => {});
    return () => {
      alive = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  const openCV = () => setCvViewer(true);

  return (
    <div className="relative min-h-screen bg-background text-foreground" dir={dir}>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-hero" aria-hidden="true">
        <div className="absolute inset-0 grid-bg" />
        <Shield className="absolute left-[15%] top-24 h-20 w-20 text-primary opacity-10 animate-float" />
        <Code className="absolute bottom-32 right-[20%] h-16 w-16 text-accent opacity-10 animate-float [animation-delay:1s]" />
        <CodeXml className="absolute bottom-20 right-10 h-24 w-24 text-primary opacity-10 animate-float [animation-delay:2s]" />
      </div>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:px-6 md:py-5">
          <nav className="no-scrollbar flex min-w-0 flex-1 items-center gap-5 overflow-x-auto whitespace-nowrap text-xs md:gap-7 md:text-sm" aria-label="Portfolio sections">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="shrink-0 text-muted-foreground transition hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            variant="outline"
            onClick={toggle}
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary md:px-4"
            aria-label="Toggle language"
          >
            <Languages size={14} className="text-primary" />
            {t("switch_lang")}
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section id="top" className="portfolio-intro relative flex items-center justify-center overflow-hidden pb-16 pt-36">
          <div className="relative z-10 max-w-4xl px-6 text-center">
            <Reveal><p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-availability/30 bg-availability/10 px-4 py-2 text-sm font-medium text-availability"><span className="h-1.5 w-1.5 rounded-full bg-availability" />{t("training_status")}</p></Reveal>
            <Reveal delay={120}><h1 className="mb-6 text-5xl font-semibold md:text-7xl"><span className="text-foreground">{t("hero_name")}</span></h1></Reveal>
            <Reveal delay={240}><p className="mb-8 text-xl text-muted-foreground md:text-2xl">{t("hero_title")}</p></Reveal>
            <Reveal delay={360}>
              <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">{t("hero_tagline")}</p>
              <p className="mb-8 text-sm font-medium text-foreground/90">{t("training_body")}</p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" onClick={openCV} className="h-12"><Eye />{t("cv_view")}</Button>
                <Button asChild variant="outline" size="lg" className="h-12"><a href={CV_URL} download={CV_FILE}><Download />{t("cv_download")}</a></Button>
              </div>
            </Reveal>
            
          </div>
        </section>

        <section id="journey" className="scroll-mt-16 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle>{t("journey_title")}</SectionTitle>
            <div className="relative">
              <div className="timeline-line hidden md:block" />
              <div className="space-y-16 md:space-y-24">
                {journey.map((entry, index) => {
                  const left = index % 2 === 0;
                  const Icon = journeyIcons[entry.icon];
                  return (
                    <Reveal key={`${entry.year}-${entry.title.en}`} delay={index * 80} variant={left ? "left" : "right"}>
                      <div className="group relative">
                        <div className="timeline-dot top-8 hidden animate-glow-pulse md:block" />
                        <div className={`md:w-[45%] ${left ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                          <article className="cyber-border card-hover rounded-lg bg-card p-6">
                            <div className="mb-4 flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10"><Icon className="icon-pop h-5 w-5 text-primary" /></div>
                              <span className="font-body text-base font-bold text-primary">{entry.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{pick(entry.title, lang)}</h3>
                            <p className="mb-3 mt-1 text-sm font-medium text-primary/85">{pick(entry.subtitle, lang)}</p>
                            <p className="leading-relaxed text-muted-foreground">{pick(entry.body, lang)}</p>
                          </article>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle>{t("about_title")}</SectionTitle>
            <Reveal delay={120}>
              <div className="border-t border-border pt-8">
                <p className="mt-4 whitespace-pre-line text-center text-base leading-8 text-foreground/80 md:text-lg">{t("about_body")}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="scroll-mt-16 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle>{t("skills_title")}</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              {skillCategories.map((skill, index) => {
                const Icon = skillIcons[index];
                return (
                  <Reveal key={skill.category.en} delay={index * 70} variant={index % 2 === 0 ? "left" : "right"} className={index === skillCategories.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}>
                    <article className="group cyber-border card-hover h-full rounded-lg bg-card p-6">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"><Icon className="icon-pop h-5 w-5 text-primary" /></div>
                        <h3 className="text-xl font-bold">{pick(skill.category, lang)}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => <span key={item} className="tag-hover rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">{item}</span>)}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle>{t("projects_title")}</SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title.en} delay={(index % 3) * 90} variant={index % 2 === 0 ? "left" : "right"} className="h-full">
                  <article className="group cyber-border card-hover flex h-full flex-col rounded-lg bg-card p-7 md:p-8">
                    <p className="mb-3 text-xs font-bold uppercase text-primary">{pick(project.category, lang)}</p>
                    <h3 className="mb-4 text-xl font-bold text-foreground transition-colors group-hover:text-primary">{pick(project.title, lang)}</h3>
                    {project.context && project.contextLabel && (
                      <div className="mb-4 border-s-2 border-primary/50 ps-3 text-sm">
                        <span className="text-muted-foreground">{pick(project.contextLabel, lang)}: </span>
                        <span className="font-medium text-foreground/90">{pick(project.context, lang)}</span>
                      </div>
                    )}
                    <p className="mb-6 flex-1 text-sm leading-7 text-muted-foreground">{pick(project.description, lang)}</p>
                    <div>
                      <p className="mb-2 text-xs font-semibold text-foreground/70">{t("project_focus")}</p>
                      <div className="flex flex-wrap gap-2">{project.focus.map((item) => <span key={item} className="tag-hover rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">{item}</span>)}</div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="scroll-mt-16 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle>{t("programs_title")}</SectionTitle>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <Reveal key={program.title.en} delay={(index % 3) * 70} variant="up" className={program.featured ? "md:col-span-2 lg:col-span-3" : ""}>
                  <article className={`group cyber-border card-hover h-full rounded-lg bg-card p-6 ${program.featured ? "md:p-8" : ""}`}>
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10"><GraduationCap className="icon-pop h-5 w-5 text-primary" /></div>
                      {program.date && <span className="text-sm font-bold text-primary">{program.date}</span>}
                    </div>
                    <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{pick(program.title, lang)}</h3>
                    {program.provider && <p className="mt-2 text-sm text-primary/80">{pick(program.provider, lang)}</p>}
                    {program.description && <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground">{pick(program.description, lang)}</p>}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="scroll-mt-16 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionTitle>{t("achievements_title")}</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <Reveal key={achievement.en} delay={index * 80} variant={index % 2 === 0 ? "left" : "right"}>
                  <article className="group cyber-border card-hover flex h-full items-start gap-4 rounded-lg bg-card p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10"><Award className="icon-pop h-5 w-5 text-primary" /></div>
                    <p className="text-sm leading-7 text-foreground/80">{pick(achievement, lang)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle>{t("contact_title")}</SectionTitle>
            <Reveal><div className="mb-10 border-b border-border pb-8 text-center"><p className="mb-3 text-lg font-semibold text-availability">{t("training_status")}</p><p className="mb-5 text-muted-foreground">{t("training_body")}</p><Button asChild size="lg"><a href="mailto:rahafauii@gmail.com"><Mail />{t("training_cta")}</a></Button></div></Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal variant="left"><ContactRow icon={Mail} label={t("email_label")} value="rahafauii@gmail.com" href="mailto:rahafauii@gmail.com" /></Reveal>
              <Reveal delay={80} variant="right"><ContactRow icon={Phone} label={t("phone_label")} value="+966501780242" href="tel:+966501780242" /></Reveal>
              <Reveal delay={160} variant="left"><ContactRow icon={Linkedin} label={t("linkedin_label")} value={t("linkedin_value")} href="https://www.linkedin.com/in/rahaf-alshaibani-bb3001329" external /></Reveal>
              <Reveal delay={240} variant="right"><ContactRow icon={Github} label={t("github_label")} value={t("github_value")} href="https://github.com/rahafiihf" external /></Reveal>
              <Reveal delay={320} className="md:col-span-2"><ContactRow icon={MapPin} label={t("location_label")} value={t("location_value")} /></Reveal>
            </div>
            <Reveal delay={400}><p className="mt-16 text-center text-sm text-muted-foreground">{t("footer")}</p></Reveal>
          </div>
        </section>
      </main>

      {cvViewer && <CvViewer blobUrl={cvBlobUrl} onClose={() => setCvViewer(false)} />}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Reveal><h2 className="section-heading"><span className="text-gradient-gold">{children}</span></h2></Reveal>;
}

function openExternal(href: string, event: React.MouseEvent) {
  event.preventDefault();
  const tab = window.open(href, "_blank", "noopener,noreferrer");
  if (!tab) window.location.href = href;
}

function ContactRow({ icon: Icon, label, value, href, external }: { icon: typeof Mail; label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20"><Icon className="icon-pop h-5 w-5 text-primary" /></div>
      <div className="min-w-0"><p className="text-sm text-muted-foreground">{label}</p><p className="break-words font-medium text-foreground">{value}</p></div>
    </>
  );
  const className = "group cyber-border card-hover flex min-h-24 items-center gap-4 rounded-lg bg-card p-5";
  if (!href) return <div className={className}>{content}</div>;
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => openExternal(href, e)} className={className}>{content}</a>;
  return <a href={href} className={className}>{content}</a>;
}
