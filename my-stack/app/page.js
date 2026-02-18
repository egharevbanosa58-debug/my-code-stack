"use client"

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import HeroBtn from "./components/HeroBtn";
import { AiOutlineBranches, AiOutlineCloud, AiOutlineDatabase, AiOutlineFormatPainter, AiOutlineGithub, AiOutlineGitlab, AiOutlineGlobal, AiOutlineHtml5, AiOutlineInstagram, AiOutlineMobile, AiOutlineOpenAI, AiOutlineX, AiOutlineYoutube } from "react-icons/ai";
import SMediaIcons from "./components/SMediaIcons";
import SkillCard from "./components/SkillCard";


export default function Page() {
  const [mounted, setMounted] = useState(false);

  const MotionSMediaIcons = motion(SMediaIcons);
  const MotionSkillCard = motion(SkillCard);


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

  useEffect(() => setMounted(true), [])

  if (!mounted) return null //Wait until client mounts
  return (
    <>
      <motion.div
        className="relative overflow-hidden"
      >
        <Nav />

        <main>
          <section>
            <div>
              <motion.div animate={{ x: -200 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", }} viewport={{ once: true }} className="-z-1 absolute dark:top-40 top-50 right-5 h-80 w-80 bg-sky-500/30 rounded-full shadow-lg blur-3xl m-auto"></motion.div>

              <motion.div animate={{ x: 400, y: 200 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", }} className="-z-1 absolute dark:top-64 top-64 h-70 w-64 bg-purple-500/40 rounded-full shadow-lg blur-3xl m-auto"></motion.div>

              <motion.div animate={{ x: -500, y: -600 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", }} className="-z-1 absolute dark:top-90 top-80 right-10 h-64 w-64 md:w-80 lg:h-80 bg-pink-500/30 rounded-full shadow-lg blur-3xl m-auto"></motion.div>

              <motion.div animate={{ x: -600, y: 400 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", }} className="-z-1 absolute dark:top-96 top-80 right-0 h-96 w-96 bg-blue-500/30 rounded-full shadow-lg blur-3xl m-auto"></motion.div>

              <div className="flex flex-col gap-8 px-6 h-screen">
                <div className="mx-auto mt-32 flex py-1.5 w-fit px-4 justify-center items-center gap-2 border dark:bg-slate-900/70 bg-white border-slate-400/20 rounded-r-full rounded-l-full">
                  <span className="inline p-1 animate-ping rounded-full bg-cyan-500"></span>
                  <p className="dark:text-slate-400 text-slate-500">Available for freelance work</p>
                </div>

                <div className="justify-center items-center p-2">
                  <p className="font-semibold text-center text-[3rem] md:text-[4rem] leading-10 md:leading-20 lg:text-[6rem]">Hi, I'm <span className="inline-flex bg-linear-120 from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer p-2">Egharevba Nosa</span></p>
                </div>

                <div>
                  <p className="dark:text-slate-400 text-slate-600 text-[1.2rem] md:text-[1.5rem] text-center">
                    A <span className="text-[#00e1ff]">Full-Stack Developer</span> crafting beautiful, performant digital
                  </p>
                  <p className="dark:text-slate-400 text-slate-600 text-[1.2rem] md:text-[1.5rem] text-center">
                    experiences that push boundaries
                  </p>
                </div>

                <div className="mx-auto flex flex-col justify-center px-22 gap-6">
                  <HeroBtn
                    text="View My Work"
                    width="max-w-64"
                    darkText="dark:text-black text-xl font-semibold"
                    lightText="text-white text-xl"
                    bgGradient="bg-linear-140 from-sky-400 to-purple-500 dark:shadow-[0_0_20px_#00e1ff4d]"
                  />

                  <HeroBtn
                    text="Get in Touch"
                    width="max-w-62"
                    darkText="dark:text-white text-xl font-semibold"
                    lightText="text-black text-xl"
                    darkBgColor="dark:bg-slate-900 dark:border-slate-700"
                    lightBgColor="bg-white border border-stone-300"
                  />

                  <motion.div
                    key="SMediaIcons"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-row gap-3 justify-center items-center"
                  >
                    <MotionSMediaIcons
                      variants={items}
                      text={<AiOutlineGithub className="w-6 h-6" />}
                      darkText="dark:text-slate-500"
                      lightText="text-slate-600"
                      lightBgColor="bg-white"
                      darkBgColor="dark:bg-slate-900"
                    />

                    <MotionSMediaIcons
                      variants={items}
                      text={<AiOutlineX className="w-6 h-6" />}
                      darkText="dark:text-slate-500"
                      lightText="text-slate-600"
                      lightBgColor="bg-white"
                      darkBgColor="dark:bg-slate-900"
                    />

                    <MotionSMediaIcons
                      variants={items}
                      text={<AiOutlineInstagram className="w-6 h-6" />}
                      darkText="dark:text-slate-500"
                      lightText="text-slate-600"
                      lightBgColor="bg-white"
                      darkBgColor="dark:bg-slate-900"
                    />

                    <MotionSMediaIcons
                      variants={items}
                      text={<AiOutlineYoutube className="w-6 h-6" />}
                      darkText="dark:text-slate-500 border dark:border-slate-500/40"
                      lightText="text-slate-600"
                      lightBgColor="bg-white"
                      darkBgColor="dark:bg-slate-900"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>



          {/* Skills Section  */}
          <section id="skills" className="z-20 h-fit bg-slate-50 dark:bg-neutral-900/40">
            <div className="line w-full h-0.5" />

            <div className="text-white py-24 px-6 md:px-20 lg:px-50">
              <div className="mx-auto mt-32 flex md:py-2.5 py-1.5 w-fit md:px-5 px-3.5 justify-center items-center gap-2 border dark:bg-slate-900/70 bg-white border-slate-400/20 rounded-r-full rounded-l-full">
                <p className="dark:text-cyan-500 text-cyan-500">Expertise</p>
              </div>

              <div className="justify-center items-center p-2 flex flex-col gap-3">
                <p className="font-semibold text-center text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-10 md:leading-20  text-black dark:text-white">Skills &amp;<span className="inline-flex bg-linear-120 from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer p-2">Technologies</span></p>

                <p className="dark:text-slate-400 text-slate-600 text-[1rem] md:text-[1.5rem] text-center">
                  A versatile toolkit built over years of crafting digital experiences
                </p>
              </div>
            </div>

            {/* The skill cards section  */}
            <motion.div
              key="SkillCard"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-x-5 gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-32 lg:px-64 mb-20 md:mb-25">

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineHtml5 className="text-cyan-500" />}
                heading="Frontend Development"
                skills="HTML5, CSS3, React, Next.js, with pixel-perfect precision"
              />

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineDatabase className="text-pink-500" />}
                heading="Backend Development"
                skills="Django, Django REST Framework, Python, PostgreSQL, REST APIs"
              />

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineFormatPainter className="text-cyan-500" />}
                heading="UI/UX Design"
                skills="Figma, Framer, motion design, design systems"
              />

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineGlobal className="text-purple-500" />}
                heading="Web Performance"
                skills="Core Web Vitals, SEO optimization, accessibility"
              />

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineMobile className="text-pink-500" />}
                heading="Mobile Development"
                skills="React Native, responsive design"
              />

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineBranches className="text-cyan-500" />}
                heading="Version Control Systems"
                skills="Git, GitHub, collaboration workflows"
              />

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineCloud className="text-purple-500" />}
                heading="Cloud &amp; Dev Ops"
                skills="AWS, Vercel, infrastructure"
              />

              <MotionSkillCard
                variants={items}
                icon={<AiOutlineOpenAI className="text-cyan-500" />}
                heading="AI Intergration"
                skills="OpenAI, prompt engineering"
              />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex col-span-2 md:col-span-4 mx-20 justify-between px-6 md:px-32 lg:px-64"
            >
              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold">5+</h3>
                <p className='dark:text-slate-400 text-slate-600'>Months Experience</p>
              </motion.span>

              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold">10+</h3>
                <p className='dark:text-slate-400 text-slate-600'>Projects Completed</p>
              </motion.span>

              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold">10+</h3>
                <p className='dark:text-slate-400 text-slate-600'>Happy Clients</p>
              </motion.span>

              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold">99%</h3>
                <p className='dark:text-slate-400 text-slate-600'>Client Satisfaction</p>
              </motion.span>
            </motion.div>

          </section>
        </main>
      </motion.div>
    </>
  );
}
