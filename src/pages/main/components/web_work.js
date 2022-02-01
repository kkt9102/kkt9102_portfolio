import React from "react";
import style from "../../../resource/css/main_style.module.css";
import { BrowserRouter, Link } from "react-router-dom";
import AcrcMain from '../../../resource/img/acrc_main.png';

const WebWork = () => {

    return (
        <>
        <section id={style.section_03} className={`${style.section} main_sc_3`}>
            <div className={style.con}>
                <div className={`${style.cont_box}`}>
                    <div className={`${style.sc_tit} flex flex_jc_c`}>Web Work</div>
                    <ul className={`${style.web_work} flex flex_wrap_wrap`}>
                        <li>
                        <Link to ="/Reserve" target="_blank">
                            <div className={`${style.link_btn} ${style.reserve}`}></div>
                            <div className={style.link_txt}>스타벅스 리저브 (Re:Design)</div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/clean">
                            <div className={`${style.link_btn} ${style.clean}`}></div>
                            <div className={style.link_txt}>청렴포털 홈페이지</div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/Acrc">
                            <div className={`${style.link_btn} ${style.acrc}`}></div>
                            <div className={style.link_txt}>국민권익위원회 국문 홈페이지</div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/Acrc">
                            <div className={`${style.link_btn} ${style.acrc}`}></div>
                            <div className={style.link_txt}>국민권익위원회 어린이 홈페이지</div>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default WebWork;