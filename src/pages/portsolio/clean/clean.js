import React from "react";
import style from "../../../resource/css/main_style.module.css";

function Clean() {

    return(
        <div className={style.clean}>
            <h2>부패방지 종합정보시스템 구축3단계</h2>
            <div className={style.cont_box}>
                <div className={style.sub_tit}>국민권익위원회 | 부패방지 3단계 고도화 사업</div>
                <div className={style.sub_txt}>
                    <ul>
                        <li>퍼블리셔로 취업 후 처음으로 투입 된 공공기관 프로젝트입니다.</li>
                        <li>국민권익위원회가 운영하는 부패·공익 신고 홈페이지 입니다. 해당 프로젝트는 고도화 사업이었으며 저는 프로젝트 후반 개발이 끝난 항목에 대한 퍼블리싱 지원으로 투입된 프로젝트 입니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Clean;