
import { CiShare1 } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import { motion, useScroll } from "framer-motion";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Project = ({
  id,
  title,
  image,
  url,

  currentRef,
  github,
}) => {
  const { scrollY } = useScroll();

  const variants = {
    initial: {
      opacity: 0,
      y: 800,
      perspective: 0,
    },
    act: { opacity: 1, x: 0, y: 0, scale: 1 },
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      id={id}
      className={twMerge(
        ` rounded-2xl relative shrink-0  h-full w-full md:w-1/2 rotate-3 snap-x snap-start`
      )}
      initial="initial"
      animate="act"
      variants={variants}
      transition={{ duration: 1, damping: 0.3, ease: "easeInOut" }}
      layoutId="card"
      ref={currentRef}
    >
      <img
        src={image}
        className="w-full h-full object-cover  rounded-2xl absolute top-0 left-0"
      />
      <div
        className={twMerge(
          "  backdrop-blur-sm h-full w-full flex flex-col justify-center items-center  font-white rounded-2xl  text-white"
        )}
      >
        <motion.h1 className="text-5xl md:text-7xl text-center">
          {title.toUpperCase()}
        </motion.h1>
        <div className="flex gap-x-3">
          <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center transition-all ease-in duration-100 rounded-2xl   bg-Accent-300  text-black p-2">
            <a target="_blank" rel="noreferrer" href={url}>
              {" "}
              Visit Website
            </a>
          </button>
          <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center flex gap-x-2 items-center transition-all ease-in duration-100 rounded-2xl text-Accent-300 border backdrop-blur-md backdrop-filter  bg-gray-200 bg-opacity-25 p-2">
            <a target="_blank" rel="noreferrer" href={github}>
              Github
            </a>
            <CiShare1 />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
