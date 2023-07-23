import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Container, SSRProvider } from './components/bootstrap'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'next image gallery',
  description: 'simple image gallery to show next.js 13 features',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <Container className='py-4'>{children}</Container>
        </SSRProvider>
      </body>
    </html>
  )
}
