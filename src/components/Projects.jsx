import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import Project from "./Project";
import { twMerge } from "tailwind-merge";
import { motion, useAnimationControls } from "framer-motion";

const Projects = () => {
  const [activeTab, setactiveTab] = useState({
    p1: true,
    p2: false,
    p3: false,
    p4: false,
  });
  const [currentP, setcurrentP] = useState({
    title: "Write On",
    desc: "Built a full-stack, responsive blogging platform with comprehensive user authentication and authorization. This platform allows users to create, explore, and search for content in a seamless and intuitive manner.",
    url: " https://writeon-4e1e7.web.app/home",
    tech: ["React.Js", "TaiwindCss", "Node.Js", "Express.Js", "Javascript"],
    img: "p1.png",
    id: "p1",
  });
  const changeP =(p)=>{
    setcurrentP(ProjectData[p])
  }
  // eslint-disable-next-line no-unused-vars
  const ProjectData = [
    {
      title: "Write On",
      desc: "Built a full-stack, responsive blogging platform with comprehensive user authentication and authorization. This platform allows users to create, explore, and search for content in a seamless and intuitive manner.",
      url: " https://writeon-4e1e7.web.app/home",
      tech: ["React.Js", "TaiwindCss", "Node.Js", "Express.Js", "Javascript"],
      img: "p1.png",
      id: "p1",
    },
    {
      title: "Edit It",
      desc: "Built a intuative web based image editor. That offers a variety of features to users to fullfill thier image editing needs on the go. ",
      url: "https://edititv2.web.app/",
      tech: ["React.Js", "TaiwindCss", "Firebase"],
      img: "p2.png",
      id: "p2",
    },
    {
      title: "Laptop Break ",
      desc: "A Python application that alerts a person to take a break, if they have been using their laptop for too long or are not blinking enough. The eyes can also get dry and irritated during long stretches of screen use this application aims to reduce the issues caused by dry eyes.",
      url: "https://github.com/RBadola/BlinkTracker",
      tech: ["Python", "OpenCv", "dlib", "Win10Toast"],
      img: "p3.png",
      id: "p3",
    },
    {
      title: "Write On",
      desc: "Built a full-stack, responsive blogging platform with comprehensive user authentication and authorization. This platform allows users to create, explore, and search for content in a seamless and intuitive manner.",
      url: " https://writeon-4e1e7.web.app/home",
      tech: ["React.Js", "TaiwindCss", "Node.Js", "Express.Js", "Javascript"],
      img: "p1.png",
      id: "p4",
    },
    {
      title: "Edit It",
      desc: "Built a intuative web based image editor. That offers a variety of features to users to fullfill thier image editing needs on the go. ",
      url: "https://edititv2.web.app/",
      tech: ["React.Js", "TaiwindCss", "Firebase"],
      img: "p2.png",
      id: "p5",
    },
    {
      title: "Laptop Break Reminder",
      desc: "A Python application that alerts a person to take a break, if they have been using their laptop for too long or are not blinking enough. The eyes can also get dry and irritated during long stretches of screen use this application aims to reduce the issues caused by dry eyes.",
      url: "https://github.com/RBadola/BlinkTracker",
      tech: ["Python", "OpenCv", "dlib", "Win10Toast"],
      img: "p3.png",
      id: "p6",
    },
  ];
  return (
    <div className="w-full h-5/6 md:h-full font-extrabold bg-black p-4 flex flex-col md:flex-row relative">
     
      <motion.div className="w-full h-2/3 p-2 px-4 m-auto  rounded-md flex  overflow-hidden   gap-2 " >
        {ProjectData.map((pro,i) => {
          return (
            <Project
              key={pro.id}
              id={i}
              title={pro.title}
              desc={pro.desc}
              url={pro.url}
              tech={pro.tech}
              image={pro.img}
              active={activeTab}
              changeStatus={setactiveTab}
              changeP={changeP}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
