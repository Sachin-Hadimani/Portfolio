import MyProfilePic from '../assets/MyProfilePic.jpg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { I18N_KEYS } from '../i18n/keys';

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
    const { t } = useTranslation();

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
                            {t(I18N_KEYS.hero.title)}
                        </motion.span>
                        <motion.p className="mt-4 text-sm sm:text-base leading-relaxed">
                            {t(I18N_KEYS.hero.bio)}
                        </motion.p>
                        <motion.a
                            href={t(I18N_KEYS.hero.resumeFile)}
                            target="_blank"
                            download={t(I18N_KEYS.hero.resumeFileName)}
                            rel="noopener noreferrer"
                            className="mt-7 rounded-full p-4 text-sm bg-stone-800 mb-10"
                        >
                            {t(I18N_KEYS.hero.downloadResume)}
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
