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
                                    <div className="cont_tit">에이블 정보기술 홈페이지 유지·보수</div>
                                    <div className="sub_tit">회사 홈페이지 연혁 관리자 구축</div>
                                    <div className="reg_dt">2021.04</div>
                                    <div className="sub_txt">회사 홈페이지의 하드코딩으로 이루어진 연혁 컨텐츠를 관리자 화면에 추가하고 CRUD 기능으로 변경하였습니다.</div>
                                </div>
                                <div className="cont_3">
                                    <div className="cont_tit">AIMS</div>
                                    <div className="sub_tit">회사 솔루션 유지·보수,커스텀</div>
                                    <div className="reg_dt">2021.02 ~ 2021.05</div>
                                    <div className="sub_txt">자사의 솔루션 커스텀을 진행하면서 UX/UI 개발을 진행하였습니다.</div>
                                </div>
                                <div className="cont_4">
                                    <div className="cont_tit">국민권익위원회 홈페이지·업무포털 전면개편</div>
                                    <div className="sub_tit">공공기관 프로젝트</div>
                                    <div className="reg_dt">2021.06 ~ 2022.03</div>
                                    <div className="sub_txt">제안서 작업부터 투입된 프로젝트이며 관리자 페이지 엑셀모듈,홈페이지 내 전반적인 퍼블리싱을 진행하였습니다.</div>
                                </div>
                            </div>
                        </div>
                        <div className="box_2 box_item">
                            <div className="box_tit">경험 및 역량</div>
                            <ul>
                                <li>저는 국비지원 학원과정을 마친 후 바로 SI업체에 프리랜서로 단기 계약으로 퍼블리셔 일을 시작하게 되었습니다. 취업 후 처음으로 진행한 프로젝트는 공공기관 구축사업 후반부였습니다. 
                                첫 프로젝트에서는 실제 필드에서 어떤식으로 일이 진행되는지 일을 하면서 팀원들간의 소통이 중요한지를 느꼈습니다.</li>
                                <li>첫 프로젝트를 마무리 지은 후 프리랜서에서 정규직으로 전환이 되면서 회사의 솔루션 커스터마이징을 진행했습니다. 회사의 솔루션은 Ruby on Rails로 제작되었으며 개발 과장님 한분과 제가 2인1조로 솔루션 커스터마이징을 진행했습니다.</li>
                                <li>이 때 단순하게 HTML, CSS, JavaScript 만 가지고 개발자와 협업을 하면서 퍼블리싱은 진행할 수 없다고 느꼈습니다. 퍼블리셔 입장에서 보이는 곳만 코드를 수정했지만 의도하지 않은 상황에선 제가 의도한대로 화면이 나오지 않기도 히고
                                   다른 소스파일에서 조건을 타는 상황을 찾지 못해 작업을 번복하기도 했습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Resume;