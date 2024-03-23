import { NextRequest, NextResponse } from "next/server";

import { notes } from "./notesData";

export async function GET() {
  return NextResponse.json({ status: 200,data:notes });
}

