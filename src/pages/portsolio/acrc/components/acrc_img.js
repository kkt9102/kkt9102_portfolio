import React, {useState} from "react";
import { useScroll } from "../../../../utils/scrollMove";
// img
import acrc_main from "../../../../resource/img/acrc_main.png";
import acrc_main_mo from "../../../../resource/img/acrc/acrc_main_mo.gif";
import main_board_img_1 from "../../../../resource/img/acrc/main_board_list_1.png";
import main_board_img_1_mo  from "../../../../resource/img/acrc/main_board_list_1_mo.gif";
import main_board_img_2 from "../../../../resource/img/acrc/main_board_list_2.png";
import main_board_img_2_mo from "../../../../resource/img/acrc/main_board_list_2_mo.gif";
import main_board_img_3 from "../../../../resource/img/acrc/main_board_list_3.png";
import main_board_img_4 from "../../../../resource/img/acrc/main_board_list_4.png";
import main_cdns_img from "../../../../resource/img/acrc/main_cdns_list.png";
import main_cdns_img_mo from "../../../../resource/img/acrc/main_cdns_list_mo.gif";


const AcrcImg = () => {
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
                            <img src={acrc_main} alt="국민권익위원회 국문 홈페이지 메인"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 32 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={main_board_img_1} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 52 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={main_board_img_2} alt="국민권익위원회 청탁금지법 질의응답 게시판"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className={`${scrollPer < 82 ? 'hide' : 'show' } img_box flex flex_jc_c`}>
                            <img src={main_cdns_img} alt="국민권익위원회 카드뉴스)자료실"></img>
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
                        <div className="mo_img_btn" onClick={() => toggleImg1()}>국문 메인화면</div>
                        <div className={`${isImg1 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={acrc_main_mo} alt="국민권익위원회 국문 홈페이지 메인"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg2()}>국문 일반게시판 목록</div>
                        <div className={`${isImg2 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={main_board_img_1_mo} alt="국민권익위원회 부패방지(통합자료실,일반형)자료실"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg3()}>국문 기능게시판 목록</div>
                        <div className={`${isImg3 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={main_board_img_2_mo} alt="국민권익위원회 청탁금지법 질의응답 게시판"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                    <li>
                        <div className="mo_img_btn" onClick={() => toggleImg4()}>국문 카드뉴스형 게시판 목록</div>
                        <div className={`${isImg4 ? "show" : "hide"} img_box flex flex_jc_c`}>
                            <img src={main_cdns_img_mo} alt="국민권익위원회 카드뉴스)자료실"></img>
                        </div>
                        <div className='txt_box'>

                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AcrcImg;