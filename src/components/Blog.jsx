import React, { useEffect, useState } from 'react'
import { FaSquareArrowUpRight } from 'react-icons/fa6'

const Blog = () => {
    const [blogs, setblogs] = useState([])
    const Fetchlogss = async () => {
        const result = await fetch("https://dev.to/api/articles?username=roshankbadola")
        const data = await result.json()
        console.log(data)
        setblogs(data)
    }
    useEffect(() => {
        Fetchlogss()
    }, [])
    return (
        <section className='min-h-max my-10 py-10'>
            {/* <h1 className="text-3xl text-accent-200 my-10 text-center"></h1> */}
            <p className=" text-6xl md:text-8xl font-black text-text text-center">
                Blogs
            </p>
            <div className="p-5 mx-auto w-full max-w-7xl overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-300 text-text *:border-x ">
                            <th className="p-3 text-xl font-bold border-l-transparent">Title</th>
                            <th className="p-3 text-xl font-bold">Published</th>
                            <th className="p-3 text-xl font-bold">Reactions</th>
                            <th className="p-3 text-xl font-bold">Read Time</th>
                            <th className="p-3 text-xl font-bold border-r-transparent">Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index) => (
                            <tr key={index} className="border-b last:border-b-transparent  *:border-x text-white  hover:text-gray-600  border-gray-200 hover:bg-gray-100 transition">
                                <td className="p-3 border-l-transparent">
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
            </div>

        </section>
    )
}

export default Blog