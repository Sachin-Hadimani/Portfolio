import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

import logo from '../assets/MyLogo.svg'
import { CONTACT } from '../constants'
import { I18N_KEYS } from '../i18n/keys'

const LANGUAGES = [
    { code: "en", label: "EN" },
    { code: "ja", label: "日本語" },
];

function NavBar() {
    const { t, i18n } = useTranslation();
    const whatsappHref = `https://wa.me/${CONTACT.phoneNo.replace(/\D/g, "")}?text=${encodeURIComponent(t(I18N_KEYS.nav.whatsappMessage))}`;
    // resolvedLanguage maps detected codes like "en-US" to "en"
    const currentLanguage = i18n.resolvedLanguage;

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
                <a href={whatsappHref}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={t(I18N_KEYS.nav.whatsapp)}>
                    <FaWhatsapp />
                </a>
                <div
                    role="group"
                    aria-label={t(I18N_KEYS.common.languageSwitcherLabel)}
                    className="flex items-center gap-1 rounded-full bg-stone-900 p-1 text-xs sm:text-sm"
                >
                    {LANGUAGES.map(({ code, label }) => (
                        <button
                            key={code}
                            type="button"
                            lang={code}
                            onClick={() => i18n.changeLanguage(code)}
                            aria-pressed={currentLanguage === code}
                            className={`rounded-full px-3 py-1 transition-colors ${
                                currentLanguage === code
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
