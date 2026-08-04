import { NextResponse } from "next/server";
import { getAllCartoons } from "@/lib/data/cartoons";

// GET /api/cartoons -> returns the full list of cartoons as JSON
export async function GET() {
  return NextResponse.json(getAllCartoons());
}
