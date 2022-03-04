import React from "react";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import ChildImg from "./components/child_img";


const AcrcChild = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio | 국민권익위원회 어린이 홈페이지</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 어린이 홈페이지" />
                </Helmet>
            </HelmetProvider>
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
                                <li className='dots_b'>어린이 홈페이지 메인 페이지 퍼블리싱 (100%)</li>
                                <li className='dots_b'>어린이 홈페이지 컨텐츠 페이지 퍼블리싱 (100%)</li>
                                <li className='dots_b'>어린이 홈페이지 게시판 퍼블리싱 (100%)</li>
                                <li className='dots_b'>어린이 홈페이지 퀴즈로 배워요 퍼블리싱 및 JavaScript (100%)</li>
                            </ul>
                            <ul className='link_box flex_jc_c'>
                                <li className='target_move'><a href="https://www.acrc.go.kr/child/" target="_blank" title="국민권익위원회 어린이 홈페이지 새창으로 바로가기" rel="noreferrer">국민권익위원회 어린이 홈페이지 바로가기 <span className="mobile_none">(https://www.acrc.go.kr/child/)</span></a></li>
                            </ul>
                        </div>
                        <ChildImg/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcrcChild;