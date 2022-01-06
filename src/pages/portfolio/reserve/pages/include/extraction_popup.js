import React from "react";

import style from '../../resource/css/reserve_style.module.css';

import cl_icon from '../../resource/img/clover.png';
import bl_icon from '../../resource/img/blackeagle.png';
import co_icon from '../../resource/img/coldbrew.png';
import ch_icon from '../../resource/img/chemex.png';
import po_icon from '../../resource/img/pourover.png';
import { upload } from "@testing-library/user-event/dist/upload";
import { useCallback } from "react/cjs/react.development";
function Ex_pop() {
    return(
        <>
            <ul className={`${style.exra_list} flex flex_jc_sb`} >
                <li>
                    <div className={style.img_box}>
                        <img src={cl_icon}></img>
                    </div>
                    <div className={style.txt_box}>
                        <div className={style.cont_tit}>CLOVER</div>
                        <ul className={style.cont_txt}>
                            <li>깊은 풍미에</li>
                            <li>진하고 강렬한 맛을 원하면</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={style.img_box}>
                        <img src={bl_icon}></img>
                    </div>
                    <div className={style.txt_box}>
                        <div className={style.cont_tit}>BLACK EAGLE</div>
                        <ul className={style.cont_txt}>
                            <li>진하고 깊은</li>
                            <li>에스프레소 풍미를</li>
                            <li>다체롭게 즐기고 싶다면</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={style.img_box}>
                        <img src={po_icon}></img>
                    </div>
                    <div className={style.txt_box}>
                        <div className={style.cont_tit}>POUR OVER</div>
                        <ul className={style.cont_txt}>
                            <li>은은한 커피향에</li>
                            <li>부드럽고 깔끔한 풍미를</li>
                            <li>느끼고 싶다면</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={style.img_box}>
                        <img src={ch_icon}></img>
                    </div>
                    <div className={style.txt_box}>
                        <div className={style.cont_tit}>CHEMEX</div>
                        <ul className={style.cont_txt}>
                            <li>풍부한 커피향과</li>
                            <li>균형잡힌 풍미를</li>
                            <li>느끼고 싶다면</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={style.img_box}>
                        <img src={co_icon}></img>
                    </div>
                    <div className={style.txt_box}>
                        <div className={style.cont_tit}>COLD BREW</div>
                        <ul className={style.cont_txt}>
                            <li>달콤함과 부드러운 풍미를</li>
                            <li>동시에 느끼고 싶다면</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Ex_pop;