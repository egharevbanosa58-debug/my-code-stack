"use client";

import Logo from "./Logo";
import { motion } from "framer-motion";
import SMediaIcons from "./SMediaIcons";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineX } from "react-icons/ai";
export default function Footer() {
    const MotionSMediaIcons = motion(SMediaIcons);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const items = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <div className="border-t border-slate-500 md:px-64 md:py-16 p-5">
            <div className="flex justify-between items-center">
                <Logo/>

                <motion.div
                    key="SMediaIcons"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-row gap-2 justify-center items-center scale-75"
                >
                    <MotionSMediaIcons
                        variants={items}
                        text={<AiOutlineGithub className="w-6 h-6" />}
                        darkText="dark:text-slate-500"
                        lightText="text-slate-600"
                        lightBgColor="bg-white"
                        darkBgColor="dark:bg-slate-900"
                        url="https://www.github.com/egharevbanosa58-debug"
                    />

                    <MotionSMediaIcons
                        variants={items}
                        text={<AiOutlineX className="w-6 h-6" />}
                        darkText="dark:text-slate-500"
                        lightText="text-slate-600"
                        lightBgColor="bg-white"
                        darkBgColor="dark:bg-slate-900"
                        url="https://www.x.com"
                    />

                    <MotionSMediaIcons
                        variants={items}
                        text={<AiOutlineInstagram className="w-6 h-6" />}
                        darkText="dark:text-slate-500"
                        lightText="text-slate-600"
                        lightBgColor="bg-white"
                        darkBgColor="dark:bg-slate-900"
                        url="https://www.instagram.com/mcke_ys"
                    />

                    <MotionSMediaIcons
                        variants={items}
                        text={<AiOutlineWhatsApp className="w-6 h-6" />}
                        darkText="dark:text-slate-500 border dark:border-slate-500/40"
                        lightText="text-slate-600"
                        lightBgColor="bg-white"
                        darkBgColor="dark:bg-slate-900"
                        url="https://wa.me/2348108472920"
                    />
                </motion.div>
            </div>
            <div className="flex w-full justify-between p-8">
                <span className="flex flex-col gap-1">
                    <h3 className="dark:text-slate-400 text-slate-600 font-semibold">QUICK LINKS</h3>
                    <a href="#first" className="dark:text-slate-400 text-slate-600 hover:underline">Home</a>
                    <a href="#skills" className="dark:text-slate-400 text-slate-600 hover:underline">Skills</a>
                    <a href="#project" className="dark:text-slate-400 text-slate-600 hover:underline">Projects</a>
                    <a href="#about" className="dark:text-slate-400 text-slate-600 hover:underline">About</a>
                    <a href="#contact" className="dark:text-slate-400 text-slate-600 hover:underline">Contact</a>
                </span>

                
                <a href="https://www.github.com/egharevbanosa58-debug" className="hidden md:block dark:text-slate-400 text-slate-600 underline">egharevbanosa58-debug</a>
            </div>

            <a href="https://www.github.com/egharevbanosa58-debug" className="block md:hidden text-center dark:text-slate-400 text-slate-600 underline">GitHub: egharevbanosa58-debug</a>
            <p className="dark:text-slate-400 text-slate-600 text-center">&copy; 2026 All Rights Reserved</p>
            <p className="dark:text-slate-400 text-slate-600 text-center">Made by NOSA&trade;</p>
        </div>
    );
}