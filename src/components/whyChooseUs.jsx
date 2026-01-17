import {
  Zap,
  ShieldCheck,
  Radar,
  TrendingUp,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const reasons = [
  {
    title: "Launch in Minutes",
    desc: "Onboard teams instantly without complex setup or training.",
    icon: Zap,
  },
  {
    title: "Secure by Design",
    desc: "Enterprise-grade security, encryption, and access controls.",
    icon: ShieldCheck,
  },
  {
    title: "Precision Tracking",
    desc: "Accurate GPS with low battery and optimized network usage.",
    icon: Radar,
  },
  {
    title: "Scales Without Limits",
    desc: "Built to perform reliably from small teams to large enterprises.",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      ref={sectionRef}
      className="relative bg-bgLight py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`max-w-3xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary tracking-tight">
            Why high-performing teams choose FFM Pro
          </h2>
          <p className="text-textSecondary mt-6 text-lg">
            Designed for reliability, clarity, and operational excellence.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Timeline */}
          <div className="relative pl-10">
            <div
              className={`absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-primary/40 to-accent/40 transition-opacity duration-700 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="space-y-14">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className={`relative flex gap-6 transition-all duration-700 delay-[${i * 100}ms] ${
                      visible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-6"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-borderLight shadow-md text-primary">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-textPrimary">
                        {r.title}
                      </h3>
                      <p className="text-textSecondary mt-2 max-w-md">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Proof Panel */}
          <div
            className={`relative rounded-3xl bg-white p-14 border border-borderLight shadow-2xl transition-all duration-700 ${
              visible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute -top-5 right-8 rounded-full bg-primary/10 text-primary px-5 py-1.5 text-sm font-medium">
              Trusted by teams
            </div>

            <h3 className="text-2xl font-bold text-textPrimary">
              Built for mission-critical operations
            </h3>

            <p className="text-textSecondary mt-5 leading-relaxed">
              Engineered to deliver uptime, accuracy, and control —
              even at enterprise scale.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-8">
              {[
                { v: "99.9%", l: "Uptime" },
                { v: "5 min", l: "Setup" },
                { v: "24/7", l: "Support" },
              ].map((m) => (
                <div key={m.l}>
                  <p className="text-4xl font-bold text-primary">{m.v}</p>
                  <p className="text-sm text-textSecondary mt-1">{m.l}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all">
              See how it works →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
