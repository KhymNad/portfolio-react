import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './SkillsSection.module.css';

const languages = [
    'JavaScript', 'TypeScript', 'Python', 'C#', 'C++', 'Java',
    'React', 'Next.js', 'Django', 'Blazor',
];

const tools = [
    'Git', 'Docker', 'Firebase', 'MongoDB', 'SQL Server',
    'VS Code', 'GitHub', 'Figma', 'Netlify', 'Vercel',
];

const SkillsSection = () => {

    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (titleRef.current && isInView) {
            const titleWidth = titleRef.current.offsetWidth;
            setUnderlineWidth(titleWidth + 50);
        }
    }, [isInView]);

    return (
        <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className={styles.skills_section}
        ref={sectionRef}
        >
            <div className={styles.project_container}>
                <div className={styles.section_title}>
                    <h2 className={styles.title} ref={titleRef}>
                        Tech Stack
                    </h2>
                    <motion.div
                        className={styles.underline}
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? underlineWidth : 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    />
                </div>

                <div className={styles.category}>
                    <h3 className={styles.category_title}>Languages & Frameworks</h3>
                    <div className={styles.skill_grid}>
                        {languages.map((skill, index) => (
                            <div key={index} className={styles.skill_card}>
                            {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.category}>
                    <h3 className={styles.category_title}>Tools & Platforms</h3>
                    <div className={styles.skill_grid}>
                        {tools.map((skill, index) => (
                            <div key={index} className={styles.skill_card}>
                            {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;
