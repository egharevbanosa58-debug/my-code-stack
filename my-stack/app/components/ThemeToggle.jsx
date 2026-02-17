import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);

    // Destructuring the useTheme() prop
    const { theme, setTheme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";


    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <>
            <motion.button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2.5 text-lg dark:text-sky-400 rounded-full border text-pink-500 bg-white dark:bg-transparent border-sky-400/50 focus:shadow-sky-400 shadow-[0_0_20px_#00e1ff4d] transition-colors duration-300 cursor-pointer"
                initial={{ rotate:-90, opacity:0 }}
                animate={{ rotate:0, opacity:1 }}
                exit={{ rotate:90, opacity:0 }}
                transition={{ duration:0.3 }}
                key={resolvedTheme}
            >
                {isDark ? <FiMoon /> : <FiSun />}
            </motion.button>
        </>
    );
}