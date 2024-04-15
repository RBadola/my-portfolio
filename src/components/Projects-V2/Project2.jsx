import { useRef } from "react";
import { CiShare1 } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import { motion, useAnimationControls } from "framer-motion";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Project = ({ id, active, title, image, url, index ,canGrab,setProjects,projects,mobile}) => {


  const CARD_X_OFFSET = 70;
  const CARD_X2_OFFSET = -200;
  const CARD_Y_OFFSET = 20;
  const SCALE_FACTOR = 0.03;
  const moveToEnd=(index)=>{
    setProjects(()=>{
      const p =[...projects]
      const current = p.splice(index,1)
      p.unshift(current[0])
      return p
   })
  }
  return (
    <motion.div
      id={id}
      className={twMerge(
        " shrink-0 relative md:absolute shadow-sm shadow-[white] overflow-hidden rounded-2xl h-[300px] w-3/4 md:h-[500px] md:w-1/2"
      )}
      animate={{
        translateX: index * CARD_X_OFFSET,
        translateY: index * CARD_Y_OFFSET,
        scale: 1 - index * SCALE_FACTOR,
        zIndex: 6 - index,
      }}
     onClick={()=>moveToEnd(index)}
    >
      <img
        src={image}
        className="w-full h-full object-cover   absolute top-0 left-0"
      />
      <div
        className={twMerge(
          "  backdrop-blur-sm h-full w-full flex flex-col justify-center items-center  font-white   text-white"
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