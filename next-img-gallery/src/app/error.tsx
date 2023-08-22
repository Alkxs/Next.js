'use client'

interface errorPageProps {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: errorPageProps) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
export default Error