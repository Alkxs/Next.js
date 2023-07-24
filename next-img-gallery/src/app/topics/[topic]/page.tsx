import { UnsplashImage } from '@/app/models/unsplash-image'
import styles from './TopicPage.module.css'
import Image from 'next/image'
import { Alert } from '../../components/bootstrap'
import { Metadata } from 'next'

// export const revalidate = 0

interface PageProps {
  params: { topic: string }
  // searchParams: { [key: string]: string | string | string[] | undefined }
}

export const generateMetadata = ({ params: { topic } }: PageProps): Metadata => {
  return {
    title: topic + ' - Next image gallery',
  }
}

const page = async ({ params: { topic } }: PageProps) => {
  const res = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=10&client_id=${process.env.UNSPLASH_KEY}`)
  const data: UnsplashImage[] = await res.json()

  return (
    <div>
      <Alert>This page uses dynamic routes to render pages based on the topic chosen</Alert>
      <h1>{topic}</h1>
      {data.map((img) => (
        <Image src={img.urls.raw} width={250} height={250} alt={img.description} key={img.urls.raw} className={styles.image} />
      ))}
    </div>
  )
}
export default page
