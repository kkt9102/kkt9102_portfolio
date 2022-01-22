import React from "react";
import style from "../resource/css/Reserve.module.css";

import S_4_tit from "../resource/img/section_4_tit.png";

const ReserveSC4 = () => {
    return(
        <>
            <section id={style.section_4} className={style.section}>
                <div className={style.con}>
                    <div className={`${style.section_tit} flex flex_jc_c`}>
                        <img src={S_4_tit} alt="리저브 원두 RESERVE™ COFFEE"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReserveSC4;