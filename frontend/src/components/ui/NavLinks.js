import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from "./button";
import ContactForm from "./ContactForm";

export default function NavLinks() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactFormVisible, setIsContactFormVisible] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleContactMe = (show) => {
        setIsContactFormVisible(show);
    };

    const renderLinks = () => (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8"
        >
            <a href="#projects" className="inline-block text-black text-2xl md:text-xl cursor-pointer font-extrabold relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Projects</a>
            <a href="#extras" className="inline-block text-black text-2xl md:text-xl cursor-pointer font-extrabold relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Extras</a>
            <a href="#media" className="inline-block text-black text-2xl md:text-xl cursor-pointer font-extrabold relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Media</a>
            <div className="md:hidden">
                <Button 
                    className="bg-black text-white border-2 border-black font-extrabold px-8 py-3 text-lg rounded-md hover:bg-gray-900 hover:border-gray-900 transition-colors w-full"
                    onClick={() => toggleContactMe(true)}
                >
                    Contact Me
                </Button>
            </div>
        </motion.div>
    );

    return (
        <div className="flex justify-between w-full">
            <div className="hidden md:flex items-center space-x-12">
                <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black text-black flex items-center justify-center rounded-md font-extrabold text-lg md:text-xl">
                    AH
                </div>
                <div className="flex items-center space-x-8">
                    {renderLinks()}
                </div>
            </div>
            <div className="hidden md:block">
                <Button 
                    className="bg-black text-white border-2 border-black font-extrabold px-8 py-3 text-lg rounded-md hover:bg-gray-900 hover:border-gray-900 transition-colors"
                    onClick={() => toggleContactMe(true)}
                >
                    Contact Me
                </Button>
            </div>
            <div className="md:hidden flex items-center ml-auto">
                <button 
                    onClick={toggleMobileMenu} 
                    className="text-black focus:outline-none"
                >
                    <Menu size={32} />
                </button>
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-8"
                        >
                            <button 
                                onClick={toggleMobileMenu} 
                                className="absolute top-6 right-6 text-black focus:outline-none"
                            >
                                <X size={32} />
                            </button>
                            {renderLinks()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <ContactForm isVisible={isContactFormVisible} toggleContactMe={toggleContactMe} />
        </div>
    );
}