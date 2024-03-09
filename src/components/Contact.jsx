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
  return (
    <div className="w-full h-screen flex flex-col  items-center contact overflow-visible">
      <p className="text-4xl text-white  font-bold mb-10">Reach Out To Me</p>
      <div className="w-full  pt-6 flex flex-col md:flex-row  justify-center items-center relative ">
        <form
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
        </form>
        <div className="  bg-rose-400 w-4/5  md:w-1/4 md:h-[350px] mb-11 relative md:absolute -top-4 md:text-lg  md:top-24 p-2 md:p-9 flex flex-col md:gap-y-3 text-white font-bold md:left-2/3 rounded-md z-50  ">
          <div className="absolute rotate-90 right-3 -top-10 md:rotate-0 md:top-14 md:-left-16 ">
            {/*  */}
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
