"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function Btt() {
    const [ isScroll, setIsScroll ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has 120px up
            if (window.scrollY > 120) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return(
        <motion.button
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 100, opacity: 1 }}
            transition={{
                delay: 1,
                ease: "easeIn",
            }}
            className={`w-fit z-99 bottom-5 left-1/2 -translate-x-1/2 opacity-0  fixed text-white bg-cyan-500 flex gap-2 justify-center items-center rounded-l-full rounded-r-full px-3 py-2 transition-all duration-200 ${isScroll ? "opacity-1 -translate-y-30" : ""} `}
        >
             <FiArrowUp />
             Back to Top
        </motion.button>
    );
}