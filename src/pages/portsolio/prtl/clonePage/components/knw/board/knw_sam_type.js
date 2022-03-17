import React from 'react';

import knw from '../../../resource/css/knw.module.css';

import KnwHeader from '../header_knw';

import Paging from '../paging_sample';

const KnwSamType = () => {
    return(
        <div className={knw.knw_section}>
            <KnwHeader/>
            <div className={`${knw.knwlg_board_header} flex flex_jc_sb flex_ai_c mar_top_20`}>
                <div className={knw.knwlg_tit}>권익샘</div>
                <div className={knw.print}><i className="xi-print"></i></div>
            </div>

            <div className={knw.search_form}>
                <form>

                </form>
            </div>

            {/* list section */}
            <div className={knw.board_list_section}>
                <div className={`${knw.list_header} flex flex_jc_sb`}>
                    <div className={`${knw.count} flex`}>전체<span>1,234</span>건</div>
                    <div className={knw.exceldown_btn}><i className='xi-file-download'></i>엑셀 다운로드</div>
                </div>
            </div>

            <div className={knw.board_list}>
                <table className={knw.table_type_01}>
                    {/* <caption></caption> */}
                    <colgroup>
                        <col width="50"></col>
                        <col width="60"></col>
                        <col width="auto"></col>
                        <col width="50"></col>
                        <col width="80"></col>
                        <col width="120"></col>
                        <col width="50"></col>
                        <col width="50"></col>
                        <col width="50"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th className={knw.list_check_box}>
                                <input type="checkbox" name="list_check_all" id="list_check_all"></input>
                                <label htmlFor="list_check_all"></label>
                            </th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>첨부</th>
                            <th>작성자</th>
                            <th>등록일</th>
                            <th>의견</th>
                            <th>추천</th>
                            <th>조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>    
            </div>
            {/* btn_box */}
            {/* paging */}
            <Paging/>
        </div>
    )
}

export default KnwSamType;