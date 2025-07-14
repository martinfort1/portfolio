import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function ( {children}: SectionHeadingProps ) {
  return (
    <h2 className='text-3xl font-bold capitalize mb-8'>{children}</h2>
  )
}
