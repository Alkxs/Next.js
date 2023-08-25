import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
//components
import Navbar from '../components/Navbar'
import { redirect } from 'next/navigation'

export default async function HomepageLayout({ children }) {
  const subapase = createServerComponentClient({ cookies })
  const { data } = await subapase.auth.getSession()

  if (!data.session) {
    redirect('/login')
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  )
}
