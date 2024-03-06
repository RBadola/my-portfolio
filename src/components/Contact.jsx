import { MdOutlinePinDrop,MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-3 contact overflow-visible">
            <p className="text-4xl text-white  font-bold mb-10">Reach Out To Me</p>
            <div className="w-full pt-6 flex justify-center relative ">

                <form className="w-2/5 text-gray-500 rounded-md py-10 text-2xl px-4 gap-2 flex flex-col  bg-slate-100 ">
                    <input type="text" placeholder="Enter your Name" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4 capitalize" />
                    <input type="text" placeholder="Enter your email" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4 capitalize" />
                    <input type="text" placeholder="Phone Number" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4  capitalize" />
                    <input type="text" placeholder="Message" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4  capitalize" />
                    <button className="bg-transparent outline-none rounded p-2 px-5 bg-black text-white w-max">Send</button>
                </form>
                <div className=" bg-rose-400 w-1/5 h-[400px] absolute top-24 text-lg p-9 grid gap-2 text-white font-bold left-2/3 rounded-md z-50  ">
                    <div className="w-[100px] h-[30px] rounded-l-xl mr-12 bg-rose-400 absolute  top-12 -left-20"></div>
                    <div className="w-[100px] h-[30px] rounded-xl mr-12 bg-slate-100 absolute top-[78px] -left-20"></div>
                    <div className="w-[70px] h-[30px] rounded-l-xl mr-12 bg-rose-400 absolute  top-[108px] -left-16"></div>
                    
                        <p>OFFICE ADDRESS</p>
                        <p className="flex gap-1 items-center "><span><MdOutlinePinDrop /></span>Dilshad Colony,East Delhi, Delhi-110095,India</p>
                        <p className="flex gap-1 items-center " ><span><MdOutlineCall /></span>+91-0000000000</p>
                        <p className="flex gap-1 items-center "><span><MdOutlineMailOutline /></span>roshanbadola06@gmail.com</p>
                        <p className="flex gap-1 items-center "><span><BiLogoLinkedinSquare /></span>linked.in@roshan-badola</p>
                        <p className="flex gap-1 items-center "><span><FaGithub /></span> <a href="https://github.com/RBadola" rel="noreferrer" target="_blank" >github.com/RBadola</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Contact