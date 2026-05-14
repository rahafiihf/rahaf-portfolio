import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar";

const en = {
  nav_journey: "Journey",
  nav_about: "About",
  nav_skills: "Skills",
  nav_projects: "Projects",
  nav_contact: "Contact",
  hero_eyebrow: "Welcome to my story",
  hero_name: "Rahaf Alshaibani",
  hero_title: "Cybersecurity Student & Programmer",
  hero_tagline: "My journey in technology and cybersecurity.",
  journey_title: "My Journey",
  about_title: "About Me",
  about_body:
    "I am Rahaf Hamdan Alshaibani — a programming graduate from Princess Nourah University and currently a cybersecurity student at Imam University. I am passionate about technology, endlessly curious, and love the process of learning and growing. Every line of code I write and every system I study brings me closer to my goal: making the digital world a safer place.",
  skills_title: "Skills",
  projects_title: "Projects",
  view_project: "View Project",
  contact_title: "Get in Touch",
  email_label: "Email",
  phone_label: "Phone",
  linkedin_label: "LinkedIn",
  linkedin_value: "Rahaf Alshaibani",
  footer: "© 2024 Rahaf Alshaibani. Built with passion.",
  switch_lang: "عربي",
};

const ar: typeof en = {
  nav_journey: "الرحلة",
  nav_about: "نبذة",
  nav_skills: "المهارات",
  nav_projects: "المشاريع",
  nav_contact: "تواصل",
  hero_eyebrow: "أهلاً بك في قصتي",
  hero_name: "رهف الشيباني",
  hero_title: "طالبة أمن سيبراني ومبرمجة",
  hero_tagline: "رحلتي في عالم التقنية والأمن السيبراني.",
  journey_title: "رحلتي",
  about_title: "نبذة عني",
  about_body:
    "أنا رهف حمدان الشيباني — خرّيجة برمجة من جامعة الأميرة نورة، وطالبة أمن سيبراني حالياً في جامعة الإمام. شغوفة بالتقنية، فضوليّةٌ بلا حدود، وأحب التعلّم والنموّ. كل سطر كود أكتبه وكل نظام أدرسه يقرّبني من هدفي: أن أجعل العالم الرقمي مكاناً أكثر أماناً.",
  skills_title: "المهارات",
  projects_title: "المشاريع",
  view_project: "عرض المشروع",
  contact_title: "تواصلي معي",
  email_label: "البريد",
  phone_label: "الهاتف",
  linkedin_label: "لينكدإن",
  linkedin_value: "رهف الشيباني",
  footer: "© 2024 رهف الشيباني. صُنع بشغف.",
  switch_lang: "English",
};

const dicts = { en, ar };

interface Ctx {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (k: keyof typeof en) => string;
  toggle: () => void;
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.setAttribute("dir", dir);
      document.documentElement.lang = lang;
    }
  }, [dir, lang]);

  const t = (k: keyof typeof en) => dicts[lang][k] ?? en[k];
  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return <I18nContext.Provider value={{ lang, dir, t, toggle }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
