
import { useRef } from "react";
import { twMerge } from "tailwind-merge"

// eslint-disable-next-line react/prop-types, no-unused-vars
const Project = ({ id, active, changeStatus,title,desc,tech,image }) => {
    const cs = () => {
        if (id === "p1") {
            changeStatus({
                p1: true,
                p2: false,
                p3: false,
            })
        }else if (id === "p2") {
            changeStatus({
                p1: false,
                p2: true,
                p3: false,
            })
        }else{
            changeStatus({
                p1: false,
                p2: false,
                p3: true,
            })
        }
    }
    const elementRef = useRef()
    return (
        <div ref={elementRef} id={id} className={twMerge("w-[180px] min-w-[60px]  h-1/3 bg-purple-700 border-2 rounded-2xl relative select-none max-w-4xl overflow-hidden", active[id] && "w-5/6 h-4/6 inline-block")} onClick={cs}>
            <img src={image} className="w-full h-full object-cover object-left-top rounded-2xl" />
            <div className={twMerge("absolute top-0 backdrop-blur-sm h-full w-full  justify-center items-center font-Rubik font white rounded-2xl hidden text-white", active[id] && "grid")}>
                <h1 className="text-5xl ">{title}</h1>
                <p className="break-words text-wrap px-20 text-xl ">{desc}</p>
                <div className="flex gap-1 justify-center ">
                    {
                        // eslint-disable-next-line react/prop-types
                        tech?.map((t)=><span key={t} className="border-2 p-1 border-white rounded-lg">{t}</span>)
                    }
                </div>
                <button className="hover:scale-125 hover:bg-white w-max self-center justify-self-center transition-all ease-in duration-100 rounded-2xl border-2  border-white hover:text-black p-2">
                    Visit Website
                </button>
            </div>
        </div>
    )
}

export default Project
