import { NextResponse } from "next/server";

const insights = [
  {
    id: "aurora-17",
    title: "Aurora 17 sideloading campaign neutralized",
    severity: "high",
    description:
      "Responder agents isolated 4 containers and revoked 26 tokens after detecting suspicious sideloaded DLL activity across R&D workloads.",
    actions: ["Segmented workloads", "Revoked anomalous credentials", "Triggered deception beacons"],
    status: "contained",
    detectedAt: new Date(Date.now() - 3600 * 1000).toISOString()
  },
  {
    id: "glimmer-03",
    title: "Predictive detection of spear-phish cluster",
    severity: "medium",
    description:
      "Analyst agents correlated dark web chatter with inbound mail patterns to flag emerging campaign targeting finance leadership.",
    actions: ["Soft quarantined 12 messages", "Updated DMARC policy", "Alerted executive assistant"],
    status: "monitoring",
    detectedAt: new Date(Date.now() - 7200 * 1000).toISOString()
  },
  {
    id: "ember-22",
    title: "OT lateral movement simulation blocked",
    severity: "critical",
    description:
      "Red team simulation attempted pivot from HVAC network to production PLCs. Auton enforced zero-trust policy, blocking all malicious traffic.",
    actions: ["Blocked network path", "Recorded audit evidence", "Generated compliance attest"],
    status: "resolved",
    detectedAt: new Date(Date.now() - 10800 * 1000).toISOString()
  }
];

export function GET() {
  return NextResponse.json({ insights });
}
