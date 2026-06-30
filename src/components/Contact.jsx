import { CONTACT } from "../constants";
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className="border-t-2 border-stone-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }} // Changed opacity to 0
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-3xl sm:text-4xl"
            >
                Get In Touch
            </motion.h2>
            <div className="text-center tracking-tighter px-4">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-sm sm:text-base"
                >
                    <a href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`} className="hover:text-stone-100">
                        {CONTACT.phoneNo}
                    </a>
                </motion.p>
                <a
                    href={`mailto:${CONTACT.email}`}
                    className="border-b text-sm sm:text-base break-all hover:text-stone-100"
                >
                    {CONTACT.email}
                </a>
            </div>

        </div>
    );
}

export default Contact;
