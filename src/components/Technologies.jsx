import { motion } from 'framer-motion';
import { FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
    SiExpress,
    SiGit,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiRedux,
    SiSpringboot,
    SiSpringsecurity,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

const TECHNOLOGIES = [
    { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5, label: "React" },
    { Icon: SiTypescript, color: "text-blue-500", duration: 3, label: "TypeScript" },
    { Icon: SiRedux, color: "text-purple-600", duration: 2.2, label: "Redux / RTK Query" },
    { Icon: SiTailwindcss, color: "text-teal-400", duration: 3.2, label: "TailwindCSS" },
    { Icon: FaJava, color: "text-red-500", duration: 3.4, label: "Java" },
    { Icon: SiSpringboot, color: "text-green-500", duration: 3, label: "Spring Boot" },
    { Icon: SiSpringsecurity, color: "text-green-700", duration: 3.1, label: "Spring Security" },
    { Icon: SiNodedotjs, color: "text-green-500", duration: 2.4, label: "Node.js" },
    { Icon: SiExpress, color: "text-stone-300", duration: 2.8, label: "Express.js" },
    { Icon: SiMongodb, color: "text-green-400", duration: 3.3, label: "MongoDB" },
    { Icon: SiMysql, color: "text-blue-500", duration: 4, label: "MySQL" },
    { Icon: SiGit, color: "text-orange-600", duration: 2.5, label: "Git" },
];

function Technologies() {
    const iconsVariants = {
        initial: { y: -10 },
        animate: (duration) => ({
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        }),
    };

    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-center text-3xl sm:text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            >
                {TECHNOLOGIES.map(({ Icon, color, duration, label }) => (
                    <motion.div
                        key={label}
                        initial="initial"
                        animate="animate"
                        variants={iconsVariants}
                        custom={duration}
                        aria-label={label}
                        title={label}
                    >
                        <Icon className={`text-5xl sm:text-6xl md:text-7xl ${color}`} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
