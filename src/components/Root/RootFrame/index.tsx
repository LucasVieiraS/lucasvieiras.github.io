import React, { ReactNode } from 'react'


export default function RootFrame({ children } : { children: ReactNode }) {
  return (
    //grid grid-cols-[13vw_87vw] md:grid-cols-[100vw_fit-content]
    <div className="bg-zinc-800 w-full m-auto box-border rounded-xl grid overflow-hidden min-h-[90vh] shadow-sm border border-black/20 z-2 grid-cols-1 grid-rows-none lg:grid-cols-[16rem_1fr]">
        { children }
    </div>
  )
}
