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
  index,
  setCurrentIndex,
  setProjects,
  project,
}) => {
  let rightE = index > currentIndex;
  let leftE = index < currentIndex;
  const moveToCenter = (index) => {
    setProjects(() => {
      let p = [...project];
      let c = p.splice(index, 1);
      p.splice(currentIndex, 0, c[0]);
      return p;
    });
  };
  const variants = {
    initial: {
      opacity: 0,
      y: 800,
      perspective: 0,
    },
    act: {opacity: 1,x: 0,y: 0, scale: 1,perspective: 2000,rotateX: 0, rotateY: 0},
    left: {opacity: 1,x:  300 / (1 + index),y: 0, scale: 1 - 0.1 * (currentIndex - index),perspective: 2000,rotateX:40, rotateY: 20},
    right: {opacity: 1,x: 300 / (index - 5),y:0, scale: 1 - 0.1 * (index - currentIndex),perspective: 2000,rotateX:-40,rotateY: 20},
    hover:{
      y:-10,
      transition:{
        duration:0.2
      }
    }
  };
  return (
    <motion.div
      id={id}
      style={{ zIndex: rightE && -index }}
      className={twMerge(
        ` h-[350px] w-1/4 rounded-2xl relative shrink-0  shadow-md shadow-[white]  `,
        active && ` h-[400px] w-1/3 `
      )}
      initial="initial"
      animate={active ?"act":leftE?"left":"right"}
      variants={variants}
      whileHover="hover"
      transition={{ duration: 1, damping: 0.3, ease: "easeInOut" }}
      onClick={() => moveToCenter(index)}
      layoutId="card"
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
        <h1 className="text-5xl text-center ">{title.toUpperCase()}</h1>
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
