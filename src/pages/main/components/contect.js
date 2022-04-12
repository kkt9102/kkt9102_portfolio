import React from "react";
// import useInput from "../../../utils/useInput";
import { RiKakaoTalkFill, RiGithubFill } from "react-icons/ri";
import { FaBloggerB } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

const Contect = () => {

    const PageWidth = document.documentElement.scrollWidth;

    // e-mail
    // const [name, onChangeName] = useInput(''); 
    // const [email, onChangeEmail] = useInput(''); 
    // const [contents, onChangeContents] = useInput(''); 
    
    // const sendEmail = useCallback((e) => { 
    //     e.preventDefault(); const inputNum = e.target.childElementCount - 1;
    //     const data = new FormData(e.target); 
    //     const entries = data.entries(); let failNum = 0; 
    //     for (let i = 0; i < inputNum; i++) { 
    //         const next = entries.next(); 
    //         const key = next.value[0];
    //         const value = next.value[1]; 
    //         if (!value) { 
    //             failNum++;
    //             if (key === 'name') {
    //                 alert('이름이 비어있습니다.')
    //             } else if (key === 'email') {
    //                 alert('이메일 주소가 비어있습니다.')
    //             } else if (key === 'contents') {
    //                 alert('메일 내용이 비어있습니다.')
    //             }
    //             break; 
    //         } 
    //     } if (!failNum) { 
    //         emailjs.sendForm( 'service_mg5nlfc', 'template_2xziz8w', e.target, 'user_do6P99tYNFqedeqA4YKqe' )
    //         .then(
    //             (result) => { 
    //                 console.log('result.text', result.text);
    //                 alert('메일이 발송되었습니다.');
    //                 document.getElementById('SendEmail').style.display = 'none';
    //                 document.getElementById('send_and_text').style.display = 'flex';
                    
    //          }, 
    //             (error) => { 
    //                 console.log(error.text);
    //                 alert('메일 발송이 실패했습니다. 다시 시도하시거나 아래의 g-mail 을 이용해주세요.')
    //         }); 
    //     } }, 
    //     []);

    return(
        <>
            <section id='section_04' className='section main_sc_4'>
                <div className='con'>
                    <div className='cont_box flex flex_wrap_wrap'>
                        <div className='sc_tit flex flex_jc_c'>Contact Me</div>
                        <div className="txt_box">
                            <ul className="flex flex_jc_c flex_wrap_wrap">
                                <li className="pc_view flex_jc_c">Email : kkt9102@gmail.com / creater@kakao.com</li>
                                <li className="pc_view flex_jc_c">KakaoTalk : kkt9102</li>
                            </ul>
                        </div>
                        <div className='link_list'>
                            <ul className='flex flex_jc_c'>
                                <li className="send_mail">
                                    {/* <a href="https://mail.google.com/mail/?view=cm&fs=1&to=creater@kakao.com" target="_blank" rel="noopener noreferrer" title="g-mail 보내기 새창으로 가기"> */}
                                    <a href={PageWidth > 786 ? "https://mail.google.com/mail/?view=cm&fs=1&to=creater@kakao.com" : "mailto:creater@kakao.com"} target="_blank" rel="noopener noreferrer" title="g-mail 보내기 새창으로 가기">
                                        <div className="svg_box"></div>
                                        {/* { PageWidth > 550 ? '' : <div>G-Mail 보내기</div>} */}
                                    </a>
                                </li>
                                <li className='opentok'>
                                    <a href="https://open.kakao.com/o/swDf3n0c" target="_blank" rel="noopener noreferrer" title="카카오톡 오픈채팅">
                                        <RiKakaoTalkFill/>
                                        {/* { PageWidth > 550 ? '' : <div>오픈채팅 보내기</div>} */}
                                    </a>
                                </li>
                                <li className="github">
                                    <a href="https://github.com/kkt9102" target="_blank" rel="noopener noreferrer" title="깃허브 새창으로 가기">
                                        <RiGithubFill/>
                                        {/* { PageWidth > 550 ? '' : <div>Github</div>} */}
                                    </a>
                                </li>
                                <li className="git_blog">
                                    <a href="https://kkt9102.github.io/" target="_blank" rel="noopener noreferrer" title="블로그 새창으로 가기">
                                        <FaBloggerB/>
                                        {/* { PageWidth > 550 ? '' : <div>Blog</div>} */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="page_copyright">
                            <strong>해당 페이지는 상업적 용도가 아닌 개인 포트폴리오용으로 제작되었습니다.</strong>    
                        </div>                
                        {/* <div className='contect_me_form'>
                            <form id="SendEmail" name="SendEmail" onSubmit={sendEmail}>
                                <div className='contect_header flex'>
                                    <div className='from_name'>
                                        <div className="title">Name</div>
                                        <input type="text" name="name" id="from_name" value={name} onChange={onChangeName} placeholder="성함 or 회사명" title="보내는 분의 성함이나 회사명을 입력해주세요."></input>
                                    </div>
                                    <div className='email_box'>
                                        <div className="title">E-Mail</div>
                                        <input type="email" name="email" id="email" value={email} onChange={onChangeEmail} placeholder="답장을 받으실 이메일을 입력해주세요." title="답장을 받으실 이메일을 입력해주세요."></input>
                                    </div>
                                </div>
                                <div className='email_contents_box'>
                                    <div>E-Mail contents</div>
                                    <textarea name="contents" id="contents" placeholder="내용을 입력해주세요." value={contents} onChange={onChangeContents} title="보내실 메일의 내용을 입력해주세요."></textarea>
                                </div>
                                <div className='contect_btn flex flex_jc_c flex_ai_'>
                                    <input type="submit" value="보내기" />
                                </div>
                            </form>

                            <div id="send_and_text">
                                <span className="txt3">메일이 발송되었습니다.</span>
                                <span className="txt2">메일을 확인한 후 빠른 시일 내에 답장을 드리겠습니다.</span>
                                <span className="txt2">웹 퍼블리셔 김기태 입니다. 감사합니다!</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contect;