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
  const [scope, animate] = useAnimate();
  const blob = document.getElementById("blob");
  // const blobS = document.getElementById("blobShadow");
  const mouseCo = (e) => {
    var rect = e.currentTarget.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    blob.animate(
      {
        left: `${x}px`,
        top: `${y}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
    // console.log(e.clientX, e.clientY, rect);
  };

  const techVariants = {
    hover: {
      // scale: 0.9,

      transform: "perspective(10cm) rotateY(30deg)",
      transition: {
        duration: 0.5,
      },
    },
  };
  const techChildVariants = {
    hover: {
      transform: "perspective(10cm) rotateY(30deg)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full h-full overflow-hidden font-extrabold flex  relative p-2 bg-black   z-50"
      ref={ref}
      animate={{
        backgroundColor:"radial-gradient(circle, rgba(255,0,110,1) 0%, rgba(131,56,236,1) 64%, rgba(58,134,255,1) 100%);"
      }}
      // onMouseMove={(e) => mouseCo(e)}
    >
      <div className="w-full h-full   absolute tech-gradient top-0 left-0 z-20  "></div>

      {/* <div
        className="blob w-[300px] h-[300px] z-10   absolute  blur-md  "
        id="blob"
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="fill"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientTransform="rotate(45 0.5 0.5)"
            >
              <stop offset="0%" stop-color="#f137db"></stop>
              <stop offset="100%" stop-color="#7afdff"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#fill)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M88.5,67.5Q78,85,59.5,87Q41,89,25,79.5Q9,70,8.5,50Q8,30,24,17.5Q40,5,57,12.5Q74,20,86.5,35Q99,50,88.5,67.5Z; M85.5,67.5Q78,85,58.5,91.5Q39,98,27.5,82Q16,66,12.5,48Q9,30,24,16Q39,2,58,9Q77,16,85,33Q93,50,85.5,67.5Z;M86,68Q79,86,60,87Q41,88,25,79Q9,70,7,49Q5,28,23,20Q41,12,56.5,17Q72,22,82.5,36Q93,50,86,68Z;M88.5,67.5Q78,85,59.5,87Q41,89,25,79.5Q9,70,8.5,50Q8,30,24,17.5Q40,5,57,12.5Q74,20,86.5,35Q99,50,88.5,67.5Z;"
            ></animate>
          </path>
        </svg>
      </div> */}

      <motion.div className="text-2xl md:text-9xl p-4 ml-3 w-[100px] md:w-max break-words z-40  ">
        <motion.p className="text-white leading-[200px] tracking-wide">
          TECH
        </motion.p>{" "}
        <motion.p className="text-white leading-[200px]">I KNOW</motion.p>
      </motion.div>
      <motion.div className="   grid grid-cols-5 gap-6 p-2   rounded-md relative z-40">
        <motion.div className="grid gap-2 ">
          <motion.div
            className=" rounded-md md:place-self-end "
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left",
            }}
          >
            <motion.div className="tech_card bg-slate-400">
              <BiLogoMongodb size={100} />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2 ">
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
            // variants={techVariants}
            initial={{ transform: "perspective(0cm) rotate(0deg)" }}
            whileHover={"hover"}
          >
            <motion.span className="tech_card bg-white overflow-hidden">
              <motion.span >
                <FaReact size={100} />
              </motion.span>
            </motion.span>
          </motion.div>
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <TbBrandJavascript size={80} />
            </motion.span>
          </motion.div>
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <TbBrandCss3 size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2 md:mt-6">
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <SiTailwindcss size={100} />{" "}
            </motion.span>
          </motion.div>
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <TbBrandFirebase size={100} />
            </motion.span>
          </motion.div>
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <FaNodeJs size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2">
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <SiMysql size={100} />
            </motion.span>
          </motion.div>
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <SiExpress size={100} />
            </motion.span>
          </motion.div>
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <FaGithub size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2 md:mt-6 md:place-self-start">
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <FaHtml5 size={100} />
            </motion.span>
          </motion.div>
          <motion.div
            className=" rounded-md  "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span className="tech_card bg-slate-400">
              <TbBrandReactNative size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default TechStack;
