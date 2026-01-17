import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Operations Manager",
    company: "LogiTrack Solutions",
    quote:
      "FFM Pro gave us complete control over our delivery workforce. Real-time tracking and reports reduced delays and improved accountability instantly.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Neha Sharma",
    role: "Field Operations Lead",
    company: "BuildRight Infra",
    quote:
      "Attendance accuracy and task visibility improved drastically. Our managers finally trust the data.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Rohit Mehta",
    role: "Sales Director",
    company: "MedReach",
    quote:
      "FFM Pro replaced spreadsheets and manual follow-ups. We now make faster, data-backed decisions.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featured = testimonials[active];
  const side = testimonials.filter((_, i) => i !== active);

  return (
    <section ref={ref} className="relative bg-bgLight py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-40 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex rounded-full bg-primary/10 text-primary px-6 py-1.5 text-sm font-medium">
            Customer stories
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-textPrimary">
            Trusted by high-performing field teams
          </h2>

          <p className="mt-6 text-lg text-textSecondary">
            See how businesses across industries use FFM Pro to manage,
            monitor, and scale their field operations.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

          {/* Featured */}
          <div
            key={featured.name}
            className={`relative lg:col-span-2 rounded-3xl bg-white/90 backdrop-blur-xl
              border border-borderLight shadow-2xl p-12
              transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <Quote size={72} className="absolute top-10 right-10 text-primary/10" />

            <p className="text-xl md:text-2xl font-medium text-textPrimary leading-relaxed max-w-2xl">
              “{featured.quote}”
            </p>

            <div className="mt-12 flex items-center gap-5">
              <img
                src={featured.image}
                alt={featured.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-textPrimary">
                  {featured.name}
                </p>
                <p className="text-sm text-textSecondary">
                  {featured.role} · {featured.company}
                </p>
              </div>
            </div>
          </div>

          {/* Side */}
          <div className="flex flex-col gap-8">
            {side.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white border border-borderLight shadow-lg p-8
                  transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm text-textPrimary leading-relaxed">
                  “{t.quote}”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-textPrimary">
                      {t.name}
                    </p>
                    <p className="text-xs text-textSecondary">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Indicators */}
        <div className="mt-14 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-primary"
                  : "w-2 bg-borderLight"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
