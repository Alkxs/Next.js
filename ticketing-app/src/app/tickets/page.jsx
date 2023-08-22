import TicketList from '../components/TicketList'

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

      <TicketList />
    </main>
  )
}
export default Tickets
