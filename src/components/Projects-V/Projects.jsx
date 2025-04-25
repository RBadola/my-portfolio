import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import { motion, useInView } from "framer-motion";
import Banner from "../Banner";

const projects = 
[{
  "title": "Write On",
  "url": " https://writeon-4e1e7.web.app/home",
  "img": "https://utfs.io/f/b5a880ae-a4b8-408b-8000-cc7d8056b091-2pt.png",
  "id": "p1",
  "index": 0,
  "github":"https://github.com/RBadola/CODSOFT"
},
{
  "title": "Edit It",
  "url": "https://edititv2.web.app/",
  "img": "https://utfs.io/f/6b21899d-22ab-42be-9c76-597e8e091892-2pu.png",
  "id": "p2",
  "index": 1,
  "github":"https://github.com/RBadola/editIT"
},
{
  "title": "Laptop Break ",
  "url": "https://github.com/RBadola/BlinkTracker",
  "img": "https://utfs.io/f/b54388a7-06dd-4a74-9609-731d4dcfc5f0-2pv.png",
  "id": "p3",
  "index": 2,
  "github":"https://github.com/RBadola/BlinkTracker"
},
{
  "title": "DSA Tracker",
  "url": "https://github.com/RBadola/DSAtracker/releases/tag/app",
  "img": "https://utfs.io/f/d4010931-ec8c-4cea-a376-56b277d916b5-6ljdrn.png",
  "id": "p4",
  "index": 4,
  "github":"https://github.com/RBadola/DSAtracker"
}
]
const Projects = () => {


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
  }, []);
  return (
    <section className="mt-10 py-10 max-h-screen">
    <motion.div
      layout
      className=" w-full  h-1/2  font-extrabold  flex flex-col relative gap-7"
      ref={containerRef}
    >
      <div>
        <motion.p
          className=" w-full text-xl md:text-4xl text-text text-left max-w-7xl mx-auto "
          transition={{ duration: 1 }}
        >
          PERSONAL PROJECTS
        </motion.p>
      </div>
      <motion.div
        layout
        className="z-0 w-full max-w-7xl mx-auto h-full py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4   relative   gap-7  select-none "
        ref={projectRef}
      >
        {projects.map((proj, index) => {
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
      {/* <div className="my-15 relative">
        <Banner  items={["React", "Javascript", "next", "html", "css", "docker", "github"]} classname={"bg-white text-accent-400 rotate-2"}/>
        <Banner  items={["React", "Javascript", "next", "html", "css", "docker", "github"]} classname={"text-white bg-gray-400 -rotate-2"}/>
    </div> */}
    </section>
  );
};

export default Projects;
