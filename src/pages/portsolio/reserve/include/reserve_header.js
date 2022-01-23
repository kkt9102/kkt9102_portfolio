import React,{useState, useEffect}  from "react";
import { Link } from 'react-scroll';
import style from "../resource/css/Reserve.module.css";

function RHeader() {
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
                        <Link to="re_sc_1" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">HOME</li>
                        </Link>
                        <Link to="re_sc_2" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">WHAT'S RESERVE</li>
                        </Link>
                        <Link to="re_sc_3" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">EXTRACTION</li>
                        </Link>
                        <Link to="re_sc_4" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">COFFEE</li>
                        </Link>
                        <Link to="re_sc_5" spy={true} smooth={true}>
                            <li className="flex flex_ai_c">LOACTION</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default RHeader;