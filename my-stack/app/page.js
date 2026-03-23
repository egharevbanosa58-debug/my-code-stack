"use client"

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { motion } from "framer-motion";
import HeroBtn from "./components/HeroBtn";
import { AiFillTrophy, AiOutlineBranches, AiOutlineCloud, AiOutlineDatabase, AiOutlineDownload, AiOutlineEnvironment, AiOutlineFormatPainter, AiOutlineGithub, AiOutlineGitlab, AiOutlineGlobal, AiOutlineHtml5, AiOutlineInstagram, AiOutlineMail, AiOutlineMobile, AiOutlineOpenAI, AiOutlinePhone, AiOutlineX, AiOutlineYoutube } from "react-icons/ai";
import SMediaIcons from "./components/SMediaIcons";
import SkillCard from "./components/SkillCard";
import { FiArrowUpRight, FiCoffee, FiUser } from "react-icons/fi";
import { FaBolt } from "react-icons/fa";
import ContactDiv from "./components/ContactDiv";


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
              className="grid gap-8 md:gap-4 grid-cols-2 md:grid-cols-4 md:mx-20 justify-between px-6 md:px-40 lg:px-64 pb-42"
            >
              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold">5+</h3>
                <p className='dark:text-slate-400 text-slate-600'>Months Experience</p>
              </motion.span>

              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold">10+</h3>
                <p className='dark:text-slate-400 text-slate-600'>Projects Completed</p>
              </motion.span>

              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold">10+</h3>
                <p className='dark:text-slate-400 text-slate-600'>Happy Clients</p>
              </motion.span>

              <motion.span variants={items} className="flex flex-col justify-center items-center">
                <h3 className="bg-linear-120 from-purple-500 to-pink-500 bg-clip-text text-transparent text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold">99%</h3>
                <p className='dark:text-slate-400 text-slate-600'>Client Satisfaction</p>
              </motion.span>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="project" className="z-20 h-fit bg-slate-50 dark:bg-neutral-900/40 pb-25 md:pb-32">
            <div className="line2 w-full h-0.5" />

            <div className="text-white py-24 px-6 md:px-20 lg:px-50">
              <div className="mx-auto mt-32 flex md:py-2.5 py-1.5 w-fit md:px-5 px-3.5 justify-center items-center gap-2 border dark:bg-slate-900/70 bg-white border-slate-400/20 rounded-r-full rounded-l-full">
                <p className="dark:text-purple-500 text-purple-500">Portfolio</p>
              </div>

              <div className="justify-center items-center p-2 flex flex-col gap-3">
                <p className="font-semibold text-center text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-10 md:leading-20  text-black dark:text-white">Featured<span className="inline-flex bg-linear-120 from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer p-2">Projects</span></p>

                <p className="dark:text-slate-400 text-slate-600 text-[1rem] md:text-[1.5rem] text-center">
                  A selection of projects that showcase my passion for creating impactful digital solutions
                </p>
              </div>
            </div>

            {/* The Project Card Section */}
            <div className="grid gap-x-5 gap-y-7 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-6 md:px-32 lg:px-64">
              {/* NewsLite News Aggrergator */}
              <div className="lg:w-170 m-auto flex flex-col gap-4 rounded-4xl pb-6 border-slate-400/20 bg-white dark:bg-neutral-900/80 border">
                <div>
                  <img src="/codes_Capture.png" alt="NewsLite Logo" aria-label="The Blue and white NewsLite Logo" className="fade rounded-4xl w-full object-cover" />
                </div>

                <div className="px-4">
                  <h2 className="flex items-center justify-between font-semibold text-2xl">NewsLite News Aggregator <span className="dark:text-slate-400 text-slate-600 w-12 h-12"><FiArrowUpRight /></span></h2>
                  <p className="dark:text-slate-400 text-slate-600 text-lg">Your go-to app for the latest news updates.</p>
                </div>

                <div className="px-4 flex gap-3 flex-wrap">
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">React</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">Next.js</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">JavaScript</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">TailwindCSS</span>
                </div>
              </div>

              {/* Task Tracker Web Application */}
              <div className="w-full lg:w-170 m-auto flex flex-col gap-4 rounded-4xl pb-6 border-slate-400/20 bg-white dark:bg-neutral-900/80 border">
                <div>
                  <img src="/TaskManagerLogo.png" alt="Task Manager Picture" aria-label="A Little file logo indicating that task manager" className="fade rounded-4xl w-full object-cover" />
                </div>

                <div className="px-4">
                  <h2 className="flex items-center justify-between font-semibold text-2xl">Task Tracker<span className="dark:text-slate-400 text-slate-600 w-12 h-12"><FiArrowUpRight /></span></h2>
                  <p className="dark:text-slate-400 text-slate-600 text-lg flex-wrap">A digital tool designed to help individuals organize, </p>
                </div>

                <div className="px-4 flex gap-3 flex-wrap">
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">React</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">Next.js</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">JavaScript</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">TailwindCSS</span>
                </div>
              </div>

              {/* A Random PLaceholder */}
              <div className="w-full lg:w-170 m-auto flex flex-col gap-4 rounded-4xl pb-6 border-slate-400/20 bg-white dark:bg-neutral-900/80 border">
                <div>
                  <img src="/TaskManagerLogo.png" alt="Task Manager Picture" aria-label="A Little file logo indicating that task manager" className="fade rounded-4xl w-full object-cover" />
                </div>

                <div className="px-4">
                  <h2 className="flex items-center justify-between font-semibold text-2xl">Task Tracker<span className="dark:text-slate-400 text-slate-600 w-12 h-12"><FiArrowUpRight /></span></h2>
                  <p className="dark:text-slate-400 text-slate-600 text-lg flex-wrap">A digital tool designed to help individuals organize</p>
                </div>

                <div className="px-4 flex gap-3 flex-wrap">
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">React</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">Next.js</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">JavaScript</span>
                  <span className="py-1 px-3 dark:bg-[#162232] bg-[#ebecf0e1] dark:text-slate-400 text-slate-600 rounded-full">TailwindCSS</span>
                </div>
              </div>
            </div>
            {/* End of project Card Section */}

          </section>

          {/* About me Section */}
          <section id="about" className="z-20 h-fit bg-slate-50 dark:bg-neutral-900/40 pb-32">
            <div className="line2 w-full h-0.5" />

            <div className="flex flex-col lg:flex-row my-10 px-10 md:px-32 lg:px-64 gap-20 items-center">

              {/* The Image of Nosa */}
              <div className="w-full flex flex-col flex-1 relative">
                <img src="/Nosa.jpg" alt="A portrait of Nosa" className="rounded-2xl" />
                <div className="px-4 py-2 rounded-2xl w-fit absolute -bottom-5 -right-4 dark:bg-[#162232] bg-[#ebecf0e1] border border-slate-400/20">
                  <span className="inline-flex font-semibold bg-linear-120 from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer p-2">Open to Work</span></div>
              </div>

              {/* The About Me texts */}
              <div className="text-white flex-1 flex flex-col gap-5">
                <div className="mt-12 md:mt-32 flex md:py-2.5 py-1.5 w-fit md:px-5 px-3.5 items-center gap-4 border dark:bg-slate-900/70 bg-white border-slate-400/20 rounded-r-full rounded-l-full">
                  <p className="dark:text-pink-500 text-pink-500">About Me</p>
                </div>

                <div className="items-center p-2 flex flex-col gap-3">
                  <p className="font-semibold text-[2.7rem] md:text-[3.5rem] lg:text-[4rem] leading-10 md:leading-20 text-black dark:text-white">Crafting Digital &amp;<span className="inline-flex bg-linear-120 from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer p-2">Experiences</span></p>

                  <p className="dark:text-slate-400 text-slate-600 text-[1rem] md:text-[1.5rem]">
                    I'm a passionate full-stack developer with over 5 years of experience building exceptional digital products. My journey began with a curiosity for how things work on the web, and it has evolved into a career dedicated to creating impactful user experiences.

                    I specialize in React, TypeScript, and modern web technologies, but my true strength lies in understanding user needs and translating them into elegant, performant solutions. Every project is an opportunity to push boundaries and deliver something extraordinary.

                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>

                {/* The Little badge-like things in the about me section */}
                <div className="flex gap-x-5">
                  <div>
                    <div className="flex flex-col justify-center items-center p-2 md:p-4 lg:p-6 rounded-2xl border-2 border-slate-400/20 bg-white dark:bg-neutral-900/80">
                      <span className='flex md:h-16 md:w-16 h-12 w-12 rounded-xl items-center justify-center text-center text-2xl md:text-4xl'>
                        <AiFillTrophy className="text-cyan-500"/>
                      </span>
                      <h2 className='text-2xl font-bold text-black dark:text-white text-center'>12+</h2>
                      <p className='dark:text-slate-400 text-slate-600 text-center'>Award-winning designs</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col justify-center items-center p-2 md:p-4 lg:p-6 rounded-2xl border-2 border-slate-400/20 bg-white dark:bg-neutral-900/80">
                      <span className='flex md:h-16 md:w-16 h-12 w-12 rounded-xl items-center justify-center text-center text-2xl md:text-4xl'>
                        <FaBolt className="text-cyan-500"/>
                      </span>
                      <h2 className='text-2xl font-bold text-black dark:text-white text-center'>30K+</h2>
                      <p className='dark:text-slate-400 text-slate-600 text-center'>Lines of Code</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col justify-center items-center p-2 md:p-4 lg:p-6 rounded-2xl border-2 border-slate-400/20 bg-white dark:bg-neutral-900/80">
                      <span className='flex md:h-16 md:w-16 h-12 w-12 rounded-xl items-center justify-center text-center text-2xl md:text-4xl'>
                        <FiCoffee className="text-cyan-500"/>
                      </span>
                      <h2 className='text-2xl font-bold text-black dark:text-white text-center'>300+</h2>
                      <p className='dark:text-slate-400 text-slate-600 text-center'>Cups of Digital Coffee</p>
                    </div>
                  </div>
                </div>

                {/* The Download Resume button */}
                <div>
                  <button className="text-white dark:text-black text-xl font-semibold bg-linear-140 from-sky-400 to-purple-500 dark:shadow-[0_0_20px_#00e1ff4d] w-full md:max-w-64 rounded-r-full rounded-l-full border border-slate-400/20 px-4 py-3 cursor-pointer flex items-center gap-2 mt-5 justify-center">
                  <AiOutlineDownload className="h-6 w-6 font-bold"/>
                    Download Résume
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* The Contact me Section */}
          <section id="contact" className="z-20 h-fit bg-slate-50 dark:bg-neutral-900/40 pb-32">
          <div className="line2 w-full h-0.5" />

          <div className="text-white py-24 px-6 md:px-20 lg:px-50">
              <div className="mx-auto mt-32 flex md:py-2.5 py-1.5 w-fit md:px-5 px-3.5 justify-center items-center gap-2 border dark:bg-slate-900/70 bg-white border-slate-400/20 rounded-r-full rounded-l-full">
                <p className="dark:text-cyan-500 text-cyan-500">Get In Touch</p>
              </div>

              <div className="justify-center items-center p-2 flex flex-col gap-3">
                <p className="font-semibold text-center text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-10 md:leading-20  text-black dark:text-white">Let's<span className="inline-flex bg-linear-120 from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer p-2">Collaborate</span></p>

                <p className="dark:text-slate-400 text-slate-600 text-[1rem] md:text-[1.5rem] text-center">
                  Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Contact Info */}
              <div>
                <h2>Contact Information</h2>
                <p>Feel free to reach out through any of these channels. I typically respond within 24 hours and am always excited to discuss new opportunities.</p>

                <div>
                  <ContactDiv 
                    icon={<AiOutlineMail />}
                    type="Email"
                    typetext="egharevbanosa58@gmail.com"
                  />
                  <ContactDiv 
                    icon={<AiOutlineEnvironment />}
                    type="Location"
                    typetext="Rivers State, Nigeria"
                  />
                  <ContactDiv 
                    icon={<AiOutlinePhone />}
                    type="Phone"
                    typetext="+234 (0) 810 847 2920"
                  />
                </div>
              </div>

              {/* GIT Form */}
              <div></div>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
}
