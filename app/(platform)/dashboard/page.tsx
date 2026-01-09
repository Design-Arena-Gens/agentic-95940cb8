import { Suspense } from "react";
import { CheckCircle2, Flame, Loader2, ShieldCheck, Wifi, Zap } from "lucide-react";

async function fetchJSON<T>(input: string): Promise<T> {
  const res = await fetch(input, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${input}`);
  }
  return (await res.json()) as T;
}

async function StatusCard() {
  const data = await fetchJSON<{
    platform: string;
    status: string;
    meshesOnline: number;
    agentsActive: number;
    lastUpdated: string;
  }>("/api/status");

  return (
    <div className="rounded-3xl border border-brand-blue/30 bg-brand-blue/10 p-6">
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>{data.platform}</span>
        <span>{new Date(data.lastUpdated).toLocaleTimeString()}</span>
      </div>
      <p className="mt-4 text-2xl font-semibold text-white">Operational Mesh</p>
      <div className="mt-6 grid grid-cols-2 gap-6 text-sm text-white/70">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Meshes online</p>
          <p className="mt-2 text-3xl font-bold text-white">{data.meshesOnline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Agents active</p>
          <p className="mt-2 text-3xl font-bold text-white">{data.agentsActive}</p>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-brand-black/60 p-4 text-xs text-white/60">
        <p>Auton AI orchestrates distributed guardrails across your global estate. Response confidence at 99.8%.</p>
      </div>
    </div>
  );
}

async function InsightsTable() {
  const data = await fetchJSON<{
    insights: Array<{
      id: string;
      title: string;
      severity: string;
      description: string;
      actions: string[];
      status: string;
      detectedAt: string;
    }>;
  }>("/api/insights");

  return (
    <div className="rounded-3xl border border-white/10 bg-brand-black/80 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Live Incidents</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Autonomous agent insights</h2>
        </div>
        <button className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-brand-yellow hover:text-brand-yellow">
          Export report
        </button>
      </div>
      <div className="mt-6 space-y-6">
        {data.insights.map((insight) => (
          <div key={insight.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">{insight.title}</p>
                <p className="mt-1 text-xs text-white/60">Detected {new Date(insight.detectedAt).toLocaleTimeString()}</p>
              </div>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                  insight.severity === "critical"
                    ? "bg-red-500/15 text-red-300"
                    : insight.severity === "high"
                      ? "bg-orange-500/15 text-orange-300"
                      : "bg-amber-500/15 text-amber-300"
                }`}
              >
                {insight.severity}
              </span>
              <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-yellow">
                {insight.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">{insight.description}</p>
            <ul className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
              {insight.actions.map((action) => (
                <li key={action} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                  <CheckCircle2 className="h-3 w-3 text-brand-blue" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

async function PlaybooksGrid() {
  const data = await fetchJSON<{
    playbooks: Array<{
      id: string;
      title: string;
      targets: string[];
      automationScore: number;
      avgResolution: string;
      owner: string;
    }>;
  }>("/api/playbooks");

  return (
    <div className="rounded-3xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Playbook Studio</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Autonomous runbooks</h2>
        </div>
        <button className="rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold text-brand-black transition hover:bg-brand-blue hover:text-white">
          Create playbook
        </button>
      </div>
      <div className="mt-6 grid gap-4">
        {data.playbooks.map((playbook) => (
          <div key={playbook.id} className="rounded-2xl border border-white/10 bg-brand-black/80 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{playbook.title}</p>
              <span className="text-xs text-brand-yellow">{playbook.avgResolution}</span>
            </div>
            <p className="mt-2 text-xs text-white/60">Automation score {(playbook.automationScore * 100).toFixed(0)}%</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
              {playbook.targets.map((target) => (
                <span key={target} className="rounded-full border border-white/10 px-3 py-1">
                  {target}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/40">Owned by {playbook.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="bg-brand-black/90 px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Command Console</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Auton Defense Mesh Overview</h1>
            <p className="mt-2 text-sm text-white/60">
              Monitor autonomous agent collectives, review live incidents, and fine-tune composable playbooks across your hybrid estate.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-brand-yellow hover:text-brand-yellow">
              <ShieldCheck className="h-4 w-4" />
              Trust controls
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-yellow hover:text-brand-black">
              <Zap className="h-4 w-4" />
              Launch live drill
            </button>
          </div>
        </header>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Suspense fallback={<div className="rounded-3xl border border-white/10 p-6 text-white/60"><Loader2 className="animate-spin" /></div>}>
            <StatusCard />
          </Suspense>
          <div className="grid gap-8">
            <div className="rounded-3xl border border-white/10 bg-brand-black/80 p-6">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Mesh health</span>
                <span>Last 24h</span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Wifi className="h-5 w-5 text-brand-yellow" />
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brand-yellow">Signal</p>
                  <p className="mt-2 text-xl font-semibold text-white">99.99%</p>
                  <p className="text-xs text-white/50">Coverage uptime</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Flame className="h-5 w-5 text-orange-400" />
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brand-yellow">Threats</p>
                  <p className="mt-2 text-xl font-semibold text-white">42</p>
                  <p className="text-xs text-white/50">Neutralized automatically</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brand-yellow">Trust</p>
                  <p className="mt-2 text-xl font-semibold text-white">98%</p>
                  <p className="text-xs text-white/50">Policy adherence</p>
                </div>
              </div>
            </div>
            <Suspense fallback={<div className="rounded-3xl border border-white/10 p-6 text-white/60"><Loader2 className="animate-spin" /></div>}>
              <PlaybooksGrid />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<div className="rounded-3xl border border-white/10 p-6 text-white/60"><Loader2 className="animate-spin" /></div>}>
          <InsightsTable />
        </Suspense>
      </div>
    </div>
  );
}
