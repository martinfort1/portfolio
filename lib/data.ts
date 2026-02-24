import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import komukImg from "@/public/komuk.png";
import donarImg from "@/public/donar.png";
import portfolioImg from "@/public/portfolio.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { MdOutlineExplore } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Universidad Santo Tomas de Aquino",
    location: "Tucumán, Argentina",
    description:
      "I graduated after 3 years. I learned about programming, algorithms, data structures, and web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
    {
    title: "Host at Edgewood Tahoe Resort",
    location: "South Lake Tahoe, CA, USA",
    description:
        "I practiced my English and learned how to work in a team. I also learned how to work under pressure and provide excellent customer service.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote - Argentina",
    description:
      "I worked as a freelance full-stack developer for 6 months until the project was completed. My first professional experience as a developer.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
  {
    title: "Manager at Poultry House",
    location: "Villa Padre Monti, Tucumán, Argentina",
    description:
        "I helped consolidate and manage a poultry house, improving workflows, solving day-to-day problems, and coordinating tasks which strengthened my problem-solving and soft skills.",
    icon: React.createElement(HiOutlineWrenchScrewdriver),
    date: "2025 - 2026",
  },
  {
  title: "Next Step —> Junior Back-End Developer",
  location: "Seeking new opportunities",
  description:
    "Looking for my next opportunity as a Backend Developer, where I can build reliable systems, keep learning, and contribute to real products.",
  icon: React.createElement(HiOutlineRocketLaunch),
  date: "Coming soon!",
}
] as const;

export const projectsData = [
  {
    title: "Komuk",
    description:
      "E-commerce platform for customizable promotional products with corporate branding.",
    tags: ["React", "Next.js", "TypeScript", "shadcn", "Tailwind", "Zod", "Zustand","Drizzle ORM", "PostgreSQL", "AWS S3"],
    imageUrl: komukImg,
    siteUrl: "https://www.komuk.com.ar",
  },
  {
    title: "Don-ar",
    description:
      "Web platform designed to support local foundations by giving them visibility and showcasing their current needs",
    tags: ["JavaScript", "React", "Jest", "Bootstrap", "MongoDB", "Express", "Node.js"],
    imageUrl: donarImg,
    siteUrl: "https://proyecto-final-three-navy.vercel.app/",
  },
  {
    title: "This portfolio!",
    description:
      "A public web app to showcase my projects, experience, and skills. Click to see the code and learn how I built it!",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
    siteUrl: "https://github.com/martinfort1/portfolio",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Scrum",
  "MongoDB",
  "Redux",
  "shadcn",
  "Agile Mindset",
  "Express",
  "PostgreSQL",
  "Zod",
  "Zustand",
  "Framer Motion",
  "Drizzle ORM",
] as const;