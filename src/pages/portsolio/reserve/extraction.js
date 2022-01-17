import { useState, useEffect } from "react";
import style from "../reserve/resource/css/Reserve.module.css";

function Extrantion_list(){
    return (
        <>
            <nav className={style.extraction_list}>
                <ul className="flex flex_jc_sb">
                    <li id={style.clover}className={style.border_b}>
                        <div className="flex flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img></img>
                            </div>
                            <div className={style.txt_box}>
                                <div className={style.sub_tit}></div>
                                <div className={style.sub_txt}></div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img></img>
                            </div>
                            <div className={style.txt_box}>
                                <div className={style.sub_tit}></div>
                                <div className={style.sub_txt}></div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img></img>
                            </div>
                            <div className={style.txt_box}>
                                <div className={style.sub_tit}></div>
                                <div className={style.sub_txt}></div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img></img>
                            </div>
                            <div className={style.txt_box}>
                                <div className={style.sub_tit}></div>
                                <div className={style.sub_txt}></div>
                            </div>
                        </div>
                    </li>
                    <li className={style.border_b}>
                        <div className="flex flex_wrap_wrap">
                            <div className={style.img_box}>
                                <img></img>
                            </div>
                            <div className={style.txt_box}>
                                <div className={style.sub_tit}></div>
                                <div className={style.sub_txt}></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Extrantion_list;