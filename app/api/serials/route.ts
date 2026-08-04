import { NextResponse } from "next/server";
import { getAllSerials } from "@/lib/data/serials";

// GET /api/serials -> returns every serial, each one already carrying its
// own nested seasons -> episodes list (see lib/data/serials.ts).
export async function GET() {
  return NextResponse.json(getAllSerials());
}
