import React from "react";
import { RiKakaoTalkFill, RiGithubFill, RiMailSendLine } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";

const Contect = () => {

    return(
        <>
            <section id='section_04' className='section main_sc_4'>
                <div className='con'>
                    <div className='cont_box'>
                        <div className='sc_tit flex flex_jc_c'>Contect Me</div>
                        {/* <div className='contect_me_form'>
                            <form action="" name="SendEmail">
                                <input type="hidden" name="MyName" value="김기태"></input>
                                <input type="hidden" name="MyEmail" value="creater@kakao.com"></input>
                                <div className='contect_header flex'>
                                    <div className='from_name'>
                                        <div>Name</div>
                                        <input type="text" name="from_name" id="from_name" placeholder="성함 or 회사명" title="보내는 분의 성함이나 회사명을 입력해주세요."></input>
                                    </div>
                                    <div className='email_box'>
                                        <div>E-Mail Address</div>
                                        <input type="text" name="email" id="email" placeholder="답장을 받으실 이메일을 입력해주세요." title="답장을 받으실 이메일을 입력해주세요."></input>
                                    </div>
                                </div>
                                <div className='email_contents_box'>
                                    <div>E-Mail contents</div>
                                    <textarea placeholder="내용을 입력해주세요." title="보내실 메일의 내용을 입력해주세요."></textarea>
                                </div>
                                <div className='contect_btn flex flex_jc_c flex_ai_'>
                                    <button>보내기</button>
                                </div>
                            </form>
                        </div> */} 
                        
                        <div className='link_list'>
                            <ul className='flex flex_jc_c flex_wrap_wrap'>
                                <li className="send_mail">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kkt9102@gmail.com" target="_blank" rel="noopener noreferrer" title="g-mail 보내기"><div className="svg_box"></div></a>
                                </li>
                                <li className='opentok'>
                                    <a href="https://open.kakao.com/o/swDf3n0c" target="_blank" rel="noopener noreferrer" title="카카오톡 오픈체팅"><RiKakaoTalkFill/></a>
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