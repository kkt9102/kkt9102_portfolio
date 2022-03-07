import react from "react";
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {FiSearch, FiRotateCw} from 'react-icons/fi';
import {VscThreeBars} from 'react-icons/vsc';
import {RiSettings3Fill} from 'react-icons/ri';

import '../../../../resource/css/common.css';
import prtl from '../../../../resource/css/prtl_clone.module.css';

// img
import logo from './img/acrc_logo.svg';

const CloneMain = () => {
    return(
        <div className={`${prtl.section} flex`}>
            <div className={prtl.left_menu}>
                <div className={prtl.logo}>
                    <img src={logo} alt="국민권익위원회 상 하 로고"></img>    
                </div>
                <ul>
                    <li className="flex">
                        <div className={prtl.bars}>
                            <VscThreeBars/>    
                        </div>
                        <div>업무열람</div>
                        <div className={prtl.refresh}>
                            <FiRotateCw/>
                        </div>
                        <div className={prtl.setting}>
                            <RiSettings3Fill/>    
                        </div>
                        <div></div>
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
                            <input type="text"></input>
                            <button><FiSearch/></button>
                        </li>
                        <li className={`${prtl.user_search} flex`}>
                            <div className={prtl.menu_tit}>
                                <label>직원검색</label>
                            </div>
                            <input type="text"></input>
                            <button><FiSearch/></button>
                        </li>
                        <li>
                            <div className={`${prtl.user_info} flex`}>
                                <span>사용자 님</span>
                                <span>(사용자의 부서명)</span>
                            </div>
                            <div></div>
                            <div></div>
                        </li>
                    </ul>
                    <ul className={`${prtl.btm_menu} flex`}>
                        <li>온-나라</li>
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
            </div>
        </div>
    )
}

export default CloneMain;