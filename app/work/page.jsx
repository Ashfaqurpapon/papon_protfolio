"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/ui/workSliderBtn";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "car-rental-reservation-system",
    description:
      "This full-stack application is built with React and Redux on the frontend, and Express, TypeScript, MongoDB, and Mongoose on the backend. It offers comprehensive features such as user and admin roles enabling smooth authentication and authorization. The application supports full CRUD operations, allowing users to browse, book cars of their choice, and manage their bookings. Additionally, it incorporates robust transaction handling utilities to ensure a seamless booking experience.",
    stack: [
      { name: "React" },
      { name: "ExpressJs" },
      { name: "NodeJs" },
      { name: "NextJs" },
      { name: "DaisyUI" },
    ],
    image: "/project1.png",
    live: "https://car-rental-reseration-system.vercel.app/",
    github: "https://github.com/Ashfaqurpapon/car-rental-reservation-system",
  },
  {
    num: "02",
    category: "Frontend Project",
    title: "campers-shop",
    description:
      "Campers Shop is an e-commerce website built using React, Tailwind CSS, and Redux for state management. It provides a seamless shopping experience for camping enthusiasts with features like product management, cart functionality, and a smooth checkout process.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Redux" }],
    image: "/project2.png",
    live: "https://campers-shop-virid.vercel.app/",
    github: "https://github.com/Ashfaqurpapon/campers-shop?tab=readme-ov-file",
  },
  {
    num: "03",
    category: "Frontend Project",
    title: "Track Zone Clock ",
    description:
      "This is  Create a beautiful clock with its own timezone using React. Use custom hooks to manage time updates and timezone handling, then display the clock with a stylish component.",
    stack: [{ name: "React" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/project3.png",
    live: "https://track-zone-clock.vercel.app/",
    github: "https://github.com/Ashfaqurpapon/Track_Zone_Clock",
  },
  {
    num: "04",
    category: "Frontend Project",
    title: "ProgrammingGuideline ",
    description:
      "This is  Design and develop a responsive, single-page web page using HTML, CSS, Bootstrap, and PHP to demonstrate proficiency in front-end web development",
    stack: [{ name: "HTMl" }, { name: "CSS" }, { name: "Broostab" }],
    image: "/project4.png",
    live: "https://ashfaqurpapon.github.io/Programming_Guideline/",
    github: "https://github.com/Ashfaqurpapon/Programming_Guideline",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[360px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
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
                <Link href={project.github}>
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
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                >
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover"
                      alt={project.title}
                    />
                  </div>
                  {/* Project Title */}
                  <h3 className="absolute bottom-4 text-2xl font-bold text-white z-20">
                    {project.title}
                  </h3>
                </SwiperSlide>
              ))}
              <WorkSliderBtn
                containerStyles="flex justify-center gap-2"
                btnStyles="p-2 bg-gray-800 rounded-full"
                iconsStyles="text-2xl text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
