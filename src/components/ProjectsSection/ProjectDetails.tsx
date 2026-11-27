import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectDetails.module.css';
interface ProjectDetailsProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    features: string[];
    liveDemoLink?: string; 
    githubLink?: string;   
    githubLinks?: {         
        label: string;
        url: string;
    }[];
    devpostLink?: string;  
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    title,
    description,
    image,
    tags,
    features,
    liveDemoLink,
    githubLink,
    githubLinks,
    devpostLink,
}) => {
    const navigate = useNavigate();
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(prev => !prev);
    };

    return (
        <div className={styles.main_content}>
            <div className={styles.navigate}>
                <button className={styles.back_button} onClick={() => navigate('/#projects')}>
                    ← Back
                </button>
                <div className={styles.route}>
                    <p className={styles.gray}>Projects</p>
                    <p className={styles.white}>{'>'}</p>
                    <p className={styles.white}>{title}</p>
                </div>
            </div>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
            >
                <div className={styles.container}>
                    <motion.div
                        className={styles.container_left}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
                    >
                        <div className={styles.project_title}>
                            <p className={styles.kicker}>PROJECT OVERVIEW</p>
                            <h1>{title}</h1>
                            <div className={styles.underline} />
                        </div>
                        <p>{description}</p>
                        <div className={styles.links}>
                            {githubLinks && githubLinks.length > 0 ? (
                                githubLinks.map(({ label, url }) => (
                                    <a
                                        key={url}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.btnOutline}
                                    >
                                        <FontAwesomeIcon icon={faSquareGithub} className={styles.btnIcon} /> {label}
                                    </a>
                                ))
                            ) : (
                                githubLink && (
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.btnOutline}
                                    >
                                        <FontAwesomeIcon icon={faSquareGithub} className={styles.btnIcon} /> Github
                                    </a>
                                )
                            )}

                            {liveDemoLink && (
                                <a
                                    href={liveDemoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.btnOutline}
                                >
                                    <FontAwesomeIcon icon={faPlay} className={styles.btnIcon} />
                                    Live Demo
                                </a>
                            )}

                            {devpostLink && (
                                <a
                                    href={devpostLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.btnOutline}
                                >
                                    <FontAwesomeIcon icon={faMedal} className={styles.btnIcon} />
                                    Devpost
                                </a>
                            )}
                        </div>

                        <h3>&lt;/&gt; Technologies Used</h3>
                        <div className={styles.tagList}>
                            {tags.map((tag, i) => (
                                <span key={i} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.container_right}
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                    >
                        <div className={`${styles.imageWrapper} clickable`} onClick={toggleZoom}>
                            <motion.img
                                src={image}
                                alt={`${title} screenshot`}
                                className={styles.image}
                                whileHover={{ scale: 1.015 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                            />
                        </div>

                        <motion.div
                            className={styles.features}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            <h3>Key Features</h3>
                            <ul>
                                {features.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Zoomed Image Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        className={styles.zoomOverlay}
                        onClick={() => setIsZoomed(false)} // close on overlay click
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src={image}
                            alt="Zoomed"
                            className={styles.zoomedImage}
                            initial={{ scale: 0.96 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()} // prevent overlay click
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;
