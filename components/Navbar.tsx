"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

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
            <div className="w-[40%] flex items-center justify-end gap-2 md:gap-4 px-2">
                <div className="hidden md:inline"><Twitter className="cursor-pointer" /></div>
                <div className="flex md:gap-4 gap-2"><Linkedin className="cursor-pointer" /><Github className="cursor-pointer" /></div>
            </div>
        </div>
    );
};

export default Navbar;
