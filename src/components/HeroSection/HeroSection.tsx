import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
    return (
        <motion.div
            className={styles.main}
            id="home"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className={styles.content_container}>
                <motion.div
                    className={styles.content_left}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h1>Khym Nad</h1>
                    <h2>Full-Stack Developer</h2>
                    <div className={styles.links_container}>
                        <a
                        href="https://github.com/KhymNad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link_icon}
                        aria-label="GitHub"
                        >
                        <FontAwesomeIcon icon={faSquareGithub} />
                        </a>
                        <a
                        href="https://www.linkedin.com/in/khym-nad-76b262235/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link_icon}
                        aria-label="LinkedIn"
                        >
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.content_right}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <p>
                                I am a Full-Stack Developer with a passion for creating dynamic and responsive web applications. 
                                I specialize in both front-end and back-end development, ensuring seamless user experiences.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
