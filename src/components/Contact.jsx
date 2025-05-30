import { MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";
import { motion, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import Algae from "../assets/bg-illus/algae.webp"
import BG from "../assets/bg-illus/background.webp"
import Clouds from "../assets/bg-illus/clouds.webp"
import Dear from "../assets/bg-illus/dear.webp"
import Duck from "../assets/bg-illus/duck.webp"
import Eagle from "../assets/bg-illus/eagle.webp"
import Fishes from "../assets/bg-illus/fishes.webp"
import Ground from "../assets/bg-illus/grounds.webp"
import Insects from "../assets/bg-illus/insects.webp"
import Lake from "../assets/bg-illus/lake.webp"
import Mountain from "../assets/bg-illus/mountains.webp"
import Plant from "../assets/bg-illus/plants.webp"
import Roots from "../assets/bg-illus/roots.webp"
import Sun from "../assets/bg-illus/sun.webp"
import Tree from "../assets/bg-illus/trees.webp"
import { Element } from "react-scroll";

const Contact = () => {
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [distance, -distance])
  }
  const ref = useRef(null)
  const targetRf = useRef(null);
  const isInView = useInView(targetRf, { amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref })
  const getResponsiveDistance = () => {
    if (window.innerWidth < 640) return 100  // Mobile
    if (window.innerWidth < 1024) return 200 // Tablet
    return 300                                // Desktop
  }
  
  const distance = getResponsiveDistance()
  const x = useParallax(scrollYProgress, distance)
  const form = useRef();
  const [Status, setStatus] = useState("Send");
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs
        .sendForm("service_7j6l115", "template_9w2wcdg", form.current, {
          publicKey: "b15i6loxgShtGN6d-",
        })
      if (response.status === 200) {
        e.target.reset();
        await animate(scope.current, { backgroundColor: "#bca6fa" }, { duration: 1 })
        // await animate(scope.current,{borderRadius:"100%"},{duration:1})
      }
    }
    catch (err) {
      console.log("FAILED...", err.text);
      await animate(scope.current, { backgroundColor: "red" }, { duration: 1 })
    }

    setStatus("Send");
  };
  

  const headingV = {
    initial: {
      x: -500,
      opacity: 0,
    },
  };
  const iconVariants = {
    initial: {
      width: "0",
      transition: {
        duration: 1,
        staggerChildren: 0.5
      },
    },
    animate: {
      width: "max-content",
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  };
  const vari = {
    initial: {
      opaxity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const [scope, animate] = useAnimate()
  return (
    <Element name="contact">

    <motion.div
      className="w-full  md:h-[100vh] mb-10 md:mb-0  relative overflow-hidden text-text"
      ref={targetRf}
    >
      <div className="w-full h-full  absolute z-0" >

        <img loading="lazy" fetchPriority="low" src={BG} alt="background" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute   " />
        <img loading="lazy" fetchPriority="low" src={Mountain} alt="mountains" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute  " />
        <img loading="lazy" fetchPriority="low" src={Duck} alt="duck" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute " />
        <img loading="lazy" fetchPriority="low" src={Lake} alt="lake" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute " />
        <img loading="lazy" fetchPriority="low" src={Sun} alt="sun" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute " />
        <img loading="lazy" fetchPriority="low" src={Algae} alt="algae" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute " />
        {/* parallax */}
        <motion.img loading="lazy" fetchPriority="low" style={{x}} src={Clouds} alt="clouds" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute "  />
        <img loading="lazy" fetchPriority="low" src={Dear} alt="dear" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute "  />
        <img loading="lazy" fetchPriority="low" src={Ground} alt="ground" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute "  />
        <img loading="lazy"  fetchPriority="low"src={Plant} alt="plant" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute "  />
        <img loading="lazy" fetchPriority="low" src={Roots} alt="roots" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute "  />
        <img loading="lazy" fetchPriority="low" src={Fishes} alt="fishes" className="w-max h-max object-cover bottom-10 md:top-0 md:object-contain absolute "  />
      </div>
      <motion.div className=" text-6xl md:text-9xl   relative  font-Nunito font-extrabold    pl-4 text-center" ref={ref}>
        <motion.p
          custom={0}
          initial="initial"
          animate={isInView && { x: 0, opacity: 1 }}
          variants={headingV}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
         className=" text-6xl md:text-8xl font-black text-text text-center"

        >
          REACH OUT TO ME
        </motion.p>
      </motion.div>
      {/* <a href="https://www.freepik.com/free-vector/ecosystem-concept-illustration_14205322.htm">Image by storyset on Freepik</a> */}
      {/* <img loading="lazy" src="" alt="" /> */}
      <motion.div className="w-full  h pt-6 flex flex-col md:flex-row  overflow-hidden justify-center items-center md:absolute md:inset-0 z-50 ">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className=" w-10/12 md:w-2/6 text-gray-700  py-6 text-lg px-4 gap-2 font-Nunito flex flex-col  overflow-hidden bg-black/20 bg-opacity-20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-200 "
        >
          <motion.input
            name="user_name"
            type="text"
            placeholder="Your Name"
            className=" placeholder-white outline-none py-2 px-1  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
            focus:border-accent-300 "
            required
          />
          <motion.input
            name="user_email"
            type="text"
            placeholder="Your Email"
            className="bg-transparent outline-none placeholder-white py-2 px-1 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
            focus:border-accent-300"
            required
          />
          <motion.input
            name="user_contact"
            type="text"
            placeholder="+91"
            className="bg-transparent outline-none placeholder-white py-2 px-1  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
            focus:border-accent-300"
            required
          />
          <motion.textarea
            cols="50"
            name="message"
            type="text"
            placeholder="Your Enquiry"
            className="bg-transparent outline-none placeholder-white py-2 px-1  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
            resize-none  focus:border-accent-300"
            required
          />
          <motion.div className="flex justify-between items-center">
            <motion.button
              className={twMerge(
                "outline-none rounded p-1 px-3  text-white w-max bg-accent-400 hover:text-black hover:scale-110 transition-all"
              )}
              type="submit"
              ref={scope}
            >
              {Status}
            </motion.button>
            <motion.div
              className="flex gap-2 w-0"
              initial="initial"
              animate={"animate"}
              viewport={{once:true}}
              variants={isInView && iconVariants}
            >
              <motion.a
                key={1}
                href="tel:+918882541082"
                className="text-accent-600  transition-all "
                variants={vari}               viewport={{once:true}}

                whileHover={{ y: -5, transition: { duration: 0.1, type: "spring" } }}
              >
                <MdOutlineCall size={30} />
              </motion.a>
              <motion.a
                key={2}
                href="mailto:roshanbadola06gmail.com"
                rel="noreferrer"
                className="text-accent-600  transition-all "
                variants={vari}               viewport={{once:true}}

                whileHover={{ y: -5, transition: { duration: 0.1, type: "spring" } }}
              >
                <MdOutlineMailOutline size={30} />
              </motion.a>
              <motion.a
                key={3}
                href="https://www.linkedin.com/in/roshan-badola-6b89811b4"
                rel="noreferrer"               viewport={{once:true}}

                target="_blank"
                className=" text-accent-600  transition-all "
                variants={vari}
                whileHover={{ y: -5, transition: { duration: 0.1, type: "spring" } }}
              >
                <BiLogoLinkedinSquare size={30} />
              </motion.a>
              <motion.a
                key={4}
                href="https://github.com/RBadola"
                rel="noreferrer"               viewport={{once:true}}

                target="_blank"
                className="text-accent-600  transition-all "
                variants={vari}
                whileHover={{ y: -5, transition: { duration: 0.1, type: "spring" } }}
              >
                <FaGithub size={30} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
    </Element>

  );
};

export default Contact;
