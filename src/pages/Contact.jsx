import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import QuickQueryStrip from "../components/QueryStrip";
export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <>
    <QuickQueryStrip />
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
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Let’s talk about your field operations
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />

          <p className="text-textSecondary mt-6 text-lg">
            Whether you need a demo, pricing details, or implementation guidance,
            our team is ready to help.
          </p>
        </div>

        {/* Content */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div
            className={`space-y-12 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold text-textPrimary">
                Contact information
              </h2>
              <p className="text-textSecondary mt-4 max-w-md">
                Reach out to discuss how FFM Pro can improve productivity,
                visibility, and control for your field teams.
              </p>
            </div>

            {/* Info items */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "support@ffmpro.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 98765 43210",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  value: "New Delhi, India",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/70 transition"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-textPrimary">
                        {item.title}
                      </p>
                      <p className="text-textSecondary">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust card */}
            <div className="rounded-2xl bg-white p-6 border border-borderLight shadow-md">
              <p className="text-sm text-textSecondary">
                ⚡ Average response time:{" "}
                <span className="font-medium text-textPrimary">
                  under 24 hours
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className={`relative rounded-3xl bg-white p-10 md:p-12 border border-borderLight shadow-2xl transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-textPrimary">
              Send us a message
            </h3>
            <p className="text-textSecondary mt-3">
              We’ll reach out with the right solution for your business.
            </p>

            <form className="mt-10 space-y-7">
              {[
                { label: "Full Name", type: "text", placeholder: "John Doe" },
                { label: "Email Address", type: "email", placeholder: "you@company.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-textPrimary">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-xl border border-borderLight px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-textPrimary">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className="mt-2 w-full rounded-xl border border-borderLight px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-medium transition-all hover:bg-primaryDark hover:shadow-xl active:scale-95"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
