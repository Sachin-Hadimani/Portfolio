import { motion } from 'framer-motion';
import { BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql, SiSpringboot } from "react-icons/si";

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
                className="my-10 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants}
                    custom={2.5}  // Passing duration value
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants}
                    custom={3}  // Passing duration value
                >
                    <SiSpringboot className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants}
                    custom={4}  // Passing duration value
                >
                    <SiMysql className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconsVariants}
                    custom={2}  // Passing duration value
                    className="p-4"
                >
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;
