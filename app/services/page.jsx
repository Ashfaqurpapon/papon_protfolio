"use client";
import { BsArrowDownRight } from "react-icons/bs";

import Link from "next/link";
import { easeIn, motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "I am a full-stack developer skilled in creating seamless web applications from front to back. My expertise in Express, Node, and React empowers me to build efficient and responsive user interfaces, while my experience with REST APIs and JWT ensures secure, reliable, and scalable backend operations. With these skills, I deliver comprehensive solutions that bridge design and functionality, bringing ideas to life with elegance and precision",
    href: "https://car-rental-reseration-system.vercel.app/",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "As a Full stack development, I bring concepts to life through visually engaging, user-centric interfaces. With a deep knowledge of React and an eye for detail, I create responsive, interactive designs that provide a smooth and enjoyable user experience. My focus on clean, maintainable code allows me to deliver interfaces that are both functional and aesthetically pleasing, seamlessly blending design with technology to meet user needs!",
    href: "https://campers-shop-virid.vercel.app/",
  },
  {
    num: "04",
    title: "Competitive Programmer",
    description:
      "I am a competitive programmer, fueled by the thrill of tackling complex algorithms and problem-solving under pressure. With a strong foundation in data structures and algorithms, I approach each challenge methodically.I enjoy the journey of finding the most optimized solutions, pushing my limits,sharpening my skills to stay at the forefront of competitive coding.",
    href: "https://www.stopstalk.com/user/profile/arpapon",
  },
  {
    num: "03",
    title: "Quick Learner ",
    description:
      "I am a quick learner, adaptable and eager to absorb new concepts and technologies with ease. I thrive in dynamic environments, rapidly picking up skills and integrating them into my work. My ability to grasp complex ideas swiftly allows me to stay agile, continuously grow, and deliver results efficiently, regardless of the challenge or learning curve.",
    href: "",
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
