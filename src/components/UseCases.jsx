import {
  Briefcase,
  Truck,
  Wrench,
  HardHat,
  Stethoscope,
  Home,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const useCases = [
  {
    title: "Sales Teams",
    desc: "Track visits, improve accountability, and increase field sales efficiency.",
    icon: Briefcase,
  },
  {
    title: "Delivery & Logistics",
    desc: "Monitor routes, reduce delays, and ensure on-time deliveries.",
    icon: Truck,
  },
  {
    title: "Service & Maintenance",
    desc: "Assign jobs, track service teams, and close tickets faster.",
    icon: Wrench,
  },
  {
    title: "Construction",
    desc: "Track on-site teams and manage workforce across multiple locations.",
    icon: HardHat,
  },
  {
    title: "Healthcare Field Staff",
    desc: "Coordinate medical visits with real-time location and attendance.",
    icon: Stethoscope,
  },
  {
    title: "Real Estate",
    desc: "Track site visits, manage agents, and improve operational visibility.",
    icon: Home,
  },
];

export default function UseCases() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} className="relative bg-bgLight py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary tracking-tight">
            Built for every field-driven business
          </h2>
          <p className="text-textSecondary mt-5 text-lg">
            Purpose-built solutions for teams that operate beyond the office.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <div
                key={u.title}
                className={`group relative rounded-3xl bg-white border border-borderLight p-10 transition-all duration-700 delay-${i * 100} ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Hover gradient */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-accent/10" />

                {/* Icon */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-lg font-semibold text-textPrimary">
                  {u.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-textSecondary">
                  {u.desc}
                </p>

                {/* CTA */}
                <span className="relative z-10 mt-6 inline-flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all">
                  Learn more →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
