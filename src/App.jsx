/* eslint-disable no-unused-vars */


import './App.css'
import { useEffect } from 'react'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import HeroSection from './components/HeroSection'
import Contact from './components/contact'

function App() {
  

  
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

  }, [])

  return (
    <div className='w-full h-full bg-orange-700 '>
      <HeroSection/>
      {/* <Projects/>  */}
      <TechStack/>
      <Contact/>
    </div>
  )
}

export default App
