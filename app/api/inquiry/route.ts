import { NextResponse } from "next/server";
import { normalizeInquiryPayload, zomeiApiRoutes } from "@/data/zomei-unified";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const inquiry = normalizeInquiryPayload(body);

    if (!inquiry) {
      return NextResponse.json(
        { ok: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      success: true,
      mode: "mock",
      planned_api_path: zomeiApiRoutes.inquiries,
      inquiry: {
        ...inquiry,
        inquiry_id: `mock_${Date.now()}`,
      },
      message: "Inquiry received successfully.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to save inquiry.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
