import React from 'react'
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className=' flex flex-col w-[100%]  items-center gap-2'>
            <button
                href="#"
                className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-800 text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-1/2 justify-center gap-2 rounded-md transition-all duration-300 ease-out outline-none active:bg-black/90"
            >
                <span
                    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                ></span>
                <div className="flex items-center">
                    <span className="text-white"><i className="fa-solid fa-house"></i></span>

                </div>
            </button>
            <button
                href="#"
                className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-800 text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-1/2 justify-center gap-2 rounded-md transition-all duration-300 ease-out "
            >
                <span
                    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                ></span>
                <div className="flex items-center">
                    <span className="ml-1 text-white">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    </span>
                </div>
            </button>
            <button
                href="#"
                className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-800 text-white shadow hover:bg-black/90 h-9 px-4 py-2 whitespace-pre md:flex group relative w-1/2 justify-center gap-2 rounded-md transition-all duration-300 ease-out "
            >
                <span
                    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                ></span>
                <div className="flex items-center">
                    <span className=" text-white">
                    <i className="fa-brands fa-github"></i>
                    </span>
                </div>
            </button>
        </div>
    )
}

export default Sidebar
