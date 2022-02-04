import React from "react";
import style from "../../../resource/css/main_style.module.css";
import StarbucksReserve from "./StarbucksReserve";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

// img
import info_bg1 from '../../../resource/img/reserve/reserve_3d_1.png';
import info_bg2 from '../../../resource/img/reserve/reserve_3d_2.png';
import info_bg3 from '../../../resource/img/reserve/reserve_3d_3.png';
import info_bg4 from '../../../resource/img/reserve/reserve_3d_4.png';

function Reserve(){


    return(
        <>
            {/* <StarbucksReserve/> */}
            <ScrollToTop/>
            <HomeMV/>
            <div className={`${style.reserve} ${style.portfolio_info} relative`}>
                <div className={style.con2}>
                    <h2 className={style.page_tit}>스타벅스 리저브 (Re:Design)</h2>
                    <div className={`${style.cont_box} ${style.cont_1}`}>
                        <div className={style.sub_tit}>스타벅스 리저브 홈페이지 (Re:Design)</div>
                        <div className={`${style.img_box} ${style.img_1}`}>
                            <img src={info_bg1} alt="스타벅스 리저브 리:디자인 홈페이지"></img>
                        </div>
                        <div className={style.sub_txt}>
                            <ul>
                                <li>개인적으로 좋아하는 스타벅스 홈페이지 중 '리저브' 홈페이지를 리디자인 한 홈페이지 입니다.</li>
                                <li>스타벅스 리저브는 스타벅스 안의 또다른 스타벅스라는 생각으로 접근하였습니다.</li>
                                <li>홈페이지의 용도는 기존 스타벅스 홈페이지와 별개로 오직 스타벅스 리저브만을 소개하는 홈페이지로 기획하고 제작하였습니다.</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${style.cont_box} ${style.cont_2}`}>
                        <div className={style.sub_tit}>디자인 컨셉</div>
                        <div className={style.sub_txt}>
                            <ul>
                                <li>기존의 스타벅스 로고와 같은 색상을 사용하여 디자인을 하지 않고</li>
                                <li>리저브 로고 색상을 메인으로 사용하였습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserve;