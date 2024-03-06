import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandCss3, TbBrandFirebase, TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
const TechStack = () => {
    return (
        <div className='w-full h-full bg-slate-800 font-extrabold grid overflow-hidden tech-gradient '>
            {/* <div className="w-4/5 h-full md:flex md:place-self-center "> */}
            <div className="text-2xl md:text-5xl text-white ml-3 w-[100px] md:w-max break-words"><p>TECH I KNOW</p></div>
            <div className="   grid grid-cols-5 gap-8 p-2  md:place-self-center rounded-md relative">
                <div className="grid gap-2 ">
                    <div className="tech_card  md:place-self-end">
                        <span><BiLogoMongodb size={100} /></span>
                    </div>
                </div>
                <div className="grid gap-2 ">
                    <div className="tech_card ">
                        <span><FaReact size={100} /></span>
                    </div>
                    <div className="tech_card ">
                        <span><TbBrandJavascript size={100}/></span>
                    </div>
                    <div className="tech_card ">
                        <span><TbBrandCss3 size={100} /></span>
                    </div>
                </div>
                <div className="grid gap-2 md:mt-6">

                    <div className="tech_card ">
                        <span><SiTailwindcss size={100} /> </span>
                    </div>
                    <div className="tech_card ">
                        <span><TbBrandFirebase size={100} /></span>
                    </div>
                    <div className="tech_card ">
                        <span><FaNodeJs size={100} /></span>
                    </div>
                </div>
                <div className="grid gap-2">

                    <div className="tech_card ">
                        <span><SiMysql size={100} /></span>
                    </div>
                    <div className="tech_card ">
                        <span><SiExpress size={100} /></span>
                    </div>
                    <div className="tech_card ">
                        <span><FaGithub size={100} /></span>
                    </div>
                </div>
                <div className="grid gap-2 md:mt-6">

                    <div className="tech_card  ">
                        <span><FaHtml5 size={100} /></span>
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default TechStack