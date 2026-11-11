'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT = 'team@noahtoddler.com'
const MAX_LENGTH = 320
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function sendInfoSignup(rawValue: string): Promise<{ ok: true } | { ok: false; error: string }> {
  const value = (rawValue ?? '').trim()

  if (!value) return { ok: false, error: 'Please enter your email address.' }
  if (value.length > MAX_LENGTH) return { ok: false, error: 'That entry is too long.' }
  if (!EMAIL_PATTERN.test(value)) return { ok: false, error: 'Please enter a valid email address.' }

  const fromDomain = process.env.RESEND_EMAIL_DOMAIN
  if (!fromDomain) return { ok: false, error: 'Email sending is not configured.' }

  const { error } = await resend.emails.send(
    {
      from: `Noah Toddler <signup@${fromDomain}>`,
      to: [RECIPIENT],
      replyTo: value,
      subject: `Info session signup: ${value}`,
      text: `New info session signup\n\nEmail: ${value}\n`,
      html: `<p><strong>New info session signup</strong></p><p>Email: ${escapeHtml(value)}</p>`,
    },
    { idempotencyKey: `info-signup/${value.toLowerCase()}/${new Date().toISOString().slice(0, 10)}` },
  )

  if (error) {
    console.error('Resend error:', error.message)
    return { ok: false, error: 'Something went wrong sending your request. Please try again.' }
  }

  return { ok: true }
}
