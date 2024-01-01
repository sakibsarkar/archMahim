import "./Cursor.css";
import { useEffect, useState } from "react";

// CursorFollower.js



const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX + 10, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div style={{ transform: `translate(${position.x}px,${position.y}px)` }} className="cursor" />;
};

export default Cursor;
