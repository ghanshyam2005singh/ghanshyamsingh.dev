import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    const safeName = String(name || 'Website Visitor');
    const safeEmail = String(email || '');
    const safeMessage = String(message || '');

    if (!safeEmail || !safeMessage) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    const data = await resend.emails.send({
      from: 'team@alumconn.in',
      to: 'ghanshyam2005singh@gmail.com',
      replyTo: safeEmail,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
