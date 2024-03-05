
const Contact = () => {
    return (
        <div className="w-full h-full flex flex-col items-center p-3 contact overflow-visible">
            <p className="text-4xl text-white  font-bold">Reach Out To Me</p>
            <div className="w-full pt-6 flex justify-center relative ">



                <form className="w-2/5 text-gray-500 rounded-md py-4 text-2xl px-4 gap-2 flex flex-col  bg-slate-100 ">
                    <input type="text" placeholder="Enter your Name" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4 capitalize" />
                    <input type="text" placeholder="Enter your email" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4 capitalize" />
                    <input type="text" placeholder="Phone Number" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4  capitalize" />
                    <input type="text" placeholder="Message" className="bg-transparent outline-none p-4 border-2 border-gray-500 rounded w-3/4  capitalize" />
                    <button className="bg-transparent outline-none rounded p-2 px-5 bg-slate-500 text-white w-max">Send</button>
                </form>
                <div className=" bg-rose-400 w-1/5 h-[400px] absolute top-24 text-lg p-9 grid gap-2 text-white font-bold left-2/3 rounded-md z-50  ">
                    <div className="w-[100px] h-[30px] rounded-l-xl mr-12 bg-rose-400 absolute  top-12 -left-20"></div>
                    <div className="w-[100px] h-[30px] rounded-xl mr-12 bg-slate-100 absolute top-[78px] -left-20"></div>
                    <div className="w-[70px] h-[30px] rounded-l-xl mr-12 bg-rose-400 absolute  top-[108px] -left-16"></div>
                    
                        <p>Office Address</p>
                        <p>Dilshad Colony,East Delhi, Delhi-110095,India</p>
                        <p>+91-0000000000</p>
                        <p>roshanbadola06@gmail.com</p>
                        <p>linked.in@roshan-badola</p>
                        <p>github.com.rbadola</p>
                </div>
            </div>
        </div>
    )
}

export default Contact