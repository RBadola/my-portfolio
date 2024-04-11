import { useRef } from "react";
import { CiShare1 } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import { motion, useAnimationControls } from "framer-motion";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Project = ({
  id,
  active,
  title,
  image,
  url,
  currentIndex,
  index
}) => {
  let rightE = index > currentIndex 
  let leftE = index< currentIndex
  // let active=true
  const elementRef = useRef();
  return (
    <motion.div
      id={id}
      className={twMerge(" h-[500px] w-2/5 bg-transparent relative shrink-0 ",leftE&&"translate-x-96 ",rightE&&"-translate-x-96  ",active && " h-[500px] w-1/2 z-10 translate-x-0"  )}   
      initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:1}}
    >
      <img
        src={image}
        className="w-full h-full object-cover  rounded-2xl absolute top-0 left-0"
      />
      <div
        className={twMerge(
          "  backdrop-blur-sm h-full w-full flex flex-col justify-center items-center  font-white rounded-2xl  text-white",
    
        )}
      >
        <h1 className="text-5xl text-center ">{title}</h1>
        <div className="flex gap-x-3">

        <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center transition-all ease-in duration-100 rounded-2xl border-2  border-white hover:text-black p-2">
          <a target="_blank" rel="noreferrer" href={url}>
            {" "}
            Visit Website
          </a>
        </button>
        <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center flex gap-x-2 items-center transition-all ease-in duration-100 rounded-2xl border-2  border-white hover:text-black p-2">
          Github <CiShare1 />
        </button>
            </div>
      </div>
    </motion.div>
  );
};

export default Project;
