export default function ProjectCard({ title, description, image, color }) {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 h-auto md:h-96">
            <img className="w-full h-48 md:h-60 object-cover" src={image} alt={title} />
            <div className={`flex flex-col justify-center items-center h-auto md:h-36 ${color} text-white text-center p-4 md:p-6`}>
                <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
                <p className="text-base md:text-lg mt-2">{description}</p>
            </div>
        </div>
    );
}