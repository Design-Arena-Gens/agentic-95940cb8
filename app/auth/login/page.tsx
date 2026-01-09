import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-brand-black/90 px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-brand-black/80 p-8 shadow-glow">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Secure Access</p>
          <h1 className="mt-3 text-2xl font-semibold text-white">Welcome back to Auton AI</h1>
          <p className="mt-2 text-sm text-white/60">Authenticate to orchestrate your defense meshes.</p>
        </div>
        <form className="mt-8 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Work Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
              placeholder="you@obscuraq.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Access Key</label>
            <input
              type="password"
              className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-yellow hover:text-brand-black">
            Authenticate
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between text-xs text-white/50">
          <Link href="#" className="hover:text-brand-yellow">
            Forgot access?
          </Link>
          <Link href="/signup" className="hover:text-brand-yellow">
            Request account
          </Link>
        </div>
      </div>
    </div>
  );
}
