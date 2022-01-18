import React from "react";
import style from "./resource/css/Reserve.module.css";
import RHeader from "./include/reserve_header";
import RFooter from "./include/reserve_footer";
import ExtrantionList from "./extraction";
import "../../../resource/css/custom.css";

// img
import Main_logo from "./resource/img/main_logo.png";
import S_2_tit from "./resource/img/section_2_tit.png";
import S_3_tit from "./resource/img/section_3_tit.png";
import S_4_tit from "./resource/img/section_4_tit.png";
import S_5_tit from "./resource/img/section_5_tit.png";



function StarbucksReserve() {

    return(
        <>
            <div className={style.reserve}>
                <RHeader/>
                <section id={style.section_1} className={style.section}>
                    <div className={style.con}>
                        <div className={`${style.cont_1} flex flex_jc_c`}>
                            <img src={Main_logo} className={style.main_logo} alt="리저브 로고 RESERVE™ LOGO"></img>
                            <div className={`${style.sub_txt} ${style.font_P} flex flex_jc_c`}>스타벅스 리저브™ 매장에서 프리미엄 커피를 만나다</div>
                            <div className={`${style.sub_tit} ${style.font_P} flex flex_jc_c`}>차별화된 최상의 스타벅스 경험을 제공합니다.</div>
                        </div>
                    </div>
                </section>

                <section id={style.section_2} className={style.section}>
                    <div className={style.con}>
                        <div className={`${style.section_tit} flex flex_jc_c`}>
                            <img src={S_2_tit} alt="스타벅스 리저브 starbucks reserve"></img>
                        </div>
                        <div className={`${style.cont_1}`}>
                            <div className={`${style.sub_txt} flex flex_jc_c`}>가장 진귀하고 이국적이며 정교한 풍미의 커피</div>
                            <div className={`${style.sub_tit} flex flex_jc_c`}>스타벅스 리저브™커피는 아주 진귀하고 특별한 커피입니다.</div>
                        </div>
                        <div className={style.cont_2}>
                            <ul className="flex flex_jc_c flex_wrap_wrap">
                                <li className="flex flex_jc_c">적은 수량 때문에 모든 분들에게 선보일 수 없으나, 독특한 맛과 향은 리저브 커피를 더욱 소중하게 만듭니다.</li>
                                <li className="flex flex_jc_c">가장 신선한 상태에서 손으로 골라낸 커피는 이 세상에서 가장 훌륭한 최상의 커피이자, 스타벅스에서 제공하는 특별한 경험입니다.</li>
                                <li className="flex flex_jc_c">남부 탄자니아의 고지대부터 자메이카의 블루 마운틴까지, 여러분을 새로운 커피 여정으로 초대합니다.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id={style.section_3} className={style.section}>
                    <div className={style.con}>
                        <div className={`${style.section_tit} flex flex_jc_c`}>
                            <img src={S_3_tit} alt="리저브 추출방식 RESERVE™ EXTRACTION"></img>
                        </div>
                        <div className={style.cont_1}>
                            <ExtrantionList/>
                        </div>
                    </div>
                </section>

                <section id={style.section_4} className={style.section}>
                    <div className={style.con}>
                        <div className={`${style.section_tit} flex flex_jc_c`}>
                            <img src={S_4_tit} alt="리저브 원두 RESERVE™ COFFEE"></img>
                        </div>
                    </div>
                </section>

                <section id={style.section_5} className={style.section}>
                    <div className={style.con}>
                        <div className={`${style.section_tit} flex flex_jc_c`}>
                            <img src={S_5_tit} alt="리저브 매장 RESERVE™ LOCATION"></img>
                        </div>
                    </div>
                </section>
                <RFooter/>
            </div>
        </>
    )
}


export default StarbucksReserve;