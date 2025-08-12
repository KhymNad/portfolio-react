import React, { useEffect, useState, useRef } from "react";
import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [hovering, setHovering] = useState(false);
    const [dotOffset, setDotOffset] = useState({ x: 0, y: 0 });
    const lastPosition = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - lastPosition.current.x;
            const dy = e.clientY - lastPosition.current.y;
            lastPosition.current = { x: e.clientX, y: e.clientY };

            // Normalize velocity so it’s never more than ~6px offset
            const length = Math.sqrt(dx * dx + dy * dy) || 1;
            const maxOffset = 6;
            setDotOffset({
                x: (dx / length) * maxOffset,
                y: (dy / length) * maxOffset
            });

            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, .clickable, .certification_item")) {
                setHovering(true);
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, .clickable, .certification_item")) {
                setHovering(false);
            }
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseover", onMouseOver);
        document.addEventListener("mouseout", onMouseOut);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", onMouseOver);
            document.removeEventListener("mouseout", onMouseOut);
        };
    }, []);

    return (
        <div
            className={`${styles.customCursor} ${hovering ? styles.hovering : ""}`}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
            }}
        >
            <div
                className={styles.innerDot}
                style={{
                    transform: `translate(${dotOffset.x}px, ${dotOffset.y}px)`
                }}
            />
        </div>
    );
};

export default CustomCursor;
