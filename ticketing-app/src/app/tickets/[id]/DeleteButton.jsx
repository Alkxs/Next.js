'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { TiDelete } from 'react-icons/ti'

export default function DeleteButton(id) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    const router = useRouter()

    const res = await fetch('http://localhost:3000/api/tickets${id}/', {
      method: 'DELETE',
    })
    const json = await res.json()

    if (json.error) {
      console.log(error)
      setIsLoading(false)
    }
    if (!json.error) {
      router.refresh()
      router.push('/tickets')
    }
  }

  return (
    <button className='bg-violet-800' onClick={handleClick} disabled={isLoading}>
      {isLoading && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}
      {!isLoading && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  )
}
