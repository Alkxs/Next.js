import { Suspense } from 'react'
import TicketList from '../components/TicketList'
import Loading from '../loading'

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
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
export default Tickets
