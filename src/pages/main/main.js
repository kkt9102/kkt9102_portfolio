import React from "react";
import '../../resource/css/common.css';
import style from '../../resource/css/main_style.module.css';
import Profil from "./profil";
import WebWork from "./web_work";


function Main() {
    const Scroll_move = 'test';

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
                <div className={style.con}>
                    <div className={style.main_deco}>
                        <div className={style.main_tit}>kkt9102</div>
                        <div className={style.main_sub_tit}>Portfolio</div>
                    </div>
                </div>
            </section>
            <Profil />
            <WebWork />
        </div>
    )
}

export default Main;