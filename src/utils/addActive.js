import { useState, useEffect } from "react";

export const Actives = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    useEffect(() => {
        document.onclick("scroll",toggleClass);
        return () => {
            document.onclick("scroll",toggleClass);
        }
    })
    return {isActive};
}