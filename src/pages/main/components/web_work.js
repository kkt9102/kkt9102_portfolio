import React from "react";
import style from "../../../resource/css/main_style.module.css";
import { BrowserRouter, Link } from "react-router-dom";

const WebWork = () => {

    return (
        <>
        <section id={style.section_03} className={`${style.section} main_sc_3`}>
            <div className={style.con}>
                <div className={`${style.cont_box}`}>
                    <div className={`${style.sc_tit} flex flex_jc_c`}>Web Work</div>
                    <ul className={`${style.web_work} flex flex_wrap_wrap`}>
                        <li>
                        <Link to ="/Reserve" title="스타벅스 리저브 리디자인 소개페이지 바로가기">
                            <div className={`${style.link_btn} ${style.reserve}`}></div>
                            <div className={style.link_txt}><span className="flex flex_jc_c">스타벅스 리저브</span> (Re:Design)</div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/clean" title="청렴포털 작업내역 소개페이지 바로가기">
                            <div className={`${style.link_btn} ${style.clean}`}></div>
                            <div className={style.link_txt}><span className="flex flex_jc_c">청렴포털</span> 홈페이지</div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/Acrc" title="국민권익위원회 국문 홈페이지 작업내역 소개페이지 바로가기">
                            <div className={`${style.link_btn} ${style.acrc}`}></div>
                            <div className={style.link_txt}><span className="flex flex_jc_c">국민권익위원회</span> 국문 홈페이지</div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/AcrcChild" title="국민권익위원회 어린이 홈페이지 작업내역 소개페이지 바로가기">
                            <div className={`${style.link_btn} ${style.acrc_child}`}></div>
                            <div className={style.link_txt}><span className="flex flex_jc_c">국민권익위원회</span> 어린이 홈페이지</div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/Prtl" title="국민권익위원회 인트라넷 홈페이지 작업내역 소개페이지 바로가기">
                            <div className={`${style.link_btn} ${style.acrc_child}`}></div>
                            <div className={style.link_txt}><span className="flex flex_jc_c">국민권익위원회</span> 인트라넷 홈페이지</div>
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