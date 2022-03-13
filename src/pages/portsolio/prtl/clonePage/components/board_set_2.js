import React from 'react';

import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

const BoardSet2 = () => {
    return(
        <>
            <div className={`${prtl.tab_menu} flex`}>
                <ul className='flex flex_jc_sa'>
                    <li className={prtl.active}><div>자유게시판</div></li>
                    <li><div>행정자료DB</div></li>
                    <li><div>MOU게시판</div></li>
                    <li><div>S/W 자료제공</div></li>
                </ul>
                <div className={prtl.more_btn}><i className="xi-plus"></i></div>
                <div className={prtl.setting_btn}><i className="xi-cog"></i></div>
            </div>
            <div className={prtl.board_list}>
                <ul>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>자유게시판 샘플입니다.자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>자유게시판 샘플입니다.자유게시판 샘플입니다.자유게시판 샘플입니다.자유게시판 샘플입니다.자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>자유게시판 샘플입니다.자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>자유게시판 샘플입니다.자유게시판 샘플입니다.자유게시판 샘플입니다.자유게시판 샘플입니다.자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default BoardSet2;