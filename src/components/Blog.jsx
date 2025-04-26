import React, { useEffect, useState } from 'react'
import { FaSquareArrowUpRight } from 'react-icons/fa6'

const Blog = () => {
    const [blogs, setblogs] = useState([])
    const Fetchlogss = async () => {
        const result = await fetch("https://dev.to/api/articles?username=roshankbadola")
        const data = await result.json()
        // console.log(data)
        setblogs(data)
    }
    useEffect(() => {
        Fetchlogss()
    }, [])
    return (
        <section className='min-h-max md:my-10 md:py-10 w-full'>
            {/* <h1 className="text-3xl text-accent-200 my-10 text-center"></h1> */}
            <p className=" text-6xl md:text-8xl font-black text-text text-center">
                Blogs
            </p>
            <div className="block md:hidden p-5 mx-auto w-full max-w-7xl ">
                {blogs.map((blog, index) => (
                    <div key={index} className=" text-white  hover:text-gray-600  border-gray-200 hover:bg-gray-100 transition">
                        <div className="py-3">
                            <h2 className="text-lg font-semibold">{blog?.title}</h2>
                            <p className="text-sm text-gray-600">{blog?.description}</p>
                            <span className="  ">
                                <a href={blog?.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 w-full h-full">
                                    Read Now   <FaSquareArrowUpRight className="inline-block text-lg" size={20} />
                                </a>
                            </span>
                        </div>
                        <div className='text-xs flex justify-between text-center'>
                            <span className='flex flex-col p-1 border rounded'>
                                <span>Published</span>
                                <span >{blog?.created_at.split("T")[0]}</span>
                            </span>
                            <span className='flex flex-col p-1 border rounded'>
                                <span>Reactions</span>
                                <span >{blog?.public_reactions_count}</span>
                            </span>
                            <span className='flex flex-col p-1 border rounded'>

                                <span>Reading Time</span>
                                <span >{blog?.reading_time_minutes} mins</span>
                            </span>

                        </div>
                    </div>
                ))}
            </div>
            <table className="hidden md:block p-5 mx-auto w-full max-w-7xl">
                <thead>
                    <tr className="border-b border-gray-300 text-text *:border-x *:leading-snug *:text-nowrap ">
                        <th className="p-3 text-xl font-bold border-l-transparent">Title</th>
                        <th className="p-3 text-xl font-bold">Published</th>
                        <th className="p-3 text-xl font-bold">Reactions</th>
                        <th className="p-3 text-xl font-bold ">Read Time</th>
                        <th className="p-3 text-xl font-bold border-r-transparent">Read</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={index} className=" border-b last:border-b-transparent  *:border-x text-white  hover:text-gray-600  border-gray-200 hover:bg-gray-100 transition">
                            <td className="p-3 border-l-transparent w-full" >
                                <h2 className="text-lg font-semibold">{blog?.title}</h2>
                                <p className="text-sm text-gray-600">{blog?.description}</p>
                            </td>
                            <td className="p-3">{blog?.created_at.split("T")[0]}</td>
                            <td className="p-3">{blog?.public_reactions_count}</td>
                            <td className="p-3">{blog?.reading_time_minutes} mins</td>
                            <td className="p-3 border-r-transparent ">
                                <a href={blog?.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 w-full h-full">
                                    <FaSquareArrowUpRight className="inline-block text-lg" size={30} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    )
}

export default Blog