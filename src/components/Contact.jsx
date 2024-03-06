import { MdOutlinePinDrop,MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoMdDoneAll,IoMdClose } from "react-icons/io";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { twMerge } from "tailwind-merge";

const Contact = () => {
    const form = useRef();
    const[Status,setStatus] = useState("Send")
    const sendEmail = (e) => {
      e.preventDefault();
      setStatus(".....")  
      emailjs
        .sendForm('service_7j6l115', 'template_9w2wcdg', form.current, {
          publicKey: 'b15i6loxgShtGN6d-',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setStatus("Send")
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setStatus("Send")
          },
        );
        setStatus("Send")

    };
    return (
        <div className="w-full h-screen flex flex-col md:justify-center items-center p-3 contact overflow-visible">
            <p className="text-4xl text-white  font-bold mb-10">Reach Out To Me</p>
            <div className="w-full pt-6 flex flex-col md:flex-row gap-2 md:gap-0 justify-center relative ">

                <form ref={form} onSubmit={sendEmail} className="  md:w-2/5 text-gray-500 rounded-md py-10 text-xl px-4 gap-2 flex flex-col  bg-slate-100" >
                    <input name="user_name" type="text" placeholder="Enter your Name" className="bg-transparent outline-none p-3 border-2 border-gray-500 rounded md:w-3/4  " required />
                    <input name="user_email" type="text" placeholder="Enter your Email" className="bg-transparent outline-none p-3 border-2 border-gray-500 rounded md:w-3/4 " required />
                    <input name="user_contact" type="text" placeholder="Phone Number" className="bg-transparent outline-none p-3 border-2 border-gray-500 rounded md:w-3/4  " required />
                    <input name="message" type="text" placeholder="Message" className="bg-transparent outline-none p-3 border-2 border-gray-500 rounded md:w-3/4  " required />
                    <button className={twMerge("bg-transparent outline-none rounded p-2 px-5 bg-gray-500 text-white w-max")} type="submit">{Status}</button>
                </form>
                <div className=" break-words text-wrap bg-rose-400  md:w-1/4 h-[400px] md:absolute top-24 text-lg p-9 grid gap-2 text-white font-bold left-2/3 rounded-md z-50  ">
                    <div className="hidden md:block w-[100px] h-[30px] rounded-l-xl mr-12 bg-rose-400 absolute  top-12 -left-20"></div>
                    <div className=" hidden md:block w-[100px] h-[30px] rounded-xl mr-12 bg-slate-100 absolute top-[78px] -left-20"></div>
                    <div className="hidden md:block w-[70px] h-[30px] rounded-l-xl mr-12 bg-rose-400 absolute  top-[108px] -left-16"></div>
                    
                        <p>OFFICE ADDRESS</p>
                        <p className="flex gap-1 items-center "><span><MdOutlinePinDrop size={30} /></span>Dilshad Colony,East Delhi, Delhi-110095,India</p>
                        <p className="flex gap-1 items-center " ><span><MdOutlineCall size={30}/></span><a href="tel:+918882541082">+91-8882541082</a></p>
                        <p className="flex gap-1 items-center"><span><MdOutlineMailOutline size={30}/></span><a href="mailto:roshanbadola06gmail.com" rel="noreferrer" >roshanbadola06@gmail.com</a></p>
                        <p className="flex gap-1 items-center "><span><BiLogoLinkedinSquare size={30} /></span><a href="https://www.linkedin.com/in/roshan-badola-6b89811b4" rel="noreferrer" target="_blank">linked.in/roshan-badola</a></p>
                        <p className="flex gap-1 items-center "><span><FaGithub size={30} /></span> <a href="https://github.com/RBadola" rel="noreferrer" target="_blank" >github.com/RBadola</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Contact