
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
        ` min-h-full aspect-video w-full relative   `
      )}
    // g
   
    >
      <img
        src={image}
        className="w-full h-full object-cover rounded-2xl absolute top-0 left-0"
        loading="lazy"
      />
      <div
        className={twMerge(
          "  backdrop-blur-sm h-full w-full flex flex-col justify-center items-center  font-white rounded-2xl  text-white"
        )}
      >
        <motion.h1 className="text-xl md:text-2xl font-black text-center text-pretty leading-snug "
                                    style={{ textShadow: "2px 2px 0px black" }}>
          {title.toUpperCase()}
        </motion.h1>
        <div className="flex gap-x-3 absolute -bottom-2 ">
          <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center transition-all ease-in duration-100 rounded-2xl   bg-accent-300  text-black p-2">
            <a target="_blank" rel="noreferrer" href={url}>
              {" "}
              Visit Website
            </a>
          </button>
          <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center flex gap-x-2 items-center transition-all ease-in duration-100 rounded-2xl text-accent-700 border backdrop-blur-md backdrop-filter  bg-gray-200 p-2">
            <a target="_blank" rel="noreferrer" href={github} >
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
