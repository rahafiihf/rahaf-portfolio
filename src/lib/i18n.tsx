import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string | string[]>;

const en: Dict = {
  nav_journey: "Journey",
  nav_about: "About",
  nav_skills: "Skills",
  nav_projects: "Projects",
  nav_contact: "Contact",
  hero_name: "Rahaf Hamdan Alshaibani",
  hero_title: "Cybersecurity Student & Programmer",
  hero_tagline: "My journey in technology and cybersecurity.",
  hero_cta: "Read my story",
  typing_1: "Curious learner.",
  typing_2: "Code & cryptography.",
  typing_3: "Securing what matters.",
  chapter: "Chapter",
  journey_title: "My Journey",
  journey_sub: "A story written in keystrokes — from first curiosity to today.",
  about_title: "About Me",
  about_body:
    "I am a programming graduate from Princess Nourah University and currently studying cybersecurity at Imam University. I am passionate about technology, always curious, and love learning and improving my skills every single day.",
  skills_title: "What I Practice",
  skills_sub: "The tools I sharpen — patiently, consistently.",
  projects_title: "Selected Work",
  projects_sub: "Small projects, real lessons.",
  view_project: "View project",
  close: "Close",
  the_idea: "The idea",
  what_i_learned: "What I learned",
  tools_used: "Tools used",
  the_story: "The story",
  contact_title: "Get in touch",
  contact_sub: "Open to collaborations, internships, and good conversations.",
  email_label: "Email",
  phone_label: "Phone",
  linkedin_label: "LinkedIn",
  footer: "Crafted with care · 2026",
  switch_lang: "العربية",
};

const ar: Dict = {
  nav_journey: "الرحلة",
  nav_about: "نبذة",
  nav_skills: "المهارات",
  nav_projects: "المشاريع",
  nav_contact: "تواصل",
  hero_name: "رهف حمدان الشيباني",
  hero_title: "طالبة أمن سيبراني ومبرمجة",
  hero_tagline: "رحلتي في عالم التقنية والأمن السيبراني.",
  hero_cta: "اقرأ قصتي",
  typing_1: "متعلّمة شغوفة.",
  typing_2: "برمجة وتشفير.",
  typing_3: "أحمي ما يهم.",
  chapter: "الفصل",
  journey_title: "رحلتي",
  journey_sub: "قصة مكتوبة بحروف الكود — من أول فضول إلى اليوم.",
  about_title: "نبذة عني",
  about_body:
    "أنا خريجة برمجة من جامعة الأميرة نورة، وأدرس حالياً الأمن السيبراني في جامعة الإمام. شغوفة بالتقنية، فضولية دائماً، وأحب التعلّم وتطوير مهاراتي يوماً بعد يوم.",
  skills_title: "ما أتقنه",
  skills_sub: "الأدوات التي أصقلها بصبرٍ ومثابرة.",
  projects_title: "أعمال مختارة",
  projects_sub: "مشاريع بسيطة، دروس حقيقية.",
  view_project: "عرض المشروع",
  close: "إغلاق",
  the_idea: "الفكرة",
  what_i_learned: "ما تعلّمته",
  tools_used: "الأدوات المستخدمة",
  the_story: "القصة",
  contact_title: "تواصلي معي",
  contact_sub: "مفتوحة للتعاون، التدريب، والمحادثات الجميلة.",
  email_label: "البريد",
  phone_label: "الهاتف",
  linkedin_label: "لينكدإن",
  footer: "صُنع بعناية · 2026",
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

  const t = (k: keyof typeof en) => (dicts[lang][k] as string) ?? (en[k] as string);
  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return <I18nContext.Provider value={{ lang, dir, t, toggle }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
