"use client"

import { motion } from "framer-motion";
import { FiMenu, FiMoon, FiX } from "react-icons/fi";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import HeroBtn from "./HeroBtn";
import { useEffect, useState } from "react";

export default function Nav() {
    const [isScroll, setIsScroll] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user scrolled 50px up
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);


    }, [])

    return (
        <>
            <motion.nav
                className={`flex z-99 ${isScroll ? "bg-slate-50 dark:bg-neutral-900/10 backdrop-blur-2xl border-b border-b-slate-400/20" : ""} justify-between items-center mb-auto px-6 py-4 w-full fixed top-0 left-0`}
                initial={{ translateY: -50 }}
                animate={{ translateY: 0 }}
                transition={{
                    delay: 1,
                    ease: "easeIn",
                }}
            >
                {/* Logo */}
                <a href="#first">
                    <Logo />
                </a>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-4 text-lg dark:text-slate-400 text-slate-600">
                        {/* The Large screen navigation */}
                        <a href="#first" className="hover:text-xl transition-all duration-400">Home</a>
                        <a href="#skills" className="hover:text-xl transition-all duration-400">Skills</a>
                        <a href="#project" className="hover:text-xl transition-all duration-400">Projects</a>
                        <a href="#about" className="hover:text-xl transition-all duration-400">About</a>
                        <a href="#contact" className="hover:text-xl transition-all duration-400">Contact</a>
                    </div>

                    <div>
                        {/* The theme toggle button */}
                        <ThemeToggle />
                    </div>

                    <div>
                        {/* Lets change the style of the button to go transparent with a rotating gradient border like google AI */}
                        <a href="#contact">
                            <HeroBtn
                                text="Hire me"
                                width="max-w-64"
                                darkText="dark:text-black text-xl font-semibold hidden md:flex"
                                lightText="text-white text-xl"
                                bgGradient="bg-linear-140 from-sky-400 to-purple-500 dark:shadow-[0_0_20px_#00e1ff4d]"
                                extra="hover:shadow-[0_0_40px_#00e1ff4d] transition-all duration-300"
                            />
                        </a>
                    </div>

                    <div className="relative">
                        {/* The hamburger icon */}

                        {isOpen ? <button onClick={() => setIsOpen(!isOpen)}><FiX className="text-xl md:hidden" /></button> : <button onClick={() => setIsOpen(!isOpen)}><FiMenu className="text-xl md:hidden" /></button>}

                        <div className={`${isOpen ? "flex z-100" : "hidden"} flex flex-col gap-5 absolute p-5 -translate-x-60 translate-y-5 rounded-xl border-2 border-slate-400/20 bg-white dark:bg-neutral-900/80 w-64`}>
                            <a href="#first" className="">Home</a>
                            <a href="#skills" className="">Skills</a>
                            <a href="#project" className="">Projects</a>
                            <a href="#about" className="">About</a>
                            <a href="#contact" className="">Contact</a>
                        </div>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}