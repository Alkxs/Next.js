import './globals.css'
import { Inter } from 'next/font/google'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticketing App',
  description: 'The best ticketing app online',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
