import { motion } from "framer-motion";
import NavContent from "./NavContent";

export default function HeroSection({ showNavbar }) {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center relative max-w-6xl mx-auto px-6 pt-16">
            {!showNavbar && (
                <div className="absolute top-0 left-0 w-full flex items-center py-6">
                    <NavContent />
                </div>
            )}
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
            >
                <div className="w-[30rem] h-[30rem] rounded-full overflow-hidden border-[6px] border-black shadow-lg mb-12">
                    <img src="/images/stock.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Hey, I'm <span className="text-blue-600">Alex Herrerias</span>.
                    Here, you can check out what I'm working on. I try my best to create things and improve each day.
                </h1>
            </motion.div>
        </section>
    );
}
