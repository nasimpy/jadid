import { ArrowLeftRight, CalendarDays, MapPin, Search, Users } from "lucide-react";

import { Reveal } from "./reveal";

function Field({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="group flex-1 cursor-pointer rounded-2xl px-4 py-3 transition-colors hover:bg-accent/60">
      <div className="mb-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Icon className="size-3.5" />
        {label}
      </div>
      <div className="text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="relative h-[100svh] w-full overflow-hidden">
        <video
          className="absolute inset-0 size-full object-cover"
          src="media/hero-sky.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2436]/55 via-[#0b2436]/25 to-[#0b2436]/65" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="glass rounded-full px-5 py-2 text-xs text-white/90">
              پرواز، تور و اقامت — با یک تجربه‌ی یکپارچه
            </span>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="text-shadow-hero mt-7 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              سفر بعدی شما، از اینجا آغاز می‌شود
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <p className="text-shadow-hero mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
              بلیط هواپیما، تورهای داخلی و خارجی و تجربه‌ای متفاوت از سفر را با ما تجربه کنید.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#search"
                className="rounded-2xl bg-white px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
              >
                رزرو بلیط
              </a>
              <a
                href="#destinations"
                className="glass rounded-2xl px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                کشف مقاصد
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating flight search */}
      <div id="search" className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:-mt-20 sm:px-6">
        <Reveal>
          <div className="glass-solid rounded-[2rem] p-4 shadow-float sm:p-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <div className="flex flex-1 flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                <Field label="مبدا" value="تهران (THR)" icon={MapPin} />
                <button
                  aria-label="جابه‌جایی مبدا و مقصد"
                  className="mx-auto flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:rotate-180 hover:text-primary"
                >
                  <ArrowLeftRight className="size-4" />
                </button>
                <Field label="مقصد" value="استانبول (IST)" icon={MapPin} />
                <span className="hidden h-10 w-px bg-border lg:block" />
                <Field label="تاریخ رفت" value="۱۲ شهریور" icon={CalendarDays} />
                <Field label="تاریخ برگشت" value="۱۹ شهریور" icon={CalendarDays} />
                <span className="hidden h-10 w-px bg-border lg:block" />
                <Field label="مسافران" value="۲ بزرگسال" icon={Users} />
                <Field label="کلاس پروازی" value="اکونومی" icon={Users} />
              </div>
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float">
                <Search className="size-4" />
                جستجوی پرواز
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
