import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahaf Alshaibani | Cybersecurity Portfolio" },
      {
        name: "description",
        content:
          "Rahaf Alshaibani's bilingual portfolio featuring cybersecurity, programming, AI projects, training, and professional experience.",
      },
      { property: "og:title", content: "Rahaf Alshaibani | Cybersecurity Portfolio" },
      {
        property: "og:description",
        content: "A bilingual journey through cybersecurity, programming, AI projects, and training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Amiri:wght@400;700&family=Cairo:wght@400;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Portfolio />
    </I18nProvider>
  );
}
