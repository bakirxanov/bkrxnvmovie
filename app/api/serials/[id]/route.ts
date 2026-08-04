import { NextResponse } from "next/server";
import { getSerialById } from "@/lib/data/serials";

// GET /api/serials/:id -> the "API inside the API" for a single serial:
// its info PLUS the full seasons -> episodes -> video structure, so a
// client only needs one request to build an episode picker + player.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const serial = getSerialById(Number(id));

  if (!serial) {
    return NextResponse.json({ error: "Serial topilmadi" }, { status: 404 });
  }

  return NextResponse.json(serial);
}
