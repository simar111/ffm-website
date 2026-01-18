import { motion } from "framer-motion";

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

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary tracking-tight">
            Powerful features built for field teams
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />

          <p className="text-textSecondary mt-6 text-lg">
            Everything you need to manage, monitor, and scale your field operations with confidence.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={card}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-borderLight bg-white/70 backdrop-blur-xl p-8 shadow-lg transition-all"
            >
              {/* Glow layer */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-accent/10" />

              {/* Icon halo */}
              <div className="relative z-10 mb-6">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl shadow-inner">
                  <span className="relative z-10">{f.icon}</span>
                  <span className="absolute inset-0 rounded-2xl border border-primary/30 animate-pulse" />
                </div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
