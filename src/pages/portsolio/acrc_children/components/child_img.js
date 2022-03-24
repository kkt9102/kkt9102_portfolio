import React, {useState} from "react";
import { useScroll } from "../../../../utils/scrollMove";

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
// img
import child_main from "../../../../resource/img/acrc_child_main.png";
import child_main_mo from "../../../../resource/img/child/acrc_child_main_mo.png";
import cont_1 from "../../../../resource/img/child/child_cont_1.png";
import cont_1_mo from "../../../../resource/img/child/child_cont_1_mo.gif";
import cont_2 from "../../../../resource/img/child/child_cont_2.png";
import cont_2_mo from "../../../../resource/img/child/child_cont_2_mo.gif";
import child_quiz from "../../../../resource/img/child/child_quiz.png";
import child_quiz_mo from "../../../../resource/img/child/child_quiz_mo.gif";
import child_sitemap from "../../../../resource/img/child/child_sitemap.png";
import child_sitemap_mo from "../../../../resource/img/child/child_sitemap_mo.gif";

const ChildImg = () => {
    const {scrollY} = useScroll();
    const PageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPer = (scrollY/PageHeight) * 100;

    const PageWidth = document.documentElement.scrollWidth;

    const [isImg1, setImg1] = useState(false);
    const toggleImg1 = () => {
        setImg1(isImg1 => !isImg1);
    }
    const [isImg2, setImg2] = useState(false);
    const toggleImg2 = () => {
        setImg2(isImg2 => !isImg2);
    }
    const [isImg3, setImg3] = useState(false);
    const toggleImg3 = () => {
        setImg3(isImg3 => !isImg3);
    }
    const [isImg4, setImg4] = useState(false);
    const toggleImg4 = () => {
        setImg4(isImg4 => !isImg4);
    }
    const [isImg5, setImg5] = useState(false);
    const toggleImg5 = () => {
        setImg5(isImg5 => !isImg5);
    }

    if ( PageWidth > 768 ) {
        return (
            <div className='img_box'>
                <ul className='img_list'>
                    <li>
                        <div className='page_img img_box flex flex_jc_c'>
                            <img src={child_main} alt="국민권익위원회 어린이 홈페이지 메인"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 17 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={cont_1} alt="국민권익위원회 어린이 홈페이지 컨텐츠페이지1"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 54 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={cont_2} alt="국민권익위원회 어린이 홈페이지 컨텐츠 페이지2"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 74 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={child_quiz} alt="국민권익위원회 어린이 홈페이지 퀴즈로 배워요 페이지"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 84 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={child_sitemap} alt="국민권익위원회 어린이 홈페이지 사이트맵"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                </ul>
                </div>
        )
    } else {
        return (
            <div className='img_box'>
                <ul className='img_list'>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg1()}><span>어린이 메인화면</span>{isImg1 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg1 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={child_main_mo} alt="국민권익위원회 국문 홈페이지 메인"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg2()}><span>어린이 컨텐츠 화면1</span>{isImg2 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg2 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={cont_1_mo} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg3()}><span>어린이 컨텐츠 화면1</span>{isImg3 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg3 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={cont_2_mo} alt="국민권익위원회 청탁금지법 질의응답 게시판"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg4()}><span>어린이 퀴즈로 배워요 화면</span>{isImg4 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg4 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={child_quiz_mo} alt="국민권익위원회 카드뉴스)자료실"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg5()}><span>어린이 사이트맵 화면</span>{isImg5 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg5 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={child_sitemap_mo} alt="국민권익위원회 카드뉴스)자료실"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ChildImg;