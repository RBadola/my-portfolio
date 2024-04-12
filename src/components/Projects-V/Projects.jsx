import { useState } from "react";
import Project from "./Project";
import { motion, useAnimationControls } from "framer-motion";

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
    {
      title: "Edit It",
      desc: "Built a intuative web based image editor. That offers a variety of features to users to fullfill thier image editing needs on the go. ",
      url: "https://edititv2.web.app/",
      tech: ["React.Js", "TaiwindCss", "Firebase"],
      img: "p2.png",
      id: "p5",
      index: 4,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(projects.length / 2)
  );

  // eslint-disable-next-line no-unused-vars

  return (
    <motion.div
      layout
      className="z-0 w-full h-full font-extrabold p-4 flex flex-col justify-center  items-center relative overflow-hidden gap-7"
    >
      <div>
        <motion.p
          className="text-8xl text-white "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          PROJECTS
        </motion.p>
      </div>
      <motion.div layout className="z-0 w-full h-full  flex flex-col md:flex-row  justify-center  items-center relative overflow-hidden gap-7 ">
        {projects.map((proj, index) => {
          return (
            <Project
              key={index}
              index={index}
              currentIndex={currentIndex}
              id={proj?.id}
              title={proj?.title}
              desc={proj?.desc}
              url={proj?.url}
              tech={proj?.tech}
              image={proj?.img}
              project={projects}
              setProjects={setProjects}
              setCurrentIndex={setCurrentIndex}
              active={index === Math.floor(projects.length / 2) ? true : false}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
