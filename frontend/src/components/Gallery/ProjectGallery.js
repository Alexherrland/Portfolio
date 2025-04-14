import ProjectCard from "./ProjectCard";

const projects = [
    { 
        title: "Proyecto TFG - IA con PyTorch", 
        description: "Proyecto de fin de grado centrado en Inteligencia Artificial utilizando PyTorch, implementando modelos de aprendizaje profundo para resolver problemas complejos.", 
        image: `${process.env.PUBLIC_URL}/images/portfolio.png`,
        color: "bg-red-500"
    },
    { 
        title: "URL Shortener", 
        description: "Aplicación web full-stack desarrollada con Django y React que permite acortar URLs largas. Incluye sistema de autenticación y análisis de estadísticas.", 
        image: `${process.env.PUBLIC_URL}/images/portfolio.png`,
        color: "bg-blue-500"
    },
    { 
        title: "Proyecto C#", 
        description: "Aplicación desarrollada en C# utilizando .NET Framework, demostrando conocimientos en desarrollo de software empresarial y patrones de diseño.", 
        image: `${process.env.PUBLIC_URL}/images/portfolio.png`,
        color: "bg-green-500"
    }
];

export default function ProjectsSection() {
    return (
        <section className="container mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-white">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}