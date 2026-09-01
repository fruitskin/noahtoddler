import { auth } from '@/lib/auth'
import { getContent } from '@/app/actions/content'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import CmsEditor from '@/components/cms-editor'

export default async function CmsPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/cms/login')
  const entries = await getContent()
  return <CmsEditor email={session.user.email} entries={entries} />
}
