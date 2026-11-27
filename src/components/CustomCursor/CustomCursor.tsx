import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

const interactiveSelector = 'a, button, [role="button"], .clickable, .certification_item';

const CustomCursor: React.FC = () => {
    const [hovering, setHovering] = useState(false);
    const [hasPosition, setHasPosition] = useState(false);
    const hasPositionRef = useRef(false);
    const x = useSpring(useMotionValue(-100), { stiffness: 520, damping: 42, mass: 0.22 });
    const y = useSpring(useMotionValue(-100), { stiffness: 520, damping: 42, mass: 0.22 });

    useEffect(() => {
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
        if (!finePointer.matches) return;

        const onPointerMove = (event: PointerEvent) => {
            if (!hasPositionRef.current) {
                x.jump(event.clientX);
                y.jump(event.clientY);
                hasPositionRef.current = true;
                setHasPosition(true);
                return;
            }
            x.set(event.clientX);
            y.set(event.clientY);
        };
        const onPointerOver = (event: PointerEvent) => {
            setHovering((event.target as HTMLElement | null)?.closest(interactiveSelector) !== null);
        };
        const onPointerOut = (event: PointerEvent) => {
            const from = (event.target as HTMLElement | null)?.closest(interactiveSelector);
            const to = (event.relatedTarget as HTMLElement | null)?.closest(interactiveSelector);
            if (from && !to) setHovering(false);
            if (!from && to) setHovering(true);
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerover', onPointerOver);
        document.addEventListener('pointerout', onPointerOut);
        return () => {
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerover', onPointerOver);
            document.removeEventListener('pointerout', onPointerOut);
        };
    }, [x, y]);

    return (
        <motion.div
            className={`${styles.customCursor} ${hovering ? styles.hovering : ''}`}
            style={{ x, y }}
            initial={false}
            animate={{ opacity: hasPosition ? 1 : 0 }}
            transition={{ duration: .3, ease: 'easeOut' }}
            aria-hidden="true"
        >
            <span className={styles.innerDot} />
        </motion.div>
    );
};

export default CustomCursor;
