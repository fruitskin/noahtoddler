'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export default function CmsLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('joedollarsmirnov@gmail.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  async function submit(event: FormEvent) {
    event.preventDefault(); setError('')
    const result = await authClient.signIn.email({ email, password })
    if (result.error) setError('Unable to sign in. Check your credentials.')
    else { router.push('/cms'); router.refresh() }
  }
  return <main className="cms-auth"><form onSubmit={submit}><p className="eyebrow">NOAH / PRIVATE EDITOR</p><h1>Make some edits.</h1><label htmlFor="cms-email">Email</label><input id="cms-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><label htmlFor="cms-password">Password</label><input id="cms-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} /><button className="black-button" type="submit">SIGN IN ↗</button>{error && <p role="alert">{error}</p>}<p className="fine-print">Use a secure password with at least 8 characters.</p></form></main>
}
