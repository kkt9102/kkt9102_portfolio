import { useState, useEffect } from "react";
import style from "../reserve/resource/css/Reserve.module.css";
// img
import clover_icon from "../reserve/resource/img/clover_icon.png";
import b_e_icon from "../reserve/resource/img/black_eagle_icon.png";
import poc_icon from "../reserve/resource/img/poc_icon.png";
import chemex_icon from "../reserve/resource/img/chemex_icon.png";
import c_b_icon from "../reserve/resource/img/cold_brew_icon.png";

function ExtrantionList(){
    return (
        <>
            <nav className={style.extraction_list}>
                <ul className="flex flex_jc_sb">
                    <li id={style.clover}className={style.border_b}>
                        <div className="flex flex_jc_c flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img src={clover_icon} alt="CLOVER"></img>
                            </div>
                            <div className={`${style.txt_box} flex flex_jc_c flex_wrap_wrap`}>
                                <div className={`${style.sub_tit} flex flex_jc_c`}>CLOVER</div>
                                <div className={style.sub_txt}>깊은 풍미에<br/>진하고 강한 맛을 원하면</div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_jc_c flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img src={b_e_icon} alt="BLACK EAGLE"></img>
                            </div>
                            <div className={`${style.txt_box} flex flex_jc_c flex_wrap_wrap`}>
                                <div className={`${style.sub_tit} flex flex_jc_c`}>BLACK-EAGLE</div>
                                <div className={style.sub_txt}>진하고 깊은<br/>에스프레소 풍미를<br/>다체롭게 즐기고 싶다면</div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_jc_c flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img src={poc_icon} alt="POUR OVER"></img>
                            </div>
                            <div className={`${style.txt_box} flex flex_jc_c flex_wrap_wrap`}>
                                <div className={`${style.sub_tit} flex flex_jc_c`}>POUR OVER</div>
                                <div className={style.sub_txt}>은은한 커피향에<br/>부드럽고 깔끔한 풍미를<br/>느끼고 싶다면</div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_jc_c flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img src={chemex_icon} alt="CHEMEX"></img>
                            </div>
                            <div className={`${style.txt_box} flex flex_jc_c flex_wrap_wrap`}>
                            <div className={`${style.sub_tit} flex flex_jc_c`}>CHEMEX</div>
                                <div className={style.sub_txt}>풍부한 커피향과<br/>균형잡힌 풍미를<br/>느끼고 싶다면</div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_jc_c flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img src={c_b_icon} alt="COLD BREW"></img>
                            </div>
                            <div className={`${style.txt_box} flex flex_jc_c flex_wrap_wrap`}>
                                <div className={`${style.sub_tit} flex flex_jc_c`}>COLD BREW</div>
                                <div className={style.sub_txt}>달콤함과 부드러운 풍미를<br/>동시에 느끼고 싶다면</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ExtrantionList;