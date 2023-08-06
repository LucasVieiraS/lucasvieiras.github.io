import Link, { LinkProps } from 'next/link'
import React from 'react'

interface SocialButtonProps extends LinkProps {
    icon: any;
    width?: number;
}

export default function SocialButton({ icon: Icon, width = 8, ...props}: SocialButtonProps) {
  return (
    <Link target={props.href.toString().includes('mail') ? "" : "_blank"} rel="noopener noreferrer" {...props}>
        <Icon className={`h-${width} w-${width} aspect-square transition-opacity hover:opacity-50`}/>
    </Link>
  )
}
