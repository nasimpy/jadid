import { ArrowLeft, Plane, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Counter, Reveal } from "./reveal";
import { SectionHeading } from "./sections";
import sky from "@/assets/sky-clouds.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const testimonials = [
  {
    name: "سارا محمدی",
    dest: "سفر به استانبول",
    text: "از رزرو تا بازگشت همه‌چیز دقیق و بی‌دردسر بود. پشتیبانی واقعاً شبانه‌روزی جواب می‌داد.",
    initial: "س",
  },
  {
    name: "امیر رضایی",
    dest: "سفر به دبی",
    text: "قیمت‌ها منصفانه و هتل دقیقاً همانی بود که معرفی کرده بودند. تجربه‌ای حرفه‌ای و آرام.",
    initial: "ا",
  },
  {
    name: "نگار کریمی",
    dest: "سفر به مالدیو",
    text: "ترانسفر فرودگاهی و برنامه‌ی سفر عالی طراحی شده بود؛ فقط از سفر لذت بردیم.",
    initial: "ن",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/60 px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="مسافرانی که به ما اعتماد کردند" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="glass-solid h-full rounded-[2rem] p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                    {t.initial}
                  </span>
                  <div>
                    <figcaption className="text-sm font-semibold text-foreground">{t.name}</figcaption>
                    <p className="text-xs text-muted-foreground">{t.dest}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t.text}</p>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: 250000, label: "مسافر راضی" },
  { value: 120, label: "مقصد گردشگری" },
  { value: 500, label: "مسیر پروازی" },
  { value: 15, label: "سال تجربه" },
];

export function Stats() {
  return (
    <section className="px-4 py-28 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="text-center">
              <p className="text-4xl font-bold text-foreground sm:text-5xl">
                <Counter value={s.value} />
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const articles = [
  { title: "بهترین زمان سفر به استانبول", meta: "۵ دقیقه مطالعه", img: blog1 },
  { title: "راهنمای سفر به دبی", meta: "۷ دقیقه مطالعه", img: blog2 },
  { title: "۱۰ مقصد رویایی برای سفر", meta: "۶ دقیقه مطالعه", img: blog3 },
  { title: "نکات مهم قبل از پرواز", meta: "۴ دقیقه مطالعه", img: blog4 },
];

export function Inspiration() {
  return (
    <section className="px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="الهام‌بخش سفر بعدی شما" />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 90} as="article">
              <a href="#newsletter" className="group block">
                <div className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={1000}
                    height={750}
                    className="aspect-4/3 w-full object-cover transition-transform duration-[1400ms] group-hover:scale-108"
                  />
                </div>
                <p className="mt-5 text-xs text-muted-foreground">{a.meta}</p>
                <h3 className="mt-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section id="newsletter" className="px-4 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
        <img
          src={sky}
          alt="آسمان آبی و ابرهای سفید"
          loading="lazy"
          width={1920}
          height={900}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-white/70" />
        <div className="relative px-6 py-24 text-center sm:py-32">
          <Reveal>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              مقصد بعدی‌تان را از دست ندهید
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
              با عضویت در خبرنامه، از جدیدترین پیشنهادهای سفر و قیمت‌های ویژه باخبر شوید.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-solid mx-auto mt-10 flex max-w-lg flex-col gap-2 rounded-3xl p-2 shadow-float sm:flex-row"
            >
              <input
                type="email"
                placeholder="آدرس ایمیل شما"
                className="flex-1 rounded-2xl bg-transparent px-5 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-2xl bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5">
                عضویت
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "چگونه بلیط هواپیما رزرو کنم؟",
    a: "کافی است مبدا، مقصد و تاریخ سفر را در فرم جستجو وارد کنید، پرواز مورد نظر را انتخاب و پرداخت را آنلاین تکمیل کنید. بلیط بلافاصله برای شما ارسال می‌شود.",
  },
  {
    q: "امکان استرداد بلیط وجود دارد؟",
    a: "بله، استرداد بر اساس قوانین ایرلاین و نوع نرخ بلیط انجام می‌شود. درخواست استرداد را می‌توانید از پنل کاربری یا از طریق پشتیبانی ثبت کنید.",
  },
  {
    q: "میزان بار مجاز پرواز چقدر است؟",
    a: "میزان بار مجاز بسته به ایرلاین و مسیر متفاوت است و معمولاً بین ۲۰ تا ۳۰ کیلوگرم بار و ۷ کیلوگرم بار دستی است. جزئیات در صفحه‌ی هر پرواز نمایش داده می‌شود.",
  },
  {
    q: "چگونه می‌توانم تور رزرو کنم؟",
    a: "تور مورد نظر را از بخش تورها انتخاب کنید و درخواست خود را ثبت نمایید؛ کارشناسان ما برای نهایی‌سازی جزئیات با شما تماس می‌گیرند.",
  },
  {
    q: "آیا امکان پرداخت آنلاین وجود دارد؟",
    a: "بله، تمام پرداخت‌ها از طریق درگاه‌های بانکی معتبر و امن انجام می‌شود.",
  },
  {
    q: "پشتیبانی در چه ساعاتی فعال است؟",
    a: "تیم پشتیبانی ما به صورت ۲۴ ساعته و در تمام روزهای هفته پاسخگوی شماست.",
  },
];

export function Faq() {
  return (
    <section className="px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="سوالات متداول" />
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-14 w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-right text-sm font-medium text-foreground hover:no-underline sm:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

const footerLinks = [
  { label: "درباره ما", href: "#about" },
  { label: "خدمات", href: "#services" },
  { label: "مقاصد", href: "#destinations" },
  { label: "تورها", href: "#packages" },
  { label: "سوالات متداول", href: "#faq" },
  { label: "تماس با ما", href: "#newsletter" },
];

const socials = ["اینستاگرام", "تلگرام", "لینکدین", "واتس‌اپ"];

export function Footer() {
  return (
    <footer className="mt-10 bg-gradient-to-b from-accent to-secondary/40 px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-2xl bg-primary">
                <Plane className="size-4.5 -rotate-45 text-primary-foreground" />
              </span>
              <span className="text-lg font-bold text-foreground">آسمان‌گرد</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              آژانس هواپیمایی و گردشگری آسمان‌گرد؛ همراه شما از اولین جستجو تا آخرین لحظه‌ی سفر.
            </p>
          </div>
          <nav>
            <h3 className="text-sm font-semibold text-foreground">دسترسی سریع</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold text-foreground">شبکه‌های اجتماعی</h3>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s}>
                  <a
                    href="#hero"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowLeft className="size-3.5" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-8 text-center text-xs text-muted-foreground">
          تمامی حقوق این وب‌سایت محفوظ است.
        </div>
      </div>
    </footer>
  );
}
