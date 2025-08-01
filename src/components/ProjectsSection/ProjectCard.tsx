import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    liveDemoLink: string;
    detailsLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    liveDemoLink,
    detailsLink,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image_container}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.links}>
                    <a
                        href={liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnOutline}
                    >
                        <FontAwesomeIcon icon={faPlay} className={styles.btnIcon} />
                        Live Demo
                    </a>
                    <a
                        href={detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.details}
                    >
                        Details
                        <FontAwesomeIcon icon={faArrowRight} className={styles.details_icon} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
