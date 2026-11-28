import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLinkedin, faReact, faJs, faPython, faHtml5, faCss3Alt, faGitAlt, faDocker, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './HeroSection.module.css';

const orbitSkills = [
    { name: 'React', icon: faReact, detail: 'I build responsive interfaces and reusable UI with React.' },
    { name: 'TypeScript', mark: 'TS', detail: 'I use strong typing to make application code clearer and easier to maintain.' },
    { name: 'JavaScript', icon: faJs, detail: 'I create interactive features across modern web applications.' },
    { name: 'Python', icon: faPython, detail: 'I use Python for backend services, automation, and data workflows.' },
    { name: 'C#', mark: 'C#', detail: 'I develop application features and APIs with C#.' },
    { name: '.NET', mark: '.N', detail: 'I build and maintain backend services with the .NET ecosystem.' },
    { name: 'SQL', icon: faDatabase, detail: 'I model data and write queries that support reliable application features.' },
    { name: 'HTML', icon: faHtml5, detail: 'I structure accessible, semantic web experiences.' },
    { name: 'CSS', icon: faCss3Alt, detail: 'I create responsive layouts and cohesive visual systems.' },
    { name: 'Git', icon: faGitAlt, detail: 'I use Git to manage changes and collaborate across codebases.' },
    { name: 'Docker', icon: faDocker, detail: 'I use containers to keep development environments consistent.' },
    { name: 'Node.js', icon: faNodeJs, detail: 'I build JavaScript services and development tooling with Node.js.' },
];

const splitText = (text: string) => text.split('');

type GithubProfile = { login: string; name: string | null; avatar_url: string; html_url: string; bio: string | null; public_repos: number; followers: number };

const HeroSection: React.FC<{ introComplete?: boolean }> = ({ introComplete = true }) => {
    const [glowVisible, setGlowVisible] = useState(false);
    const [githubProfile, setGithubProfile] = useState<GithubProfile | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<(typeof orbitSkills)[number] | null>(null);
    const pointerX = useSpring(useMotionValue(0), { stiffness: 110, damping: 28, mass: 0.35 });
    const pointerY = useSpring(useMotionValue(0), { stiffness: 110, damping: 28, mass: 0.35 });

    useEffect(() => {
        let cancelled = false;
        fetch('https://api.github.com/users/KhymNad')
            .then(response => response.ok ? response.json() as Promise<GithubProfile> : null)
            .then(profile => {
            if (cancelled) return;
            if (profile) setGithubProfile(profile);
        }).catch(() => undefined);
        return () => { cancelled = true; };
    }, []);

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
                <motion.div className={`${styles.glow} ${glowVisible ? styles.glow_visible : ''}`} style={{ x: pointerX, y: pointerY }} />
            </div>
            <div className={styles.content_container}>
                <div className={styles.content_left}>
                    <p className={styles.eyebrow}><span /> SOFTWARE DEVELOPER <span className={styles.location}>CALGARY, AB</span></p>
                    <motion.h1 aria-label="Khym Nad." layoutId="portfolio-name" transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
                        {splitText('Khym Nad.').map((char, index) => <span key={index} className={index >= 5 ? styles.name_accent : undefined} style={{ display: 'inline-block', whiteSpace: 'pre' }}>{char}</span>)}
                    </motion.h1>
                    <motion.h2 aria-label="Full-Stack Developer" layoutId="portfolio-role" transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
                        {splitText('Full-Stack Developer').map((char, index) => <span key={index} style={{ display: 'inline-block', whiteSpace: 'pre' }}>{char}</span>)}
                    </motion.h2>
                    <div className={styles.actions}>
                        <a href="https://www.linkedin.com/in/khymnad" target="_blank" rel="noopener noreferrer" className={styles.primary_link}>
                            <FontAwesomeIcon icon={faSquareLinkedin} /> Connect on LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
                <div
                    className={styles.content_right}
                >
                    <div className={styles.orbit}>{orbitSkills.map(skill => <button type="button" className={`${styles.orbit_icon} ${selectedSkill?.name === skill.name ? styles.orbit_icon_active : ''}`} key={skill.name} title={skill.name} aria-label={`Highlight ${skill.name}`} aria-pressed={selectedSkill?.name === skill.name} onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}>{skill.icon ? <FontAwesomeIcon icon={skill.icon} /> : <span>{skill.mark}</span>}</button>)}</div>
                    <div className={styles.orbit_center}>
                    <a className={styles.github_profile} href="https://github.com/KhymNad" target="_blank" rel="noopener noreferrer" aria-label="Open Khym Nad's GitHub profile">
                        <span className={styles.avatar_ring} aria-hidden="true"><img src={githubProfile?.avatar_url ?? 'https://github.com/KhymNad.png'} alt="" /></span>
                        <span className={styles.github_identity}><strong>{githubProfile?.name ?? 'Khym Nad'}</strong><small>@{githubProfile?.login ?? 'KhymNad'}</small></span>
                    </a>
                    <div className={styles.skill_focus} aria-live="polite">
                        {selectedSkill ? <><strong>{selectedSkill.name}</strong><span>{selectedSkill.detail}</span></> : <span>Select a skill icon to explore the tools I use to build full-stack applications.</span>}
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.scroll_hint} aria-hidden="true"><span /> SCROLL TO EXPLORE</div>
        </section>
    );
};

export default HeroSection;
