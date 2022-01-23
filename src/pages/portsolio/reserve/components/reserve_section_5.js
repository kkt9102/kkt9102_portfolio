import React from "react";
import style from "../resource/css/Reserve.module.css";

import S_5_tit from "../resource/img/section_5_tit.png";

const ReserveSC5 = () => {
    return(
        <>
            <section id={style.section_5} className={`${style.section} re_sc_5`}>
                <div className={style.con}>
                    <div className={`${style.section_tit} flex flex_jc_c`}>
                        <img src={S_5_tit} alt="리저브 매장 RESERVE™ LOCATION"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC5;