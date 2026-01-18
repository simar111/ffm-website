import {
  MapPin,
  Clock,
  Camera,
  ShieldCheck,
  Bell,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    title: "Geo-Based Attendance",
    desc: "Mark attendance only when employees are within authorized geo-locations.",
    icon: MapPin,
  },
  {
    title: "Time & Shift Tracking",
    desc: "Track check-in, check-out, late arrivals, and overtime automatically.",
    icon: Clock,
  },
  {
    title: "Selfie Verification",
    desc: "Prevent proxy attendance with selfie capture and timestamp verification.",
    icon: Camera,
  },
  {
    title: "Secure Attendance Logs",
    desc: "Tamper-proof records with complete audit trails for compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Alerts",
    desc: "Get instant alerts for missed punches, late check-ins, or location mismatch.",
    icon: Bell,
  },
  {
    title: "Attendance Analytics",
    desc: "Visual reports to analyze trends, absenteeism, and workforce discipline.",
    icon: BarChart3,
  },
];

export default function AttendanceTracking() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className="relative bg-bgLight min-h-screen py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex rounded-full bg-primary/10 text-primary px-6 py-2 text-sm font-medium">
            Attendance & Tracking
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            Accurate attendance tracking
            <span className="block text-primary">
              built for field teams
            </span>
          </h1>

          <p className="mt-6 text-lg text-textSecondary leading-relaxed">
            Eliminate manual attendance, prevent fraud, and gain real-time
            visibility into when and where your field employees are working.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group rounded-3xl bg-white/90 backdrop-blur-xl
                border border-borderLight shadow-xl p-8 transition-all duration-700
                hover:-translate-y-2 hover:shadow-2xl ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl
                  bg-primary/10 text-primary mb-6">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-semibold text-textPrimary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-textSecondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* SPLIT SECTION */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl font-bold text-textPrimary">
              Designed to prevent attendance fraud
            </h2>

            <p className="mt-6 text-textSecondary leading-relaxed">
              Traditional attendance systems fail in the field. FFM Pro
              combines GPS, time stamps, and selfie verification to ensure
              every attendance record is accurate and reliable.
            </p>

            <ul className="mt-8 space-y-4 text-textSecondary">
              <li>✔ No fake check-ins</li>
              <li>✔ No buddy punching</li>
              <li>✔ Real-time attendance validation</li>
              <li>✔ Fully compliant records</li>
            </ul>
          </div>

          {/* Right Card */}
          <div
            className={`rounded-3xl bg-white p-12 border border-borderLight
            shadow-2xl transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-sm font-medium text-primary">
              Operations insight
            </p>

            <p className="mt-4 text-2xl font-bold text-textPrimary">
              Improve workforce discipline by 30%
            </p>

            <p className="mt-4 text-textSecondary leading-relaxed">
              Automated tracking and instant alerts help managers take
              timely action and improve accountability across teams.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-32 text-center transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl font-bold text-textPrimary">
            Ready for accurate attendance tracking?
          </h2>

          <p className="mt-6 text-lg text-textSecondary">
            Stop guessing. Start tracking attendance the smart way.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-xl
            bg-primary px-10 py-3.5 text-white font-medium
            hover:bg-primaryDark hover:shadow-xl transition-all active:scale-95">
            Start Free Trial
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
