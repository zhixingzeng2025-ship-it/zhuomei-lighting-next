import { NextResponse } from "next/server";
import {
  createClient,
  createPool,
  type QueryResult,
  type QueryResultRow,
  type VercelClient,
  type VercelPool,
} from "@vercel/postgres";

export const runtime = "nodejs";

type Primitive = string | number | boolean | undefined | null;

type InquiryPayload = {
  name?: string;
  email?: string;
  company?: string;
  country?: string;
  product?: string;
  details?: string;
};

function escapeHtml(value?: string) {
  return (value || "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let cachedPool: VercelPool | undefined;
let cachedPoolConnectionString = "";

function buildPostgresUrlFromParts() {
  const host = process.env.POSTGRES_HOST;
  const user = process.env.POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD;
  const database = process.env.POSTGRES_DATABASE;

  if (!host || !user || !password || !database) return undefined;

  const port = process.env.POSTGRES_PORT ? `:${process.env.POSTGRES_PORT}` : "";
  return `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}${port}/${encodeURIComponent(database)}?sslmode=require`;
}

function getPostgresConnectionString() {
  return (
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
      process.env.POSTGRES_URL_NON_POOLING ||
    buildPostgresUrlFromParts()
  );
}

function isLocalhostConnectionString(connectionString: string) {
  try {
    const url = new URL(connectionString.replace(/^postgres(?:ql)?:\/\//, "https://"));
    return url.hostname === "localhost" || url.hostname === "127.0.0.1";
  } catch {
    return false;
  }
}

function canUseConnectionPool(connectionString: string) {
  return isLocalhostConnectionString(connectionString) || connectionString.includes("-pooler.");
}

async function runSql<O extends QueryResultRow>(
  strings: TemplateStringsArray,
  ...values: Primitive[]
): Promise<QueryResult<O>> {
  const connectionString = getPostgresConnectionString();

  if (!connectionString) {
    throw new Error("Missing POSTGRES_URL or DATABASE_URL.");
  }

  if (canUseConnectionPool(connectionString)) {
    if (!cachedPool || cachedPoolConnectionString !== connectionString) {
      cachedPool = createPool({ connectionString });
      cachedPoolConnectionString = connectionString;
    }

    return cachedPool.sql<O>(strings, ...values);
  }

  const client: VercelClient = createClient({ connectionString });
  await client.connect();

  try {
    return await client.sql<O>(strings, ...values);
  } finally {
    await client.end();
  }
}

async function ensureTable() {
  await runSql`
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

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeCompany = escapeHtml(payload.company);
  const safeCountry = escapeHtml(payload.country);
  const safeProduct = escapeHtml(payload.product);
  const safeDetails = escapeHtml(payload.details).replace(/\n/g, "<br/>");
  const subject = `[ZHUOMEI LIGHTING] New inquiry from ${payload.name}`;
  const html = `
    <div style="margin:0;background:#f4f7fb;padding:28px;font-family:Arial,Helvetica,sans-serif;color:#0f1729;line-height:1.6">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dfe7f3;border-radius:22px;overflow:hidden">
        <div style="background:#081a3b;padding:24px 28px;color:#ffffff">
          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#7db8ff;font-weight:700">ZHUOMEI LIGHTING</div>
          <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25">New Website Inquiry</h1>
          <p style="margin:8px 0 0;color:#cbd8ef;font-size:14px">A customer submitted an inquiry from the official website.</p>
        </div>

        <div style="padding:26px 28px">
          <h2 style="margin:0 0 14px;font-size:18px;color:#081a3b">Customer Information</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="width:130px;padding:10px 0;color:#64748b">Name</td>
              <td style="padding:10px 0;font-weight:700;color:#0f1729">${safeName}</td>
            </tr>
            <tr>
              <td style="width:130px;padding:10px 0;color:#64748b">Email</td>
              <td style="padding:10px 0"><a href="mailto:${safeEmail}" style="color:#1f7ae0;text-decoration:none;font-weight:700">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="width:130px;padding:10px 0;color:#64748b">Company</td>
              <td style="padding:10px 0;color:#0f1729">${safeCompany}</td>
            </tr>
            <tr>
              <td style="width:130px;padding:10px 0;color:#64748b">Country</td>
              <td style="padding:10px 0;color:#0f1729">${safeCountry}</td>
            </tr>
            <tr>
              <td style="width:130px;padding:10px 0;color:#64748b">Product</td>
              <td style="padding:10px 0;color:#0f1729;font-weight:700">${safeProduct}</td>
            </tr>
          </table>

          <div style="height:1px;background:#e8eef7;margin:18px 0 22px"></div>

          <h2 style="margin:0 0 12px;font-size:18px;color:#081a3b">Project Details</h2>
          <div style="background:#f8fbff;border:1px solid #e1eaf7;border-radius:16px;padding:16px 18px;font-size:14px;color:#1e293b">
            ${safeDetails}
          </div>

          <div style="margin-top:24px;padding:16px 18px;background:#fff8e6;border:1px solid #ffe1a6;border-radius:16px;color:#6b4b00;font-size:13px">
            Suggested next step: reply within 24 hours, confirm product requirements, project quantity, destination country, and whether a datasheet or quotation is needed.
          </div>

          <p style="margin:24px 0 0;color:#64748b;font-size:12px">
            This message was generated automatically by the ZHUOMEI LIGHTING website inquiry form.
          </p>
        </div>
      </div>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
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

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    console.warn("Failed to send inquiry notification email", response.status, text);
  }
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

    if (!getPostgresConnectionString()) {
      return NextResponse.json(
        {
          ok: false,
          code: "DATABASE_NOT_CONFIGURED",
          message: "询盘数据库未配置，请在 Vercel 绑定 Postgres，或添加 POSTGRES_URL / DATABASE_URL 环境变量。",
        },
        { status: 500 }
      );
    }

    try {
      await ensureTable();

      await runSql`
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
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown database error";
      console.error("Failed to save inquiry to database", error);
      return NextResponse.json(
        {
          ok: false,
          code: "DATABASE_SAVE_FAILED",
          message: `询盘数据库保存失败：${message}`,
        },
        { status: 500 }
      );
    }

    try {
      await sendNotificationEmail({ ...body, name, email });
    } catch (error) {
      console.warn("Inquiry saved, but notification email failed", error);
    }

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
