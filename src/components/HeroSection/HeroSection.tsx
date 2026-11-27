import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection: React.FC<{ introComplete?: boolean }> = ({ introComplete = true }) => {
    const [glowVisible, setGlowVisible] = useState(false);
    const pointerX = useSpring(useMotionValue(0), { stiffness: 110, damping: 28, mass: 0.35 });
    const pointerY = useSpring(useMotionValue(0), { stiffness: 110, damping: 28, mass: 0.35 });

    const moveGlow = (event: React.PointerEvent<HTMLElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(event.clientX - bounds.left - 260);
        pointerY.set(event.clientY - bounds.top - 260);
    };

    return (
        <section
            className={`${styles.main} ${introComplete ? '' : styles.intro_active}`}
            id="home"
            onPointerMove={moveGlow}
            onPointerEnter={() => setGlowVisible(true)}
            onPointerLeave={() => setGlowVisible(false)}
        >
            <div className={styles.ambient} aria-hidden="true">
                <div className={styles.orbit}><span /><span /><span /></div>
                <motion.div className={`${styles.glow} ${glowVisible ? styles.glow_visible : ''}`} style={{ x: pointerX, y: pointerY }} />
            </div>
            <div className={styles.content_container}>
                <div className={styles.content_left}>
                    <p className={styles.eyebrow}><span /> SOFTWARE DEVELOPER <span className={styles.location}>CALGARY, AB</span></p>
                    <motion.h1 layoutId="portfolio-name" transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>Khym <span>Nad.</span></motion.h1>
                    <motion.h2 layoutId="portfolio-role" transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>Full-Stack Developer</motion.h2>
                    <div className={styles.actions}>
                        <a href="#work-experience" className={styles.primary_link}>Explore my work <span aria-hidden="true">↗</span></a>
                        <div className={styles.links_container}>
                            <a href="https://github.com/KhymNad" target="_blank" rel="noopener noreferrer" className={styles.link_icon} aria-label="GitHub"><FontAwesomeIcon icon={faSquareGithub} /></a>
                            <a href="https://www.linkedin.com/in/khymnad" target="_blank" rel="noopener noreferrer" className={styles.link_icon} aria-label="LinkedIn"><FontAwesomeIcon icon={faSquareLinkedin} /></a>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.content_right}
                >
                    <div className={styles.card_top}><span>HOW I WORK</span><span className={styles.card_mark}>✳</span></div>
                    <p>I connect interface, business logic, and data design to solve practical problems and make complex workflows easier to use.</p>
                    <div className={styles.card_footer}><span>FULL STACK</span><span>PRODUCT · ENGINEERING</span></div>
                </div>
            </div>
            <div className={styles.scroll_hint} aria-hidden="true"><span /> SCROLL TO EXPLORE</div>
        </section>
    );
};

export default HeroSection;
