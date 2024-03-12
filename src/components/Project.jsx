import { useRef } from "react";
import { CiShare1 } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import { motion, useAnimationControls } from "framer-motion";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Project = ({
  id,
  active,
  changeStatus,
  title,
  desc,
  tech,
  image,
  changeP,
  url,
}) => {
  const cs = () => {
    if (id === "p1") {
      changeStatus({
        p1: true,
        p2: false,
        p3: false,
      });
    } else if (id === "p2") {
      changeStatus({
        p1: false,
        p2: true,
        p3: false,
      });
    } else {
      changeStatus({
        p1: false,
        p2: false,
        p3: true,
      });
    }
  };
  const elementRef = useRef();
  return (
    <motion.div
      ref={elementRef}
      id={id}
      className={twMerge(" w-[600px] aspect-square relative")}
      onClick={() => changeP(id)}
    //   initial={{x:"-100%"}} animate={{x:"100%"}} transition={{duration:1}}
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
