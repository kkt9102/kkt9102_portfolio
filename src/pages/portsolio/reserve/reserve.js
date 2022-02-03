import React from "react";
import style from "../../../resource/css/main_style.module.css";
import StarbucksReserve from "./StarbucksReserve";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

function Reserve(){


    return(
        <>
            {/* <StarbucksReserve/> */}
            <ScrollToTop/>
            <HomeMV/>
            <div className={`${style.child} ${style.portfolio_info}`}>
                <div className={style.con2}>
                    <h2 className={style.page_tit}>스타벅스 리저브 (Re:Design)</h2>
                    <div className={`${style.cont_box} ${style.cont_1}`}>
                        <div className={style.sub_tit}>스타벅스 리저브 홈페이지 (Re:Design)</div>
                    
                        <div className={style.sub_txt}>
                            <ul>
                                <li>개인적으로 좋아하는 스타벅스 홈페이지 중 '리저브' 홈페이지를 리:디자인 한 홈페이지 입니다.</li>
                                <li>스타벅스안의 또다른 스타벅스라는 개념으로 접근하였습니다.</li>
                                <li>홈페이지의 용도는 기존 스타벅스 홈페이지와 별개로 오직 스타벅스 리저브만을 소개하는 홈페이지 입니다.</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserve;