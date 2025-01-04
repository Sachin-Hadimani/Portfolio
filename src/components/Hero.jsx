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
                        className="flex justify-center lg:p-8"
                    >
                        <motion.img
                            src={MyProfilePic}
                            width={450}
                            height={450}
                            alt="Profile Pic"
                            className="border border-stone-900 rounded-3xl bg-transparent" // Added bg-transparent
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        />

                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        className="flex flex-col items-center lg:items-start mt-10"
                        variants={childVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p>
                            I am a Java Full-Stack Developer with expertise in React.js, Spring Boot, and MySQL/PostgreSQL. Currently pursuing an MCA at St. Aloysius Institute of Management & Information Technology, I focus on building scalable and efficient web applications. With 1 year of experience, I bring a strong understanding of both backend and frontend development, and I am passionate about creating innovative solutions in the tech industry.
                        </motion.p>
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            download="Sachin Resume"
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
