import { useState } from "react";
import Project from "./Project";

const Projects = () => {

  const ProjectData = [
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
    
  ];
  const [currentIndex, setCurrentIndex] = useState(Math.floor(ProjectData.length/2));
  const [projects,setProjects] = useState(...ProjectData)
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="z-0 w-full h-5/6 md:h-full font-extrabold bg-black p-4 flex flex-col md:flex-row  justify-center  items-center relative overflow-hidden gap-7">
      
      {
        ProjectData.map((proj,index)=>{
         return <Project
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
            active={index === Math.floor(ProjectData.length/2)?true:false}
          />
        })
      }

      
    </div>
  );
};

export default Projects;
