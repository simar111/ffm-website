import { Check, Star } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    desc: "For small teams getting started with field operations.",
    features: [
      "Up to 10 field employees",
      "Geo-based attendance",
      "Task assignment",
      "Basic reports",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "₹2,499",
    period: "/month",
    desc: "For growing businesses managing active field teams.",
    features: [
      "Up to 50 field employees",
      "Live GPS tracking",
      "Route planning",
      "Advanced reports & analytics",
      "Priority support",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with advanced requirements.",
    features: [
      "Unlimited employees",
      "Custom workflows",
      "Dedicated account manager",
      "Advanced security & audit logs",
      "24/7 enterprise support",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className="relative bg-bgLight min-h-screen py-36 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full bg-primary/10 text-primary px-5 py-1.5 text-sm font-medium">
            Pricing
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Simple, transparent pricing
          </h1>

          <p className="mt-6 text-lg text-textSecondary">
            Choose a plan that fits your team size and scale as you grow.
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-10 transition-all duration-700 ${
                plan.featured
                  ? "bg-white border-primary shadow-2xl scale-105"
                  : "bg-white border-borderLight shadow-xl"
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary text-white px-5 py-1.5 text-sm font-medium shadow-lg flex items-center gap-1">
                  <Star size={14} /> Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-textPrimary">
                {plan.name}
              </h3>

              <p className="mt-3 text-textSecondary text-sm">
                {plan.desc}
              </p>

              <div className="mt-8">
                <span className="text-4xl font-bold text-textPrimary">
                  {plan.price}
                </span>
                <span className="text-textSecondary">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="text-primary mt-0.5" size={16} />
                    <span className="text-textSecondary">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl px-6 py-3 font-medium transition-all active:scale-95 ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primaryDark hover:shadow-xl"
                    : "border border-borderLight bg-white hover:bg-bgLight text-textPrimary"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div
          className={`mt-32 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-textPrimary">
            Trusted by growing teams
          </h2>
          <p className="mt-6 text-textSecondary text-lg max-w-2xl mx-auto">
            From startups to enterprises, teams rely on FFM Pro to manage
            their field workforce efficiently and securely.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-textSecondary">
            <span>✔ No credit card required</span>
            <span>✔ 99.9% uptime</span>
            <span>✔ Secure & compliant</span>
            <span>✔ Cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
}
