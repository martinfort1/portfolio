import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; 2026 Martin Fort. All rights reserved.
        </small>
        <br />
        <small className='text-xs'>
            <span className='font-semibold'>About this website: </span> 
            Built with Next.js(App Router & Server Actions), React, TypeScript, 
            Tailwind CSS, Framer Motion, React Email and Resend. Hosted on Vercel. 
            The source code is available <a className="underline" href="https://github.com/martinfort1/portfolio">here.</a>
        </small>
    </footer>
  )
}
