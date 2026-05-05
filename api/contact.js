/* global process */

const RESEND_API = 'https://api.resend.com/emails';

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * POST JSON: { name, email, message, company?, budget?, timeline? }
 * Env (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY — required
 *   CONTACT_TO_EMAIL — recipient (default: support@sawabuildstudio.com)
 *   CONTACT_FROM_EMAIL — must be allowed by Resend (verify your domain; test with delivered@resend.dev)
 */
export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    if (!body || typeof body !== 'object') {
      return Response.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const name = typeof body.name === 'string' ? body.name.trim().slice(0, 200) : '';
    const email = typeof body.email === 'string' ? body.email.trim().slice(0, 320) : '';
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, 10000) : '';
    const company = typeof body.company === 'string' ? body.company.trim().slice(0, 200) : '';
    const budget = typeof body.budget === 'string' ? body.budget.trim().slice(0, 100) : '';
    const timeline = typeof body.timeline === 'string' ? body.timeline.trim().slice(0, 100) : '';

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || 'support@sawabuildstudio.com';
    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() || 'SawaBuild Studio <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY is not set');
      return Response.json({ error: 'Email sending is not configured yet.' }, { status: 503 });
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

    const html = `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;line-height:1.5">${escapeHtml(text)}</pre>`;

    let outbound;
    try {
      outbound = await fetch(RESEND_API, {
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
          html,
        }),
      });
    } catch (err) {
      console.error('[contact] Fetch to Resend failed', err);
      return Response.json(
        {
          error:
            'Could not reach the email service. Try again later or email us directly.',
        },
        { status: 502 }
      );
    }

    if (!outbound.ok) {
      const errBody = await outbound.text().catch(() => '');
      console.error('[contact] Resend error', outbound.status, errBody.slice(0, 800));

      let resendHint = '';
      try {
        const parsed = JSON.parse(errBody);
        if (typeof parsed.message === 'string') {
          resendHint = parsed.message;
        }
      } catch {
        /* ignore */
      }

      const lower = resendHint.toLowerCase();
      let userError =
        'Could not send your message. Please try again or email us directly.';

      if (
        lower.includes('domain') ||
        lower.includes('verify') ||
        lower.includes('not allowed') ||
        outbound.status === 403
      ) {
        userError =
          'Email is not fully set up yet. In Resend, verify your domain and set CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL in Vercel. For a quick test, set CONTACT_TO_EMAIL to delivered@resend.dev.';
      } else if (outbound.status === 422 && resendHint) {
        userError = `Message could not be sent: ${resendHint}`;
      }

      return Response.json({ error: userError }, { status: 502 });
    }

    return Response.json({ ok: true });
  },
};
