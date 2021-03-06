import React, { useState, useEffect } from "react";
import "../../../resource/css/style.css";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import AcrcImg from "./components/acrc_img";

// img
import acrc_main from "../../../resource/img/acrc_main.png";
import acrc_main_mo from "../../../resource/img/acrc/acrc_main_mo.gif";
import main_board_img_1 from "../../../resource/img/acrc/main_board_list_1.png";
import main_board_img_1_mo  from "../../../resource/img/acrc/main_board_list_1_mo.gif";
import main_board_img_2 from "../../../resource/img/acrc/main_board_list_2.png";
import main_board_img_2_mo from "../../../resource/img/acrc/main_board_list_2_mo.gif";
import main_board_img_3 from "../../../resource/img/acrc/main_board_list_3.png";
import main_board_img_4 from "../../../resource/img/acrc/main_board_list_4.png";
import main_cdns_img from "../../../resource/img/acrc/main_cdns_list.png";
import main_cdns_img_mo from "../../../resource/img/acrc/main_cdns_list_mo.gif";

function Acrc() {
    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio | 국민권익위원회 국문 홈페이지</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 국문 홈페이지" />
                </Helmet>
            </HelmetProvider>
            <ScrollToTop/>
            <HomeMV />
            <div className='acrc portfolio_info'>
                <div className='con2'>
                    <h2 className='page_tit'>국민권익위원회 홈페이지</h2>
                    <div className='cont_box cont_1'>
                        <div className='sub_tit'>국민권익위원회 홈페이지·업무포털 전면개편 사업</div>
                        
                        <div className='sub_txt'>
                                <p>퍼블리셔로 취업 후 두번째로 투입 된 사업입니다.
                                해당 프로젝트에서는 초급 개발자 겸 퍼블리셔로 투입되었습니다.
                                프로젝트 초반 제안서 작업부터 투입되서 처음으로 프로젝트 시작부터 끝까지 진행한 사업이었습니다.
                                프로젝트 진행 중 홈페이지 관리자 기능중 엑셀 다운로드 기능을 개발하였으며 이후에는 퍼블리싱 위주로 진행하였습니다.
                                퍼블리싱 작업은 국문,영문,어린이 홈페이지에 사용되는 게시판 템플릿과
                                사용자들이 접속하는 민원신청, 방문상담신청 관련 페이지 작업, 사이트맵, 통합검색화면을 진행했으며
                                어린이 홈페이지 퍼블리싱 영역을 혼자서 진행하였으며 홈페이지 관리자 화면 커스텀 퍼블리싱을 진행했습니다.</p>
                        </div>
                    </div>

                    <div className='cont_box cont_2'>
                        <div className='txt_box flex flex_wrap_wrap'>
                            <h2>프로젝트 참여 기간<span className="date"><span> : </span>2021.06 ~ 2022. 02</span></h2>
                            <ul className='percent'>
                                <li className='dots_b'>사용자 홈페이지 내 다양한 게시판별 퍼블리싱 (90%)</li>
                                <li className='dots_b'>사용자 홈페이지 내 컨텐츠 페이지 퍼블리싱 (30%)</li>
                                <li className='dots_b'>사용자 홈페이지 내 민원신청 페이지 퍼블리싱 (100%)</li>
                                <li className='dots_b'>사용자 홈페이지 통합검색 퍼블리싱 (100%)</li>
                                <li className='dots_b'>영문 홈페이지 header 메뉴 퍼블리싱 (50%)</li>
                                <li className='dots_b'>영문 홈페이지 게시판별 퍼블리싱 (40%)</li>
                                <li className='dots_b'>어린이 홈페이지 메인, 게시판, 컨텐츠 페이지 퍼블리싱 (100%)</li>
                                <li className='dots_b'>홈페이지 관리자 페이지 민원신청 확인 페이지 퍼블리싱 (80%)</li>
                                <li className='dots_b'>홈페이지 괸리자 페이지 개인정보 다운로드 사유 입력 및 엑셀 다운로드 기능 (40%)</li>
                            </ul>
                            <ul className="useing_code flex">
                                <li>#CMS</li>
                                <li>#JAVA</li>
                                <li>#SPRING</li>
                                <li>#HTML</li>
                                <li>#CSS</li>
                                <li>#JavaScript</li>
                                <li>#slick-slide</li>
                                <li>#bx-slide</li>
                            </ul>
                            <ul className='link_box flex_jc_c'>
                                <li className='target_move'><a href="https://www.acrc.go.kr/" target="_blank" title="국민권익위원회 홈페이지 새창으로 바로가기" rel="noreferrer">국민권익위원회 홈페이지 바로가기 <span className="mobile_none">(https://www.clean.go.kr)</span></a></li>
                            </ul>
                        </div>
                        <AcrcImg/>
                        
                        <div className='cont_3'>

                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default Acrc;