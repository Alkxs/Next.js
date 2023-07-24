import Link from 'next/link'
import Image from 'next/image'
import { Alert } from '../../components/bootstrap'
import type { Metadata } from 'next'
import { UnsplashImage } from '../../models/unsplash-image'

export const metadata: Metadata = {
  title: 'Dynamic fetching - next image gallery',
}

//revalidate 0, same as no-cache for dynamic rendering (SSR)
// export const revalidate = 0

const Page = async () => {
  const res = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_KEY, {
    cache: 'no-cache',
  })
  const data: UnsplashImage = await res.json()

  const width = Math.min(500, data.width)
  const height = (width / data.width) * data.height

  return (
    <div className='d-flex flex-column align-items-center'>
      <Alert>
        This page <strong>fetches data dynamically</strong>. Every time you refresh the page, you get a new image from the Unsplash API.
      </Alert>
      <Image src={data.urls.raw} width={width} height={height} alt={data.description} className='rounded shadow mw-100 h-100' />
      by <Link href={'/users' + data.user.username}>{data.user.username}</Link>
    </div>
  )
}
export default Page
