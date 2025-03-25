import Navbar from "./ui/Navbar";
import HeroSection from "./ui/HeroSection";
import ProjectGallery from "./Gallery/ProjectGallery";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Navbar />
            <HeroSection />
            <section id="projects" className="w-full bg-[#0A192F] text-white py-10">
                <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="mt-4">
                        <ProjectGallery />
                    </div>
                </div>
            </section>
            <section id="extras" className="w-full bg-white py-10 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Extras</h3>
                    <p className="text-base md:text-lg text-gray-700">Contenido adicional aquí...</p>
                </div>
            </section>
            <section id="media" className="w-full bg-[#0A192F] text-white py-10 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Media</h3>
                    <p className="text-base md:text-lg text-gray-300">Contenido multimedia aquí...</p>
                </div>
            </section>
        </div>
    );
}