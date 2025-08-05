import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectDetails.module.css';

interface ProjectDetailsProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    features: string[];
    liveDemoLink: string;
    githubLink: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    title,
    description,
    image,
    tags,
    features,
    liveDemoLink,
    githubLink,
}) => {
    const navigate = useNavigate();

        const titleRef = useRef<HTMLHeadingElement>(null);
        const [underlineWidth, setUnderlineWidth] = useState(0);
    
        useEffect(() => {
            if (titleRef.current) {
            const titleWidth = titleRef.current.offsetWidth;
            setUnderlineWidth(titleWidth/2.5);
            }
        }, []);

    return (
        <div className={styles.main_content}>
            <div className={styles.navigate}>
                {/* TODO: navigate to /projects on main page */}
                <button className={styles.back_button} onClick={() => navigate('/#projects')}>
                    ← Back
                </button>
                <div className={styles.route}>
                    <p className={styles.gray}>Projects</p>
                    <p className={styles.white}>{'>'}</p>
                    <p className={styles.white}>{title}</p>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.container_left}>
                    <div className={styles.project_title}>
                        <h1 ref={titleRef}>{title}</h1>
                        <div
                            className={styles.underline}
                            style={{ width: `${underlineWidth}px` }}
                        />
                    </div>
                    <p>{description}</p>
                    <div className={styles.links}>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className={styles.btnOutline}
                        >
                            <FontAwesomeIcon icon={faSquareGithub} className={styles.btnIcon} /> Github
                        </a>
                        <a
                            href={liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnOutline}
                        >
                            <FontAwesomeIcon icon={faPlay} className={styles.btnIcon} />
                            Live Demo
                        </a>
                    </div>
                    <h3>&lt;/&gt; Technologies Used</h3>
                    <div className={styles.tagList}>
                        {tags.map((tag, i) => (
                            <span key={i} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.container_right}>
                    <img src={image} alt={`${title} screenshot`} className={styles.image} />
                    <div className={styles.features}>
                        <h3>Key Features</h3>
                        <ul>
                            {features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
