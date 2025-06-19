import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";
import { experience } from "@/lib/project";

const Home = () => {
  return (
    <motion.div
      className="w-full h-fit"
      initial={{
        opacity: 0,
        scale: 0.98,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="tagLine text-lg md:text-2xl jet text-zinc-300">
        <span className="font-semibold text-zinc-100">I’m Ankit</span> — a
        <span className="font-semibold text-zinc-100"> Software Dev</span>{" "}
        from Mumbai building complete applications from frontend to backend.
      </div>
      <div className="text-white md:text-lg text-sm">
        <br></br>
        Im currently pursuing my degree from Nagindas Khandwala College (NKC)
        and I’m 20 years old. With a strong foundation in both frontend and
        backend technologies, I love building complete, seamless digital
        products — from beautiful user interfaces to scalable backend systems.
        Always eager to learn, experiment, and take on new challenges — whether
        it’s modern web frameworks, cloud deployments, or emerging technologies
        like blockchain and AI. My ultimate goal is to craft reliable,
        efficient, and user-friendly software that delivers real value.
      </div>
      <div className="para text-sm md:text-xl mt-5">
        <div className="heading jet mb-5 text-white">Experience-</div>
        <div className="min-h-[10vh] h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-4 flex items-center text-white jet overflow-x-auto space-x-6">
          {experience.map((item, index) => (
            <div
              key={index}
              className="min-w-max px-4 py-2 border border-zinc-800 rounded-lg bg-zinc-800 shadow-md"
            >
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
      <div className="para text-sm md:text-xl mt-5 flex gap-2 flex-col">
        <div className="heading jet mb-5 text-white">Skills</div>
        <div className="h-fit bg-zinc-900 border-2 border-zinc-800 rounded p-3 flex gap-2 flex-col md:flex-row text-white">
          <motion.div
            className="techs-container p-4"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { alt: "TypeScript", src: "typescript.svg" },
                { alt: "JavaScript", src: "javascript.svg" },
                { alt: "Next.js", src: "nextjs.svg" },
                { alt: "ReactJS", src: "reactJS.svg" },
                { alt: "Node.js", src: "nodejs.svg" },
                { alt: "ExpressJS", src: "expressjs_dark.svg" },
                { alt: "MongoDB", src: "mongodb.svg" },
                { alt: "Redux", src: "redux.svg" },
                { alt: "CSS (Tailwind)", src: "tailwindcss.svg" },
                { alt: "HTML", src: "html5.svg" },
                { alt: "React Router", src: "reactrouter.svg" },
                { alt: "ShadCN", src: "shadcn.svg" },
                { alt: "Radix", src: "radix.svg" },
                { alt: "JWT", src: "jwt.svg" },
                { alt: "Redis", src: "redis.svg" },
                { alt: "Git", src: "git.svg" },
                { alt: "GitHub", src: "github_dark.svg" },
                { alt: "Postman", src: "postman.svg" },
                { alt: "Docker", src: "docker.svg" },
                { alt: "Jest", src: "jest.svg" },
                { alt: "Railway", src: "railway_dark.svg" },
                { alt: "Vercel", src: "vercel.svg" },
                { alt: "AWS", src: "aws_dark.svg" },
                { alt: "Replit", src: "replit.svg" },
                { alt: "Rust", src: "rust_dark.svg" },
                { alt: "Solana", src: "sol.svg" },
                { alt: "Ethereum", src: "eth.svg" },
              ].map((item, index) => (
                <div className="flex flex-col">
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center w-[80px] p-1 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all"
                  >
                    <motion.img
                      whileHover={{ scale: 1.4 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      alt={item.alt}
                      width={item.alt === "MongoDB" ? 25 : 40}
                      height={40}
                      src={item.src}
                    />
                  </motion.div>
                  <span className="text-xs mt-2 text-center">{item.alt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
