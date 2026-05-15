import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const backendUrl = process.env.BACKEND_CONTACT_URL;

    if (backendUrl) {
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
            message: (payload.error as string) || (payload.message as string) || "Failed to send inquiry",
          },
          { status: response.status }
        );
      }

      return NextResponse.json(
        {
          success: true,
          ...(payload || {}),
        },
        { status: 200 }
      );
    }

    const fallback = new URL("/api/inquiry", request.url);
    const response = await fetch(fallback, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const payload = await response.json().catch(() => ({} as Record<string, unknown>));

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: (payload.error as string) || (payload.message as string) || "Failed to send inquiry",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        success: (payload as { success?: boolean }).success ?? (payload as { ok?: boolean }).ok ?? true,
        ...(payload || {}),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send inquiry", error);
    return NextResponse.json(
      { success: false, message: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
