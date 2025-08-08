import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ProjectSection.module.css';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'CABOA Official Website',
        description: 'Responsive site for Central Alberta Basketball Officials built with React and Firebase. Features animated routing, clean layout, and fast performance with intuitive navigation.',
        image: '../../images/projects/CABOA_preview.png',
        liveDemoLink: 'https://caboa.ca/',
        detailsLink: '',
        tags: ['React', 'JavaScript', 'Firebase', 'Framer Motion', 'JavaScript', 'React Router', 'HTML/CSS'],
        slug: 'caboa-website'
    },
    {
        title: 'AI-Powered Resume Matcher',
        description: 'Smart resume matcher using React, ASP.NET Core, and Python. Extracts keywords with Hugging Face NLP and matches to Adzuna jobs. Includes PDF parsing and a clean, responsive UI.',
        image: '../../images/projects/resume-matcher-thumb.png',
        liveDemoLink: 'https://resume-matcher-client.vercel.app/',
        detailsLink: '',
        tags: ['ASP.NET Core', 'Python', 'HuggingFace', 'Natural Language Processing', 'C#', 'JavaScript', 'React', 'Vite', 'Vercel', 'Render', 'FramerMotion', 'PDF Plumber', 'Adzuna API'],
        slug: 'resume-matcher'
    },
    {
        title: 'Neuroscience Hackathon App',
        description: 'React Native app from natHACKS 2024 that analyzes brainwave data and predicts compatibility in real time, integrating Python backends and live data visualization features.',
        image: '../../images/projects/neuromance-thumb.jpg',
        liveDemoLink: '',
        detailsLink: 'https://github.com/orgs/natHACKS-2024-idk/repositories',
        devpostLink: 'https://devpost.com/software/neuromance-pbg8iw',
        tags: ['React', 'Node.js', 'Python', 'JavaScript', 'Hackathon', 'EEG', 'HTML/CSS'],
        slug: 'neuroscience-hackathon',
        isGithubOnly: true,
        badge: '2nd Place'
    },
    {
        title: 'Personal Portfolio',
        description: 'Responsive portfolio built with TypeScript, React, and Vite. Showcases projects, skills, and education with smooth Framer Motion animations and a sleek, modern design.',
        image: '../../images/projects/portfolio-react.png',
        liveDemoLink: 'https://khymnad.github.io/Portfolio/',
        detailsLink: '',
        tags: ['TypeScript', 'React', 'Vite', 'Framer Motion', 'HTML', 'CSS', 'GitHub Pages'],
        slug: 'personal-portfolio'
    },    
    {
        title: 'Decentralized Social Network',
        description: 'Decentralized platform built with Django and REST APIs, enabling secure cross-node communication with PostgreSQL and custom auth in a scalable, censorship-resistant ecosystem.',
        image: '../../images/projects/social-thumb.jpg',
        liveDemoLink: '',
        detailsLink: 'https://github.com/KhymNad/decentralized_social_network?tab=readme-ov-file',
        tags: ['Django', 'PostgreSQL', 'REST API', 'JavaScript', 'Heroku', 'Python', 'HTML/CSS'],
        slug: 'decentralized-social',
        isGithubOnly: true
    },
    {
        title: 'Android Event Scheduler',
        description: 'Android app developed in Java for organizing events and QR-based check-ins, backed by Firebase Authentication and Firestore for real-time data syncing and secure access.',
        image: '../../images/projects/android-scheduler-thumb2.jpg',
        liveDemoLink: '',
        detailsLink: 'https://github.com/CMPUT301W24T27/NoStack',
        tags: ['Java', 'Firebase', 'XML', 'Firestore', 'Android Studio', 'Gradle'],
        slug: 'android-event-scheduler',
        isGithubOnly: true
    }
];

const ProjectSection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (titleRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        setUnderlineWidth(titleWidth + 50);
        }
    }, []);

    return (
        <motion.section
            className={styles.project_section}
            id="projects"
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.project_container}>
                <div className={styles.section_title}>
                    <h2 className={styles.title} ref={titleRef}>
                        Technical Projects
                    </h2>
                    <motion.div
                        className={styles.underline}
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? underlineWidth : 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    />
                </div>
                <motion.div
                    className={styles.project_grid}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectSection;