import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import style from "../../../resource/css/main_style.module.css";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

// img
import main_img from "../../../resource/img/clean/clean_main.png";
import main_board from "../../../resource/img/clean/clean_board.png";
import main_sub from "../../../resource/img/clean/clean_sub_list.png";
import main_pop from "../../../resource/img/clean/clean_sub_pop.png";
import main_img_mo from "../../../resource/img/clean/clean_main_mo.png";
import main_board_mo from "../../../resource/img/clean/clean_board_mo.png";
import main_sub_mo from "../../../resource/img/clean/clean_sub_list_mo.png";
import main_pop_mo from "../../../resource/img/clean/clean_sub_pop_mo.png";

function Clean() {

    return(
        <>
        <ScrollToTop/>
        <HomeMV />
        <div className={`${style.clean} ${style.portfolio_info}`}>
            <div className={style.con2}>
                <h2 className={style.page_tit}>국민권익위원회 | 부패방지 종합정보시스템 구축3단계</h2>
                <div className={`${style.cont_box} ${style.cont_1}`}>
                    {/* <div className={style.sub_tit}>국민권익위원회 | 부패방지 3단계 고도화 사업</div> */}

                    <div className={style.sub_txt}>
                        <div>
                            <p>퍼블리셔로 취업 후 처음으로 투입 된 공공기관 프로젝트입니다.</p>
                            <p>국민권익위원회가 운영하는 부패·공익 신고 홈페이지 입니다.</p>
                            <p>해당 프로젝트는 고도화 사업이었으며 저는 프로젝트 후반 개발이 끝난 항목에 대한 퍼블리싱 지원으로 투입된 프로젝트 입니다.</p>
                            <p>홈페이지 구축 사업에서 신고서를 작성하는 페이지들의 서브코딩과 반응형 작업, 청렴포털 내에 있는 청렴마당 홈페이지 탭메뉴 퍼블리싱 등을 진행하였습니다.</p>
                            <p>비록 구축사업 마무리 단계에서 투입된 프로젝트였지만 처음으로 개발자, 디자이너와 협업하여 진행한 사업이었습니다.</p>
                        </div>
                    </div>
                </div>

                <div className={`${style.cont_box} ${style.cont_2}`}>
                    <div className={style.txt_box}>
                        <h2>프로젝트 참여 기간 : 2020.12 ~ 2021.02</h2>
                    <ul className={`${style.percent}flex flex_wrap_wrap`}>
                            <li>사용자 홈페이지 내 민원신청 페이지 퍼블리싱 (10%)</li>
                            <li>사용자 홈페이지 내 게시판 페이지 퍼블리싱 (10%)</li>
                            <li>사용자 홈페이지 내 청렴마당 페이지 퍼블리싱 (20%)</li>
                            <li>사용자 홈페이지 내 마이페이지 페이지 퍼블리싱 (30%)</li>
                        </ul>
                        <ul className={style.link_box}>
                            <li className={style.target_move}><a href="https://www.clean.go.kr/" target="_blank" title="청렴포털 홈페이지 새창으로 바로가기"  rel="noreferrer">청렴포털 홈페이지 바로가기 (https://www.clean.go.kr)</a></li>
                        </ul>
                    </div>
                    <div className={style.img_box}>
                        <ul className={style.img_list}>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={main_img} alt="청렴포털 홈페이지 메인"></img>
                                </div>
                                <div className={style.txt_box}>

                                </div>
                            </li>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={main_board} alt="청렴포털 상담사례 목록"></img>
                                </div>
                                <div className={style.txt_box}>
                                    
                                </div>
                            </li>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={main_sub} alt="청렴포털 청렴마당 기관별 목록"></img>
                                </div>
                                <div className={style.txt_box}>
                                    
                                </div>    
                            </li>
                            <li>
                                <div className={`${style.img_box} flex flex_jc_c`}>
                                    <img src={main_pop} alt="청렴마당"></img>
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

export default Clean;