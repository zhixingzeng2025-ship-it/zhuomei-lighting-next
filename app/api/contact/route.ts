import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  country?: string;
  product?: string;
  details?: string;
};

const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/xgoqenro";

function isUsableBackendUrl(value?: string) {
  if (!value) return false;
  if (value.includes("your-backend.example.com")) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function isUsableFormspreeEndpoint(value?: string) {
  if (!value) return false;
  if (value.includes("your-form-id")) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "formspree.io";
  } catch {
    return false;
  }
}

async function sendWithFormspree(data: ContactPayload) {
  const endpoint = process.env.FORMSPREE_ENDPOINT || DEFAULT_FORMSPREE_ENDPOINT;

  if (!isUsableFormspreeEndpoint(endpoint)) {
    return NextResponse.json(
      {
        success: false,
        code: "FORMSPREE_NOT_CONFIGURED",
        message: "询盘表单未配置，请在 Vercel 添加 FORMSPREE_ENDPOINT 环境变量。",
      },
      { status: 500 }
    );
  }

  const response = await fetch(endpoint as string, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name?.trim(),
      email: data.email?.trim(),
      company: data.company?.trim() || "",
      country: data.country?.trim() || "",
      product: data.product?.trim() || "",
      details: data.details?.trim() || "",
      _subject: `[ZHUOMEI LIGHTING] New inquiry from ${data.name?.trim() || "Website"}`,
      _replyto: data.email?.trim(),
    }),
    cache: "no-store",
  });

  const payload = await response.json().catch(() => ({} as Record<string, unknown>));

  if (!response.ok) {
    return NextResponse.json(
      {
        success: false,
        message: (payload.error as string) || "Failed to send inquiry with Formspree.",
      },
      { status: response.status }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Inquiry received successfully.",
    },
    { status: 200 }
  );
}

async function saveWithInternalInquiryApi(request: Request, data: unknown) {
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
        message: (payload.error as string) || (payload.message as string) || "Failed to save inquiry",
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
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;
    const name = data.name?.trim();
    const email = data.email?.trim();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    if (isUsableFormspreeEndpoint(process.env.FORMSPREE_ENDPOINT || DEFAULT_FORMSPREE_ENDPOINT)) {
      return sendWithFormspree(data);
    }

    const backendUrl = process.env.BACKEND_CONTACT_URL;

    if (isUsableBackendUrl(backendUrl)) {
      try {
        const response = await fetch(backendUrl as string, {
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

        if (response.ok) {
          return NextResponse.json(
            {
              success: true,
              ...(payload || {}),
            },
            { status: 200 }
          );
        }

        console.warn("External contact backend failed, falling back to internal inquiry API", payload);
      } catch (error) {
        console.warn("External contact backend unavailable, falling back to internal inquiry API", error);
      }
    }

    if (process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.POSTGRES_URL_NON_POOLING) {
      return saveWithInternalInquiryApi(request, data);
    }

    return sendWithFormspree(data);
  } catch (error) {
    console.error("Failed to send inquiry", error);
    return NextResponse.json(
      { success: false, message: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
