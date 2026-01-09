import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    platform: "Auton AI",
    status: "operational",
    meshesOnline: 8,
    agentsActive: 153,
    lastUpdated: new Date().toISOString()
  });
}
