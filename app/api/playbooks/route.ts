import { NextResponse } from "next/server";

const playbooks = [
  {
    id: "runbook-aurora",
    title: "AURORA - Ransomware Containment",
    targets: ["Endpoints", "Cloud Workloads"],
    automationScore: 0.92,
    avgResolution: "4m 12s",
    owner: "Responder Agent"
  },
  {
    id: "runbook-neptune",
    title: "NEPTUNE - Insider Threat Investigation",
    targets: ["HRIS", "IAM", "Messaging"],
    automationScore: 0.81,
    avgResolution: "17m 45s",
    owner: "Analyst Agent"
  },
  {
    id: "runbook-falcon",
    title: "FALCON - OT Lateral Movement",
    targets: ["ICS", "SCADA"],
    automationScore: 0.88,
    avgResolution: "9m 03s",
    owner: "Recon Agent"
  }
];

export function GET() {
  return NextResponse.json({ playbooks });
}
