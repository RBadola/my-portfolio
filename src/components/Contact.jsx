import { MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";
import { motion, useAnimate, useInView } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [Status, setStatus] = useState("Send");
  const sendEmail = async (e) => {
    e.preventDefault();
    try{
      // const response = await emailjs
      //   .sendForm("service_7j6l115", "template_9w2wcdg", form.current, {
      //     publicKey: "b15i6loxgShtGN6d-",
      //   })
        // if(response.status ===200){
          e.target.reset();
          await animate(scope.current,{backgroundColor:"#bca6fa"},{duration:1})
          // await animate(scope.current,{borderRadius:"100%"},{duration:1})
        // } 
    }
    catch(err){
      console.log("FAILED...", err.text);
      await animate(scope.current,{backgroundColor:"red"},{duration:1})
    }

    setStatus("Send");
  };
  const targetRf = useRef(null);
  const isInView = useInView(targetRf, { amount: 0.2 });

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
  const [scope,animate] = useAnimate()
  return (
    <motion.div
      className="w-full  md:h-[100vh] mb-10 md:mb-0  relative overflow-hidden text-text"
      ref={targetRf}
    >
      <motion.div className=" text-6xl md:text-9xl     font-Nunito font-extrabold    pl-4 text-center">
        <motion.p
          custom={0}
          initial="initial"
          animate={isInView && { x: 0, opacity: 1 }}
          variants={headingV}
          transition={{ duration: 1 }}
        >
          REACH OUT TO ME
        </motion.p>
      </motion.div>
      <motion.div className="w-full  h pt-6 flex flex-col md:flex-row  overflow-hidden justify-center items-center md:absolute md:inset-0 z-50 ">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className=" w-10/12 md:w-2/6 text-gray-500 rounded-md py-6 text-lg px-4 gap-2 font-Nunito flex flex-col  overflow-hidden bg-slate-100 "
        >
          <motion.input
            name="user_name"
            type="text"
            placeholder="Jhon Doe"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md  focus:border-Accent-300 "
            required
          />
          <motion.input
            name="user_email"
            type="text"
            placeholder="youremail@mail.com"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md  focus:border-Accent-300"
            required
          />
          <motion.input
            name="user_contact"
            type="text"
            placeholder="+91-000000000"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md  focus:border-Accent-300"
            required
          />
          <motion.textarea
            cols="50"
            name="message"
            type="text"
            placeholder="Your Enquiry"
            className="bg-transparent outline-none py-2 px-1 border-2 border-gray-500 rounded-md resize-none  focus:border-Accent-300"
            required
          />
          <motion.div className="flex justify-between items-center">
            <motion.button
              className={twMerge(
                "bg-transparent outline-none rounded p-1 px-3 bg-purple-700 text-white w-max hover:bg-Accent-400 hover:scale-110 transition-all"
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
              variants={iconVariants}
            >
              <motion.a
                key={1}
                href="tel:+918882541082"
                className="hover:text-Accent-400  transition-all "
                variants={vari}
                whileHover={{y:-5,transition:{duration:0.1,type:"spring"}}}
              >
                <MdOutlineCall size={30} />
              </motion.a>
              <motion.a
                key={2}
                href="mailto:roshanbadola06gmail.com"
                rel="noreferrer"
                className="hover:text-Accent-400  transition-all "
                variants={vari}
                whileHover={{y:-5,transition:{duration:0.1,type:"spring"}}}
              >
                <MdOutlineMailOutline size={30} />
              </motion.a>
              <motion.a
                key={3}
                href="https://www.linkedin.com/in/roshan-badola-6b89811b4"
                rel="noreferrer"
                target="_blank"
                className="hover:text-Accent-400  transition-all "
                variants={vari}
                whileHover={{y:-5,transition:{duration:0.1,type:"spring"}}}
              >
                <BiLogoLinkedinSquare size={30} />
              </motion.a>
              <motion.a
                key={4}
                href="https://github.com/RBadola"
                rel="noreferrer"
                target="_blank"
                className="hover:text-Accent-400  transition-all "
                variants={vari}
                whileHover={{y:-5,transition:{duration:0.1,type:"spring"}}}
              >
                <FaGithub size={30} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
