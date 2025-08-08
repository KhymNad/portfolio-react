import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SplashScreen.module.css";

interface SplashScreenProps {
    onFinish: () => void;
}

const splitText = (text: string) => text.split("");

export default function SplashScreen({ onFinish }: SplashScreenProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    const name = "Khym Nad";
    const subtitle = "Full-Stack Developer";

    // Variants for letters - typewriter effect
    const letterVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <AnimatePresence onExitComplete={onFinish}>
        {visible && (
            <motion.div
            className={styles.splash_container}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
            <motion.h1 className={styles.splash_text}>
                {splitText(name).map((char, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.12, duration: 0.4, ease: "easeOut" }}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {char}
                </motion.span>
                ))}
            </motion.h1>

            <motion.h2
                className={styles.splash_subtitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: name.length * 0.12 + 0.5, duration: 0.8, ease: "easeOut" }}
            >
                {subtitle}
            </motion.h2>
            </motion.div>
        )}
        </AnimatePresence>
    );
}
