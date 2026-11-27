import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SplashScreen.module.css";

interface SplashScreenProps {
    onTitleReady: () => void;
    onFinish: () => void;
}

const splitText = (text: string) => text.split("");

export default function SplashScreen({ onTitleReady, onFinish }: SplashScreenProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            onTitleReady();
            setVisible(false);
        }, 2050);
        return () => {
            clearTimeout(titleTimer);
        };
    }, [onTitleReady]);

    const name = "Khym Nad.";
    const subtitle = "Full-Stack Developer";

    // Variants for letters - typewriter effect
    const letterVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <AnimatePresence onExitComplete={onFinish}>
        {visible && (
            <motion.div
            className={styles.splash_container}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
            <motion.p
                className={styles.splash_kicker}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45, ease: 'easeOut' }}
            >SOFTWARE DEVELOPER <span /> CALGARY, AB</motion.p>
            <motion.h1 className={styles.splash_text} layoutId="portfolio-name" layout="position" transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
                {splitText(name).map((char, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.085, duration: 0.05, ease: 'linear' }}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {char}
                </motion.span>
                ))}
            </motion.h1>

            <motion.h2
                className={styles.splash_subtitle}
                layoutId="portfolio-role"
                layout="position"
            >
                {splitText(subtitle).map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.9 + index * 0.045, duration: 0.04, ease: 'linear' }}
                        style={{ display: 'inline-block', whiteSpace: 'pre' }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h2>
            <motion.div className={styles.loading_track} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, delay: .4, ease: 'easeInOut' }} />
            </motion.div>
        )}
        </AnimatePresence>
    );
}
