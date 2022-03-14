import Reac from 'react';

import knw from '../../resource/css/knw.module.css';

// img
import gold from '../../resource/img/knw/medal_g.png';
import silver from '../../resource/img/knw/medal_s.png';
import bronze from '../../resource/img/knw/medal_b.png';
 
const ExcStaff = () => {


    return(
        <>
            <ul className={knw.knw_main_board_list}>
                <li className={`flex`}>
                    <div className={knw.name}><img src={gold} alt=""></img>김은미</div>
                    <div className={knw.dept}>운영지원과</div>
                </li>
                <li className={`flex`}>
                    <div className={knw.name}><img src={silver} alt=""></img>이은미</div>
                    <div className={knw.dept}>혁신행정담당관</div>
                </li>
                <li className={`flex`}>
                    <div className={knw.name}><img src={bronze} alt=""></img>철수</div>
                    <div className={knw.dept}>복지보조금부정수급센터</div>
                </li>
                <li className={`flex`}>
                    <div className={knw.name}><img src={bronze} alt=""></img>박은미</div>
                    <div className={knw.dept}>운영지원과</div>
                </li>
                <li className={`flex`}>
                    <div className={knw.name}><img src={bronze} alt=""></img>최빛나리</div>
                    <div className={knw.dept}>혁신행정담당관</div>
                </li>
            </ul>
        </>
    )
}

export default ExcStaff;