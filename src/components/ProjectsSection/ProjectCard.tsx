import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    liveDemoLink: string;
    detailsLink: string; // optional if using slug
    tags: string[];
    slug: string; // ← add this
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    liveDemoLink,
    tags,
    slug,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image_container}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                {tags && tags.length > 0 && (
                    <div className={styles.tagList}>
                        {tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                            <span className={styles.tagOverflow}>
                                +{tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}
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
                    <Link to={`/projects/${slug}`} className={styles.details}>
                        Details
                        <FontAwesomeIcon icon={faArrowRight} className={styles.details_icon} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
