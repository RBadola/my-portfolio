import {
  MdOutlinePinDrop,
  MdOutlineCall,
  MdOutlineMailOutline,
} from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoMdDoneAll, IoMdClose } from "react-icons/io";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Parallex from "../utils/Parallex";

const Contact = () => {
  const form = useRef();
  const [Status, setStatus] = useState("Send");
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(".....");
    emailjs
      .sendForm("service_7j6l115", "template_9w2wcdg", form.current, {
        publicKey: "b15i6loxgShtGN6d-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("Send");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Send");
        }
      );
    setStatus("Send");
  };
  const parentV = {
    initial: {
      y: 400,
      opacity: 0,
      flexDirection:"row",
      alignItems:"center",
    },
    animate: {
      y: 0,
      opacity: 1,
      
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const headingV = {
    initial:i=> ({
      x:-500,
     
    }),
    animate:i=>( {
      x:0,
    }),
  };
  return (
    <motion.div className="w-full  md:h-[100vh] mb-10 md:mb-0  relative overflow-hidden">
      <motion.div
        className=" text-6xl md:text-9xl  flex flex-wrap gap-4 md:block  text-white font-Nunito font-extrabold   z-10 pl-4"
        initial="initial"
        animate="animate"
        variants={parentV}
        layout
      >
        <motion.p custom={0} variants={headingV}>REACH</motion.p>
        <motion.p custom={1} variants={headingV}>OUT</motion.p>
        <motion.p custom={2} variants={headingV}>TO</motion.p>
        <motion.p custom={3} variants={headingV}>ME</motion.p>
      </motion.div>
      <motion.div  className="w-full  h pt-6 flex flex-col md:flex-row  justify-center items-center md:absolute md:inset-0 z-50 ">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className=" w-10/12 md:w-2/5 text-gray-500 rounded-md py-6 text-lg px-4 gap-2 font-Nunito flex flex-col  bg-slate-100"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Jhon Doe"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md md:w-3/4  "
            required
          />
          <input
            name="user_email"
            type="text"
            placeholder="youremail@mail.com"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md md:w-3/4 "
            required
          />
          <input
            name="user_contact"
            type="text"
            placeholder="+91-000000000"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md md:w-3/4  "
            required
          />
          <input
            name="message"
            type="text"
            placeholder="Your enquiry"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md md:w-3/4  "
            required
          />
          <button
            className={twMerge(
              "bg-transparent outline-none rounded p-2 px-5 bg-purple-700 text-white w-max"
            )}
            type="submit"
          >
            {Status}
          </button>
        </motion.form>
        {/* <motion.div
          // initial={{ y: 150 }}
          // animate={{ y: [150, -170, 80, -130, 150, 0] }}
          transition={{
            duration: 1,
            // type:"spring",
            ease: "circInOut",
          }}
          className="  bg-rose-400 w-4/5  md:w-1/4 md:h-[350px] mb-11 absolute  md:text-lg  inset-0 p-2 md:p-9 flex flex-col md:gap-y-3 text-white font-bold  rounded-md z-50  "
        >
          <div className="absolute rotate-90 right-3 -top-10 md:rotate-0 md:top-14 md:-left-16 ">
            
            <div className=" w-[100px] h-[30px] rounded-l-xl bg-rose-400   "></div>
            <div className="  w-[100px] h-[30px] rounded-xl  bg-slate-100"></div>
            <div className=" w-[70px] h-[30px] absolute right-2 md:right-0 md:left-5 rounded-l-xl  bg-rose-400 -z-10"></div>
          </div>

          <p>OFFICE ADDRESS</p>
          <p className="flex gap-1 items-center ">
            <span>
              <MdOutlinePinDrop size={30} />
            </span>
            Dilshad Colony,East Delhi, Delhi-110095,India
          </p>
          <p className="flex gap-1 items-center ">
            <span>
              <MdOutlineCall size={30} />
            </span>
            <a href="tel:+918882541082">+91-8882541082</a>
          </p>
          <p className="flex gap-1 items-center ">
            <span>
              <MdOutlineMailOutline size={30} />
            </span>
            <a
              href="mailto:roshanbadola06gmail.com"
              rel="noreferrer"
              className=" w-10/12 break-words"
            >
              roshanbadola06@gmail.com
            </a>
          </p>
          <p className="flex gap-1 items-center ">
            <span>
              <BiLogoLinkedinSquare size={30} />
            </span>
            <a
              href="https://www.linkedin.com/in/roshan-badola-6b89811b4"
              rel="noreferrer"
              target="_blank"
            >
              linked.in/roshan-badola
            </a>
          </p>
          <p className="flex gap-1 items-center ">
            <span>
              <FaGithub size={30} />
            </span>
            <a
              href="https://github.com/RBadola"
              rel="noreferrer"
              target="_blank"
            >
              github.com/RBadola
            </a>
          </p>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
