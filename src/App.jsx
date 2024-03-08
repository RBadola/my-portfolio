/* eslint-disable no-unused-vars */


import './App.css'
import { useEffect } from 'react'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import HeroSection from './components/HeroSection'
import Contact from './components/Contact'
import useWidth from './utils/useWidth'
import TechStackMobile from './components/TechStackMobile'
import FRamer from './components/FRamer'

function App() {
  

  
  const width = useWidth()
  useEffect(() => {
    // const elements = document.querySelectorAll(".draggable")
    // elements.forEach((item) => {
    //     item.addEventListener("mousedown", dragstartHandler);
    // })
    // function dragstartHandler(ev) {
    //     ev.preventDefault();
    //     const eleL = ev.target.previousElementSibling;
    //     const eleR = ev.target.nextElementSibling;
    //     // console.log("initial",eleR,JSON.parse(JSON.stringify(eleR.getBoundingClientRect().left)),JSON.parse(JSON.stringify(eleR.getBoundingClientRect().right)));
    //     // console.log("initialL",eleL,JSON.parse(JSON.stringify(eleL.getBoundingClientRect().left)),JSON.parse(JSON.stringify(eleL.getBoundingClientRect().right)));
  
    //     const resize = (e) => {
    //         eleL.style.width =  (e.clientX) -  eleL.getBoundingClientRect().left + 'px'
    //         eleR.style.width = eleR.getBoundingClientRect().right -e.clientX  +'px'
    //         // console.log((eleR.getBoundingClientRect().right -e.clientX)-50);
    //     }
    //     window.addEventListener('mousemove', resize)
    //     window.addEventListener('mouseup', stopResize)
  
    //     function stopResize() {
    //         window.removeEventListener('mousemove', resize)
    //     }
    // }

  },[])
  console.log(width)
  return (
    <div className='w-full h-full '>
      <FRamer/>
      <HeroSection/>
      {/* <Projects/>  */}
{ width <= 640 ? <TechStackMobile/>  :     <TechStack/>}
      <Contact/>
    </div>
  )
}

export default App
