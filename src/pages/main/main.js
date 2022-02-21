import React from "react";

import { Link } from "react-scroll";
import { Helmet } from 'react-helmet';

import { useMousePosition } from "../../utils/mosuePosition";
import { useScroll } from "../../utils/scrollMove";

import Profil from "./components/profil";
import WebWork from "./components/web_work";
import Contect from "./components/contect";
import Footer from "./components/footer";




function Main() {

    // const {x} = useMousePosition();
    // const BgStyle = {
    //     width: x
    // }

    // const PageWidth = document.documentElement.clientWidth;

    const {scrollY} = useScroll();

    return (
        <div id='main_page'>
            <Helmet>
                <title>kkt9102 Portfolio</title>
                <meta charSet="utf-8" />
                <meta name="description" content="kkt9102 portfolio" />
                <meta name="keywords" content="kkt9102,웹 퍼블리셔,포트폴리오,웹 퍼블리셔 포트폴리오,Web Publisher"/>
            </Helmet>

            <header className={`${scrollY < 500 ? 'y_Top' : 'y_move'}  main_header fixed`}>
                <nav>
                    <ul className="flex flex_jc_e">
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_1" spy={true} smooth={true} title="Home 영역으로 이동" tabIndex="0">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_2" spy={true} smooth={true} title="Profile 영역으로 이동" tabIndex="0">
                                <span>Profil</span>
                            </Link>
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_3" spy={true} smooth={true} title="Web Work 영역으로 이동" tabIndex="0">
                                <span>Web Work</span>
                            </Link>    
                        </li>
                        <li className="flex flex_ai_c">
                            <Link to="main_sc_4" spy={true} smooth={true} title="Contact 영역으로 이동" tabIndex="0">
                                <span>Contact</span>
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