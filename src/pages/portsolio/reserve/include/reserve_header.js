import React,{useState, useEffect}  from "react";
import style from "../resource/css/Reserve.module.css";

function R_Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return(
        <>
            <header className={`${scrollPosition < 100 ? "origin" : "change"} ${style.top_menu} fixed`}>
                <nav>
                    <ul className="flex flex_jc_sb">
                        <li className="flex flex_ai_c">HOME</li>
                        <li className="flex flex_ai_c">WHAT'S RESERVE</li>
                        <li className="flex flex_ai_c">EXTRACTION</li>
                        <li className="flex flex_ai_c">COFFEE</li>
                        <li className="flex flex_ai_c">LOACTION</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default R_Header;