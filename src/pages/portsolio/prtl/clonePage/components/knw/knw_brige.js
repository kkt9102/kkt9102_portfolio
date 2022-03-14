import React from 'react';

import knw from '../../resource/css/knw.module.css';

const KnwBrige = () => {
    return(
        <>
            <ul className='flex flex_jc_sb'>
                <li>
                    <div className={knw.cont_box}>
                        <div className={`${knw.cate} flex flex_jc_c flex_ai_c`}>카테고리</div>
                        <div className={knw.contents}>권익지식 이음터 글 샘플입니다. 권익지식 이음터 글 샘플입니다.</div>
                        <div className={knw.reg_dt}>2022-03-01</div>
                    </div>
                    <div className={`${knw.icon_box} flex flex_jc_e flex_ai_c`}>
                        <div className={`${knw.like}`}>
                            <i className='xi-thumbs-up'></i>
                            <span className={knw.count}>3</span>
                        </div>
                        <div className={`${knw.cmt}`}>
                            <i className='xi-message'></i>
                            <span className={knw.count}>4</span>
                        </div>
                        <div className={`${knw.select}`}>
                            <i className='xi-crown'></i>
                            <span className={knw.count}>1</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={knw.cont_box}>
                        <div className={`${knw.cate} flex flex_jc_c flex_ai_c`}>카테고리</div>
                        <div className={knw.contents}>권익지식 이음터 글 샘플입니다. </div>
                        <div className={knw.reg_dt}>2022-02-26</div>
                    </div>
                    <div className={`${knw.icon_box} flex flex_jc_e flex_ai_c`}>
                        <div className={`${knw.cmt}`}>
                            <i className='xi-message'></i>
                            <span className={knw.count}>2</span>
                        </div>
                        <div className={`${knw.select}`}>
                            <i className='xi-crown'></i>
                            <span className={knw.count}>1</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={knw.cont_box}>
                        <div className={`${knw.cate} flex flex_jc_c flex_ai_c`}>카테고리</div>
                        <div className={knw.contents}>글 샘플입니다. </div>
                        <div className={knw.reg_dt}>2022-02-21</div>
                    </div>
                    <div className={`${knw.icon_box} flex flex_jc_e flex_ai_c`}>
                        <div className={`${knw.select}`}>
                            <i className='xi-crown'></i>
                            <span className={knw.count}>6</span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default KnwBrige;