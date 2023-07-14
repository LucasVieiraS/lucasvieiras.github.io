import React, { ReactNode } from 'react'
import RootNavigator from '../RootNavigator'

interface RootFrameInterface {
    children: ReactNode
}
export default function RootSidebar({ children } : RootFrameInterface) {
  return (
    <aside className="bg-zinc-900 border-r border-r-zinc-700 p-4 h-fit lg:h-full">
        <RootNavigator />
        <div className="w-full h-full py-2 flex flex-col space-y-2">
          {children}
        </div>
    </aside>
  )
}
