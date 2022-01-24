import React from "react";
import style from "../../../resource/css/main_style.module.css";
import { BrowserRouter, Link } from "react-router-dom";

const WebWork = () => {

    return (
        <>
        <section id={style.section_03} className={`${style.section} main_sc_3`}>
            <div className={style.con}>
                <div className={`${style.cont_box} flex flex_wrap_wrap`}>
                    <div className={`${style.sc_tit} flex flex_jc_c`}>Web Work</div>
                    <ul className={`${style.web_work} flex flex_wrap_wrap`}>
                        <li>
                        <Link to ="/Reserve" target="_blank">
                            <div className={style.link_btn}>
                                스타벅스 리저브 (Re:Design)
                            </div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/clean">
                            <div className={style.link_btn}>
                                부패방지 3단계
                            </div>
                        </Link>
                        </li>
                        <li>
                        <Link to ="/Acrc">
                            <div className={style.link_btn}>
                                국민권익위원회 홈페이지·업무포털 전면개편
                            </div>
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