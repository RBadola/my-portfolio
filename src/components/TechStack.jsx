import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TechStack = () => {
  const ref = useRef();
  const isInView = useInView(ref,{amount:0.2,once:true})
  const techRef  = useRef()
  const techView = useInView(techRef,{root:ref})
  // eslint-disable-next-line no-unused-vars
  const  [first, setfirst] = useState(false) 
useEffect(()=>{
  let w = window.innerWidth
  if(w<600){
    setfirst(true)
  }
},[])
  const tech = [
    <BiLogoMongodb size={first?70:100} />,
    <FaReact size={first?70:100} />,
    <TbBrandCss3 size={first?70:100} />,
    <SiTailwindcss size={first?70:100} />,
    <TbBrandFirebase size={first?70:100} />,
    <TbBrandJavascript size={first?70:100} />,
    <FaNodeJs size={first?70:100} />,
    <SiMysql size={first?70:100} />,
    <FaGithub size={first?70:100} />,
    <FaHtml5 size={first?70:100} />,
    <SiExpress size={first?70:100} />,
    <TbBrandReactNative size={first?70:100} />,
  ];

  const variant = {
    initial: {
      opacity: 0,
      x:2500,
    },
    animate: {
      opacity: 1,
      x:isInView? 0:2500 ,
      transition: {
        duration:1,
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

  return (
    <motion.div
      className="w-full overflow-hidden   font-extrabold flex flex-col md:flex-row  relative p-2 px-6 bg-black   z-50"
      ref={ref}
    >
      <motion.div
        className="text-7xl md:text-9xl  md:p-4 md:ml-3  text-left   flex-1 "
        // initial={{ x: -1500 }}
        animate={{ x:isInView? 0:-1500 }}
        transition={{
          duration: 0.3,
        }}
      >
        <motion.p className="text-white  md:leading-[200px] md:tracking-wide">
          TECH
        </motion.p>
        <motion.span className="text-white md:leading-[200px]">I KNOW</motion.span>
      </motion.div>


      <motion.div
        className=" w-full h-full  md:h-screen  grid grid-cols-3 md:grid-cols-4 grid-rows-4 gap-y-3 p-2 md:grid-rows-3  flex-2  place-items-center   rounded-md relative z-40 m-auto  bg-gradient-to-l from-pink-500 to-yellow-400  "
        initial="initial"
        animate="animate"
        variants={variant}
        ref={techRef}
      >
        {tech.map((t, i) => {
          return (
            <motion.div
              className="tech_card "
              variants={childVariant}
              drag
              whileDrag={{ scale: 0.8 }}
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
