"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { animate, motion } from 'framer-motion';
export default function Skills() {

  const { ref } = useSectionInView("Skills", 0.5);
  const fadeInAnimationVariants ={
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } })
  }

  return (
    <section ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' id='skills'>
        <SectionHeading >My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-4 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                        className='bg-white borderBlack rounded-3xl px-5 py-3 dark:bg-white/10 dark:text-gray-100' 
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ 
                            once: true, 
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
