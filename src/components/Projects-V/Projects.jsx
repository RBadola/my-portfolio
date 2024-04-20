import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import { motion, useInView, useScroll } from "framer-motion";
import useMeasure from "react-use-measure";
import { FaArrowRight, FaLongArrowAltLeft } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Projects = () => {
  // const ProjectData = ;
  const [projects, setProjects] = useState([
    {
      title: "Write On",
      desc: "Built a full-stack, responsive blogging platform with comprehensive user authentication and authorization. This platform allows users to create, explore, and search for content in a seamless and intuitive manner.",
      url: " https://writeon-4e1e7.web.app/home",
      tech: ["React.Js", "TaiwindCss", "Node.Js", "Express.Js", "Javascript"],
      img: "p1.png",
      id: "p1",
      index: 0,
      github:"https://github.com/RBadola/CODSOFT"
    },
    {
      title: "Edit It",
      desc: "Built a intuative web based image editor. That offers a variety of features to users to fullfill thier image editing needs on the go. ",
      url: "https://edititv2.web.app/",
      tech: ["React.Js", "TaiwindCss", "Firebase"],
      img: "p2.png",
      id: "p2",
      index: 1,
      github:"https://github.com/RBadola/editIT"
    },
    {
      title: "Laptop Break ",
      desc: "A Python application that alerts a person to take a break, if they have been using their laptop for too long or are not blinking enough. The eyes can also get dry and irritated during long stretches of screen use this application aims to reduce the issues caused by dry eyes.",
      url: "https://github.com/RBadola/BlinkTracker",
      tech: ["Python", "OpenCv", "dlib", "Win10Toast"],
      img: "p3.png",
      id: "p3",
      index: 2,
      github:"https://github.com/RBadola/BlinkTracker"
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(projects.length / 2)
  );
  const containerRef = useRef(null);
  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll();
  // eslint-disable-next-line no-unused-vars
  const [ref, { width }] = useMeasure();
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { root: projectRef });
  const containerInView = useInView(containerRef,{amount:0.2})
  const  [first, setfirst] = useState(false) 
  const dragDivRef = useRef(null);
  let startX, startY;

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    handleDrag(startX, startY, currentX, currentY);
  };

  const handleMouseDown = (event) => {
    startX = event.clientX;
    startY = event.clientY;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (event) => {
    const currentX = event.clientX;
    const currentY = event.clientY;
    handleDrag(startX, startY, currentX, currentY);
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const handleDrag = (startX, startY, currentX, currentY) => {
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    let left=0
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        projectRef.current.scrollTo({
          left:left+100,
          behavior: "smooth",
        })
        console.log('Dragging right');
      } else {
        projectRef.current.scrollTo({
          right:100,
          behavior: "smooth",
        })
        console.log('Dragging left');
      }
    } else {
      if (deltaY > 0) {
        console.log('Dragging down');
      } else {
        console.log('Dragging up');
      }
    }
  };
useEffect(()=>{
  let w = window.innerWidth
  if(w<600){
    setfirst(true)
  }
  console.log(projectRef);
},[])
  return (
    <motion.div
      layout
      className=" w-full h-1/2 md:h-full  font-extrabold md:p-4 flex flex-col my-2 mt-10   items-center relative overflow-hidden gap-7"
      ref={containerRef}
    >
      <div>
        <motion.p
          className=" text-6xl md:text-8xl text-white "
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
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onMouseDown={handleMouseDown}
     
      >
        {[...projects].map((proj, index) => {
          return (
            <Project
              key={index}
              index={index}
              currentIndex={currentIndex}
              id={proj?.id}
              title={proj?.title}
              desc={proj?.desc}
              url={proj?.url}
              github={proj?.github}
              tech={proj?.tech}
              image={proj?.img}
              project={projects}
              setProjects={setProjects}
              currentRef={viewRef}
              setCurrentIndex={setCurrentIndex}
              active={isInView}
            />
          );
        })}
        
      </motion.div>
      <motion.div  className="text-white absolute inset-0  top-1/4 flex  w-full items-center justify-between pointer-events-none" >
        <motion.div

          initial={{ x: 0, opacity: 0 }}
          animate={containerInView && { x:first?50:100, opacity: [1,0]}}
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
          <MdKeyboardDoubleArrowRight  size={first?70:100} />
        </motion.div>
        <motion.div
        style={{rotateY:180}}

          initial={{ x: 0, opacity: 0 }}
          animate={containerInView &&{ x:first?-50:-100, opacity: [1,0]}}
          transition={{
            delay: 0.2,
            duration: 3,
            times: [0, 1],
            type: "spring",
            ease: "easeInOut",
            repeatDelay: 0.1,
            repeat: 4,

          }}
          viewport={{once:true}}
        >
          <MdKeyboardDoubleArrowRight  size={first?70:100}/>
        </motion.div>
      </motion.div>
      {/* <div>
        {projects.map((t,i)=>{
          return (
              <input key={i} type="radio" value={i}  name="tech"  className="mx-1" onChange={(e)=>e.target.value} checked={i === Math.floor(projects.length / 2) ? true : false} />
          )
        })}
      </div> */}
    </motion.div>
  );
};

export default Projects;
