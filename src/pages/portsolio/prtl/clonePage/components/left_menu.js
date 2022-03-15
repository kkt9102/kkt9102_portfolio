import react, {useState} from "react";
import { Link } from "react-router-dom";
import '../../../../../resource/css/common.css';
import prtl from '../../clonePage/resource/css/prtl_clone.module.css';


// img
import logo from '../resource/img/acrc_logo.svg';
import icons from '../resource/img/sub_icon1.png';


const PrtlLeftMenu  = () => {
    const [onnara, setOnnara] = useState(false);

    const onnaraMenu = () => {
        setOnnara(!onnara);
    };

    const [e_people, setE_people] = useState(false);

    const e_peopleMenu = () => {
        setE_people(!e_people);
    };

    const [e_peopleAdm, setE_peopleAdm] = useState(false);

    const e_peopleAdmMenu = () => {
        setE_peopleAdm(!e_peopleAdm);
    };


    return (
        <>
            <div className={prtl.logo}>
                <Link to="/clonePage/CloneMain">
                    <img src={logo} alt="국민권익위원회 상 하 로고"></img>
                </Link>
            </div>
            <ul>
                <li className={`${prtl.sub_tit} flex`}>
                    <div className={prtl.bars}>
                        <i className="xi-bars"></i>   
                    </div>
                    <div>업무열람</div>
                    <div className={prtl.refresh}>
                        <i className="xi-refresh"></i>
                    </div>
                    <div className={prtl.setting}>
                        <i className="xi-cog"></i>
                    </div>
                    <div></div>
                </li>
                {/* mld_menu */}
                <li id="onnara" className={`${onnara ? `${prtl.active}` : null} ${prtl.onnara} ${prtl.mld_menu}`} onClick={onnaraMenu}>
                    <div><span>온-나라</span><span className={prtl.count}>49</span></div>
                    <ul>
                        <li className="flex flex_jc_sb">
                            <div>결재대기</div>
                            <div><span>1</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>발송대기</div>
                            <div><span>12</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>접수대기</div>
                            <div><span>8</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>공유·공람</div>
                            <div><span>16</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>재지정</div>
                            <div><span>0</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>메모보고</div>
                            <div><span>12</span>건</div>
                        </li>
                    </ul>
                </li>
                <li className={`${prtl.onara_mail} ${prtl.mld_menu}`}>
                    <div><span>온-나라 메일</span><span className={prtl.count}>1</span></div>
                </li>
                <li id="e_people" className={`${e_people ? `${prtl.active}` : null} ${prtl.e_people} ${prtl.mld_menu}`} onClick={e_peopleMenu}>
                {/* <li className={`${prtl.e_people} ${prtl.mld_menu}`}> */}
                    <div><span>e-사람</span><span className={prtl.count}>10</span></div>
                    <ul>    
                        <li className="flex flex_jc_sb">
                            <div>결재상신</div>
                            <div><span>3</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>결재대기</div>
                            <div><span>7</span>건</div>
                        </li>
                    </ul>
                </li>
                <li id="e_people_admin" className={`${e_peopleAdm ? `${prtl.active}` : null} ${prtl.e_people_admin} ${prtl.mld_menu}`} onClick={e_peopleAdmMenu}>
                {/* <li className={`${prtl.e_people_admin} ${prtl.mld_menu}`}> */}
                    <div><span>국민신문고</span><span className={prtl.count}>5</span></div>
                    <ul>    
                        <li className="flex flex_jc_sb">
                            <div>민원</div>
                            <div>3<span></span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>제안</div>
                            <div><span>1</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>예산낭비신고</div>
                            <div><span>0</span>건</div>
                        </li>
                        <li className="flex flex_jc_sb">
                            <div>국민생각함</div>
                            <div><span>1</span>건</div>
                        </li>
                    </ul>
                </li>

                {/* btm_menu */}
                <li className={`${prtl.plan_share} ${prtl.btm_menu} ${prtl.active} flex flex_wrap_wrap`}>
                    <div className="flex flex_ai_c">
                        <div className={prtl.icon_box}><i className="xi-calendar-check"></i></div>
                        <div>일정공유</div>
                        <div className={prtl.refresh}>
                            <i className="xi-refresh"></i>
                        </div>
                        <div className={prtl.share}>
                            <i className="xi-external-link"></i>
                        </div>
                        <div className={`${prtl.setting} flex`}>
                            <i className="xi-cog"></i>
                        </div>
                    </div>
                    <div className={`${prtl.plan_slide}`}>
                        <div className={`${prtl.plan_header} flex flex_jc_c flex_ai_c`}>
                            <span className={prtl.icon_box}><img src={icons} alt=""></img></span>
                            <span className={prtl.reg_dt}>03.13.</span>
                            <span className={prtl.weeks}>(일)</span>
                        </div>
                        <ul className={prtl.day_plan_list}>
                            <li>
                                <div className="flex">
                                    <span className={prtl.type}>전체</span>
                                    <span className={prtl.time}>14:00</span>
                                    <span className={prtl.tit}>열린혁신전략회의</span>
                                </div>
                                <div className="flex">
                                    <span className={prtl.type}>전체</span>
                                    <span className={prtl.time}>15:00</span>
                                    <span className={prtl.tit}>국정감사 사전점검회의</span>
                                </div>
                                <div className="flex">
                                    <span className={prtl.type}>개인</span>
                                    <span className={prtl.time}>16:00</span>
                                    <span className={prtl.tit}>용역사업 월간회의</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={`${prtl.cadre_plan} ${prtl.btm_menu} flex`}>
                    <div className={prtl.icon_box}><i className="xi-briefcase"></i></div>
                    <div className={`${prtl.share} flex flex_jc_sb`}><span>간부일정</span><span><i className="xi-external-link"></i></span></div>                    
                </li>
                <li className={`${prtl.all_alert} ${prtl.btm_menu} flex`}>
                    <div className={prtl.icon_box}><i className="xi-bell-o"></i></div>
                    <div className={`${prtl.all_alert_btn} flex flex_jc_sb`}><span>통합알림</span><span className={prtl.count}>30</span></div>
                </li>
                <li className={`${prtl.survey} ${prtl.btm_menu} flex`}>
                    <div className={prtl.icon_box}><i className="xi-paper-o"></i></div>
                    <div className={`${prtl.survay_btn} flex flex_jc_sb`}><span>설문조사</span><span className={prtl.count}>30</span></div>
                </li>
            </ul>   
        </>
    )
}

export default PrtlLeftMenu;