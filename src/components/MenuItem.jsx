import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function MenuItem({ item }) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="relative group/item">
      {/* Row */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-2
          rounded-lg
          px-3
          py-2
          text-sm
          hover:bg-bgLight
          transition
        "
      >
        {/* Parent label is ALWAYS clickable */}
        <NavLink
          to={item.path}
          className="flex-1 text-textSecondary hover:text-primary"
        >
          {item.label}
        </NavLink>

        {/* Arrow only if children exist */}
        {hasChildren && (
          <ChevronRight size={14} className="opacity-60" />
        )}
      </div>

      {/* Children submenu (hover only if exists) */}
      {hasChildren && (
        <div
          className="
            absolute
            left-full
            top-1
            ml-2
            w-64
            rounded-xl
            bg-white
            border
            border-borderLight
            shadow-xl
            opacity-0
            invisible
            group-hover/item:opacity-100
            group-hover/item:visible
            transition-all
            duration-200
            z-50
          "
        >
          <div className="p-2 space-y-1">
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
