import React, { ReactNode } from 'react'

export default function NonEditor({ children }: { children: ReactNode }) {
  return (
    <div className='w-full mx-auto py-16 prose prose-invert prose-violet selection:bg-violet-300'>{ children }</div>
  )
}
