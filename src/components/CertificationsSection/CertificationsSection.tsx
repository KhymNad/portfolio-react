import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CertificationsSection.module.css';

const CertificationsSection: React.FC = () => {
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const certificates = [
        '../../images/certificates/board_infinity/boardInfinity_FullStackDeveloper.png',
        '../../images/certificates/board_infinity/boardInfinity_backEndDevelopment_fullStack.png',
        '../../images/certificates/board_infinity/boardInfinity_frontendDevelopment_react.png',
        '../../images/certificates/microsoft/microsoft_.NetBackEndDevelopment.png',
        '../../images/certificates/microsoft/microsoft_databaseIntegrationAndManagement.png',
        '../../images/certificates/microsoft/microsoft_foundations_fullStack.png'
    ];

    const openZoom = (imgSrc: string) => setZoomedImage(imgSrc);
    const closeZoom = () => setZoomedImage(null);

    return (
        <motion.section
            className={styles.certificationsSection}
            id="certifications"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.project_container}>
                <h2>Certifications</h2>
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
                            className={`${styles.certification_item} clickable`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02, y: -3 }}
                            transition={{ duration: 0.15, ease: 'easeInOut' }} 
                            viewport={{ once: true }}
                            onClick={() => openZoom(imgSrc)}
                        >
                            <img src={imgSrc} alt={`Certificate ${idx + 1}`} />
                        </motion.div>
                    ))}
                </motion.div>
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
                            onClick={e => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default CertificationsSection;
