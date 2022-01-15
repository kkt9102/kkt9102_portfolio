import React from "react";
import style from "./resource/css/Reserve.module.css";
import R_Header from "./resource/include/reserve_header";

// img
import Main_img from "./resource/img/section_back_img_1.jpg";
import Main_logo from "./resource/img/main_logo.png";

function StarbucksReserve() {

    return(
        <>
            <div className={style.reserve}>
                <R_Header/>
                <section id={style.section_1} className={style.section}>
                    <div className={style.con}>
                        <div className={`${style.cont_1} flex flex_jc_c`}>
                            <img src={Main_logo} className={style.main_logo}></img>
                            <div className={`${style.sub_txt} ${style.font_P} flex flex_jc_c`}>스타벅스 리저브™ 매장에서 프리미엄 커피를 만나다</div>
                            <div className={`${style.sub_tit} ${style.font_P} flex flex_jc_c`}>차별화된 최상의 스타벅스 경험을 제공합니다.</div>
                        </div>
                    </div>
                </section>

                <section id={style.section_2} className={style.section}>
                    <div className={style.con}>

                    </div>
                </section>
            </div>
        </>
    )
}


export default StarbucksReserve;