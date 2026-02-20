"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section 
    id='contact' 
    ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.4, delay:0.2}}
    viewport={{once:true}}
    >
        <SectionHeading>
            Contact me
        </SectionHeading>
        <p className='text-gray-700 -mt-5 dark:text-white/80'>
        You can contact me directly 
        at <a href='mailto:martinfort13@gmail.com' className='underline'>
            martinfort13@gmail.com
          </a> or through the form below.    
        </p>
        <form className='mt-10 flex flex-col dark:text-shadow-black'
          action={ async (formData) => {
            const {data, error } = await sendEmail(formData);
            if(error){
              toast.error("There was an error sending your message: " + error);
            } else {
              toast.success("Email sent successfully!");
            }
          }}
        >
            <input className='h-14 px-4 rounded-lg borderBlack focus:scale-105
            dark:bg-white/10 transition-all dark:outline-none'
            name='senderEmail'
            type='email'
            required
            maxLength={500}
            placeholder='Your email'
            />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4 focus:scale-105
            dark:bg-white/10 transition-all resize-y dark:outline-none'
            name='message'
            placeholder='Your message'
            required
            maxLength={500}
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
