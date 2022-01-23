import React from "react";
import style from "../resource/css/Reserve.module.css";
import ExtrantionList from "./extraction";

import S_3_tit from "../resource/img/section_3_tit.png";

const ReserveSC3 = () => {
    return(
        <>
        <section id={style.section_3} className={`${style.section} re_sc_3`}>
            <div className={style.con}>
                <div className={`${style.section_tit} flex flex_jc_c`}>
                    <img src={S_3_tit} alt="리저브 추출방식 RESERVE™ EXTRACTION"></img>
                </div>
                <div className={style.cont_1}>
                    <ExtrantionList/>
                </div>
            </div>
        </section>
        </>
    )
}

export default ReserveSC3;