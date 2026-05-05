/* global process */
import { Resend } from 'resend';

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * POST JSON: { name, email, message, company?, budget?, timeline? }
 *
 * Env (Vercel):
 *   RESEND_API_KEY — required
 *   CONTACT_TO_EMAIL — where form submissions are delivered
 *   CONTACT_FROM_EMAIL — optional; defaults to onboarding@resend.dev
 *
 * Important: with `from: onboarding@resend.dev`, Resend only delivers to
 * allowed recipients (often your account / test addresses). To use
 * CONTACT_TO_EMAIL like support@s..., verify sawabuildstudio.com in Resend
 * and set CONTACT_FROM_EMAIL to an address on that domain.
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

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const to = process.env.CONTACT_TO_EMAIL?.trim() || 'support@sawabuildstudio.com';
    const from = process.env.CONTACT_FROM_EMAIL?.trim() || 'onboarding@resend.dev';

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

    const resend = new Resend(apiKey);

    let sendResult;
    try {
      sendResult = await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `[Contact] Message from ${name}`,
        text,
        html,
      });
    } catch (err) {
      console.error('[contact] Resend send threw', err);
      return Response.json(
        {
          error:
            'Could not reach the email service. Try again later or email us directly.',
        },
        { status: 502 }
      );
    }

    const { error } = sendResult;
    if (error) {
      const raw =
        typeof error.message === 'string'
          ? error.message
          : JSON.stringify(error).slice(0, 400);
      console.error('[contact] Resend error', raw);

      const lower = raw.toLowerCase();
      let userError =
        'Could not send your message. Please try again or email us directly.';

      const usingResendOnboarding = from.includes('onboarding@resend.dev');

      if (
        lower.includes('domain') ||
        lower.includes('verify') ||
        lower.includes('not allowed') ||
        (lower.includes('invalid') && lower.includes('to'))
      ) {
        userError = usingResendOnboarding
          ? 'Resend blocked this send. With onboarding@resend.dev you can usually only mail your own or test addresses—set CONTACT_TO_EMAIL in Vercel to the Gmail that worked in your test (or delivered@resend.dev). To receive at support@sawabuildstudio.com, verify sawabuildstudio.com in Resend and set CONTACT_FROM_EMAIL to an address on that domain.'
          : 'Could not deliver to this address. Check CONTACT_TO_EMAIL and that your sending domain is verified in Resend.';
      } else if (raw.length < 400) {
        userError = `Message could not be sent: ${raw}`;
      }

      return Response.json({ error: userError }, { status: 502 });
    }

    return Response.json({ ok: true });
  },
};
