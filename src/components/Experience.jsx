import { EXPERIENCES } from "../constants";
import { motion } from 'framer-motion';

const MONTHS = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

const parseStartDate = (year) => {
    const [start] = String(year).split("-");
    const [monthRaw, yearRaw] = start.trim().split(/\s+/);
    const month = MONTHS[monthRaw?.toLowerCase().slice(0, 3)] ?? 0;
    return new Date(Number.parseInt(yearRaw, 10) || 0, month).getTime();
};

const parseEndDate = (year) => {
    const parts = String(year).split("-");
    const end = (parts[1] ?? parts[0]).trim();
    if (/present/i.test(end)) return Infinity;
    const [monthRaw, yearRaw] = end.split(/\s+/);
    const month = MONTHS[monthRaw?.toLowerCase().slice(0, 3)] ?? 0;
    return new Date(Number.parseInt(yearRaw, 10) || 0, month).getTime();
};

const sortedExperiences = [...EXPERIENCES].sort(
    (a, b) => parseEndDate(b.year) - parseEndDate(a.year)
        || parseStartDate(b.year) - parseStartDate(a.year)
);

function Experience() {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-3xl sm:text-4xl">
                Experience
            </motion.h2>
            <div>
                {sortedExperiences.map((Experience, index) => (
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
                            <h3 className="font-semibold mb-2 text-lg sm:text-xl">
                                {Experience.role} -{" "}
                                <span className="text-stone-500">{Experience.company}</span>
                            </h3>
                            <p className="text-stone-400 text-sm sm:text-base">{Experience.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {Experience.technologies.map((tech, index) => (
                                    <span
                                        className="rounded bg-stone-900 px-2 py-1 text-xs sm:text-sm font-medium text-stone-300"
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
