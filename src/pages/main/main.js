import React from "react";
import '../../resource/css/common.css';
import style from '../../resource/css/main_style.module.css';
import Profil from "./profil";
import WebWork from "./web_work";


function Main() {
    const Alert = 'test';

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
            <section id={style.section_01}>
                <div>테스트</div>
            </section>
            <Profil />
            <WebWork />
        </div>
    )
}

export default Main;