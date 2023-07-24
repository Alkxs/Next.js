import NotFound from '@/app/not-found'
import { UnsplashUser } from '../../../models/unsplash-user'
import { Metadata } from 'next'
import { Alert } from '../../../components/bootstrap'

interface PageProps {
  params: { username: string }
}

async function getUser(username: string): Promise<UnsplashUser> {
  const res = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_KEY}`)

  if (res.status === 404) NotFound()

  return await res.json()
}

export const generateMetadata = async ({ params: { username } }: PageProps): Promise<Metadata> => {
  const user = await getUser(username)

  return {
    title: user.first_name + ' ' + user.last_name,
  }
}

const page = async ({ params: { username } }: PageProps) => {
  const user = await getUser(username)

  return (
    <div>
      <Alert>This profile page uses generateMetadata to set the page title dinamically from the API response</Alert>
      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <a href={'https://unsplash.com/' + user.username}>Unsplash profile</a>
    </div>
  )
}
export default page
