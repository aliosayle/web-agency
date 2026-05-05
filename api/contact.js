/* global process */
import { Buffer } from 'node:buffer';

const RESEND_API = 'https://api.resend.com/emails';

function parseJsonBody(req) {
  const raw = req.body;
  if (raw == null) return {};
  if (typeof raw === 'object' && !Buffer.isBuffer(raw)) return raw;
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }
  return {};
}

/**
 * POST JSON: { name, email, message, company?, budget?, timeline? }
 * Env (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY — required (Resend dashboard → API Keys)
 *   CONTACT_TO_EMAIL — inbox that receives submissions (default: support@sawabuildstudio.com)
 *   CONTACT_FROM_EMAIL — must be a sender Resend allows (domain verified, or Resend test domain)
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = parseJsonBody(req);

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 200) : '';
  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 320) : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 10000) : '';
  const company = typeof body.company === 'string' ? body.company.trim().slice(0, 200) : '';
  const budget = typeof body.budget === 'string' ? body.budget.trim().slice(0, 100) : '';
  const timeline = typeof body.timeline === 'string' ? body.timeline.trim().slice(0, 100) : '';

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required.' });
    return;
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'support@sawabuildstudio.com';
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || 'SawaBuild Studio <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    res.status(503).json({
      error: 'Email sending is not configured yet.',
    });
    return;
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    budget && `Budget: ${budget}`,
    timeline && `Timeline: ${timeline}`,
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const outbound = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Contact] Message from ${name}`,
      text,
    }),
  });

  if (!outbound.ok) {
    const errBody = await outbound.text().catch(() => '');
    console.error('[contact] Resend error', outbound.status, errBody.slice(0, 500));
    res.status(502).json({
      error: 'Could not send your message. Please try again or email us directly.',
    });
    return;
  }

  res.status(200).json({ ok: true });
}
