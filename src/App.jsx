
import { useState } from 'react'
import './App.css'
import Project from './components/Project'
import { useEffect } from 'react'

function App() {
  const[activeTab,setactiveTab]=useState({
    p1:true,
    p2:false,
    p3:false,
    p4:false
  })


  
  useEffect(() => {
    const elements = document.querySelectorAll(".draggable")
    elements.forEach((item) => {
        item.addEventListener("mousedown", dragstartHandler);
    })
    function dragstartHandler(ev) {
        ev.preventDefault();
        const eleL = ev.target.previousElementSibling;
        const eleR = ev.target.nextElementSibling;
        // console.log("initial",eleR,JSON.parse(JSON.stringify(eleR.getBoundingClientRect().left)),JSON.parse(JSON.stringify(eleR.getBoundingClientRect().right)));
        // console.log("initialL",eleL,JSON.parse(JSON.stringify(eleL.getBoundingClientRect().left)),JSON.parse(JSON.stringify(eleL.getBoundingClientRect().right)));
  
        const resize = (e) => {
            eleL.style.width =  (e.clientX) -  eleL.getBoundingClientRect().left + 'px'
            eleR.style.width = eleR.getBoundingClientRect().right -e.clientX  +'px'
            // console.log((eleR.getBoundingClientRect().right -e.clientX)-50);
        }
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
  
        function stopResize() {
            window.removeEventListener('mousemove', resize)
        }
    }
  }, [])

  return (
    <div className='w-full h-full font-extrabold bg-orange-700 grid'>
      <div className=" h-8 text-2xl "><p>Projects</p></div>
      <div className=' h-[95%] w-[1080px] absolute flex items-center justify-center  place-self-center '>
        <Project id="p1" active={activeTab} changeStatus={setactiveTab} />
          <div className='w-[10px] h-full bg-black cursor-col-resize draggable'></div>
        <Project id="p2" active={activeTab} changeStatus={setactiveTab} />
          <div className='w-[10px] h-full bg-black cursor-col-resize draggable'></div>
        <Project id="p3" active={activeTab} changeStatus={setactiveTab} />
          <div className='w-[10px] h-full bg-black cursor-col-resize draggable'></div>
        <Project id="p4" active={activeTab} changeStatus={setactiveTab} />
      </div>
    </div>
  )
}

export default App
