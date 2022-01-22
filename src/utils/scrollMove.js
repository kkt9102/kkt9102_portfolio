import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollMV, setScrollMV] = useState(0);

    const scrolling = () => {
        setScrollMV(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll",scrolling);
        return () => {
            window.removeEventListener("scroll",scrolling);
        }
    })
    return {scrollMV};
}