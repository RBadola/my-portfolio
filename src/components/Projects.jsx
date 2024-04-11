import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import Project from "./Project";
import { twMerge } from "tailwind-merge";
import { motion, useAnimationControls } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [activeTab, setactiveTab] = useState({
    p1: true,
    p2: false,
    p3: false,
    p4: false,
  });
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
  // const [prev, setprev] = useState(ProjectData.length-1);
  const [currentIndex, setCurrentIndex] = useState(Math.floor(ProjectData.length/2));
  // const [next, setnext] = useState(1);
  
  // eslint-disable-next-line no-unused-vars

  const handlePrevious = () => {
    let p =  prev
    setnext(currentIndex)
    setCurrentIndex(prev)
    setprev(()=>prev > 0? prev -1:ProjectData.length-1)
    console.log(prev,currentIndex,next);

  };

  const handleNext = () => {
   
    console.log("C",currentIndex,next,(next + 1) % ProjectData.length)
    setprev(currentIndex)
    setCurrentIndex(next)
    setnext(()=>(next + 1) % ProjectData.length)
    // console.log(prev,"C",c,next);
  };

  return (
    <div className=" w-full h-5/6 md:h-full font-extrabold bg-black p-4 flex flex-col md:flex-row  justify-center  items-center relative overflow-hidden gap-7">
      {/* <Project
        key={ProjectData[prev].index}
        id={ProjectData[prev].id}
        title={ProjectData[prev].title}
        desc={ProjectData[prev].desc}
        url={ProjectData[prev].url}
        tech={ProjectData[prev].tech}
        image={ProjectData[prev].img}
        active={false}
        leftE="true"
      /> */}
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
            active={index === Math.floor(ProjectData.length/2)?true:false}
          />
        })
      }

      {/* <Project
        key={ProjectData[next].index}
        id={ProjectData[next].id}
        title={ProjectData[next].title}
        desc={ProjectData[next].desc}
        url={ProjectData[next].url}
        tech={ProjectData[next].tech}
        image={ProjectData[next].img}
        active={false}
        rightE={true}
      /> */}
      {/* <div
        onClick={handlePrevious}
        className="bg-gradient-to-b from-black via-transparent to-black text-white h-full flex justify-center items-center absolute top-0 left-0 cursor-pointer"
      >
        <IoIosArrowBack size={100} />
      </div>
      <div
        onClick={handleNext}
        className="bg-gradient-to-b from-black via-transparent to-black text-white h-full flex justify-center items-center absolute top-0 right-0 cursor-pointer"
      >
        <IoIosArrowForward size={100} />
      </div> */}

      {/* </motion.div> */}
    </div>
  );
};

export default Projects;
