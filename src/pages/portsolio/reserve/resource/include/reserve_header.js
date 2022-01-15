import React from "react";
import style from "../css/Reserve.module.css";

function R_Header() {
    return(
        <>
            <header className={`${style.top_menu} fixed`}>
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