import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './WorkExperienceSection.module.css';

const experiences = [
    {
        role: 'AI Application Developer & Project Lead',
        company: 'Skillement.ai',
        date: 'Aug 2025 – Present',
        details: [
        'Implement role-based access control in a multi-tenant platform using TypeScript, Vite, and Supabase edge functions, designing user roles, permissions, and policies to ensure each tenant’s data and features are properly isolated and secured.',
        'Developed the Quizzing Engine for AIQ and AICK tests, creating assessments with questions randomized from 7 sets and enforcing testing restrictions like cursor actions and movement and window activity using TypeScript, React, and Vite.',
        'Built member and sponsor dashboards using React, TypeScript, and Supabase Edge Functions. Member dashboards display assessment and questionnaire results; sponsor dashboards manage member uploads with company pilot generation, assessment reminders, and deadlines. Implemented email notifications via Amazon SES with temporary-password sign-in.',
        'Designed and optimized PostgreSQL schemas, including schema normalization, foreign key constraints, composite and partial indexes, and Row-Level Security (RLS) policies to enhance query efficiency, performance, and data integrity.',
        ],
    },
];

const WorkExperienceSection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (titleRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        setUnderlineWidth(titleWidth + 50);
        }
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
        hover: { scale: 1.02, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
    };

    return (
        <motion.section
        className={styles.work_section}
        id="work-experience"
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        >
        <div className={styles.work_container}>
            <div className={styles.section_title}>
            <h2 className={styles.title} ref={titleRef}>
                Work Experience
            </h2>
            <motion.div
                className={styles.underline}
                initial={{ width: 0 }}
                animate={{ width: isInView ? underlineWidth : 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            />
            </div>

            <div className={styles.experience_list}>
            {experiences.map((exp, index) => (
                <motion.div
                key={index}
                className={styles.experience_card}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                <div className={styles.card_header}>
                    <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    </div>
                    <span className={styles.date}>{exp.date}</span>
                </div>
                <ul className={styles.details}>
                    {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>
                </motion.div>
            ))}
            </div>
        </div>
        </motion.section>
    );
};

export default WorkExperienceSection;
