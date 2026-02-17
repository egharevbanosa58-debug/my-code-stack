"use client"
import { motion } from "framer-motion";

export default function Logo() {
    return (
        <>
            <motion.div
                className="inline-flex font-semibold text-2xl bg-linear-120 from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
                initial = {{ scale : 1 }}
                whileHover = {{ scale : 1.05 }}
                whileTap={{ scale : 1.02 }}
            >
                Dev.stack
            </motion.div>
        </>
    );
}