import React,{ useCallback } from "react";
import useInput from "../../../utils/useInput";
import { Link } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';

const Contect = () => {

    // e-mail
    const [name, onChangeName] = useInput(''); 
    const [email, onChangeEmail] = useInput(''); 
    const [contents, onChangeContents] = useInput(''); 
    
    const sendEmail = useCallback((e) => { 
        e.preventDefault(); const inputNum = e.target.childElementCount - 1;
        const data = new FormData(e.target); 
        const entries = data.entries(); let failNum = 0; 
        for (let i = 0; i < inputNum; i++) { 
            const next = entries.next(); 
            const key = next.value[0];
            const value = next.value[1]; 
            if (!value) { 
                failNum++; 
                alert(`${key}이(가) 비어있습니다.`);
                break; 
            } 
        } if (!failNum) { 
            emailjs.sendForm( 'service_mg5nlfc', 'template_2xziz8w', e.target, 'user_do6P99tYNFqedeqA4YKqe' )
            .then(
                (result) => { 
                    console.log('result.text', result.text);
                    alert('메일이 발송되었습니다. 3~4일내로 답변을 드리겠습니다.');
             }, 
                (error) => { 
                    console.log(error.text);
                    alert('메일 발송이 실패했습니다. 다시 시도하시거나 아래의 g-mail 을 이용해주세요.')
            }); 
        } }, 
        []);
    return(
        <>
            <section id='section_04' className='section main_sc_4'>
                <div className='con'>
                    <div className='cont_box flex flex_wrap_wrap'>
                        <div className='sc_tit flex flex_jc_c'>Contect Me</div>
                        <div className='link_list'>
                            <ul className='flex flex_jc_c flex_wrap_wrap'>
                                <li className="send_mail">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=creater@kakao.com" target="_blank" rel="noopener noreferrer" title="g-mail 보내기"><div className="svg_box"></div></a>
                                </li>
                                <li className='opentok'>
                                    <a href="https://open.kakao.com/o/swDf3n0c" target="_blank" rel="noopener noreferrer" title="카카오톡 오픈체팅"><RiKakaoTalkFill/></a>
                                </li>
                            </ul>
                        </div>                  
                        <div className='contect_me_form'>
                            <form name="SendEmail" onSubmit={sendEmail}>
                                <div className='contect_header flex'>
                                    <div className='from_name'>
                                        <div>Name</div>
                                        <input type="text" name="name" id="from_name" value={name} onChange={onChangeName} placeholder="성함 or 회사명" title="보내는 분의 성함이나 회사명을 입력해주세요."></input>
                                    </div>
                                    <div className='email_box'>
                                        <div>E-Mail Address</div>
                                        <input type="email" name="email" id="email" value={email} onChange={onChangeEmail} placeholder="답장을 받으실 이메일을 입력해주세요." title="답장을 받으실 이메일을 입력해주세요."></input>
                                    </div>
                                </div>
                                <div className='email_contents_box'>
                                    <div>E-Mail contents</div>
                                    <textarea placeholder="내용을 입력해주세요." value={contents} onChange={onChangeContents} title="보내실 메일의 내용을 입력해주세요." name="contents"></textarea>
                                </div>
                                <div className='contect_btn flex flex_jc_c flex_ai_'>
                                    <input type="submit" value="보내기" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contect;