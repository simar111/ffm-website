import { Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function QuickQueryStrip() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-[64px] z-40 w-full border-b border-borderLight
      bg-gradient-to-r from-primary/5 via-white/70 to-accent/5 backdrop-blur-xl">

      {/* Accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== MOBILE BAR ===== */}
        <div
          className="flex md:hidden h-12 items-center justify-between cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-textPrimary">
            💬 Quick query?
          </div>

          <div className="flex items-center gap-2 text-primary text-sm font-medium">
            Get callback
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {/* ===== MOBILE EXPANDED FORM ===== */}
        {open && (
          <div className="md:hidden pb-4 pt-2 space-y-3 animate-fadeIn">
            <input
              type="text"
              placeholder="Name"
              className="h-10 w-full rounded-full border border-borderLight px-4 text-sm
              focus:ring-2 focus:ring-primary/30 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile number"
              className="h-10 w-full rounded-full border border-borderLight px-4 text-sm
              focus:ring-2 focus:ring-primary/30 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Message"
              className="h-10 w-full rounded-full border border-borderLight px-4 text-sm
              focus:ring-2 focus:ring-primary/30 focus:outline-none"
            />

            <button className="h-10 w-full rounded-full bg-primary text-white
              font-medium flex items-center justify-center gap-2
              hover:bg-primaryDark transition">
              <Phone size={14} />
              Request Callback
            </button>
          </div>
        )}

        {/* ===== DESKTOP INLINE STRIP ===== */}
        <div className="hidden md:flex h-[56px] items-center justify-center">
          <div className="flex items-center gap-4 w-full max-w-5xl justify-center">

            <span className="text-sm font-semibold text-textPrimary whitespace-nowrap">
              💬 Quick query?
            </span>

            <input
              type="text"
              placeholder="Name"
              className="h-9 w-44 rounded-full border border-borderLight px-4 text-sm"
            />

            <input
              type="tel"
              placeholder="Mobile number"
              className="h-9 w-52 rounded-full border border-borderLight px-4 text-sm"
            />

            <input
              type="text"
              placeholder="Message"
              className="h-9 w-44 rounded-full border border-borderLight px-4 text-sm"
            />

            <button className="h-9 rounded-full bg-primary px-6 text-sm text-white
              hover:bg-primaryDark transition flex items-center gap-2">
              <Phone size={14} />
              Callback
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
