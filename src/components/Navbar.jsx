import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FeaturesDropdown from "./FeaturesDropdown";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
     {name: "Industries", path:"/industries"}
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
      
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 font-medium">
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

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                  /* underline stays for active route */
                  window.location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          {/* Login (secondary) */}
          <NavLink
  to="/login"
  className={({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-primary/10 text-primary"
        : "text-textSecondary hover:text-primary hover:bg-bgLight"
    }`
  }
>
  Login
</NavLink>


          {/* Get Started (primary CTA) */}
          <NavLink
            to="/contact"
            className="relative overflow-hidden rounded-lg bg-primary px-6 py-2.5 text-white font-medium transition-all duration-300 hover:bg-primaryDark hover:shadow-lg active:scale-95"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </NavLink>
        </div>
        
      </div>
    </nav>
  );
}
