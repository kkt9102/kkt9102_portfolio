import React from 'react';

import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

const BoardSet1 = () => {
    return(
        <>
            <div className={`${prtl.tab_menu} flex`}>
                <ul className='flex flex_jc_sa'>
                    <li className={prtl.active}><div>공지</div></li>
                    <li><div>인사정보</div></li>
                    <li><div>교육정보</div></li>
                    <li><div>오늘의 메스컴</div></li>
                    <li><div>보도자료</div></li>
                </ul>
                <div className={prtl.more_btn}><i className="xi-plus"></i></div>
            </div>
            <div className={prtl.board_list}>
                <ul>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.공지사항 샘플 글입니다.공지사항 샘플 글입니다.공지사항 샘플 글입니다.공지사항 샘플 글입니다.공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}>공지사항 샘플 글입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default BoardSet1;