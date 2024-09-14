
import { animate, motion, useScroll,useSpring,useTransform } from "framer-motion";
import resume from "../assets/Roshan Badola.pdf"
import { useRef } from "react";
import sd from "../assets/sideprofile.jpg"
const HeroSection = ({pref}) => {
  const parentV = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const childV = {
    initial: {
      y: 1200,
    },
    animate: {
      y: 0,
    },
  };
  const bgV = {
    initial: {
      y: -1000,
    },
    animate: {
      y: 0,
      transition: {
        duration: 2,
        type: "spring",
      },
    },
  };

  let ar = [];
  let n = 12;

  for (let i = 0; i < n; i++) {
    ar.push(
      <motion.div
        key={i}
        className={`w-[100px] h-screen relative bg-gray-600`}
        variants={bgV}
      ></motion.div>
    );
  }
const resumeRef = useRef()
  const targetRef = useRef(null)
  const {scrollY,scrollYProgress} = useScroll({target:targetRef})
  const borderRadius=useTransform(
    scrollYProgress,
    [0.4,1],
    ["10%","60%"]
  )
  // const borderRadius =  useSpring(scrollYProgress)
  return (
    <motion.div  className=" relative flex flex-col md:flex-row md:h-full  py-11 md:py-0 md:justify-center items-center text-center px-4 font-bold overflow-hidden text-text">
      <motion.div
        initial="initial"
        animate="animate"
        variants={parentV}
        className=" flex flex-col md:flex-row items-center gap-3"
        // style={{background}}
      >
        <motion.div
          className="relative "
          variants={childV}
        >
          <motion.img
          ref={targetRef}
          style={{borderRadius}}
            className=" w-[300px] h-[300px]   object-cover object-top   "
            src={sd}
            alt="my-image"
            loading="lazy"
          />
        </motion.div>
        <motion.div variants={childV}>
          <motion.p className="text-4xl mt-2">Hi! I'm</motion.p>
          <motion.span className=" pointer-events-none text-5xl md:text-9xl font-Dance bg-clip-text bg-gradient-to-l from-pink-500 to-yellow-400 text-pretty text-transparent font-extrabold">
            Roshan Badola
          </motion.span>
          <motion.p className="text-3xl md:text-5xl font-semibold text-text ">
            The FullStack Developer You Need
          </motion.p>
          <motion.div className="mt-3" variants={childV} >
            {/* <motion.button 
              className="bg-gradient-to-l bg-Accent-300 text-black rounded-md py-3 px-3 my-1 mx-1 text-2xl text-center"
              whileHover={{ y: -3, scale: 1.04 }}
              onClick={() =>
                window.scrollTo({
                  top:document.body.scrollHeight - window.innerHeight - 100,
                  behavior: "smooth",                  
                })
              }
            >
              <motion.span>Hire Me</motion.span>
            </motion.button> */}
            <a href={resume} download="Roshan Badola Resume" className="hidden" ref={resumeRef}></a>
            <motion.button
              className="text-Accent-300 rounded-md py-3 px-3 my-1 mx-1 text-2xl text-center border backdrop-blur-md backdrop-filter  bg-gray-200 bg-opacity-25 "
              whileHover={{ y: -3, scale: 1.04 }}
              onClick={()=>resumeRef.current.click()}
            >
              <motion.span>Download CV</motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
