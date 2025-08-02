import React, { useRef, useEffect, useState } from 'react';
import styles from './ProjectSection.module.css';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'AI-Powered Resume Matcher',
        description: 'Built a full-stack app to extract keywords from resumes and match them to job descriptions using OpenAI embeddings.',
        image: '../../images/projects/resume-matcher-thumb.png',
        liveDemoLink: 'https://your-resume-demo-link.com',
        detailsLink: 'https://github.com/your-repo/resume-matcher',
        tags: ['React', 'Django', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind', 'Auth0', 'extra1', 'easy2'],
        slug: 'resume-matcher'
    },
    {
        title: 'Decentralized Social Network',
        description: 'A blockchain-based platform enabling secure and censorship-resistant communication between users.',
        image: '../../images/projects/resume-matcher-thumb.png',
        liveDemoLink: 'https://your-social-demo.com',
        detailsLink: 'https://github.com/your-repo/decentralized-social',
        tags: ['React', 'Django', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind', 'Auth0'],
        slug: 'decentralized-social'
    },
    {
        title: 'Neuroscience Hackathon App',
        description: 'A React Native app designed during a neuroscience hackathon to track real-time stimuli responses and visualize brainwave data.',
        image: '../../images/projects/resume-matcher-thumb.png',
        liveDemoLink: 'https://your-hackathon-demo.com',
        detailsLink: 'https://github.com/your-repo/neuro-hackathon-app',
        tags: ['React', 'Django', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind', 'Auth0'],
        slug: 'neuroscience-hackathon'
    },
    {
        title: 'Neuroscience Hackathon App',
        description: 'A React Native app designed during a neuroscience hackathon to track real-time stimuli responses and visualize brainwave data.',
        image: '../../images/projects/resume-matcher-thumb.png',
        liveDemoLink: 'https://your-hackathon-demo.com',
        detailsLink: 'https://github.com/your-repo/neuro-hackathon-app',
        tags: ['React', 'Django', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind', 'Auth0'],
        slug: 'neuroscience-hackathon'
    },
    {
        title: 'Neuroscience Hackathon App',
        description: 'A React Native app designed during a neuroscience hackathon to track real-time stimuli responses and visualize brainwave data.',
        image: '../../images/projects/resume-matcher-thumb.png',
        liveDemoLink: 'https://your-hackathon-demo.com',
        detailsLink: 'https://github.com/your-repo/neuro-hackathon-app',
        tags: ['React', 'Django', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind', 'Auth0'],
        slug: 'neuroscience-hackathon'
    },
    {
        title: 'Neuroscience Hackathon App',
        description: 'A React Native app designed during a neuroscience hackathon to track real-time stimuli responses and visualize brainwave data.',
        image: '../../images/projects/resume-matcher-thumb.png',
        liveDemoLink: 'https://your-hackathon-demo.com',
        detailsLink: 'https://github.com/your-repo/neuro-hackathon-app',
        tags: ['React', 'Django', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind', 'Auth0'],
        slug: 'neuroscience-hackathon'
    },
];

const ProjectSection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    useEffect(() => {
        if (titleRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        setUnderlineWidth(titleWidth + 50);
        }
    }, []);

    return (
        <section className={styles.project_section}>
            <div className={styles.project_container}>
                <div className={styles.section_title}>
                <h2 className={styles.title} ref={titleRef}>Technical Projects</h2>
                <div
                    className={styles.underline}
                    style={{ width: `${underlineWidth}px` }}
                />
                </div>
                <div className={styles.project_grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
