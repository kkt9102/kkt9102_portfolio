import react from "react";
import {BsFillBookmarkStarFill} from 'react-icons/bs';

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

import Smaple from './resource/img/sample.gif';

import '../../../../resource/css/common.css';
import '../../../../resource/font/XEIcon/xeicon.css';
import '../../../../resource/font/XEIcon/xeicon.min.css';
import prtl from '../clonePage/resource/css/prtl_clone.module.css';

// img
import logo from './resource/img/acrc_logo.svg';

const CloneMain = () => {

    return(
        <div className={`${prtl.section} flex`}>
            <div className={`${prtl.cont_body} flex`}>
                <div className={prtl.left_menu}>
                    <div className={prtl.logo}>
                        <img src={logo} alt="국민권익위원회 상 하 로고"></img>    
                    </div>
                    <ul>
                        <li className={`${prtl.sub_tit} flex`}>
                            <div className={prtl.bars}>
                                <i class="xi-bars"></i>   
                            </div>
                            <div>업무열람</div>
                            <div className={prtl.refresh}>
                                <i class="xi-refresh"></i>
                            </div>
                            <div className={prtl.setting}>
                                <i class="xi-cog"></i>
                            </div>
                            <div></div>
                        </li>
                        {/* mld_menu */}
                        <li className={`${prtl.onnara} ${prtl.mld_menu}`}>
                            <div><span>온-나라</span><span className={prtl.count}>0</span></div>
                            <ul>
                                <li>
                                    <div>결재대기</div>
                                    <div><span></span>건</div>
                                </li>
                                <li>
                                    <div>발송대기</div>
                                    <div><span></span>건</div>
                                </li>
                                <li>
                                    <div>접수대기</div>
                                    <div><span></span>건</div>
                                </li>
                                <li>
                                    <div>공유·공람</div>
                                    <div><span></span>건</div>
                                </li>
                                <li>
                                    <div>재지정</div>
                                    <div><span></span>건</div>
                                </li>
                                <li>
                                    <div>메모보고</div>
                                    <div><span></span>건</div>
                                </li>
                            </ul>
                        </li>
                        <li className={`${prtl.onara_mail} ${prtl.mld_menu}`}>
                            <div><span>온-나라 메일</span><span className={prtl.count}>1</span></div>
                        </li>
                        <li className={`${prtl.e_people} ${prtl.mld_menu}`}>
                            <div><span>e-사람</span><span className={prtl.count}>10</span></div>
                            <ul>    
                                <li>
                                    <div>결재상신</div>
                                    <div><span></span>건</div>
                                </li>
                                <li>
                                    <div>결재대기</div>
                                    <div><span></span>건</div>
                                </li>
                            </ul>
                        </li>
                        <li className={`${prtl.e_people_admin} ${prtl.mld_menu}`}>
                            <div><span>국민신문고</span><span className={prtl.count}>30</span></div>
                        </li>

                        {/* btm_menu */}
                        <li className={`${prtl.plan_share} ${prtl.btm_menu} flex`}>
                            <div className={prtl.icon_box}><i class="xi-calendar-check"></i></div>
                            <div>일정공유</div>
                            <div className={prtl.refresh}>
                                <i class="xi-refresh"></i>
                            </div>
                            <div className={prtl.share}>
                                <i class="xi-external-link"></i>
                            </div>
                            <div className={prtl.setting}>
                                <i class="xi-cog"></i>
                            </div>
                        </li>
                        <li className={`${prtl.cadre_plan} ${prtl.btm_menu} flex`}>
                            <div className={prtl.icon_box}><i class="xi-briefcase"></i></div>
                            <div>간부일정</div>
                            <div className={prtl.share}>
                                <i class="xi-external-link"></i>
                            </div>
                        </li>
                        <li className={`${prtl.all_alert} ${prtl.btm_menu} flex`}>
                            <div className={prtl.icon_box}><i class="xi-bell-o"></i></div>
                            <div><span>통합알림</span><span className={prtl.count}>30</span></div>
                        </li>
                        <li className={`${prtl.survey} ${prtl.btm_menu} flex`}>
                            <div className={prtl.icon_box}><i class="xi-paper-o"></i></div>
                            <div><span>설문조사</span><span className={prtl.count}>30</span></div>
                        </li>
                    </ul>    
                </div>
                <div className={prtl.main_section}>
                    <nav className={prtl.header_menu}>
                        <ul className={`${prtl.top_menu} flex`}>
                            <li className={`${prtl.search} flex`}>
                                <div className={prtl.menu_tit}>
                                    <label>통합검색</label>
                                </div>
                                <input type="text" placeholder="검색어를 입력하세요"></input>
                                <button><i class="xi-search"></i></button>
                            </li>
                            <li className={`${prtl.user_search} flex`}>
                                <div className={prtl.menu_tit}>
                                    <label>직원검색</label>
                                </div>
                                <select>
                                    <option>이름</option>
                                    <option>부서명</option>
                                </select>
                                <input type="text" placeholder="이름을 입력하세요"></input>
                                <button><i class="xi-search"></i></button>
                            </li>
                            <li className={`${prtl.user_info} flex flex_ai_c flex_jc_e`}>
                                <div className="">
                                    <span className={prtl.name}><span>사용자</span>님</span>
                                    <span className={prtl.dept}>(사용자의 부서명)</span>
                                </div>
                                <div className={prtl.user_setting}><i class="xi-cog"></i></div>
                                <div className={prtl.logout}><i class="xi-lock"></i></div>
                                <ul className={`${prtl.employee_op} flex flex_ai_c`}>
                                    <li>홈페이지 관리자</li>
                                    <li>인트라넷 관리자</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className={`${prtl.btm_menu} flex`}>
                            <li>온-나라<i class="xi-documents-o"></i></li>
                            <li>공지</li>
                            <li>소식</li>
                            <li>소통</li>
                            <li>일정공유</li>
                            <li>자료공유</li>
                            <li>혁신게시판</li> 
                            <li>업무지원</li>
                            <li className={prtl.bookmark}>
                                <BsFillBookmarkStarFill/>    
                            </li>
                        </ul>
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
        </div>
    )
}

export default CloneMain;