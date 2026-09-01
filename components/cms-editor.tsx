'use client'

import { useState } from 'react'
import { saveContent } from '@/app/actions/content'
import { authClient } from '@/lib/auth-client'

type Entry = { key: string; value: string; updatedAt: Date; updatedBy: string }

export default function CmsEditor({ email, entries }: { email: string; entries: Entry[] }) {
  const [items, setItems] = useState(entries.map((entry) => ({ ...entry, value: entry.value })))
  const [status, setStatus] = useState('')
  async function save(key: string, value: string) { setStatus('Saving…'); await saveContent(key, value); setStatus('Saved') }
  async function signOut() { await authClient.signOut(); window.location.href = '/cms/login' }
  return <main className="cms-shell"><header className="cms-header"><div><p className="eyebrow">NOAH / PRIVATE EDITOR</p><h1>Site copy</h1></div><div className="cms-account"><span>{email}</span><button onClick={signOut}>SIGN OUT</button></div></header><section className="cms-panel"><p className="fine-print">Edit the text fields below. Changes publish immediately to the connected site once the matching content key is wired into the page.</p>{items.length === 0 ? <p className="cms-empty">No content entries yet. Add your first text field below.</p> : items.map((item, index) => <label className="cms-field" key={item.key}><span>{item.key}</span><textarea value={item.value} onChange={(e) => setItems((current) => current.map((entry, i) => i === index ? { ...entry, value: e.target.value } : entry))} /><button className="black-button" onClick={() => save(item.key, item.value)}>SAVE</button></label>)}<NewField onCreate={(entry) => setItems((current) => [...current, entry])} /></section>{status && <p className="cms-status" role="status">{status}</p>}</main>
}

function NewField({ onCreate }: { onCreate: (entry: Entry) => void }) {
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  async function create() { if (!key.trim()) return; await saveContent(key, value); onCreate({ key, value, updatedAt: new Date(), updatedBy: '' }); setKey(''); setValue('') }
  return <div className="cms-new"><h2>Add text field</h2><input aria-label="Content key" placeholder="content key" value={key} onChange={(e) => setKey(e.target.value)} /><textarea aria-label="Content value" placeholder="Text shown on the site" value={value} onChange={(e) => setValue(e.target.value)} /><button className="black-button" onClick={create}>ADD FIELD</button></div>
}
