import { useEffect } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { pick, type Project } from "@/lib/portfolio-data";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { lang, t } = useI18n();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-md sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-elegant sm:p-10 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute end-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          aria-label={t("close")}
        >
          <X size={18} />
        </button>

        <p className="text-xs uppercase tracking-[0.3em] text-gold-gradient">
          {project.tools.join(" · ")}
        </p>
        <h3 className="mt-3 text-3xl sm:text-4xl">{pick(project.title, lang)}</h3>
        <p className="mt-3 text-muted-foreground">{pick(project.short, lang)}</p>

        <div className="mt-8 space-y-6">
          <Block label={t("the_idea")}>{pick(project.idea, lang)}</Block>
          <Block label={t("the_story")}>
            <span className="leading-relaxed">{pick(project.story, lang)}</span>
          </Block>
          <Block label={t("what_i_learned")}>{pick(project.learned, lang)}</Block>
          <Block label={t("tools_used")}>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      <div className="text-foreground/90">{children}</div>
    </div>
  );
}
