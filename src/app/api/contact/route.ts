import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const receiptId = `MSG-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json(
      {
        ok: true,
        receiptId,
        timestamp: new Date().toISOString(),
        message: `Thank you ${name}! Your inquiry (${subject}) was received [Receipt #${receiptId}].`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload submitted to /api/contact" },
      { status: 400 }
    );
  }
}
