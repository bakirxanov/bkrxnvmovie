import { NextResponse } from "next/server";
import { getAllPremieres } from "@/lib/data/premieres";

// GET /api/premieres -> returns the full list of premieres as JSON
export async function GET() {
  return NextResponse.json(getAllPremieres());
}
