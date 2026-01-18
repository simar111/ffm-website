import {
  ClipboardList,
  CheckCircle,
  Map,
  Clock,
  Bell,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    title: "Task Assignment",
    desc: "Create and assign tasks instantly to individuals or teams with clear ownership.",
    icon: ClipboardList,
  },
  {
    title: "Real-Time Task Status",
    desc: "Track task progress live — pending, in-progress, or completed.",
    icon: CheckCircle,
  },
  {
    title: "Route & Visit Planning",
    desc: "Plan daily routes and customer visits to optimize field productivity.",
    icon: Map,
  },
  {
    title: "Time-Based Execution",
    desc: "Ensure tasks are completed within assigned time windows.",
    icon: Clock,
  },
  {
    title: "Smart Notifications",
    desc: "Automated reminders and alerts for missed or delayed tasks.",
    icon: Bell,
  },
  {
    title: "Operational Reports",
    desc: "Measure task efficiency, delays, and completion trends with insights.",
    icon: BarChart3,
  },
];

export default function TasksOperations() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className="relative bg-bgLight min-h-screen py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex rounded-full bg-primary/10 text-primary px-6 py-2 text-sm font-medium">
            Tasks & Operations
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Execute field operations
            <span className="block text-primary">
              with clarity and control
            </span>
          </h1>

          <p className="mt-6 text-lg text-textSecondary leading-relaxed">
            Plan, assign, track, and complete field tasks efficiently with
            real-time visibility and accountability across teams.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group rounded-3xl bg-white/90 backdrop-blur-xl
                border border-borderLight shadow-xl p-8 transition-all duration-700
                hover:-translate-y-2 hover:shadow-2xl ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl
                  bg-primary/10 text-primary mb-6">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-semibold text-textPrimary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-textSecondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* SPLIT SECTION */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl font-bold text-textPrimary">
              From planning to execution — all in one place
            </h2>

            <p className="mt-6 text-textSecondary leading-relaxed">
              FFM Pro helps managers plan daily operations while giving field
              teams clear instructions, timelines, and priorities.
            </p>

            <ul className="mt-8 space-y-4 text-textSecondary">
              <li>✔ Clear task ownership</li>
              <li>✔ Reduced execution delays</li>
              <li>✔ Higher task completion rates</li>
              <li>✔ Full operational transparency</li>
            </ul>
          </div>

          {/* Right Card */}
          <div
            className={`rounded-3xl bg-white p-12 border border-borderLight
            shadow-2xl transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-sm font-medium text-primary">
              Operational impact
            </p>

            <p className="mt-4 text-2xl font-bold text-textPrimary">
              Increase task completion by up to 40%
            </p>

            <p className="mt-4 text-textSecondary leading-relaxed">
              Automated task workflows and real-time monitoring reduce
              follow-ups, confusion, and operational bottlenecks.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-32 text-center transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl font-bold text-textPrimary">
            Ready to streamline field operations?
          </h2>

          <p className="mt-6 text-lg text-textSecondary">
            Plan smarter, execute faster, and deliver consistently.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-xl
            bg-primary px-10 py-3.5 text-white font-medium
            hover:bg-primaryDark hover:shadow-xl transition-all active:scale-95">
            Start Free Trial
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
