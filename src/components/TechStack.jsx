import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TechStack = () => {
  const ref = useRef();
  const [hw, sethw] = useState({
    h: 0,
    w: 0,
  });
  const controls = useAnimationControls();
  const blob = document.getElementById("blob");
  // const blobS = document.getElementById("blobShadow");
  const mouseCo = (e) => {
    controls.stop();
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
    console.log(e.clientX, e.clientY, rect);
  };
  const blobAuto = (e) => {
    controls.start("move");
  };
  const blobV = {
    initial: false,
    move: {
      y: [
        -100, -50, 100, -400, -500, -600, -800, 200, -100, -50, -1200, -20, -20,
        -1200, -100, 400, -40, 100,
      ],
      x: [
        -100, 50, -100, -400, -10, -600, -800, 200, -100, -50, -1200, -20, -20,
        -1200, -100, 400, -40, 100,
      ],
      transition: {
        duration: 20,
        delay: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  const techVariants = {
    hover: {
      // scale: 0.9,
      y: 10,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };
  const techChildVariants = {
    hover: {
      scale: 1.3,
      transform: " translateY(-20px)",
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  useEffect(() => {
    sethw({
      h: ref.current.offsetHeight,
      w: ref.current.offsetWidth,
    });
    controls.start("move");
  }, []);

  return (
    <motion.div
      className="w-full h-full overflow-hidden font-extrabold flex  relative p-2  bg-black z-30"
      ref={ref}
      onMouseMove={(e) => mouseCo(e)}
      onMouseLeave={blobAuto}
    >
      <div className="w-full h-full   absolute tech-gradient top-0 z-10  "></div>
      <motion.div
        className="blob w-[300px] h-[300px] z-0   absolute  blur-md  "
        id="blob"
        animate={controls}
        initial="initial"
        variants={blobV}
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
      </motion.div>

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
          >
            <motion.span
              className="tech_card bg-white overflow-hidden"
              variants={techVariants}
              whileHover={"hover"}
            >
              <motion.span variants={techChildVariants}>
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
