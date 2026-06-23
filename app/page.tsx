"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const services = [
  { title: "Stress va xavotir", desc: "Ichki bosimni kamaytirish va balans topish.", icon: "🧠" },
  { title: "Oilaviy maslahat", desc: "Munosabatlarni sog‘lomlashtirish.", icon: "💬" },
  { title: "Shaxsiy rivojlanish", desc: "O‘ziga ishonchni oshirish.", icon: "🌱" },
  { title: "Onlayn qabul", desc: "Video yoki telefon orqali konsultatsiya.", icon: "💻" },
];

const variants = [
  { title: "100% maxfiylik", desc: "Mijoz ma’lumotlari himoyalangan.", icon: "🔒" },
  { title: "Professional yondashuv", desc: "Tinch va ishonchli xizmat.", icon: "🧩" },
  { title: "UZB / ENG", desc: "Ikki tilda qulay foydalanish.", icon: "🌐" },
  { title: "Dark mode", desc: "Ko‘zga qulay qorong‘i rejim.", icon: "🌙" },
  { title: "Responsive", desc: "Telefon, planshet, kompyuterga mos.", icon: "📱" },
  { title: "Animatsiya", desc: "Sahifa jonli va silliq ko‘rinadi.", icon: "✨" },
  { title: "Tez yozilish", desc: "Formani to‘ldirib tez qabulga yoziling.", icon: "⚡" },
  { title: "Premium dizayn", desc: "Sotishga tayyor zamonaviy ko‘rinish.", icon: "💎" },
];

const testimonials = [
  { name: "Dilnoza", text: "Juda chiroyli va ishonchli dizayn." },
  { name: "Javlon", text: "Animatsiyalar ajoyib, premium ko‘rinadi." },
  { name: "Malika", text: "Mobil versiyasi ham juda zo‘r ishlayapti." },
];

const faqs = [
  { q: "Qanday yozilish mumkin?", a: "Formani to‘ldirasiz yoki aloqa qilasiz." },
  { q: "Onlayn qabul bormi?", a: "Ha, video yoki telefon orqali bor." },
  { q: "Til almashtirish bormi?", a: "Ha, UZB va ENG mavjud." },
  { q: "Sayt responsive mi?", a: "Ha, barcha ekranlarga mos." },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Page() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<"uz" | "en">("uz");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    const savedLang = localStorage.getItem("lang") as "uz" | "en" | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  const switchLang = (value: "uz" | "en") => {
    setLang(value);
    localStorage.setItem("lang", value);
  };

  const t = {
    uz: {
      nav1: "Xizmatlar",
      nav2: "Afzalliklar",
      nav3: "Fikrlar",
      nav4: "FAQ",
      nav5: "Yozilish",
      heroBadge: "Professional psixologik yordam",
      heroTitle: "Ichki xotirjamlik uchun zamonaviy yozilish sayti",
      heroDesc: "Stress, xavotir va shaxsiy rivojlanish uchun premium platforma.",
      cta1: "Qabulga yozilish",
      cta2: "Xizmatlarni ko‘rish",
      servicesTitle: "Xizmatlar",
      benefitsTitle: "Nega aynan bu sayt?",
      testimonialsTitle: "Mijoz fikrlari",
      pricingTitle: "Narxlar",
      faqTitle: "Ko‘p so‘raladigan savollar",
      bookingTitle: "Qabulga yozilish",
      footerText: "MindCare — premium psixolog yozilish platformasi.",
    },
    en: {
      nav1: "Services",
      nav2: "Benefits",
      nav3: "Reviews",
      nav4: "FAQ",
      nav5: "Booking",
      heroBadge: "Professional psychological support",
      heroTitle: "A modern booking website for inner peace",
      heroDesc: "A premium platform for stress, anxiety, and personal growth.",
      cta1: "Book now",
      cta2: "View services",
      servicesTitle: "Services",
      benefitsTitle: "Why this website?",
      testimonialsTitle: "Client feedback",
      pricingTitle: "Pricing",
      faqTitle: "Frequently asked questions",
      bookingTitle: "Book an appointment",
      footerText: "MindCare — a premium psychologist booking platform.",
    },
  }[lang];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8fc] text-slate-900 transition-colors duration-300 dark:bg-[#0a0f1c] dark:text-white">
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/40 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0a0f1c]/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#" className="text-lg font-black tracking-tight">
            MindCare
          </a>

          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-300">{t.nav1}</a>
            <a href="#benefits" className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-300">{t.nav2}</a>
            <a href="#testimonials" className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-300">{t.nav3}</a>
            <a href="#faq" className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-300">{t.nav4}</a>
            <a href="#booking" className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-300">{t.nav5}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
              <button
                onClick={() => switchLang("uz")}
                className={`rounded-full px-3 py-1 text-sm transition ${lang === "uz" ? "bg-violet-600 text-white shadow" : "text-slate-600 dark:text-slate-300"}`}
              >
                UZB
              </button>
              <button
                onClick={() => switchLang("en")}
                className={`rounded-full px-3 py-1 text-sm transition ${lang === "en" ? "bg-violet-600 text-white shadow" : "text-slate-600 dark:text-slate-300"}`}
              >
                ENG
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-violet-500 dark:border-slate-700 dark:bg-slate-900/70"
            >
              {dark ? "Light" : "Dark"}
            </button>

            <a
              href="#booking"
              className="hidden rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition hover:scale-105 hover:bg-violet-500 md:inline-flex"
            >
              {t.nav5}
            </a>
          </div>
        </div>
      </header>

      <div className="h-20 md:h-24" />

      <section className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex rounded-full border border-violet-500/15 bg-violet-500/10 px-4 py-1 text-sm text-violet-700 dark:text-violet-300">
              {t.heroBadge}
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {t.heroDesc}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-full bg-violet-600 px-6 py-3 text-center font-medium text-white shadow-lg shadow-violet-600/20 transition hover:scale-105 hover:bg-violet-500 hover:shadow-violet-500/25"
              >
                {t.cta1}
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-center font-medium text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white"
              >
                {t.cta2}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="rounded-[2rem] border border-white/50 bg-white/55 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/20"
          >
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm dark:bg-slate-950">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-100/80 p-4 transition hover:scale-[1.02] dark:bg-slate-800/80">1000+ mijoz</div>
                <div className="rounded-2xl bg-slate-100/80 p-4 transition hover:scale-[1.02] dark:bg-slate-800/80">5+ yil tajriba</div>
                <div className="rounded-2xl bg-slate-100/80 p-4 transition hover:scale-[1.02] dark:bg-slate-800/80">24/7 support</div>
                <div className="rounded-2xl bg-slate-100/80 p-4 transition hover:scale-[1.02] dark:bg-slate-800/80">UZB / ENG</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 py-10 md:px-8"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20">
            <p className="text-3xl font-black text-violet-600">1000+</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Mijozlar</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20">
            <p className="text-3xl font-black text-violet-600">5+</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Yil tajriba</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20">
            <p className="text-3xl font-black text-violet-600">24/7</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Qo‘llab-quvvatlash</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 py-20 md:px-8"
      >
        <h2 className="text-3xl font-bold md:text-4xl">{t.servicesTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="benefits"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 py-20 md:px-8"
      >
        <h2 className="text-3xl font-bold md:text-4xl">{t.benefitsTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {variants.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="testimonials"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 py-20 md:px-8"
      >
        <h2 className="text-3xl font-bold md:text-4xl">{t.testimonialsTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((tst, i) => (
            <motion.div
              key={tst.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20"
            >
              <p className="text-slate-600 dark:text-slate-300">“{tst.text}”</p>
              <p className="mt-4 font-semibold">{tst.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="pricing"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 py-20 md:px-8"
      >
        <h2 className="text-3xl font-bold md:text-4xl">{t.pricingTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { name: "Basic", price: "150 000 so‘m", list: ["1 konsultatsiya", "Chat support", "Email follow-up"] },
            { name: "Pro", price: "350 000 so‘m", list: ["4 sessiya", "Priority booking", "Personal plan"] },
            { name: "Premium", price: "650 000 so‘m", list: ["8 sessiya", "24/7 support", "VIP yondashuv"] },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-[1.75rem] border border-white/50 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-3xl font-black text-violet-600">{p.price}</p>
              <ul className="mt-6 grid gap-3 text-slate-600 dark:text-slate-300">
                {p.list.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="faq"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-4xl px-4 py-20 md:px-8"
      >
        <h2 className="text-3xl font-bold md:text-4xl">{t.faqTitle}</h2>
        <div className="mt-10 grid gap-4">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="rounded-[1.25rem] border border-white/50 bg-white/80 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20"
            >
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="booking"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-3xl px-4 py-20 md:px-8"
      >
        <div className="rounded-[2rem] border border-white/50 bg-white/80 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/20">
          <h2 className="text-3xl font-bold">{t.bookingTitle}</h2>
          <form className="mt-8 grid gap-4">
            <input className="rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950/60" placeholder={lang === "uz" ? "Ismingiz" : "Your name"} />
            <input className="rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950/60" placeholder={lang === "uz" ? "Telefon raqam" : "Phone number"} />
            <div className="grid gap-4 md:grid-cols-2">
              <input type="date" className="rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950/60" />
              <input type="time" className="rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950/60" />
            </div>
            <textarea className="min-h-32 rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950/60" placeholder={lang === "uz" ? "Izoh" : "Message"} />
            <button className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/20 transition hover:scale-[1.02] hover:bg-violet-500">
              {t.cta1}
            </button>
          </form>
        </div>
      </motion.section>

      <footer className="border-t border-slate-200/80 px-4 py-10 dark:border-slate-800 md:px-8">
        <div className="mx-auto max-w-7xl text-center text-slate-600 dark:text-slate-300">
          <p className="font-medium text-slate-900 dark:text-white">MindCare</p>
          <p className="mt-2">{t.footerText}</p>
        </div>
      </footer>
    </main>
  );
}