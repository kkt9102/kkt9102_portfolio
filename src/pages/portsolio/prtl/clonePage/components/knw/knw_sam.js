import Reac from 'react';
import {Link} from 'react-router-dom';

import knw from '../../resource/css/knw.module.css';

const KnwSam = () => {


    return(
        <>
            <ul className={knw.knw_main_board_list}>
                <li className={`${knw.knw_dots}`}>
                    <Link to="">
                        <div className={knw.tit}>최신지식 샘플글 입니다.최신지식 샘플글 입니다.최신지식 샘플글 입니다.최신지식 샘플글 입니다.</div>
                        <div className={knw.reg_dt}>2022.03.05</div>
                    </Link>
                </li>
                <li className={knw.knw_dots}>
                    <Link to="">
                        <div className={knw.tit}>최신지식 샘플글 입니다.</div>
                        <div className={knw.reg_dt}>2022.03.04</div>
                    </Link>
                </li>
                <li className={knw.knw_dots}>
                    <Link to="">
                        <div className={knw.tit}>최신지식 샘플글 입니다.</div>
                        <div className={knw.reg_dt}>2022.03.03</div>
                    </Link>
                </li>
                <li className={knw.knw_dots}>
                    <Link to="">
                        <div className={knw.tit}>최신지식 샘플글 입니다.</div>
                        <div className={knw.reg_dt}>2022.03.02</div>
                    </Link>
                </li>
                <li className={knw.knw_dots}>
                    <Link to="">
                        <div className={knw.tit}>최신지식 샘플글 입니다.</div>
                        <div className={knw.reg_dt}>2022.03.01</div>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default KnwSam;