import { ArrowRight, CheckCircle } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const industries = [
  {
    title: "Sales Teams",
    desc: "Boost productivity with visit tracking, territory visibility, and performance insights.",
    image: "/images/indus1.jpg",
    points: ["Visit tracking", "Territory coverage", "Sales analytics"],
  },
  {
    title: "Delivery & Logistics",
    desc: "Track deliveries, optimize routes, and monitor fleet movement in real time.",
    image: "/images/indus2.jpg",
    points: ["Live tracking", "Route optimization", "Delivery proof"],
  },
  {
    title: "Service & Maintenance",
    desc: "Manage technicians, job assignments, and service reports seamlessly.",
    image: "/images/indus3.png",
    points: ["Job scheduling", "On-site reports", "Technician tracking"],
  },
  {
    title: "Construction",
    desc: "Monitor site attendance and workforce movement across locations.",
    image: "/images/indus4.webp",
    points: ["Site attendance", "Multi-location teams", "Daily logs"],
  },
  {
    title: "Healthcare Field Staff",
    desc: "Support secure home visits and medical field operations.",
    image: "/images/indus5.jpg",
    points: ["Secure tracking", "Visit compliance", "Activity history"],
  },
  {
    title: "Real Estate",
    desc: "Track agent visits, site engagement, and client interactions.",
    image: "/images/indus6.jpeg",
    points: ["Agent movement", "Visit history", "Lead accountability"],
  },
];

export default function Industries() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className="relative bg-bgLight min-h-screen py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-6 py-1.5 text-sm font-medium">
            Industries
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Built for field-driven industries
          </h1>

          <p className="mt-6 text-lg text-textSecondary">
            From sales to service, FFM Pro adapts to how your teams work in the field.
          </p>
        </div>

        {/* INDUSTRY CARDS */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              className={`group relative rounded-3xl bg-white/90 backdrop-blur-xl border border-borderLight shadow-xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition">
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    Explore use cases <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-textPrimary">
                  {industry.title}
                </h3>

                <p className="mt-3 text-textSecondary text-sm leading-relaxed">
                  {industry.desc}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-2">
                  {industry.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-textSecondary">
                      <CheckCircle size={14} className="text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-36 text-center transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl font-bold text-textPrimary">
            Don’t see your industry?
          </h2>

          <p className="mt-6 text-lg text-textSecondary">
            FFM Pro is flexible and customizable for unique operational needs.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-12 py-3.5 text-white font-medium hover:bg-primaryDark hover:shadow-xl transition-all active:scale-95">
            Talk to an expert →
          </button>
        </div>

      </div>
    </section>
  );
}
