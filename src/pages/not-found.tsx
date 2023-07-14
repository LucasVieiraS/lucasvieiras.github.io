import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return <div>
    <h1 className='font-bold text-lg'>Not found – 404!</h1>
    <div>
      <Link href="/">Go back to Home</Link>
    </div>
  </div>
}
