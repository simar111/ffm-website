import {
  Users,
  UserCheck,
  Shield,
  Settings,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    title: "Employee Profiles",
    desc: "Maintain complete employee records including role, reporting manager, documents, and activity history.",
    icon: Users,
  },
  {
    title: "Roles & Permissions",
    desc: "Define granular access levels for admins, managers, and field staff to ensure data security.",
    icon: Shield,
  },
  {
    title: "Team Hierarchies",
    desc: "Organize employees into teams, regions, and reporting structures with ease.",
    icon: UserCheck,
  },
  {
    title: "Custom Workflows",
    desc: "Configure workflows that match your business operations and approval processes.",
    icon: Settings,
  },
  {
    title: "Performance Insights",
    desc: "Track productivity, attendance trends, and task efficiency from a single dashboard.",
    icon: BarChart3,
  },
];

export default function WorkforceManagement() {
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
            Workforce Management
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Manage your workforce
            <span className="block text-primary">
              with structure, clarity & control
            </span>
          </h1>

          <p className="mt-6 text-lg text-textSecondary leading-relaxed">
            Centralize employee data, define clear roles, and gain complete
            visibility into your field workforce — all from one powerful platform.
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
              Built for growing field teams
            </h2>

            <p className="mt-6 text-textSecondary leading-relaxed">
              Whether you manage 10 employees or 10,000, FFM Pro scales effortlessly
              with your organization. Easily onboard new hires, assign managers,
              and restructure teams without operational disruption.
            </p>

            <ul className="mt-8 space-y-4 text-textSecondary">
              <li>✔ Centralized employee database</li>
              <li>✔ Flexible team structures</li>
              <li>✔ Secure role-based access</li>
              <li>✔ Actionable workforce insights</li>
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
              Trusted by operations teams
            </p>

            <p className="mt-4 text-2xl font-bold text-textPrimary">
              Reduce admin workload by up to 40%
            </p>

            <p className="mt-4 text-textSecondary leading-relaxed">
              Automate workforce management tasks and free your managers
              to focus on execution and performance — not spreadsheets.
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
            Ready to simplify workforce management?
          </h2>

          <p className="mt-6 text-lg text-textSecondary">
            Start managing your teams with confidence using FFM Pro.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-xl
            bg-primary px-10 py-3.5 text-white font-medium
            hover:bg-primaryDark hover:shadow-xl transition-all active:scale-95">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
