'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { content } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function requireUser() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user
}

export async function getContent() {
  await requireUser()
  return db.select().from(content).orderBy(content.key)
}

export async function saveContent(key: string, value: string) {
  const user = await requireUser()
  const safeKey = key.trim().slice(0, 120)
  if (!safeKey || value.length > 10000) throw new Error('Invalid content')
  await db.insert(content).values({ key: safeKey, value, updatedBy: user.id }).onConflictDoUpdate({ target: content.key, set: { value, updatedBy: user.id, updatedAt: new Date() } })
  revalidatePath('/')
  revalidatePath('/cms')
}
