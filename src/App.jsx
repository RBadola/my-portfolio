/* eslint-disable no-unused-vars */

import "./App.css";
import Projects from "./components/Projects-V/Projects";
import TechStack from "./components/TechStack";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import ProjectsV2 from "./components/Projects-V2/Projects2";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [first, setfirst] = useState(true);
  return (
    <div className="w-full h-full  ">
      <HeroSection />
      <TechStack />

      {first ? <Projects /> : <ProjectsV2 />}
      <div className="flex justify-center items-center p-2  text-white font-mono text-2xl">
        <motion.button
          className=" border rounded-full py-1 px-2 text-center rounded-r-none z-10 "
          whileHover={{ backgroundColor: "rgb(255,255,255)", color: "black" }}
          whileTap={{ scale: 0.8 }}
          onClick={()=>setfirst(true)}
        >
          Verion 1
        </motion.button>
        <motion.button
          className=" border rounded-full py-1 px-2 text-center rounded-l-none z-10"
          whileHover={{ backgroundColor: "rgb(255,255,255)", color: "black" }}
          whileTap={{ scale: 0.8 }}
          onClick={()=>setfirst(false)}
          
         >
          Verion 2
        </motion.button>
      </div>
      <Contact />
    </div>
  );
}

export default App;
