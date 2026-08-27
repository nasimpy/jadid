import { useEffect, useState } from "react";
import { Menu, Plane, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "صفحه اصلی", href: "#hero" },
  { label: "بلیط هواپیما", href: "#search" },
  { label: "تورها", href: "#packages" },
  { label: "مقاصد", href: "#destinations" },
  { label: "خدمات", href: "#services" },
  { label: "درباره ما", href: "#about" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-3xl px-5 py-3 transition-all duration-500",
          scrolled ? "glass-solid shadow-soft" : "glass",
        )}
      >
        <a href="#hero" className="flex items-center gap-2.5">
          <span
            className={cn(
              "flex size-9 items-center justify-center rounded-2xl bg-primary transition-colors",
              !scrolled && "bg-white/25",
            )}
          >
            <Plane className="size-4.5 -rotate-45 text-primary-foreground" />
          </span>
          <span
            className={cn(
              "text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            آسمان‌گرد
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative text-sm transition-colors after:absolute after:-bottom-1.5 after:right-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/85 hover:text-white",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#newsletter"
            className={cn(
              "text-sm transition-colors",
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/85 hover:text-white",
            )}
          >
            ورود / ثبت‌نام
          </a>
          <a
            href="#search"
            className={cn(
              "rounded-2xl px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
              scrolled
                ? "bg-primary text-primary-foreground shadow-soft hover:shadow-float"
                : "bg-white/90 text-foreground hover:bg-white",
            )}
          >
            رزرو بلیط
          </a>
        </div>

        <button
          aria-label="منو"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex size-10 items-center justify-center rounded-2xl transition-colors md:hidden",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-solid mx-auto mt-3 max-w-7xl rounded-3xl p-5 shadow-float md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-3 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#search"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-2xl bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            رزرو بلیط
          </a>
        </div>
      )}
    </header>
  );
}
