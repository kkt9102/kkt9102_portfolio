import React from "react";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

import { useScroll } from "../../../utils/scrollMove";
import { Helmet } from 'react-helmet';

// img
import child_main from "../../../resource/img/acrc_child_main.png";
import cont_1 from "../../../resource/img/child/child_cont_1.png";
import cont_2 from "../../../resource/img/child/child_cont_2.png";
import child_quiz from "../../../resource/img/child/child_quiz.png";
import child_sitemap from "../../../resource/img/child/child_sitemap.png";

const AcrcChild = () => {
    const {scrollY} = useScroll();
    const PageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPer = (scrollY/PageHeight) * 100;

    return (
        <>
            <Helmet>
                <title>kkt9102 Portfolio | 국민권익위원회 어린이 홈페이지</title>
                <meta charSet="utf-8" />
                <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 어린이 홈페이지" />
            </Helmet>
            <ScrollToTop/>
            <HomeMV/>
            <div className='child portfolio_info'>
                <div className='con2'>
                    <h2 className='page_tit'>국민권익위원회 어린이 홈페이지</h2>
                    <div className='cont_box cont_1'>
                        <div className='sub_tit'>국민권익위원회 홈페이지·업무포털 전면개편 사업</div>
                    
                        <div className='sub_txt'>
                                <p>국민권익위원회 홈페이지·업무포털 전면개편 사업에 포함되는 사업이었으며
                                그 중 어린이 홈페이지 전체 퍼블리싱을 진행했습니다.</p>
                        </div>
                    </div>

                    <div className='cont_2'>
                        <div className='txt_box flex flex_wrap_wrap'>
                            <h2>프로젝트 참여 기간<span className="date"><span> : </span>2021.06 ~ 2022. 02</span></h2>
                            <ul className='percent'>
                                <li className='dots_b'>어린이 홈페이지 컨텐츠 페이지 퍼블리싱 (100%)</li>
                                <li className='dots_b'>어린이 홈페이지 게시판 퍼블리싱 (100%)</li>
                                <li className='dots_b'>어린이 홈페이지 퀴즈로 배워요 퍼블리싱 및 JavaScript (100%)</li>
                            </ul>
                            <ul className='link_box flex_jc_c'>
                                <li className='target_move'><a href="https://www.acrc.go.kr/child/" target="_blank" title="국민권익위원회 어린이 홈페이지 새창으로 바로가기" rel="noreferrer">국민권익위원회 어린이 홈페이지 바로가기 <span className="mobile_none">(https://www.acrc.go.kr/child/)</span></a></li>
                            </ul>
                        </div>
                        <div className='img_box'>
                        <ul className='img_list'>
                            <li>
                                <div className='page_img img_box flex flex_jc_c'>
                                    <img src={child_main} alt="국민권익위원회 어린이 홈페이지 메인"></img>
                                </div>
                                <div className='txt_box'>

                                </div>
                            </li>
                            <li>
                                <div className={`${scrollPer < 17 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                                    <img src={cont_1} alt="국민권익위원회 어린이 홈페이지 컨텐츠페이지1"></img>
                                </div>
                                <div className='txt_box'>

                                </div>
                            </li>
                            <li>
                                <div className={`${scrollPer < 54 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                                    <img src={cont_2} alt="국민권익위원회 어린이 홈페이지 컨텐츠 페이지2"></img>
                                </div>
                                <div className='txt_box'>

                                </div>
                            </li>
                            <li>
                                <div className={`${scrollPer < 74 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                                    <img src={child_quiz} alt="국민권익위원회 어린이 홈페이지 퀴즈로 배워요 페이지"></img>
                                </div>
                                <div className='txt_box'>

                                </div>
                            </li>
                            <li>
                                <div className={`${scrollPer < 84 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                                    <img src={child_sitemap} alt="국민권익위원회 어린이 홈페이지 사이트맵"></img>
                                </div>
                                <div className='txt_box'>

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