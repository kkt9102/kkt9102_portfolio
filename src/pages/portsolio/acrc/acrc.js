import React from "react";
import style from "../../../resource/css/main_style.module.css";
import HomeMV from "../../../utils/home_move";

function Acrc() {
    return(
        <>
            <HomeMV />
            <div className={`${style.acrc} ${style.portfolio_info}`}>
                <div className={style.con}>
                    <h2 className={style.page_tit}>국민권익위원회 홈페이지</h2>
                    <div className={`${style.cont_box} ${style.cont_1}`}>
                        <div className={style.sub_tit}>국민권익위원회 홈페이지·업무포털 전면개편 사업</div>
                        
                        <div className={style.sub_txt}>
                            <ul>
                                <li>퍼블리셔로 취업 후 두번째로 투입 된 사업입니다.</li>
                                <li>이 프로젝트에서는 초급 개발자 겸 퍼블리셔로 투입되었습니다.</li>
                                <li>프로젝트 초반 제안서 작업부터 투입되서 처음으로 프로젝트 시작부터 끝까지 진행한 사업이었습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.cont_2}>
                        <div className={style.txt_box}>
                            <ul className="flex">
                                <li className="flex">프로젝트 참여 기간 : 2021.06 ~ 2022. 02</li>
                                <li>사용자 홈페이지 내 다양한 게시판별 퍼블리싱 (90%)</li>
                                <li>사용자 홈페이지 내 컨텐츠 페이지 퍼블리싱 (30%)</li>
                                <li>사용자 홈페이지 내 민원신청 페이지 퍼블리싱 (100%)</li>
                                <li>사용자 홈페이지 통합검색 퍼블리싱 (100%)</li>
                                <li>영문 홈페이지 게시판별 퍼블리싱 (40%)</li>
                                <li>어린이 홈페이지 메인, 게시판, 컨텐츠 페이지 퍼블리싱 (100%)</li>
                                <li>홈페이지 관리자 페이지 민원신청 확인 페이지 퍼블리싱 (80%)</li>
                                <li>홈페이지 괸리자 페이지 개인정보 다운로드 사유 입력 및 엑셀 다운로드 기능 (40%)</li>
                                <li>업무포털 통합검색 퍼블리싱 (100%)</li>
                                <li>업무포털 SMS 발송 페이지 퍼블리싱 (80%)</li>
                                <li>업무포털 혁신게시판 (업무포털 내 별도의 홈페이지 개념) 퍼블리싱 진행 (100%)</li>
                            </ul>
                            <ul className={style.link_box}>
                                <li className={style.target_move}><a href="https://www.acrc.go.kr/" target="_blank" title="국민권익위원회 홈페이지 새창으로 바로가기" rel="noreferrer">국민권익위원회 홈페이지 바로가기 (https://www.clean.go.kr)</a></li>
                            </ul>
                        </div>
                        <div className={style.img_box}>
                            <ul className={style.img_list}>
                                <li>
                                    <div className={style.img_box}>
                                        
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