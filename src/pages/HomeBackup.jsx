import { useEffect, useState } from "react";
import UseCases from "../components/UseCases";
import Features from "../components/features";
import WhyChooseUs from "../components/whyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
const images = [
     "/images/map1.jpg",
  "/images/attendence1.png",
  "/images/dashboard2.png",
];

const stats = [
  { label: "Teams Managed", value: "10k+" },
  { label: "Live Locations", value: "1M+" },
  { label: "Tasks Completed", value: "5M+" },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
  <section className="relative overflow-hidden bg-bgLight">
  {/* Background layers */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
  <div className="absolute -top-32 -right-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
  <div className="absolute -bottom-32 -left-40 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-10">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-5 py-1.5 text-sm font-medium">
        🚀 Field Force Management Platform
      </span>

      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-textPrimary leading-tight">
        Manage your field workforce
        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          with complete visibility
        </span>
      </h1>

      <p className="text-lg text-textSecondary max-w-xl leading-relaxed">
        Track attendance, monitor live locations, assign tasks, and analyze
        performance — all from a single powerful dashboard built for modern
        field teams.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-5">
        <button className="relative overflow-hidden rounded-xl bg-primary px-9 py-3.5 text-white font-medium transition-all hover:bg-primaryDark hover:shadow-xl active:scale-95">
          Get Started
        </button>

        <button className="rounded-xl border border-borderLight bg-white px-9 py-3.5 font-medium text-textPrimary hover:bg-bgLight transition">
          Request Demo
        </button>
      </div>

      {/* Trust stats */}
      <div className="flex items-center gap-10 pt-6">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-bold text-textPrimary">
              {item.value}
            </p>
            <p className="text-sm text-textSecondary">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="relative">
      <div className="relative h-[460px] w-full rounded-3xl bg-white shadow-2xl overflow-hidden border border-borderLight">

        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="FFM dashboard preview"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              i === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-primary w-8"
                : "bg-borderLight w-2"
            }`}
          />
        ))}
      </div>

      {/* Floating insight */}
      <div className="absolute -bottom-14 -left-10 bg-white/90 backdrop-blur-md border border-borderLight rounded-2xl px-6 py-4 shadow-xl">
        <p className="text-sm font-semibold text-textPrimary">
          📍 Live Workforce Tracking
        </p>
        <p className="text-xs text-textSecondary mt-1">
          Real-time visibility with smart alerts
        </p>
      </div>
    </div>

  </div>
</section>

    <Features />
      <WhyChooseUs />
    <HowItWorks />
    <Testimonials />
    <UseCases />
  
    </>
  );
}
