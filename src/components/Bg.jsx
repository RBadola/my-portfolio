import React, { useEffect, useRef, useState } from "react";
import useWidth from "../utils/useWidth";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import anime from "animejs/lib/anime.es.js";

const Bg = () => {
  const sq = [];
 
    const tech = [
      <FaGithub size={20} />,
      <FaHtml5 size={20} />,
      <FaNodeJs size={20} />,
      <FaReact size={20} />,
      <BiLogoMongodb size={20} />,
      <TbBrandCss3 size={20} />,
      <TbBrandFirebase size={20} />,
      <TbBrandJavascript size={20} />,
      <TbBrandReactNative size={20} />,
      <SiExpress size={20} />,
      <SiMysql size={20} />,
      <SiTailwindcss size={20} />,
    ];
    let count  = -1
    const colors=[
     " #a8a9ad", "#b5b7bb", "#cccccc", "#d8d8d8", "#757575" , "#afb1ae" 
    ]
    const handleAnime= (e)=>{
     
      count = count+1
      anime({
        targets:".grid-box",
       
        translateY:[
          {value:-15,ease:"easeOutSine",duration:250},
          {value:0,ease:"easeInOutQuad",duration:500},
        ],
        opacity:[
          {value:1,ease:"easeOutSine",duration:250},
          {value:0.5,ease:"easeInOutQuad",duration:500},
        ],
        backgroundColor:[
          {value:colors[count % colors.length - 1],ease:"easeOutSine",duration:250},
          
          {value:"#000000",ease:"easeOutSine",duration:250},
        ],
        delay:anime.stagger(300,{
          grid:[12,7],
          from:e.target.dataset.index
        })
      })
      
    }
  
   
    let index = 0;
    const row = 12;
    const col = 7;
    let c=1
    function animateButton(e, bg ,duration, elasticity) {
  
      anime({
        targets: e.target,
        color:bg,
        duration: duration,
        elasticity: elasticity
      });
    }
    for (let i = 1; i <= col; i++) {
      for (let j = 1; j <= row; j++) {
        c = c+1
        let n = Math.floor(Math.random() * 12);
        sq.push(
          <div
            onMouseUp={handleAnime}
            className="group  grid-box flex items-center  justify-center   transition-all duration-150  "
            data-index={index}
            key={`${i}-${j}`}
           onMouseEnter={(e)=>animateButton(e, "#fff" ,800, 400)}
           onMouseLeave={(e)=>animateButton(e, "#000" ,1000, 400)}
          >
            {tech[c % tech.length - 1]}
            {/* {tech[n]} */}
          </div>
        );
        index++;
      }
    }
  
  
 
  return (
    <div className="absolute w-full h-full z-[1] top-0  grid grid-cols-12  overflow-hidden ">
 

      {sq}
      
    </div>
  );
};

export default Bg;
