import { motion } from "framer-motion";
import NavContent from "./NavContent";
import { GithubIcon, LinkedinIcon, FileText } from 'lucide-react';

export default function HeroSection({ showNavbar }) {
    const socialLinks = [
        { 
            icon: GithubIcon, 
            href: "https://github.com/Alexherrland", 
            color: "text-gray-800 hover:text-black",
            tooltip: "GitHub" 
        },
        { 
            icon: LinkedinIcon, 
            href: "https://www.linkedin.com/in/alex-herrerías-ramírez-283179129/", 
            color: "text-blue-600 hover:text-blue-700",
            tooltip: "LinkedIn" 
        },
        { 
            icon: FileText, 
            href: "/cv.pdf", 
            color: "text-green-600 hover:text-green-700",
            tooltip: "Download CV" 
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-16">
            {!showNavbar && (
                <div className="absolute top-0 left-0 w-full flex items-center py-4 md:py-6 pr-4 pl-4 md:pr-0 md:pl-0">
                    <NavContent />
                </div>
            )}
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
            >
                <div className="w-[16rem] h-[16rem] md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden border-[3px] md:border-[6px] border-black shadow-lg mb-6 md:mb-12">
                    <img src={`${process.env.PUBLIC_URL}/images/perfil.png`} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 px-4">
                    Hey, I'm <span className="text-blue-600">Alex Herrerias</span>.
                    Here, you can check out what I'm working on.
                </h1>
                
                {/* Nuevo bloque de especialidad */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-6 px-4"
                >
                    <div className="bg-gray-100 rounded-full px-4 py-2 inline-block">
                        <span className="text-gray-800 text-sm md:text-base">
                            Software Developer | 
                            <span className="text-blue-600 font-semibold ml-2">
                                Data Science Junior
                            </span>
                        </span>
                    </div>
                </motion.div>
                
                {/* Social Links */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex items-center justify-center space-x-4 mt-6"
                >
                    {socialLinks.map((social, index) => (
                        <div key={index} className="relative group">
                            <a 
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    ${social.color} 
                                    p-2 rounded-full transition-all duration-300 
                                    hover:bg-gray-100 hover:scale-110
                                `}
                            >
                                <social.icon size={28} strokeWidth={2} />
                            </a>
                            <span className="
                                absolute bottom-full left-1/2 transform -translate-x-1/2 
                                bg-black text-white text-xs px-2 py-1 rounded 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 
                                mb-2
                            ">
                                {social.tooltip}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}