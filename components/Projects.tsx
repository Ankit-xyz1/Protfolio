"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { GithubIcon } from "./ui/github";
import { LinkIcon } from "./ui/link";
import { projectArray } from "@/lib/project";
import Image from "next/image";

const Projects = () => {
    interface projectstype {
        name: string;
        active: boolean;
        description: string;
        githubLink: string;
        LiveLink: string;
        techStack: string[]; // referencing SVG filenames from public folder
    }
    projectArray
    const [projectList, setprojectList] = useState<projectstype[]>([])
    useEffect(() => {
        setprojectList(projectArray)
    }, [])


    return (
        <div className="flex gap-2  flex-col">
            {projectList.map((item: projectstype, index: number) => (
                <motion.div key={index} className="min-h-[20vh] max-h-fit w-full rounded-xl flex flex-col text-yellow-50  bg-zinc-950 border-2 border-zinc-900  p-1"
                    initial={{ opacity: 0, x: -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}>
                    <div className="heading  w-full h-fit p-2 flex justify-between">
                        <p className="text-xl md:text-2xl jet text-white">
                            <LinkPreview url={item.LiveLink} className="text-white" >
                                {item.name}
                            </LinkPreview>
                        </p>
                        <div className={`${item.active ? 'bg-green-500 ' : 'bg-red-500 '}animate-pulse w-[7px] h-[7px] rounded-2xl`}></div>
                    </div>
                    <div className="description  w-full h-fit p-2">
                        <p className="text-sm md:text-lg text-zinc-500">{item.description}</p>
                    </div>
                    <div className="links flex w-full items-start gap-2">
                        <div className="h-fit w-full flex">
                            <div className="w-[50%] flex gap-1">
                                <a href={item.githubLink} target="_blank"><GithubIcon className="" size={25} /></a>
                                <a href={item.LiveLink} target="_blank"><LinkIcon className="" size={25} /></a>
                            </div>
                            <div className="tech-stack w-[50%] h-full items-center justify-end flex gap-1 p-1">
                                {item.techStack?.map((tech, index) => (
                                    <Image key={index} alt="techStack" src={tech} width={20} height={20}></Image>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

        </div>
    )
}

export default Projects