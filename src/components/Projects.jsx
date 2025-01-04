import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';

function Projects() {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((Project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                src={Project.image}
                                width={250}
                                height={250}
                                alt={Project.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-2xl">{Project.title}</h3>
                            <p className="mb-4 text-stone-400">{Project.description}</p>
                            <div>
                                {Project.technologies.map((tech, index) => (
                                    <span
                                        className="mr-2 font-medium text-stone-300 text-sm bg-stone-900 rounded p-2"
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
