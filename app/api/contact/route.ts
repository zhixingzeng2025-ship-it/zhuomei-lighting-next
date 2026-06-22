import { NextResponse } from "next/server";
import { normalizeInquiryPayload, zomeiApiRoutes } from "@/data/zomei-unified";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const inquiry = normalizeInquiryPayload(data);

    if (!inquiry) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      ok: true,
      mode: "mock",
      planned_api_path: zomeiApiRoutes.inquiries,
      inquiry: {
        ...inquiry,
        inquiry_id: `mock_${Date.now()}`,
      },
      message: "Inquiry received successfully.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send inquiry";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
