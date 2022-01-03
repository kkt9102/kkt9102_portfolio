import React from "react";
import Sc_bk_01 from '../resource/img/section_back_img_1.jpg';
import Logo from '../resource/img/main_logo.png';

function Section01() {
    return(
        <>
        <section id="section_01" className="section">
            <div className="con">
                <div className="main_logo">
                    <img src={Logo} alt="스타벅스 리저브"></img>
                </div>
                <div className="main_sub_tit">스타벅스 리저브™ 매장에서 프리미엄 커피를 만나다</div>
                <div className="main_tit">차별화된 최상의 스타벅스 경험을 제공합니다.</div>
                {/* <div className="background" alt="스타벅스 리저브 백그라운드 이미지">
                    <img src={Sc_bk_01}></img>
                </div> */}
            </div>
        </section>
        </>
    )
}

export default Section01;