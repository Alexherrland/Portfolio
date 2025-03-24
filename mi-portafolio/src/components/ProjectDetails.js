import React from 'react';
import Slider from 'react-slick';

const ProjectDetails = ({ project }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex mt-6 p-6 bg-gray-800 text-white rounded">
            <div className="w-1/2">
                {project.images && (
                    <Slider {...settings}>
                        {project.images.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt={`Detail ${index + 1}`} className="w-full h-auto" />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
            <div className="w-1/2 px-6">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p>{project.details}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;