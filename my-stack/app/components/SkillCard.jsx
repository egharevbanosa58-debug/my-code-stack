import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

const SkillCard = forwardRef((
    {
        // parameters
        icon,
        heading,
        skills,
    }, ref
) => {

    return (
        <div ref={ref}>
            <div className={`flex flex-col gap-4 justify-center p-6 md:p-6 lg:p-8 rounded-2xl border-2 border-slate-400/20 bg-white dark:bg-neutral-900/80`}>

                <span className='flex md:h-16 md:w-16 h-12 w-12 dark:bg-[#162232] bg-[#ebecf0e1] rounded-xl items-center justify-center text-center text-3xl md:text-4xl'>
                    {icon}
                </span>

                <h2 className='text-2xl font-bold text-black dark:text-white'>{heading}</h2>

                <p className='dark:text-slate-400 text-slate-600'>{skills}</p>
            </div>
        </div>
    )

});

export default motion(SkillCard);
