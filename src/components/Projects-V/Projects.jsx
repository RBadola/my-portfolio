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
      "https://rbadola.github.io/projects_list/project.json"
    );
    projects.then((res) => res.json()).then((data) => setProjects(data));
    
  }, []);
  return (
    <motion.div
      layout
      className=" w-full h-1/2 md:h-full  font-extrabold md:p-4 flex flex-col my-2 mt-10   items-center relative gap-7"
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
        className="z-0 w-full h-full py-4 grid grid-cols-2  px-2   relative   gap-7  select-none "
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
     
    </motion.div>
  );
};

export default Projects;
