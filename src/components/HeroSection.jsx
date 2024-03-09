import Bg from "./Bg";
import { motion } from "framer-motion";
// import './BluuNext-Bold.ttf'
const HeroSection = () => {
  return (
    <motion.div className="w-full h-full bg-black relative  flex flex-col md:flex-row justify-center items-center  font-extrabold   ">
          <div className="absolute w-full h-full z-[1] top-0   overflow-hidden bg-card ">
      
      </div>
      <motion.img
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
        className="w-[300px] h-max border border-black object-contain rounded-md z-10  "
        src="portrait.avif"
        alt="my-image"
      />
      <motion.section className="max-w-screen-md  z-10 pointer-events-none">
        <motion.p className=" text-white text-center">
          <p className=" text-3xl  md:text-6xl">Hi, I am Roshan Badola.</p> A passionate web
          developer looking to showcase my talent and skills to all the
          recruiters out thier.
        </motion.p>
        <motion.span></motion.span>
      </motion.section>
    </motion.div>
  );
};

export default HeroSection;
