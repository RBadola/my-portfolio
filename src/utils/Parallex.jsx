import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Parallex = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress,[0,1],["0%","200%"])
  return (
    <motion.div
      ref={ref}
      className="w-full h-full z-0 absolute inset-0 contact"
      style={{
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        y: backgroundY,
      }}
     
    >
      <motion.div
        ref={ref}
        className="w-full h-full z-10 absolute inset-0 "
        style={{
            backgroundImage:"url('building.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></motion.div>
      <motion.div
        ref={ref}
        className="w-full h-full z-20 absolute inset-0 "
        style={{
            backgroundImage:"url('curtain.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></motion.div>
      
    </motion.div>
  );
};

export default Parallex;
