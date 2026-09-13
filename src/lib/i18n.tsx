import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar";

const en = {
  nav_journey: "Journey",
  nav_about: "About",
  nav_skills: "Skills",
  nav_projects: "Projects",
  nav_programs: "Programs",
  nav_achievements: "Achievements",
  nav_contact: "Contact",
  hero_eyebrow: "Welcome to my story",
  hero_name: "Rahaf Alshaibani",
  hero_title: "Cybersecurity Student & Programmer",
  hero_tagline: "Cybersecurity student and programming graduate with a strong foundation in software development, AI, and cybersecurity. Passionate about building practical technology solutions, exploring cyber defense, and combining programming with security and AI to solve real-world problems.",
  journey_title: "My Journey",
  about_title: "About Me",
  about_body: "I am Rahaf Hamdan Alshaibani, a programming graduate from Princess Nourah University and currently a Cybersecurity student at Imam Mohammad Ibn Saud Islamic University.\n\nMy background combines software development, cybersecurity, and artificial intelligence. I enjoy turning ideas into practical systems and exploring how technology can be used to solve real-world problems.\n\nThrough university projects, technical programs, hackathons, and hands-on training, I have worked on AI, cybersecurity, fraud detection, medical imaging, financial technology, and web applications.\n\nI am particularly interested in cybersecurity, threat detection, cyber defense, and building intelligent solutions that make digital systems safer and more reliable.",
  skills_title: "Skills",
  projects_title: "Projects",
  project_focus: "Focus",
  programs_title: "Programs & Training",
  achievements_title: "Achievements",
  contact_title: "Get in Touch",
  email_label: "Email",
  phone_label: "Phone",
  linkedin_label: "LinkedIn",
  linkedin_value: "Rahaf Alshaibani",
  github_label: "GitHub",
  github_value: "rahafiihf",
  location_label: "Location",
  location_value: "Riyadh, Saudi Arabia",
  footer: "© 2026 Rahaf Alshaibani. Built with passion.",
  switch_lang: "عربي",
};

const ar: typeof en = {
  nav_journey: "الرحلة",
  nav_about: "نبذة",
  nav_skills: "المهارات",
  nav_projects: "المشاريع",
  nav_programs: "البرامج",
  nav_achievements: "الإنجازات",
  nav_contact: "تواصل",
  hero_eyebrow: "أهلاً بك في قصتي",
  hero_name: "رهف الشيباني",
  hero_title: "طالبة أمن سيبراني ومبرمجة",
  hero_tagline: "طالبة أمن سيبراني وخريجة برمجة، أمتلك أساساً قوياً في تطوير البرمجيات والذكاء الاصطناعي والأمن السيبراني. شغوفة ببناء حلول تقنية عملية، واستكشاف الدفاع السيبراني، والجمع بين البرمجة والأمن والذكاء الاصطناعي لحل مشكلات واقعية.",
  journey_title: "رحلتي",
  about_title: "نبذة عني",
  about_body: "أنا رهف حمدان الشيباني، خريجة برمجة من جامعة الأميرة نورة، وطالبة أمن سيبراني حالياً في جامعة الإمام محمد بن سعود الإسلامية.\n\nتجمع خلفيتي بين تطوير البرمجيات والأمن السيبراني والذكاء الاصطناعي. أستمتع بتحويل الأفكار إلى أنظمة عملية واستكشاف طرق توظيف التقنية لحل مشكلات واقعية.\n\nمن خلال المشاريع الجامعية والبرامج التقنية والهاكاثونات والتدريب العملي، عملت على مشاريع في الذكاء الاصطناعي والأمن السيبراني واكتشاف الاحتيال والتصوير الطبي والتقنية المالية وتطبيقات الويب.\n\nأهتم بشكل خاص بالأمن السيبراني واكتشاف التهديدات والدفاع السيبراني وبناء حلول ذكية تجعل الأنظمة الرقمية أكثر أماناً وموثوقية.",
  skills_title: "المهارات",
  projects_title: "المشاريع",
  project_focus: "التركيز",
  programs_title: "البرامج والتدريب",
  achievements_title: "الإنجازات",
  contact_title: "تواصلي معي",
  email_label: "البريد الإلكتروني",
  phone_label: "الهاتف",
  linkedin_label: "لينكدإن",
  linkedin_value: "رهف الشيباني",
  github_label: "GitHub",
  github_value: "rahafiihf",
  location_label: "الموقع",
  location_value: "الرياض، المملكة العربية السعودية",
  footer: "© 2026 رهف الشيباني. صُنع بشغف.",
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
    document.body.setAttribute("dir", dir);
    document.documentElement.lang = lang;
  }, [dir, lang]);

  const t = (k: keyof typeof en) => dicts[lang][k] ?? en[k];
  const toggle = () => setLang((current) => (current === "en" ? "ar" : "en"));

  return <I18nContext.Provider value={{ lang, dir, t, toggle }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
