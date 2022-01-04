import React from "react";
import sc_2_tit from '../resource/img/sc_2_tit.png';
import sc_2_bt_bg from '../resource/img/sc_2_bt_bg.png';


function Section02() {
    return (
        <>
        <section id="section_02">
            <div className="con">
                <img src={sc_2_tit} className="sc_tit_img"></img>
                <div className="txt_box">
                    <div className="main_sub_tit font_w">가장 진귀하고 이국적이며 정교한 풍미의 커피</div>
                    <div className="main_tit font_w">스타벅스 리저브™커피는 아주 진귀하고 특별한 커피입니다.</div>
                    <ul className="main_sub_txt">
                        <li className="font_w">적은 수량 때문에 모든 분들에게 선보일 수 없으나, 독특한 맛과 향은 리저브 커피를 더욱 소중하게 만듭니다.</li>
                        <li className="font_w">가장 신선한 상태에서 손으로 골라낸 커피는 이 세상에서 가장 훌륭한 최상의 커피이자, 스타벅스에서 제공하는 특별한 경험입니다.</li>
                        <li className="font_w">남부 탄자니아의 고지대부터 자메이카의 블루 마운틴까지, 여러분을 새로운 커피 여정으로 초대합니다.</li>
                    </ul>
                </div>
                <div className="img_box btm_bg">
                    <img src={sc_2_bt_bg}></img>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section02;