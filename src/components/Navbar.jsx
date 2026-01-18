import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import FeaturesDropdown from "./FeaturesDropdown";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-borderLight"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          FFM<span className="text-textPrimary">Pro</span>
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <FeaturesDropdown />

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-textSecondary hover:text-primary"
                }`
              }
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                  window.location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-textSecondary hover:text-primary hover:bg-bgLight"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/contact"
            className="relative overflow-hidden rounded-lg bg-primary px-6 py-2.5 text-white font-medium transition-all hover:bg-primaryDark hover:shadow-lg active:scale-95"
          >
            Get Started
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-textPrimary hover:bg-bgLight transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 bg-white border-t border-borderLight space-y-4">

          {/* Features */}
          <FeaturesDropdown mobile />

          {/* Links */}
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-textSecondary hover:text-primary transition"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="h-px bg-borderLight my-4" />

          {/* Mobile CTA */}
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-textPrimary hover:bg-bgLight transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primaryDark transition"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
