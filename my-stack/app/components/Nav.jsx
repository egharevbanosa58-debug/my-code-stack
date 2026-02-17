import { motion } from "framer-motion";
import { FiMenu, FiMoon } from "react-icons/fi";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import HeroBtn from "./HeroBtn";

export default function Nav() {
    return (
        <>
            <motion.nav
                className="flex justify-between items-center mb-auto px-6 py-4"
                initial={{ translateY: -50 }}
                animate={{ translateY: 0 }}
                transition={{
                    delay: 1,
                    ease: "easeIn",
                }}
            >
                {/* Logo */}
                <Logo />

                <div className="flex items-center gap-4">
                    <div>
                        {/* The theme toggle button */}
                        <ThemeToggle />
                    </div>

                    <div>
                        <HeroBtn
                            text="Hire me"
                            width="max-w-64"
                            darkText="dark:text-black text-xl font-semibold hidden md:flex"
                            lightText="text-white text-xl"
                            bgGradient="bg-linear-140 from-sky-400 to-purple-500 dark:shadow-[0_0_20px_#00e1ff4d]"
                        />
                    </div>

                    <div className="">
                        {/* The hamburger icon */}

                        <FiMenu className="text-xl md:hidden" />
                    </div>
                </div>
            </motion.nav>
        </>
    );
}