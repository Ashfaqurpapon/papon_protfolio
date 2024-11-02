"use client";

import { Item } from "@radix-ui/react-select";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiDaisyui,
  SiShadcnui,
  SiExpress,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About me",
  description:
    "Hello! I’m Ashfaqur Rahman Papon, a dedicated full-stack developer with a year of experience in building dynamic web applications. I have a strong command over modern technologies like React, Node.js, Express, and REST APIs. With a keen eye for detail and a commitment to delivering high-quality work, I am available for freelance opportunities. Fluent in both English and Bangla, I’m eager to collaborate on innovative projects that challenge my skills and foster growth.*",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ashfaqur Rahman Papon",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+088)1609520908",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 years",
    },

    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "ashfaqurraham377@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Bangla",
    },
  ],
};
const experience = {
  icon: "",
  title: "My Experience",
  description: "pajdionfjnonkoscnaskocnoancoasnconasovnasosvnkoavnasknsa",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "My academic journey has provided a solid foundation in computer science and software engineering, where I’ve developed both theoretical and practical knowledge. From foundational studies in high school to advanced coursework in university, each stage has contributed to my technical skills and problem-solving abilities, preparing me for a career in technology.",
  items: [
    {
      institution: "Metropolitan University",
      degree: "BSc in CSE",
      duration: "2020 - 2023",
    },
    {
      institution: "Sylhet Government College",
      degree: "HSC",
      duration: "2017 - 2019",
    },
    {
      institution: "Nabin Chandra Govt. Model High School",
      degree: "SSC",
      duration: "2015 - 2017",
    },
  ],
};

const skills = {
  title: "My Skill",
  description:
    "With a versatile skill set in front-end and back-end development, I am equipped to build full-stack applications that are responsive, scalable, and user-centric. My expertise spans essential technologies such as HTML5, JavaScript, and React for creating dynamic interfaces, alongside NodeJS and ExpressJS for robust server-side functionality. I also incorporate modern styling frameworks like Tailwind CSS, DaisyUI, and ShadcnUI to ensure beautiful and functional design, with Redux providing efficient state management to optimize application performance.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJS",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiDaisyui />,
      name: "Daisyui",
    },
    {
      icon: <SiShadcnui />,
      name: "Shadcnui",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-lg bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-360">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
