"use client"
import React from 'react'
import Image from 'next/image'
import "./utility.css";
import Typewriter from 'typewriter-effect';


const Mainpage = () => {
  return (
    <>
      <div className='relative'>
        <div
          className='h-[15vh] w-[68%] rounded-xl flex items-center justify-start text-yellow-50 gap-5 fixed bg-zinc-800 z-10'>
          <span className='ml-10'>
            <Image
              className='rounded-xl'
              src="/assets/dp.png"
              width={70} // Adjust width as needed
              height={70} // Adjust height as needed
              alt='Profile'
            />
          </span>
          <div>
            <h1 className='md:text-4xl ubuntu'>Ankit s Gupta</h1>
            <p className='jet ml-0 text-[9px] md:text-sm text-zinc-400'>
              <Typewriter
                options={{
                  strings: ['Full Stack developer'],
                  autoStart: true,
                  loop: false,
                  deleteSpeed: 99999999999999999,
                }}
              />
            </p>
          </div>
        </div>
        <div className='h-[20vh]'></div>
        <div
          className="about-me text-[14px] h-20vh md:min-h-[25vh] md:p-8 overflow-hidden scrollbar-hide md:text-2xl p-6 rubik text-zinc-300">
          <p>
            Hi, I'm Ankit S Gupta, a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in creating dynamic and responsive web applications, focusing on delivering seamless user experiences and robust functionality. Whether building from scratch or optimizing existing projects, I thrive on solving complex problems and continuously learning new technologies to stay ahead in the ever-evolving web development landscape
          </p>
        </div>
        <div className='md:p-8 p-6 text-white w-full h-[400vh]'>
          <h1 className='jet text-3xl'>My Skills</h1>
          <div className="flex flex-wrap gap-8 mt-5"></div>
        </div>
      </div>
    </>
  )
}

export default Mainpage
