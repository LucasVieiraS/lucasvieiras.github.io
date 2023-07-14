import React, { ReactNode } from 'react'

export default function RootContent({ children } : { children: ReactNode }) {
  return (
    <main className="w-full">
        { children }
    </main>
  )
}