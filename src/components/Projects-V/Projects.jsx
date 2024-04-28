import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import { motion, useInView, useScroll } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const containerRef = useRef(null);
  const projectRef = useRef(null);
  const viewRef = useRef(null);
  const containerInView = useInView(containerRef, { amount: 0.2 });
  const [first, setfirst] = useState(false);


  useEffect(() => {
    let w = window.innerWidth;
    if (w < 600) {
      setfirst(true);
    }
    const projects = fetch(
      "https://rbadola.github.io/my_project_data/project.json"
    );
    projects.then((res) => res.json()).then((data) => setProjects(data));
    
  }, []);
  return (
    <motion.div
      layout
      className=" w-full h-1/2 md:h-full  font-extrabold md:p-4 flex flex-col my-2 mt-10   items-center relative overflow-hidden gap-7"
      ref={containerRef}
    >
      <div>
        <motion.p
          className=" text-6xl md:text-8xl text-text "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          PROJECTS
        </motion.p>
      </div>
      <motion.div
        layout
        className="z-0 w-full h-full py-4  flex  flex-row px-2   relative   gap-7 overflow-x-scroll overflow-y-hidden tech-scroll select-none "
        ref={projectRef}
      >
        {[...projects].map((proj, index) => {
          return (
            <Project
              key={index}
              index={index}
              id={proj?.id}
              title={proj?.title}
              url={proj?.url}
              github={proj?.github}
              image={proj?.img}
              currentRef={viewRef}
            />
          );
        })}
      </motion.div>
      <motion.div className="text-white absolute inset-0  top-1/4 flex  w-full items-center justify-between pointer-events-none">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={containerInView && { x: first ? 50 : 100, opacity: [1, 0] }}
          transition={{
            delay: 0.2,
            duration: 3,
            times: [0, 1],
            type: "spring",
            ease: "easeInOut",
            repeatDelay: 0.1,
            repeat: 4,
          }}
        >
          <MdKeyboardDoubleArrowRight size={first ? 70 : 100} />
        </motion.div>
        <motion.div
          style={{ rotateY: 180 }}
          initial={{ x: 0, opacity: 0 }}
          animate={
            containerInView && { x: first ? -50 : -100, opacity: [1, 0] }
          }
          transition={{
            delay: 0.2,
            duration: 3,
            times: [0, 1],
            type: "spring",
            ease: "easeInOut",
            repeatDelay: 0.1,
            repeat: 4,
          }}
          viewport={{ once: true }}
        >
          <MdKeyboardDoubleArrowRight size={first ? 70 : 100} />
        </motion.div>
      </motion.div>
  
    </motion.div>
  );
};

export default Projects;
