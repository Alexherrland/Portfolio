import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching the projects!', error);
            });
    }, []);

    return (
        <div>
            <h2>My Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.url && <a href={project.url}>View Project</a>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;