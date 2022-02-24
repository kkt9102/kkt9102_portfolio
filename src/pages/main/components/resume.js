import React from "react";
import '../../../resource/css/resume.css';
import HomeMV from "../../../utils/home_move";
import ScrollToTop from '../../../utils/scrollTop';

import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Resume = () => {
    return (
        <>
            <Helmet>
                <title>kkt9102 Portfolio | 이력서</title>
                <meta charSet="utf-8" />
                <meta name="description" content="kkt9102 Portfolio | 이력서" />
            </Helmet>
            <ScrollToTop/>
            <HomeMV />
            <div className="resume_section">
                <div className="con">
                    <div className="page_tit flex flex_dir_c"><span>안녕하세요!</span>새로운 것에 대해 도전하고 탐구하는 김기태 입니다.</div>
                    <div className="txt_box">
                        <ul>
                            <li className="flex"><div>김기태</div><div>kkt9102</div></li>
                            <li className="flex"><div>웹 퍼블리셔</div><div>HTML, CSS, JavaScript, jQuery</div></li> {/* Java, Ruby on Rails, React */}
                            <li className="flex"><div>creater@kakao.com</div><div>kkt9102@gmail.com</div></li>
                            <li className="flex"><div>Portfolio<Link to="/">kkt9102.com</Link></div><div>Github<a href="https://github.com/kkt9102" target="_blank" title="깃허브 새창으로 바로가기" rel="noreferrer">github.com/kkt9102</a></div></li>
                        </ul>
                    </div>

                    <div className="txt_box">
                        안녕하세요. 단순한 퍼블리싱에서 멈추지 않고 개발자로 성장하기 위해 끊임없이 공부하고 노력하는 웹 퍼블리셔 1년차 김기태 입니다. 
                    </div>

                    <div className="cont_box">
                        <div className="box_1 box_item">
                            <div className="box_tit">경력 사항</div>

                            <div className="flex flex_dir_c_r">
                                <div className="cont_1">
                                    <div className="cont_tit">국민권익위원회 | 부패방지 종합정보시스템 구축3단계</div>
                                    <div className="sub_tit">공공기관 프로젝트</div>
                                    <div className="reg_dt">2020.12 ~ 2021.02</div>
                                    <div className="sub_txt">퍼블리셔 취업 후 처음으로 진행한 프로젝트이며 사업 후반에 투입되어 반응형 및 게시판 퍼블리싱을 진행하였습니다.</div>
                                </div>
                                <div className="cont_2">
                                    <div className="cont_tit">AIMS</div>
                                    <div className="sub_tit">회사 솔루션 유지·보수,커스텀</div>
                                    <div className="reg_dt">2021.02 ~ 2021.05</div>
                                    <div className="sub_txt">자사의 솔루션 커스텀을 진행하면서 UX/UI 개발을 진행하였습니다.</div>
                                </div>
                                <div className="cont_3">
                                    <div className="cont_tit">국민권익위원회 홈페이지·업무포털 전면개편</div>
                                    <div className="sub_tit">공공기관 프로젝트</div>
                                    <div className="reg_dt">2021.06 ~ 2022.03</div>
                                    <div className="sub_txt">제안서 작업부터 투입된 프로젝트이며 관리자 페이지 엑셀모듈,홈페이지 내 전반적인 퍼블리싱을 진행하였습니다.</div>
                                </div>
                            </div>
                        </div>
                        <div className="box_2 box_item">
                            <div className="box_tit">경험 및 역량</div>
                            <div>저는 국비지원 학원과정을 마친 후 바로 SI업체에 프리랜서로 단기 계약으로 퍼블리셔 일을 시작하게 되었습니다. 비록 </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Resume;