import { useState, useEffect } from "react";
import NavContent from "./NavContent";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full bg-white text-gray-900 shadow-sm transition-transform duration-300 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-6xl mx-auto py-6">
                <NavContent />
            </div>
        </nav>
    );
}
