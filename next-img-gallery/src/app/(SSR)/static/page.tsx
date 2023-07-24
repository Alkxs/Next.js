import Link from 'next/link'
import { UnsplashImage } from '../../models/unsplash-image'
import Image from 'next/image'
import { Alert } from '../../components/bootstrap'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'static fetching - next image gallery',
}

const page = async () => {
  const res = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_KEY)
  const data: UnsplashImage = await res.json()

  const width = Math.min(500, data.width)
  const height = (width / data.width) * data.height
  return (
    <div className='d-flex flex-column align-items-center'>
      <Alert>
        This page <strong>fetches and caches data at build time</strong>. Even though the unsplash API always returns a new image, we see the same image after
        refreshing the page until we compile the project again
      </Alert>
      <Image src={data.urls.raw} width={width} height={height} alt={data.description} className='rounded shadow mw-100 h-100' />
      by <Link href={'/users' + data.user.username}>{data.user.username}</Link>
    </div>
  )
}
export default page
