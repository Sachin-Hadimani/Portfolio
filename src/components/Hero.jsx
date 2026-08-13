import MyProfilePic from '../assets/MyProfilePic.jpg';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5, // Corrected typo here
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function Hero() {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex justify-center p-4 sm:p-6 lg:p-8"
                    >
                        <div className="relative">
                            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-stone-500/20 via-stone-700/10 to-transparent blur-2xl" />
                            <motion.img
                                src={MyProfilePic}
                                width={450}
                                height={450}
                                alt="Profile Pic"
                                className="relative h-auto w-full max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-[450px] rounded-[2rem] border border-stone-700/70 shadow-[0_25px_65px_rgba(0,0,0,0.55)] saturate-[0.9] contrast-[0.95] brightness-[0.94]"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/35 via-transparent to-stone-950/10" />
                        </div>

                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        className="flex flex-col items-center lg:items-start mt-6 sm:mt-10 text-center lg:text-left"
                        variants={childVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p className="mt-4 text-sm sm:text-base leading-relaxed">
                            I am a Full-Stack Developer with experience across both ends of the stack. At EG, I currently focus on frontend engineering — building enterprise web applications with React, TypeScript, and Redux Toolkit (RTK Query), helping migrate a large monorepo from Preact to React toward a Micro Frontend architecture, and contributing to product features such as real-time alarms and automated report generation. Previously at VIS Networks, I worked on the backend with Java, Spring Boot, and Spring Security — designing REST APIs and authentication alongside React-based interfaces. I care about writing clean, scalable code and delivering reliable user experiences.
                        </motion.p>
                        <motion.a
                            href="/Sachin_Resume.pdf"
                            target="_blank"
                            download="Sachin_Resume.pdf"
                            rel="noopener noreferrer"
                            className="mt-7 rounded-full p-4 text-sm bg-stone-800 mb-10"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
