import React from "react";
import logo_s from '../resource/img/logo_s.png';
import Ex_pop from './include/extraction_popup';
import sc_3_bt_bg from '../resource/img/sc_3_bt_bg.png';
import style from '../resource/css/reserve_style.module.css';

function Section03() {
    return (
        <>
        <section id={style.section_03}>
            <div className={style.con}>
                <div className={style.sc_tit}><img src={logo_s}></img>리저브만의 특별한 다섯가지 추출방식</div>
                <div className={style.cont_box}>
                    <Ex_pop />
                </div>
                <div className={`${style.img_box} ${style.btm_bg}`}>
                    <img src={sc_3_bt_bg}></img>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section03;