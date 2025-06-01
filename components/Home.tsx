import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect'
import { experience } from '@/lib/project'

const Home = () => {
  return (
    <motion.div className='w-full h-fit'
      initial={{
        opacity: 0,
        scale: 0.98,
        filter: 'blur(10px)'
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)'
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}>
      <div className="tagLine text-lg md:text-2xl jet text-zinc-300"><span className='font-semibold text-zinc-100'>I’m Ankit</span> — a
        <span className='font-semibold text-zinc-100'> Full-Stack Dev</span>  from Mumbai who loves crafting smooth, end-to-end digital experiences.
      </div>
      <div className="para text-sm md:text-xl mt-5">
        <div className="heading jet mb-5 text-white">Experience-</div>
        <div className="min-h-[10vh] h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-4 flex items-center text-white jet overflow-x-auto space-x-6">
          {experience.map((item, index) => (
            <div key={index} className="min-w-max px-4 py-2 border border-zinc-800 rounded-lg bg-zinc-800 shadow-md">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-zinc-300">{item.role}</p>
              <p className="text-xs text-zinc-400">
                {item.startDate} - {item.endDate} ({item.Durration})
              </p>
              <a
                href={`https://${item.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>

      </div>
      <div className="para text-sm md:text-xl mt-5 flex gap-2 flex-col" >
        <div className="heading jet mb-5 text-white">Skills</div>
        <div className='h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-3 flex gap-2 flex-col md:flex-row text-white'>
          <div className=' border-2 w-fit flex items-center justify-center border-zinc-800  bg-zinc-950 p-2 rounded jet'>Frontend</div>
          <motion.div className="techs flex gap-2 items-center flex-wrap"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <Image alt='html' width={30} height={20} src={'html5.svg'}></Image>
            <Image alt='css' width={30} height={20} src={'tailwindcss.svg'}></Image>
            <Image alt='js' width={30} height={20} src={'javascript.svg'}></Image>
            <Image alt='react' width={30} height={20} src={'react_dark.svg'}></Image>
            <Image alt='reactrouter' width={30} height={20} src={'reactrouter.svg'}></Image>
            <Image alt='redux' width={30} height={20} src={'redux.svg'}></Image>
            <Image alt='nextjs' width={30} height={20} src={'nextjs.svg'}></Image>
            <Image alt='shadcn' width={30} height={20} src={'shadcn.svg'}></Image>
            <Image alt='radix' width={30} height={20} src={'radix.svg'}></Image>
            <Image alt='TypeScript' width={30} height={20} src={'typescript.svg'}></Image>

          </motion.div>
        </div>
        <motion.div className='h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-3 flex gap-2 flex-col md:flex-row text-white'
        >
          <div className=' border-2 w-fit flex items-center justify-center border-zinc-800 bg-zinc-950 p-2 rounded jet'>Backend</div>
          <motion.div className="techs flex gap-2 items-center"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <Image alt='nodejs' width={30} height={20} src={'nodejs.svg'}></Image>
            <Image alt='expressJS' width={30} height={20} src={'expressjs_dark.svg'}></Image>
            <Image alt='jwt' width={30} height={20} src={'jwt.svg'}></Image>
            <Image alt='typeScript' width={30} height={20} src={'typescript.svg'}></Image>
          </motion.div>
        </motion.div>
        <div className='h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-3 flex gap-2 flex-col md:flex-row text-white'>
          <div className=' bg-zinc-950 p-2 border-2 w-fit flex items-center justify-center border-zinc-800 rounded jet'>Database</div>
          <motion.div className="techs flex gap-2 items-center"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <Image alt='pp' width={20} height={10} src={'mongodb.svg'}></Image>
            <Image alt='pp' width={30} height={20} src={'redis.svg'}></Image>
          </motion.div>
        </div>
        <div className='h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-3 flex gap-2 flex-col md:flex-row text-white'>
          <div className=' bg-zinc-950 p-2 border-2 w-fit border-zinc-800 rounded jet'>Tools</div>
          <motion.div className="techs flex gap-2 items-center flex-wrap"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <Image alt='git' width={23} height={20} src={'git.svg'}></Image>
            <Image alt='github' width={30} height={20} src={'github_dark.svg'}></Image>
            <Image alt='postman' width={30} height={20} src={'postman.svg'}></Image>
            <Image alt='docker' width={30} height={20} src={'docker.svg'}></Image>
            <Image alt='jest' width={30} height={20} src={'jest.svg'}></Image>
            <Image alt='railway' width={30} height={20} src={'railway_dark.svg'}></Image>
            <Image alt='vercel' width={30} height={20} src={'vercel.svg'}></Image>
            <Image alt='aws' width={30} height={20} src={'aws_dark.svg'}></Image>
            <Image alt='replit' width={30} height={20} src={'replit.svg'}></Image>
          </motion.div>
        </div>
        <div className='h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-3 flex gap-2 flex-col md:flex-row text-white'>
          <div className=' bg-zinc-950 p-2 border-2 w-fit flex items-center justify-center border-zinc-800 rounded jet'>Web3</div>
          <motion.div className="techs flex gap-2 items-center"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <Image alt='rust' width={20} height={10} src={'rust_dark.svg'}></Image>
            <Image alt='solidity' width={30} height={20} src={'solidity.svg'}></Image>
            <Image alt='sol' width={30} height={20} src={'sol.svg'}></Image>
            <Image alt='eth' width={30} height={20} src={'eth.svg'}></Image>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home