import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
    const { pathName } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    return null;
}