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
            <section id="extras" className="w-full bg-white py-12 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                    <h3 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-[#0A192F] text-center">Skills & Experience</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500 transform transition-all hover:scale-[1.02] hover:shadow-xl">
                            <h4 className="text-2xl font-bold mb-6 text-[#0A192F] flex items-center">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Technical Skills
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">•</span>
                                    <div>
                                        <span className="font-semibold">Web Development:</span>
                                        <span className="text-gray-700"> React, Django, HTML, CSS, JavaScript</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">•</span>
                                    <div>
                                        <span className="font-semibold">Artificial Intelligence:</span>
                                        <span className="text-gray-700"> PyTorch, TensorFlow, Machine Learning</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">•</span>
                                    <div>
                                        <span className="font-semibold">Backend Development:</span>
                                        <span className="text-gray-700"> C#, .NET, Python, Node.js</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">•</span>
                                    <div>
                                        <span className="font-semibold">Databases:</span>
                                        <span className="text-gray-700"> SQL, MongoDB, PostgreSQL</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">•</span>
                                    <div>
                                        <span className="font-semibold">DevOps:</span>
                                        <span className="text-gray-700"> Docker, CI/CD</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-green-500 transform transition-all hover:scale-[1.02] hover:shadow-xl">
                            <h4 className="text-2xl font-bold mb-6 text-[#0A192F] flex items-center">
                                <span className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                </span>
                                Professional Experience
                            </h4>
                            <ul className="space-y-6">
                                <li>
                                    <div className="flex justify-between items-center mb-1">
                                        <h5 className="font-semibold text-xl text-gray-800">Full Stack Developer</h5>
                                        <span className="text-sm font-medium px-2 py-1 bg-gray-200 rounded-full">2021 - 2022</span>
                                    </div>
                                    <p className="text-gray-700">Development of web and mobile applications using modern technologies.</p>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center mb-1">
                                        <h5 className="font-semibold text-xl text-gray-800">AI-based Final Degree Project</h5>
                                        <span className="text-sm font-medium px-2 py-1 bg-gray-200 rounded-full">2024 - 2025</span>
                                    </div>
                                    <p className="text-gray-700">Research and development of deep learning models.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-purple-500 transform transition-all hover:scale-[1.02] hover:shadow-xl max-w-3xl mx-auto">
                            <h4 className="text-2xl font-bold mb-6 text-[#0A192F] flex items-center">
                                <span className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </span>
                                Education
                            </h4>
                            <div className="space-y-6">
                                <div className="p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <h5 className="font-semibold text-xl text-gray-800">Computer Engineering Degree</h5>
                                        <span className="text-sm font-medium px-3 py-1 bg-gray-200 rounded-full">2022 - 2024</span>
                                    </div>
                                    <p className="text-gray-700">Specialization in Artificial Intelligence and Software Development.</p>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <h5 className="font-semibold text-xl text-gray-800">Higher Degree in Web Application Development</h5>
                                        <span className="text-sm font-medium px-3 py-1 bg-gray-200 rounded-full">Sep 2019 - Jun 2021</span>
                                    </div>
                                    <p className="text-gray-700">IG Formación, Alicante</p>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <h5 className="font-semibold text-xl text-gray-800">Technical Degree in Microcomputer Systems and Networks</h5>
                                        <span className="text-sm font-medium px-3 py-1 bg-gray-200 rounded-full">Sep 2017 - May 2019</span>
                                    </div>
                                    <p className="text-gray-700">Cots Alicante</p>
                                </div>
                            </div>
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