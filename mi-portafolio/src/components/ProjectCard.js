import React from 'react';

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="flex max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img className="w-1/3 object-cover" src={image} alt={title} />
            <div className="w-2/3 px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;