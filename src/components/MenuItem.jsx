import { NavLink } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MenuItem({ item, mobile = false }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  /* ---------- MOBILE ---------- */
  if (mobile) {
    return (
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <NavLink
            to={item.path}
            className="text-sm text-textSecondary hover:text-primary"
          >
            {item.label}
          </NavLink>

          {hasChildren && (
            <button onClick={() => setOpen(!open)}>
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {open && (
          <div className="ml-3 mt-1 space-y-1 border-l border-borderLight pl-3">
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} mobile />
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ---------- DESKTOP ---------- */
  return (
    <div className="relative group/item">
      <NavLink
        to={item.path}
        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-textSecondary hover:bg-bgLight hover:text-primary transition"
      >
        {item.label}
        {hasChildren && <ChevronRight size={14} />}
      </NavLink>

      {hasChildren && (
        <div
          className="
            absolute left-full top-0 ml-2 w-64
            rounded-xl bg-white border border-borderLight shadow-xl
            opacity-0 invisible
            group-hover/item:opacity-100 group-hover/item:visible
            transition-all duration-200
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
