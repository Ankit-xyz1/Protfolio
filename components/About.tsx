import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SquarePenIcon } from './ui/square-pen'
import { AtSignIcon } from './ui/at-sign'

const About = () => {

  return (

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className='intro text-sm md:text-xl p-3'>
        <span className='text-yellow-50'>Hi, <span className='font-semibold'>I'm Ankit S Gupta</span>, a passionate Full Stack Developer from Mumbai,</span><span className='text-zinc-400'> currently pursuing my studies at Nagindas Khandwala College (NKC). At just 20 years old, I've built a strong foundation in web development and consistently maintained a 9.0 CGPA throughout my academics.</span>
        <span className='text-zinc-400'>
          I specialize in building scalable and responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js)</span>
      </div>
      <div className='w-full h-fit flex flex-col justify-start text-white'>
        <div className='w-fit flex gap-0 items-center '><AtSignIcon /> 0xanki7@gmail.com</div>
        <div className='w-fit flex gap-0 items-center'><SquarePenIcon />My Blog <span className='text-xs ml-2 text-zinc-500'>not yet posted</span></div>
      </div>
    </motion.div>
  )
}

export default About