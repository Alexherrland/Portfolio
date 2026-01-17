import ProjectCard from "./ProjectCard";

const projects = [
    { 
        title: "Bachelor's Thesis - AI with PyTorch", 
        description: "Final degree project focused on super-resolution using PyTorch, implementing deep learning models to solve complex problems.", 
        image: `${process.env.PUBLIC_URL}/images/tfg.png`,
        color: "bg-red-500",
        githubLink: "https://github.com/Alexherrland/app_unet"
    },
    { 
        title: "URL Shortener", 
        description: "Full-stack web application developed with Django and React that allows you to shorten long URLs. It includes an authentication system and statistics analysis.", 
        image: `${process.env.PUBLIC_URL}/images/shortener.png`,
        color: "bg-blue-500",
        githubLink: "https://github.com/Alexherrland/url_shortener"
    },
    { 
        title: "MSc Data Science Portfolio", 
        description: "Comprehensive collection of advanced projects in Big Data (Spark, Kafka), Machine Learning (Classification, Regression, Clustering), and NLP developed during my Master's Degree.", 
        image: `${process.env.PUBLIC_URL}/images/master.jpg`, 
        color: "bg-purple-600",
        githubLink: "https://github.com/Alexherrland/master-data-science"
    }
];

export default function ProjectsSection() {
    return (
        <section className="container mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-white italic">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}