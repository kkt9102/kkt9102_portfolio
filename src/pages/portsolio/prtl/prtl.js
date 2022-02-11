import React from "react";
import style from "../../../resource/css/main_style.module.css";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

// img
import acrc_mian from "../../../resource/img/acrc_main.png";
import main_board_img_1 from "../../../resource/img/acrc/main_board_list_1.png";
import main_board_img_2 from "../../../resource/img/acrc/main_board_list_2.png";
import main_board_img_3 from "../../../resource/img/acrc/main_board_list_3.png";
import main_board_img_4 from "../../../resource/img/acrc/main_board_list_4.png";
import main_cdns_img_2 from "../../../resource/img/acrc/main_cdns_list.png";

function Acrc() {
    return(
        <>
            <ScrollToTop/>
            <HomeMV />
            <div className={`${style.prtl} ${style.portfolio_info}`}>
                <div className={style.con2}>
                    <h2 className={style.page_tit}>국민권익위원회 인트라넷 홈페이지</h2>
                    <div className={`${style.cont_box} ${style.cont_1}`}>
                        <div className={style.sub_tit}>국민권익위원회 홈페이지·업무포털 전면개편 사업</div>
                        
                        <div className={style.sub_txt}>
                            <ul>
                                <li>국민권익위원회 홈페이지·업무포털 전면개편 사업에 포함되는 사업이었으며</li>
                                <li>인트라넷 퍼블리싱 진행의 경우 인트라넷용 통합검색 화면과 홈페이지 내의 미니홈페이지 개념인</li>
                                <li>혁신게시판 퍼블리싱, 내부용 SMS발송관리, 통합알림 퍼블리싱을 진행하였습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${style.cont_box} ${style.cont_2}`}>
                        <div className={`${style.txt_box} flex flex_wrap_wrap`}>
                            <h2>프로젝트 참여 기간 : 2021.06 ~ 2022. 02</h2>
                            <ul className={`${style.percent} flex flex_wrap_wrap`}>
                                <li className={style.dots_b}>인트라넷 홈페이지 통합검색 퍼블리싱 (100%)</li>
                                <li className={style.dots_b}>인트라넷 내 혁신게시판 전체 퍼블리싱 (100%)</li>
                                <li className={style.dots_b}>SMS 발송및 이력관리 화면 퍼블리싱 (90%)</li>
                                <li className={style.dots_b}>인트라넷 통합알림 퍼블리싱 (100%)</li>
                            </ul>
                            <ul className={`${style.link_box} flex_jc_c`}>
                                <li className={style.target_move}><a href="https://www.acrc.go.kr/" target="_blank" title="국민권익위원회 인트라넷 퍼블리싱 페이지 새창으로 바로가기" rel="noreferrer">인트라넷 퍼블리싱 페이지 바로가기 (https://www.clean.go.kr)</a></li>
                            </ul>
                        </div>
                        <div className={style.img_box}>
                            <ul className={style.img_list}>
                                <li>
                                    <div className={`${style.img_box} flex flex_jc_c`}>
                                        <img src={acrc_mian} alt="국민권익위원회 국문 홈페이지 메인"></img>
                                    </div>
                                    <div className={style.txt_box}>

                                    </div>
                                </li>
                                <li>
                                    <div className={`${style.img_box} flex flex_jc_c`}>
                                        <img src={main_board_img_1} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                                    </div>
                                    <div className={style.txt_box}>

                                    </div>
                                </li>
                                <li>
                                    <div className={`${style.img_box} flex flex_jc_c`}>
                                        <img src={main_board_img_2} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                                    </div>
                                    <div className={style.txt_box}>

                                    </div>
                                </li>
                                <li>
                                    <div className={`${style.img_box} flex flex_jc_c`}>
                                        <img src={main_board_img_3} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                                    </div>
                                    <div className={style.txt_box}>

                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className={style.cont_3}>

                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acrc;