import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import { twMerge } from 'tailwind-merge';
import Banner from './Banner';

const projects =
    [{
        "title": "Ghee Symphony",
        "url": "https://gheesymphony.ca/",
        "img": "https://sa2g8oj3j5.ufs.sh/f/y1XsF1MsqXN30842K0kChM2l1cNdWA4FZ0e8oQrIinfOaRk5",
        "id": "p1",
        "index": 0
    },
    {
        "title": "Adspyr",
        "url": "https://adspyr.in/",
        "img": "https://sa2g8oj3j5.ufs.sh/f/y1XsF1MsqXN3YqLRMYHxjzMJ1RwZh3mgT2Sy8ONYrHDWQvP0",
        "id": "p2",
        "index": 1
    },
    {
        "title": "Equity Research Mart",
        "url": "https://www.equityresearchmart.in/",
        "img": "https://sa2g8oj3j5.ufs.sh/f/y1XsF1MsqXN38xndeqWeZ0cGTUlDSkgrBd7jmRi9pfEK5znC",
        "id": "p3",
        "index": 2
    },
    {
        "title": "Kabadi",
        "url": "https://kabadi.vercel.app/",
        "img": "https://sa2g8oj3j5.ufs.sh/f/y1XsF1MsqXN3gRG7yhR3MRZe5P4Q1rkGyoDFuw7dYs3K6VN8",
        "id": "p4",
        "index": 4
    }
    ]

const Experience = () => {
    return (
        <>
        <section className=' w-full h-1/2 md:min-h-full md:max-h-screen py-10 '>
            <p className=" text-xl md:text-4xl font-black text-text text-center md:text-left max-w-7xl mx-auto">
                RECENT WORK
            </p>
            <div
                className="z-0 w-full max-w-7xl mx-auto h-1/2 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4   relative   gap-7  select-none ">
                {projects.map((proj, index) => {
                    return (
                        <div
                            key={index}
                            className='min-h-full  aspect-video w-full relative'
                        >
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full h-full object-cover  rounded-2xl absolute top-0 left-0"
                                loading="lazy"
                            />
                            <div
                                className={twMerge(
                                    "  backdrop-blur-xs h-full w-full flex flex-col justify-center items-center  font-white rounded-2xl  text-white"
                                )}
                            >
                                <h1 className="text-xl md:text-2xl font-black text-center text-pretty leading-snug "
                                    style={{ textShadow: "2px 2px 0px black" }}>
                                    {proj.title.toUpperCase()}
                                </h1>
                                <a
                                    href={proj.url}
                                    target='_blank'
                                    className="absolute -bottom-2 hover:scale-110 hover:bg-white  hover:text-black w-max self-center justify-self-center transition-all ease-in duration-100 rounded-2xl   bg-accent-300  font-black p-2">
                                    Visit Website
                                </a>

                            </div>
                        </div>
                    );
                })}
            </div>
        {/* <div className="relative mt-15 mb-10">
        <Banner  items={["React", "Javascript", "next", "html", "css", "docker", "github"]} classname={"bg-white text-Accent-400 rotate-2"}/>
        <Banner  items={["React", "Javascript", "next", "html", "css", "docker", "github"]} classname={"text-white bg-gray-400 -rotate-2"}/>
      </div> */}
        </section>
        </>
    )
}

export default Experience