import { NextRequest, NextResponse } from "next/server";

const GF_BASE = process.env.NEXT_PUBLIC_WP_REST_URL || "https://cms.adl99.com.au/wp-json";
const GF_CONSUMER_KEY = process.env.GF_CONSUMER_KEY || "";
const GF_CONSUMER_SECRET = process.env.GF_CONSUMER_SECRET || "";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;
  const auth = Buffer.from(`${GF_CONSUMER_KEY}:${GF_CONSUMER_SECRET}`).toString("base64");

  const res = await fetch(`${GF_BASE}/gf/v2/forms/${formId}`, {
    headers: { Authorization: `Basic ${auth}` },
  });

  return NextResponse.json(await res.json());
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;
  const body = await req.json();
  const auth = Buffer.from(`${GF_CONSUMER_KEY}:${GF_CONSUMER_SECRET}`).toString("base64");

  console.log('[GF API Route] Submitting to form:', formId, 'with data:', body);

  // Use submissions endpoint which triggers notifications
  const res = await fetch(`${GF_BASE}/gf/v2/forms/${formId}/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify(body),
  });

  const responseData = await res.json();
  console.log('[GF API Route] Submission response:', responseData);

  return NextResponse.json(responseData, { status: res.status });
}
