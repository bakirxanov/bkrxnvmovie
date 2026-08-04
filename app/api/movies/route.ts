import { NextResponse } from "next/server";
import { getAllMovies } from "@/lib/data/movies";

// GET /api/movies -> returns the full list of movies as JSON
export async function GET() {
  return NextResponse.json(getAllMovies());
}
