import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const backendUrl = process.env.BACKEND_CONTACT_URL;

  if (!backendUrl) {
    return NextResponse.json(
      { success: false, error: "BACKEND_CONTACT_URL is not configured" },
      { status: 500 }
    );
  }

  try {
    const data = await request.json();
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const text = await response.text();
    let payload: Record<string, unknown> = {};

    if (text) {
      try {
        payload = JSON.parse(text) as Record<string, unknown>;
      } catch {
        payload = { message: text };
      }
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: (payload.error as string) || (payload.message as string) || "Failed to send inquiry",
        },
        { status: response.status }
      );
    }

    if (payload && Object.keys(payload).length > 0) {
      return NextResponse.json(
        {
          success: payload.success ?? true,
          ...payload,
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send inquiry", error);
    return NextResponse.json(
      { success: false, error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
