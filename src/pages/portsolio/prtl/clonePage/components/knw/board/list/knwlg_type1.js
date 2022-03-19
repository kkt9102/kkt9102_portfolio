import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import knw from '../../../../resource/css/knw.module.css';

import List1 from './knw_List/list1';
import BoardListBtn from '../board_list_btns';
import Paging from '../../paging_sample';

import Icon from '../../../../resource/img/knw/search_icon.png';

const KnwlgType1 = () => {
    return(
        <div className={knw.knwlg_right}>
            <HelmetProvider>
                <Helmet>
                    <title>kkt9102 Portfolio | 국민권익위원회 업무포털 혁신게시판 클론페이지</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="kkt9102 Portfolio | 국민권익위원회 업무포털 혁신게시판 클론페이지" />
                </Helmet>
            </HelmetProvider>
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
                                    <input className={knw.type_1} type="text" readOnly></input>
                                    <button className={knw.dept_popup}><img src={Icon} alt=""></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th>조직명</th>
                                <td>
                                    <input className={knw.type_1} type="text" readOnly></input>
                                    <button className={knw.dept_popup}><img src={Icon} alt=""></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th>엄무명</th>
                                <td>
                                    <input className={knw.type_1} type="text" readOnly></input>
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
            </div>

            {/* list section */}
            <div className={knw.board_list_section}>
                <div className={`${knw.list_header} flex flex_jc_sb`}>
                    <div className={`${knw.count} flex`}>전체<span>1,234</span>건</div>
                    <div className={knw.exceldown_btn}><i className='xi-file-download'></i>엑셀 다운로드</div>
                </div>

                <div className={knw.board_list}>
                    <table className={knw.table_type_01}>
                        {/* <caption></caption> */}
                        <colgroup>
                            <col width="50"></col>
                            <col width="30"></col>
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
                                <th>★</th>
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
                        <List1/>
                    </table>    
                </div>    
            </div>
            {/* paging */}
            <Paging/>
            {/* btn_box */}
            <BoardListBtn/>
        </div>
    )
}

export default KnwlgType1;