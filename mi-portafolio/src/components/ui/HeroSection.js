import { motion } from "framer-motion";
import Button from "./button";

export default function HeroSection({ showNavbar }) {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center relative max-w-6xl mx-auto px-6">
            {!showNavbar && (
                <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md font-bold">AH</div>
                        <div className="flex space-x-6">
                            <a href="#projects" className="text-gray-600 hover:text-black transition-colors font-bold">Proyects</a>
                            <a href="#extras" className="text-gray-600 hover:text-black transition-colors font-bold">Extras</a>
                            <a href="#media" className="text-gray-600 hover:text-black transition-colors font-bold">Media</a>
                        </div>
                    </div>
                    <Button className="border-2 border-black bg-black text-white font-bold px-6 py-2 rounded-md hover:bg-gray-900 hover:border-gray-900 transition-colors">
                        Contact me
                    </Button>
                </div>
            )}
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
            >
                <div className="w-96 h-96 rounded-full overflow-hidden border-[6px] border-black shadow-lg mb-8">
                    <img src="/images/stock.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Hey, im <span className="text-blue-600">Alex Herrerias</span>.
                    Here, you can check out what I'm working on. I try my best to create things and improve each day
                </h1>
            </motion.div>
        </section>
    );
}