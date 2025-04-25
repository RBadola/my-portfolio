/* eslint-disable no-unused-vars */

import "./App.css";
import Projects from "./components/Projects-V/Projects";
import TechStack from "./components/TechStack";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import { useRef, useState } from "react";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import CustomCursor from "./CustomCursor";
import Banner from "./components/Banner";
import { Element } from "react-scroll";

function App() {
  const [first, setfirst] = useState(true);
  const containerRef = useRef(null)

  return (
    <div className="  relative overflow-x-clip">
      {/* <CustomCursor/> */}
      <HeroSection pref={containerRef} />
      <div className="relative">
        <Banner items={["Website Design", "Website Development", "Application Development", "Software Development", "Frontend", "Backend"]} classname={"bg-white text-accent-300  "} />
      </div>

      <TechStack />
      <Element name="experience" >

        <h1 className="text-6xl md:text-8xl font-black text-text text-center">My Portfolio</h1>
        <Experience />
        <Projects />
      </Element>
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
