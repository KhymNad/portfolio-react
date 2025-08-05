import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (titleRef.current) {
                const titleWidth = titleRef.current.offsetWidth;
                setUnderlineWidth(titleWidth / 2.5);
            }
        }, 1100);
        return () => clearTimeout(timeout);
    }, []);

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
                transition={{ duration: 0.5 }}
            >
                <div className={styles.container}>
                    <motion.div
                        className={styles.container_left}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    >
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
                    </motion.div>

                    <motion.div
                        className={styles.container_right}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    >
                        <div className={styles.imageWrapper} onClick={toggleZoom}>
                            <motion.img
                                src={image}
                                alt={`${title} screenshot`}
                                className={styles.image}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        </div>

                        <motion.div
                            className={styles.features}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 300 }}
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
                        onClick={toggleZoom}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src={image}
                            alt="Zoomed"
                            className={styles.zoomedImage}
                            initial={{ scale: 0.7 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.7 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;
