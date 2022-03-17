import PrtlHeader from "./components/header_menu";
import PrtlLeftMenu from "./components/left_menu";

import NormalSlick1 from "./components/slick_slide_1";
import NormalSlick2 from "./components/slick_slide_2";
import RolSlide1 from "./components/rol_slide_1";
import RolSlide2 from "./components/rol_slide_2";
import BoardSet1 from "./components/board_set_1";
import BoardSet2 from "./components/board_set_2";
import NonMail from "./components/non_mail";
import PayDoc from "./components/payment_doc";
import ShareDoc from "./components/share_doc";
import Memos from "./components/memos";
import FooterMenu from "./components/footer_menu";
import Footer from "./components/footer";

import Smaple from './resource/img/sample.gif';

import '../../../../resource/css/common.css';
import '../../../../resource/font/XEIcon/xeicon.css';
import '../../../../resource/font/XEIcon/xeicon.min.css';
import prtl from '../clonePage/resource/css/prtl_clone.module.css';


const CloneMain = () => {

    return(
        <div className={`${prtl.section} flex flex_wrap_wrap`}>
            <div className={`${prtl.cont_body} flex`}>
                {/* left_menu */}
                <div className={prtl.left_menu}>
                    <PrtlLeftMenu/>
                </div>
                <div className={prtl.main_section}>
                    {/* Header */}
                    <nav className={prtl.header_menu}>
                        <PrtlHeader/>
                    </nav>

                    {/* body */}
                    <div className={`${prtl.body_sc} flex flex_jc_sb flex_wrap_wrap`}>
                        <div className={`${prtl.left_sc} flex flex_wrap_wrap`}>
                            <ul className={`${prtl.rol_slide_1} ${prtl.rol_slide} flex relative `}>
                                <RolSlide1/>
                                <div className={prtl.rol_slide_btn}></div>
                            </ul>
                            <div className={`${prtl.board_set_1} ${prtl.board_view}`}>
                                <BoardSet1/>
                            </div>
                            <div className={`${prtl.board_set_2} ${prtl.board_view}`}>
                                <BoardSet2/>
                            </div>
                        </div>
                        <div className={`${prtl.right_sc} flex flex_wrap_wrap`}>
                            <ul className={`${prtl.rol_slide_2} ${prtl.rol_slide}`}>
                                <RolSlide2/>
                                <div className={prtl.rol_slide_btn}></div>
                            </ul>
                            <div className={`${prtl.cont_box} flex flex_jc_sb`}>
                                <div className={prtl.slide_view}>
                                    <div className={`${prtl.slick_slide}`}>
                                        <div className={prtl.slick_slide_btn}><span className={prtl.slide_tit}>알림판</span></div>
                                        <ul>
                                            <NormalSlick1/>
                                        </ul>
                                    </div>
                                    <div className={prtl.issue_vid}>
                                        <div className={prtl.slide_tit}>이슈 동영상</div>
                                        <div>
                                            <a>
                                                <img src={Smaple} alt=""></img>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={prtl.knw_issue}>
                                        <div className={prtl.slide_tit}>권익지식 이음터</div>
                                        <ul>
                                            <NormalSlick2/>
                                        </ul>
                                    </div>
                                </div>
                                <div className={`${prtl.board_view} flex flex_dir_c`}>
                                    <div className={prtl.non_read_mail}>
                                        <NonMail/>
                                    </div>
                                    <div className={prtl.payment_doc}>
                                        <PayDoc/>
                                    </div>
                                    <div className={prtl.share_doc}>
                                        <ShareDoc/>
                                    </div>
                                    <div className={prtl.memos}>
                                        <Memos/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${prtl.foot_menu} flex flex_jc_sb flex_wrap_wrap`}>
                            <div className={`${prtl.slide_tit} flex flex_jc_c flex_ai_c`}>시스템 바로가기</div>
                            <ul>
                                <FooterMenu/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CloneMain;