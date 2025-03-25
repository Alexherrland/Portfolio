import Button from "./button";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full bg-white text-gray-900 shadow-sm transition-transform duration-300 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md font-bold">AH</div>
                    <div className="flex space-x-6">
                        <a href="#projects" className="text-gray-600 hover:text-black transition-colors font-medium">Proyects</a>
                        <a href="#extras" className="text-gray-600 hover:text-black transition-colors font-medium">Extras</a>
                        <a href="#media" className="text-gray-600 hover:text-black transition-colors font-medium">Media</a>
                    </div>
                </div>
                <Button className="border-2 border-black bg-black text-white font-medium px-6 py-2 rounded-md hover:bg-gray-900 hover:border-gray-900 transition-colors">
                    Contact me
                </Button>
            </div>
        </nav>
    );
}