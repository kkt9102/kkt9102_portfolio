import React, { useState } from "react";
import { useScroll } from "../../../../utils/scrollMove";

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
//img
import main_img from "../../../../resource/img/clean/clean_main.png";
import main_img_mo from "../../../../resource/img/clean/clean_main_mo.png";
import main_board from "../../../../resource/img/clean/clean_board.png";
import main_board_mo from "../../../../resource/img/clean/clean_board_mo.png";
import main_sub from "../../../../resource/img/clean/clean_sub_list.png";
import main_sub_mo from "../../../../resource/img/clean/clean_sub_list_mo.png";
import main_pop from "../../../../resource/img/clean/clean_sub_pop.png";
import main_pop_mo from "../../../../resource/img/clean/clean_sub_pop_mo.png";

const CleanImg = () => {
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

    if ( PageWidth > 768 ) {
        return (     
            <div className='img_box'>
                <ul className='img_list'>
                    <li>
                        <div className='img_box flex flex_jc_c'>
                            <img src={main_img} alt="청렴포털 홈페이지 메인"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 18 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={main_board} alt="청렴포털 상담사례 목록"></img>
                        </div>
                        <div className='txt_box'>
                            
                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 44 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={main_sub} alt="청렴포털 청렴마당 기관별 목록"></img>
                        </div>
                        <div className='txt_box'>
                            
                        </div>    
                    </li>
                    <li>
                        <div className={`${scrollPer < 73 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={main_pop} alt="청렴마당"></img>
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
                        <div className="mo_img_btn" onClick={() => toggleImg1()}><span>청렴포털 메인화면</span>{isImg1 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg1 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={main_img_mo} alt="청렴포털 홈페이지 메인"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg2()}><span>청렴포털 상담사례 목록 화면</span>{isImg2 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg2 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={main_board_mo} alt="청렴포털 상담사례 목록"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg3()}><span>청렴포털 청렴마당 기관별 목록 화면</span>{isImg3 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg3 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={main_sub_mo} alt="청렴포털 청렴마당 기관별 목록판"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg4()}><span>청렴마당 화면</span>{isImg4 ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                        <div className={`${isImg4 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={main_pop_mo} alt="청렴마당"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CleanImg; 