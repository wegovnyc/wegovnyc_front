
import { fetchAPI, getStrapiMedia } from '@/lib/api';
import Link from 'next/link';

async function getProjects() {
    const data = await fetchAPI('/projects', {
        populate: '*',
    });

    return data.data;
}

export default async function ProjectNetwork({ data }) {
    const { title, description, projects: relationProjects } = data || {};

    // Handle both Strapi v4 (nested .data) and potentially flattened structures
    let projects = [];
    if (Array.isArray(relationProjects)) {
        projects = relationProjects;
    } else if (relationProjects?.data) {
        projects = relationProjects.data;
    }


    return (
        <section className="project-network-section">
            <div className="container">
                <h2>{title || 'Project Network'}</h2>
                <p className="section-description">{description || 'Other projects we support or maintain.'}</p>
                <div className="project-grid">
                    {projects.map((project) => {
                        const imgUrl = getStrapiMedia(project.image?.url);
                        return (
                            <div key={project.id} className="project-card">
                                {imgUrl && (
                                    <div className="project-image-wrapper">
                                        <img src={imgUrl} alt={project.title} className="project-image" />
                                    </div>
                                )}
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    {project.link && (
                                        <Link href={project.link} target="_blank" className="btn btn-outline-primary btn-sm">
                                            Visit Project
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
