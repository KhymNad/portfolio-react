import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMedal } from '@fortawesome/free-solid-svg-icons';
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
    liveDemoLink?: string;
    githubLink?: string;
    githubLinks?: { label: string; url: string }[];
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

    useEffect(() => {
        if (!isZoomed) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsZoomed(false);
        };
        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [isZoomed]);

    const externalLinkProps = { target: '_blank' as const, rel: 'noopener noreferrer' };

    return (
        <main className={styles.main_content}>
            <div className={styles.navigate}>
                <button className={styles.back_button} onClick={() => navigate('/#projects')}>
                    <span aria-hidden="true">←</span> Back to projects
                </button>
                <nav className={styles.route} aria-label="Breadcrumb">
                    <span>Projects</span>
                    <span aria-hidden="true">/</span>
                    <span className={styles.current_route} aria-current="page">{title}</span>
                </nav>
            </div>

            <motion.article
                className={styles.project_page}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
                <header className={styles.hero}>
                    <div className={styles.hero_copy}>
                        <p className={styles.kicker}><span /> Project overview</p>
                        <h1>{title}</h1>
                        <div className={styles.title_rule} aria-hidden="true" />
                        <p className={styles.description}>{description}</p>

                        <div className={styles.links} aria-label="Project links">
                            {githubLinks && githubLinks.length > 0 ? (
                                githubLinks.map(({ label, url }) => (
                                    <a key={url} href={url} {...externalLinkProps} className={styles.primary_link}>
                                        <FontAwesomeIcon icon={faSquareGithub} /> {label}
                                        <span className={styles.external_mark} aria-hidden="true">↗</span>
                                    </a>
                                ))
                            ) : githubLink ? (
                                <a href={githubLink} {...externalLinkProps} className={styles.primary_link}>
                                    <FontAwesomeIcon icon={faSquareGithub} /> GitHub
                                    <span className={styles.external_mark} aria-hidden="true">↗</span>
                                </a>
                            ) : null}

                            {liveDemoLink && (
                                <a href={liveDemoLink} {...externalLinkProps} className={styles.secondary_link}>
                                    <FontAwesomeIcon icon={faPlay} /> Live demo
                                    <span className={styles.external_mark} aria-hidden="true">↗</span>
                                </a>
                            )}

                            {devpostLink && (
                                <a href={devpostLink} {...externalLinkProps} className={styles.secondary_link}>
                                    <FontAwesomeIcon icon={faMedal} /> Devpost
                                    <span className={styles.external_mark} aria-hidden="true">↗</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <motion.button
                        type="button"
                        className={styles.preview_button}
                        onClick={() => setIsZoomed(true)}
                        aria-label={`Expand ${title} project preview`}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <img src={image} alt={`${title} screenshot`} className={styles.preview_image} />
                        <span className={styles.preview_shade} aria-hidden="true" />
                        <span className={styles.preview_label}>Project preview</span>
                        <span className={styles.expand_hint}><span aria-hidden="true">⤢</span> View full image</span>
                    </motion.button>
                </header>

                <div className={styles.detail_grid}>
                    <motion.section
                        className={styles.panel}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.25 }}
                        aria-labelledby="project-highlights"
                    >
                        <div className={styles.panel_heading}>
                            <span className={styles.panel_index}>01</span>
                            <div>
                                <p className={styles.panel_kicker}>What it does</p>
                                <h2 id="project-highlights">Key features</h2>
                            </div>
                        </div>
                        <ul className={styles.feature_list}>
                            {features.map((feature, index) => (
                                <motion.li
                                    key={feature}
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.28, delay: index * 0.07 }}
                                    viewport={{ once: true }}
                                >
                                    <span className={styles.feature_number}>{String(index + 1).padStart(2, '0')}</span>
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        className={`${styles.panel} ${styles.technology_panel}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3, delay: 0.06 }}
                        viewport={{ once: true, amount: 0.25 }}
                        aria-labelledby="project-technologies"
                    >
                        <div className={styles.panel_heading}>
                            <span className={styles.panel_index}>02</span>
                            <div>
                                <p className={styles.panel_kicker}>Built with</p>
                                <h2 id="project-technologies">Technology</h2>
                            </div>
                        </div>
                        <div className={styles.tag_list}>
                            {tags.map((tag, index) => (
                                <motion.span
                                    key={`${tag}-${index}`}
                                    className={styles.tag}
                                    whileHover={{ y: -3, scale: 1.03 }}
                                    transition={{ duration: 0.16 }}
                                >
                                    <span className={styles.tag_dot} aria-hidden="true" />
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </motion.article>

            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        className={styles.zoom_overlay}
                        onClick={() => setIsZoomed(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        role="presentation"
                    >
                        <button
                            type="button"
                            className={styles.close_zoom}
                            onClick={() => setIsZoomed(false)}
                            aria-label="Close project preview"
                        >
                            ×
                        </button>
                        <motion.img
                            src={image}
                            alt={`${title} full-size screenshot`}
                            className={styles.zoomed_image}
                            initial={{ scale: 0.96, y: 8 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.98, y: 4 }}
                            transition={{ duration: 0.24, ease: 'easeOut' }}
                            onClick={event => event.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default ProjectDetails;
