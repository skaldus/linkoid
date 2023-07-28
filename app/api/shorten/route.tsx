import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";

export async function POST(req: Request) {
  const nanoid = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    7
  );

  return NextResponse.json({ url: nanoid() });
}
