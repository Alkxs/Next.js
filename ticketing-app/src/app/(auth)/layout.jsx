import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
//components

import { redirect } from 'next/navigation'

export default async function AuthLayout({ children }) {
  const subapase = createServerComponentClient({ cookies })
  const { data } = await subapase.auth.getSession()

  if (data.session) {
    redirect('/login')
  }

  return (
    <>
      <nav>
        <h1>Tickster</h1>
        <Link href='/signup'>Sign up</Link>
        <Link href='/login'>Log in</Link>
      </nav>
      {children}
    </>
  )
}
