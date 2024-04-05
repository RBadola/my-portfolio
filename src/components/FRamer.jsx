import {
  motion,
  AnimatePresence,
  MotionConfig,
  useAnimationControls,
  Reorder,
  useScroll,
} from "framer-motion";
import React, { useState } from "react";

const FRamer = () => {
  const slideVariants = {
    hiddenLeft: { x: "-100%" },
    visible: { x: 0 },
    hiddenRight: { x: "100%" },
    exit: { x: "-100%" },
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <motion.div className="w-[600px] h-full z-0 ">
      <div className="carousel">
        <div className="carousel-images">
          <motion.div className="carousel-container">
            <AnimatePresence exitBeforeEnter>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={currentIndex === 0 ? "visible" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                variants={slideVariants}
              />
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="carousel-navigation">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
     
    </motion.div>
  );
};

export default FRamer;
