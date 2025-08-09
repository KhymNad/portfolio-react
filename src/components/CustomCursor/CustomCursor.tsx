import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
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
        style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            transition:
            "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
            width: hovering ? 30 : 60,
            height: hovering ? 30 : 60,
            borderRadius: "50%",
            backgroundColor: hovering ? "rgba(255,255,255,0.9)" : "transparent",
            border: "2px solid white",
            boxShadow: hovering ? "0 0 8px 2px white" : "none",
            zIndex: 9999,
            mixBlendMode: "difference",
        }}
        />
    );
};

export default CustomCursor;
