import React from "react";
import style from '../../resource/css/reserve_style.module.css';

function Header() {
    return (
        <>
            <nav className={`${style.header_menu} fixed`}>
                <ul className="flex flex_jc_sa">
                    <li className="flex_ai_c">Home</li>
                    <li className="flex_ai_c">WHAT'S RESERVE</li>
                    <li className="flex_ai_c">EXTRACION</li>
                    <li className="flex_ai_c">COFFEE</li>
                    <li className="flex_ai_c">LOCATION</li>
                </ul>
            </nav>
        </>
    )
}

export default Header;