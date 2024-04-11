import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion, useAnimate, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TechStack = () => {
  const ref = useRef();

  const tech = [
    <BiLogoMongodb size={100} />,
    <FaReact size={100} />,
    <TbBrandCss3 size={100} />,
    <SiTailwindcss size={100} />,
    <TbBrandFirebase size={100} />,
    <TbBrandJavascript size={80} />,
    <FaNodeJs size={100} />,
    <SiMysql size={100} />,
    <FaGithub size={100} />,
    <FaHtml5 size={100} />,
    <SiExpress size={100} />,
    <TbBrandReactNative size={100} />,
  ];

  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };
  const childVariant = {
    initial: {
      y: 1000,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  const constraintsRef = useRef(null);
useEffect(()=>{
console.log(constraintsRef);
},[])
  return (
    <motion.div
      className="w-full  overflow-hidden   font-extrabold flex flex-col md:flex-row  relative p-2 px-8 bg-black   z-50"
      ref={ref}
    >
      <motion.div
        className="text-2xl md:text-9xl p-4 ml-3  z-40 flex-1 "
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          bounce: 4,
          stiffness: 300,
        }}
      >
        <motion.p className="text-white leading-[200px] tracking-wide">
          TECH
        </motion.p>
        <motion.span className="text-white leading-[200px]">I KNOW</motion.span>
      </motion.div>
      <motion.div
        className=" w-full h-screen  grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3  flex-2  place-items-center bg-white  rounded-md relative z-40 m-auto  bg-gradient-to-l from-pink-500 to-yellow-400 text-pretty "
        initial="initial"
        animate="animate"
        variants={variant}
        ref={constraintsRef}
      >
        {tech.map((t, i) => {
          return (
            <motion.div
              className="tech_card even:translate-y-3 "
              variants={childVariant}
              drag
              whileDrag={{ scale: 0.8 }}
              // dragConstraints={{ left: window.innerWidth-constraintsRef.clientWidth, right: constraintsRef.clientWidth,top:0,bottom:constraintsRef.clientHeight }}
              // dragElastic={0.2}
              dragSnapToOrigin="true"
              key={i}
            >
              {t}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
