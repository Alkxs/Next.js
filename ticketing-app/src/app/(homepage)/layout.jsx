import Navbar from '../components/Navbar'

export default function HomepageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
