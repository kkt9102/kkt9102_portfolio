import { useState, useEffect, Component } from "react";
import '../../resource/css/common.css';
import $, { event } from "jquery";
import { MousePosition } from "../../utils/mosuePosition";
import style from '../../resource/css/main_style.module.css';
import Profil from "./profil";
import WebWork from "./web_work";


function Main() {
    const {x} = MousePosition();
    const BgStyle = {
        width: x,
        transition: 0.1 + 's',
        transitionDuration: 0.2 + 's'
    }
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
                <div className={`${style.sc_01_bg} absolute`} style={BgStyle}>
                </div>
                <div className={style.con}>
                    <div className={style.main_deco}>
                        <div className={style.main_tit}>kkt9102</div>
                        <div className={style.main_sub_tit}>Portfolio</div>
                    </div>
                </div>
            </section>
            <Profil />
            <WebWork />
            {/* <button onClick={moveToTop}>상단으로</button> */}
        </div>
    )
}

export default Main;