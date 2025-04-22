"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import About from './About'

const tabs = ["Home", "Project", "About"]

const Mainpage = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [CurrentTab, setCurrentTab] = useState<string>("Home")
    const changeTab = (x: number) => {
        console.log(x)
        switch (x) {
            case 0:
                setCurrentTab("Home")
                break;
            case 1:
                setCurrentTab("Project")
                break;
            case 2:
                setCurrentTab("About")
                break;
            default:
                setCurrentTab("Home")
                break;
        }

    }
    return (
        <div className='h-fit w-full'>
            <div className='tab w-full h-[7vh] flex items-center justify-center p-1 mb-4'>
                <div className='h-full w-[70%] md:w-[50%] bg-zinc-950 border border-zinc-700 rounded flex justify-center items-center  jet p-1 relative'>
                    {tabs.map((tab, idx) => (
                        <div
                            key={tab}
                            onMouseEnter={() => {setHoveredIndex(idx)}}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className='relative px-1'
                        >
                            {hoveredIndex === idx && (
                                <motion.div
                                    layoutId="hoverBackground"
                                    className="absolute inset-0 bg-zinc-900 rounded"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <button onClick={() => changeTab(idx)} className={`relative z-10 ${tabs[idx] === CurrentTab ? "bg-zinc-900 rounded text-white font-semi-bold" : " text-zinc-300"} px-3 py-1 hover:text-white cursor-pointer transition-all duration-200`}>
                                {tab}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Navbar/>
            <div className="content p-2 text-xl">
               {CurrentTab==="Home" && <Home/>}
               {CurrentTab==="Project" && <Projects/>}
               {CurrentTab==="About" && <About />}
            </div>
        </div>
    )
}

export default Mainpage
