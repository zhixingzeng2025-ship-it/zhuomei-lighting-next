import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const runtime = "nodejs";

type InquiryPayload = {
  name?: string;
  email?: string;
  company?: string;
  country?: string;
  product?: string;
  details?: string;
};

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS inquiries (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      country TEXT,
      product TEXT,
      details TEXT,
      source TEXT NOT NULL DEFAULT 'website',
      user_agent TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;
}

async function sendNotificationEmail(payload: Required<Pick<InquiryPayload, "name" | "email">> & InquiryPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL_TO;
  const from = process.env.NOTIFICATION_EMAIL_FROM;

  if (!apiKey || !to || !from) return;

  const subject = `New inquiry from ${payload.name}`;
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f1729">
      <h2 style="margin:0 0 16px;color:#081A3B">New Website Inquiry</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Company:</strong> ${payload.company || "-"}</p>
      <p><strong>Country:</strong> ${payload.country || "-"}</p>
      <p><strong>Product:</strong> ${payload.product || "-"}</p>
      <p><strong>Details:</strong><br/>${(payload.details || "-").replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: payload.email,
    }),
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    await ensureTable();

    await sql`
      INSERT INTO inquiries (name, email, company, country, product, details, source, user_agent)
      VALUES (
        ${name},
        ${email},
        ${body.company?.trim() || null},
        ${body.country?.trim() || null},
        ${body.product?.trim() || null},
        ${body.details?.trim() || null},
        'website',
        ${request.headers.get("user-agent") || null}
      );
    `;

    await sendNotificationEmail({ ...body, name, email });

    return NextResponse.json({
      ok: true,
      message: "Inquiry received successfully.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown server error";
    return NextResponse.json(
      {
        ok: false,
        message: "Failed to save inquiry.",
        error: process.env.NODE_ENV === "development" ? message : undefined,
      },
      { status: 500 }
    );
  }
}
