/* eslint-disable no-unused-vars */

import "./App.css";
import Projects from "./components/Projects-V/Projects";
import TechStack from "./components/TechStack";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import ProjectsV2 from "./components/Projects-V2/Projects2";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const [first, setfirst] = useState(true);
  const containerRef = useRef(null)

  return (
    <div className="w-full h-full  ">
      <HeroSection pref={containerRef} />
      <TechStack />

       <Projects /> 
    
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
