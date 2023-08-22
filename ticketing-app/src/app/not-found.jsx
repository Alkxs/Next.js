import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>There is nothing here</h2>
      <p>Please try navigating to a different page</p>
      <p>
        Go back to the <Link href='/'>Homepage</Link>
      </p>
    </main>
  )
}
