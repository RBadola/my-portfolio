import { motion } from "framer-motion";
import React from "react";

const FRamer = () => {
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
    className="w-full h-full grid place-content-center"
    >
      <motion.button className="rounded-md bg-purple-600 text-white p-3">
        Butt
      </motion.button>
    </motion.div>
  );
};

export default FRamer;
