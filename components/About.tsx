'use client'
import React from 'react'
import SectionHeading  from './SectionHeading';
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section 
      ref={ref}
      className='max-w-[45rem] text-center leading-8 sm:mb-40  scroll-mt-28'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id='about'
    >
        <SectionHeading>Get to know me</SectionHeading>
        <p className='mb-3 text-lg'>
            I&apos;m Martín Fort, a full-stack web developer based in <span className='font-extrabold'>Tucuman, Argentina. </span>
            I possess a strong foundation in both front-end and back-end technologies. 
            After graduating as a technician in Software Development and Quality Control from the <span className='font-bold'>Universidad Nacional 
            de Santo Tomás de Aquino</span>, I’ve dedicated myself to building <span className='italic'>dynamic, responsive, and user-friendly </span> 
            web applications. My core Stack is <span className='font-semibold'>React, Next.js, Node.js, and MongoDB</span>,
        </p>
        <p className='mb-3 text-lg'>
            I’m passionate about <span className='underline'>clean code, modern development practices, and learning continuously </span> 
            to stay up-to-date with the latest trends in the industry. I’m currently looking for opportunities to 
            contribute to impactful projects, collaborate with great teams, and <span className='font-semibold'>grow</span> both professionally and personally.
        </p>
    </motion.section>
  )
}
