import React from "react";

function Header() {
    return (
        <>
            <nav className="header_menu fixed">
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