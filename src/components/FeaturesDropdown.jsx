import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { featureMenu } from "../data/featureMenu";
import MenuItem from "./MenuItem";

export default function FeaturesDropdown({ mobile = false }) {
  const [open, setOpen] = useState(false);

  /* =======================
     MOBILE VERSION
  ======================= */
  if (mobile) {
    return (
      <div className="space-y-2">
        {/* Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between text-sm font-medium text-textPrimary"
        >
          <span>Features</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Accordion */}
        {open && (
          <div className="ml-3 mt-2 space-y-2 border-l border-borderLight pl-4">
            {featureMenu.map((item) => (
              <MenuItem key={item.label} item={item} mobile />
            ))}
          </div>
        )}
      </div>
    );
  }

  /* =======================
     DESKTOP VERSION
  ======================= */
  return (
    <div className="relative group">
      {/* Trigger */}
      <NavLink
        to="/features/workforce"
        className={({ isActive }) =>
          `relative transition-colors duration-300 ${
            isActive
              ? "text-primary"
              : "text-textSecondary hover:text-primary"
          }`
        }
      >
        Features
        <span className="absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full" />
      </NavLink>

      {/* Dropdown */}
      <div
        className="
          absolute left-0 top-full mt-3 w-72
          rounded-2xl bg-white border border-borderLight shadow-xl
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200 z-50
        "
      >
        <div className="p-3 space-y-1">
          {featureMenu.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
