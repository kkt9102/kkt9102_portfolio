import React from "react";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// img
import prtl_main from "../../../resource/img/prtl_main.gif";
import prtl_sms_send from "../../../resource/img/prtl/sms_send.gif";
import prtl_alert from "../../../resource/img/prtl/sms_alert.gif";
import knw_main from "../../../resource/img/prtl/prtl_knw_main.gif";
import knw_board_list from "../../../resource/img/prtl/prtl_knw_board_list.gif";
import knw_board_view from "../../../resource/img/prtl/prtl_knw_board_view.gif";
import knw_off_act from "../../../resource/img/prtl/prtl_off_activity_add.gif";
import knw_my_act from "../../../resource/img/prtl/prtl_knw_my_activity.gif";

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
                                <li>실제 운영되는 페이지는 DHTMLX로 구현되어있으며 클론페이지는 React로 제작되었습니다.</li>
                                <li>클론페이지에서는 업무포털 메인과 혁신게시판과 일부 화면을 구현하였습니다.</li>
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
                                        <img src={prtl_main} alt="국민권익위원회 인트라넷 홈페이지 메인"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={prtl_sms_send} alt="국민권익위원회 인트라넷 SMS 발송"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={prtl_alert} alt="국민권익위원회 인트라넷 통합알람"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={knw_main} alt="국민권익위원회 인트라넷 혁신게시판 메인"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={knw_main} alt="국민권익위원회 인트라넷 혁신게시판 메인"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={knw_board_list} alt="국민권익위원회 인트라넷 혁신게시판 게시판 목록"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={knw_board_view} alt="국민권익위원회 인트라넷 혁신게시판 게시판 상세"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={knw_off_act} alt="국민권익위원회 인트라넷 혁신게시판 오프라인 활동 등록"></img>
                                    </div>
                                    <div className='txt_box'>

                                    </div>
                                </li>
                                <li>
                                    <div className='img_box flex flex_jc_c'>
                                        <img src={knw_my_act} alt="국민권익위원회 인트라넷 혁신게시판 나의 활동내역"></img>
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