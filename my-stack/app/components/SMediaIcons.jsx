"use client"

import { motion } from "framer-motion";
import { forwardRef } from "react";

const SMediaIcons = forwardRef((
    {
        text,
        darkText,
        lightText,
        darkBgColor,
        lightBgColor,
        url,

    }, ref
) => {

    return (
        <>
            <div
                ref={ref}
            >
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button
                        className={`${lightText} ${darkText} ${darkBgColor} ${lightBgColor} rounded-full border-2 dark:border-slate-400/30 border-slate-400/60 p-2 dark:hover:bg-slate-500 hover:bg-slate-600 hover:text-white dark:hover:text-slate-900 hover:-translate-y-3 transition-all duration-300`}
                    >
                        {text}
                    </button>
                </a>
            </div>
        </>
    );
});

export default motion(SMediaIcons);

// darkText="dark:text-slate-500"
// lightText="text-slate-600"
// lightBgColor="bg-white"
// darkBgColor="dark:bg-slate-900"