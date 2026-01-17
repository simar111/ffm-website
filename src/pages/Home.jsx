import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UseCases from "../components/UseCases";
import Features from "../components/features";
import WhyChooseUs from "../components/whyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

const images = ["/images/home.png", "/images/attendence1.png", "/images/dashboard2.png"];

const stats = [
  { label: "Teams Managed", value: "10k+", icon: "👥" },
  { label: "Live Locations", value: "1M+", icon: "📍" },
  { label: "Tasks Completed", value: "5M+", icon: "✅" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => setLoadedImages((prev) => ({ ...prev, [src]: true }));
      img.src = src;
    });
  }, []);

  // Autoplay with pause on hover
  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleDotClick = useCallback((clickedIndex) => {
    setIndex(clickedIndex);
    setIsPaused(true);
  }, []);

  const handleHoverStart = useCallback(() => setIsPaused(true), []);
  const handleHoverEnd = useCallback(() => setIsPaused(false), []);

  return (
    <>
      <section className="relative overflow-hidden bg-bgLight min-h-[85vh] lg:min-h-[90vh] flex items-center pt-8 lg:pt-12 xl:pt-8">
        {/* Optimized Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
        
        {/* Fixed Blobs - No overlap */}
        <motion.div 
          className="absolute -top-24 lg:-top-28 -right-24 lg:-right-32 h-[360px] w-[360px] rounded-full bg-primary/12 blur-[100px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-32 lg:-bottom-36 -left-24 lg:-left-32 h-[360px] w-[360px] rounded-full bg-accent/12 blur-[100px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />

        {/* Floating Elements - Contained */}
        <div className="absolute inset-0 pointer-events-none">
          {[0,1,2,3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-[8px] h-[8px] bg-primary/25 rounded-full backdrop-blur-sm"
              style={{
                left: `${15 + i * 28}%`,
                top: `${20 + (i % 2) * 30}%`,
              }}
              animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Main Container */}
        <div className="top-12 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center h-full">
            
            {/* LEFT CONTENT - Fixed positioning */}
            <motion.div 
              className="space-y-6 lg:space-y-8 order-2 lg:order-1 max-w-lg lg:max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div 
                className=" inline-flex items-center gap-2 lg:gap-3 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20 px-5 lg:px-7 py-2.5 lg:py-3.5 text-sm lg:text-base font-semibold text-primary shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-1 max-w-max"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-ping origin-center" 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Field Force Management Platform
              </motion.div>

              {/* Headline - Responsive */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-textPrimary via-slate-800 to-primary bg-clip-text text-transparent -mb-2 lg:-mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
              >
                Manage your field workforce
                <span className="block bg-gradient-to-r from-primary via-accent to-emerald-600 bg-clip-text text-transparent mt-2 lg:mt-3">
                  with complete visibility
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-textSecondary max-w-md lg:max-w-lg leading-relaxed font-medium bg-white/70 backdrop-blur-xl px-6 py-5 lg:px-8 lg:py-6 rounded-2xl lg:rounded-3xl border border-borderLight/40 shadow-xl lg:shadow-2xl"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Track attendance, monitor live locations, assign tasks, and analyze performance — all from a single powerful dashboard built for modern field teams.
              </motion.p>

              {/* CTAs - Perfect mobile spacing */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative rounded-2xl lg:rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-accent px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl font-bold text-white shadow-xl lg:shadow-2xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] transition-all duration-400 overflow-hidden border-0 flex items-center justify-center min-h-[52px] lg:min-h-[60px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12" />
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-2xl lg:rounded-3xl border-2 border-borderLight/50 bg-white/80 backdrop-blur-xl px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl font-bold text-textPrimary hover:bg-white hover:shadow-2xl hover:border-primary/40 transition-all duration-400 flex items-center justify-center min-h-[52px] lg:min-h-[60px]"
                >
                  Request Demo
                </motion.button>
              </motion.div>

              {/* Stats - Compact responsive */}
              <motion.div 
                className="flex flex-wrap gap-6 lg:gap-8 pt-4 pb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {stats.map((stat, i) => (
                  <motion.div key={stat.label} className="min-w-[100px] text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div 
                        className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r from-primary to-accent animate-ping"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.p 
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-textPrimary via-primary to-accent bg-clip-text text-transparent leading-none"
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        {stat.value}
                      </motion.p>
                    </div>
                    <p className="text-xs lg:text-sm text-textSecondary font-medium tracking-wide leading-tight px-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT - Visual Hero - Fixed positioning */}
            <motion.div 
              className="relative order-1 lg:order-2 w-full max-w-md lg:max-w-xl xl:max-w-2xl mx-auto -top-0.5"
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            >
              {/* Main Mockup - Responsive heights */}
              <motion.div 
                className="relative h-[380px] sm:h-[420px] lg:h-[480px] xl:h-[540px] w-full rounded-3xl bg-gradient-to-br from-white/95 via-white to-white/85 backdrop-blur-xl shadow-2xl overflow-hidden border border-borderLight/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)] hover:border-primary/40 transition-all duration-700 group"
                whileHover={{ y: -8 }}
              >
                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                />

                {/* Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />

                {/* Images */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt={`FFM Dashboard ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover rounded-3xl shadow-2xl"
                    initial={{ opacity: 0, scale: 1.1, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 1.15, rotateY: 10 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                {/* Loading State */}
                {!loadedImages[images[index]] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse rounded-3xl flex items-center justify-center">
                    <motion.div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/90 rounded-2xl flex items-center justify-center shadow-2xl" 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-xl sm:text-2xl">📱</span>
                    </motion.div>
                  </div>
                )}

                {/* Status Indicators - Fixed position */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex flex-col gap-2 sm:gap-3 max-w-[140px]">
                  {["Live", "Active", "Secure"].map((status, i) => (
                    <motion.div
                      key={status}
                      className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-xl rounded-xl text-xs sm:text-sm font-bold text-slate-800 shadow-md border border-white/50"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + i * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse" />
                      {status}
                    </motion.div>
                  ))}
                </div>

                {/* Corner Badge */}
                <motion.div 
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/95 to-accent/90 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl border-2 sm:border-4 border-white/50 backdrop-blur-xl"
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-lg sm:text-2xl">⭐</span>
                </motion.div>
              </motion.div>

              {/* Dots - Perfect positioning */}
              <motion.div 
                className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 p-2 sm:p-3 lg:p-4 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 w-max mx-auto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                {images.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    whileHover={{ scale: 1.25, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`transition-all duration-400 rounded-xl sm:rounded-2xl h-2 sm:h-2.5 lg:h-3 shadow-md hover:shadow-lg flex-shrink-0 ${
                      i === index
                        ? "bg-gradient-to-r from-primary to-accent w-12 sm:w-14 lg:w-16 scale-[1.1] shadow-primary/40"
                        : "bg-borderLight/80 w-2 sm:w-2.5 lg:w-3 hover:w-4 sm:hover:w-5 hover:bg-primary/70"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes ping-smooth {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.15); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-ping {
            animation: ping-smooth 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
