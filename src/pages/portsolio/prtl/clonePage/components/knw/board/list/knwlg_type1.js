import React from 'react';

import knw from '../../../../resource/css/knw.module.css';

import Icon from '../../../../resource/img/knw/search_icon.png';

const KnwlgType1 = () => {
    return(
        <div className={knw.knwlg_right}>
            <div className={`${knw.knwlg_board_header} flex flex_jc_sb flex_ai_c`}>
                <div className={knw.knwlg_tit}>지식목록</div>
                <div className={knw.print}><i className="xi-print"></i></div>
            </div>

            <div className={knw.search_form}>
                <form>
                    <table>
                        <colgroup>
                            <col width="120"></col>
                            <col width="816"></col>
                        </colgroup>
                        {/* <caption>지식마당 검색조건 영역</caption> */}
                        <tbody>
                            <tr>
                                <th>유형명</th>
                                <td>
                                    <input className={knw.type_1} type="text" readonly></input>
                                    <button className={knw.dept_popup}><img src={Icon} alt=""></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th>조직명</th>
                                <td>
                                    <input className={knw.type_1} type="text" readonly></input>
                                    <button className={knw.dept_popup}><img src={Icon} alt=""></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th>엄무명</th>
                                <td>
                                    <input className={knw.type_1} type="text" readonly></input>
                                    <button className={knw.dept_popup}><img src={Icon} alt=""></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th>단어검색</th>
                                <td>
                                    <select className={knw.select_type}>
                                        <option>제목</option>
                                        <option>내용</option>
                                        <option>작성자</option>
                                    </select>
                                    <input className={knw.type_1} type="text" placeholder='검색어를 입력해 주세요.'></input>
                                    <button className={knw.search_btn}>검색</button>
                                    <button className={knw.reset_btn}>초기화</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                {/* list section */}
                <div className={knw.board_list}>

                    
                </div>
            </div>
        </div>
    )
}

export default KnwlgType1;