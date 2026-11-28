import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGitAlt, faPython, faAws, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import styles from './WorkExperienceSection.module.css';

type Experience = {
    role: string;
    company: string;
    companyUrl?: string;
    companyIcon?: string;
    date: string;
    stack: string[];
    details: { text: string; tools: string[] }[];
};

const toolIcons: Record<string, React.ReactNode> = {
    'SQL Server': <FontAwesomeIcon icon={faDatabase} />,
    'T-SQL': <FontAwesomeIcon icon={faCode} />,
    Migrations: <FontAwesomeIcon icon={faGitAlt} />,
    TypeScript: <span className={styles.tool_mark}>TS</span>,
    DevExpress: <span className={styles.tool_mark}>DX</span>,
    JSON: <FontAwesomeIcon icon={faCode} />,
    Git: <FontAwesomeIcon icon={faGitAlt} />,
    GIS: <FontAwesomeIcon icon={faDatabase} />,
    Python: <FontAwesomeIcon icon={faPython} />,
    Supabase: <FontAwesomeIcon icon={faDatabase} />,
    React: <FontAwesomeIcon icon={faReact} />,
    Vite: <span className={styles.tool_mark}>V</span>,
    'Amazon SES': <FontAwesomeIcon icon={faAws} />,
    PostgreSQL: <FontAwesomeIcon icon={faDatabase} />,
    SQL: <FontAwesomeIcon icon={faCode} />,
    RLS: <FontAwesomeIcon icon={faMicrosoft} />,
    'Access control': <FontAwesomeIcon icon={faMicrosoft} />,
    'Data integrity': <FontAwesomeIcon icon={faDatabase} />,
    'Conditional validation': <FontAwesomeIcon icon={faCode} />,
    'Dynamic forms': <FontAwesomeIcon icon={faCode} />,
    'GIS data': <FontAwesomeIcon icon={faDatabase} />,
    'Assessment workflows': <FontAwesomeIcon icon={faCode} />,
    'Email automation': <FontAwesomeIcon icon={faAws} />,
    'Edge Functions': <FontAwesomeIcon icon={faCode} />,
    'Schema design': <FontAwesomeIcon icon={faDatabase} />,
    'Query optimization': <FontAwesomeIcon icon={faDatabase} />,
};

const experiences: Experience[] = [
    {
        role: 'Software Developer',
        company: 'AbaData',
        companyUrl: 'https://www.abadata.ca/',
        companyIcon: 'https://www.abadata.ca/images/AbaData-Waypoint-Icon.svg',
        date: 'Mar 2026 – Present',
        stack: ['C#', '.NET', 'SQL', 'Azure', 'React', 'TypeScript', 'JavaScript', 'Git', 'Codex', 'Copilot'],
        details: [
        { text: 'Improve how users with multiple organizational assignments access the right records by refining database relationships and permissions, while resolving outdated or duplicate links.', tools: ['SQL Server', 'T-SQL', 'Access control', 'Data integrity'] },
        { text: 'Build configurable form rules that update required fields and validation as users change their responses, keeping feedback consistent with the form’s current state.', tools: ['TypeScript', 'DevExpress', 'Dynamic forms', 'Conditional validation'] },
        { text: 'Maintain database-backed form workflows so configuration can be stored, retrieved, and packaged consistently across application releases.', tools: ['SQL Server', 'JSON', 'Git'] },
        { text: 'Investigate inconsistencies across operational records by tracing how related inventory, location, and scheduling data is stored and connected.', tools: ['SQL Server', 'GIS', 'GIS data'] },
        ],
    },
    {
        role: 'Full-Stack Developer Co-Op',
        company: 'Meritrium - Skillement.ai',
        date: 'Aug 2025 – Present',
        stack: ['TypeScript', 'JavaScript', 'React', 'Supabase', 'PostgreSQL', 'Git', 'Claude', 'Lovable'],
        details: [
        { text: 'Implement tenant-scoped roles and permissions with Supabase Edge Functions, enforcing separation of platform features and data through application access rules.', tools: ['TypeScript', 'Supabase', 'Edge Functions', 'Git', 'Access control'] },
        { text: 'Develop the AIQ and AICK assessment engine, randomizing questions across seven sets and restricting cursor and window activity during test sessions.', tools: ['React', 'TypeScript', 'Vite', 'Assessment workflows'] },
        { text: 'Build member and sponsor dashboards for assessment results, uploads, pilot generation, reminders, deadlines, and temporary-password sign-in flows.', tools: ['React', 'Supabase', 'Amazon SES', 'Email automation'] },
        { text: 'Normalize PostgreSQL schemas and apply foreign keys, composite and partial indexes, and row-level security to protect tenant data and tune query performance.', tools: ['PostgreSQL', 'SQL', 'RLS', 'Schema design', 'Query optimization', 'Data integrity'] },
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
        viewport={{ once: true, amount: 0.05 }}
        >
        <div className={styles.work_container}>
            <div className={styles.section_title}>
            <h2 className={styles.title} ref={titleRef}>
                Work Experience
            </h2>
            <p className={styles.section_intro}>A closer look at the products, systems, and teams I contribute to.</p>
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
                key={`${exp.company}-${exp.role}`}
                className={styles.experience_card}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                <div className={styles.card_header}>
                    <div className={styles.company_lockup}>
                    {exp.companyUrl ? (
                        <a className={styles.company_mark} href={exp.companyUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit AbaData website">
                            <img src={exp.companyIcon} alt="AbaData" />
                        </a>
                    ) : <span className={styles.company_mark} aria-hidden="true">{exp.company.charAt(0)}</span>}
                    <div>
                        {exp.companyUrl ? <a className={styles.company} href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company} <span aria-hidden="true">↗</span></a> : <p className={styles.company}>{exp.company}</p>}
                        <h3 className={styles.role}>{exp.role}</h3>
                        <span className={styles.date}>{exp.date}</span>
                        <div className={styles.company_stack} aria-label={`${exp.company} technologies`}>
                            {exp.stack.map(technology => <span className={styles.stack_chip} key={technology}>{technology}</span>)}
                        </div>
                    </div>
                    </div>
                    <span className={styles.experience_index} aria-hidden="true">0{index + 1}</span>
                </div>
                <ul className={styles.details}>
                    {exp.details.map((point, i) => (
                    <motion.li key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: index * .08 + i * .06 }} viewport={{ once: true }}>
                        <p>{point.text}</p>
                        <div className={styles.tool_list} aria-label="Tools used">
                            {point.tools.map(tool => <span className={styles.tool_chip} key={tool}>{toolIcons[tool]}<span>{tool}</span></span>)}
                        </div>
                    </motion.li>
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
