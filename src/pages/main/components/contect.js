import React from "react";
import style from "../../../resource/css/main_style.module.css";
import { RiKakaoTalkFill, RiGithubFill, RiPenNibFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";

const Contect = () => {
    return(
        <>
            <section id={style.section_04} className={`${style.section} main_sc_4`}>
                <div className={style.con}>
                    <div className={style.cont_box}>
                        <div className={`${style.sc_tit} flex flex_jc_c`}>Contect Me</div>
                        <div className={style.contect_me_form}>
                            <form>
                                <input type="hidden" value=""></input>
                                <input type="hidden" value=""></input>
                                <div className={`${style.contect_header} flex`}>
                                    <div className={style.from_name}>
                                        <div>Name</div>
                                        <input type="text" name="from_name" id="from_name" placeholder="성함 or 회사명" title="보내는 분의 성함이나 회사명을 입력해주세요."></input>
                                    </div>
                                    <div className={style.email_box}>
                                        <div>E-Mail Address</div>
                                        <input type="text" name="email" id="email" placeholder="답장을 받으실 이메일을 입력해주세요." title="답장을 받으실 이메일을 입력해주세요."></input>
                                    </div>
                                </div>
                                <div className={style.email_contents_box}>
                                    <div>E-Mail contents</div>
                                    <textarea placeholder="내용을 입력해주세요." title="보내실 메일의 내용을 입력해주세요."></textarea>
                                </div>
                                <div className={`${style.contect_btn} flex flex_jc_c flex_ai_c`}>
                                    <button>보내기</button>
                                </div>
                            </form>
                        </div>

                        <div className={style.link_list}>
                            <ul className={` flex`}>
                                <li className={style.opentok}>
                                    <a href="https://open.kakao.com/o/swDf3n0c" target="_blank" rel="noopener noreferrer" title="카카오톡 오픈체팅"><RiKakaoTalkFill/></a>
                                </li>
                                <li className={style.github}>
                                    <a href="https://github.com/kkt9102" target="_blank" rel="noopener noreferrer" title="깃허브 바로가기"><RiGithubFill/></a>
                                </li>
                                <li className={style.gitblog}>
                                    <a href="https://kkt9102.github.io/"  target="_blank" rel="noopener noreferrer" title="블로그 바로가기"><FaBlogger/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contect;