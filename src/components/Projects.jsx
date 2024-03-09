import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import Project from "./Project";
import { twMerge } from "tailwind-merge";

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
      title: "Laptop Break Reminder",
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
      title: "Laptop Break Reminder",
      desc: "A Python application that alerts a person to take a break, if they have been using their laptop for too long or are not blinking enough. The eyes can also get dry and irritated during long stretches of screen use this application aims to reduce the issues caused by dry eyes.",
      url: "https://github.com/RBadola/BlinkTracker",
      tech: ["Python", "OpenCv", "dlib", "Win10Toast"],
      img: "p3.png",
      id: "p3",
    },
  ];
  return (
    <div className="w-full h-5/6 md:h-full font-extrabold  bg-gradient-to-b from-orange-700 from-20% to-[rgba(0,0,0,0.5)] p-4 flex flex-col md:flex-row relative">
      {/* <div className="  text-4xl text-white text-center my-2  "><p>Projects</p></div> */}
      <div className=" border-4 border-double w-full relative md:w-2/3 aspect-square md:aspect-video rounded-md grid  mx-auto  ">
        <img
          src={currentP.img}
          className="w-full h-full absolute object-cover"
        />
        <div
          className={twMerge(
            " h-full backdrop-blur-sm grid place-content-center p-2  font-white rounded-2xl  text-white z-10"
          )}
        >
          <h1 className=" text-2xl md:text-5xl text-center ">{currentP.title}</h1>
          {/* <p className=" md:px-20 md:text-xl ">
            {currentP.desc}
          </p>
          <div className="flex gap-1 justify-center ">
            {
              // eslint-disable-next-line react/prop-types
              currentP.tech?.map((t) => (
                <span key={t} className="border-2 p-1 text-sm border-white rounded-lg">
                  {t}
                </span>
              ))
            }
          </div> */}
          <div className="flex gap-x-2 items-center">

          <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center transition-all ease-in duration-100 rounded-2xl border-2  border-white hover:text-black p-2">
           <a target="_blank" rel="noreferrer" href={currentP.url}> Visit Website</a>
           
          </button>
          <button className="hover:scale-110 hover:bg-white w-max self-center justify-self-center flex gap-x-2 items-center transition-all ease-in duration-100 rounded-2xl border-2  border-white hover:text-black p-2">
            Github <CiShare1 />
          </button>
          </div>
        </div>
      </div>
      <div className="border-4 border-double  w-full h-1/4 md:h-full md:w-1/5  p-2  rounded-md flex  md:flex-col gap-2 mx-auto my-1   overflow-auto ">
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
      </div>
    </div>
  );
};

export default Projects;
