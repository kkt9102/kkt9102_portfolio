import React from "react";
import $ from 'jquery';

import { Link } from "react-scroll";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiProfileLine } from 'react-icons/ri';
import { MdOutlineContactMail } from 'react-icons/md';

import { useMousePosition } from "../../utils/mosuePosition";
import { useScroll } from "../../utils/scrollMove";
import Loding from "../../utils/loding";

import Profil from "./components/profil";
import WebWork from "./components/web_work";
import Contect from "./components/contect";
import Footer from "./components/footer";

import logo from '../../resource/img/favicon.svg';



function Main() {
    $(window).ready(function(){
        setTimeout(function(){
          $('.loding_page').fadeOut();
        },500);
      })

    const {scrollY} = useScroll();

    const PageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPer = (scrollY/PageHeight) * 100;

    const PageWidth = document.documentElement.scrollWidth;

    return (
        <div id='main_page'>
            <Loding/>
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 portfolio" />
                    <meta name="keywords" content="kkt9102,웹 퍼블리셔,포트폴리오,웹 퍼블리셔 포트폴리오,Web Publisher"/>
                </Helmet>
            </HelmetProvider>

            <header className=
                { PageWidth < 780 ? 
                    (`${scrollY < 100 ? 'y_Top' : 'y_move'}  main_header fixed`) : (`${scrollY < 500 ? 'y_Top' : 'y_move'}  main_header fixed`)
                }
            >
                <nav>
                    <ul className="flex flex_jc_e">
                        {/* <div>{scrollPer}</div> */}
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_1" spy={true} smooth={true} title="Home 영역으로 이동" tabIndex="0">
                                { PageWidth < 420 ? <AiOutlineHome/> : <span>Home</span>}
                            </Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_2" spy={true} smooth={true} title="Profile 영역으로 이동" tabIndex="0">
                                { PageWidth < 420 ? <RiProfileLine/> : <span>Profil</span>}
                                
                            </Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_3" spy={true} smooth={true} title="Web Work 영역으로 이동" tabIndex="0">
                                { PageWidth < 420 ? <AiOutlineFundProjectionScreen/> : <span>Web Work</span>}
                            </Link>    
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_4" spy={true} smooth={true} title="Contact 영역으로 이동" tabIndex="0">
                                { PageWidth < 420 ? <MdOutlineContactMail/> : <span>Contact</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id='section_01'className='section main_sc_1'>
                {/* <div className={`${style.sc_01_bg} absolute`} style={BgStyle}>
                </div> */}
                <div className='con'>
                    <div className='main_deco'>
                        <div className='main_tit'>kkt9102</div>
                        <div className='main_sub_tit'>Portfolio</div>
                    </div>
                    <div className="sub_deco">
                        <p>Web Publisher / Front End</p>
                    </div>
                </div>
                <div className='sc_bg_1 fixed'></div>
            </section>
            <Profil />
            <WebWork />
            <Contect />
            <Footer />
            {/* <button onClick={moveToTop}>상단으로</button> */}
        </div>
    )
}

export default Main;