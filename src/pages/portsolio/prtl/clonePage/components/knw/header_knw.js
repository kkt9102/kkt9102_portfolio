import React from "react";
import { Link } from 'react-router-dom';

import '../../../../../../resource/css/common.css';
import knw from '../../resource/css/knw.module.css';

// img
import Logo from '../../resource/img/knw/knw_logo.png';


const KnwHeader = () => {
    return (
        <>
            <nav className={`${knw.header} flex flex_jc_sb flex_ai_c`}>
                <ul className={knw.logo}>
                    <li>
                        <Link to="/clonePage/knwMain">
                            <img src={Logo} alt="혁신게시판 메인으로 이동"></img>
                        </Link>
                    </li>
                </ul>
                <ul className={`${knw.menu_box} flex flex_jc_sb`}>
                    <li>
                        <Link to="/clonePage/components/knw/KnwlgBoard1"><span>지식마당</span></Link>
                    </li>
                    <li>
                        <Link to=""><span>권익지식 이음터</span></Link>
                    </li>
                    <li>
                        <Link to="/clonePage/components/knw/KnwSamType"><span>권익샘</span></Link>
                    </li>
                    <li>
                        <Link to=""><span>공지사항</span></Link>
                    </li>
                    <li>
                        <Link to=""><span>담당자/관리자전용</span></Link>
                    </li>
                </ul>
                <ul className={knw.prtl_main}>
                    <li>
                        <Link to="/clonePage/CloneMain">
                            <span className="flex flex_jc_c flex_ai_c">인트라넷<i className="xi-external-link"></i></span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default KnwHeader;