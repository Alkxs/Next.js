'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('low')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { title, body, priority, user_email: 'alex@lori.dev' }

    const res = await fetch('http://localhost:3000/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTicket),
    })

    const json = await res.json()
    if (json.error) {
      console.error('Error creating ticket:', json.error, json)

      setIsLoading(false)
    }
    if (json.data) {
      router.refresh()
      router.push('/tickets')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
      <label>
        <span>Title:</span>
        <input required type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
      </label>
      <label>
        <span>Body:</span>
        <textarea required onChange={(e) => setBody(e.target.value)} value={body} />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value='low'>Low Priority</option>
          <option value='medium'>Medium Priority</option>
          <option value='high'>High Priority</option>
        </select>
      </label>
      <button className='bg-violet-800 text-gray-200' disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  )
}
