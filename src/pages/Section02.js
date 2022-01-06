import React from "react";
import "../resource/css/common.css";
import Logo from '../resource/img/logo_w.png';
import style from "../resource/css/style.module.css";

function Section02() {
    return (
        <>
            <section className={`${style.section_02} ${style.main_section}`}>
                <div className={style.cont_box}>
                    <div className={style.img_box}>
                        <img src={Logo}></img>
                    </div>
                    <div className={style.txt_box}>
                        <ul>
                            <li className={style.li_tit}>경력사항</li>
                            <li className={style.dots_w}>2021.06 ~ 2021.12 국민권익위원회 홈페이지·업무포털 전면개편 사업 참여</li>
                            <li className={style.dots_w}>2020.12 ~ 2021.02 부패방지 종합정보시스템 구축3단계 사업 참여</li>
                            <li className={style.dots_w}>2020.04 ~ 2020.10 SBS아카데미 스마트기기 UXUI디자인 양성과정</li>
                            <li className={style.dots_w}>2009.03 ~ 2015.02 배재대학교 칠예과 졸업</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section02;