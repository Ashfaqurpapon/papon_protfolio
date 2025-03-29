"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "CarRent CO.",
    description:
      "This full-stack application is built with React and Redux on the frontend, and Express, TypeScript, MongoDB on the backend. It offers comprehensive features such as user and admin roles enabling smooth authentication and authorization. The application supports full CRUD operations, allowing users to browse, book cars of their choice, and manage their bookings. Additionally, it incorporates robust transaction handling utilities to ensure a seamless booking experience.",
    stack: ["React", "DaisyUI", "NodeJs", "ExpressJs", "MongoDB"],
    image: "/project1.png",
    live: "https://car-rental-reseration-system.vercel.app/",
    github: "https://github.com/Ashfaqurpapon/car-rental-reservation-system",
  },
  {
    num: "02",
    category: "Full Stack Website",
    title: "Techtip",
    description:
      "Techtip is a full-stack  Website where users can discover, share, and upvote tech-related tips, tutorials, and reviews.It interactive elements include secure authentication (JWT),Like, comments, and a follower, following system for tech enthusiasts.",
    stack: ["NextJs", "NodeJs", "ExpressJs", "MongoDB"],
    image: "/project2.png",
    live: "https://campers-shop-virid.vercel.app/",
    github: "https://github.com/Ashfaqurpapon/campers-shop",
  },
  {
    num: "03",
    category: "React Project",
    title: "Track Zone Clock ",
    description:
      "This is  Create a beautiful clock with its own timezone using React. Use custom hooks to manage time updates and timezone handling, then display the clock with a stylish component.",
    stack: ["React", "Css 3", "JavaScript"],
    image: "/project3.png",
    live: "https://track-zone-clock.vercel.app/",
    github: "https://github.com/Ashfaqurpapon/Track_Zone_Clock",
  },
  {
    num: "04",
    category: " Project",
    title: "ProgrammingGuideline ",
    description:
      "This is  Design and develop a responsive, single-page web page using HTML, CSS, Bootstrap, and PHP to demonstrate proficiency in front-end web development",
    stack: ["HTMl", "CSS", "Broostab"],
    image: "/project4.png",
    live: "https://ashfaqurpapon.github.io/Programming_Guideline/",
    github: "https://github.com/Ashfaqurpapon/Programming_Guideline",
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row xl:gap-[30px] mb-20"
          >
            {/* Left Side: Text Content */}
            <div className="w-full xl:w-[50%] flex flex-col justify-center">
              <div className="text-7xl font-extrabold text-transparent text-outline mb-10">
                {project.num}
              </div>
              <h2 className=" mb-3 text-[35px] font-bold leading-none text-green-300">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 mt-4">
                {project.stack.map((tech, i) => (
                  <li key={i} className="text-xl text-accent">
                    {tech}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="border border-white/20 my-4"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full xl:w-[50%] xl:mt-0 mt-10 flex items-center justify-center">
              <div className="relative w-full h-[330px]">
                <Image
                  src={project.image}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  alt={project.title}
                />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white bg-black/60 px-3 py-1 rounded">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
