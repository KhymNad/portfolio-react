import React from 'react';
import { motion } from 'framer-motion';
import styles from './EducationSection.module.css';

const EducationSection: React.FC = () => {
    return (
        <motion.section
            className={styles.educationSection}
            id="education"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.project_container}>
                <motion.div
                    className={styles.education_card}
                    initial={{ opacity: 0, y: 20, rotateX: -5 }}
                    whileHover={{ rotateX: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2>BSc - Computing Science, Minor in Mathematics</h2>
                    <h3>University of Alberta</h3>
                    <p><em>Edmonton, AB | Sep. 2021 - Aug. 2025</em></p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default EducationSection;
