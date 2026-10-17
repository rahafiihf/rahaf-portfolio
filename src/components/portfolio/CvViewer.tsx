import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink, Loader2, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const CV_URL = "/downloads/Rahaf_Alshaibani_CV.pdf";
const CV_FILE = "Rahaf_Alshaibani_CV.pdf";

/**
 * Renders the CV pages to canvases with pdf.js so the document is always
 * visible in the page itself — no browser PDF plugin, no popup blocker,
 * no preview-iframe restriction involved.
 */
export function CvViewer({ blobUrl, onClose }: { blobUrl: string | null; onClose: () => void }) {
  const { t } = useI18n();
  const boxRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    let cancelled = false;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
        pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

        const data = new Uint8Array(await (await fetch(CV_URL)).arrayBuffer());
        const doc = await pdfjs.getDocument({ data }).promise;
        if (cancelled) return;

        box.replaceChildren();
        const width = box.clientWidth || 720;
        const dpr = window.devicePixelRatio || 1;

        for (let index = 1; index <= doc.numPages; index += 1) {
          const page = await doc.getPage(index);
          const base = page.getViewport({ scale: 1 });
          const scale = Math.min(2, (width * dpr) / base.width);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.className = "w-full rounded-md bg-white shadow-lg";
          box.appendChild(canvas);

          await page.render({ canvas, viewport }).promise;
          if (cancelled) return;
        }
        setStatus("ready");
      } catch (error) {
        console.error("CV viewer:", error);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={CV_FILE}>
      <div className="flex items-center justify-between gap-3 border-b border-border bg-card/80 px-4 py-3 md:px-6">
        <p className="truncate font-mono text-xs text-muted-foreground md:text-sm">{CV_FILE}</p>
        <div className="flex shrink-0 items-center gap-2">
          <a href={CV_URL} download={CV_FILE} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90 md:text-sm">
            <Download className="h-4 w-4" />
            {t("cv_download")}
          </a>
          {blobUrl && (
            <a href={blobUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition hover:border-primary hover:text-primary md:inline-flex md:text-sm">
              <ExternalLink className="h-4 w-4" />
              {t("cv_open_tab")}
            </a>
          )}
          <button onClick={onClose} aria-label={t("cv_close")} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition hover:border-primary hover:text-primary md:text-sm">
            <X className="h-4 w-4" />
            {t("cv_close")}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-6">
        {status === "loading" && (
          <p className="flex items-center justify-center gap-2 py-16 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("cv_loading")}
          </p>
        )}
        {status === "error" && <p className="py-16 text-center text-sm text-muted-foreground">{t("cv_error")}</p>}
        <div ref={boxRef} className="mx-auto flex max-w-3xl flex-col gap-6" />
      </div>
    </div>
  );
}
