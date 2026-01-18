import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import UseCases from "../components/UseCases";
import Features from "../components/features";
import WhyChooseUs from "../components/whyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import QuickQueryStrip from "../components/QueryStrip";

const videoSections = [
  {
    title: "Live GPS Tracking",
    subtitle: "Know exactly where your team is — every second, every meter.",
    image: "/images/home.png",
    color: "from-blue-600 via-cyan-500 to-teal-400",
    stats: { value: "2.4k", label: "Teams Tracked Daily" },
    badge: "Live • 5s Refresh",
    features: ["Sub-meter precision", "Route heatmaps", "Instant geofence alerts"],
  },
  {
    title: "Smart Attendance",
    subtitle: "No buddy punching. Geo + face = bulletproof records.",
    image: "/images/attendence1.png",
    color: "from-violet-600 via-purple-500 to-fuchsia-400",
    stats: { value: "98.9%", label: "Verified Accuracy" },
    badge: "Zero-Touch",
    features: ["Face + location lock", "Offline-first sync", "Auto overtime calc"],
  },
  {
    title: "AI Analytics",
    subtitle: "Turn field chaos into clear wins — predict delays before they happen.",
    image: "/images/dashboard2.png",
    color: "from-emerald-600 via-teal-500 to-cyan-400",
    stats: { value: "-47%", label: "Avg Overtime Reduction" },
    badge: "Predictive AI",
    features: ["Custom KPI boards", "Anomaly detection", "One-click PDF/CSV"],
  },
];

const floatingOrbs = [
  { color: "blue-400/30", size: 600, x: -20, y: -15, duration: 28 },
  { color: "purple-400/25", size: 800, x: 30, y: 40, duration: 34 },
  { color: "cyan-300/20", size: 500, x: -40, y: 50, duration: 22 },
];

function VideoCard({ section, isActive, onClick, index }) {
  const [loaded, setLoaded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 70, damping: 25 });
  const rotateY = useSpring(x, { stiffness: 70, damping: 25 });

  const handleMove = (e) => {
    if (isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) / 14);
    y.set((rect.top + rect.height / 2 - e.clientY) / 14);
  };

  return (
    <motion.article
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`relative group cursor-pointer transition-all duration-500
        ${isActive 
          ? 'lg:col-span-2 lg:row-span-2 z-20 scale-[1.02] md:scale-105' 
          : index === 1 
            ? 'lg:col-span-1 lg:row-span-2 lg:row-start-1 z-10' 
            : 'lg:col-span-1 lg:row-span-1 z-0'
        }`}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.18, duration: 0.9, type: "spring", stiffness: 90 }}
      layout
    >
      <motion.div
        className={`relative h-full min-h-[320px] lg:min-h-[460px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md
          ${isActive 
            ? 'bg-gradient-to-br from-white/5 to-transparent ring-2 ring-blue-400/50 ring-offset-2 ring-offset-slate-50/50' 
            : 'hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:ring-1 hover:ring-white/20'
          }`}
        style={{
          rotateX: isActive ? 0 : rotateX,
          rotateY: isActive ? 0 : rotateY,
          transformStyle: "preserve-3d",
          perspective: "1400px",
        }}
        whileHover={!isActive ? { scale: 1.025 } : {}}
      >
        {/* Layered background */}
        <div className="absolute inset-0">
          <img
            src={section.image}
            alt={section.title}
            className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out
              ${isActive ? 'scale-110 brightness-105' : 'scale-[1.15] group-hover:scale-110 brightness-95 group-hover:brightness-105'}`}
            onLoad={() => setLoaded(true)}
          />
          {!loaded && <div className="absolute inset-0 bg-slate-900/50 animate-pulse" />}

          <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-35 mix-blend-overlay transition-opacity ${isActive ? 'opacity-60' : 'group-hover:opacity-50'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent/20" />
        </div>

        {/* Glass overlay content */}
        <div className="relative h-full flex flex-col justify-end p-7 lg:p-10 z-10">
          {/* Badge – neumorphic + glass */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
            className={`absolute top-6 left-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl backdrop-blur-2xl border border-white/15 shadow-inner
              ${isActive 
                ? `bg-gradient-to-r ${section.color} bg-opacity-90 text-white shadow-lg shadow-${section.color.split(' ')[0].split('-')[1]}-700/40` 
                : 'bg-white/80 text-slate-900 shadow-lg'
              }`}
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className={`absolute animate-ping inline-flex h-full w-full rounded-full ${isActive ? 'bg-white' : `bg-gradient-to-r ${section.color}`} opacity-70`} />
              <span className={`relative rounded-full h-3.5 w-3.5 ${isActive ? 'bg-white' : `bg-gradient-to-r ${section.color}`}`} />
            </span>
            <span className="font-extrabold text-sm tracking-tight">{section.badge}</span>
          </motion.div>

          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="active"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                  {section.title}
                </h2>
                <p className="text-lg lg:text-xl text-white/95 font-medium max-w-2xl">
                  {section.subtitle}
                </p>

                <div className="flex flex-wrap gap-2.5 pt-3">
                  {section.features.map((f, i) => (
                    <motion.span
                      key={f}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.12 }}
                      className="px-4 py-2 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20 text-white text-sm font-semibold shadow-sm"
                    >
                      ✓ {f}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-5 pt-6 items-start sm:items-center">
                  <div className="text-left">
                    <div className="text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
                      {section.stats.value}
                    </div>
                    <p className="text-white/85 font-bold text-base mt-1">{section.stats.label}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-extrabold text-base shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-shadow relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      See It Live →
                      <motion.span animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                        →
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="inactive"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="space-y-4"
              >
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {section.title}
                </h3>
                <p className="text-white/90 text-base line-clamp-2">
                  {section.subtitle}
                </p>
                <p className="text-white/70 text-sm font-semibold flex items-center gap-2.5 pt-2">
                  Click to expand
                  <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                    →
                  </motion.span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function PremiumHero2026() {
     const [showQuery, setShowQuery] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.15]);
useEffect(() => {
  const onScroll = () => {
    setShowQuery(window.scrollY > 550);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % videoSections.length);
    }, 6800);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <>
    <AnimatePresence>
        {showQuery && (
          <motion.div
            className="sticky top-[64px] z-40"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <QuickQueryStrip />
          </motion.div>
        )}
      </AnimatePresence>
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/80 overflow-hidden">
      {/* Dynamic background orbs with scroll influence */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br from-${orb.color}`}
          style={{ width: orb.size, height: orb.size, left: `${orb.x}%`, top: `${orb.y}%`, scale: bgScale }}
          animate={{
            scale: [1, 1.18, 1],
            x: [0, orb.size * 0.15, 0],
            y: [0, orb.size * 0.12, 0],
          }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24 pb-24">
        {/* Hero headline – bigger, bolder, outcome-first */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 lg:mb-24 space-y-8"
        >
          <motion.div
            className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-70" />
              <span className="relative rounded-full h-3.5 w-3.5 bg-gradient-to-r from-green-500 to-emerald-500" />
            </span>
            <span className="font-extrabold text-slate-800 text-base sm:text-lg">
              65,000+ field workers powered • 99.99% uptime
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-950 leading-none tracking-tighter">
            Command Your Field Force
            <span className="block bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent mt-3 lg:mt-4">
              With AI Precision
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-700 max-w-4xl mx-auto font-medium">
            Real-time tracking • Fraud-proof attendance • Predictive analytics — all unified in one intuitive platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 30px 60px -15px rgba(79, 70, 229, 0.5)" }}
              whileTap={{ scale: 0.96 }}
              className="px-12 py-6 rounded-3xl bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-xl font-extrabold shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Free Trial — 14 Days
                <motion.span animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06, borderColor: "#4f46e5" }}
              whileTap={{ scale: 0.96 }}
              className="px-12 py-6 rounded-3xl bg-white/80 backdrop-blur-md border-2 border-indigo-200 text-indigo-900 text-xl font-bold hover:text-indigo-700 transition-colors shadow-xl"
            >
              Watch Demo (2 min)
            </motion.button>
          </div>
        </motion.div>

        {/* Bento grid – more dramatic asymmetry & elevation */}
        <div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-6 lg:gap-8 mb-20 lg:mb-28 auto-rows-fr"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {videoSections.map((sec, i) => (
            <VideoCard
              key={i}
              section={sec}
              isActive={i === active}
              onClick={() => setActive(i)}
              index={i}
            />
          ))}
        </div>

        {/* Compact trust + stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { v: "12k+", l: "Companies", i: "🏢", c: "blue-600 to-cyan-500" },
            { v: "75k+", l: "Field Users", i: "👷‍♂️", c: "purple-600 to-pink-500" },
            { v: "99.99%", l: "Uptime", i: "🛡️", c: "emerald-600 to-teal-500" },
            { v: "24/7", l: "Priority Support", i: "🛎️", c: "amber-600 to-orange-500" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${s.c} opacity-0 group-hover:opacity-25 rounded-3xl blur-2xl transition-opacity`} />
              <div className="relative bg-white/75 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-7 text-center">
                <span className="text-5xl block mb-3">{s.i}</span>
                <p className={`text-5xl font-black bg-gradient-to-r from-${s.c} bg-clip-text text-transparent`}>
                  {s.v}
                </p>
                <p className="text-slate-600 font-bold text-base mt-1">{s.l}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-5 px-10 py-5 rounded-3xl bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-200/60 backdrop-blur-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse" />
              <span className="font-bold text-slate-800 text-base">No card needed • Setup 5 min • Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Features />
              <WhyChooseUs />
            <HowItWorks />
            <Testimonials />
            <UseCases />
    </>
  );
}