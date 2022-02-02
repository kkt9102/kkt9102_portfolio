import React from "react";

import '../../resource/css/common.css';
import style from '../../resource/css/main_style.module.css';
import $, { event } from "jquery";
import { Link } from "react-scroll";

import { useMousePosition } from "../../utils/mosuePosition";
import { useScroll } from "../../utils/scrollMove";

import Profil from "./components/profil";
import WebWork from "./components/web_work";
import Contect from "./components/contect";
import Footer from "./components/footer";




function Main() {
    const {x} = useMousePosition();
    const BgStyle = {
        width: x,
        transition: 0.3 + 's'
    }

    const {scrollY} = useScroll();
    // const {scrollMV} = useScroll();
    return (
        
        <div id={style.main_page}>
            <header className={`${scrollY < 500 ? style.y_Top : style.y_move} ${style.main_header} fixed`}>
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
            <section id={style.section_01} className={`${style.section} main_sc_1`}>
                {/* <div className={`${style.sc_01_bg} absolute`} style={BgStyle}>
                </div> */}
                <div className={style.con}>
                    <div className={`${style.sc_bg_1} absolute`}></div>
                    <div className={`${style.sc_bg_2} absolute`}></div>
                    <div className={style.main_deco}>
                        <div className={style.main_tit}>kkt9102</div>
                        <div className={style.main_sub_tit}>Portfolio</div>
                    </div>
                </div>
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