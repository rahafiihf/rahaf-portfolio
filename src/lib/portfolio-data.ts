import type { Lang } from "./i18n";

export interface JourneyEntry {
  year: string;
  title: { en: string; ar: string };
  body: { en: string; ar: string };
}

export const journey: JourneyEntry[] = [
  {
    year: "2014",
    title: {
      en: "First spark of curiosity",
      ar: "أول شرارة فضول",
    },
    body: {
      en: "A young girl in front of a glowing screen, taking apart software just to understand how it worked. Technology stopped feeling like magic — it started feeling like a language I wanted to speak.",
      ar: "فتاة صغيرة أمام شاشة مضيئة، تفكك البرامج لمجرد أن تفهم كيف تعمل. لم تعد التقنية سحراً — بل أصبحت لغةً أردت أن أتقنها.",
    },
  },
  {
    year: "2020",
    title: {
      en: "Princess Nourah University — Programming",
      ar: "جامعة الأميرة نورة — برمجة",
    },
    body: {
      en: "I enrolled in computer programming. Lectures, late-night code, broken builds, then small wins. Every error message became a teacher.",
      ar: "التحقت بتخصص برمجة الحاسب. محاضرات، أكواد في الليل، أعطال، ثم انتصارات صغيرة. كل رسالة خطأ كانت معلّماً.",
    },
  },
  {
    year: "2023",
    title: {
      en: "Sharpening the craft",
      ar: "صقل المهارة",
    },
    body: {
      en: "HTML, CSS, JavaScript — building real interfaces. I learned that elegance in code is honesty: writing only what is needed, with care.",
      ar: "HTML وCSS وJavaScript — بناء واجهات حقيقية. تعلّمت أن أناقة الكود صدقٌ: أن تكتب فقط ما يلزم، وبعناية.",
    },
  },
  {
    year: "2024",
    title: {
      en: "Graduation",
      ar: "التخرّج",
    },
    body: {
      en: "Diploma in hand, eyes on the horizon. I knew building was only half the story — I wanted to learn how to defend what we build.",
      ar: "الشهادة في يدي، والعين على الأفق. أدركت أن البناء نصف الحكاية فقط — أردت أن أتعلّم كيف أحمي ما نبنيه.",
    },
  },
  {
    year: "2025",
    title: {
      en: "Imam University — Cybersecurity",
      ar: "جامعة الإمام — أمن سيبراني",
    },
    body: {
      en: "Today I study cybersecurity: threat models, cryptography fundamentals, the quiet discipline of thinking like both builder and adversary.",
      ar: "اليوم أدرس الأمن السيبراني: نماذج التهديدات، أساسيات التشفير، وذلك الانضباط الهادئ في التفكير كمطوّرة وخصم في الوقت ذاته.",
    },
  },
];

export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "HTML", level: 92 },
  { name: "CSS", level: 88 },
  { name: "JavaScript", level: 78 },
  { name: "Programming Basics", level: 85 },
  { name: "Cybersecurity Fundamentals", level: 70 },
];

export interface Project {
  id: string;
  title: { en: string; ar: string };
  short: { en: string; ar: string };
  idea: { en: string; ar: string };
  learned: { en: string; ar: string };
  tools: string[];
  story: { en: string; ar: string };
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: { en: "Personal Portfolio Website", ar: "موقع شخصي تعريفي" },
    short: {
      en: "A handcrafted home for my story, work, and journey in tech.",
      ar: "بيتٌ صُنع بيدي لقصتي وأعمالي ورحلتي التقنية.",
    },
    idea: {
      en: "A bilingual portfolio that reads like a quiet story rather than a CV — Arabic and English, dark and elegant.",
      ar: "موقع شخصي ثنائي اللغة يُقرأ كقصة هادئة لا كسيرة ذاتية — عربي وإنجليزي، داكن وأنيق.",
    },
    learned: {
      en: "Designing for two writing directions, semantic tokens, and how typography carries emotion.",
      ar: "التصميم لاتجاهين، الرموز الدلالية، وكيف تحمل الطباعة الإحساس.",
    },
    tools: ["HTML", "CSS", "JavaScript"],
    story: {
      en: "I started this site one quiet evening because every link I shared about myself led to a generic profile that didn't sound like me. I wanted a place that feels personal — where the typography breathes, the language switches gracefully between Arabic and English, and the story moves like a timeline. The hardest part was honestly admitting what to leave out: not every line of code I've written deserves a spotlight. I learned that good design is mostly subtraction, and that writing about myself in two languages forced me to be more honest in both.",
      ar: "بدأت هذا الموقع في مساءٍ هادئ، لأن كل رابط شاركته عن نفسي كان يقودني إلى صفحات نمطية لا تشبهني. أردت مكاناً يشبهني فعلاً — تتنفس فيه الحروف، وتنتقل اللغة برشاقة بين العربية والإنجليزية، وتتحرك القصة كخطٍ زمني. أصعب جزء كان الاعتراف بصدق بما يجب حذفه: ليس كل سطر كتبته يستحق الإضاءة. تعلّمت أن التصميم الجيّد طرحٌ أكثر منه إضافة، وأن الكتابة عن نفسي بلغتين أجبرتني أن أكون أكثر صدقاً في كلتيهما.",
    },
  },
  {
    id: "awareness",
    title: { en: "Security Awareness Website", ar: "موقع التوعية الأمنية" },
    short: {
      en: "A simple site that teaches everyday people how to stay safe online.",
      ar: "موقع بسيط يعلّم الناس كيف يحمون أنفسهم على الإنترنت.",
    },
    idea: {
      en: "Bite-sized lessons on phishing, strong passwords, and safe browsing — written for non-technical readers.",
      ar: "دروس مختصرة عن التصيّد، كلمات المرور القوية، والتصفح الآمن — لقارئٍ غير تقني.",
    },
    learned: {
      en: "How to translate technical risk into plain language, and how clear UI helps people make safer choices.",
      ar: "كيف أحوّل المخاطر التقنية إلى لغةٍ بسيطة، وكيف تساعد الواجهة الواضحة على قرارات أأمن.",
    },
    tools: ["HTML", "CSS", "JavaScript"],
    story: {
      en: "The idea came after a relative of mine almost lost money to a fake delivery SMS. I sat with her, explained what phishing was, and she asked, 'Why doesn't anyone teach us this in a way we understand?' That question stayed with me. I built a small awareness site with short lessons, real Arabic examples, and zero jargon. The challenge was resisting the urge to sound impressive — every time I caught myself using a technical word, I rewrote the sentence. I learned that security isn't really about tools; it's about giving people enough understanding to feel confident.",
      ar: "جاءت الفكرة بعد أن كادت قريبتي تفقد مالها بسبب رسالة شحن مزيفة. جلست معها وشرحت لها ما هو التصيّد، فسألتني: «لماذا لا يعلّمنا أحدٌ هذا بطريقة نفهمها؟» بقي السؤال معي. بنيت موقع توعية صغيراً بدروس قصيرة، وأمثلة عربية واقعية، وبلا مصطلحات معقّدة. التحدّي كان مقاومة الرغبة في أن أبدو «مثيرة للإعجاب» — كلما ضبطت نفسي أستخدم كلمة تقنية، أعدت كتابة الجملة. تعلّمت أن الأمن ليس أدوات بقدر ما هو منح الناس فهماً كافياً ليشعروا بالثقة.",
    },
  },
  {
    id: "tool",
    title: { en: "Password Strength Checker", ar: "أداة فحص قوة كلمة المرور" },
    short: {
      en: "A tiny browser tool that scores password strength in real time.",
      ar: "أداة صغيرة في المتصفح تقيس قوة كلمة المرور لحظياً.",
    },
    idea: {
      en: "An honest, offline checker — no servers, no logging — that explains why a password is weak.",
      ar: "مدقّق صادق يعمل بلا خادم وبلا تسجيل، ويشرح لماذا كلمة المرور ضعيفة.",
    },
    learned: {
      en: "Entropy basics, common-password lists, and that the friendliest UX is one that respects privacy.",
      ar: "أساسيات الإنتروبي، وقوائم كلمات المرور الشائعة، وأن أرقى تجربة هي التي تحترم الخصوصية.",
    },
    tools: ["HTML", "CSS", "JavaScript"],
    story: {
      en: "I built this because I was tired of online password checkers that ask you to type your real password into a stranger's server. It felt like asking someone to test your house keys by handing them over. So I made a small one that runs entirely in the browser — nothing is sent anywhere. The hard part wasn't the math; it was the feedback. A red bar saying 'weak' helps no one. I rewrote the messages until they sounded like a friend gently pointing out what to fix. I learned that security tools are only as useful as the trust they earn.",
      ar: "بنيتها لأنني سئمت من المدقّقات التي تطلب منك كتابة كلمة مرورك الحقيقية في خادم غريب. شعرتُ كأنها تطلب منك أن تختبر مفاتيح بيتك بتسليمها لشخصٍ آخر. فصنعتُ أداة تعمل بالكامل داخل المتصفح — لا شيء يُرسَل إلى أي مكان. الصعوبة لم تكن في الحساب، بل في طريقة الرد. شريط أحمر يقول «ضعيفة» لا يفيد أحداً. أعدت كتابة الرسائل حتى صارت كصديقةٍ تنبّهك بلطف لما يجب إصلاحه. تعلّمت أن أدوات الأمن لا تساوي شيئاً بدون الثقة التي تكسبها.",
    },
  },
];

export function pick<T>(obj: { en: T; ar: T }, lang: Lang): T {
  return obj[lang];
}
