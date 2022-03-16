import React from 'react';
import { Link } from 'react-router-dom';

import knw from '../../../resource/css/knw.module.css';

const BoardListBtn = () => {
    return(
        <>
            <div className={`${knw.list_btn_box} flex flex_jc_sb`}>
                <div className={`${knw.left} flex flex_jc_sb`}>
                    <div className={knw.slt_dt_btn}><i className='xi-trash'></i>선택삭제</div>
                    <div className={knw.move_btn}><i className='xi-arrows-h'></i>이동</div>
                    <div className={knw.all_move_btn}><i className='xi-arrows'></i>전체이동</div>
                </div>
                <div className={knw.right}>
                    <div>
                        <Link to="" className={knw.create_btn}>
                            등록
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardListBtn;