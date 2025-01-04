import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

import logo from '../assets/MyLogo.svg'
function NavBar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} alt="Name" />
                </a>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/sachin-hadimani-675184224/"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'>

                        <FaLinkedin />
                    </a>
                </div>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https://github.com/Sachin0075"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub'>

                        <FaGithub />
                    </a>
                </div>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https://www.instagram.com/sachin___hadimani/"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Instagram'>

                        <FaInstagram />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
