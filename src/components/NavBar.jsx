import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

import logo from '../assets/MyLogo.svg'
function NavBar() {
    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 py-4 sm:py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} alt="Sachin Hadimani" className="h-10 w-auto sm:h-12" />
                </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-xl sm:gap-8 sm:text-2xl">
                <a href="https://www.linkedin.com/in/sachin-hadimani-675184224/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Sachin-Hadimani"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'>
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/sachin___hadimani/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram'>
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default NavBar
