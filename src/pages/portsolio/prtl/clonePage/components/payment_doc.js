import react from "react";

import prtl from '../../clonePage/resource/css/prtl_clone.module.css';

const PayDoc = () => {
    return(
        <>
            <div className={`${prtl.sub_header} flex flex_ai_c`}>
                <div className={prtl.tit}>결재대기함</div>
                <div className={prtl.count}>20<span>건</span></div>
                <div className={prtl.more_btn}><i class="xi-plus"></i></div>
            </div>
            <div className={prtl.list}>
                <ul>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}><span>[근태신청서]</span>자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}><span>[출장신청서]</span>자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                    <li className={`${prtl.dots_g} flex_imp flex_jc_sb`}>
                        <div className={`${prtl.tit} ${prtl.txt_over_hid}`}><span>[품의서]</span>자유게시판 샘플입니다.</div>
                        <div className={prtl.reg_dt}>2022-03-09</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PayDoc;