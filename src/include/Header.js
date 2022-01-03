import React from "react";
import Logo from '../resource/img/logo_w.png';



function Header() {
    return (
        <>
            
            <header>
                <nav className="flex flex_jc_sb">
                    <ul className="logo flex flex_ai_c">
                        <li className=""><img src={Logo}></img></li>
                    </ul>
                    <ul className="header_menu_box flex flex_jc_sb">
                        <li className="flex flex_jc_c flex_ai_c"><a><span>Home</span></a></li>
                        <li className="flex flex_jc_c flex_ai_c"><a><span>Home</span></a></li>
                        <li className="flex flex_jc_c flex_ai_c"><a><span>Home</span></a></li>
                        <li className="flex flex_jc_c flex_ai_c"><a><span>Home</span></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;