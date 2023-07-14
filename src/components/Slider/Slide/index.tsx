import React from 'react';

export default function Slide({ children, ...props }: any) {
  return (
    <div className="slide" {...props}>
      <p className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-medium text-center text-xs w-full px-4" {...props}>
        {(children.props as { alt: string }).alt}
      </p>
      {children}
    </div>
  );
}