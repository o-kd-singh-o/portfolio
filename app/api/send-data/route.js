// app/api/send-data/route.js
import { NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://webhook.site/a33b551b-2c0a-4083-a500-6056f3839e7e';
const PAYLOAD     = { firstname: 'kd', lastname: 'singh' };

/**
 * GET /api/send-data
 */
export async function GET() {
  try {
    const resp = await fetch(WEBHOOK_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(PAYLOAD),
    });
    if (!resp.ok) throw new Error(`Webhook error: ${resp.status}`);
    const result = await resp.text();
    return NextResponse.json({ status: 'success', result });
  } catch (err) {
    return NextResponse.json(
      { status: 'error', message: err.message },
      { status: 500 }
    );
  }
}
