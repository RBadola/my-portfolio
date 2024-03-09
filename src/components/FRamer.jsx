import { motion, AnimatePresence,MotionConfig ,useAnimationControls,Reorder} from "framer-motion";
import React, { useState } from "react";

const FRamer = () => {
  const controls = useAnimationControls()
  const handleClick = ()=>{
    controls.start("flip")
  }
  // const [items, setItems] = useState([0, 1, 2, 3])
  const pV={
    initial:{
      rotate:"0deg"
    },
    flip:{
      rotate:"360deg",
      transition:{
        type:"spring",
        when:"beforeChildren",
        staggerDirection:0.5
      },
    }
  }
  const items={
    initial:{
      y:10,
      opacity:0
    },
    flip:{
      y:0,
      opacity:1
    }
  }
  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // animate={{ x: [null, 100, 0] }}
      // animate={{ x: [0, 100, 0] }}
      // transition={{ duration: 4 }}
      // animate={{
      //   scale: [0.5, 1, 1, 0.5, 1],
      //   rotate: [0, 0, 180, 180, 0],
      //   borderRadius: ["0%", "0%", "50%", "100%", "0%"]
      // }}
      // transition={{
      //   duration: 2,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],

      //   repeatDelay: 1
      // }}
      // initial={{ scale: 0.5 }}
      // whileHover={{
      //   scale: 1.2,
      //   boxShadow:"0px 0px 0px 12px red",
      //   transition: { duration: 0.5 },
      // }}
      // whileTap={{ scale: 0.9,transition:{duration:0.3} }}
      // whileInView={{ opacity: 1 }}
      className="w-full h-full grid  place-content-center gap-2"
    >
      <motion.button className="w-max p-2 bg-purple-400 rounded" onClick={handleClick}>
        Flip It
      </motion.button>
      <motion.ul className="w-28 h-28 bg-black text-white" 
      variants={pV}
      initial="initial"
      animate="flip"
      
      >
      <motion.li className="p-1" variants={items}  >1</motion.li>
      <motion.li className="p-1" variants={items}  >2</motion.li>
      <motion.li className="p-1" variants={items}  >3</motion.li>
      <motion.li className="p-1" variants={items}  >4</motion.li>
      <motion.li className="p-1" variants={items}  >5</motion.li>
        
      </motion.ul>
    </motion.div>
  );
};

export default FRamer;
