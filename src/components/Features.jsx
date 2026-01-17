const features = [
  {
    title: "Live GPS Tracking",
    desc: "Track your field staff in real time with accurate location updates and smart alerts.",
    icon: "📍",
  },
  {
    title: "Smart Attendance",
    desc: "Geo-based attendance with selfie, timestamp, and fraud prevention.",
    icon: "⏱️",
  },
  {
    title: "Task Management",
    desc: "Assign, monitor, and close tasks with full visibility and accountability.",
    icon: "✅",
  },
  {
    title: "Reports & Analytics",
    desc: "Detailed performance insights to improve productivity and decision-making.",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section className="relative bg-white py-14 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary tracking-tight">
            Powerful features built for field teams
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

          <p className="text-textSecondary mt-6 text-lg">
            Everything you need to manage, monitor, and scale your field operations with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl border border-borderLight bg-bgLight p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-accent/10" />

              {/* Icon */}
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                {f.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-textPrimary">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                  {f.desc}
                </p>
              </div>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-1 w-0 rounded-b-3xl bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
