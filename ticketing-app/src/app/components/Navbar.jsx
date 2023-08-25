import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import LogoutButton from './LogoutButton'

const Navbar = ({ user }) => {
  return (
    <nav className='flex items-center justify-between px-8 w-full'>
      <div className='flex items-center justify-center gap-2'>
        <Image src={Logo} width={60} alt='Logo image' />
        <Link href='/'>Tickster</Link>
      </div>

      <div>
        <Link href='/tickets'>Dashboard</Link>
      </div>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}
export default Navbar
