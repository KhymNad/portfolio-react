import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content_container}>
                <div className={styles.content_left}>
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
                </div>

                <div className={styles.content_right}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <p>
                                I am a Full-Stack Developer with a passion for creating dynamic and responsive web applications. 
                                I specialize in both front-end and back-end development, ensuring seamless user experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
