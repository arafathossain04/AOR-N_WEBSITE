import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
  }

  // TODO: Send `body` through Resend or your preferred email provider here.
  return NextResponse.json({ message: "Enquiry accepted." }, { status: 202 });
}
