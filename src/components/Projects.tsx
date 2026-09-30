import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { I18N_KEYS } from '../i18n/keys';

function Projects() {
    const { t } = useTranslation();

    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-3xl sm:text-4xl">
                {t(I18N_KEYS.projects.heading)}
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
                            className="w-full flex justify-center lg:block lg:w-1/4"
                        >
                            <img
                                src={Project.image}
                                width={250}
                                height={250}
                                alt={t(I18N_KEYS.projects.title(Project.id))}
                                className="mb-6 rounded w-full max-w-[200px] sm:max-w-[250px] h-auto"
                            />
                        </motion.div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-xl sm:text-2xl">{t(I18N_KEYS.projects.title(Project.id))}</h3>
                            <p className="mb-4 text-stone-400 text-sm sm:text-base">{t(I18N_KEYS.projects.description(Project.id))}</p>
                            <div className="flex flex-wrap gap-2">
                                {Project.technologies.map((tech, index) => (
                                    <span
                                        className="font-medium text-stone-300 text-xs sm:text-sm bg-stone-900 rounded px-2 py-1"
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
