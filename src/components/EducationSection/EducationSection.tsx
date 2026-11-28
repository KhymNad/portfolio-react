import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./EducationSection.module.css";

const EducationSection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        const measure = () => {
        if (titleRef.current) {
            setUnderlineWidth(titleRef.current.offsetWidth + 50);
        }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <motion.section
            className={styles.educationSection}
            id="education"
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.project_container}>
                <div className={styles.section_title}>
                    <h2 className={styles.title} ref={titleRef}>
                        Education
                    </h2>
                    <motion.div
                        className={styles.underline}
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? underlineWidth : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    />
                </div>

                <motion.div
                    className={styles.education_card}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                >
                    <img
                        className={styles.school_crest}
                        src="https://www.chem.ualberta.ca/~massspec/images/UASmall_heritage1.jpg"
                        alt="University of Alberta crest"
                    />
                    <h3>BSc - Computing Science, Minor in Mathematics</h3>
                    <h4>University of Alberta</h4>
                    <p>
                        <em>Edmonton, AB | Sep. 2021 - Aug. 2025</em>
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default EducationSection;
