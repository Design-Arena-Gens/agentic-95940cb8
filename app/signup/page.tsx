import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-gradient-to-br from-brand-black via-brand-blue/10 to-brand-black px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-brand-yellow/30 bg-brand-black/80 p-10 shadow-glow">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Start for $50/month</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Ignite Auton AI within your enterprise</h1>
        <p className="mt-3 text-sm text-white/70">
          Complete the form below to provision your first autonomous defense mesh. Our activation team will provision connectors, guardrails, and onboarding resources tailored to your sector.
        </p>
        <form className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Full Name</label>
            <input
              className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
              placeholder="Alex Rivera"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Work Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
              placeholder="alex@yourcompany.com"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Company</label>
            <input
              className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
              placeholder="ObscuraQ Technologies"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Team Size</label>
            <select className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white focus:border-brand-yellow focus:outline-none">
              <option className="bg-brand-black">1-25</option>
              <option className="bg-brand-black">26-100</option>
              <option className="bg-brand-black">101-500</option>
              <option className="bg-brand-black">500+</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Primary Objectives</label>
            <textarea
              className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
              rows={4}
              placeholder="Deploy autonomous detection across hybrid cloud, automate compliance evidence, accelerate threat response..."
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-xs text-white/60">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border border-white/20 bg-brand-black" />
              I agree to the Auton AI master security agreement and incident response SLAs.
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border border-white/20 bg-brand-black" defaultChecked />
              Subscribe to threat intelligence dispatch and playbook updates.
            </label>
          </div>
          <button className="md:col-span-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-yellow hover:text-brand-black">
            Provision Starter Mesh
          </button>
        </form>
        <p className="mt-6 text-xs text-white/50">
          Already have access? <Link href="/auth/login" className="text-brand-yellow hover:text-brand-blue">Authenticate here</Link>.
        </p>
      </div>
    </div>
  );
}
