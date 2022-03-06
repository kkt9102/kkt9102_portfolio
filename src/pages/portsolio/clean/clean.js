import React from "react";
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import CleanImg from "./components/clean_img";

function Clean() {
    return(
        <>
        <HelmetProvider>
        <Helmet>
            <title>kkt9102 Portfolio | 국민권익위원회 청렴포털 홈페이지</title>
            <meta charSet="utf-8" />
            <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 청렴포털 홈페이지" />
        </Helmet>
        </HelmetProvider>
        <ScrollToTop/>
        <HomeMV />
        <div className='clean portfolio_info'>
            <div className='con2'>
                <h2 className='page_tit'>국민권익위원회 | 부패방지 종합정보시스템 구축3단계</h2>
                <div className='cont_box cont_1'>
                    <div className='sub_tit'>국민권익위원회 | 부패방지 3단계 고도화 사업</div>

                    <div className='sub_txt'>
                            <p>국민권익위원회가 운영하는 부패·공익 신고 홈페이지 이며 퍼블리셔로 취업 후 처음으로 투입 된 공공기관 프로젝트입니다.
                            해당 프로젝트는 3단계 고도화 사업이었으며 저는 프로젝트 후반 개발이 끝난 항목에 대한 퍼블리싱 지원으로 투입된 프로젝트 입니다.
                            해당 프로젝트에서 업무는 홈페이지 구축 사업에서 신고서를 작성하는 페이지들의 서브코딩과 반응형 작업,
                            청렴포털 내에 있는 청렴마당 홈페이지 탭메뉴 퍼블리싱 등을 진행하였습니다.
                            비록 구축사업 마무리 단계에서 투입된 프로젝트였지만 처음으로 개발자, 디자이너와 협업하여 진행한 사업이었습니다.</p>
                    </div>
                </div>

                <div className='cont_box cont_2'>
                    <div className='txt_box flex flex_wrap_wrap'>
                        <h2>프로젝트 참여 기간<span className="date"><span> : </span>2020.12 ~ 2021.02</span></h2>
                        <ul className='percent'>
                            <li className='dots_b'>사용자 홈페이지 내 민원신청 페이지 퍼블리싱 (10%)</li>
                            <li className='dots_b'>사용자 홈페이지 내 게시판 페이지 퍼블리싱 (10%)</li>
                            <li className='dots_b'>사용자 홈페이지 내 청렴마당 페이지 퍼블리싱 (20%)</li>
                            <li className='dots_b'>사용자 홈페이지 내 마이페이지 페이지 퍼블리싱 (30%)</li>
                        </ul>
                        <ul className="useing_code flex">
                            <li>#CMS</li>
                            <li>#HTML</li>
                            <li>#CSS</li>
                            <li>#JavaScript</li>
                            <li>#bx-slide</li>
                        </ul>
                        <ul className='link_box flex_jc_c'>
                            <li className='target_move'><a href="https://www.clean.go.kr/" target="_blank" title="청렴포털 홈페이지 새창으로 바로가기"  rel="noreferrer">청렴포털 홈페이지 바로가기 <span className="mobile_none">(https://www.clean.go.kr)</span></a></li>
                        </ul>
                    </div>
                    <CleanImg/>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Clean;