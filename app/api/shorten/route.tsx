import { generateAlias, storeAlias } from "@/lib/shorter";
import { shortenSchema } from "@/lib/validations/shorten";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { url } = shortenSchema.parse(body);

    const alias = await generateAlias();

    await storeAlias(alias, url);

    return NextResponse.json({ alias });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not shortify your link. Please try again later.",
      { status: 500 }
    );
  }
}
