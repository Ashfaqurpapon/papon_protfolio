"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiPostgresql,
  SiSourcetree,
  SiDocker,
  SiPostman,
  SiTypescript,
  SiPrisma,
  SiApachekafka,
  SiRedis,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "E-commerce Website",
    title: "Patabahari.com",
    description:
      "Patabahari is an online gardening e-commerce platform that allows users to browse and purchase plants, gardening tools, and related products. The platform features secure authentication, product management, cart and order handling, and a scalable backend designed for smooth and reliable shopping experiences.",
    stack: ["NextJs", "Redux", "NodeJs", "ExpressJs", "MongoDB"],
    image: "/patabahri.png",
    live: "https://patabahari.com",
    github: "https://github.com/Ashfaqurpapon/plant-shop",
  },
 
  {
    num: "02",
    category: "MERN Stack Project",
    title: "CarRent CO.",
    description:
      "This MERN-stack application is built with React and Redux on the frontend, and Express, TypeScript, MongoDB on the backend. It offers comprehensive features such as user and admin roles enabling smooth authentication and authorization.",
    stack: ["React", "DaisyUI", "NodeJs", "ExpressJs", "MongoDB"],
    image: "/project1.png",
    live: "https://car-rental-reseration-system.vercel.app/",
    github: "https://github.com/Ashfaqurpapon/car-rental-reservation-system",
  },
   {
    num: "03",
    category: "Saas Project",
    title: "Techtip",
    description:
      "Techtip is a Saas Project where users can discover, share, and upvote tech-related tips, tutorials, and reviews. It interactive elements include secure authentication (JWT), Like, comments, and a follower, following system for tech enthusiasts.",
    stack: ["NextJs", "Redux", "NodeJs", "ExpressJs", "MongoDB"],
    image: "/project2.png",
    live: "https://tech-tip.onrender.com/",
    github: "https://github.com/Ashfaqurpapon/TechTip",
  },
  // {
  //   num: "03",
  //   category: "React Project",
  //   title: "Track Zone Clock",
  //   description:
  //     "Create a beautiful clock with its own timezone using React. Use custom hooks to manage time updates and timezone handling, then display the clock with a stylish component.",
  //   stack: ["React", "Css 3", "JavaScript"],
  //   image: "/project3.png",
  //   live: "https://track-zone-clock.vercel.app/",
  //   github: "https://github.com/Ashfaqurpapon/Track_Zone_Clock",
  // },
  // {
  //   num: "04",
  //   category: "Frontend Project",
  //   title: "Programming Guideline",
  //   description:
  //     "Design and develop a responsive, single-page web page using HTML, CSS, Bootstrap, and PHP to demonstrate proficiency in front-end web development",
  //   stack: ["HTML", "CSS", "Bootstrap"],
  //   image: "/project4.png",
  //   live: "https://ashfaqurpapon.github.io/Programming_Guideline/",
  //   github: "https://github.com/Ashfaqurpapon/Programming_Guideline",
  // },
];

const services = [
  {
    num: "01",
    title: "Full-Stack Website Development",
    description:
      "Expert full-stack developer skilled in building seamless web applications. With expertise in Node.js, Express, and React, I deliver responsive user interfaces backed by secure, scalable, and high-performance server-side systems.",
  },
  // {
  //   num: "02",
  //   title: "MERN Stack Development",
  //   description:
  //     "Specialized in developing robust MERN stack applications with a focus on clean architecture, reusable components, and smooth user experiences through modern, responsive UI design.",
  // },
  {
    num: "02",
    title: "Backend & Microservices Architecture",
    description:
      "Experienced in designing scalable backend systems using microservices architecture with NestJS, gRPC, Kafka, and Redis, ensuring reliable inter-service communication and performance optimization.",
  },
  {
    num: "03",
    title: "Cloud & DevOps Deployment",
    description:
      "Skilled in containerizing and deploying applications using Docker and cloud platforms, ensuring production-ready builds, efficient CI/CD workflows, and scalable infrastructure.",
  },
  {
    num: "04",
    title: "Tech Tutor & Continuous Learner",
    description:
      "A fast learner with a passion for teaching and continuous improvement. I quickly adapt to new technologies and share knowledge to help teams grow and deliver impactful solutions.",
  },
  {
    num: "05",
    title: "Competitive Programmer",
    description:
      "Driven by solving complex algorithmic challenges with strong expertise in data structures and problem-solving techniques, enabling optimized and efficient code solutions.",
  },
  {
    num: "06",
    title: "E-learning & SaaS Development",
    description:
      "Design and develop scalable e-learning and SaaS platforms with secure authentication, role-based access, and cloud deployment, optimized for performance and long-term growth.",
  }

];

const skills = [

  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "Typescript" },
  { icon: <SiNextdotjs />, name: "NextJs" },
  { icon: <SiNestjs />, name: "NestJs" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiDaisyui />, name: "Daisyui" },
  { icon: <SiShadcnui />, name: "Shadcnui" },
  { icon: <SiTailwindcss />, name: "Tailwindcss" },

  { icon: <FaNodeJs />, name: "NodeJS" },
  { icon: <SiExpress />, name: "ExpressJS" },

  { icon: <SiApachekafka />, name: "Apachekafka" },
  { icon: <SiRedis />, name: "Redis" },

  { icon: <SiMongodb />, name: "MongoDb" },
  { icon: <SiMongoose />, name: "Mongoose" },
  { icon: <SiPostgresql />, name: "PostgresSQL" },
  { icon: <SiPrisma />, name: "Prisma" },

  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSourcetree />, name: "Sourcetree" },



];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
          }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col items-center justify-between lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                Hello, I'm
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Ashfaqur Papon
                </span>
              </motion.h1>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-cyan-400 mb-6"
              >
                SoftWare Engineer & Creative Problem Solver
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-[500px] mb-10 text-white/70 text-lg"
              >
                Passionate about creating intuitive and engaging user experiences. I specialize in transforming ideas into beautifully crafted products with modern web technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
              >
                <a href="/Ashfaqur_Rahman_Papon(CV).pdf" download="Ashfaqur_Rahman_Papon(CV).pdf">
                  <Button className="uppercase flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div>
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-10 h-10 border-2 border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 text-base hover:bg-cyan-400 hover:text-dark hover:transition-all duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1"
            >
              <Photo />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <Stats />

      {/* ABOUT SECTION */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I'm Ashfaqur Rahman Papon, a dedicated full-stack developer with extensive experience in building dynamic web applications. I have a strong command over modern technologies like Next.js, React, Node.js, Express,Microservice and REST APIs.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              With a keen eye for detail and a commitment to delivering high-quality work, I'm available for Full time/freelance opportunities. Fluent in both English and Bangla, I'm eager to collaborate on innovative projects that challenge my skills and foster growth.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-cyan-400">Skills</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[120px] bg-white/10 rounded-xl flex justify-center items-center group hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer border border-white/10 hover:border-cyan-400">
                      <div className="text-5xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-cyan-600">
                      <p className="capitalize">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-cyan-400">Services</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl font-bold text-cyan-400/30 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.num}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 bg-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                <div className="flex-1">
                  <div className="text-7xl font-bold text-cyan-400/20 mb-4">
                    {project.num}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-cyan-400">
                    {project.category}
                  </h3>
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-cyan-400" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-cyan-600">
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300">
                            <BsGithub className="text-white text-3xl group-hover:text-cyan-400" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-cyan-600">
                            <p>GitHub Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative w-full h-[300px] lg:h-[400px] group">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover rounded-xl shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-cyan-400">Together</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-white/70 text-lg mb-12"
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate!
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="mailto:ashfaqurraham377@gmail.com">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
