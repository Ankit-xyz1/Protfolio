"use client"
import React, { useState } from 'react'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import About from './About'

const tabs = ["Home", "Projects", "About"]

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
                setCurrentTab("Projects")
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
            <div className='tab w-full h-[10vh] flex items-center justify-center p-1 mb-4'>
                <div className='h-full w-[80%] md:w-[50%] bg-zinc-950 border border-zinc-800 rounded flex justify-center items-center  jet p-1 relative'>
                    {tabs.map((tab, idx) => (
                        <div
                            key={tab}
                            onMouseEnter={() => { setHoveredIndex(idx) }}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className='relative px-1 h-[55%]'
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
                            <button onClick={() => changeTab(idx)} className={`relative z-10 ${tabs[idx] === CurrentTab ? "bg-zinc-900 rounded text-white font-semi-bold" : " text-zinc-300"} px-3  hover:text-white cursor-pointer transition-all duration-200 h-full  `}>
                                {tab}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={CurrentTab}
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        filter: 'blur(10px)'
                    }}
                    animate={{
                        opacity: 1,
                        scale:1,
                        filter: 'blur(0px)'
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                    className="content p-2 text-xl"
                >
                    <div className="content p-2 text-xl">
                        {CurrentTab === "Home" && <Home />}
                        {CurrentTab === "Projects" && <Projects />}
                        {CurrentTab === "About" && <About />}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Mainpage
