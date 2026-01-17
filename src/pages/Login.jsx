import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Login() {
  const [ref, visible] = useReveal();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-bgLight overflow-hidden flex items-center pt-24"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute -top-40 -right-40 h-[360px] w-[360px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – IMAGE ONLY */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/login-cover.png"
                alt="Field force management"
                className="h-full w-full object-cover"
              />

              {/* Subtle overlay (no content) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT – LOGIN FORM */}
         <div
  className={`w-full max-w-[380px] mx-auto transition-all duration-700 ${
    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
  }`}
>
  <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-borderLight shadow-2xl p-9 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)] transition-shadow">

    <span className="inline-flex rounded-full bg-primary/10 text-primary px-4 py-1 text-xs font-medium">
      Welcome back
    </span>

    <h2 className="mt-4 text-[26px] font-semibold tracking-tight text-textPrimary">
      Sign in to FFM Pro
    </h2>

    <p className="mt-1 text-sm text-textSecondary">
      Access your dashboard
    </p>

    <form className="mt-7 space-y-4">

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-textPrimary">
          Email address
        </label>
        <div className="relative mt-1.5">
          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" />
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-borderLight pl-10 pr-3 py-3 text-sm
              bg-white focus:outline-none focus:ring-2 focus:ring-primary/30
              focus:border-primary transition-shadow"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-xs font-medium text-textPrimary">
          Password
        </label>
        <div className="relative mt-1.5">
          <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full rounded-xl border border-borderLight pl-10 pr-10 py-3 text-sm
              bg-white focus:outline-none focus:ring-2 focus:ring-primary/30
              focus:border-primary transition-shadow"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-primary transition"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Forgot */}
      <div className="flex justify-end">
        <a href="#" className="text-xs font-medium text-primary hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white
          hover:bg-primaryDark hover:shadow-[0_8px_30px_rgba(59,130,246,0.35)]
          transition-all active:scale-95"
      >
        Sign in
      </button>
    </form>

    <p className="mt-6 text-center text-xs text-textSecondary">
      Don’t have an account?{" "}
      <a href="#" className="text-primary font-medium hover:underline">
        Request access
      </a>
    </p>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
