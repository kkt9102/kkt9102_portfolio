import React from "react";
import style from "../../../resource/css/main_style.module.css";

const Contect = () => {
    return(
        <>
            <section id={style.section_04} className={style.section}>
                <div className={style.con}>
                    <div className={style.cont_box}>
                        <div className={`${style.sc_tit} flex flex_jc_c`}>Contect Me</div>
                        <div className={style.contect_me_form}>
                            <form>
                                <input type="hidden" value=""></input>
                                <input type="hidden" value=""></input>
                                <input type="text" name="email" id="email" placeholder="보내는분의 이메일을 입력해주세요."></input>
                                <textarea placeholder="내용을 입력해주세요."></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contect;