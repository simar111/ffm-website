import { Users, ListChecks, LineChart } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    step: "01",
    title: "Add Your Team",
    desc: "Invite employees, assign roles, and set permissions instantly.",
    icon: Users,
  },
  {
    step: "02",
    title: "Assign Tasks",
    desc: "Create tasks, routes, and schedules with full visibility.",
    icon: ListChecks,
  },
  {
    step: "03",
    title: "Track & Analyze",
    desc: "Monitor live activity and optimize performance with insights.",
    icon: LineChart,
  },
];

export default function HowItWorks() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} className="relative bg-white py-32 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary tracking-tight">
            How FFM Pro works
          </h2>
          <p className="text-textSecondary mt-5 text-lg">
            A simple, guided workflow designed for modern field operations.
          </p>
        </div>

        {/* Flow */}
        <div className="relative mt-24">

          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className={`relative text-center transition-all duration-700 delay-${i * 150} ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {/* Step bubble */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white border border-borderLight shadow-xl">
                    <div className="absolute -top-2 -right-2 text-xs font-bold bg-primary text-white px-2 py-1 rounded-full">
                      {s.step}
                    </div>
                    <Icon size={30} strokeWidth={1.75} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-lg font-semibold text-textPrimary">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-textSecondary max-w-xs mx-auto">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-20 text-center transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-white font-medium hover:bg-primaryDark transition-all active:scale-95">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}
