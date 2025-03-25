import { useState, useEffect } from "react";
import NavContent from "./NavContent";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full bg-white text-gray-900 shadow-sm transition-transform duration-300 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-6xl mx-auto py-4 md:py-6 px-4 sm:px-6 md:px-0">
                <NavContent isMobile={isMobile} />
            </div>
        </nav>
    );
}