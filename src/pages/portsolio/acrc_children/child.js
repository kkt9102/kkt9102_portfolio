import React from "react";
import style from "../../../resource/css/main_style.module.css";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

// img
import child_main from "../../../resource/img/acrc_child_main.png";
import cont_1 from "../../../resource/img/child/child_cont_1.png";
import cont_2 from "../../../resource/img/child/child_cont_2.png";
import child_quiz from "../../../resource/img/child/child_quiz.png";
import child_sitemap from "../../../resource/img/child/child_sitemap.png";

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
                            <h2>프로젝트 참여 기간 : 2021.06 ~ 2022. 02</h2>
                            <ul className={`${style.percent}flex flex_wrap_wrap`}>
                                <li>어린이 홈페이지 내 컨텐츠 페이지 퍼블리싱 (100%)</li>
                                <li>어린이 홈페이지 내 퀴즈로 배워요 퍼블리싱 및 JavaScript (100%)</li>
                            </ul>
                            <ul className={`${style.link_box} flex_jc_c`}>
                                <li className={style.target_move}><a href="https://www.acrc.go.kr/child/" target="_blank" title="국민권익위원회 어린이 홈페이지 새창으로 바로가기" rel="noreferrer">국민권익위원회 어린이 홈페이지 바로가기 (https://www.acrc.go.kr/child/)</a></li>
                            </ul>
                        </div>
                        <div className={style.img_box}>
                        <ul className={style.img_list}>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={child_main} alt="국민권익위원회 어린이 홈페이지 메인"></img>
                                </div>
                                <div className={style.txt_box}>

                                </div>
                            </li>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={cont_1} alt="국민권익위원회 어린이 홈페이지 컨텐츠페이지1"></img>
                                </div>
                                <div className={style.txt_box}>

                                </div>
                            </li>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={cont_2} alt="국민권익위원회 어린이 홈페이지 컨텐츠 페이지2"></img>
                                </div>
                                <div className={style.txt_box}>

                                </div>
                            </li>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={child_quiz} alt="국민권익위원회 어린이 홈페이지 퀴즈로 배워요 페이지"></img>
                                </div>
                                <div className={style.txt_box}>

                                </div>
                            </li>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={child_sitemap} alt="국민권익위원회 어린이 홈페이지 사이트맵"></img>
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