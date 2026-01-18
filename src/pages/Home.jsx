import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UseCases from "../components/UseCases";
import Features from "../components/features";
import WhyChooseUs from "../components/whyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import QuickQueryStrip from "../components/QueryStrip";
const images = ["/images/home.png", "/images/attendence1.png", "/images/dashboard2.png"];
const keywords = ["tracking", "attendance", "productivity", "visibility"];
const stats = [
  { label: "Teams Managed", value: 10000 },
  { label: "Live Locations", value: 1000000 },
  { label: "Tasks Completed", value: 5000000 },
];
const slideMeta = [
  { label: "Live Tracking", icon: "📍", metric: "2.4k active", color: "from-blue-500 to-cyan-500" },
  { label: "Smart Attendance", icon: "🕒", metric: "98% accuracy", color: "from-emerald-500 to-teal-500" },
  { label: "Actionable Insights", icon: "📊", metric: "Real-time data", color: "from-violet-500 to-blue-500" },
];

// Floating particles data
const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5,
}));

function Counter({ value }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <>{value >= 1_000_000 ? `${Math.floor(count / 1_000_000)}M+` : `${Math.floor(count / 1000)}k+`}</>;
}

export default function EnhancedHero() {
  const [showQuery, setShowQuery] = useState(false);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
useEffect(() => {
  const onScroll = () => {
    setShowQuery(window.scrollY > 550);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  // Carousel with pause
  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPaused]);

  // Reset image loaded state on index change
  useEffect(() => {
    setIsImageLoaded(false);
  }, [index]);

  // Rotating word
  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((p) => (p + 1) % keywords.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDotClick = useCallback((clickedIndex) => {
    setIndex(clickedIndex);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  }, []);

  return (
    <>
    {/* <div className="h-[64px]" /> */}

  {/* Sticky Query Strip */}
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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden flex items-center pt-20 pb-12 md:pt-24 md:pb-16">
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6 md:space-y-8 z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold text-blue-700 border border-blue-300/50 shadow-lg shadow-blue-500/10"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Field Force Management Platform
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Manage your field workforce
              <span className="block mt-2">
                with{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={keywords[wordIndex]}
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  >
                    {keywords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Real-time attendance, live GPS tracking, task automation and
              performance insights — built for fast-moving field teams.
            </motion.p>

            <motion.div
              className="flex gap-3 sm:gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="relative rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 sm:px-8 py-3.5 text-white font-semibold shadow-lg shadow-blue-500/40 overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                className="rounded-xl border-2 border-blue-300 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3.5 font-semibold text-blue-700 hover:bg-blue-50 hover:border-blue-500 transition-all shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      <Counter value={s.value} />
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - ENHANCED VISUAL SYSTEM */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating status pills */}
            <div className="absolute -top-4 sm:-top-6 left-2 sm:left-6 z-30 flex flex-col gap-2.5">
              {["Live", "Active", "Secure"].map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.15, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, x: 8, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                  className="flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-bold text-slate-800 shadow-xl border border-blue-200/50"
                >
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 shadow-lg shadow-emerald-500/50"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {s}
                </motion.div>
              ))}
            </div>

            {/* Main frame with 3D effect */}
            <motion.div
              className="relative h-[350px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-[32px] bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 backdrop-blur-2xl shadow-2xl overflow-hidden border-2 border-white/80"
              style={{
                transform: `perspective(1200px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-[32px] p-[2px] bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 opacity-50" />
              
              {/* Inner glass container */}
              <div className="absolute inset-3 sm:inset-4 rounded-[24px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt={`Dashboard preview - ${slideMeta[index].label}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.15, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                </AnimatePresence>

                {/* Loading skeleton */}
                {!isImageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
                )}

                {/* Enhanced overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-blue-900/20" />
                
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
                  animate={{ y: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Enhanced progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800/50">
                <motion.div
                  key={index}
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-lg shadow-blue-500/50 relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: isPaused ? `${((index + 1) / images.length) * 100}%` : "100%" }}
                  transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {images.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className="relative group"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-10 h-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
                          : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Enhanced floating KPI card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.8, rotateX: 20 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5, boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)" }}
                className={`absolute -bottom-6 sm:-bottom-10 -left-2 sm:-left-6 rounded-2xl bg-gradient-to-br ${slideMeta[index].color} p-[2px] shadow-2xl min-w-[200px] sm:min-w-[260px] z-20`}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-4 sm:px-5 py-3 sm:py-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.span
                      className="text-3xl sm:text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {slideMeta[index].icon}
                    </motion.span>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                        {slideMeta[index].label}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                        {slideMeta[index].metric}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full shadow-lg shadow-emerald-500/50"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced floating mini cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.8, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="hidden xl:block absolute -right-12 top-1/4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border-2 border-blue-200/50"
            >
              <p className="text-xs text-slate-500 font-semibold uppercase">Response</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mt-1">{'<'}2s</p>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 2.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="hidden xl:block absolute -right-12 bottom-1/4 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border-2 border-emerald-200/50"
            >
              <p className="text-xs text-slate-500 font-semibold uppercase">Uptime</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-1">99.9%</p>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
   

      <Features />
          <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <UseCases />
    </>
  );
}