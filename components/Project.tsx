"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, siteUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
        ref={ref}
        style={{ 
            scaleY: scaleProgress,
            opacity: opacityProgress,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
        >
        <section
          className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition relative flex flex-col sm:h-[20rem] group-even:pl-8"
        >
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full cursor-pointer relative"
          >
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 relative z-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="w-full h-auto mt-4 rounded-t-lg shadow-2xl transition
                sm:absolute sm:top-8 sm:-right-40 sm:w-[28.25rem] sm:h-full sm:mt-0 object-cover object-left-top
                sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-105
                sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2
                group-even:sm:-right-[initial] group-even:sm:-left-40"
              style={{ zIndex: 1 }}
            />
          </a>
        </section>
    </motion.div>
  )
}
