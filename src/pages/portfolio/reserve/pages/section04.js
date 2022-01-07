import React from "react";
import style from '../resource/css/reserve_style.module.css';
import sc_4_tit from '../resource/img/sc_4_tit.png';
import StoreMap from "./include/kakomap";


function Section04() {
    const storeCount = 22;
    return (
        <>
            <section id={style.section_04}>
                <div className={style.con}>
                    <img src={sc_4_tit} className={style.sc_tit_img}></img>
                    <div className={style.nav_info}>전국의 스타벅스 리저브 매장 <span className={style.count_num}>{storeCount}</span>곳을 확인해 보세요!</div>
                    <StoreMap />
                </div>
            </section>
        </>
    )
}

export default Section04;