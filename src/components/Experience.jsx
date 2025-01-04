import { EXPERIENCES } from "../constants";
import { motion } from 'framer-motion';

function Experience() {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((Experience, index) => (
                    <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-2 text-sm text-stone-400">{Experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-full lg:w-3/4"
                        >
                            <h3 className="font-semibold mb-2">
                                {Experience.role} -{" "}
                                <span className="text-stone-500">{Experience.company}</span>
                            </h3>
                            <p className="text-stone-400">{Experience.description}</p>
                            <div className="mt-4">
                                {Experience.technologies.map((tech, index) => (
                                    <span
                                        className="mr-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
