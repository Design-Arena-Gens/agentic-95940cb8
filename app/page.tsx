import { ArrowUpRight, CheckCircle2, Cpu, Layers, Radar, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";

const metrics = [
  { label: "MTTD", value: "< 12 sec", description: "Mean time to detect active threats across hybrid environments." },
  { label: "Automations", value: "1.4k+", description: "Curated playbooks orchestrated by Auton agent collectives." },
  { label: "Coverage", value: "92%", description: "Continuous monitoring across cloud, edge, and OT networks." }
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Autonomous Defense Mesh",
    description: "Deploy an adaptive mesh of AI agents that patrol every layer of your estate, continuously learning and evolving to neutralize adversaries at machine speed.",
    points: [
      "Distributed zero-trust enforcement", "Adaptive detection models tuned by sector intelligence", "Policy-aware response orchestrations"
    ]
  },
  {
    icon: Cpu,
    title: "Cognitive Threat Synthesis",
    description: "Fuse signals from SIEM, EDR, OT telemetry, and dark web crawlers into a unified knowledge graph that senses anomalies before exploitation.",
    points: [
      "Knowledge graph stitched to MITRE ATT&CK", "Adversarial simulation with synthetic data streams", "Predictive kill chain mapping"
    ]
  },
  {
    icon: Workflow,
    title: "Agentic Workflow Studio",
    description: "Design, test, and deploy security playbooks powered by GPT-4o and domain-tuned LLMs to automate complex investigation and remediation workflows.",
    points: [
      "Drag-and-drop autonomous runbooks", "Role-based guardrails and approvals", "Explainable remediation summaries"
    ]
  }
];

const tiers = [
  {
    name: "Starter",
    price: "$50",
    cycle: "/ month",
    tagline: "Perfect for high-growth startups securing hybrid teams.",
    highlight: false,
    features: [
      "Unlimited security telemetry ingestion",
      "3 autonomous defense meshes",
      "LLM-powered incident analyst",
      "Automated compliance evidence",
      "Community threat intelligence feeds"
    ]
  },
  {
    name: "Scale",
    price: "Talk to us",
    cycle: "",
    tagline: "For enterprises orchestrating multi-cloud and OT defenses.",
    highlight: true,
    features: [
      "Unlimited agent swarms and playbooks",
      "Premium dark web & HUMINT integrations",
      "Hypervisor and container runtime protection",
      "Dedicated adversarial red team companion",
      "Executive fusion center portal"
    ]
  }
];

const faqs = [
  {
    question: "How does Auton AI integrate with existing security stacks?",
    answer:
      "Auton AI provides turnkey connectors for the major SIEM, XDR, and IAM platforms. Our open GraphQL API and streaming webhooks let you ingest or export telemetry, incident states, and playbook outcomes in minutes."
  },
  {
    question: "What makes Auton AI agentic?",
    answer:
      "Each defense mesh deploys specialized agents—Recon, Analyst, Responder, and Executive—that collaborate through a secure coordination layer. They reason over a shared knowledge graph, negotiate remediation options, and trigger human escalations only when trust thresholds require it."
  },
  {
    question: "Does Auton AI support regulated industries?",
    answer:
      "Yes. Auton AI ships with hardened blueprints for healthcare, fintech, and critical infrastructure. Policy guardrails, evidence vaulting, and tamper-proof audit trails align with HIPAA, PCI-DSS, and NERC-CIP requirements."
  }
];

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:40px_40px] opacity-60" aria-hidden />
      <section className="relative border-b border-white/10 bg-gradient-to-br from-brand-black via-brand-black to-brand-blue/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
              Autonomous Cyber Resilience
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Auton AI unifies agentic intelligence, automated defense, and executive clarity.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Safeguard hybrid enterprises with autonomous agents that detect, decide, and dismantle adversaries across cloud, edge, and OT assets—while keeping leadership aligned in real time.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-0.5 hover:bg-brand-yellow hover:text-brand-black"
              >
                Launch Live Simulation
                <Sparkles className="h-4 w-4" />
              </Link>
              <Link
                href="#platform"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-brand-yellow hover:text-brand-yellow"
              >
                Explore Unified Platform
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-white/60">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-lg rounded-3xl border border-brand-blue/40 bg-gradient-to-br from-brand-blue/10 via-brand-black to-brand-yellow/10 p-8 shadow-glow">
              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-brand-black/80 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Mesh Status</p>
                    <p className="font-semibold">Global Defense Mesh</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Operational
                  </span>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Live Signals</p>
                  <ul className="mt-3 space-y-2 text-xs">
                    <li className="flex items-center gap-2 text-white/80">
                      <Radar className="h-4 w-4 text-brand-blue" />
                      Recon Agent triangulated anomalous lateral movement in APAC region.
                    </li>
                    <li className="flex items-center gap-2 text-white/80">
                      <Layers className="h-4 w-4 text-brand-yellow" />
                      Analyst Agent enriched event with MITRE T1021 & HUMINT context.
                    </li>
                    <li className="flex items-center gap-2 text-white/80">
                      <ShieldCheck className="h-4 w-4 text-emerald-300" />
                      Response Agent isolated affected workload and deployed microsegmentation policy.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Executive Brief</p>
                  <p className="mt-2 text-sm text-white/90">
                    "Auton AI contained breach propagation in 17 seconds with zero data loss. Maintaining tier-1 operational readiness." – CISO, Helios Biolabs
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-6 -bottom-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-4 text-xs text-white/80 backdrop-blur">
                <p>Auton AI calibrates countermeasures with a human-in-the-loop control plane. Every action is explainable, reversible, and compliant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-b border-white/10 bg-brand-black/90">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Unified Platform</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              One cloud-native command center across prevention, detection, and response.
            </h2>
            <p className="mt-4 text-white/70">
              Auton AI interconnects your telemetry, knowledge, and workflows into a composable security fabric. Activate autonomous defense meshes in minutes, not months.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-brand-yellow/80 hover:shadow-glow">
                <pillar.icon className="h-10 w-10 text-brand-blue transition group-hover:text-brand-yellow" />
                <h3 className="mt-6 text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm text-white/70">{pillar.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/60">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="border-b border-white/10 bg-gradient-to-br from-brand-blue/10 via-brand-black to-brand-yellow/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Agent Network</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Specialized AI agents collaborate to outpace adversaries.
              </h2>
              <p className="mt-4 text-white/70">
                Every Auton deployment spawns a swarm of agents with explicit missions, shared situational awareness, and policy-anchored decision rights.
              </p>
              <div className="mt-8 space-y-6 text-sm text-white/70">
                <div className="rounded-2xl border border-brand-blue/20 bg-brand-black/80 p-6">
                  <h3 className="text-lg font-semibold text-white">Recon Agent</h3>
                  <p className="mt-2">
                    Continuously harvests signals from endpoints, cloud trails, OT sensors, social chatter, and adversarial infra to populate the Auton Knowledge Graph.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-yellow/20 bg-brand-black/80 p-6">
                  <h3 className="text-lg font-semibold text-white">Analyst Agent</h3>
                  <p className="mt-2">
                    Applies reasoning over the graph with LLM and neuro-symbolic inference to prioritize threats, craft hypothesis trees, and prepare exec briefs.
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-brand-black/80 p-6">
                  <h3 className="text-lg font-semibold text-white">Responder Agent</h3>
                  <p className="mt-2">
                    Launches validated playbooks, coordinates with IAM/ITSM systems, and keeps humans in-the-loop via policy-based guardrails.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-brand-black/80 p-8 shadow-glow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Live Mesh Simulation</p>
                    <p className="text-sm text-white/60">Telemetry fusion across 7 regions</p>
                  </div>
                  <span className="text-xs font-semibold text-brand-yellow">Autonomous</span>
                </div>
                <div className="mt-6 space-y-4 text-xs text-white/70">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-white/80">Predictive Kill Chain</p>
                    <p className="mt-2 text-white/60">
                      Probability of lateral escalation dropped to 0.04% after microsegmentation enforcement.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-4">
                    <p className="text-white/80">Knowledge Graph Pulse</p>
                    <p className="mt-2 text-white/60">124 new threat primitives learned in the last 24 hours.</p>
                  </div>
                  <div className="rounded-2xl border border-brand-yellow/20 bg-brand-yellow/10 p-4">
                    <p className="text-white/80">Executive Brief Stream</p>
                    <p className="mt-2 text-white/60">
                      3 incidents resolved autonomously. 0 escalations pending review.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-brand-blue/30 bg-brand-black/90 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Agent Studio</p>
                <h3 className="mt-4 text-xl font-semibold text-white">Design new agents with natural language.</h3>
                <p className="mt-3 text-sm text-white/70">
                  Describe detection needs, codify guardrails, and let Auton synthesize runtime policies and validation suites automatically.
                </p>
                <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-brand-black shadow-brand-yellow/30 transition hover:bg-brand-blue hover:text-white">
                  Launch Agent Studio
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intel" className="border-b border-white/10 bg-brand-black/95">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue/10 via-brand-black to-brand-black p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Threat Intelligence Cloud</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Intelligence fused from global telemetry, dark web reconnaissance, and sector-specific HUMINT.
              </h3>
              <p className="mt-4 text-sm text-white/70">
                Auton Intelligence Cloud ingests over 4.5M signals per minute, orchestrates enrichment pipelines, and delivers actionable insights directly into your mesh.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-brand-blue" />
                  <span>Adaptive LLM narratives convert raw intel into executive-ready storyboards with risk scorings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="mt-1 h-4 w-4 text-brand-yellow" />
                  <span>Threat genome clustering correlates variant families and command-and-control evolutions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Radar className="mt-1 h-4 w-4 text-emerald-300" />
                  <span>Deception beacons create counter-intelligence loops to divert adversaries from production systems.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-blue/30 bg-brand-black/80 p-8 shadow-glow">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Auton Intel Stream</span>
                <span>Updated seconds ago</span>
              </div>
              <div className="mt-6 space-y-5 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">HUMINT // KESTREL-52</p>
                  <p className="mt-2 text-white/70">
                    Underground forum chatter indicates targeting of biotech R&D assets leveraging new sideloading loader. Mitigation runbook AURORA-17 prepared.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 p-4">
                  <p className="font-semibold text-white">DARKNET FEEDS // LAMBDA VEIL</p>
                  <p className="mt-2 text-white/70">
                    23 new exfiltration endpoints fingerprinted. Responder agents deploying deception credentials to sinkhole channels.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/10 p-4">
                  <p className="font-semibold text-white">CLOUD TELEMETRY // APAC</p>
                  <p className="mt-2 text-white/70">
                    Anomalous graph traversal discovered in serverless workload. Analyst agent mapping cross-account trust relationships.
                  </p>
                </div>
              </div>
              <Link
                href="/platform/intelligence"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:text-white"
              >
                Dive deeper in the intelligence cloud
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="differentiators" className="border-b border-white/10 bg-gradient-to-br from-brand-black via-brand-blue/10 to-brand-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Why Auton</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Built for security leaders who demand verifiable autonomy.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-brand-yellow/30 bg-brand-yellow/10 p-8 text-sm text-white/80">
              <h3 className="text-xl font-semibold text-white">Explainable autonomy</h3>
              <p className="mt-4">
                Every agent action is backed by a provenance chain, evidential reasoning graph, and simulation logs signed to your cryptographic trust anchor.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-blue/30 bg-brand-blue/10 p-8 text-sm text-white/80">
              <h3 className="text-xl font-semibold text-white">Composable defense fabric</h3>
              <p className="mt-4">
                Drag-and-drop modules fuse with your CI/CD, HRIS, IAM, and OT systems. Deploy to any cloud with zero-trust service mesh baked in.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-brand-black/80 p-8 text-sm text-white/80">
              <h3 className="text-xl font-semibold text-white">Executive clarity</h3>
              <p className="mt-4">
                Real-time posture dashboards translate technical incidents into economic impact and compliance status for boards and regulators.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-brand-black/80 p-8 text-sm text-white/80">
              <h3 className="text-xl font-semibold text-white">SecOps velocity</h3>
              <p className="mt-4">
                Collaborate with AI copilots that draft investigation notes, policy updates, and response communication ready for stakeholder sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-white/10 bg-brand-black/95">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Pricing</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Get started at just $50/month.</h2>
            <p className="mt-4 text-white/70">
              Launch autonomous defense in days with our starter tier. Scale to enterprise-grade resilience with dedicated intelligence, red teaming, and compliance automation.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl border p-8 transition ${
                  tier.highlight
                    ? "border-brand-yellow/60 bg-brand-yellow/10 shadow-glow"
                    : "border-white/10 bg-brand-black/80"
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Recommended</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-brand-yellow">
                  {tier.price}
                  <span className="text-sm font-normal text-white/70">{tier.cycle}</span>
                </p>
                <p className="mt-2 text-sm text-white/70">{tier.tagline}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-brand-blue" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-yellow hover:text-brand-black">
                  {tier.highlight ? "Talk with Auton Architect" : "Start Auton Starter"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="border-b border-white/10 bg-brand-black/90">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Resources</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Prepare your teams for autonomous defense.</h2>
              <p className="mt-4 text-white/70">
                Explore ready-to-deploy playbooks, compliance guides, and human teaming playbooks crafted from global response operations.
              </p>
              <div className="mt-8 space-y-6">
                <article className="rounded-3xl border border-white/10 bg-brand-black/80 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Guided Launch</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">90-day Auton ignition program</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Joint threat modeling workshops, policy tailoring, and simulation drills to operationalize agentic security.
                  </p>
                </article>
                <article className="rounded-3xl border border-brand-blue/30 bg-brand-blue/10 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Compliance</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">Automated evidence vault</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Auton AI continuously collects and tags audit-ready evidence, mapping controls to frameworks like SOC2, NIST CSF, and ISO 27001.
                  </p>
                </article>
              </div>
            </div>
            <div className="rounded-3xl border border-brand-yellow/30 bg-brand-yellow/10 p-8 shadow-glow">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Request Demo</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">See Auton AI in action.</h3>
              <p className="mt-4 text-sm text-white/70">
                Our team will orchestrate a live scenario tuned to your sector. Experience agentic defense closing the loop from detection to executive briefing.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
                  placeholder="Work email"
                  type="email"
                  required
                />
                <input
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 focus:border-brand-yellow focus:outline-none"
                  placeholder="Company"
                  required
                />
                <button className="w-full rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-blue hover:text-white">
                  Schedule Simulation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-gradient-to-br from-brand-blue/10 via-brand-black to-brand-blue/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-yellow">Autonomous Future</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Secure your enterprise with an AI-first cyber defense fabric.
          </h2>
          <p className="max-w-2xl text-white/70">
            Auton AI delivers resilient, explainable, and globally coordinated cyber operations so your teams can concentrate on innovation.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-yellow hover:text-brand-black"
            >
              Get Started for $50/mo
            </Link>
            <Link
              href="mailto:sales@obscuraq.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-brand-yellow hover:text-brand-yellow"
            >
              Talk with Sales
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
