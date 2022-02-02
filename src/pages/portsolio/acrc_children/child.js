import React from "react";
import style from "../../../resource/css/main_style.module.css";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

// img
import child_mian from "../../../resource/img/acrc_child_main.png";

const AcrcChild = () => {
    return (
        <>
            <ScrollToTop/>
            <HomeMV/>
            <div className={`${style.child} ${style.portfolio_info}`}>
                <div className={style.con2}>
                    <h2 className={style.page_tit}>국민권익위원회 어린이 홈페이지</h2>
                    <div className={`${style.cont_box} ${style.cont_1}`}>
                        <div className={style.sub_tit}>국민권익위원회 홈페이지·업무포털 전면개편 사업</div>
                    
                        <div className={style.sub_txt}>
                            <ul>
                                <li>국민권익위원회 홈페이지·업무포털 전면개편 사업에 포함되는 사업이었으며</li>
                                <li>그 중 어린이 홈페이지 개편 부분 퍼블리싱을 진행했습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.cont_2}>
                        <div className={style.txt_box}>
                            <h4>프로젝트 참여 기간 : 2021.06 ~ 2022. 02</h4>
                            <ul className={`${style.percent}flex flex_wrap_wrap`}>
                                <li>어린이 홈페이지 내 컨텐츠 페이지 퍼블리싱 (100%)</li>
                                <li>어린이 홈페이지 내 퀴즈로 배워요 퍼블리싱 및 JavaScript (100%)</li>
                            </ul>
                            <ul className={style.link_box}>
                                <li className={style.target_move}><a href="https://www.acrc.go.kr/child/" target="_blank" title="국민권익위원회 어린이 홈페이지 새창으로 바로가기" rel="noreferrer">국민권익위원회 홈페이지 바로가기 (https://www.clean.go.kr)</a></li>
                            </ul>
                        </div>
                        <div className={style.img_box}>
                        <ul className={style.img_list}>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={child_mian} alt="국민권익위원회 어린이 홈페이지 메인"></img>
                                </div>
                                <div className={style.txt_box}>

                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcrcChild;