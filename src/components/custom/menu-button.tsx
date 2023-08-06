import Link, { LinkProps } from 'next/link'
import React from 'react'

interface MenuButtonProps extends LinkProps {
  icon: any;
  text: string;
}

export default function MenuButton({ icon: Icon, text, ...props }: MenuButtonProps) {
  return (
    <Link scroll={true} {...props} className='group'>
      <button className='py-0.5 px-2 text-white text-sm font-regular flex items-center justify-center gap-2 leading-none group-hover:opacity-50'><Icon className='h-4 w-4 aspect-square transition-opacity group-hover:opacity-80' /><span className='my-auto'>{text}</span></button>
    </Link>
  )
}
