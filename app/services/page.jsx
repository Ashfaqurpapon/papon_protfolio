"use client";
import { BsArrowDownRight } from "react-icons/bs";

import Link from "next/link";
import { easeIn, motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Full-Stack Website Development",
    description:
      "I am a full-stack developer skilled in building seamless web applications from front to back. With expertise in Express, Node.js, and React, I create efficient and responsive user interfaces. My experience with REST APIs and JWT ensures secure, reliable, and scalable backend operations. I deliver end-to-end solutions that bridge design and functionality, bringing ideas to life with elegance and precision.",
    href: "https://www.patabahari.com/",
  },
  {
    num: "02",
    title: "MERN Stack Project Development",
    description:
      "As a full-stack developer, I bring concepts to life through visually engaging, user-centric interfaces. With in-depth knowledge of React and a keen eye for detail, I create responsive, interactive designs that provide smooth and enjoyable user experiences. My focus on clean, maintainable code allows me to deliver interfaces that are both functional and aesthetically pleasing, seamlessly blending design and technology to meet user needs.",
    href: "https://car-rental-reseration-system.vercel.app/",
  },
  {
    num: "03",
    title: "E-learning & SaaS Development",
    description:
      "Design and develop scalable e-learning and SaaS platforms with secure authentication, role-based access, and cloud deployment, optimized for performance and long-term growth.",
    href: "https://tech-tip.onrender.com/",
  },
  {
    num: "04",
    title: "Cloud & DevOps Deployment",
    description:
      "Skilled in containerizing and deploying applications using Docker and cloud platforms, ensuring production-ready builds, efficient CI/CD workflows, and scalable infrastructure.",
    href: "https://github.com/Ashfaqurpapon",
  },
  {
    num: "05",
    title: "Tech Tutor & Continuous Learner",
    description:
      "A fast learner with a passion for teaching and continuous improvement. I quickly adapt to new technologies and share knowledge to help teams grow and deliver impactful solutions.",
    href: "https://github.com/Ashfaqurpapon",
  },

  {
    num: "06",
    title: "Competitive Programmer",
    description:
      "I am a competitive programmer fueled by the thrill of solving complex algorithmic problems under pressure. With a solid foundation in data structures and algorithms, I approach challenges methodically. I enjoy finding optimized solutions, pushing my limits, and constantly sharpening my skills to stay at the forefront of competitive coding.",
    href: "https://www.stopstalk.com/user/profile/arpapon",
  },

];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeIn },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
