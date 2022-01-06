import React from "react";
import style from '../resource/css/reserve_style.module.css';
import sc_4_tit from '../resource/img/sc_4_tit.png';

function Section04() {
    return (
        <>
            <section id={style.section_04}>
                <div className={style.con}>
                    <img src={sc_4_tit} className={style.sc_tit_img}></img>
                </div>
            </section>
        </>
    )
}

export default Section04;