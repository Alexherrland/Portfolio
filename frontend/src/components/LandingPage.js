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
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-900">Habilidades y Experiencia</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4 text-gray-800">Habilidades Técnicas</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">•</span>
                                    Desarrollo Web: React, Django, HTML, CSS, JavaScript
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">•</span>
                                    Inteligencia Artificial: PyTorch, TensorFlow, Machine Learning
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">•</span>
                                    Desarrollo Backend: C#, .NET, Python, Node.js
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">•</span>
                                    Bases de datos: SQL, MongoDB, PostgreSQL
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold mb-4 text-gray-800">Experiencia Profesional</h4>
                            <ul className="space-y-4">
                                <li>
                                    <h5 className="font-medium text-gray-800">Desarrollador Full Stack</h5>
                                    <p className="text-sm text-gray-600">2021 - 2021 (6 meses)</p>
                                    <p className="text-gray-700 mt-1">Desarrollo de aplicaciones web y móviles</p>
                                </li>
                                <li>
                                    <h5 className="font-medium text-gray-800">Desarrollo TFG basado en IA</h5>
                                    <p className="text-sm text-gray-600">2024 - 2025</p>
                                    <p className="text-gray-700 mt-1">Investigación y desarrollo de modelos de aprendizaje profundo.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h4 className="text-xl font-semibold mb-6 text-gray-800">Educación</h4>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h5 className="font-medium text-gray-800">Grado en Ingeniería Informática</h5>
                            <p className="text-sm text-gray-600">2022 - 2024</p>
                            <p className="text-gray-700 mt-2">Especialización en Inteligencia Artificial y Desarrollo de Software.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id="media" className="w-full bg-[#0A192F] text-white py-10 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Media</h3>
                    <p className="text-base md:text-lg text-gray-300">Contenido multimedia aquí...</p>
                </div>
            </section> */}
        </div>
    );
}