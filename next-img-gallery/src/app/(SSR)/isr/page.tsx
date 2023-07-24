import Link from 'next/link'
import Image from 'next/image'
import { Alert } from '../../components/bootstrap'
import type { Metadata } from 'next'
import { UnsplashImage } from '../../models/unsplash-image'

export const metadata: Metadata = {
  title: 'Incremental fetching - next image gallery',
}

export const revalidate = 15

const Page = async () => {
  const res = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_KEY, {
    // next: { revalidate: 0 }
  })
  const data: UnsplashImage = await res.json()

  const width = Math.min(500, data.width)
  const height = (width / data.width) * data.height

  return (
    <div className='d-flex flex-column align-items-center'>
      <Alert>
        This page uses <strong>incremental static generation</strong>. A new image is fetched every 15 seconds (after refreshing the page) and then served from
        the cache for that duration.
      </Alert>
      <Image src={data.urls.raw} width={width} height={height} alt={data.description} className='rounded shadow mw-100 h-100' />
      by <Link href={'/users' + data.user.username}>{data.user.username}</Link>
    </div>
  )
}
export default Page
