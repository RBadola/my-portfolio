import React from 'react'
import { twMerge } from 'tailwind-merge'

const Banner = ({ classname, items }) => {
    return (
        <div className={(`p-5 w-[100vw] h-20 flex items-center justify-between  font-black absolute `+classname)}
         
        >
            {
                [...items, ...items]?.map((item, i) => {
                    return <>
                        <span key={i} className={twMerge("text-5xl mx-5 w-full whitespace-nowrap uppercase ")}>{item}</span><span className='text-xl'>.</span>
                    </>
                })
            }
        </div>
    )
}

export default Banner