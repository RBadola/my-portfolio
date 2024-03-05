import { useState } from 'react'

import Project from './Project'

const Projects = () => {
    const [activeTab, setactiveTab] = useState({
        p1: true,
        p2: false,
        p3: false,
        p4: false
    })
    // eslint-disable-next-line no-unused-vars
    const ProjectData = [
        {
            title: "Write On",
            desc: "Built a full-stack, responsive blogging platform with comprehensive user authentication and authorization. This platform allows users to create, explore, and search for content in a seamless and intuitive manner.",
            url: " https://writeon-4e1e7.web.app/home",
            tech: ["React.Js", "TaiwindCss", "Node.Js", "Express.Js", "Javascript"],
            img: "p1.png",
            id:"p1"
        },
        {
            title: "Edit It",
            desc: "Built a intuative web based image editor. That offers a variety of features to users to fullfill thier image editing needs on the go. ",
            url: "https://edititv2.web.app/",
            tech: ["React.Js", "TaiwindCss", "Firebase"],
            img: "p2.png",
            id:"p2"
        },
        {
            title: "Laptop Break Reminder",
            desc: "A Python application that alerts a person to take a break, if they have been using their laptop for too long or are not blinking enough. The eyes can also get dry and irritated during long stretches of screen use this application aims to reduce the issues caused by dry eyes.",
            url: "https://github.com/RBadola/BlinkTracker",
            tech: ["Python", "OpenCv", "dlib", "Win10Toast"],
            img: "p3.png",
            id:"p3"
        },

    ]
    return (
        <div className='w-full h-full font-extrabold bg-orange-700 grid  '>
            <div className=" h-8 text-4xl text-white "><p>Projects</p></div>
            <div className=' h-[95%] w-[1080px] absolute flex items-center justify-center  place-self-center gap-2 '>
                {
                    ProjectData.map((pro)=>{
                       return <Project key={pro.id} id={pro.id} title={pro.title} desc={pro.desc} url={pro.url} tech={pro.tech} image={pro.img} active={activeTab} changeStatus={setactiveTab} />

                    })
                }
            </div>
        </div>
    )
}

export default Projects