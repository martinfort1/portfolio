import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import komukImg from "@/public/komuk.png";
import donarImg from "@/public/donar.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "I graduated after 3 years. I learned the basics of programming, algorithms, data structures, and web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote - Argentina",
    description:
      "I worked as a freelance full-stack developer for 6 months until the project was completed. My first professional experience as a developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - 2025",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
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
    siteUrl: "https://don-ar.com",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: donarImg,
    siteUrl: "https://don-ar.com",
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