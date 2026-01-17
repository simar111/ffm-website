import { NavLink } from "react-router-dom";

export default function Footer() {
  const linkClass =
    "hover:text-primary transition-colors duration-200";

  return (
    <footer className="bg-[#0B1220] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">
              FFM<span className="text-primary">Pro</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xs leading-relaxed">
              A modern field force management platform to track, manage,
              and optimize your field teams in real time.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <NavLink to="/features/workforce" className={linkClass}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className={linkClass}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/features/integrations" className={linkClass}>
                  Integrations
                </NavLink>
              </li>
              <li>
                <NavLink to="/updates" className={linkClass}>
                  Updates
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className={linkClass}>
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={linkClass}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <NavLink to="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service" className={linkClass}>
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/security" className={linkClass}>
                  Security
                </NavLink>
              </li>
              <li>
                <NavLink to="/compliance" className={linkClass}>
                  Compliance
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} FFM Pro. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">
            {[
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Twitter", url: "https://twitter.com" },
              { name: "GitHub", url: "https://github.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors duration-200"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
