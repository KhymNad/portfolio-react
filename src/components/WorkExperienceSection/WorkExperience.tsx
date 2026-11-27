import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './WorkExperienceSection.module.css';

const experiences = [
    {
        role: 'Software Developer',
        company: 'AbaData',
        date: 'Mar 2026 – Present',
        details: [
        'Improve how FieldOps handles users assigned to multiple organizational hierarchies, addressing gaps in permission-based data visibility and stale or duplicate associations. Use SQL Server, T-SQL, and versioned migrations to support reliable relationship updates and keep access aligned with a user’s assignments.',
        'Support configurable business rules in dynamic forms, where required fields change based on form state. Use TypeScript and DevExpress validation components to shape custom validation behavior that works with existing rules and provides accurate feedback as conditions change.',
        'Maintain database-backed FormBuilder functionality, where form configuration must be retrieved, processed, and packaged consistently. Work with SQL Server, stored procedures, functions, and JSON to support form data workflows and align database changes with application releases.',
        'Investigate data consistency across FieldOps and EmberGO inventory workflows, including links between inventory records and wells and differences in regional scheduling. Use SQL and application data flows to trace mapping and retrieval behavior, and assess geographic data issues in the BC pipeline.',
        ],
    },
    {
        role: 'Full-Stack Developer Co-Op',
        company: 'Meritrium - Skillement.ai',
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
        hover: { y: -3, transition: { duration: 0.2 } },
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
            <p className={styles.eyebrow}>CAREER</p>
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
                <motion.article
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
                </motion.article>
            ))}
            </div>
        </div>
        </motion.section>
    );
};

export default WorkExperienceSection;
