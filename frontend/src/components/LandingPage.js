import Navbar from "./ui/Navbar";
import HeroSection from "./ui/HeroSection";
import ProjectGallery from "./Gallery/ProjectGallery";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Navbar />
            
            {/* Hero Section: Debería resaltar tu perfil como "Software Engineer & Data Scientist" */}
            <HeroSection />

            {/* Project Gallery: El corazón de tu portafolio del Máster */}
            <section id="projects" className="w-full bg-[#0A192F] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my work in Machine Learning, Big Data architectures, and Full-Stack development developed during my Master's Degree.
                    </p>
                </div>
                <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
                    <ProjectGallery />
                </div>
            </section>

            <section id="extras" className="w-full bg-white py-12 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                    <h3 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-[#0A192F] text-center">Expertise & Background</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        {/* Technical Skills: Enfocado a Datos + Software */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-600 transform transition-all hover:scale-[1.01]">
                            <h4 className="text-2xl font-bold mb-6 text-[#0A192F] flex items-center">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full mr-3 text-lg">01</span>
                                Technical Stack
                            </h4>
                            <ul className="grid grid-cols-1 gap-4">
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded mr-3">🚀</div>
                                    <div>
                                        <span className="font-bold block">Big Data & Data Science</span>
                                        <span className="text-gray-600 text-sm">PySpark, Kafka, Scikit-Learn, PyTorch, NLP (spaCy)</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded mr-3">💻</div>
                                    <div>
                                        <span className="font-bold block">Full-Stack Development</span>
                                        <span className="text-gray-600 text-sm">React, Node.js, Django, .NET (C#)</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded mr-3">📊</div>
                                    <div>
                                        <span className="font-bold block">Databases & Stats</span>
                                        <span className="text-gray-600 text-sm">SQL, MongoDB, R (Statistical Modeling)</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-orange-100 p-2 rounded mr-3">🛠️</div>
                                    <div>
                                        <span className="font-bold block">Infrastructure</span>
                                        <span className="text-gray-600 text-sm">Docker, CI/CD, Git, Linux (HDFS/Hive)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Professional & Master Journey */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-green-500 transform transition-all hover:scale-[1.01]">
                            <h4 className="text-2xl font-bold mb-6 text-[#0A192F] flex items-center">
                                <span className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full mr-3 text-lg">02</span>
                                Career Path
                            </h4>
                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-gray-200">
                                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-green-500 rounded-full"></div>
                                    <h5 className="font-bold text-lg leading-none">Master in Data Science Engineering</h5>
                                    <span className="text-sm text-blue-600 font-bold uppercase tracking-widest">Present</span>
                                    <p className="text-gray-600 text-sm mt-2">Specializing in distributed computing, advanced ML, and massive data processing architectures.</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-gray-200">
                                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-300 rounded-full"></div>
                                    <h5 className="font-bold text-lg leading-none">Software Developer</h5>
                                    <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">2021 - 2022</span>
                                    <p className="text-gray-600 text-sm mt-2">Built scalable web applications and managed cloud-based backend services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Education Section: Más limpia y centrada */}
                    <div className="mt-12">
                        <div className="bg-[#0A192F] text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                                <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                                    <path d="M50 10V90M10 50H90" stroke="white" strokeWidth="1" />
                                </svg>
                            </div>
                            
                            <h4 className="text-2xl font-bold mb-8 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                                Academic Background
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                                <div className="space-y-2">
                                    <p className="text-blue-400 font-mono text-sm">2025 - 2026</p>
                                    <h5 className="font-bold text-lg">MSc in Data Science Engineering</h5>
                                    <p className="text-gray-400 text-sm italic underline decoration-blue-500/50">UNED</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-blue-400 font-mono text-sm">2022 - 2025</p>
                                    <h5 className="font-bold text-lg">Computer Engineering Degree</h5>
                                    <p className="text-gray-400 text-sm">Focus on AI and Systems.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-blue-400 font-mono text-sm">2017 - 2021</p>
                                    <h5 className="font-bold text-lg">Web & Systems Tech Degree</h5>
                                    <p className="text-gray-400 text-sm">Practical software development base.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}