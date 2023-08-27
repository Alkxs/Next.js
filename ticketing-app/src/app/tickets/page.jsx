import { Suspense } from 'react'
import TicketList from '../components/TicketList'
import Loading from '../(homepage)/loading'
import Link from 'next/link'

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Open tickets</small>
          </p>
        </div>
        <Link href='/tickets/create' className='ml-auto'>
          <button className='btn-primary'>New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
export default Tickets
