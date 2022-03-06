import React from "react";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio | 국민권익위원회 업무포털 홈페이지</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 업무포털 홈페이지" />
                </Helmet>
            </HelmetProvider>
            <ScrollToTop/>
            <HomeMV />
            <div className='prtl portfolio_info'>
                <div className='con2'>
                    <h2 className='page_tit'>국민권익위원회 인트라넷 홈페이지</h2>
                    <div className='cont_box cont_1'>
                        <div className='sub_tit'>국민권익위원회 홈페이지·업무포털 전면개편 사업</div>
                        
                        <div className='sub_txt'>
                            <ul>
                                <li>국민권익위원회 홈페이지·업무포털 전면개편 사업에 포함되는 사업이었으며</li>
                                <li>인트라넷 퍼블리싱 진행의 경우 인트라넷용 통합검색 화면과 홈페이지 내의 미니홈페이지 개념인</li>
                                <li>혁신게시판 퍼블리싱, 내부용 SMS발송관리, 통합알림 퍼블리싱을 진행하였습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='cont_box cont_2'>
                        <div className='txt_box flex flex_wrap_wrap'>
                            <h2>프로젝트 참여 기간<span className="date"><span> : </span>2021.06 ~ 2022. 02</span></h2>
                            <ul className='percent'>
                                <li className='dots_b'>인트라넷 홈페이지 통합검색 퍼블리싱 (100%)</li>
                                <li className='dots_b'>인트라넷 내 혁신게시판 전체 퍼블리싱 (100%)</li>
                                <li className='dots_b'>SMS 발송및 이력관리 화면 퍼블리싱 (90%)</li>
                                <li className='dots_b'>인트라넷 통합알림 퍼블리싱 (100%)</li>
                            </ul>
                            <ul className="useing_code flex">
                                <li>#DHTMLX</li>
                                <li>#HTML</li>
                                <li>#CSS</li>
                                <li>#JavaScript</li>
                                <li>#slick-slide</li>
                                <li>#bx-slide</li>
                            </ul>
                            <ul className='link_box flex_jc_c'>
                                <li className='target_move'>
                                    <Link to="/clonePage/CloneMain" target="_blank">인트라넷 클론 페이지 바로가기</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='img_box'>
                            <ul className='img_list'>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={acrc_mian} alt="국민권익위원회 국문 홈페이지 메인"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={main_board_img_1} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={main_board_img_2} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={main_board_img_3} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='cont_3'>

                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acrc;