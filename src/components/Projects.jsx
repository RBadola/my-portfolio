import { useState } from 'react'

import Project from './Project'

const Projects = () => {
    const[activeTab,setactiveTab]=useState({
        p1:true,
        p2:false,
        p3:false,
        p4:false
      })
    
  return (
    <div className='w-full h-full font-extrabold bg-orange-700 grid  '>
      <div className=" h-8 text-4xl text-white "><p>Projects</p></div>
      <div className=' h-[95%] w-[1080px] absolute flex items-center justify-center  place-self-center gap-2 '>
        <Project id="p1" active={activeTab} changeStatus={setactiveTab} />
          {/* <div className='w-[10px] h-full bg-black cursor-col-resize draggable'></div> */}
        <Project id="p2" active={activeTab} changeStatus={setactiveTab} />
          {/* <div className='w-[10px] h-full bg-black cursor-col-resize draggable'></div> */}
        <Project id="p3" active={activeTab} changeStatus={setactiveTab} />
          {/* <div className='w-[10px] h-full bg-black cursor-col-resize draggable'></div> */}
        <Project id="p4" active={activeTab} changeStatus={setactiveTab} />
      </div>
    </div>
  )
}

export default Projects