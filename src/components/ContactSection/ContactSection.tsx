import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './ContactSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import resumePdf from '../../assets/Khym_Nad_Full_Stack_Developer_Resume.pdf';

const contactItems = [
    {
        icon: faEnvelope,
        text: 'khymnad@gmail.com',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=khymnad@gmail.com',
    },
    {
        icon: faSquareLinkedin,
        text: 'LinkedIn',
        link: 'https://linkedin.com/in/khym-nad-76b262235',
    },
    {
        icon: faSquareGithub,
        text: 'Github',
        link: 'https://github.com/khymnad',
    },
    {
        icon: faFileArrowDown,
        text: 'Download Resume',
        link: resumePdf,
        download: true,
    },
];

const ContactSection: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (titleRef.current) {
            const titleWidth = titleRef.current.offsetWidth;
            setUnderlineWidth(titleWidth + 50);
        }
    }, []);

    return (
        <>
            <motion.section
                className={styles.contact_section}
                id="contact"
                ref={sectionRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className={styles.project_container}>
                    <div className={styles.main_content}>
                        <div className={styles.content_left}>
                            <motion.div
                                className={styles.section_title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <div>
                                    <h2 ref={titleRef} className={styles.title}>Contact</h2>
                                    <motion.div
                                        className={styles.underline}
                                        initial={{ width: 0 }}
                                        animate={{ width: isInView ? underlineWidth : 0 }}
                                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                                    />
                                </div>
                                <p className={styles.subtitle}>Get in touch, let's connect and collaborate!</p>
                            </motion.div>
                            <div className={styles.contact_cards}>
                                {contactItems.map(({ icon, text, link, download }, index) => (
                                    <motion.a
                                        key={index}
                                        href={link}
                                        className={styles.contact_card}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download={download}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.1,
                                            ease: 'easeInOut',
                                            delay: index * 0.05
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <FontAwesomeIcon icon={icon} className={styles.icon} />
                                        <span className={styles.contact_card_text}>{text}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className={styles.content_right}>
                            <div className={styles.resume_viewer}>
                                <motion.img
                                    src="/images/resume/resume1.png"
                                    alt="Resume Page 1"
                                    className={styles.resume_image}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedImage('/images/resume/resume1.png')}
                                />
                                <motion.img
                                    src="/images/resume/resume2.png"
                                    alt="Resume Page 2"
                                    className={styles.resume_image}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedImage('/images/resume/resume2.png')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* === Modal Viewer === */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className={styles.modal_overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Full-size Resume"
                            className={styles.modal_image}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()} // prevent close on image click
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactSection;
