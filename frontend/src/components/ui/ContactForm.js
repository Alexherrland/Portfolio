import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ContactForm({ isVisible, toggleContactMe }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 z-50 flex items-center justify-center min-h-screen p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            >
                    <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => toggleContactMe(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Me</h2>
                        
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-300 font-semibold mb-2 text-left">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your Name"
                                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-300 font-semibold mb-2 text-left">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="your@email.com"
                                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-300 font-semibold mb-2 text-left">Message</label>
                                <textarea 
                                    placeholder="Your message..."
                                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                                    rows="4"
                                ></textarea>
                            </div>
                            
                            <div className="text-center">
                            <button 
                                type="submit" 
                                className="w-full border-2 border-white text-white py-2 rounded-md bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                            >
                                Send Message
                            </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}