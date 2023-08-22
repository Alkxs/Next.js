import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mx-8'>
      <div className='flex items-center justify-center gap-2'>
        <Image src={Logo} width={60} alt='Logo image' />
        <Link href='/'>Tickster</Link>
      </div>

      <div>
        <Link href='/tickets'>Dashboard</Link>
      </div>
    </nav>
  )
}
export default Navbar
