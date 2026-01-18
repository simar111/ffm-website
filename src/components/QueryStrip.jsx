import { Phone } from "lucide-react";

export default function QuickQueryStrip() {
  return (
    <div className="sticky top-[72px] z-40 w-full border-b border-borderLight bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[56px] flex items-center justify-center">

          {/* CENTERED CONTENT */}
          <div className="flex items-center gap-4 w-full max-w-5xl justify-center">

            {/* Text */}
            <div className="flex items-center gap-2 text-sm font-medium text-textSecondary whitespace-nowrap">
              💬 <span>Quick query?</span>
            </div>

            {/* Inputs */}
            <input
              type="text"
              placeholder="Name"
              className="h-9 w-44 rounded-md border border-borderLight bg-white
              px-3 text-sm text-textPrimary
              focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            <input
              type="tel"
              placeholder="Mobile number"
              className="h-9 w-52 rounded-md border border-borderLight bg-white
              px-3 text-sm text-textPrimary
              focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            {/* Button */}
            <button
              className="h-9 inline-flex items-center gap-2 rounded-md
              bg-primary px-5 text-sm font-medium text-white
              hover:bg-primaryDark hover:shadow-sm transition active:scale-95"
            >
              <Phone size={14} />
              Callback
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
