import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

import logo from '../assets/MyLogo.svg'
import { I18N_KEYS } from '../i18n/keys'

const LANGUAGES = [
    { code: "en", label: "EN" },
    { code: "ja", label: "JA" },
];

function NavBar() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 py-4 sm:py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label={t(I18N_KEYS.nav.home)}>
                    <img src={logo} alt="Sachin Hadimani" className="h-10 w-auto sm:h-12" />
                </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-xl sm:gap-8 sm:text-2xl">
                <a href="https://www.linkedin.com/in/sachin-hadimani-675184224/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={t(I18N_KEYS.nav.linkedin)}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Sachin-Hadimani"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={t(I18N_KEYS.nav.github)}>
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/sachin___hadimani/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={t(I18N_KEYS.nav.instagram)}>
                    <FaInstagram />
                </a>
                <div className="flex items-center gap-1 rounded-full bg-stone-900 p-1 text-xs sm:text-sm">
                    {LANGUAGES.map(({ code, label }) => (
                        <button
                            key={code}
                            type="button"
                            onClick={() => i18n.changeLanguage(code)}
                            aria-pressed={i18n.language === code}
                            className={`rounded-full px-3 py-1 transition-colors ${
                                i18n.language === code
                                    ? "bg-stone-700 text-stone-100"
                                    : "text-stone-400 hover:text-stone-200"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
