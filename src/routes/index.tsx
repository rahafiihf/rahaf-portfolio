import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahaf Hamdan Alshaibani — Cybersecurity Student & Programmer" },
      {
        name: "description",
        content:
          "The bilingual portfolio of Rahaf Hamdan Alshaibani — a journey through programming and cybersecurity, told as a timeline.",
      },
      { property: "og:title", content: "Rahaf Hamdan Alshaibani — Portfolio" },
      {
        property: "og:description",
        content: "A storytelling portfolio in Arabic & English.",
      },
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
