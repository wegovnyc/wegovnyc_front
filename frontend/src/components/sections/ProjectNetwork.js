
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

    let projects = relationProjects?.data;

    // Fallback if no projects selected in backend
    if (!projects || projects.length === 0) {
        projects = await getProjects();
    }

    if (!projects || projects.length === 0) return null;

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
