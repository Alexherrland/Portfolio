import Button from "./ui/button";
import { motion } from "framer-motion";
import ProjectGallery from './ProjectGallery';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
            {/* Header */}
            <header className="w-full flex justify-between items-center max-w-6xl py-4">
                <h1 className="text-2xl font-bold">Alex Herrerias Ramirez</h1>
                <nav className="space-x-6">
                    <a href="#projects" className="hover:text-yellow-400">Proyectos</a>
                    <a href="#about" className="hover:text-yellow-400">Sobre mí</a>
                    <a href="#skills" className="hover:text-yellow-400">Skills</a>
                </nav>
            </header>

            {/* Hero Section */}
            <motion.div 
                className="text-center mt-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Button className="bg-gray-700 mb-4">
                    <a href="/cv.pdf" download className="w-full h-full inline-block">Descargar CV</a>
                </Button>
                <h2 className="text-4xl font-bold">
                    <span className="text-yellow-400">Software Developer</span>
                </h2>
                <h3 className="text-3xl mt-2">Alex Herrerias Ramirez</h3>
                <p className="text-lg mt-2">Python (IA/Backend) & React Frontend</p>
                <div className="mt-6 space-x-4">
                    <Button className="bg-blue-600">
                        <a href="https://www.linkedin.com/in/alex-herrerías-ramírez-283179129/" target="_blank" rel="noopener noreferrer" className="w-full h-full inline-block">LinkedIn</a>
                    </Button>
                    <Button className="bg-gray-700">
                        <a href="https://github.com/Alexherrland" target="_blank" rel="noopener noreferrer" className="w-full h-full inline-block">GitHub</a>
                    </Button>
                </div>
            </motion.div>

            {/* Projects Section */}
            <section id="projects" className="w-full max-w-6xl mt-20">
                <h3 className="text-3xl font-bold">Mis proyectos destacados</h3>
                <div className="mt-4">
                    <ProjectGallery />
                </div>
            </section>
        </div>
    );
}