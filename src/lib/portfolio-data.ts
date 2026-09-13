import type { Lang } from "./i18n";

export type Localized = { en: string; ar: string };

export interface JourneyEntry {
  year: string;
  icon: "book" | "code" | "shield" | "sparkles";
  title: Localized;
  subtitle: Localized;
  body: Localized;
}

export const journey: JourneyEntry[] = [
  {
    year: "2024",
    icon: "code",
    title: { en: "Princess Nourah University", ar: "جامعة الأميرة نورة" },
    subtitle: { en: "Computer Programming", ar: "برمجة الحاسب" },
    body: {
      en: "Graduated from Princess Nourah University with a background in Computer Programming, building a strong foundation in software development, programming logic, databases, and web technologies.",
      ar: "تخرجت من جامعة الأميرة نورة بخلفية في برمجة الحاسب، وبنيت أساساً قوياً في تطوير البرمجيات ومنطق البرمجة وقواعد البيانات وتقنيات الويب.",
    },
  },
  {
    year: "2024",
    icon: "book",
    title: { en: "King Fahad Medical City", ar: "مدينة الملك فهد الطبية" },
    subtitle: { en: "Software Development Trainee", ar: "متدربة تطوير برمجيات" },
    body: {
      en: "Worked as a Software Development Trainee and contributed to a bilingual Arabic/English training management platform using React and MySQL. The system supported more than 50 trainees and helped streamline training management workflows.",
      ar: "عملت متدربة في تطوير البرمجيات، وساهمت في منصة ثنائية اللغة لإدارة التدريب باستخدام React وMySQL. دعمت المنصة أكثر من 50 متدرباً وساعدت في تبسيط إجراءات إدارة التدريب.",
    },
  },
  {
    year: "2024 – Present",
    icon: "shield",
    title: { en: "Imam Mohammad Ibn Saud Islamic University", ar: "جامعة الإمام محمد بن سعود الإسلامية" },
    subtitle: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    body: {
      en: "Currently studying Cybersecurity at Imam Mohammad Ibn Saud Islamic University, building on my programming background and developing skills in network security, cloud security, threat detection, and incident response.",
      ar: "أدرس حالياً الأمن السيبراني في جامعة الإمام محمد بن سعود الإسلامية، وأبني على خلفيتي البرمجية لتطوير مهاراتي في أمن الشبكات والأمن السحابي واكتشاف التهديدات والاستجابة للحوادث.",
    },
  },
  {
    year: "2026",
    icon: "sparkles",
    title: { en: "AI & Cybersecurity", ar: "الذكاء الاصطناعي والأمن السيبراني" },
    subtitle: { en: "Programs, Camps & Hackathons", ar: "برامج ومعسكرات وهاكاثونات" },
    body: {
      en: "Expanded my experience through AI programs, cybersecurity camps, hackathons, and technical training, including Masar's Agentic AI Program and several Tuwaiq Academy programs.",
      ar: "وسّعت خبرتي من خلال برامج الذكاء الاصطناعي ومعسكرات الأمن السيبراني والهاكاثونات والتدريب التقني، بما في ذلك برنامج مسار للذكاء الاصطناعي الوكيلي وعدة برامج من أكاديمية طويق.",
    },
  },
];

export interface SkillCategory {
  category: Localized;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: { en: "Programming", ar: "البرمجة" }, items: ["Python", "JavaScript", "Java", "C#", "HTML", "CSS"] },
  { category: { en: "Frameworks & Web", ar: "أطر العمل والويب" }, items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  { category: { en: "Databases & Tools", ar: "قواعد البيانات والأدوات" }, items: ["MySQL", "Firebase", "Supabase", "Git", "GitHub"] },
  { category: { en: "AI & Machine Learning", ar: "الذكاء الاصطناعي وتعلم الآلة" }, items: ["Anomaly Detection", "Classification", "Computer Vision", "OpenAI API", "Gemini AI"] },
  { category: { en: "Cybersecurity", ar: "الأمن السيبراني" }, items: ["Network Security", "Cloud Security", "Threat Detection", "Incident Response"] },
];

export interface Project {
  title: Localized;
  category: Localized;
  contextLabel?: Localized;
  context?: Localized;
  description: Localized;
  focus: string[];
}

export const projects: Project[] = [
  {
    title: { en: "SANAD — Smart Banking Platform", ar: "سند — منصة مصرفية ذكية" },
    category: { en: "FinTech / AI", ar: "التقنية المالية / الذكاء الاصطناعي" },
    contextLabel: { en: "Achievement", ar: "الإنجاز" },
    context: { en: "2nd Place Winner — Alinma Madarik Bootcamp", ar: "المركز الثاني — معسكر الإنماء مدارك" },
    description: {
      en: "SANAD is a smart savings platform designed to help users build consistent saving habits. It includes an AI financial assistant that analyzes income and spending to suggest personalized savings plans, along with cashback-driven savings and a ‘SANAD Streak’ to encourage consistency.",
      ar: "سند منصة ادخار ذكية تساعد المستخدمين على بناء عادات ادخارية مستمرة. تضم مساعداً مالياً بالذكاء الاصطناعي يحلل الدخل والإنفاق ليقترح خطط ادخار شخصية، إلى جانب الادخار عبر الاسترداد النقدي وميزة «سلسلة سند» لتشجيع الاستمرارية.",
    },
    focus: ["AI", "Personal Finance", "Financial Technology", "Behavioral Savings"],
  },
  {
    title: { en: "Dara' (درع) — Unified Cyber Defense System", ar: "درع — نظام الدفاع السيبراني الموحّد" },
    category: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    contextLabel: { en: "Event", ar: "الفعالية" },
    context: { en: "Tuwaiq Academy — Defense-thon Hackathon", ar: "أكاديمية طويق — هاكاثون ديفنسثون" },
    description: {
      en: "Dara' is a unified cyber defense concept designed to protect critical and defense sectors through real-time monitoring, big-data analysis, and automated incident response.",
      ar: "درع مفهوم موحّد للدفاع السيبراني صُمم لحماية القطاعات الحيوية والدفاعية من خلال المراقبة اللحظية وتحليل البيانات الضخمة والاستجابة الآلية للحوادث.",
    },
    focus: ["Cyber Defense", "SOC", "Threat Detection", "Real-time Monitoring", "Incident Response"],
  },
  {
    title: { en: "CyberMind AI — Fraud Detection Assistant", ar: "CyberMind AI — مساعد اكتشاف الاحتيال" },
    category: { en: "AI / Cybersecurity", ar: "الذكاء الاصطناعي / الأمن السيبراني" },
    contextLabel: { en: "Event", ar: "الفعالية" },
    context: { en: "AI-Native Engineering Camp", ar: "معسكر هندسة AI-Native" },
    description: {
      en: "CyberMind AI is a fraud detection assistant designed to proactively identify phishing links, fake websites, and impersonation attempts. The project focuses on simplifying security awareness and making threat detection more accessible to non-technical users and elderly users.",
      ar: "CyberMind AI مساعد لاكتشاف الاحتيال صُمم للتعرّف استباقياً على روابط التصيد والمواقع المزيفة ومحاولات انتحال الهوية. يركز المشروع على تبسيط الوعي الأمني وإتاحة اكتشاف التهديدات لغير التقنيين وكبار السن.",
    },
    focus: ["Fraud Detection", "Phishing Detection", "AI", "Cybersecurity Awareness"],
  },
  {
    title: { en: "MediScan AI — Medical Imaging Platform", ar: "MediScan AI — منصة التصوير الطبي" },
    category: { en: "AI / Healthcare", ar: "الذكاء الاصطناعي / الرعاية الصحية" },
    contextLabel: { en: "Event", ar: "الفعالية" },
    context: { en: "Tuwaiq Hackathon", ar: "هاكاثون طويق" },
    description: {
      en: "MediScan AI is an AI-powered medical imaging platform that analyzes uploaded radiology scans to provide preliminary insights and flag potentially suspicious regions, helping support faster clinical decision-making.",
      ar: "MediScan AI منصة للتصوير الطبي مدعومة بالذكاء الاصطناعي تحلل صور الأشعة المرفوعة لتقديم مؤشرات أولية وتحديد المناطق التي قد تكون مثيرة للاشتباه، دعماً لاتخاذ قرارات سريرية أسرع.",
    },
    focus: ["Computer Vision", "Medical Imaging", "Artificial Intelligence"],
  },
  {
    title: { en: "KFMC Training Management Platform", ar: "منصة مدينة الملك فهد الطبية لإدارة التدريب" },
    category: { en: "Software Development", ar: "تطوير البرمجيات" },
    contextLabel: { en: "Experience", ar: "الخبرة" },
    context: { en: "King Fahad Medical City", ar: "مدينة الملك فهد الطبية" },
    description: {
      en: "A bilingual Arabic/English training management platform developed during my Software Development Training at King Fahad Medical City. The system was built using React and MySQL and supported more than 50 trainees while helping streamline training management workflows.",
      ar: "منصة ثنائية اللغة لإدارة التدريب طورتها خلال تدريبي في تطوير البرمجيات بمدينة الملك فهد الطبية. بُني النظام باستخدام React وMySQL، ودعم أكثر من 50 متدرباً وساعد في تبسيط إجراءات إدارة التدريب.",
    },
    focus: ["React", "MySQL", "Web Development", "Training Management"],
  },
];

export interface Program {
  title: Localized;
  provider?: Localized;
  date?: string;
  description?: Localized;
  featured?: boolean;
}

export const programs: Program[] = [
  {
    title: { en: "Agentic AI Program — Masar Cohort 2", ar: "برنامج الذكاء الاصطناعي الوكيلي — مسار، الدفعة الثانية" },
    provider: { en: "SANi x Misk Foundation", ar: "SANi بالشراكة مع مؤسسة مسك" },
    date: "2026",
    description: {
      en: "Selected among the top 140 participants from approximately 6,000 applicants. Intensive technical track covering Agentic AI, Cybersecurity, and Software Engineering integration.",
      ar: "تم اختياري ضمن أفضل 140 مشاركاً من نحو 6,000 متقدم. مسار تقني مكثف يغطي تكامل الذكاء الاصطناعي الوكيلي والأمن السيبراني وهندسة البرمجيات.",
    },
    featured: true,
  },
  {
    title: { en: "AI-Native Engineering Camp", ar: "معسكر هندسة AI-Native" },
    provider: { en: "OSS Vision x Tuwaiq Club, Imam Mohammad Ibn Saud Islamic University", ar: "OSS Vision بالشراكة مع نادي طويق، جامعة الإمام محمد بن سعود الإسلامية" },
    date: "May 2026",
  },
  { title: { en: "Cloud Computing Security", ar: "أمن الحوسبة السحابية" }, provider: { en: "Tuwaiq Academy", ar: "أكاديمية طويق" } },
  { title: { en: "Game Design and Programming", ar: "تصميم وبرمجة الألعاب" }, provider: { en: "Tuwaiq Academy", ar: "أكاديمية طويق" } },
  { title: { en: "AI & Quantum Computing in Cybersecurity", ar: "الذكاء الاصطناعي والحوسبة الكمية في الأمن السيبراني" }, provider: { en: "VTech — Vision & Technology Camp", ar: "VTech — معسكر الرؤية والتقنية" } },
  { title: { en: "Introduction to Generative AI", ar: "مقدمة في الذكاء الاصطناعي التوليدي" }, provider: { en: "VTech — Vision & Technology Camp", ar: "VTech — معسكر الرؤية والتقنية" } },
  { title: { en: "Intro to Robotics Building & Programming", ar: "مقدمة في بناء الروبوتات وبرمجتها" }, provider: { en: "VTech — Vision & Technology Camp", ar: "VTech — معسكر الرؤية والتقنية" } },
  { title: { en: "AI Concepts and Advanced Applications", ar: "مفاهيم الذكاء الاصطناعي وتطبيقاته المتقدمة" }, provider: { en: "SDAIA", ar: "سدايا" } },
  { title: { en: "Cybersecurity Essentials", ar: "أساسيات الأمن السيبراني" } },
  { title: { en: "Python for Beginners", ar: "بايثون للمبتدئين" } },
  { title: { en: "Design Thinking", ar: "التفكير التصميمي" } },
];

export const achievements: Localized[] = [
  {
    en: "Selected among the top 140 participants from approximately 6,000 applicants for Masar Cohort 2 — Agentic AI Program.",
    ar: "تم اختياري ضمن أفضل 140 مشاركاً من نحو 6,000 متقدم لبرنامج مسار، الدفعة الثانية — برنامج الذكاء الاصطناعي الوكيلي.",
  },
  {
    en: "2nd Place Winner — Alinma Madarik Bootcamp with SANAD.",
    ar: "الفوز بالمركز الثاني في معسكر الإنماء مدارك بمشروع سند.",
  },
  {
    en: "Built and contributed to multiple AI, cybersecurity, healthcare, and software development projects.",
    ar: "بنيت وساهمت في عدة مشاريع في الذكاء الاصطناعي والأمن السيبراني والرعاية الصحية وتطوير البرمجيات.",
  },
  {
    en: "Software Development Trainee at King Fahad Medical City.",
    ar: "متدربة تطوير برمجيات في مدينة الملك فهد الطبية.",
  },
];

export function pick<T>(obj: { en: T; ar: T }, lang: Lang): T {
  return obj[lang];
}
