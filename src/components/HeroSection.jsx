
import { animate, motion, useScroll, useSpring, useTransform } from "framer-motion";
import resume from "../assets/Roshan Badola.pdf"
import { useRef, useState } from "react";
import sd from "../assets/profile.webp"
import { Link } from "react-scroll";
import blob from "../assets/blob.png"
import Banner from "./Banner";
const HeroSection = ({ pref }) => {
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
  const [disp, setdisp] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 40, y: e.clientY + 40 });
    setdisp(false)
  };

  return (
    <motion.div className=" relative flex flex-col md:flex-row md:h-screen   md:py-0 md:justify-center items-center text-center  overflow-hidden font-bold  text-text">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute">
        <defs>
          <pattern id="a" width="160" height="160" patternTransform="scale(2)" patternUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="none" />
            <path fill="none" stroke="#2e2e2e" stroke-width=".5" d="M121.5 39.5V9.169c0-2.827 1.724-4.707 3.473-5.602l.707-.362c2.086-1.068 4.702-.631 6.359 1.026l1.985 1.985c1.349 1.349 3.235 2.018 5.14 2.128 12.336 0 12.336-18.505 0-18.505M40.75 39.499V9.17c0-2.827-1.724-4.707-3.473-5.602l-.707-.362c-2.086-1.068-4.702-.631-6.359 1.026l-1.985 1.985c-1.349 1.349-3.236 2.018-5.14 2.128-12.336 0-12.336-18.505 0-18.505m146.575 111.248c0-12.337-18.505-12.337-18.505 0 .11 1.904.78 3.79 2.128 5.139l1.985 1.985c1.657 1.657 2.094 4.273 1.026 6.36l-.362.706c-.895 1.75-2.775 3.474-5.602 3.474l-30.33-.001m49.66-63.086c0 12.336-18.505 12.336-18.505 0 .11-1.904.78-3.791 2.128-5.14l1.985-1.985c1.657-1.657 2.094-4.273 1.026-6.359l-.362-.707c-.895-1.749-2.775-3.474-5.602-3.473h-30.33m19.162 130.344c12.337 0 12.337-18.505 0-18.505-1.631 0-3.99.98-5.139 2.128l-1.985 1.985c-1.656 1.656-4.274 2.094-6.36 1.027l-.706-.362c-2.086-1.069-3.474-3.258-3.474-5.602v-34.302l.001-26.228c0-2.344-1.427-4.458-3.473-5.602l-.707-.361a5.83 5.83 0 0 0-6.36 1.026l-1.984 1.985c-1.144 1.152-3.508 2.128-5.14 2.128-12.336 0-12.336-18.505 0-18.505 1.904.11 3.715.86 5.14 2.128l1.985 1.985a5.81 5.81 0 0 0 6.359 1.026l.707-.362c1.287-1.485 3.473-2.775 3.473-5.602v-30.33M23.086 168.343c-12.336 0-12.336-18.505 0-18.505 1.632 0 3.992.98 5.14 2.128l1.985 1.985c1.656 1.656 4.274 2.094 6.359 1.027l.707-.362c2.086-1.069 3.474-3.258 3.474-5.602l-.001-34.302V88.485c0-2.344 1.387-4.533 3.473-5.602l.707-.361c2.085-1.068 4.703-.63 6.359 1.026l1.985 1.985c1.148 1.148 3.508 2.128 5.14 2.128 12.336 0 12.336-18.505 0-18.505-1.905.11-3.791.78-5.14 2.128l-1.985 1.985c-1.657 1.657-4.273 2.094-6.36 1.026l-.706-.362c-1.75-.895-3.474-2.775-3.474-5.602v-30.33m80.75 80.749H91.17c-2.827 0-4.707 1.724-5.602 3.473l-.362.707c-1.068 2.086-.631 4.702 1.026 6.359l1.985 1.985c1.349 1.349 2.018 3.236 2.128 5.14 0 12.336-18.505 12.336-18.505 0 0-1.632.98-3.992 2.128-5.14l1.985-1.985c1.656-1.656 2.094-4.274 1.026-6.359l-.361-.707c-1.069-2.086-3.258-3.474-5.602-3.473h-60.53c-2.344 0-4.533-1.387-5.602-3.473l-.362-.707c-1.067-2.085-.63-4.703 1.027-6.359l1.985-1.985c1.148-1.148 2.128-3.508 2.128-5.14 0-12.336-18.505-12.336-18.505 0M121.5 38H91.169c-2.827 0-4.707-1.724-5.602-3.473l-.362-.707c-1.068-2.086-.631-4.702 1.026-6.359l1.985-1.985c1.349-1.349 2.018-3.235 2.128-5.14C90.344 8 71.84 8 71.84 20.337c0 1.632.977 3.994 2.128 5.14.663.66 1.343 1.305 1.985 1.985 1.608 1.703 2.003 4.23 1.026 6.36q-.167.359-.361.706C75.48 36.577 73.359 38 71.015 38h-60.53c-2.344 0-4.533 1.387-5.602 3.473l-.362.707c-1.067 2.085-.63 4.703 1.027 6.36l1.985 1.984c1.148 1.148 2.128 3.508 2.128 5.14C9.66 68-8.844 68-8.844 55.664" /></pattern></defs><rect className="w-full h-full" fill="url(#a)" /></svg>
      <motion.div className=" w-full h-full  relative flex flex-col-reverse md:flex-row items-center md:bg-gradient-to-l from-black to-transparent  ">
        <div className="  md:w-2/5  md:h-full relative group " >
          <img src={blob} className="absolute  md:top-1/3" alt="" />
          <motion.img
            onMouseMove={handleMouseMove} onMouseLeave={() => { setPosition({ x: 0, y: 0 }); setdisp(true) }}
            ref={targetRef}
            className=" w-3/5 md:W-full mx-auto h-full relative z-10  object-cover object-center   "
            src={sd}
            alt="my-image"
            loading="lazy"
          />
          <div
            className="fixed  top-0 left-0 p-2 uppercase whitespace-nowrap text-xl text-white bg-accent-400 rounded-full pointer-events-none transition-transform duration-75 ease-linear z-50"
            style={{
              display: disp && "none",
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`
            }}
          >
            Fullstack Developer
          </div>
        </div>
        <div className="">
          <motion.p className="text-4xl mt-2">Hi! I'm</motion.p>
          <motion.span className=" pointer-events-none text-5xl md:text-9xl font-Dance bg-clip-text bg-gradient-to-l from-pink-500 to-yellow-400 text-pretty text-transparent font-extrabold">
            Roshan Badola
          </motion.span>
          <motion.p className="text-3xl md:text-5xl font-semibold text-text ">
            The FullStack Developer You Need
          </motion.p>
          <div className="my-5 rounded-full w-max mx-auto border p-2">
            <Link to="experience" smooth={true} duration={500}>
              <motion.button
                className="bg-Accent-700 text-white p-2 rounded-full  text-2xl text-center "
                whileHover={{ y: -3, scale: 1.04 }}
              // onClick={() => resumeRef.current.click()}
              >
                <span>View Portfolio</span>
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                className="text-accent-700 border bg-white p-2 rounded-full  text-2xl text-center "
                whileHover={{ y: -3, scale: 1.04 }}
              // onClick={() => resumeRef.current.click()}
              >
                <span>Hire Me</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
