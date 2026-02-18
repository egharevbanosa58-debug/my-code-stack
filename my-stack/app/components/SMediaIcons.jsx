"use client"

import { motion } from "framer-motion";
import { forwardRef } from "react";

const SMediaIcons = forwardRef((
    {
        text,
        darkText,
        lightText,
        darkBgColor,
        lightBgColor

    }, ref
) => {

    return (
        <>
            <div
                ref={ref}
            >
                <button
                    className={`${lightText} ${darkText} ${darkBgColor} ${lightBgColor} rounded-full border-2 dark:border-slate-400/30 border-slate-400/60 p-2`}
                >
                    {text}
                </button>
            </div>
        </>
    );
});

export default motion(SMediaIcons);