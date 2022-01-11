import React from "react";
import style from "../../../resource/css/main_style.module.css";

function Acrc() {

    return(
        <>
            <div className={style.arcr}>국민권익위원회</div>
            <div className={style.cont_box}>
                <div className={style.cont_1}>
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
                    <div className={style.img_box}>
                        <img></img>
                    </div>
                    <div className={style.sub_txt}>
                        <ul>
                            <li>해당 프로젝트에서는 초급 개발자로 투입되어 진행되었습니다.</li>
                            <li>CMS를 사용하여 진행 된 프로젝트이며 해당 CMS 관리자 기능 중 엑셀 다운로드 및 개인정보 다운로드 사유 입력 부분에 30%정도 개발에 참여하였습니다.</li>
                            <li>그 외에 진행한 작업의 경우 국민권익위원회 홈페이지 사용자 게시판별 목록 및 상세화면 퍼블리싱</li>
                            <li>국민권익위원회에 바란다, 방문상담예약 등 홈페이지 이용자들이 직접 신청·확인 을 하는 기능 페이지들의 퍼블리싱을 진행하였으며</li>
                            <li>CMS 기능 내 관리자 페이지들의 퍼블리싱을 진행했습니다.</li>
                        </ul>
                    </div>
                </div>

                <div className={style.cont_3}>

                <a href="https://www.acrc.go.kr/acrc/index.do" target="_blanknpm">국민권익위원회 홈페이지 바로가기</a>
                </div>
            </div>
        </>
    )
}

export default Acrc;