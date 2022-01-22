import React, { useState, useEffect } from 'react';

export const ScrollMove = () => {
    const [scrollMV, setScrollMV] = useState({});

    useEffect(() => {
        const scrollTop = h => {
            const windowP_T = h.scrollTop;
            
            setScrollMV({h});
        };
        document.addEventListener("click",scrollTop);
    })
    return scrollMV
}