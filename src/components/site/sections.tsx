import {
  ArrowLeft,
  BadgeCheck,
  Clock,
  CreditCard,
  Headphones,
  Hotel,
  Plane,
  Palmtree,
  ShieldCheck,
  Car,
  Stamp,
  Umbrella,
  Star,
} from "lucide-react";
import { Reveal } from "./reveal";
import istanbul from "@/assets/dest-istanbul.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import paris from "@/assets/dest-paris.jpg";
import london from "@/assets/dest-london.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import tokyo from "@/assets/dest-tokyo.jpg";
import cabin from "@/assets/experience-cabin.jpg";

export function SectionHeading({
  title,
  text,
  align = "center",
}: {
  title: string;
  text?: string;
  align?: "center" | "start";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <Reveal>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={120}>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">{text}</p>
        </Reveal>
      )}
    </div>
  );
}

const destinations = [
  { name: "استانبول", country: "ترکیه", price: "۹,۹۰۰,۰۰۰", img: istanbul },
  { name: "دبی", country: "امارات", price: "۱۴,۵۰۰,۰۰۰", img: dubai },
  { name: "پاریس", country: "فرانسه", price: "۳۸,۲۰۰,۰۰۰", img: paris },
  { name: "لندن", country: "انگلستان", price: "۴۱,۷۰۰,۰۰۰", img: london },
  { name: "مالدیو", country: "مالدیو", price: "۴۹,۹۰۰,۰۰۰", img: maldives },
  { name: "توکیو", country: "ژاپن", price: "۵۶,۴۰۰,۰۰۰", img: tokyo },
];

export function Destinations() {
  return (
    <section id="destinations" className="px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="مقصد بعدی شما کجاست؟"
          text="از شهرهای پرهیجان دنیا تا آرام‌ترین سواحل، مقصد مورد علاقه‌تان را پیدا کنید."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 90} as="article">
              <a
                href="#packages"
                className="group relative block h-[26rem] overflow-hidden rounded-[2rem] shadow-soft transition-all duration-700 hover:-translate-y-2 hover:shadow-float"
              >
                <img
                  src={d.img}
                  alt={`سفر به ${d.name}`}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2436]/85 via-[#0b2436]/15 to-transparent transition-opacity duration-500 group-hover:from-[#0b2436]/90" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-right">
                  <p className="text-xs text-white/70">{d.country}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{d.name}</h3>
                  <p className="mt-2 text-sm text-white/80">شروع از {d.price} تومان</p>
                  <span className="mt-4 flex max-h-0 items-center gap-2 overflow-hidden text-sm text-white opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                    مشاهده مقصد
                    <ArrowLeft className="size-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Plane, title: "رزرو بلیط هواپیما", text: "پروازهای داخلی و خارجی با بهترین نرخ لحظه‌ای." },
  { icon: Palmtree, title: "تورهای مسافرتی", text: "تورهای گروهی و اختصاصی با برنامه‌ریزی کامل." },
  { icon: Hotel, title: "رزرو هتل", text: "بیش از ۳۰۰ هزار اقامتگاه در سراسر جهان." },
  { icon: Stamp, title: "خدمات ویزا", text: "مشاوره و پیگیری تخصصی تا صدور روادید." },
  { icon: Umbrella, title: "بیمه مسافرتی", text: "پوشش کامل درمانی و حوادث در طول سفر." },
  { icon: Car, title: "ترانسفر فرودگاهی", text: "استقبال و انتقال اختصاصی در مبدا و مقصد." },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/60 px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="همه چیز برای یک سفر بی‌دغدغه" />
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group h-full bg-background p-10 transition-colors duration-500 hover:bg-card">
                <s.icon
                  className="size-6 text-primary transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.3}
                />
                <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: CreditCard, title: "قیمت‌های رقابتی" },
  { icon: Clock, title: "رزرو سریع و آسان" },
  { icon: Headphones, title: "پشتیبانی ۲۴ ساعته" },
  { icon: ShieldCheck, title: "پرداخت امن" },
  { icon: Plane, title: "همکاری با ایرلاین‌های معتبر" },
  { icon: BadgeCheck, title: "خدمات پس از فروش" },
];

export function WhyUs() {
  return (
    <section id="about" className="px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading
          align="start"
          title="سفر، وقتی بهتر است که خیالتان راحت باشد"
          text="از لحظه‌ی جستجو تا بازگشت به خانه، تیم ما کنار شماست تا تنها به لذت سفر فکر کنید."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80} as="li">
              <div className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <r.icon className="size-5" strokeWidth={1.4} />
                </span>
                <span className="text-sm font-medium text-foreground">{r.title}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-secondary/70 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="flex h-full flex-col justify-center p-10 sm:p-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">بیشتر از یک بلیط، یک تجربه</h2>
            <p className="mt-6 text-sm text-muted-foreground sm:text-base">
              ما فقط بلیط نمی‌فروشیم. از انتخاب مقصد و طراحی مسیر سفر تا اقامت، ترانسفر، بیمه و
              پیشنهادهای محلی، تمام جزئیات سفر شما را طراحی می‌کنیم تا تجربه‌ای یکپارچه و آرام داشته
              باشید.
            </p>
            <a
              href="#services"
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
            >
              مشاهده خدمات
              <ArrowLeft className="size-4" />
            </a>
          </div>
        </Reveal>
        <div className="order-1 min-h-[22rem] overflow-hidden lg:order-2">
          <img
            src={cabin}
            alt="کابین لوکس هواپیما"
            loading="lazy"
            width={1400}
            height={1000}
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const airlines = [
  "Emirates",
  "Qatar Airways",
  "Turkish Airlines",
  "Lufthansa",
  "Air France",
  "Singapore Airlines",
];

export function Partners() {
  return (
    <section className="overflow-hidden py-24">
      <p className="mb-10 text-center text-xs tracking-widest text-muted-foreground">
        همکار ایرلاین‌های معتبر جهان
      </p>
      <div className="relative">
        <div className="flex w-max animate-drift gap-20 px-10" dir="ltr">
          {[...airlines, ...airlines].map((a, i) => (
            <span
              key={`${a}-${i}`}
              className="whitespace-nowrap text-xl font-semibold tracking-wide text-muted-foreground/45 transition-colors duration-500 hover:text-foreground sm:text-2xl"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const packages = [
  {
    title: "تور رویایی مالدیو",
    duration: "۷ شب و ۸ روز",
    hotel: "هتل ۵ ستاره ساحلی، همراه صبحانه",
    rating: "۴.۹",
    price: "از ۴۹,۹۰۰,۰۰۰ تومان",
    img: maldives,
  },
  {
    title: "تور استانبول",
    duration: "۴ شب و ۵ روز",
    hotel: "هتل ۴ ستاره تکسیم، همراه صبحانه",
    rating: "۴.۷",
    price: "از ۲۱,۴۰۰,۰۰۰ تومان",
    img: istanbul,
  },
  {
    title: "تور دبی",
    duration: "۳ شب و ۴ روز",
    hotel: "هتل ۵ ستاره مارینا، همراه صبحانه",
    rating: "۴.۸",
    price: "از ۲۹,۸۰۰,۰۰۰ تومان",
    img: dubai,
  },
];

export function Packages() {
  return (
    <section id="packages" className="px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="تورهای منتخب فصل" text="بسته‌های کامل سفر با اقامت، پرواز و خدمات اختصاصی." />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} as="article">
              <div className="group overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-float">
                <div className="h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="size-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="size-3.5 fill-primary text-primary" />
                      {p.rating}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{p.duration}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.hotel}</p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
                    <span className="text-sm font-semibold text-foreground">{p.price}</span>
                    <span className="rounded-2xl bg-accent px-5 py-2.5 text-xs font-medium text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      مشاهده تور
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
