import { NavLink } from "react-router-dom";
import { featureMenu } from "../data/featureMenu";
import MenuItem from "./MenuItem";

export default function FeaturesDropdown() {
  return (
    <div className="relative group">
      {/* Trigger */}
      <NavLink
        to="/features/workforce"
        className={({ isActive }) =>
          `relative group transition-colors duration-300 ${
            isActive
              ? "text-primary"
              : "text-textSecondary hover:text-primary"
          }`
        }
      >
        Features
        {/* underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full`}
        />
      </NavLink>

      {/* Dropdown */}
      <div
        className="
          absolute
          left-0
          top-full
          mt-3
          w-72
          rounded-2xl
          bg-white
          border
          border-borderLight
          shadow-xl
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-200
          z-50
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
