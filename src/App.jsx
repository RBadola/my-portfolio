/* eslint-disable no-unused-vars */

import "./App.css";
import { useEffect } from "react";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import useWidth from "./utils/useWidth";
import TechStackMobile from "./components/TechStackMobile";
import FRamer from "./components/FRamer";

function App() {
 
  return (
    <div className="w-full h-full  ">
      <HeroSection />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
