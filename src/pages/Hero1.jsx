"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const team = [
  { id: 1, name: "Alex",   avatar: "👨‍💼", status: "En route",       color: "from-blue-500 to-cyan-600",   x: 18, y: 26 },
  { id: 2, name: "Sarah",  avatar: "👩‍💼", status: "On-site",        color: "from-violet-500 to-purple-600", x: 68, y: 20 },
  { id: 3, name: "Mike",   avatar: "👨‍🔧", status: "Task completed", color: "from-emerald-500 to-teal-600",  x: 44, y: 56 },
  { id: 4, name: "Emma",   avatar: "👩‍🔬", status: "In review",      color: "from-amber-500 to-orange-600",  x: 76, y: 66 },
  { id: 5, name: "John",   avatar: "👨‍🚀", status: "Available",      color: "from-rose-500 to-pink-600",     x: 30, y: 74 },
];

const features = [
  { icon: "📍", title: "Real-time GPS",        desc: "Live location updates",               stat: "2.4k", label: "active users" },
  { icon: "✅", title: "Geo Attendance",       desc: "Automatic & accurate check-ins",      stat: "98.7%", label: "precision" },
  { icon: "🛣️", title: "AI Route Planning",   desc: "Optimized paths, less fuel & time",   stat: "∼48%", label: "time saved" },
  { icon: "📊", title: "Live Analytics",       desc: "Instant performance visibility",     stat: "5.2M+", label: "data points" },
];

const testimonials = [
  { company: "Urban Logistics", quote: "Reduced average ETA by 42 minutes", logo: "🚚" },
  { company: "FieldPro Services", quote: "Visibility we never had before", logo: "🛠️" },
  { company: "Swift Maintenance", quote: "Best ROI among field tools", logo: "⚡" },
];

function MemberDot({ member, index }) {
  const [hovered, setHovered] = useState(false);

  const springY = useSpring(0, { stiffness: 180, damping: 14 });

  useEffect(() => {
    springY.set(hovered ? -12 : 0);
  }, [hovered]);

  return (
    <motion.div
      className="absolute cursor-pointer z-20"
      style={{ left: `${member.x}%`, top: `${member.y}%`, y: springY }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", delay: 0.8 + index * 0.14, stiffness: 260, damping: 16 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.22 }}
    >
      {/* Pulse background */}
      <motion.div
        className={`absolute inset-0 -z-10 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${member.color} opacity-20 blur-xl`}
        animate={{ scale: [1, 1.9, 1], opacity: [0.18, 0.06, 0.18] }}
        transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.5 }}
      />

      {/* Glass orb */}
      <motion.div
        className={`
          relative w-16 h-16 -translate-x-1/2 -translate-y-1/2 
          rounded-2xl bg-white/75 backdrop-blur-xl border border-white/50 
          shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]
          flex items-center justify-center text-3xl
        `}
      >
        <div className="absolute inset-0.5 rounded-[14px] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        {member.avatar}
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: -32, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-6 pointer-events-none z-30"
          >
            <div className="
              bg-white/90 backdrop-blur-2xl px-5 py-3.5 rounded-2xl 
              border border-white/40 shadow-[0_16px_48px_rgba(0,0,0,0.12)]
              whitespace-nowrap
            ">
              <p className="font-semibold text-slate-900 text-base tracking-tight">{member.name}</p>
              <div className="flex items-center gap-2.5 mt-1.5">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${member.color}`} />
                <span className="text-sm font-medium text-slate-600">{member.status}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FeatureItem({ item, idx }) {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: 0.4 + idx * 0.1, type: "spring", damping: 22 }}
      whileHover={{ y: -6, transition: { duration: 0.28 } }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 to-violet-500/8 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />

      <div className="
        relative bg-white/70 backdrop-blur-xl rounded-3xl p-7 
        border border-white/50 shadow-xl group-hover:shadow-2xl 
        transition-all duration-400
      ">
        <div className="flex items-start justify-between mb-5">
          <span className="text-5xl">{item.icon}</span>
          <div className="text-right">
            <p className="text-[2.1rem] font-black bg-gradient-to-r from-indigo-600 to-violet-700 bg-clip-text text-transparent leading-none">
              {item.stat}
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">{item.label}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
        <p className="text-slate-600">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function FieldForceHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeQuote, setActiveQuote] = useState(0);
  const container = useRef(null);

  const gradientX = useTransform(mouseX, [0, 1400], ["10%", "90%"]);
  const gradientY = useTransform(mouseY, [0, 900], ["10%", "90%"]);

  useEffect(() => {
    const onMove = (e) => {
      if (!container.current) return;
      const rect = container.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((i) => (i + 1) % testimonials.length);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 overflow-hidden isolate pt-4 pb-20"
    >
      {/* Mouse-follow gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light"
        style={{
          background: `radial-gradient(ellipse 140% 160% at ${gradientX} ${gradientY}, rgba(99,102,241,0.14), transparent 55%)`,
        }}
      />

      {/* Ambient blobs */}
      <motion.div
        className="absolute -top-48 -left-48 w-[720px] h-[720px] bg-gradient-to-br from-blue-400/15 to-cyan-300/10 rounded-full blur-3xl"
        animate={{ x: [0, 180, 0], y: [0, 100, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-64 w-[640px] h-[640px] bg-gradient-to-br from-violet-400/15 to-purple-400/10 rounded-full blur-3xl"
        animate={{ x: [0, -160, 0], y: [0, -80, 0], scale: [1, 1.22, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left – Hero content */}
          <div className="space-y-10 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-slate-200/70 shadow-lg"
            >
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse [animation-delay:150ms]" />
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse [animation-delay:300ms]" />
              </div>
              <span className="text-sm font-semibold text-slate-700 tracking-tight">
                Trusted by 14,000+ mobile teams
              </span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Field Force
                <span className="block mt-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                  That Runs Itself
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-3xl font-light">
                Real-time tracking • Automatic attendance • AI routing • Insights that drive decisions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <motion.button
                className="
                  group relative px-10 py-5 rounded-2xl 
                  bg-gradient-to-r from-indigo-600 to-violet-600 
                  text-white font-semibold text-lg shadow-xl shadow-indigo-500/30 
                  overflow-hidden
                "
                whileHover={{ scale: 1.04, boxShadow: "0 30px 70px -12px rgba(79,70,229,0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Free Trial — 14 days
                  <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                className="
                  px-10 py-5 rounded-2xl bg-white/70 backdrop-blur-xl 
                  border-2 border-slate-200 text-slate-800 font-semibold text-lg 
                  hover:border-indigo-400 hover:shadow-xl transition-all duration-300
                "
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Demo (2 min)
              </motion.button>
            </div>

            {/* Rotating testimonial */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuote}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.7 }}
                  className="
                    bg-white/70 backdrop-blur-2xl rounded-2xl p-6 border border-white/40 
                    shadow-xl max-w-lg
                  "
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{testimonials[activeQuote].logo}</span>
                    <p className="font-bold text-slate-900 text-lg">{testimonials[activeQuote].company}</p>
                  </div>
                  <p className="text-slate-700 italic">“{testimonials[activeQuote].quote}”</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right – Interactive map visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-2xl mx-auto">
              {/* Glass container */}
              <div className="
                absolute inset-0 rounded-4xl bg-white/45 backdrop-blur-2xl 
                border border-white/50 shadow-2xl overflow-hidden
              ">
                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(99,102,241,0.5) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(99,102,241,0.5) 1px, transparent 1px)
                      `,
                      backgroundSize: "44px 44px",
                    }}
                    className="w-full h-full"
                  />
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {team.map((m, i) => {
                    if (i === team.length - 1) return null;
                    const next = team[i + 1];
                    return (
                      <motion.line
                        key={m.id}
                        x1={`${m.x}%`} y1={`${m.y}%`}
                        x2={`${next.x}%`} y2={`${next.y}%`}
                        stroke="url(#lineGrad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.55 }}
                        transition={{ duration: 2.2, delay: 1.3 + i * 0.3 }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Members */}
                {team.map((member, i) => (
                  <MemberDot key={member.id} member={member} index={i} />
                ))}

                {/* Central node */}
                <motion.div
                  className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 
                    shadow-2xl flex items-center justify-center
                  "
                  initial={{ scale: 0, rotate: -120 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 1.2, stiffness: 160 }}
                >
                  <motion.span
                    className="text-5xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  >
                    ⚙️
                  </motion.span>
                </motion.div>
              </div>

              {/* Live count badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.8, type: "spring" }}
                className="
                  absolute -bottom-10 left-4 sm:-bottom-12 sm:left-8 
                  bg-white/85 backdrop-blur-2xl rounded-2xl px-6 py-4 
                  border border-white/40 shadow-2xl min-w-[210px]
                "
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-emerald-500"
                    animate={{ scale: [1, 1.45, 1] }}
                    transition={{ duration: 2.6, repeat: Infinity }}
                  />
                  <span className="font-semibold text-slate-700">Live Field Agents</span>
                </div>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-700 bg-clip-text text-transparent">
                  {team.length}/5
                </p>
                <p className="text-sm text-slate-500 mt-0.5">currently active</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-24 lg:mt-32">
          {features.map((item, i) => (
            <FeatureItem key={item.title} item={item} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}