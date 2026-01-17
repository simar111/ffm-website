import { Target, Users, Globe, ShieldCheck } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className="relative bg-bgLight min-h-screen py-36 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-6 py-1.5 text-sm font-medium backdrop-blur">
            About FFM Pro
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl xl:text-6xl font-bold text-textPrimary tracking-tight">
            Empowering modern field teams
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              with clarity, control, and confidence
            </span>
          </h1>

          <p className="mt-8 text-lg text-textSecondary leading-relaxed max-w-3xl mx-auto">
            FFM Pro is built to give businesses real-time visibility into field
            operations — enabling smarter decisions, faster execution, and
            stronger accountability.
          </p>
        </div>

        {/* STORY */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-textPrimary">
              Our story
            </h2>

            <div className="mt-8 space-y-5 text-textSecondary leading-relaxed">
              <p>
                Field teams are the backbone of many businesses — yet most tools
                fail to give managers real-time visibility and control.
              </p>
              <p>
                FFM Pro was created to replace fragmented systems with one
                unified platform that connects people, tasks, and data in
                real time.
              </p>
              <p>
                The result is a system that’s powerful for managers and simple
                for field staff.
              </p>
            </div>
          </div>

          {/* Belief Card */}
          <div
            className={`rounded-3xl bg-white/90 backdrop-blur-xl p-12 border border-borderLight shadow-2xl transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold text-textPrimary">
              What we believe
            </h3>

            <ul className="mt-8 space-y-4 text-textSecondary">
              {[
                "Simplicity beats complexity",
                "Real-time data drives better decisions",
                "Technology should empower people",
                "Trust and transparency build strong teams",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-36">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary">
              Our mission & values
            </h2>
            <p className="mt-6 text-textSecondary text-lg">
              Principles that guide every decision we make.
            </p>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Our Mission",
                desc: "Help businesses run smarter field operations.",
                icon: Target,
              },
              {
                title: "People First",
                desc: "Built for managers and field staff alike.",
                icon: Users,
              },
              {
                title: "Global Ready",
                desc: "Designed for teams across regions and industries.",
                icon: Globe,
              },
              {
                title: "Security & Trust",
                desc: "Enterprise-grade protection for critical data.",
                icon: ShieldCheck,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group rounded-3xl bg-white p-8 border border-borderLight shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl delay-${i *
                    100} ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
                    <Icon size={22} />
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
        </div>

        {/* METRICS */}
        <div className="mt-36 rounded-3xl bg-white/90 backdrop-blur-xl border border-borderLight shadow-2xl px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "10k+", label: "Field users managed" },
              { value: "99.9%", label: "Platform uptime" },
              { value: "24/7", label: "Customer support" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {m.value}
                </p>
                <p className="mt-3 text-textSecondary">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-36 text-center transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl font-bold text-textPrimary">
            Ready to transform your field operations?
          </h2>

          <p className="mt-6 text-textSecondary text-lg">
            Join teams that trust FFM Pro to work smarter in the field.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-12 py-3.5 text-white font-medium hover:bg-primaryDark hover:shadow-xl transition-all active:scale-95">
            Get Started →
          </button>
        </div>

      </div>
    </section>
  );
}
