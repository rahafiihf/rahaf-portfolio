import type { Lang } from "./i18n";

export interface JourneyEntry {
  year: string;
  icon: "sparkles" | "book" | "code" | "shield";
  title: { en: string; ar: string };
  body: { en: string; ar: string };
}

export const journey: JourneyEntry[] = [
  {
    year: "2016",
    icon: "sparkles",
    title: { en: "The Spark of Curiosity", ar: "شرارة الفضول" },
    body: {
      en: "My fascination with technology began when I first explored how websites work. That curiosity never faded — it only grew stronger.",
      ar: "بدأ شغفي بالتقنية حين اكتشفت لأول مرة كيف تعمل المواقع. ذلك الفضول لم يخفت يوماً — بل ازداد قوة.",
    },
  },
  {
    year: "2020",
    icon: "book",
    title: { en: "Princess Nourah University", ar: "جامعة الأميرة نورة" },
    body: {
      en: "I enrolled in the programming track at Princess Nourah University. Here, I built a strong foundation in software development and computational thinking.",
      ar: "التحقت بمسار البرمجة في جامعة الأميرة نورة، حيث بنيت أساساً متيناً في تطوير البرمجيات والتفكير الحاسوبي.",
    },
  },
  {
    year: "2022",
    icon: "code",
    title: { en: "Sharpening My Skills", ar: "صقل مهاراتي" },
    body: {
      en: "Through personal projects and continuous learning, I developed expertise in web technologies, programming logic, and problem-solving.",
      ar: "من خلال المشاريع الشخصية والتعلم المستمر، طوّرت خبرتي في تقنيات الويب ومنطق البرمجة وحل المشكلات.",
    },
  },
  {
    year: "2024",
    icon: "shield",
    title: { en: "Cybersecurity at Imam University", ar: "الأمن السيبراني في جامعة الإمام" },
    body: {
      en: "Currently pursuing cybersecurity studies at Imam University, combining my programming background with security expertise to protect the digital world.",
      ar: "أدرس حالياً الأمن السيبراني في جامعة الإمام، جامعةً بين خلفيتي البرمجية وخبرتي الأمنية لحماية العالم الرقمي.",
    },
  },
];

export interface Skill {
  name: { en: string; ar: string };
  level: number;
}

export const skills: Skill[] = [
  { name: { en: "HTML", ar: "HTML" }, level: 90 },
  { name: { en: "CSS", ar: "CSS" }, level: 85 },
  { name: { en: "JavaScript", ar: "JavaScript" }, level: 75 },
  { name: { en: "Programming Fundamentals", ar: "أساسيات البرمجة" }, level: 88 },
  { name: { en: "Cybersecurity Fundamentals", ar: "أساسيات الأمن السيبراني" }, level: 70 },
];

export interface Project {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  tags: { en: string; ar: string }[];
  url: string;
}

export const projects: Project[] = [
  {
    title: { en: "MediScan Ai", ar: "ميدي سكان" },
    description: {
      en: "MediScan Ai is an AI system for analyzing medical images to assist in fast and accurate diagnosis of medical cases.",
      ar: "ميدي سكان نظامٌ ذكاء اصطناعي لتحليل الصور الطبية يساعد على تشخيص الحالات بسرعة ودقة.",
    },
    tags: [
      { en: "AI", ar: "ذكاء اصطناعي" },
      { en: "Medical Imaging", ar: "تصوير طبي" },
      { en: "Web App", ar: "تطبيق ويب" },
    ],
    url: "https://med-scan-bright.lovable.app/",
  },
  {
    title: { en: "Dera' Platform", ar: "منصة درع" },
    description: {
      en: "Dera' Platform is a system designed to educate and protect users from cyber threats and provide comprehensive security solutions.",
      ar: "منصة درع نظامٌ صُمم لتوعية المستخدمين وحمايتهم من التهديدات السيبرانية وتقديم حلول أمنية شاملة.",
    },
    tags: [
      { en: "Cybersecurity", ar: "أمن سيبراني" },
      { en: "Education", ar: "توعية" },
      { en: "Web App", ar: "تطبيق ويب" },
    ],
    url: "https://shied-alwatan-cyber.lovable.app/",
  },
];

export function pick<T>(obj: { en: T; ar: T }, lang: Lang): T {
  return obj[lang];
}
