"use client";

import Image from 'next/image'
import React from 'react'
import { delay, motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mt-[7rem] sm:mt-[5.5rem] mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt[100rem]'>
        {/* Imagen */}
        <div className='flex items-center justify-center' >
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.25,
                }}
              >
                <Image
                  src={"/martin.jpg"}
                  alt="Martin's portrait"
                  width="192"
                  height="192"
                  quality={100}
                  priority={true} 
                  className='h-24 w-24 rounded-full object-cover border-[0.30rem] border-white shadow-x1'
                />
                </motion.div>
                
                <motion.span
                  className='absolute bottom-0 right-0 text-4xl'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 12,
                    delay: 0.1,
                    duration: 0.7,
                  }}
                >  👋
                </motion.span>
            </div>
        </div>
        {/* Sección de texto */}
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className='font-bold'>Hello! </span> My name is  
          <span className='font-bold'> Martín.</span> I'm a {" "}
          <span className='font-bold'>full-stack developer</span> with a 
          passion for creating {" "}
          <span className='font-bold italic'> dynamic and responsive</span>{" "} web applications.
          My favorite tools are {""}
          <span className='font-bold'> 
            React, Node.js, Express, Next.js, TypeScript, and Tailwind CSS. 
          </span>{" "}
        </motion.h1>
        {/* Sección de botones */}
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium sm:gap-6'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Link href="#contact"
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          >
            Contact me! <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
          </Link>

          <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition 
            cursor-pointer border border-black/10' href='/CV.pdf' download={true}>Download CV <HiDownload className='opacity-60 group-hover:translate-x-1 group-hover:scale-120 transition'/></a>

          <a  className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-130 hover:text-gray-950 hover:bg-gray-100 active:scale-105 transition 
            cursor-pointer border border-black/10'
            href='https://www.linkedin.com/in/martin-fort-74b1aa235/'
            target='_blank'>
            <BsLinkedin />
          </a>

          <a  className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.20rem] focus:scale-120 hover:scale-130 hover:bg-gray-100 hover:text-gray-950 active:scale-105 transition 
            cursor-pointer border border-black/10'
            href='https://github.com/martinfort1'
            target='_blank'>
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  )
}
