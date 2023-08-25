'use client'

import { useState } from 'react'

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label>Email:</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Password:</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button className='bg-violet-800 text-gray-200'>Submit</button>
    </form>
  )
}
