import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const projects = [
    { 
        title: 'Proyecto 1', 
        description: 'Descripción del proyecto 1.', 
        image: `${process.env.PUBLIC_URL}/images/stock.jpg`,
        details: 'Detalles completos del proyecto 1.',
        images: [
            `${process.env.PUBLIC_URL}/images/stock.jpg`,
            `${process.env.PUBLIC_URL}/images/stock.jpg`
        ]
    },
    { 
        title: 'Proyecto 2', 
        description: 'Descripción del proyecto 2.', 
        image: `${process.env.PUBLIC_URL}/images/stock.jpg`,
        details: 'Detalles completos del proyecto 2.',
        images: [
            `${process.env.PUBLIC_URL}/images/stock.jpg`,
            `${process.env.PUBLIC_URL}/images/stock.jpg`
        ]
    },
    { 
        title: 'Proyecto 3', 
        description: 'Descripción del proyecto 3.', 
        image: `${process.env.PUBLIC_URL}/images/stock.jpg`,
        details: 'Detalles completos del proyecto 3.',
        images: [
            `${process.env.PUBLIC_URL}/images/stock.jpg`,
            `${process.env.PUBLIC_URL}/images/stock.jpg`
        ]
    },
    { 
        title: 'Proyecto 4', 
        description: 'Descripción del proyecto 4.', 
        image: `${process.env.PUBLIC_URL}/images/stock.jpg`,
        details: 'Detalles completos del proyecto 4.',
        images: [
            `${process.env.PUBLIC_URL}/images/stock.jpg`,
            `${process.env.PUBLIC_URL}/images/stock.jpg`
        ]
    },
];

const ProjectGallery = () => {
    const [expandedProject, setExpandedProject] = useState(null);
    const detailsRef = useRef(null);

    const handleExpand = (index) => {
        setExpandedProject(index === expandedProject ? null : index);
        if (index !== expandedProject && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} onClick={() => handleExpand(index)}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                        />
                    </div>
                ))}
            </Slider>
            {expandedProject !== null && (
                <div ref={detailsRef}>
                    <ProjectDetails project={projects[expandedProject]} />
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;