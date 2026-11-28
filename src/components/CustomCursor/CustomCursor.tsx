import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

const interactiveSelector = 'a, button, [role="button"], .clickable, .certification_item';
const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof Element && target.closest(interactiveSelector) !== null;

const CustomCursor: React.FC = () => {
    const [hovering, setHovering] = useState(false);
    const [hasPosition, setHasPosition] = useState(false);
    const hasPositionRef = useRef(false);
    const x = useSpring(useMotionValue(-100), { stiffness: 520, damping: 42, mass: 0.22 });
    const y = useSpring(useMotionValue(-100), { stiffness: 520, damping: 42, mass: 0.22 });

    useEffect(() => {
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!finePointer.matches || reducedMotion.matches) return;

        document.documentElement.classList.add(styles.cursor_active);

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
            setHovering(isInteractiveTarget(event.target));
        };
        const onPointerOut = (event: PointerEvent) => {
            const from = isInteractiveTarget(event.target);
            const to = isInteractiveTarget(event.relatedTarget);
            if (from !== to) setHovering(to);
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerover', onPointerOver);
        document.addEventListener('pointerout', onPointerOut);
        return () => {
            document.documentElement.classList.remove(styles.cursor_active);
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
            <span className={styles.cursorHalo} />
            <span className={styles.innerDot} />
            <span className={styles.cursorLabel}>VIEW</span>
        </motion.div>
    );
};

export default CustomCursor;
