"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { LinkedinIcon } from "./ui/linkedin";
import { TwitterIcon } from "./ui/twitter";
import { GithubIcon } from "./ui/github";
import { LinkPreview } from "./ui/link-preview";

const Navbar = () => {
    return (
        <div className="h-[10vh] w-full rounded-xl flex items-center text-yellow-50  bg-zinc-950 border-2 border-zinc-900 z-10">
            <div className="w-[60%] flex items-center justify-start gap-5">
                <span className="ml-2">
                    <Image
                        className="rounded-xl"
                        src="/dp.png"
                        width={70} // Adjust width as needed
                        height={70} // Adjust height as needed
                        alt="Profile"
                    />
                </span>
                <div>
                    <h1 className="sm:text-xl lg:text-3xl ubuntu">Ankit Gupta</h1>
                    <p className="jet ml-0 text-[9px] md:text-sm text-zinc-400 jet">
                        Full Stack developer
                    </p>
                </div>
            </div>
            <div className="w-[40%] flex items-center justify-end gap-2 md:gap-1 px-2">
                <div className="hidden md:inline">
                    <a href="https://x.com/0xanki7" target="_blank"><TwitterIcon /></a>
                </div>
                <div className="flex md:gap-1 gap-1">
                    <a href="https://www.linkedin.com/in/ankit-gupta-3067302b4/" target="_blank"><LinkedinIcon className="bg-zinc-950" /></a>
                    <LinkPreview url={`https://github.com/Ankit-xyz1`} className="text-white" >
                        <a href="https://github.com/Ankit-xyz1" target="_blank"><GithubIcon /></a>
                    </LinkPreview>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
