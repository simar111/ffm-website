import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    title: "Performance Dashboards",
    desc: "Get real-time dashboards with KPIs across attendance, tasks, and productivity.",
    icon: BarChart3,
  },
  {
    title: "Trend Analysis",
    desc: "Identify patterns in workforce behavior, delays, and efficiency over time.",
    icon: LineChart,
  },
  {
    title: "Workforce Breakdown",
    desc: "Visualize performance by team, region, employee, or project.",
    icon: PieChart,
  },
  {
    title: "Productivity Metrics",
    desc: "Measure task completion rates, active hours, and idle time accurately.",
    icon: TrendingUp,
  },
  {
    title: "Downloadable Reports",
    desc: "Export reports in Excel or PDF for audits, reviews, and leadership meetings.",
    icon: FileText,
  },
  {
    title: "Audit-Ready Data",
    desc: "Maintain secure, tamper-proof logs for compliance and governance.",
    icon: ShieldCheck,
  },
];

export default function ReportsInsights() {
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
            Reports & Insights
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Turn field data into
            <span className="block text-primary">
              actionable business insights
            </span>
          </h1>

          <p className="mt-6 text-lg text-textSecondary leading-relaxed">
            Gain complete visibility into workforce performance with powerful
            reports, visual dashboards, and real-time analytics.
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
              Make smarter decisions with real-time analytics
            </h2>

            <p className="mt-6 text-textSecondary leading-relaxed">
              FFM Pro consolidates field data into intuitive dashboards that help
              managers identify gaps, optimize operations, and improve outcomes.
            </p>

            <ul className="mt-8 space-y-4 text-textSecondary">
              <li>✔ Real-time operational visibility</li>
              <li>✔ Faster data-driven decisions</li>
              <li>✔ Reduced manual reporting effort</li>
              <li>✔ Clear accountability across teams</li>
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
              Business impact
            </p>

            <p className="mt-4 text-2xl font-bold text-textPrimary">
              Improve operational efficiency by up to 35%
            </p>

            <p className="mt-4 text-textSecondary leading-relaxed">
              Automated reporting and actionable insights help leadership
              focus on strategy instead of spreadsheets.
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
            Ready to unlock powerful insights?
          </h2>

          <p className="mt-6 text-lg text-textSecondary">
            Transform raw field data into clarity and control.
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
