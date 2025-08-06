import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EducationSection.module.css';

const EducationSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');
    const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

    // For zoom modal
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const educationRef = useRef<HTMLDivElement>(null);
    const certificationsRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const tabRefs = {
        education: educationRef,
        certifications: certificationsRef,
    };

    useEffect(() => {
        const tabEl = tabRefs[activeTab].current;
        if (tabEl) {
            const { offsetWidth, offsetLeft } = tabEl;
            setUnderlineStyle({ width: offsetWidth + 50, left: offsetLeft });
        }
    }, [activeTab]);

    // Dummy certificate images array (to map on)
    const certificates = Array(6).fill('../../images/certificates/boardInfinity_FullStackDeveloper.png');

    const openZoom = (imgSrc: string) => {
        setZoomedImage(imgSrc);
    };

    const closeZoom = () => {
        setZoomedImage(null);
    };

    return (
        <motion.section
            className={styles.educationSection}
            id="education"
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.project_container}>
                <div className={styles.tabs}>
                    <div
                        ref={educationRef}
                        className={`${styles.tab} ${activeTab === 'education' ? styles.active : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </div>
                    <div
                        ref={certificationsRef}
                        className={`${styles.tab} ${activeTab === 'certifications' ? styles.active : ''}`}
                        onClick={() => setActiveTab('certifications')}
                    >
                        Certifications
                    </div>
                    <motion.div
                        className={styles.underline}
                        animate={{ width: underlineStyle.width, left: underlineStyle.left }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                </div>

                <div className={styles.tab_content}>
                    {activeTab === 'education' ? (
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
                    ) : (
                        <motion.div
                            className={styles.certification_grid}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {certificates.map((imgSrc, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.certification_item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02, y: -3 }}
                                transition={{ duration: 0.15, ease: 'easeInOut' }} // faster and smoother
                                viewport={{ once: true }}
                                onClick={() => openZoom(imgSrc)}
                            >
                                <img src={imgSrc} alt={`Certificate ${idx + 1}`} />
                            </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Zoom modal */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        className={styles.zoomOverlay}
                        onClick={closeZoom}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.75)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 9999,
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.img
                            src={zoomedImage}
                            alt="Zoomed Certificate"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                borderRadius: 12,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                            onClick={e => e.stopPropagation()} // prevent closing modal on image click
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default EducationSection;
