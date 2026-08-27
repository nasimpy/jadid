import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import {
  Destinations,
  Experience,
  Packages,
  Partners,
  Services,
  WhyUs,
} from "@/components/site/sections";
import {
  Faq,
  Footer,
  Inspiration,
  Newsletter,
  Stats,
  Testimonials,
} from "@/components/site/sections2";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "آسمان‌گرد | رزرو بلیط هواپیما و تورهای مسافرتی" },
      {
        name: "description",
        content:
          "رزرو آنلاین بلیط هواپیما، تورهای داخلی و خارجی، هتل، ویزا و بیمه مسافرتی با پشتیبانی ۲۴ ساعته آسمان‌گرد.",
      },
      { property: "og:title", content: "آسمان‌گرد | سفر بعدی شما از اینجا آغاز می‌شود" },
      {
        property: "og:description",
        content: "بلیط هواپیما، تورهای داخلی و خارجی و تجربه‌ای متفاوت از سفر.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div dir="rtl" lang="fa" className="overflow-x-hidden">
      <SiteNav />
      <main>
        <Hero />
        <Destinations />
        <Services />
        <WhyUs />
        <Experience />
        <Partners />
        <Packages />
        <Testimonials />
        <Stats />
        <Inspiration />
        <Newsletter />
        <div id="faq">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}
