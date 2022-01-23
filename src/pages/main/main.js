import React from "react";

import '../../resource/css/common.css';
import style from '../../resource/css/main_style.module.css';
import $, { event } from "jquery";

import { useMousePosition } from "../../utils/mosuePosition";
import { useScroll } from "../../utils/scrollMove";

import Profil from "./components/profil";
import WebWork from "./components/web_work";
import Contect from "./components/contect";
import Footer from "./components/footer";



function Main() {
    const {x} = useMousePosition();
    const BgStyle = {
        width: x,
        transition: 0.3 + 's'
    }
    const {scrollMV} = useScroll();
    return (
        
        <div id={style.main_page}>
            <header className={`${style.main_header} fixed`}>

                <nav>
                    <ul className="flex flex_jc_e">
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Home</span></li>
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Profil</span></li>
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Web Work</span></li>
                        <li className="flex flex_ai_c" onClick={()=>{}}><span>Contact</span></li>
                    </ul>
                </nav>
            </header>
            <section id={style.section_01} className={style.section}>
                {/* <div className={`${style.sc_01_bg} absolute`} style={BgStyle}>
                </div> */}
                <div className={style.con}>
                    <div className={style.main_deco}>
                        <div className={style.main_tit}>kkt9102</div>
                        <div className={style.main_sub_tit}>Portfolio</div>
                    </div>
                </div>
            </section>
            <Profil />
            <WebWork />
            <Contect />
            <Footer />
            {/* <button onClick={moveToTop}>상단으로</button> */}
        </div>
    )
}

export default Main;