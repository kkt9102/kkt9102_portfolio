import { useState, useEffect } from 'react';

export const useMousePosition = () => {
    const [MousePos, setMousePos] = useState({});
        useEffect(() => {
            const getMousePos = e => {
                const x = e.clientX;
                const y = e.clientY;
                setMousePos({x, y});
        };
        document.addEventListener("mousemove",getMousePos);
        // return function cleanup() {
            return () => {
            document.removeEventListener("mousemove", getMousePos);
        }
    })
    return MousePos;
}