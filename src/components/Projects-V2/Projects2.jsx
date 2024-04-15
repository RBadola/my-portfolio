import { useEffect, useState } from "react";
import Project from "./Project2";
import { motion,  } from "framer-motion";

const ProjectsV2 = () => {
  // const ProjectData = ;
  const [projects,setProjects]=useState([
    {
      title: "Write On",
      desc: "Built a full-stack, responsive blogging platform with comprehensive user authentication and authorization. This platform allows users to create, explore, and search for content in a seamless and intuitive manner.",
      url: " https://writeon-4e1e7.web.app/home",
      tech: ["React.Js", "TaiwindCss", "Node.Js", "Express.Js", "Javascript"],
      img: "p1.png",
      id: "p1",
      index: 0,
    },
    {
      title: "Edit It",
      desc: "Built a intuative web based image editor. That offers a variety of features to users to fullfill thier image editing needs on the go. ",
      url: "https://edititv2.web.app/",
      tech: ["React.Js", "TaiwindCss", "Firebase"],
      img: "p2.png",
      id: "p2",
      index: 1,
    },
    {
      title: "Laptop Break ",
      desc: "A Python application that alerts a person to take a break, if they have been using their laptop for too long or are not blinking enough. The eyes can also get dry and irritated during long stretches of screen use this application aims to reduce the issues caused by dry eyes.",
      url: "https://github.com/RBadola/BlinkTracker",
      tech: ["Python", "OpenCv", "dlib", "Win10Toast"],
      img: "p3.png",
      id: "p3",
      index: 2,
    },
    {
      title: "Write On",
      desc: "Built a full-stack, responsive blogging platform with comprehensive user authentication and authorization. This platform allows users to create, explore, and search for content in a seamless and intuitive manner.",
      url: " https://writeon-4e1e7.web.app/home",
      tech: ["React.Js", "TaiwindCss", "Node.Js", "Express.Js", "Javascript"],
      img: "p1.png",
      id: "p4",
      index: 3,
    },

  ])
  const  [first, setfirst] = useState(false) 
  // eslint-disable-next-line no-unused-vars
useEffect(()=>{
  let w = window.innerWidth
  if(w<600){
    setfirst(true)
  }
},[])
  return (
    <div className="w-full h-full  font-extrabold bg-black p-4  flex flex-col md:flex-row overflow-hidden  relative mb-10  ">
      <motion.div initial={{rotateZ:0,opacity:0,scale:0}} animate={{rotateZ:first?0:-90,opacity:1,scale:1}} transition={{duration:1,delay:0.5,type:"tween"}} className="text-white   flex flex-col items-center md:leading-8 md:tracking-wider   md:absolute  md:inset-0 md:-left-96   ">
        <span className="text-6xl md:text-9xl">PROJECTS</span>
        <p className="text-4xl">that i have built</p>
      </motion.div>
      <motion.div className=" w-full h-full md:h-full  relative flex items-center md:justify-center flex-grow-1 ">
        {projects.map((pro, index) => {
          let canGrab = index === 0;
          return (
            <Project
              key={pro?.index}
              id={pro?.id}
              title={pro?.title}
              desc={pro?.desc}
              url={pro?.url}
              tech={pro?.tech}
              image={pro?.img}
              active={true}
              index={index}
              mobile={first}

              projects={projects}
              setProjects={setProjects}
              canGrab={canGrab}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectsV2;