import React from 'react';

import knw from '../../resource/css/knw.module.css';

const KnwlgLeftMenu = () => {
    return (
        <>
            <div className={knw.knwlg_left}>
                <ul className='flex flex_wrap_wrap'>
                    <li className={`${knw.all_view} ${knw.active} flex flex_jc_sb flex_ai_c`}>
                        <span>전체보기</span><i className="xi-bars"></i>
                    </li>
                    <li className={`flex flex_jc_sb flex_ai_c`}>
                        <span>조직별 보기</span><i className="xi-plus"></i>
                    </li>
                    <li className={`flex flex_jc_sb flex_ai_c`}>
                        <span>유형별 보기</span><i className="xi-plus"></i>
                    </li>
                    <li className={`flex flex_jc_sb flex_ai_c`}>
                        <span>업무별 보기</span><i className="xi-plus"></i>
                    </li>
                    <li className={`flex flex_jc_sb flex_ai_c`}>
                        <span>인기/추천 지식</span>
                    </li> 
                    <li className={`flex flex_jc_sb flex_ai_c`}>
                        <span>우수직원 활동현황</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default KnwlgLeftMenu;