import { useEffect, useState, useCallback } from "react";
import UseCases from "../components/UseCases";
import Features from "../components/features";
import WhyChooseUs from "../components/whyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

const images = [
  "/images/home.png",
  "/images/attendence1.png",
  "/images/dashboard2.png",
];

const stats = [
  { label: "Teams Managed", value: "10k+" },
  { label: "Live Locations", value: "1M+" },
  { label: "Tasks Completed", value: "5M+" },
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

  // Enhanced autoplay with pause on hover
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
      <section className="relative overflow-hidden bg-bgLight min-h-[80vh] lg:min-h-screen flex items-center pt-16 lg:pt-20">
        {/* Enhanced Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08)_0%,transparent_50%)]" />
        <div className="absolute -top-32 lg:-top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[140px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[140px] animate-pulse delay-[2s]" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-[6px] h-[6px] bg-primary/30 rounded-full animate-float"
              style={{
                left: `${20 + i * 25}%`,
                top: `${25 + (i % 2) * 35}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${4 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT - Enhanced */}
          <div className="space-y-8 lg:space-y-10 relative z-10 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              🚀 Field Force Management Platform
            </div>

            {/* Headline */}
          <h1 className="text-4xl md:text-5xl xl:text-[64px] font-bold tracking-tight text-textPrimary leading-[1.05]">
  Manage your field workforce
  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    with complete visibility
  </span>
</h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-textSecondary max-w-xl leading-relaxed font-medium bg-gradient-to-r from-transparent via-white/50 to-transparent p-4 -mx-4 lg:-mx-6 rounded-2xl backdrop-blur-sm border border-borderLight/50 shadow-sm">
              Track attendance, monitor live locations, assign tasks, and analyze
              performance — all from a single powerful dashboard built for modern
              field teams.
            </p>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 lg:gap-5">
              <button className="group relative overflow-hidden rounded-2xl bg-primary px-10 py-4 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-300 border-0 min-w-[160px]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button className="rounded-2xl border-2 border-borderLight bg-white/80 backdrop-blur-sm px-10 py-4 font-semibold text-lg text-textPrimary hover:bg-bgLight hover:border-primary/50 hover:shadow-xl hover:shadow-white/50 transition-all duration-300 active:scale-[0.98] min-w-[160px] flex items-center justify-center">
                Request Demo
              </button>
            </div>

            {/* Enhanced Trust stats */}
            <div className="flex flex-wrap items-start lg:items-center gap-6 lg:gap-10 pt-4 pb-2">
              {stats.map((item, i) => (
                <div key={item.label} className="text-center lg:text-left min-w-[110px]">
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                    <p className="text-3xl lg:text-[32px] xl:text-[36px] font-black text-textPrimary bg-gradient-to-r from-textPrimary via-primary to-accent bg-clip-text text-transparent animate-pulse leading-none" style={{animationDelay: `${i * 0.15}s`}}>
                      {item.value}
                    </p>
                  </div>
                  <p className="text-xs lg:text-sm text-textSecondary font-medium tracking-wide leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Ultra Enhanced Carousel - Reduced top gap */}
          <div 
            className="relative order-1 lg:order-2"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            {/* Main Frame - Slightly taller for better proportions */}
          <div className="
  relative 
  h-[420px] lg:h-[480px] xl:h-[520px]
  w-full
  max-w-md lg:max-w-xl xl:max-w-2xl
  mx-auto
  rounded-3xl
  bg-gradient-to-br from-white/95 via-white to-white/80
  backdrop-blur-xl
  shadow-2xl
  overflow-hidden
  border border-borderLight/60
">

              
              {/* Dynamic Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] -skew-x-12 -translate-x-[120%] group-hover:translate-x-[120%] rounded-3xl" />

              {/* Enhanced Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-black/5 to-transparent rounded-3xl" />

              {/* Images */}
              {images.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`FFM dashboard preview ${i + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover rounded-3xl transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl ${
                    i === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.05] blur-sm brightness-75"
                  } ${!loadedImages[img] ? 'animate-pulse bg-gradient-to-br from-slate-200 to-slate-300' : ''}`}
                  loading="eager"
                />
              ))}

              {/* Loading Skeleton */}
              {!loadedImages[images[index]] && (
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse rounded-3xl" />
              )}

              {/* Corner Badge - Slightly smaller */}
              <div className="absolute top-5 right-5 w-16 h-16 bg-primary/95 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/40 backdrop-blur-sm animate-bounce-slow">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Enhanced Indicators - Closer to image */}
            <div className="absolute -bottom-10 lg:-bottom-12 left-1/2 -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-borderLight/50 hover:shadow-3xl transition-all duration-300">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-2.5 rounded-xl transition-all duration-400 flex-shrink-0 shadow-md hover:shadow-lg ${
                    i === index
                      ? "bg-gradient-to-r from-primary to-accent w-12 scale-[1.1]"
                      : "bg-borderLight/80 w-2.5 hover:w-5 hover:bg-primary/60"
                  }`}
                  aria-label={`View slide ${i + 1}`}
                  aria-pressed={i === index}
                />
              ))}
            </div>

            {/* Enhanced Floating Insight - Adjusted position */}
            <div className="absolute -bottom-20 lg:-bottom-24 -left-2 lg:-left-8 bg-white/95 backdrop-blur-xl border border-borderLight/50 rounded-2xl px-6 py-5 shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 min-w-[260px] hover:scale-[1.015]">
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-11 h-11 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border-2 border-primary/30 mt-0.5 flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-sm lg:text-base font-bold text-textPrimary leading-tight">
                    Live Workforce Tracking
                  </p>
                </div>
              </div>
              <p className="text-xs lg:text-sm text-textSecondary leading-relaxed">
                Real-time visibility with smart alerts and geofencing
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(180deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.8s ease-in-out infinite;
          }
          @keyframes ping-enhanced {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.08); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-ping {
            animation: ping-enhanced 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
